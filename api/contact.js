// Vercel serverless function: POST /api/contact
// Hardened intake for the contact + newsletter forms. It never echoes user input back,
// never logs personal data, and rejects anything that is not a small same-origin JSON request.
//
// Delivery: set CONTACT_WEBHOOK_URL (e.g. a Slack/Make/Zapier/Resend relay) in Vercel env vars
// to forward validated submissions. Without it, valid submissions are accepted and discarded.

const MAX_BODY_BYTES = 8 * 1024
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map() // best-effort, per warm instance

const LIMITS = { firstName: 60, lastName: 60, email: 254, phone: 32, message: 2000, plan: 40 }
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i
const PHONE_RE = /^[+()\-.\s\d]{7,32}$/
const NAME_RE = /^[\p{L}\p{M}' .-]{1,60}$/u
const PLANS = new Set(['', 'individual', 'business', 'enterprise'])

function clean(value, max) {
  if (typeof value !== 'string') return ''
  // strip control chars (keep newlines/tabs for the message), trim edges
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max)
}

function rateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

function sameOrigin(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const origin = req.headers.origin
  if (!origin || !host) return false
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body
  let size = 0
  const chunks = []
  for await (const chunk of req) {
    size += chunk.length
    if (size > MAX_BODY_BYTES) throw Object.assign(new Error('too large'), { status: 413 })
    chunks.push(chunk)
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
}

function send(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return send(res, 405, { ok: false, error: 'Method not allowed' })
  }
  if (!String(req.headers['content-type'] || '').startsWith('application/json')) {
    return send(res, 415, { ok: false, error: 'Unsupported media type' })
  }
  if (Number(req.headers['content-length'] || 0) > MAX_BODY_BYTES) {
    return send(res, 413, { ok: false, error: 'Payload too large' })
  }
  if (!sameOrigin(req)) return send(res, 403, { ok: false, error: 'Forbidden' })

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) return send(res, 429, { ok: false, error: 'Too many requests. Please try again later.' })

  let raw
  try {
    raw = await readJson(req)
  } catch (err) {
    return send(res, err.status || 400, { ok: false, error: 'Invalid request' })
  }

  // Honeypot + minimum fill time (bots submit instantly)
  if (clean(raw.company, 100) !== '') return send(res, 202, { ok: true })
  const elapsed = Number(raw.elapsedMs)
  if (!Number.isFinite(elapsed) || elapsed < 2500) return send(res, 202, { ok: true })

  const kind = raw.kind === 'newsletter' ? 'newsletter' : 'contact'
  const data = Object.fromEntries(Object.entries(LIMITS).map(([k, max]) => [k, clean(raw[k], max)]))
  const errors = {}

  if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.'
  if (kind === 'contact') {
    if (!NAME_RE.test(data.firstName)) errors.firstName = 'Enter your first name.'
    if (!NAME_RE.test(data.lastName)) errors.lastName = 'Enter your last name.'
    if (!PHONE_RE.test(data.phone)) errors.phone = 'Enter a valid phone number.'
    if (!PLANS.has(data.plan)) errors.plan = 'Unknown plan.'
  }
  if (Object.keys(errors).length) return send(res, 422, { ok: false, errors })

  const webhook = process.env.CONTACT_WEBHOOK_URL
  if (webhook && webhook.startsWith('https://')) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind, ...data, receivedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(5000),
      })
    } catch {
      return send(res, 502, { ok: false, error: 'We could not send your message. Please call or email us.' })
    }
  }

  return send(res, 202, { ok: true })
}

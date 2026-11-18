// Client-side validation mirrors api/contact.js. The server re-validates everything;
// this only exists for fast, friendly feedback.
export const LIMITS = { firstName: 60, lastName: 60, email: 254, phone: 32, message: 2000 }
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i
const PHONE_RE = /^[+()\-.\s\d]{7,32}$/
const NAME_RE = /^[\p{L}\p{M}' .-]{1,60}$/u

export function validateContact(v) {
  const e = {}
  if (!NAME_RE.test(v.firstName.trim())) e.firstName = 'Please enter your first name.'
  if (!NAME_RE.test(v.lastName.trim())) e.lastName = 'Please enter your last name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (!PHONE_RE.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (v.message.length > LIMITS.message) e.message = `Please keep it under ${LIMITS.message} characters.`
  return e
}

export function validateEmail(email) {
  return EMAIL_RE.test(email.trim()) ? null : 'Please enter a valid email address.'
}

/** POST JSON to our own API. Never follows redirects, never sends cookies. */
export async function submitForm(payload) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'omit',
    redirect: 'error',
    cache: 'no-store',
    body: JSON.stringify(payload),
  })
  let body = {}
  try {
    body = await res.json()
  } catch {
    /* non-JSON (e.g. local dev without the API) */
  }
  if (!res.ok) {
    const err = new Error(body.error || 'Something went wrong. Please call or email us instead.')
    err.fieldErrors = body.errors
    throw err
  }
  return body
}

import { useEffect, useId, useRef, useState } from 'react'
import { PaperPlaneIcon } from './icons'
import { LIMITS, submitForm, validateEmail } from '../lib/forms'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', msg: '' })
  const startedAt = useRef(0)
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])
  const uid = useId()
  const inputId = `newsletter-email-${uid}`
  const statusId = `newsletter-status-${uid}`

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const error = validateEmail(email)
    if (error) return setStatus({ type: 'error', msg: error })
    setStatus({ type: 'loading', msg: '' })
    try {
      await submitForm({ kind: 'newsletter', email: email.trim(), company: form.get('company') || '', elapsedMs: Date.now() - startedAt.current })
      setEmail('')
      setStatus({ type: 'success', msg: 'Thanks for subscribing. Watch your inbox for our next briefing.' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.message })
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 xs:flex-row xs:items-center">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          maxLength={LIMITS.email}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter your email address"
          aria-invalid={status.type === 'error'}
          aria-describedby={statusId}
          className="h-14 min-w-0 flex-1 rounded-full border border-ink/10 bg-surface px-4 text-[16px] tracking-[-0.015em] text-ink outline-none transition-colors placeholder:text-ink focus:border-brand focus:bg-white"
        />
        {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="group inline-flex h-14 shrink-0 items-center justify-center gap-1 rounded-full bg-brand pl-[34px] pr-[30px] text-[16px] font-medium text-white transition-[background-color,transform] duration-300 hover:bg-brand-dark active:scale-[0.97] disabled:opacity-60"
        >
          {status.type === 'loading' ? 'Sending…' : 'Submit'}
          <PaperPlaneIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
      <p id={statusId} role="status" aria-live="polite" className={`min-h-5 text-[14px] ${status.type === 'error' ? 'text-red-600' : 'text-brand'}`}>
        {status.msg}
      </p>
    </form>
  )
}

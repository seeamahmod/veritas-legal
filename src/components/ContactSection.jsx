import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { contact, plans } from '../data/site'
import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from './icons'
import { Button, Reveal, RevealItem, SectionHeading, Stagger } from './ui'
import { LIMITS, submitForm, validateContact } from '../lib/forms'

const details = [
  { label: 'Email', Icon: EnvelopeIcon, lines: [contact.email], href: `mailto:${contact.email}` },
  { label: 'Phone', Icon: PhoneIcon, lines: [contact.phone], href: `tel:${contact.phoneHref}` },
  { label: 'Address', Icon: MapPinIcon, lines: contact.addressLines },
  { label: 'Office Hours', Icon: ClockIcon, lines: [contact.hours] },
]

const empty = { firstName: '', lastName: '', email: '', phone: '', message: '' }

function Field({ id, label, required, error, children }) {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <label htmlFor={id} className="text-[16px] font-medium leading-none tracking-[-0.015em] capitalize">
        {label} {required && <span className="text-[red]" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

const inputCls =
  'w-full rounded-[12px] border border-transparent bg-white p-[18px] text-[15px] leading-none tracking-[-0.015em] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/50 focus:border-brand focus:shadow-[0_0_0_4px_rgba(52,86,225,0.12)] aria-[invalid=true]:border-red-500'

export default function ContactSection({ headingTag = 'h2', bg = 'bg-white' }) {
  const [params] = useSearchParams()
  const planParam = params.get('plan')
  const plan = plans.some((p) => p.id === planParam) ? planParam : ''
  const planName = plans.find((p) => p.id === plan)?.name

  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', msg: '' })
  const startedAt = useRef(0)
  useEffect(() => {
    startedAt.current = Date.now()
  }, [])

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }))
  const field = (key) => ({
    id: `contact-${key}`,
    name: key,
    value: values[key],
    onChange: set(key),
    maxLength: LIMITS[key],
    'aria-invalid': Boolean(errors[key]),
    'aria-describedby': errors[key] ? `contact-${key}-error` : undefined,
  })

  async function onSubmit(e) {
    e.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`contact-${Object.keys(found)[0]}`)?.focus()
      return
    }
    setStatus({ type: 'loading', msg: '' })
    try {
      const form = new FormData(e.currentTarget)
      await submitForm({
        kind: 'contact',
        ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()])),
        plan,
        company: form.get('company') || '',
        elapsedMs: Date.now() - startedAt.current,
      })
      setValues(empty)
      setStatus({ type: 'success', msg: 'Thank you. A member of our team will contact you within one business day.' })
    } catch (err) {
      if (err.fieldErrors) setErrors(err.fieldErrors)
      setStatus({ type: 'error', msg: err.message })
    }
  }

  return (
    <section id="contact" className={`section-y ${bg}`} aria-labelledby="contact-title">
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          tag="Get In Touch"
          title={<span id="contact-title">Contact us for expert legal assistance</span>}
          text="We are available to assist with all your legal needs. Contact us anytime; we provide round-the-clock support."
          className="max-w-[564px]"
          titleClass="max-w-[486px]"
          textClass="max-w-[486px]"
        />

        <div className="flex flex-col gap-8">
          {headingTag === 'h2' ? (
            <Reveal as="h3" className="text-[26px] font-medium leading-none tracking-[-0.045em] sm:text-[32px]">
              Our Contact Details
            </Reveal>
          ) : null}
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {details.map(({ label, Icon, lines, href }) => {
              const Inner = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-[background-color,transform] duration-500 [@media(hover:hover)]:group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="text-[14px] font-medium uppercase leading-none tracking-[-0.015em]">{label}</span>
                    {lines.map((l) => (
                      <span key={l} className="text-[16px] leading-[1.3] tracking-[-0.015em]">
                        {l}
                      </span>
                    ))}
                  </span>
                </>
              )
              const cls =
                'group flex h-full items-center gap-3 rounded-[16px] bg-surface p-4 card-hover'
              return (
                <RevealItem key={label}>
                  {href ? (
                    <a href={href} className={cls}>
                      {Inner}
                    </a>
                  ) : (
                    <div className={cls}>{Inner}</div>
                  )}
                </RevealItem>
              )
            })}
          </Stagger>
        </div>

        <Reveal>
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6 rounded-[24px] bg-surface p-5 sm:p-6" aria-label="Contact form">
            {planName && (
              <p className="rounded-[12px] bg-brand/8 px-4 py-3 text-[15px] text-brand">
                You are enquiring about the <strong className="font-medium">{planName}</strong> plan.
              </p>
            )}
            <div className="flex flex-col gap-6 md:flex-row">
              <Field id="contact-firstName" label="First Name" required error={errors.firstName}>
                <input type="text" autoComplete="given-name" placeholder="Enter your first name" required className={inputCls} {...field('firstName')} />
              </Field>
              <Field id="contact-lastName" label="Last Name" required error={errors.lastName}>
                <input type="text" autoComplete="family-name" placeholder="Enter your last name" required className={inputCls} {...field('lastName')} />
              </Field>
            </div>
            <div className="flex flex-col gap-6 md:flex-row">
              <Field id="contact-email" label="Email" required error={errors.email}>
                <input type="email" inputMode="email" autoComplete="email" placeholder="Enter your email address" required className={inputCls} {...field('email')} />
              </Field>
              <Field id="contact-phone" label="Phone" required error={errors.phone}>
                <input type="tel" inputMode="tel" autoComplete="tel" placeholder="Enter your phone number" required className={inputCls} {...field('phone')} />
              </Field>
            </div>
            <Field id="contact-message" label="Message" error={errors.message}>
              <textarea rows={6} placeholder="Describe your legal needs..." className={`${inputCls} h-[174px] resize-none px-4 py-[14px] leading-[1.5]`} {...field('message')} />
            </Field>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
            <p className="text-[13px] leading-[1.5] text-ink/60">
              Submitting this form does not create an attorney-client relationship. Please don't include confidential details until we've spoken.
            </p>
            <Button type="submit" disabled={status.type === 'loading'} className="w-full">
              {status.type === 'loading' ? 'Sending…' : 'Submit'}
            </Button>
            <p role="status" aria-live="polite" className={`min-h-5 text-center text-[15px] ${status.type === 'error' ? 'text-red-600' : 'text-brand'}`}>
              {status.msg}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

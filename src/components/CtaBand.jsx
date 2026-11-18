import { contact } from '../data/site'
import { ButtonLink, Reveal } from './ui'
import { PhoneIcon } from './icons'

/** Closing call-to-action used at the end of inner pages. */
export default function CtaBand({ title = 'Ready to talk through your case?', text = 'Book a free, confidential 30-minute consultation with a Veritas attorney. No obligation, just clear next steps.' }) {
  return (
    <section className="container-x pb-6 lg:pb-0">
      <Reveal className="relative isolate overflow-hidden rounded-[24px] bg-brand px-6 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-[420px] rounded-full bg-white/10 blur-0 motion-safe:animate-[pulse_6s_ease-in-out_infinite]" />
        <div aria-hidden="true" className="absolute -bottom-40 left-1/3 -z-10 size-[360px] rounded-full bg-[#91b7f5]/25" />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-[640px] flex-col gap-4">
            <h2 className="text-balance text-[34px] font-medium capitalize leading-[1.15] tracking-[-0.045em] sm:text-[48px]">{title}</h2>
            <p className="text-[17px] leading-[1.5] text-white/80 sm:text-[18px]">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink to="/contact#contact" variant="white">
              Schedule a consult
            </ButtonLink>
            <a
              href={`tel:${contact.phoneHref}`}
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white/12 px-6 text-[16px] font-medium backdrop-blur-[8px] transition-colors hover:bg-white/20"
            >
              <PhoneIcon className="size-[18px]" /> {contact.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

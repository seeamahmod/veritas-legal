import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { contact, footerColumns } from '../data/site'
import { EnvelopeIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MapPinIcon, PhoneIcon, XIcon, YoutubeIcon } from './icons'
import logoDark from '../assets/home/logo-dark.svg'
import wordmark from '../assets/home/veritas-wordmark.svg'
import a1 from '../assets/home/footer-avatar-1.webp'
import a2 from '../assets/home/footer-avatar-2.webp'
import a3 from '../assets/home/footer-avatar-3.webp'
import a4 from '../assets/home/footer-avatar-4.webp'
import a5 from '../assets/home/footer-avatar-5.webp'
import NewsletterForm from './NewsletterForm'
import { Reveal } from './ui'

const YEAR = new Date().getFullYear()

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
  { label: 'X', href: 'https://x.com/', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: LinkedinIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: YoutubeIcon },
]

export default function Footer() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const wordY = useTransform(scrollYProgress, [0, 1], [120, 0])

  return (
    <footer ref={ref} className="relative overflow-hidden bg-white">
      <div className="container-x relative z-10 flex flex-col gap-14 pt-20 pb-16 lg:pt-[120px] lg:pb-20">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-[120px]">
          <Reveal className="flex flex-col gap-8 lg:w-[524px] lg:shrink-0">
            <div className="flex flex-col gap-6">
              <h2 className="h-display text-balance">Legal strategies crafted for your success</h2>
              <p className="text-[16px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">
                Stay informed with the latest legal insights via email.
              </p>
            </div>
            <NewsletterForm />
          </Reveal>

          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-8">
            {footerColumns.map((col, i) => (
              <Reveal key={col.title} delay={0.08 * (i + 1)} className="flex flex-col gap-6">
                <h3 className="text-[22px] font-medium leading-none tracking-[-0.015em] sm:text-[24px]">{col.title}</h3>
                <ul className="flex flex-col gap-5 text-[16px] leading-none tracking-[-0.015em] text-ink-soft">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="relative inline-block transition-colors hover:text-brand">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal delay={0.24} className="col-span-2 flex flex-col gap-6 sm:col-span-1">
              <h3 className="text-[22px] font-medium leading-none tracking-[-0.015em] sm:text-[24px]">Contact</h3>
              <ul className="flex flex-col gap-6 text-[16px] leading-none tracking-[-0.015em] text-ink-soft">
                <li>
                  <Link to="/contact" className="flex items-center gap-[10px] hover:text-brand">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <MapPinIcon className="size-[13.333px]" strokeWidth={2.7} />
                    </span>
                    Los Angeles Office
                  </Link>
                </li>
                <li>
                  <a href={`tel:${contact.footerPhoneHref}`} className="flex items-center gap-[10px] hover:text-brand">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <PhoneIcon className="size-[13.333px]" strokeWidth={2.7} />
                    </span>
                    {contact.footerPhone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-[10px] break-all hover:text-brand">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <EnvelopeIcon className="size-[13.333px]" strokeWidth={2.7} />
                    </span>
                    {contact.email}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal className="flex flex-col gap-8 rounded-[16px] bg-surface p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" aria-label="Veritas Legal home">
              <img src={logoDark} alt="Veritas Legal" width="120" height="36" className="h-9 w-[120px]" />
            </Link>
            <div className="flex items-center" aria-label="Some of our attorneys">
              {[a1, a2, a3, a4, a5].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  width="48"
                  height="48"
                  loading="lazy"
                  className={`size-9 rounded-full border-2 border-surface object-cover transition-transform duration-300 hover:z-10 hover:-translate-y-1 sm:size-12 ${i < 4 ? '-mr-3' : ''}`}
                />
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-ink/10" />
          <div className="flex flex-col-reverse items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] leading-[1.5] tracking-[-0.015em]">
              © {YEAR} Veritas Legal. All rights reserved. <span className="max-xs:block">| Designed by Seeam Ahmod</span>
            </p>
            <ul className="flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={`Veritas Legal on ${label}`}
                    className="block text-ink transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-brand"
                  >
                    <Icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Oversized "Veritas" wordmark, cropped by the page edge as in the design. */}
      <div aria-hidden="true" className="pointer-events-none relative mx-auto -mt-4 aspect-[1404/245] w-[97%] max-w-[1404px] overflow-hidden lg:-mt-8">
        <motion.img src={wordmark} alt="" style={{ y: wordY }} className="block w-full select-none" width="1404" height="360" />
      </div>
    </footer>
  )
}

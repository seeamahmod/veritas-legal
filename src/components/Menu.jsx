import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, contact } from '../data/site'
import { CloseIcon, EnvelopeIcon, PhoneIcon } from './icons'
import logoWhite from '../assets/home/logo-white.svg'
import { ButtonLink } from './ui'

/** Full-screen navigation overlay opened from the round menu button in every hero. */
export default function Menu({ open, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    const previouslyFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    const focusables = () => panelRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? []
    requestAnimationFrame(() => focusables()[0]?.focus())

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const items = [...focusables()]
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      previouslyFocused?.focus?.()
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          id="site-menu"
          // Solid colour (no full-screen backdrop blur) keeps the reveal at a steady 60fps.
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#0f1530] text-white will-change-[clip-path,opacity]"
          initial={{ clipPath: 'circle(3% at calc(100% - 60px) 60px)', opacity: 0 }}
          animate={{
            clipPath: 'circle(150% at calc(100% - 60px) 60px)',
            opacity: 1,
            transition: { clipPath: { duration: 1, ease: [0.76, 0, 0.24, 1] }, opacity: { duration: 0.4, ease: 'easeOut' } },
          }}
          exit={{
            clipPath: 'circle(3% at calc(100% - 60px) 60px)',
            opacity: 0,
            transition: { clipPath: { duration: 0.6, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.3, delay: 0.3 } },
          }}
        >
          <div className="container-x flex items-center justify-between pt-[24px] sm:pt-[47px]">
            <NavLink to="/" onClick={onClose} aria-label="Veritas Legal home">
              <img src={logoWhite} alt="Veritas Legal" width="120" height="36" className="h-9 w-[120px]" />
            </NavLink>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex size-[52px] items-center justify-center rounded-full bg-white/11 backdrop-blur-[8px] transition-colors hover:bg-white/20"
            >
              <CloseIcon className="size-[18px]" />
            </button>
          </div>

          <nav className="container-x flex flex-1 flex-col justify-center gap-10 py-12 lg:flex-row lg:items-end lg:justify-between">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { delay: 0.4 + i * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  }}
                  exit={{ opacity: 0, y: 8, transition: { duration: 0.2 } }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `group inline-flex items-baseline gap-4 py-1 text-[40px] font-medium leading-[1.1] tracking-[-0.04em] transition-colors sm:text-[56px] lg:text-[64px] ${
                        isActive ? 'text-white' : 'text-white/45 hover:text-white'
                      }`
                    }
                  >
                    <span className="text-[14px] font-normal tracking-normal text-white/40 tabular-nums">0{i + 1}</span>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-col gap-6 lg:max-w-[340px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <p className="text-[18px] leading-[1.5] text-white/70">
                Strategic counsel across corporate, immigration and litigation matters, from people who pick up the phone.
              </p>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-white/85 hover:text-white">
                <EnvelopeIcon className="size-5" /> {contact.email}
              </a>
              <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-3 text-white/85 hover:text-white">
                <PhoneIcon className="size-5" /> {contact.phone}
              </a>
              <ButtonLink to="/contact" onClick={onClose} className="self-start">
                Schedule a consult
              </ButtonLink>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import logoWhite from '../assets/home/logo-white.svg'
import { MenuIcon } from './icons'
import Menu from './Menu'

/**
 * Rounded image card with the logo + menu button, exactly like the Figma hero.
 * Shared by the home hero and every inner-page hero so all pages stay consistent.
 */
export default function HeroFrame({ image, imageAlt = '', imagePosition = 'center', minHeight, children, imgClassName = '', tint = false }) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 140])
  const scale = useTransform(scrollY, [0, 900], [1.04, 1.12])

  return (
    <header className="p-2 sm:p-3">
      <div
        className={`relative isolate flex flex-col overflow-hidden rounded-[20px] px-5 pt-6 pb-10 sm:rounded-[24px] sm:px-[35px] sm:pt-[35px] sm:pb-[72px] ${minHeight}`}
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          {!image && (
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_0%,#3456e1_0%,#1b2a6b_45%,#0d1330_100%)]">
              <div className="absolute -right-32 -top-32 size-[520px] rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 size-[320px] rounded-full border border-white/10" />
            </div>
          )}
          {image && <motion.img
            src={image}
            alt={imageAlt}
            fetchPriority="high"
            decoding="async"
            style={{ y, scale, objectPosition: imagePosition }}
            className={`absolute inset-0 size-full object-cover ${imgClassName}`}
          />}
          {image && tint && <div className="absolute inset-0 bg-[#0d1330]/35" />}
          {image && <div className="absolute inset-0 bg-[linear-gradient(255.8deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.55)_80%)] max-sm:bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.8)_100%)]" />}
        </div>

        <div className="flex items-center justify-between">
          <Link to="/" aria-label="Veritas Legal home" className="transition-opacity hover:opacity-80">
            <img src={logoWhite} alt="Veritas Legal" width="120" height="36" className="h-9 w-[120px]" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            className="group flex size-[52px] items-center justify-center rounded-full bg-white/11 text-white backdrop-blur-[8px] transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
          >
            <MenuIcon className="size-[18px] transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {children}
      </div>
      <Menu open={open} onClose={close} />
    </header>
  )
}

import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import star from '../assets/home/star.svg'
import { ArrowUpRightIcon } from './icons'

const ease = [0.22, 1, 0.36, 1]

/** Fades + lifts content into view once. Honors prefers-reduced-motion via <MotionConfig>. */
export function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease, delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/** Staggered children container; pair with <RevealItem>. */
export function Stagger({ as = 'div', className, children, gap = 0.08, ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export function RevealItem({ as = 'div', className, children, ...rest }) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export function SectionTag({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <img src={star} alt="" width="16" height="16" className="size-4 motion-safe:animate-[spin_8s_linear_infinite]" />
      <p className={`text-[14px] sm:text-[16px] font-medium uppercase leading-[1.1] tracking-[-0.015em] ${light ? 'text-white' : 'text-ink'}`}>
        {children}
      </p>
      <img src={star} alt="" width="16" height="16" className="size-4 motion-safe:animate-[spin_8s_linear_infinite]" />
    </div>
  )
}

export function SectionHeading({ tag, title, text, align = 'center', className = '', titleClass = '', textClass = '' }) {
  const center = align === 'center'
  return (
    <Reveal className={`flex flex-col gap-6 ${center ? 'items-center text-center mx-auto' : 'items-start'} ${className}`}>
      {tag && <SectionTag>{tag}</SectionTag>}
      <div className={`flex flex-col gap-4 ${center ? 'items-center' : ''}`}>
        <h2 className={`h-display text-balance ${titleClass}`}>{title}</h2>
        {text && <p className={`text-[16px] sm:text-[18px] leading-[1.5] tracking-[-0.015em] text-pretty ${textClass}`}>{text}</p>}
      </div>
    </Reveal>
  )
}

const btnBase =
  'group inline-flex h-[52px] items-center justify-center gap-1 rounded-full pl-[26px] pr-[22px] text-[16px] font-medium capitalize leading-none tracking-[-0.015em] whitespace-nowrap transition-[background-color,color,transform,box-shadow] duration-300 active:scale-[0.97]'
const btnVariants = {
  primary: 'bg-brand text-white hover:bg-brand-dark hover:shadow-[0_10px_30px_-10px_rgba(52,86,225,0.7)]',
  glass: 'bg-white/11 text-white backdrop-blur-[8px] hover:bg-white/20',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
  white: 'bg-white text-brand hover:bg-white/90',
}

/** Internal link styled as a button. Uses react-router so no full reloads. */
export function ButtonLink({ to, variant = 'primary', icon = true, className = '', children, ...rest }) {
  return (
    <Link to={to} className={`${btnBase} ${btnVariants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  )
}

export function Button({ variant = 'primary', icon = true, className = '', children, ...rest }) {
  return (
    <button className={`${btnBase} ${btnVariants[variant]} disabled:opacity-60 disabled:pointer-events-none ${className}`} {...rest}>
      <span>{children}</span>
      {icon && <ArrowUpRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  )
}

/** White circular icon badge used on feature cards. */
export function IconBadge({ icon: Icon, size = 'lg', tone = 'white' }) {
  const sizes = { lg: 'size-[64px] sm:size-[72px] [&_svg]:size-[28px] sm:[&_svg]:size-[30px]', md: 'size-[56px] [&_svg]:size-[27px]', sm: 'size-8 [&_svg]:size-4' }
  const tones = { white: 'bg-white text-brand', brand: 'bg-brand text-white' }
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-105 ${sizes[size]} ${tones[tone]}`}>
      <Icon />
    </span>
  )
}

/** Animated number that counts up when scrolled into view. */
export function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const controls = animate(0, value, { duration: reduce ? 0 : 1.6, ease, onUpdate: (v) => setDisplay(Math.round(v)) })
    return () => controls.stop()
  }, [inView, value])
  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {display}
      {suffix}
    </span>
  )
}

/** Image that eases in once loaded, avoiding a hard pop. */
export function FadeImage({ className = '', ...props }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <img
      decoding="async"
      ref={(el) => {
        if (el?.complete && el.naturalWidth && !loaded) setLoaded(true)
      }}
      onLoad={() => setLoaded(true)}
      className={`transition-[opacity,transform] duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...props}
    />
  )
}

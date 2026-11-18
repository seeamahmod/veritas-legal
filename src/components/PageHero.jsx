import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroFrame from './HeroFrame'
import { SectionTag } from './ui'

const ease = [0.22, 1, 0.36, 1]
const item = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
})

/** Inner-page hero: same frame as the home hero, shorter, with a breadcrumb. */
export default function PageHero({ image, imagePosition, eyebrow, title, text, crumb, children }) {
  return (
    <HeroFrame image={image} imagePosition={imagePosition} tint minHeight="min-h-[520px] sm:min-h-[600px] lg:min-h-[640px]">
      <div className="mt-auto flex max-w-[760px] flex-col gap-6 pt-24">
        <motion.nav aria-label="Breadcrumb" {...item(0.05)}>
          <ol className="flex items-center gap-2 text-[14px] text-white/70">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">
              {crumb}
            </li>
          </ol>
        </motion.nav>
        {eyebrow && (
          <motion.div {...item(0.1)}>
            <SectionTag light>{eyebrow}</SectionTag>
          </motion.div>
        )}
        <motion.h1
          {...item(0.18)}
          className="text-balance text-[42px] font-medium capitalize leading-[1.05] tracking-[-0.045em] text-white sm:text-[56px] lg:text-[72px]"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p {...item(0.28)} className="max-w-[620px] text-[17px] leading-[1.5] tracking-[-0.015em] text-white/80 sm:text-[20px]">
            {text}
          </motion.p>
        )}
        {children && <motion.div {...item(0.36)}>{children}</motion.div>}
      </div>
    </HeroFrame>
  )
}

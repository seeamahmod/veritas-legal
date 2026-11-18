import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PlusIcon } from './icons'
import { RevealItem, Stagger } from './ui'

/**
 * Accessible accordion used for FAQs. One item open at a time (or none).
 * `card` sets the card background so it always contrasts with its section
 * (white cards on grey sections, grey cards on white sections).
 */
export default function FaqAccordion({ items, card = 'bg-surface', badge = 'bg-white', defaultOpen = 0, size = 'md', className = '' }) {
  const [open, setOpen] = useState(defaultOpen)
  const uid = useId()
  const lg = size === 'lg'

  return (
    <Stagger className={`flex flex-col gap-4 ${className}`}>
      {items.map((f, i) => {
        const isOpen = open === i
        const btnId = `${uid}-btn-${i}`
        const panelId = `${uid}-panel-${i}`
        return (
          <RevealItem key={f.q} className={`card-hover group rounded-[20px] ${card} ${lg ? 'sm:rounded-[24px]' : ''}`}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className={`flex w-full items-center justify-between gap-6 p-5 text-left font-medium capitalize leading-[1.3] tracking-[-0.015em] sm:p-6 ${
                  lg ? 'text-[19px] sm:text-[22px] lg:text-[24px] lg:leading-[1.2]' : 'text-[18px] sm:text-[20px]'
                }`}
              >
                {f.q}
                <span
                  aria-hidden="true"
                  className={`flex shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    lg ? 'size-10 sm:size-12' : 'size-9'
                  } ${isOpen ? 'rotate-45 bg-brand text-white' : `${badge} text-brand`}`}
                >
                  <PlusIcon className={lg ? 'size-[18px]' : 'size-4'} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={`px-5 pb-6 leading-[1.5] tracking-[-0.015em] text-ink-soft sm:px-6 ${
                      lg ? 'max-w-[760px] text-[17px] sm:text-[18px]' : 'text-[17px] leading-[1.6]'
                    }`}
                  >
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealItem>
        )
      })}
    </Stagger>
  )
}

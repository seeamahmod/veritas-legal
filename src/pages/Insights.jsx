import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { FadeImage, Reveal, SectionHeading } from '../components/ui'
import { ArrowUpRightIcon, CalendarIcon } from '../components/icons'
import NewsletterForm from '../components/NewsletterForm'
import { posts } from '../data/content'
import { formatDate } from '../lib/format'
import hero from '../assets/pages/insights-hero.webp'


export default function Insights() {
  const categories = useMemo(() => ['All', ...new Set(posts.map((p) => p.category))], [])
  const [cat, setCat] = useState('All')
  const [featured, ...rest] = posts
  const list = cat === 'All' ? rest : posts.filter((p) => p.category === cat)

  return (
    <>
      <title>Insights | Veritas Legal</title>
      <meta name="description" content="Practical legal guides and analysis from the attorneys at Veritas Legal." />
      <PageHero
        image={hero}
        crumb="Insights"
        eyebrow="Legal Insights"
        title="Clear thinking on the law that affects you"
        text="Plain-language guides, regulatory updates and analysis from our attorneys."
      />

      <main id="main">
        {cat === 'All' && (
          <section className="bg-surface pt-[72px] lg:pt-[120px]">
            <div className="container-x">
              <Reveal>
                <Link to={`/insights/${featured.slug}`} className="group grid grid-cols-1 overflow-hidden rounded-[24px] bg-white lg:grid-cols-2">
                  <div className="overflow-hidden">
                    <FadeImage src={featured.img} alt={featured.alt} className="aspect-[16/10] size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05] lg:aspect-auto" />
                  </div>
                  <div className="flex flex-col justify-center gap-5 p-6 sm:p-10 lg:p-14">
                    <span className="self-start rounded-full bg-brand px-3 py-1 text-[13px] font-medium text-white">Featured · {featured.category}</span>
                    <h2 className="text-balance text-[28px] font-medium leading-[1.2] tracking-[-0.045em] sm:text-[40px]">{featured.title}</h2>
                    <p className="text-[17px] leading-[1.6] text-ink-soft sm:text-[18px]">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-[14px] text-ink-soft">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="size-4" /> {formatDate(featured.date)}
                      </span>
                      <span>{featured.read}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 font-medium text-brand">
                      Read article <ArrowUpRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </section>
        )}

        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading align="left" tag="Latest Articles" title="From our attorneys" />
              <div role="tablist" aria-label="Filter articles by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={cat === c}
                    onClick={() => setCat(c)}
                    className={`shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${cat === c ? 'bg-brand text-white' : 'bg-white hover:bg-ink hover:text-white'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {list.map((p) => (
                  <motion.article
                    layout
                    key={p.slug}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link
                      to={`/insights/${p.slug}`}
                      className="group flex h-full flex-col gap-5 rounded-[24px] bg-white p-4 card-hover"
                    >
                      <div className="overflow-hidden rounded-[18px]">
                        <FadeImage src={p.img} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
                      </div>
                      <div className="flex flex-1 flex-col gap-3 px-2 pb-2">
                        <div className="flex items-center justify-between text-[13px] text-ink-soft">
                          <span className="rounded-full bg-surface px-3 py-1 font-medium text-brand">{p.category}</span>
                          <span>{p.read}</span>
                        </div>
                        <h3 className="text-[22px] font-medium leading-[1.25] tracking-[-0.03em]">{p.title}</h3>
                        <p className="text-[16px] leading-[1.55] text-ink-soft">{p.excerpt}</p>
                        <span className="mt-auto pt-2 text-[14px] text-ink-soft">{formatDate(p.date)}</span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section className="bg-surface pb-[72px] lg:pb-[120px]">
          <div className="container-x">
            <Reveal className="flex flex-col gap-8 rounded-[24px] bg-white p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
              <div className="flex max-w-[520px] flex-col gap-3">
                <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-0.045em] sm:text-[36px]">Get our monthly legal briefing</h2>
                <p className="text-[17px] leading-[1.5] text-ink-soft">One email a month. Practical, plain-language, and never shared with anyone.</p>
              </div>
              <div className="w-full lg:max-w-[480px]">
                <NewsletterForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  )
}

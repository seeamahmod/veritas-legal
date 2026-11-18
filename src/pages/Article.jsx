import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { Reveal } from '../components/ui'
import { ArrowRightIcon, CalendarIcon } from '../components/icons'
import { posts } from '../data/content'
import { formatDate } from '../lib/format'
import NotFound from './NotFound'

export default function Article() {
  const { slug } = useParams()
  // Slug is only ever compared against our own static list, never rendered as HTML.
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />
  const idx = posts.indexOf(post)
  const next = posts[(idx + 1) % posts.length]

  return (
    <>
      <title>{`${post.title} | Veritas Legal`}</title>
      <meta name="description" content={post.excerpt} />
      <PageHero crumb="Insights" eyebrow={post.category} title={post.title} text={post.excerpt}>
        <div className="flex items-center gap-4 text-[14px] text-white/80">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="size-4" /> {formatDate(post.date)}
          </span>
          <span>{post.read}</span>
        </div>
      </PageHero>

      <main id="main" className="bg-white">
        <article className="container-x section-y">
          <div className="mx-auto flex max-w-[720px] flex-col gap-6">
            {post.body.map((para, i) => (
              <Reveal as="p" key={i} delay={i * 0.04} className={`leading-[1.75] tracking-[-0.01em] ${i === 0 ? 'text-[20px] text-ink sm:text-[22px]' : 'text-[17px] text-ink-soft sm:text-[18px]'}`}>
                {para}
              </Reveal>
            ))}
            <Reveal className="mt-6 rounded-[20px] bg-surface p-6 text-[15px] leading-[1.6] text-ink-soft">
              This article is general information, not legal advice. Every situation is different, so please speak with an attorney about your
              specific circumstances.
            </Reveal>
            <div className="mt-4 flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/insights" className="text-[16px] font-medium text-ink-soft hover:text-brand">
                ← All insights
              </Link>
              <Link to={`/insights/${next.slug}`} className="group inline-flex items-center gap-2 text-[16px] font-medium text-brand">
                Next: {next.title}
                <ArrowRightIcon className="size-[18px] shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </article>
        <div className="pb-[72px] lg:pb-[120px]">
          <CtaBand title="Have a question about this topic?" />
        </div>
      </main>
    </>
  )
}

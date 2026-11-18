import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { ButtonLink, CountUp, FadeImage, IconBadge, Reveal, RevealItem, SectionHeading, SectionTag, Stagger } from '../components/ui'
import { AwardIcon, BalanceIcon, HandshakeIcon, QuoteIcon, ShieldIcon } from '../components/icons'
import { stats } from '../data/site'
import hero from '../assets/pages/about-hero.webp'
import story from '../assets/pages/about-story.webp'
import office from '../assets/pages/about-office.webp'

const values = [
  { Icon: BalanceIcon, title: 'Integrity First', text: 'We give honest assessments, even when they are not what clients hoped to hear. Trust is earned in the hard conversations.' },
  { Icon: ShieldIcon, title: 'Fierce Protection', text: 'We guard our clients’ interests and confidential information as if they were our own, inside and outside the courtroom.' },
  { Icon: HandshakeIcon, title: 'Genuine Partnership', text: 'Every matter is staffed by a partner who knows your name, your goals and your phone number.' },
  { Icon: AwardIcon, title: 'Relentless Excellence', text: 'We measure ourselves by outcomes. Preparation, precision and persistence are non-negotiable.' },
]

const timeline = [
  { year: '2006', title: 'Founded in Los Angeles', text: 'Three attorneys open Veritas Legal with a simple promise: big-firm skill, small-firm attention.' },
  { year: '2011', title: 'Immigration practice launches', text: 'We expand to serve families and employers navigating an increasingly complex immigration system.' },
  { year: '2016', title: 'First $50M verdict', text: 'Our litigation team secures a landmark commercial verdict that puts the firm on the national map.' },
  { year: '2021', title: 'Secure client portal', text: 'We introduce an encrypted client portal so documents and updates never travel by insecure email.' },
  { year: '2026', title: '50+ attorneys strong', text: 'Today we serve clients in more than 30 countries across six core practice areas.' },
]

const stories = [
  {
    quote: 'They untangled a cross-border acquisition that two other firms said would take a year. We closed in four months.',
    name: 'Founder, logistics start-up',
    tag: 'Corporate',
  },
  {
    quote: 'After three denied applications, Veritas found the right visa category and my family was reunited within the year.',
    name: 'Software engineer, Seattle',
    tag: 'Immigration',
  },
  {
    quote: 'Calm, prepared and relentless in mediation. We settled on our terms without ever setting foot in court.',
    name: 'Operations director, manufacturing',
    tag: 'Dispute Resolution',
  },
]

export default function About() {
  return (
    <>
      <title>Our Firm | Veritas Legal</title>
      <meta name="description" content="Founded on integrity, advocacy and justice, Veritas Legal has served clients for two decades. Meet the firm behind the results." />
      <PageHero
        image={hero}
        crumb="Our Firm"
        eyebrow="About Veritas"
        title="Two decades of principled advocacy"
        text="We are a team of trial lawyers, dealmakers and advisors united by one idea: clients deserve clarity, candor and results."
      >
        <ButtonLink to="/attorneys" variant="glass">
          Meet our attorneys
        </ButtonLink>
      </PageHero>

      <main id="main">
        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12 lg:flex-row lg:items-center">
            <Reveal className="overflow-hidden rounded-[24px] sm:rounded-[32px] lg:w-1/2">
              <FadeImage
                src={story}
                alt="Veritas attorneys preparing a case around a conference table"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-8 lg:w-1/2">
              <SectionTag>Our Story</SectionTag>
              <h2 className="h-display text-balance">Built on the belief that law should be understood</h2>
              <div className="flex flex-col gap-4 text-[17px] leading-[1.6] tracking-[-0.015em] text-ink-soft sm:text-[18px]">
                <p>
                  Veritas, Latin for truth, was founded in 2006 by three attorneys who were tired of watching clients leave meetings more confused than when
                  they arrived. They built a firm where every strategy is explained in plain language and every decision belongs to the client.
                </p>
                <p>
                  Twenty years later that philosophy still guides us. We have grown into a full-service firm, but every matter is still led by a partner who
                  answers the phone.
                </p>
              </div>
              <Stagger as="dl" className="grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <RevealItem key={s.label} className="flex flex-col-reverse gap-2">
                    <dt className="text-[14px] leading-tight text-ink-soft">{s.label}</dt>
                    <dd className="text-[30px] font-medium leading-none">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </dd>
                  </RevealItem>
                ))}
              </Stagger>
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="What We Stand For" title="Values that guide every case" text="Four commitments every Veritas attorney makes to every client." className="max-w-[600px]" />
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map(({ Icon, title, text }) => (
                <RevealItem
                  key={title}
                  className="group flex flex-col gap-6 rounded-[24px] bg-surface p-6 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(42,42,42,0.25)]"
                >
                  <IconBadge icon={Icon} />
                  <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.015em]">{title}</h3>
                  <p className="text-[17px] leading-[1.5] text-ink-soft">{text}</p>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="Milestones" title="Our journey so far" className="max-w-[600px]" />
            <ol className="relative mx-auto flex w-full max-w-[860px] flex-col gap-10 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-ink/15 md:before:left-1/2">
              {timeline.map((t, i) => (
                <Reveal
                  as="li"
                  key={t.year}
                  className={`relative grid grid-cols-[24px_1fr] gap-5 md:grid-cols-2 md:gap-14 ${i % 2 ? 'md:[&>div]:col-start-2' : 'md:[&>div]:text-right'}`}
                >
                  <span className="relative z-10 mt-1.5 size-6 rounded-full border-4 border-surface bg-brand md:absolute md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />
                  <div className="flex flex-col gap-2 rounded-[20px] bg-white p-6 transition-shadow duration-500 hover:shadow-[0_20px_50px_-30px_rgba(42,42,42,0.3)]">
                    <span className="text-[14px] font-medium tracking-[0.08em] text-brand">{t.year}</span>
                    <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.015em]">{t.title}</h3>
                    <p className="text-[16px] leading-[1.5] text-ink-soft">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-x flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
            <Reveal className="flex flex-col gap-6 lg:w-1/2">
              <SectionTag>Our Office</SectionTag>
              <h2 className="h-display text-balance">Rooted in Los Angeles, trusted worldwide</h2>
              <p className="text-[17px] leading-[1.6] text-ink-soft sm:text-[18px]">
                Our downtown headquarters is minutes from the federal and superior courts. With secure video consultations and a multilingual team, we
                represent clients across the United States and in more than 30 countries.
              </p>
              <ul className="grid grid-cols-1 gap-3 text-[17px] xs:grid-cols-2">
                {['English, Spanish, Mandarin, Hindi', 'Secure video consultations', 'Encrypted client portal', 'Same-week appointments'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink to="/contact#contact" className="self-start">
                Visit or call us
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden rounded-[24px] sm:rounded-[32px] lg:w-1/2">
              <FadeImage
                src={office}
                alt="Downtown Los Angeles office towers"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
              />
            </Reveal>
          </div>
        </section>

        <section id="stories" className="section-y scroll-mt-6 bg-surface">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="Success Stories" title="Results our clients talk about" text="Client names are withheld to protect confidentiality." className="max-w-[600px]" />
            <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stories.map((s) => (
                <RevealItem
                  as="figure"
                  key={s.tag}
                  className="group flex flex-col justify-between gap-10 rounded-[24px] bg-white p-6 transition-[transform,background-color,color] duration-500 hover:-translate-y-1.5 hover:bg-brand hover:text-white sm:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <QuoteIcon className="size-9 text-brand transition-colors duration-500 group-hover:text-white" />
                    <blockquote className="text-[19px] leading-[1.5] tracking-[-0.015em] sm:text-[20px]">“{s.quote}”</blockquote>
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 text-[15px]">
                    <span className="opacity-75">{s.name}</span>
                    <span className="rounded-full bg-surface px-3 py-1 text-[13px] font-medium text-brand">{s.tag}</span>
                  </figcaption>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </section>

        <div className="bg-surface pb-[72px] lg:pb-[120px]">
          <CtaBand />
        </div>
      </main>
    </>
  )
}

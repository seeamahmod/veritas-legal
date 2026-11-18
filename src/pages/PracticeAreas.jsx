import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import FaqAccordion from '../components/FaqAccordion'
import { ButtonLink, FadeImage, IconBadge, Reveal, SectionHeading } from '../components/ui'
import { CircleCheckIcon, FileCheckIcon, FileContentIcon, GavelIcon, GlobeIcon, LockIcon, UsersIcon } from '../components/icons'
import { practiceAreas } from '../data/content'
import hero from '../assets/pages/practice-hero.webp'

const icons = { fileCheck: FileCheckIcon, globe: GlobeIcon, gavel: GavelIcon, fileContent: FileContentIcon, lock: LockIcon, users: UsersIcon }

const faqs = [
  { q: 'How much does an initial consultation cost?', a: 'Your first 30-minute consultation is free and confidential. We will explain your options and give you a clear estimate before any work begins.' },
  { q: 'Do you offer flat-fee arrangements?', a: 'Yes. Many matters such as trademark filings, visa petitions and estate plans are handled on a transparent flat fee. Litigation is typically billed hourly or on a hybrid basis.' },
  { q: 'Can you represent clients outside California?', a: 'Our attorneys are licensed in several states and federal courts, and immigration law is federal. For local matters elsewhere we work with trusted co-counsel.' },
  { q: 'How do you keep my information secure?', a: 'Documents are exchanged through our encrypted client portal, never plain email. Access is restricted to your legal team and protected by multi-factor authentication.' },
]

function Faq() {
  return (
    <section className="section-y bg-white">
      <div className="container-x flex flex-col gap-12 lg:flex-row lg:gap-20">
        <SectionHeading align="left" tag="FAQ" title="Questions we hear every week" text="Can’t find what you need? Our intake team replies within one business day." className="lg:w-[38%]" />
        <FaqAccordion items={faqs} className="flex-1" />
      </div>
    </section>
  )
}

export default function PracticeAreas() {
  return (
    <>
      <title>Practice Areas | Veritas Legal</title>
      <meta name="description" content="Corporate law, immigration, litigation, estate planning, intellectual property and employment law from Veritas Legal." />
      <PageHero
        image={hero}
        imagePosition="center 35%"
        crumb="Practice Areas"
        eyebrow="Our Expertise"
        title="Counsel for every chapter of life and business"
        text="Six focused practice groups, one integrated team. Wherever your matter leads, the right specialist is already down the hall."
      />

      <main id="main">
        <nav aria-label="Practice areas" className="sticky top-0 z-30 border-b border-ink/5 bg-white/85 backdrop-blur-lg">
          <ul className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            {practiceAreas.map((a) => (
              <li key={a.id} className="shrink-0">
                <a href={`#${a.id}`} className="block rounded-full bg-surface px-4 py-2 text-[14px] font-medium transition-colors hover:bg-brand hover:text-white">
                  {a.title.split(' &')[0]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading
              tag="Areas of Practice"
              title="How we can help"
              text="Each practice group is led by a partner with at least a decade of experience in that field."
              className="max-w-[560px]"
            />
            <div className="flex flex-col gap-6">
              {practiceAreas.map((a, i) => {
                const Icon = icons[a.icon]
                return (
                  <Reveal
                    as="article"
                    key={a.id}
                    id={a.id}
                    className={`group flex scroll-mt-24 flex-col gap-6 rounded-[24px] bg-white p-4 sm:p-6 lg:flex-row lg:items-center lg:gap-12 ${i % 2 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className="overflow-hidden rounded-[18px] lg:w-[46%] lg:shrink-0">
                      <FadeImage src={a.img} alt={a.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]" />
                    </div>
                    <div className="flex flex-col gap-6 lg:py-4">
                      <div className="flex items-center gap-4">
                        <IconBadge icon={Icon} size="md" tone="brand" />
                        <span className="text-[14px] font-medium tracking-[0.08em] text-brand">0{i + 1}</span>
                      </div>
                      <h2 className="text-[28px] font-medium capitalize leading-[1.2] tracking-[-0.045em] sm:text-[36px]">{a.title}</h2>
                      <p className="text-[17px] leading-[1.6] text-ink-soft sm:text-[18px]">{a.summary}</p>
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {a.services.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-[16px] leading-[1.4]">
                            <CircleCheckIcon className="mt-px size-5 shrink-0 text-brand" />
                            {s}
                          </li>
                        ))}
                      </ul>
                      <ButtonLink to="/contact#contact" variant="outline" className="mt-2 self-start">
                        Discuss your matter
                      </ButtonLink>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <Faq />

        <section className="bg-white pb-[72px] lg:pb-[120px]">
          <CtaBand title="Not sure which practice fits?" text="Tell us what happened. We will route you to the right attorney within one business day." />
        </section>
      </main>
    </>
  )
}

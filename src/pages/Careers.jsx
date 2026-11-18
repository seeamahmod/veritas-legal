import PageHero from '../components/PageHero'
import { FadeImage, IconBadge, Reveal, RevealItem, SectionHeading, SectionTag, Stagger } from '../components/ui'
import { ArrowUpRightIcon, AwardIcon, BrainIcon, ClockIcon, GlobeIcon, HeadsetIcon, MapPinIcon, ShieldIcon, SuitcaseIcon } from '../components/icons'
import { jobs } from '../data/content'
import { contact } from '../data/site'
import hero from '../assets/pages/careers-hero.webp'
import culture from '../assets/pages/careers-culture.webp'

const perks = [
  { Icon: AwardIcon, title: 'Partner-track mentorship', text: 'Every associate is paired with a partner mentor and a transparent path to promotion.' },
  { Icon: ClockIcon, title: 'Sustainable hours', text: 'Hybrid schedules, protected vacation and a billable target that leaves room for a life.' },
  { Icon: BrainIcon, title: 'Learning budget', text: '$5,000 a year for CLE, conferences, languages and certifications of your choosing.' },
  { Icon: ShieldIcon, title: 'Full health coverage', text: 'Premium medical, dental and vision for you and your dependents, fully paid.' },
  { Icon: GlobeIcon, title: 'Pro bono matters', text: 'Up to 100 hours a year credited toward your target for meaningful pro bono work.' },
  { Icon: HeadsetIcon, title: 'Modern tooling', text: 'Secure, modern practice software so you spend time on law, not paperwork.' },
]

export default function Careers() {
  return (
    <>
      <title>Careers | Veritas Legal</title>
      <meta name="description" content="Build your legal career at Veritas Legal. Explore open positions for attorneys, paralegals and legal operations." />
      <PageHero
        image={hero}
        crumb="Careers"
        eyebrow="Join Veritas"
        title="Do the best work of your career"
        text="We hire curious, principled people and give them the support to grow into exceptional advocates."
      />

      <main id="main">
        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12 lg:flex-row lg:items-center">
            <Reveal className="flex flex-col gap-6 lg:w-1/2">
              <SectionTag>Life at Veritas</SectionTag>
              <h2 className="h-display text-balance">A firm where good people do great work</h2>
              <p className="text-[17px] leading-[1.6] text-ink-soft sm:text-[18px]">
                We are big enough to handle landmark matters and small enough that everyone knows your name. Associates work directly with clients from day
                one, and partners are measured as much on the people they develop as on the matters they win.
              </p>
              <p className="text-[17px] leading-[1.6] text-ink-soft sm:text-[18px]">
                We are committed to building a team that reflects the communities we serve, and we welcome applicants of every background.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden rounded-[24px] sm:rounded-[32px] lg:w-1/2">
              <FadeImage src={culture} alt="Veritas team members collaborating in the office" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]" />
            </Reveal>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="Benefits" title="We invest in our people" className="max-w-[560px]" />
            <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map(({ Icon, title, text }) => (
                <RevealItem key={title} className="group flex flex-col gap-5 rounded-[24px] bg-surface p-6 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(42,42,42,0.25)]">
                  <IconBadge icon={Icon} />
                  <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.015em]">{title}</h3>
                  <p className="text-[17px] leading-[1.5] text-ink-soft">{text}</p>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="positions" className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="Open Positions" title="Current opportunities" text={`Don’t see your role? Send your CV to ${contact.email}.`} className="max-w-[600px]" />
            <Stagger as="ul" className="flex flex-col gap-4">
              {jobs.map((j) => (
                <RevealItem as="li" key={j.title}>
                  <a
                    href={`mailto:${contact.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                    className="group flex flex-col gap-4 rounded-[20px] bg-white p-5 transition-[background-color,color,transform] duration-500 hover:bg-brand hover:text-white sm:p-6 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[20px] font-medium leading-[1.25] tracking-[-0.02em] sm:text-[22px]">{j.title}</h3>
                      <p className="text-[16px] leading-[1.5] opacity-75">{j.summary}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-[14px] md:shrink-0">
                      <span className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-ink">
                        <MapPinIcon className="size-4 text-brand" /> {j.location}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-surface px-3 py-1.5 text-ink">
                        <SuitcaseIcon className="size-4 text-brand" /> {j.type}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white transition-colors duration-500 group-hover:bg-white group-hover:text-brand">
                        <ArrowUpRightIcon className="size-[18px]" />
                        <span className="sr-only">Apply for {j.title} by email</span>
                      </span>
                    </div>
                  </a>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
    </>
  )
}

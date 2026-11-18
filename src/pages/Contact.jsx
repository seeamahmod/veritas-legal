import PageHero from '../components/PageHero'
import ContactSection from '../components/ContactSection'
import { IconBadge, RevealItem, SectionHeading, Stagger } from '../components/ui'
import { CalendarIcon, LockIcon, UsersChatIcon } from '../components/icons'
import hero from '../assets/pages/contact-hero.webp'

const next = [
  { Icon: UsersChatIcon, title: 'We listen', text: 'An intake specialist reviews your message and calls you back within one business day.' },
  { Icon: CalendarIcon, title: 'We meet', text: 'You meet the attorney best suited to your matter for a free 30-minute consultation.' },
  { Icon: LockIcon, title: 'We protect', text: 'If you engage us, everything moves to our encrypted client portal. Confidential from day one.' },
]

export default function Contact() {
  return (
    <>
      <title>Contact | Veritas Legal</title>
      <meta name="description" content="Contact Veritas Legal in Los Angeles. Call +1 (555) 222-7777, email info@veritaslegal.com or book a free consultation online." />
      <PageHero
        image={hero}
        crumb="Contact"
        eyebrow="Get In Touch"
        title="Let’s talk about what you need"
        text="Free, confidential consultations. Same-week appointments in person or by secure video."
      />
      <main id="main">
        <ContactSection />
        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="What Happens Next" title="Three simple steps" className="max-w-[560px]" />
            <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {next.map(({ Icon, title, text }, i) => (
                <RevealItem key={title} className="group flex flex-col gap-5 rounded-[24px] bg-white p-6">
                  <div className="flex items-center justify-between">
                    <IconBadge icon={Icon} tone="brand" size="md" />
                    <span className="text-[48px] font-medium leading-none tracking-[-0.05em] text-ink/10">0{i + 1}</span>
                  </div>
                  <h3 className="text-[22px] font-medium leading-[1.2]">{title}</h3>
                  <p className="text-[17px] leading-[1.5] text-ink-soft">{text}</p>
                </RevealItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
    </>
  )
}

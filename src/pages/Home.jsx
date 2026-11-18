import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroFrame from '../components/HeroFrame'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import { ButtonLink, CountUp, FadeImage, IconBadge, Reveal, RevealItem, SectionHeading, SectionTag, Stagger } from '../components/ui'
import {
  ArrowUpRightIcon,
  BadgeCheckIcon,
  BrainIcon,
  FileCheckIcon,
  FingerprintIcon,
  GavelIcon,
  HandshakeIcon,
  HeadsetIcon,
  ShieldIcon,
  UsersChatIcon,
  UsersIcon,
} from '../components/icons'
import { stats } from '../data/site'

import hero from '../assets/home/hero.webp'
import av1 from '../assets/home/avatar-1.webp'
import av2 from '../assets/home/avatar-2.webp'
import av3 from '../assets/home/avatar-3.webp'
import av4 from '../assets/home/avatar-4.webp'
import firm from '../assets/home/firm.webp'
import stepConsult from '../assets/home/step-consultation.webp'
import stepAnalysis from '../assets/home/step-analysis.webp'
import stepStrategy from '../assets/home/step-strategy.webp'
import stepDelivery from '../assets/home/step-delivery.webp'
import stepStarted from '../assets/home/step-started.webp'
import amelia from '../assets/home/team-amelia.webp'
import ricardo from '../assets/home/team-ricardo.webp'
import rodrigo from '../assets/home/team-rodrigo.webp'

const logos = import.meta.glob('../assets/home/logo-*.webp', { eager: true, import: 'default' })
const logoList = Object.keys(logos)
  .sort((a, b) => Number(a.match(/(\d+)/)[1]) - Number(b.match(/(\d+)/)[1]))
  .map((k) => logos[k])
const logoNames = ['Zalando', 'Radyant', 'Daimler Truck', 'Partner seal', 'Schlütersche', 'Talentmagnet', 'Google', 'DHL', 'Coca-Cola', 'ERGO']

const ease = [0.22, 1, 0.36, 1]

function Hero() {
  const words = 'Navigating the Legal Landscape with Expertise'.split(' ')
  return (
    <HeroFrame image={hero} imagePosition="60% 18%" minHeight="min-h-[680px] sm:min-h-[760px] lg:min-h-[863px]">
      <div className="mt-auto flex max-w-[694px] flex-col gap-12 pt-28 sm:gap-14 lg:mt-[110px] lg:pt-0">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-[44px] font-medium capitalize leading-[1.05] tracking-[-0.045em] text-white xs:text-[50px] sm:text-[64px] lg:text-[80px] lg:leading-[1.1]">
              {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.06 }}
                  >
                    {w}
                    {i < words.length - 1 && ' '}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              className="text-[17px] leading-[1.5] tracking-[-0.015em] text-white/80 sm:text-[20px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
            >
              At Veritas Legal, we champion your rights and provide strategic counsel across a spectrum of legal domains. From corporate governance to
              individual advocacy, our seasoned attorneys deliver clarity and results.
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.75 }}
          >
            <ButtonLink to="/contact#contact">Schedule a consult</ButtonLink>
            <ButtonLink to="/contact?plan=individual#contact" variant="glass">
              Free Consultation
            </ButtonLink>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
        >
          <div className="flex items-center">
            {[av1, av2, av3, av4].map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt=""
                width="40"
                height="40"
                className="-mr-1.5 size-10 rounded-full border-2 border-white/0 object-cover last:mr-0"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.08 }}
              />
            ))}
          </div>
          <p className="text-[16px] leading-none tracking-[-0.015em] text-white">Your trusted legal advisors</p>
        </motion.div>
      </div>
    </HeroFrame>
  )
}

function Logos() {
  return (
    <section aria-labelledby="logos-title" className="container-x py-12 sm:py-[60px]">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <Reveal as="h2" id="logos-title" className="max-w-[372px] text-[26px] font-medium capitalize leading-[1.25] tracking-[-0.025em] sm:text-[32px]">
            Recognized for excellence in legal advocacy
          </Reveal>
          <Stagger as="ul" className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6 xl:flex">
            {logoList.slice(0, 4).map((src, i) => (
              <LogoTile key={src} src={src} name={logoNames[i]} />
            ))}
          </Stagger>
        </div>
        <Stagger as="ul" className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 xl:flex">
          {logoList.slice(4).map((src, i) => (
            <LogoTile key={src} src={src} name={logoNames[i + 4]} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function LogoTile({ src, name }) {
  return (
    <RevealItem
      as="li"
      className="flex h-[72px] items-center justify-center rounded-[12px] bg-surface px-6 py-4 grayscale transition-[filter,background-color] duration-500 hover:bg-[#f2f4fb] hover:grayscale-0 sm:h-[86px] sm:px-[33px] xl:w-[200px]"
    >
      <img src={src} alt={name} loading="lazy" className="h-[40px] w-[120px] object-contain sm:h-[46px] sm:w-[134px]" />
    </RevealItem>
  )
}

function Firm() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x flex flex-col gap-12 lg:flex-row lg:items-stretch">
        <div className="flex flex-1 flex-col justify-between gap-12">
          <Reveal className="flex flex-col gap-6">
            <SectionTag>our firm</SectionTag>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="h-display text-balance">Your Advocates in Law, Champions in Justice</h2>
                <p className="max-w-[480px] text-[17px] leading-[1.5] tracking-[-0.015em] sm:text-[18px]">
                  Comprehensive legal solutions tailored to meet your unique challenges and objectives.
                </p>
              </div>
              <p className="text-[17px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">
                Veritas Legal was founded on the principles of integrity, advocacy, and justice. Starting as a dedicated team of legal experts, we&apos;ve
                grown into a leading firm serving clients across the globe. Our commitment to excellence and client success drives everything we do.
              </p>
            </div>
          </Reveal>
          <Stagger as="dl" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:flex sm:justify-between">
            {stats.map((s) => (
              <RevealItem key={s.label} className="flex flex-col-reverse gap-3">
                <dt className="text-[15px] leading-none tracking-[-0.015em] sm:text-[16px]">{s.label}</dt>
                <dd className="text-[30px] font-medium leading-none sm:text-[32px]">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </RevealItem>
            ))}
          </Stagger>
        </div>
        <Reveal className="overflow-hidden rounded-[24px] sm:rounded-[32px] lg:w-[48%] lg:max-w-[636px] lg:shrink-0">
          <FadeImage
            src={firm}
            alt="Veritas attorneys in discussion with clients around a conference table"
            loading="lazy"
            width="636"
            height="610"
            className="aspect-[636/610] size-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04]"
          />
        </Reveal>
      </div>
    </section>
  )
}

const practice = [
  {
    Icon: FileCheckIcon,
    title: 'Corporate Law & Governance',
    text: 'Expert guidance on mergers, acquisitions, compliance, and corporate structuring. We ensure your business operates with integrity and strategic foresight.',
    to: '/practice-areas#corporate',
  },
  {
    Icon: GavelIcon,
    title: 'Immigration Law Services',
    text: 'Navigating the complexities of immigration with tailored solutions for visas, green cards, and citizenship. Your journey to a new life starts here.',
    to: '/practice-areas#immigration',
  },
  {
    Icon: UsersChatIcon,
    title: 'Dispute Resolution & Litigation',
    text: 'Aggressive representation in negotiations, mediations, and courtrooms. We protect your interests and strive for optimal outcomes.',
    to: '/practice-areas#litigation',
  },
]

function Practice() {
  return (
    <section className="section-y bg-white">
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          tag="OUR EXPERTISE"
          title="Areas of Practice"
          text="Comprehensive legal solutions tailored to meet your unique challenges and objectives."
          textClass="max-w-[402px]"
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practice.map(({ Icon, title, text, to }) => (
            <RevealItem key={title} className="h-full">
              <Link
                to={to}
                className="group flex h-full min-h-[320px] flex-col justify-between gap-10 rounded-[24px] bg-surface p-6 transition-[background-color,transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_60px_-30px_rgba(42,42,42,0.3)] lg:min-h-[350px]"
              >
                <div className="flex flex-col gap-8">
                  <IconBadge icon={Icon} />
                  <div className="flex flex-col gap-5">
                    <h3 className="text-[22px] font-medium capitalize leading-[1.2] tracking-[-0.015em] sm:text-[24px]">{title}</h3>
                    <p className="text-[17px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">{text}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[16px] font-medium capitalize leading-none tracking-[-0.015em] text-brand">
                  Explore Services
                  <ArrowUpRightIcon className="size-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function ZoomImage({ src, alt, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[18px] ${className}`}>
      <FadeImage src={src} alt={alt} loading="lazy" className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]" />
    </div>
  )
}

const steps = [
  {
    img: stepAnalysis,
    alt: 'Attorney reviewing case documents with a colleague',
    title: 'Expert Legal Analysis',
    text: 'Our legal experts will connect with you to thoroughly understand your specific requirements and expectations, ensuring a tailored approach.',
  },
  {
    img: stepStrategy,
    alt: 'Two lawyers developing a strategy on a laptop',
    title: 'Strategic Plan Development',
    text: 'We will craft a detailed and well-researched legal strategy for you within 7-10 days, covering all aspects of your case.',
    pos: 'object-top',
  },
  {
    img: stepDelivery,
    alt: 'Lead attorney presenting the final strategy to the team',
    title: 'Final Strategy Delivery',
    text: 'Once you have reviewed the strategy and provided your feedback, we will make the necessary adjustments and deliver your final, customized legal plan.',
  },
]

function Process() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          tag="Secure Your Legal Future"
          title="Begin with Confidence"
          text="Our experienced legal team guides you through every step, providing expert advice and robust representation tailored to your unique situation."
          className="max-w-[630px]"
        />
        <div className="flex flex-col gap-6">
          <Reveal className="group flex flex-col gap-6 overflow-hidden rounded-[24px] bg-white p-4 sm:p-6 md:flex-row md:items-center md:gap-8">
            <ZoomImage src={stepConsult} alt="Initial consultation meeting around a conference table" className="aspect-[500/286] md:w-[44%] md:max-w-[500px] md:shrink-0" />
            <div className="flex flex-col gap-4">
              <StepNumber n={1} />
              <h3 className="text-[26px] font-medium capitalize leading-[1.2] tracking-[-0.045em] sm:text-[32px]">Initial Consultation</h3>
              <p className="text-[17px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">
                Share your legal concerns with us by completing the form. Our team will carefully review your submission and promptly contact you to
                schedule a personalized consultation, setting you on the path to a resolution. Let&apos;s build your defense together!
              </p>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <RevealItem key={s.title} className="group flex flex-col gap-[30px] overflow-hidden rounded-[24px] bg-white p-4 sm:p-6">
                <div className="overflow-hidden rounded-[18px]">
                  <FadeImage
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className={`aspect-[376/404] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06] ${s.pos || ''}`}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <StepNumber n={i + 2} />
                  <h3 className="text-[22px] font-medium capitalize leading-[1.2] tracking-[-0.045em] sm:text-[24px]">{s.title}</h3>
                  <p className="text-[17px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">{s.text}</p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
          <Reveal className="group flex flex-col-reverse gap-6 overflow-hidden rounded-[24px] bg-white p-4 sm:p-6 md:flex-row md:items-center md:gap-8">
            <div className="flex flex-1 flex-col gap-4">
              <StepNumber n={5} />
              <h3 className="text-[26px] font-medium capitalize leading-[1.2] tracking-[-0.045em] sm:text-[32px]">Get Started Today</h3>
              <p className="text-[17px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">
                Connect with our legal experts by filling out the form. We will review your details and reach out to arrange a consultation, guiding you
                towards effective solutions. Let&apos;s start building your case now!
              </p>
              <ButtonLink to="/contact#contact" className="mt-2 self-start">
                Start your case
              </ButtonLink>
            </div>
            <ZoomImage src={stepStarted} alt="Legal team reviewing a client file together" className="aspect-[500/286] md:w-[44%] md:max-w-[500px] md:shrink-0" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StepNumber({ n }) {
  return <span className="text-[14px] font-medium uppercase tracking-[0.08em] text-brand">Step 0{n}</span>
}

const advantages = [
  { Icon: UsersIcon, title: 'Seasoned Legal Team', text: 'Our attorneys bring decades of experience across diverse legal fields, ensuring you receive expert counsel tailored to your specific needs.' },
  { Icon: BrainIcon, title: 'Client-Centric Approach', text: 'We prioritize your objectives, providing clear communication, responsive service, and a collaborative partnership throughout your legal journey.' },
  { Icon: FingerprintIcon, title: 'Strategic Legal Solutions', text: 'We craft innovative and effective legal strategies, leveraging our deep understanding of the law to secure favorable results.' },
  { Icon: HeadsetIcon, title: 'Unwavering Advocacy', text: 'We are relentless in our pursuit of justice, advocating fiercely for your rights and interests in every legal arena.' },
  { Icon: ShieldIcon, title: 'Ethical Excellence', text: 'We adhere to the highest ethical standards, ensuring integrity, transparency, and confidentiality in all our legal dealings.' },
  { Icon: HandshakeIcon, title: 'Lasting Relationships', text: 'We build enduring partnerships with our clients, providing ongoing support and guidance to navigate their evolving legal needs.' },
]

export function Advantages({ bg = 'bg-white', card = 'bg-surface' }) {
  return (
    <section className={`section-y ${bg}`}>
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          tag="The Veritas Advantage"
          title="Why Clients Trust Veritas Legal"
          text="We deliver unparalleled legal acumen, personalized attention, and a steadfast commitment to achieving your goals."
          className="max-w-[663px]"
        />
        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map(({ Icon, title, text }) => (
            <RevealItem
              key={title}
              className={`group flex flex-col gap-6 rounded-[24px] ${card} p-6 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(42,42,42,0.25)] lg:min-h-[323px]`}
            >
              <IconBadge icon={Icon} />
              <div className="flex flex-col gap-5">
                <h3 className="text-[22px] font-medium capitalize leading-[1.2] tracking-[-0.015em] sm:text-[24px]">{title}</h3>
                <p className="text-[17px] leading-[1.5] tracking-[-0.015em] text-ink-soft sm:text-[18px]">{text}</p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

const partnerPoints = [
  'Expert legal insights from experienced lawyers',
  'Adaptable legal solutions for business growth',
  'Expertise in achieving operational excellence',
  'Affordable legal services for every client',
  'Customizable legal plans',
  'Reliable legal strategies',
]

function Partner() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x flex flex-col gap-12 lg:flex-row lg:items-stretch">
        <Reveal className="overflow-hidden rounded-[24px] sm:rounded-[32px] lg:flex-1">
          <div className="size-full -scale-x-100">
            <FadeImage
              src={stepConsult}
              alt="Veritas partners meeting with a corporate client"
              loading="lazy"
              className="aspect-[4/3] size-full object-cover transition-transform duration-[1.2s] hover:scale-[1.04] lg:aspect-auto"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-6 lg:w-[48%] lg:max-w-[636px] lg:shrink-0 lg:justify-center">
          <SectionTag>Legal Strategies for Success</SectionTag>
          <div className="flex flex-col gap-4">
            <h2 className="h-display max-w-[484px] text-balance">Your Partner in Navigating the Law</h2>
            <p className="text-[17px] leading-[1.5] tracking-[-0.015em] sm:text-[18px]">
              Many firms offer standard legal services. At Veritas Legal, our seasoned attorneys provide comprehensive support to tackle your toughest
              legal challenges. Benefit from top-tier legal insights without needing an in-house team.
            </p>
          </div>
          <Stagger as="ul" className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-flow-col sm:grid-rows-3">
            {partnerPoints.map((p) => (
              <RevealItem as="li" key={p} className="flex items-start gap-1">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                  <BadgeCheckIcon className="size-4" />
                </span>
                <span className="pt-[3px] text-[17px] leading-[1.5] tracking-[-0.015em] sm:text-[18px]">{p}</span>
              </RevealItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  )
}

const testimonials = [
  {
    img: amelia,
    name: 'Amelia Stone',
    role: 'CEO, NovaTech Solutions',
    quote:
      '"Veritas Legal provided more than just legal advice; they integrated seamlessly into our operations. Their strategic input was invaluable during our recent company expansion."',
  },
  {
    img: ricardo,
    name: 'Ricardo Valdez',
    role: 'CTO, Future Forward Inc.',
    quote:
      '"Choosing Veritas Legal was one of the best decisions we made. Their team’s dedication and expertise helped us navigate complex legal challenges with confidence."',
  },
  {
    img: rodrigo,
    name: 'Dr. Rodrigo Perez',
    role: 'Director, Global Health Innovations',
    quote:
      '"Veritas Legal’s commitment to excellence and their client-focused approach truly set them apart. They are more than just a law firm; they are trusted advisors."',
  },
]

function Testimonials() {
  return (
    <section className="section-y bg-white">
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          tag="Protect Your Legal Rights"
          title="Expert Legal Guidance"
          text="Our skilled attorneys lead you through a clear, structured process to create a legal strategy that aligns with your objectives"
          className="max-w-[564px]"
        />
        <Stagger className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {testimonials.map((t) => (
            <RevealItem
              as="figure"
              key={t.name}
              className="group relative isolate flex h-[520px] w-[85%] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[24px] p-6 text-white md:h-[595px] md:w-auto"
            >
              <img
                src={t.img}
                alt={`Portrait of ${t.name}`}
                loading="lazy"
                className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-50% to-black" />
              <figcaption className="flex flex-col gap-1.5 capitalize leading-[1.2]">
                <span className="text-[24px] font-medium tracking-[-0.045em]">{t.name}</span>
                <span className="text-[16px] tracking-[-0.045em] text-white/75">{t.role}</span>
              </figcaption>
              <blockquote className="mt-6 text-[17px] leading-[1.5] tracking-[-0.015em] sm:text-[18px]">{t.quote}</blockquote>
            </RevealItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <title>Veritas Legal | Navigating the Legal Landscape with Expertise</title>
      <meta
        name="description"
        content="Veritas Legal provides strategic counsel in corporate law, immigration, and dispute resolution. Book a free consultation with our seasoned attorneys."
      />
      <Hero />
      <main id="main">
        <Logos />
        <Firm />
        <Practice />
        <Process />
        <Advantages />
        <Partner />
        <Testimonials />
        <PricingSection />
        <ContactSection />
      </main>
    </>
  )
}

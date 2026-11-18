import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import { Advantages } from './Home'
import { ButtonLink, RevealItem, SectionHeading, Stagger } from '../components/ui'
import { attorneys } from '../data/content'
import hero from '../assets/pages/attorneys-hero.webp'

export default function Attorneys() {
  return (
    <>
      <title>Our Attorneys | Veritas Legal</title>
      <meta name="description" content="Meet the partners and associates of Veritas Legal: experienced litigators, dealmakers and advisors." />
      <PageHero
        image={hero}
        imagePosition="70% center"
        crumb="Our Attorneys"
        eyebrow="Our People"
        title="The advocates behind every outcome"
        text="Fifty attorneys, one standard. Meet a few of the people who will be in your corner."
      />

      <main id="main">
        <section className="section-y bg-surface">
          <div className="container-x flex flex-col gap-12">
            <SectionHeading tag="Leadership & Counsel" title="Meet our attorneys" text="Every client matter is led by a partner and supported by a dedicated associate team." className="max-w-[600px]" />
            <Stagger className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-4">
              {attorneys.map((a) => (
                <RevealItem as="article" key={a.name} className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[24px] p-5 text-white">
                  <img
                    src={a.img}
                    alt={`Portrait of ${a.name}`}
                    loading="lazy"
                    className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.06]"
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-35% to-black/90" />
                  <span className="mb-auto self-start rounded-full bg-white/15 px-3 py-1 text-[13px] backdrop-blur-md">{a.years} yrs experience</span>
                  <h3 className="text-[22px] font-medium leading-[1.2] tracking-[-0.045em]">{a.name}</h3>
                  <p className="mt-1 text-[15px] text-white/75">
                    {a.role} · {a.focus}
                  </p>
                  {/* Bio is always visible on touch devices; on hover-capable screens it slides in. */}
                  <p className="mt-3 text-[15px] leading-[1.45] text-white/90 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:transition-all [@media(hover:hover)]:duration-500 [@media(hover:hover)]:group-hover:max-h-40 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:max-h-40 [@media(hover:hover)]:group-focus-within:opacity-100">
                    {a.bio}
                  </p>
                </RevealItem>
              ))}
            </Stagger>
            <div className="flex justify-center">
              <ButtonLink to="/careers" variant="outline">
                Join our team
              </ButtonLink>
            </div>
          </div>
        </section>

        <Advantages />

        <section className="bg-white pb-[72px] lg:pb-[120px]">
          <CtaBand title="Speak with an attorney today" />
        </section>
      </main>
    </>
  )
}

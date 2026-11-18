import { plans } from '../data/site'
import { CircleCheckIcon, SuitcaseIcon, UserIcon, UsersIcon } from './icons'
import { ButtonLink, RevealItem, SectionHeading, Stagger } from './ui'

const icons = { user: UserIcon, suitcase: SuitcaseIcon, users: UsersIcon }

export default function PricingSection({ bg = 'bg-surface' }) {
  return (
    <section id="pricing" className={`section-y ${bg}`}>
      <div className="container-x flex flex-col gap-12">
        <SectionHeading
          tag="Our Fees"
          title="Transparent pricing for all clients"
          text="Find a plan that matches your legal needs, from individuals to large corporations."
        />
        <Stagger className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
          {plans.map((p) => {
            const Icon = icons[p.icon]
            return (
              <RevealItem
                key={p.id}
                className={`group flex flex-col gap-6 rounded-[20px] bg-white p-4 transition-[transform,box-shadow] duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(42,42,42,0.25)] sm:p-5 ${
                  p.featured ? 'lg:py-[34px] md:col-span-2 lg:col-span-1 md:max-lg:mx-auto md:max-lg:w-[calc(50%-12px)]' : ''
                }`}
              >
                <div className={`flex flex-col gap-6 rounded-[18px] p-5 sm:p-6 ${p.featured ? 'bg-brand text-white' : 'bg-surface'}`}>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-14 shrink-0 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-[-10deg] ${
                        p.featured ? 'bg-white text-brand' : 'bg-brand text-white'
                      }`}
                    >
                      <Icon className="size-[27px]" />
                    </span>
                    <div className="flex flex-col gap-2 capitalize">
                      <h3 className="text-[24px] font-medium leading-none tracking-[-0.045em]">{p.name}</h3>
                      <p className="text-[15px] leading-[1.5] tracking-[-0.015em] sm:text-[16px]">{p.blurb}</p>
                    </div>
                  </div>
                  <p className="text-[36px] font-medium capitalize leading-[1.2] tracking-[-0.045em] sm:text-[40px]">{p.price}</p>
                  <ButtonLink
                    to={`/contact?plan=${p.id}#contact`}
                    variant={p.featured ? 'white' : 'outline'}
                    icon={false}
                    className="h-12 w-full"
                  >
                    {p.cta}
                  </ButtonLink>
                </div>
                <ul className="flex flex-col gap-5 p-3 sm:gap-6 sm:p-4" aria-label={`${p.name} plan features`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[17px] capitalize leading-[1.2] tracking-[-0.015em] sm:text-[18px]">
                      <CircleCheckIcon className="size-5 shrink-0 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

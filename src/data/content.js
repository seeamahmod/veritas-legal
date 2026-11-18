import paCorporate from '../assets/pages/pa-corporate.webp'
import paImmigration from '../assets/pages/pa-immigration.webp'
import paLitigation from '../assets/pages/pa-litigation.webp'
import paEstate from '../assets/pages/pa-estate.webp'
import paIp from '../assets/pages/pa-ip.webp'
import paEmployment from '../assets/pages/pa-employment.webp'
import att1 from '../assets/pages/attorney-1.webp'
import att2 from '../assets/pages/attorney-2.webp'
import att3 from '../assets/pages/attorney-3.webp'
import att4 from '../assets/pages/attorney-4.webp'
import att5 from '../assets/pages/attorney-5.webp'
import att6 from '../assets/pages/attorney-6.webp'
import att7 from '../assets/pages/attorney-7.webp'
import att8 from '../assets/pages/attorney-8.webp'
import post1 from '../assets/pages/post-1.webp'
import post2 from '../assets/pages/post-2.webp'
import post3 from '../assets/pages/post-3.webp'
import post4 from '../assets/pages/post-4.webp'
import post5 from '../assets/pages/post-5.webp'
import post6 from '../assets/pages/post-6.webp'

export const practiceAreas = [
  {
    id: 'corporate',
    icon: 'fileCheck',
    title: 'Corporate Law & Governance',
    img: paCorporate,
    alt: 'Two executives signing a corporate agreement',
    summary:
      'From formation to exit, we advise founders, boards and investors on the decisions that shape a company. Our corporate team blends transactional precision with practical commercial judgement.',
    services: ['Mergers & acquisitions', 'Board & governance advisory', 'Regulatory compliance programs', 'Shareholder & joint-venture agreements', 'Venture & growth financing'],
  },
  {
    id: 'immigration',
    icon: 'globe',
    title: 'Immigration Law Services',
    img: paImmigration,
    alt: 'Neoclassical federal courthouse columns',
    summary:
      'We guide families, professionals and employers through every stage of the U.S. immigration system with clear timelines, honest odds and meticulous filings.',
    services: ['Employment-based visas (H-1B, L-1, O-1)', 'Family-based green cards', 'Naturalization & citizenship', 'Investor visas (EB-5, E-2)', 'Removal defense & appeals'],
  },
  {
    id: 'litigation',
    icon: 'gavel',
    title: 'Dispute Resolution & Litigation',
    img: paLitigation,
    alt: 'Wooden gavel resting on a marble surface',
    summary:
      'When negotiation is not enough, our trial lawyers are ready. We prepare every matter as if it will go to verdict, which is why so many settle on our clients’ terms.',
    services: ['Commercial & contract disputes', 'Mediation & arbitration', 'Class action defense', 'Appeals', 'Injunctions & emergency relief'],
  },
  {
    id: 'estate',
    icon: 'fileContent',
    title: 'Estate Planning & Probate',
    img: paEstate,
    alt: 'Client signing estate planning documents',
    summary:
      'Protect what you have built and the people you love. We design estate plans that are tax-efficient, easy to administer and built to avoid family conflict.',
    services: ['Wills & living trusts', 'Powers of attorney & healthcare directives', 'Probate & trust administration', 'Business succession planning', 'Charitable giving strategies'],
  },
  {
    id: 'intellectual-property',
    icon: 'lock',
    title: 'Intellectual Property',
    img: paIp,
    alt: 'Inventor sketching product ideas next to a laptop',
    summary:
      'Your ideas are often your most valuable assets. We secure, license and defend trademarks, copyrights, trade secrets and patents for creators and technology companies.',
    services: ['Trademark clearance & registration', 'Copyright & licensing', 'Trade secret protection', 'IP portfolio strategy', 'Infringement enforcement'],
  },
  {
    id: 'employment',
    icon: 'users',
    title: 'Employment & Labor',
    img: paEmployment,
    alt: 'Diverse team collaborating in a modern office',
    summary:
      'We help employers build fair, compliant workplaces and represent employees when things go wrong, from handbooks to high-stakes discrimination claims.',
    services: ['Employment contracts & handbooks', 'Wage & hour compliance', 'Discrimination & harassment claims', 'Executive compensation', 'Workplace investigations'],
  },
]

export const attorneys = [
  { name: 'Daniel Whitmore', role: 'Managing Partner', focus: 'Corporate & M&A', img: att1, years: 24, bio: 'Daniel has led more than 200 transactions and advises boards on governance, risk and growth strategy.' },
  { name: 'Elena Marquez', role: 'Senior Partner', focus: 'Immigration', img: att2, years: 19, bio: 'Elena has helped thousands of families and employers through complex visa and citizenship matters.' },
  { name: 'Marcus Reed', role: 'Partner', focus: 'Commercial Litigation', img: att3, years: 16, bio: 'A seasoned trial lawyer, Marcus has secured eight-figure verdicts and favorable settlements in state and federal court.' },
  { name: 'Sophia Bennett', role: 'Partner', focus: 'Intellectual Property', img: att4, years: 12, bio: 'Sophia builds and defends IP portfolios for software, media and consumer-product companies.' },
  { name: 'Arjun Mehta', role: 'Partner', focus: 'Employment & Labor', img: att5, years: 14, bio: 'Arjun counsels employers on compliance and represents executives in high-stakes workplace disputes.' },
  { name: 'Grace Liu', role: 'Senior Associate', focus: 'Estate Planning', img: att6, years: 9, bio: 'Grace designs multigenerational estate plans and guides families through probate with patience and clarity.' },
  { name: 'Samuel Okafor', role: 'Senior Associate', focus: 'Dispute Resolution', img: att7, years: 8, bio: 'Samuel is a certified mediator who resolves commercial conflicts quickly and cost-effectively.' },
  { name: 'Naomi Clarke', role: 'Associate', focus: 'Corporate Compliance', img: att8, years: 5, bio: 'Naomi helps growing companies build compliance programs that scale with them.' },
]

export const posts = [
  {
    slug: 'what-to-bring-to-your-first-legal-consultation',
    category: 'Guides',
    title: 'What to Bring to Your First Legal Consultation',
    excerpt: 'A short checklist that turns a first meeting into a productive strategy session, and saves you billable hours.',
    date: '2026-10-28',
    read: '5 min read',
    img: post1,
    alt: 'Gavel resting on an open law book',
    body: [
      'Your first meeting with an attorney sets the tone for everything that follows. Arriving prepared lets your lawyer spend the time on strategy rather than fact-finding.',
      'Bring every document that relates to your matter: contracts, letters, emails, notices, invoices and photographs. If something is digital, export it to PDF and keep the original metadata intact.',
      'Write a one-page timeline of events in plain language. Dates matter more than adjectives. Note who was involved and what was said or agreed at each step.',
      'Finally, list your goals. Do you want to settle quickly, protect a relationship, or establish a precedent? The right strategy depends on what success looks like for you.',
    ],
  },
  {
    slug: 'contract-clauses-small-businesses-overlook',
    category: 'Business',
    title: 'Five Contract Clauses Small Businesses Overlook',
    excerpt: 'Indemnity, limitation of liability and three others that quietly decide who pays when a deal goes wrong.',
    date: '2026-10-14',
    read: '7 min read',
    img: post2,
    alt: 'Two people signing a contract at a table',
    body: [
      'Most disputes we see could have been avoided with a few carefully drafted clauses. Here are the five we review first in any commercial agreement.',
      'Indemnification decides who covers third-party claims. Limitation of liability caps what either side can recover. Termination rights define how you can walk away, and what it costs.',
      'Dispute resolution clauses determine whether you end up in court, in arbitration, or in a different state entirely. And assignment clauses control whether the contract survives a sale of your business.',
      'Reading these sections closely before you sign is the cheapest legal protection your business will ever buy.',
    ],
  },
  {
    slug: 'understanding-the-2026-h1b-lottery-changes',
    category: 'Immigration',
    title: 'Understanding the 2026 H-1B Lottery Changes',
    excerpt: 'Beneficiary-centric selection, new fees and what employers should do now to prepare for the next cap season.',
    date: '2026-09-30',
    read: '6 min read',
    img: post3,
    alt: 'Hands reviewing and signing immigration paperwork',
    body: [
      'The H-1B program continues to evolve. Selection is now beneficiary-centric, meaning each candidate is entered once regardless of how many employers register them.',
      'Employers should start gathering role descriptions, wage data and candidate credentials early. A clean registration is the foundation of a successful petition.',
      'If a candidate is not selected, alternatives such as O-1, L-1 or cap-exempt employment may still be available. A short strategy call can reveal options you did not know you had.',
    ],
  },
  {
    slug: 'protecting-your-brand-before-launch',
    category: 'Intellectual Property',
    title: 'Protecting Your Brand Before Launch Day',
    excerpt: 'Clearance searches, filing strategy and domain hygiene: the IP steps every founder should take before going public.',
    date: '2026-09-12',
    read: '4 min read',
    img: post4,
    alt: 'Founder working on brand ideas at a laptop',
    body: [
      'A name you cannot protect is a name you may have to give up. Run a clearance search before you print a single business card.',
      'File trademark applications in the classes that match your products and the ones you plan to enter. Intent-to-use filings let you reserve a mark before launch.',
      'Secure matching domains and social handles, and record who created your logo and brand assets so ownership is never in doubt.',
    ],
  },
  {
    slug: 'mediation-vs-litigation',
    category: 'Litigation',
    title: 'Mediation vs. Litigation: Choosing the Right Path',
    excerpt: 'Cost, speed, confidentiality and control: how to decide when a dispute belongs in a courtroom.',
    date: '2026-08-26',
    read: '6 min read',
    img: post5,
    alt: 'Grand courthouse interior with stone columns',
    body: [
      'Not every dispute needs a judge. Mediation is usually faster, cheaper and private, and it lets the parties craft solutions a court could never order.',
      'Litigation makes sense when you need a binding precedent, emergency relief, or the other side will not negotiate in good faith.',
      'Many of our matters use both: we prepare for trial while pursuing mediation, which strengthens your hand at the negotiating table.',
    ],
  },
  {
    slug: 'estate-planning-checklist-for-new-parents',
    category: 'Estate Planning',
    title: 'An Estate Planning Checklist for New Parents',
    excerpt: 'Guardianship, life insurance and a simple trust: three decisions that protect your child if the unexpected happens.',
    date: '2026-08-08',
    read: '5 min read',
    img: post6,
    alt: 'Stack of legal books beside an open notebook',
    body: [
      'Becoming a parent changes your estate plan overnight. The most important decision is naming a guardian for your child, and a backup.',
      'Review beneficiary designations on life insurance and retirement accounts. A revocable living trust can hold assets for your child until they are old enough to manage them.',
      'Store copies of your documents where your executor can find them, and revisit your plan after every major life event.',
    ],
  },
]

export const jobs = [
  { title: 'Senior Associate, Corporate & M&A', location: 'Los Angeles, CA', type: 'Full-time', summary: '5+ years of transactional experience; strong drafting and client-management skills.' },
  { title: 'Immigration Attorney', location: 'Los Angeles, CA / Hybrid', type: 'Full-time', summary: '3+ years of employment-based immigration practice; Spanish fluency a plus.' },
  { title: 'Litigation Paralegal', location: 'Los Angeles, CA', type: 'Full-time', summary: 'Experience managing discovery, e-filing and trial preparation in state and federal courts.' },
  { title: 'Legal Operations Specialist', location: 'Remote (US)', type: 'Full-time', summary: 'Own our practice-management stack, intake workflows and data security processes.' },
  { title: 'Summer Law Clerk', location: 'Los Angeles, CA', type: 'Internship', summary: 'Rising 2L and 3L students interested in a rotation across our core practice groups.' },
]

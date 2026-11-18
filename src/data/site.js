export const contact = {
  email: 'info@veritaslegal.com',
  phone: '+1 (555) 222-7777',
  phoneHref: '+15552227777',
  footerPhone: '+1 (555) 123-4567',
  footerPhoneHref: '+15551234567',
  addressLines: ['456 Justice Court', 'Los Angeles, CA 90001'],
  hours: 'Monday - Saturday: 8:00 - 19:00 PST',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Firm' },
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/attorneys', label: 'Our Attorneys' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export const footerColumns = [
  {
    title: 'Practice Areas',
    links: [
      { to: '/practice-areas#corporate', label: 'Business Law' },
      { to: '/practice-areas#immigration', label: 'Immigration Law' },
      { to: '/practice-areas#estate', label: 'Estate Planning' },
      { to: '/practice-areas#intellectual-property', label: 'Intellectual Property' },
      { to: '/practice-areas#litigation', label: 'Civil Litigation' },
    ],
  },
  {
    title: 'About',
    links: [
      { to: '/about', label: 'Our Firm' },
      { to: '/attorneys', label: 'Our Attorneys' },
      { to: '/careers', label: 'Careers' },
      { to: '/about#stories', label: 'Success Stories' },
      { to: '/insights', label: 'Blog' },
    ],
  },
]

export const stats = [
  { value: 150, suffix: '+', label: 'Cases Won' },
  { value: 50, suffix: '+', label: 'Expert Attorneys' },
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export const plans = [
  {
    id: 'individual',
    name: 'Individual',
    blurb: 'Essential legal services for individuals and families.',
    price: '$25/month',
    cta: 'Start for free',
    icon: 'user',
    featured: false,
    features: [
      'Unlimited consultations',
      'Basic document review',
      'Legal research access',
      'Standard legal templates',
      'Case updates',
      'Dedicated support team',
      'Secure client portal',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    blurb: 'Advanced legal solutions to help businesses scale.',
    price: '$50/month',
    cta: 'Get Started',
    icon: 'suitcase',
    featured: true,
    features: [
      'Everything in Individual',
      'Custom contract drafting',
      'AI-powered legal insights',
      'Custom legal reporting',
      'Collaboration tools',
      'Legal analytics dashboard',
      'Mobile accessibility',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'Custom legal solutions for large organizations.',
    price: 'Custom',
    cta: 'Contact Sales',
    icon: 'users',
    featured: false,
    features: [
      'Everything in Business',
      'Dedicated account manager',
      'Advanced security protocols',
      'API access & custom solutions',
      'Real-time legal analytics',
      '24/7 legal support',
      'Integration with third-party tools',
    ],
  },
]

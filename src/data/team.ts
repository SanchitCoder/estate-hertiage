import { teamImages } from '@/lib/images'

export interface TeamMember {
  name: string
  role: string
  bio: string[]
  image: string
  initials: string
  /** Native aspect ratio when photo proportions differ from the default portrait frame. */
  imageAspect?: string
}

export const founder: TeamMember = {
  name: 'Bipin Chadha',
  role: 'Founder & Principal Advisor',
  bio: [
    'Bipin brings over 30 years of investment exposure, including 14 years of experience across Gurugram\'s residential market, with particular strength in new launches, under-construction opportunities, corridor analysis, and developer-led premium supply.',
    'His advisory lens is shaped by years of market observation across Golf Course Road Extension, SPR, Dwarka Expressway, and CPR, where capital appreciation, infrastructure completion, and brand-led positioning have reshaped buyer behavior.',
    'Rather than acting as a transaction intermediary, he works as a strategic advisor who helps clients evaluate where to enter, what to prioritise, and what risks to watch.',
  ],
  image: teamImages.bipin,
  initials: 'BC',
}

export const advisors: TeamMember[] = [
  {
    name: 'Sonu Kumar',
    role: 'Relationship Manager',
    bio: [
      'Sonu Kumar brings over five years of focused experience in the Gurugram real estate market — a tenure that has given him an instinctive understanding of what drives this city\'s realty sector and what sustains its momentum.',
      'Having worked across multiple sectors before finding his ground in real estate, Sonu\'s strongest asset is people. His ability to build trust, understand client needs, and nurture long-term relationships sets him apart in a market where most interactions remain transactional. Clients who work with Sonu don\'t just get a consultant — they get someone invested in getting the decision right.',
      'At Estates & Heritage Advisors, he combines corridor knowledge with genuine client commitment — making him the first point of confidence for many of our investors.',
    ],
    image: teamImages.sonu,
    initials: 'SK',
    imageAspect: '590 / 1280',
  },
  {
    name: 'Himani Bajaj',
    role: 'Advisory Consultant',
    bio: [
      'Himani brings over 4.5 years of consultancy and sales experience across diverse investment portfolios — from insurance-led financial products at PolicyBazaar and CoverYou to her current focus on real estate investments.',
      'A Delhi University graduate with a strong grounding in business analysis, Himani\'s approach is inherently ROI-driven. She helps clients look beyond the brochure — evaluating entry points, projecting returns, and building exit strategies that align with individual financial goals. Her ability to assess calculated risk makes her a trusted voice for investors who want clarity before commitment.',
      'At Estates & Heritage Advisors, she works as a consultant who combines financial acumen with on-ground market understanding — ensuring every recommendation is backed by numbers, not just narratives.',
    ],
    image: teamImages.himani,
    initials: 'HB',
  },
]

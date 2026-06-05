export interface Founder {
  name: string
  role: string
  bio: string[]
  image: string
  initials: string
}

export const founder: Founder = {
  name: 'Bipin Chadha',
  role: 'Founder, Estates & Heritage Advisors',
  bio: [
    'Bipin Chadha is the founder of Estates & Heritage Advisors and brings over 14 years of experience across Gurugram\'s residential market, with particular strength in new launches, under-construction opportunities, corridor analysis, and developer-led premium supply.',
    'His advisory lens is shaped by years of market observation across Golf Course Road Extension, SPR, Dwarka Expressway, and CPR, where capital appreciation, infrastructure completion, and brand-led positioning have reshaped buyer behavior.',
    'Rather than acting as a transaction intermediary, he works as a strategic advisor who helps clients evaluate where to enter, what to prioritise, and what risks to watch.',
  ],
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  initials: 'BC',
}

export type ArticleCategory = 'Market Report' | 'Investment Note' | 'Corridor Analysis' | 'New Launch'

export interface Article {
  id: string
  title: string
  excerpt: string
  category: ArticleCategory
  author: string
  date: string
  readTime: number
  image: string
  downloadable: boolean
  featured: boolean
  tags: string[]
}

export const articles: Article[] = [
  {
    id: 'art-001',
    title: 'Q2 2026 Gurugram New Launch Report',
    excerpt:
      'A structured overview of key launches, corridor momentum, emerging price bands, and where serious buyers should focus attention across Gurugram\'s premium residential corridors.',
    category: 'Market Report',
    author: 'Estates & Heritage Advisors',
    date: '2026-04-01',
    readTime: 15,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
    downloadable: true,
    featured: true,
    tags: ['Gurugram', 'New Launch', '2026', 'Market Report'],
  },
  {
    id: 'art-002',
    title: "Why CPR Is Gurugram's Strongest Luxury Value Play",
    excerpt:
      'An investment note on land parcel quality, institutional developer participation, and why CPR may still have a meaningful gap between current pricing and long-term premium recognition.',
    category: 'Investment Note',
    author: 'Estates & Heritage Advisors',
    date: '2026-03-15',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    downloadable: false,
    featured: true,
    tags: ['CPR', 'Luxury', 'Investment Thesis'],
  },
  {
    id: 'art-003',
    title: 'SPR After Tonino Lamborghini: Has the Corridor Repriced Luxury?',
    excerpt:
      'A note on how branded residences are changing buyer expectations, pricing narratives, and the positioning of SPR within Gurugram\'s premium housing hierarchy.',
    category: 'Corridor Analysis',
    author: 'Estates & Heritage Advisors',
    date: '2026-02-20',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    downloadable: false,
    featured: true,
    tags: ['SPR', 'Branded Residences', 'Tonino Lamborghini'],
  },
  {
    id: 'art-004',
    title: 'Dwarka Expressway After Infrastructure Delivery',
    excerpt:
      'An analysis of what changes when a corridor moves from promise to operational reality, especially for airport-linked branded supply on sectors 99 to 114.',
    category: 'Corridor Analysis',
    author: 'Estates & Heritage Advisors',
    date: '2026-01-28',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    downloadable: false,
    featured: false,
    tags: ['Dwarka Expressway', 'Infrastructure', 'Branded Residences'],
  },
  {
    id: 'art-005',
    title: 'Golf Course Extension: Prestige, Preservation, and Pricing Discipline',
    excerpt:
      'A note on why the corridor continues to command premium capital values and how serious buyers should interpret value at the top end of Gurugram\'s residential market.',
    category: 'Investment Note',
    author: 'Estates & Heritage Advisors',
    date: '2026-01-10',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    downloadable: false,
    featured: false,
    tags: ['Golf Course Extension', 'Ultra Luxury', 'Capital Preservation'],
  },
  {
    id: 'art-006',
    title: 'New Launch Projects Gurugram: Where to Focus in 2026',
    excerpt:
      'A corridor-led view of Gurugram\'s most relevant new-launch opportunities for investors, end-users, and NRI buyers evaluating entry timing and developer credibility.',
    category: 'New Launch',
    author: 'Estates & Heritage Advisors',
    date: '2025-12-20',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    downloadable: true,
    featured: false,
    tags: ['New Launch', 'Gurugram', 'SEO'],
  },
]

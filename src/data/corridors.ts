export type CorridorId =
  | 'dwarka-expressway'
  | 'cpr'
  | 'spr-sohna'
  | 'golf-course-extension'
  | 'new-gurgaon'

export interface Corridor {
  id: CorridorId
  name: string
  shortName: string
  headline: string
  subheadline?: string
  overview: string
  marketSnapshot: string[]
  whoShouldInvest: string[]
  cta: string
  ctaLink: string
}

export const corridors: Corridor[] = [
  {
    id: 'dwarka-expressway',
    name: 'Dwarka Expressway',
    shortName: 'Dwarka Expressway',
    headline: "Gurugram's Most Transformed Corridor",
    subheadline: 'From infrastructure play to luxury destination — six landmark projects, three premium developers, two branded residences.',
    overview:
      'Dwarka Expressway has transformed from a delayed infrastructure corridor into a fully operational micro-market with elevated road access, metro connectivity, and direct airport linkage that materially improve both end-user appeal and investment relevance. The sectors from 99 to 114 now host some of Gurugram\'s most ambitious luxury and ultra-luxury projects, including branded residences previously unseen in this micro-market.',
    marketSnapshot: [
      'Buyer profile: Delhi NCR upgraders, NRI investors, CXOs relocating from Delhi.',
      'Dominant typology: High-rise luxury apartments, branded residences, penthouses.',
      'Price range: ₹1.8 Cr to ₹12 Cr+ depending on project and configuration.',
      'Key demand driver: Airport proximity, metro access, and branded developer pipeline.',
      'Investment thesis: Branded residences at current prices remain undervalued relative to three-year potential.',
    ],
    whoShouldInvest: [
      'NRI investors seeking airport-proximate branded assets.',
      'Delhi upgraders looking for improved lifestyle connectivity.',
      'Portfolio investors targeting branded residence exposure.',
      'End-users prioritising airport access, metro reach, and growing social infrastructure.',
    ],
    cta: 'Book a Dwarka Expressway Advisory Call',
    ctaLink: '/contact',
  },
  {
    id: 'cpr',
    name: 'CPR — Central Peripheral Road',
    shortName: 'CPR',
    headline: "Gurugram's Emerging Luxury Address",
    subheadline: 'Where Sohna Road meets New Gurugram — a corridor redefining mid-city luxury with resort-scale developments.',
    overview:
      'CPR is rapidly establishing itself as one of Gurugram\'s most curated luxury corridors, benefitting from proximity to established social infrastructure as well as large development parcels that support resort-scale formats. Max Estates and Krisumi have selected CPR for their most ambitious projects, which serves as a strong endorsement of the corridor\'s long-term trajectory.',
    marketSnapshot: [
      'Buyer profile: Gurugram professionals, HNI upgraders, resort-living seekers.',
      'Dominant typology: Low-rise luxury, high-rise branded residences, large-format apartments.',
      'Price range: ₹2.5 Cr to ₹15 Cr+.',
      'Key demand driver: Large land parcels and Max Estates brand premium.',
      'Investment thesis: CPR is 2–3 years behind Golf Course Extension in price discovery.',
    ],
    whoShouldInvest: [
      'HNI buyers seeking large-format luxury with resort amenities.',
      'Investors looking for early-mover pricing before corridor maturity.',
      'Professionals upgrading at better value than top-end mature corridors.',
      'NRIs drawn to premium resort-living formats.',
    ],
    cta: 'Explore CPR Opportunities',
    ctaLink: '/contact',
  },
  {
    id: 'spr-sohna',
    name: 'SPR & Sohna Road',
    shortName: 'SPR & Sohna Road',
    headline: "Gurugram's Luxury Spine",
    subheadline: "Home to India's first Tonino Lamborghini Residences — a corridor where aspirational living meets proven appreciation.",
    overview:
      'SPR and Sohna Road form one of Gurugram\'s most established and consistently appreciating corridors, supported by a decade of delivery, strong corporate rental demand, and a shift into ultra-luxury branded supply. The launch of Tonino Lamborghini Residences at Sector 71 marked a turning point by bringing global brand-led luxury into an already proven corridor.',
    marketSnapshot: [
      'Buyer profile: Corporate professionals, NRI investors, luxury upgraders.',
      'Dominant typology: High-rise luxury apartments and ultra-luxury branded residences.',
      'Price range: ₹1.5 Cr to ₹20 Cr+.',
      'Key demand driver: Corporate rental demand and branded residence momentum.',
      'Investment thesis: A proven rental-yield corridor now attracting capital appreciation buyers through premium supply.',
    ],
    whoShouldInvest: [
      'NRI investors seeking globally branded assets with rental relevance.',
      'Corporate professionals wanting luxury access near key business districts.',
      'Long-term investors favouring an established track record.',
      'Luxury upgraders moving from mid-segment to ultra-luxury.',
    ],
    cta: 'Discuss SPR Opportunities',
    ctaLink: '/contact',
  },
  {
    id: 'golf-course-extension',
    name: 'Golf Course Road Extension',
    shortName: 'Golf Course Extension',
    headline: "Gurugram's Most Coveted Address",
    subheadline: "Ultra-luxury living, world-class golf views, and Gurugram's highest price-per-sqft — the corridor that defines the city's premium benchmark.",
    overview:
      'Golf Course Road Extension is Gurugram\'s most aspirational real estate address and the benchmark against which other premium corridors are measured. With top developers active simultaneously, the current supply pipeline creates rare choice within the city\'s highest-value lifestyle corridor.',
    marketSnapshot: [
      'Buyer profile: Ultra HNIs, CXOs, luxury end-users, NRI trophy-asset buyers.',
      'Dominant typology: Ultra-luxury high-rise residences, penthouses, and sky villas.',
      'Price range: ₹4 Cr to ₹40 Cr+.',
      'Key demand driver: Prestige address, golf adjacency, and superior social infrastructure.',
      'Investment thesis: Capital preservation plus lifestyle, with the highest capital value floor in Gurugram.',
    ],
    whoShouldInvest: [
      'Ultra HNIs prioritising address prestige.',
      'CXOs and senior professionals seeking the city\'s premium lifestyle benchmark.',
      'NRIs buying trophy assets with long-term capital preservation logic.',
      'Investors targeting Gurugram\'s highest resale value floor.',
    ],
    cta: 'Book a Golf Course Extension Advisory Call',
    ctaLink: '/contact',
  },
  {
    id: 'new-gurgaon',
    name: 'New Gurgaon',
    shortName: 'New Gurgaon',
    headline: 'The Value-to-Maturity Growth Belt',
    overview:
      'New Gurgaon is relevant for buyers seeking earlier-stage entry, larger planning grids, and improving infrastructure compared with more mature premium belts. It works best as a selective, project-by-project corridor for value-conscious investors and families prioritising space over address premium.',
    marketSnapshot: [],
    whoShouldInvest: [
      'Value-conscious investors with medium-term holding horizons.',
      'Families prioritising space and future growth.',
      'Buyers looking for earlier entry into developing sectors.',
      'Channel partners evaluating expansion zones.',
    ],
    cta: 'Discuss New Gurgaon Opportunities',
    ctaLink: '/contact',
  },
]

export function getCorridorById(id: CorridorId) {
  return corridors.find((c) => c.id === id)
}

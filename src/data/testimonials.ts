export interface Testimonial {
  id: string
  name: string
  role: string
  clientType: string
  text: string
  initials: string
  bgColor: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Investor Client',
    role: 'HNI Investor',
    clientType: 'Investor',
    text: 'The recommendation was built around the corridor and holding period, not just the project. That changed the quality of the decision.',
    initials: 'IC',
    bgColor: '#1a5068',
  },
  {
    id: 'test-002',
    name: 'End-User Client',
    role: 'Premium Homebuyer',
    clientType: 'End-User',
    text: 'The process helped narrow multiple premium launches into one clear fit based on how the family actually wanted to live.',
    initials: 'EU',
    bgColor: '#2d4a6e',
  },
  {
    id: 'test-003',
    name: 'NRI Client',
    role: 'NRI Investor',
    clientType: 'NRI',
    text: 'Buying remotely felt far more manageable with someone on the ground who could interpret both project quality and corridor logic honestly.',
    initials: 'NC',
    bgColor: '#193d55',
  },
  {
    id: 'test-004',
    name: 'Corporate Professional',
    role: 'Senior Executive',
    clientType: 'Corporate',
    text: 'The advisory felt structured and strategic rather than sales-led. It was much easier to compare projects with the right context.',
    initials: 'CP',
    bgColor: '#1e3d5c',
  },
]

export const transactionHighlights = [
  'Advisory across branded residences, luxury end-use homes, and strategic new-launch opportunities.',
  'Support for investors, end-users, NRIs, and senior professionals across Gurugram\'s premium corridors.',
  'Emphasis on discretion, clarity, and objective-led project selection.',
]

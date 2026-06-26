/** Public image paths under /img (served from public/img). */
export function publicImage(filename: string): string {
  return `/img/${encodeURIComponent(filename)}`
}

export const companyLogo = '/img/eh-logo.png'

export const teamImages = {
  bipin: publicImage('Bipin.jpg'),
  sonu: publicImage('Sonu Kumar.jpeg'),
  himani: publicImage('Himani.jpeg'),
} as const

export const projectImages = {
  krisumiForestReserve: publicImage('Krisumi The Forest Reserve.jpeg'),
  maxEstates361: publicImage('Max Estates 361.jpg'),
  westinResidences: publicImage('Westin Residences by Whiteland.jpg'),
  indiabullsEstateClub: publicImage('India Bulls Estates & Club.jpg'),
  elanTheEmperor: publicImage('Elan The Emperor.jpg'),
  m3mElieSaab: publicImage('M3M Elie Saab.jpg'),
  toninoLamborghini: publicImage('Tonino lamborghini Residences by Signature Global.jpg'),
} as const

import Hero from '@/components/sections/Hero'
import IntroCopy from '@/components/sections/IntroCopy'
import FeaturedProperties from '@/components/sections/FeaturedProperties'
import WhyEHA from '@/components/sections/WhyEHA'
import CorridorHighlight from '@/components/sections/CorridorHighlight'
import LeadCapture from '@/components/sections/LeadCapture'
import { usePageSEO } from '@/lib/seo'

export default function Home() {
  usePageSEO(
    'Strategic Real Estate Advisory in Gurugram | Estates & Heritage Advisors',
    'Research-led real estate advisory for new launch projects in Gurugram. Corridor intelligence across SPR, CPR, Dwarka Expressway, and Golf Course Extension.'
  )

  return (
    <>
      <Hero />
      <IntroCopy />
      <FeaturedProperties />
      <WhyEHA />
      <CorridorHighlight />
      <LeadCapture />
    </>
  )
}

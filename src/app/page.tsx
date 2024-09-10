import { CallToAction } from '@/components/home/call-to-action'
import { FAQ } from '@/components/home/faq'
import { HeroSection } from '@/components/home/hero-section'
import { Services } from '@/components/home/services'
import { Team } from '@/components/home/team'
import { AOSProvider } from '@/providers/AOSProvider'

export default function Home() {
  return (
    <>
      <AOSProvider>
        <HeroSection />
        <CallToAction />
        <Services />
        <Team />
        <FAQ />
      </AOSProvider>
    </>
  )
}

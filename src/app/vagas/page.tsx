import { Section } from '@/components/section'
import { AboutSection } from '@/components/vagas/about-section'
import { Trails } from '@/components/vagas/trails'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vagas',
  description:
    'Venha crescer com a gente! Descubra nossas vagas e conecte-se com um ambiente de aprendizado e crescimento.',
}

export default function Vagas() {
  return (
    <>
      <Section padding="lg" spots>
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <h1>Vagas</h1>
          <p className="text-lg text-muted-foreground md:text-2xl">
            Venha crescer com a gente! Descubra nossas vagas e conecte-se com um
            ambiente de aprendizado e crescimento.
          </p>
        </div>
      </Section>
      <AboutSection />
      <Trails />
    </>
  )
}

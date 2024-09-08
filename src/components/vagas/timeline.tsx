import { Section } from '@/components/section'
import Image from 'next/image'

export function Timeline() {
  return (
    <Section background="primary">
      <h2>Cronograma</h2>

      <Image
        src="/images/timeline.png"
        alt="Diagrama do cronograma do processo seletivo"
        width={1160}
        height={304}
        className="hidden sm:block"
      />

      <Image
        src="/images/timeline-mob.webp"
        alt="Diagrama do cronograma do processo seletivo"
        width={304}
        height={1160}
        className="w-fulll block sm:hidden"
      />
    </Section>
  )
}

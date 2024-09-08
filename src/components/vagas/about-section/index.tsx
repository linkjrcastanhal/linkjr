import { Section } from '@/components/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <Section
      className="flex-col-reverse gap-8 lg:flex-row lg:gap-16"
      background="background"
    >
      <div className="space-y-4 text-center lg:text-start">
        <h1>Sobre o processo</h1>
        <p className="text-base text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <Link href="/" className={buttonVariants()}>
          Quero fazer parte dessa história &rarr;
        </Link>
      </div>

      <div className="flex w-1/2 flex-shrink-0 items-center justify-center">
        <Image
          src="/images/mockup.png"
          alt="placeholder"
          width={400}
          height={400}
          className="rounded-2xl border"
        />
      </div>
    </Section>
  )
}

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const SectionVariants = cva('relative', {
  variants: {
    background: {
      default: '',
      background: 'bg-background',
      primary: 'bg-primary text-background',
    },
    padding: {
      default: 'py-20',
      lg: 'py-40',
    },
  },
  defaultVariants: {
    background: 'default',
    padding: 'default',
  },
})

interface SectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SectionVariants> {
  spots?: boolean
}

export function Section({
  children,
  className,
  background,
  padding,
  spots = false,
}: SectionProps) {
  return (
    <section className={SectionVariants({ background, padding })}>
      <div
        className={cn(
          'width-wrapper flex flex-col items-center justify-center gap-16 text-center',
          className,
        )}
      >
        {children}
      </div>
      {spots && (
        <>
          <div className="blur-spot-sm bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></div>
          <div className="blur-spot-lg right-0 top-0 translate-x-1/2"></div>
        </>
      )}
    </section>
  )
}

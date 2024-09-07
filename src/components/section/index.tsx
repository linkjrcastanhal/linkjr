import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className="relative">
      <div
        className={cn(
          'width-wrapper my-20 flex flex-col items-center justify-center gap-16 text-center',
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}

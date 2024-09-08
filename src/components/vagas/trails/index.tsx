import { Section } from '@/components/section'
import { Card } from '@/components/shadcn-ui/card'
import {
  CircleDollarSign,
  CodeXml,
  Database,
  LaptopMinimal,
  Megaphone,
  User,
} from 'lucide-react'

const TRAILS = [
  {
    label: 'Áreas de Negócio',
    trails: [
      {
        title: 'Administrativo',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: CircleDollarSign,
      },
      {
        title: 'Marketing',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: Megaphone,
      },
      {
        title: 'Gestão de Pessoas',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: User,
      },
    ],
  },
  {
    label: 'Áreas de Tecnologia',
    trails: [
      {
        title: 'Desenvolvimento',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: CodeXml,
      },
      {
        title: 'UI/UX',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: LaptopMinimal,
      },
      {
        title: 'Data Science',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        Icon: Database,
      },
    ],
  },
]

export function Trails() {
  return (
    <Section background="primary">
      <div className="max-w-3xl space-y-4">
        <h2>Trilhas de trabalho</h2>
        <p className="text-lg">
          Escolhe até duas áreas para atuação na empresa
        </p>
      </div>

      <div className="space-y-8">
        {TRAILS.map((item) => (
          <div key={item.label}>
            <div className="flex w-full items-center gap-8">
              <h3 className="flex-shrink-0 flex-grow text-start text-2xl font-bold">
                {item.label}
              </h3>
              <div className="h-0.5 w-full bg-background"></div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {item.trails.map((trail) => (
                <Card
                  key={trail.title}
                  className="flex flex-col-reverse items-center gap-4 md:flex-row"
                >
                  <div className="space-y-1 text-center md:text-start">
                    <h4 className="text-xl font-semibold">{trail.title}</h4>
                    <p className="text-sm">{trail.description}</p>
                  </div>
                  <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-300">
                    <trail.Icon className="size-8 text-primary" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

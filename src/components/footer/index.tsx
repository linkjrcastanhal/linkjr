import { PAGES, SOCIAL } from '@/config'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t bg-stone-50 dark:bg-stone-900">
      <div className="width-wrapper flex flex-col-reverse items-center gap-8 py-10 md:flex-row md:justify-between md:py-20">
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-start">
          <Image
            src="/images/linkjr.svg"
            alt="Logo da LinkJr"
            width={120}
            height={51}
            className="h-12"
          />
          <p>Conectando ideias, impulsionando soluções.</p>
          <p className="text-xs">
            &copy; 2024 LinkJR. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex space-x-16 text-center md:text-start">
          <div className="space-y-4">
            <h4 className="font-semibold">Páginas</h4>
            <ul className="space-y-1">
              {PAGES.map((page) => (
                <li key={page.label}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Social</h4>
            <ul className="space-y-1">
              {SOCIAL.map((social) => (
                <li key={social.label}>
                  <Link href={social.href}>{social.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Red_Hat_Display as RedHatDisplay } from 'next/font/google'
import './globals.css'

const redHatDisplay = RedHatDisplay({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={redHatDisplay.className}>{children}</body>
    </html>
  )
}

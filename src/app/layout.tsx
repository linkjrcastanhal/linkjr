import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar/'
import { Red_Hat_Display as RedHatDisplay } from 'next/font/google'
import './globals.css'

const redHatDisplay = RedHatDisplay({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={redHatDisplay.className}>
      <body className="relative h-full antialiased">
        <div className="flex min-h-screen w-full flex-col">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

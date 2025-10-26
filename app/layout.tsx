import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/ui/header'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'AlgoCraft - Build Smart Contracts on Algorand',
  description: 'The complete Algorand development platform. Write, test, and deploy smart contracts with AI assistance, visual workflows, and professional-grade tools.',
  openGraph: {
    title: 'AlgoCraft - Build Smart Contracts on Algorand',
    description: 'The complete Algorand development platform with AI assistance.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Breadcrumbs />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
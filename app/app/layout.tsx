
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import WhatsAppFloat from '@/components/whatsapp-float'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Consulting Agency - Government Tenders & Contracts in Uganda',
  description: 'Your Gateway to Government Tenders & Contracts in Uganda. Expert consulting services for tender sourcing, supplier outsourcing, supply chain management, and documentation.',
  keywords: 'consulting, government tenders, Uganda, contracts, procurement, supply chain, documentation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppFloat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alcounting — Invoicing & bookkeeping for the one-person back office',
  description:
    'Simple, professional invoicing and bookkeeping built for small businesses. Meet AL — your friendly assistant for getting it all done. Get early access.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  )
}

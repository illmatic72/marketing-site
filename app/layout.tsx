import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ledgerly — Invoicing & bookkeeping for the one-person back office',
  description:
    'Simple, professional invoicing and bookkeeping built for small businesses. Get early access.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  )
}

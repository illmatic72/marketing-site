'use client'

import { useEffect, useRef, useState } from 'react'

const SIGNUP_URL = 'https://css-tracker-saas.vercel.app'

const FEATURES = [
  {
    icon: '🧾',
    title: 'Professional invoices in minutes',
    desc: 'Build and send polished invoices with your branding. ALcounting tracks every invoice — open, partial, or paid — so nothing falls through the cracks.',
  },
  {
    icon: '📒',
    title: 'A real bookkeeping ledger',
    desc: 'Every payment posts straight to a proper ledger with running balances and categories your accountant will actually recognize.',
  },
  {
    icon: '👥',
    title: 'Client management built in',
    desc: 'All your contacts, billing addresses, email lists, and invoice history in one place — no more digging through email threads.',
  },
  {
    icon: '📊',
    title: 'Reports when you need them',
    desc: 'AR aging, balance sheet, income by client — pull any report in seconds and hand it straight to your accountant at tax time.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Add your clients',
    desc: 'Import from a spreadsheet you already have, or type them in. Takes minutes.',
  },
  {
    step: '2',
    title: 'Send a professional invoice',
    desc: 'Build an invoice with your line items and branding. ALcounting keeps invoice numbers and totals straight for you.',
  },
  {
    step: '3',
    title: 'Record payments as they arrive',
    desc: 'Mark it paid and it posts straight to your ledger — no separate bookkeeping step, no double entry.',
  },
  {
    step: '4',
    title: 'Pull reports on demand',
    desc: 'AR aging, balance sheet, income by client — ready whenever you or your accountant need them.',
  },
]

const FAQS = [
  {
    q: 'Who is ALcounting built for?',
    a: 'Solo operators and small business owners who handle their own invoicing and bookkeeping — usually in spreadsheets or a tool that\'s grown too complicated. If you don\'t have a bookkeeper or back-office team, ALcounting is built for you.',
  },
  {
    q: 'Do I need any accounting background?',
    a: 'No. ALcounting is designed so you can run your own back office without an accounting degree — but the ledger underneath is a real bookkeeping ledger, so the numbers still make sense to your accountant.',
  },
  {
    q: 'Can I bring my existing invoices and clients over?',
    a: 'Yes. You can import clients and historical line items from a spreadsheet (CSV or Excel) instead of typing everything in by hand.',
  },
  {
    q: 'What does it cost?',
    a: 'Try ALcounting free for 14 days — no credit card required. After that, a single flat monthly plan with no per-client fees and no surprise add-ons.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your data is private to your account — every record is scoped to you, and no other user can see it.',
  },
]

// Fades + slides an element up into place the first time it scrolls into view.
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Adds a shadow to the sticky header once the page has scrolled a bit.
function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export default function Home() {
  const scrolled = useScrolled()

  return (
    <main>
      {/* Nav */}
      <header
        className={`bg-white border-b border-slate-100 sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-none'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/ALcounting-wordmark-navy-cropped.png" alt="ALcounting" className="h-12 w-auto" />
          <a
            href={SIGNUP_URL}
            className="bg-[#0D7490] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0A5F73] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Start Free Trial →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0D7490]">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-20 text-center">
          <Reveal>
            <p className="text-sm font-semibold text-[#67E8F9] uppercase tracking-widest mb-5">
              ALcounting — Built for small business owners
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Invoicing and bookkeeping that actually fits your business
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Simple enough to run yourself. Real enough to hand to your accountant.
              Send invoices, track payments, and keep a true bookkeeping ledger — all in one place.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-3">
              <a
                href={SIGNUP_URL}
                className="bg-white text-[#0D7490] font-bold text-base px-8 py-3.5 rounded-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
              >
                Start your free 14-day trial →
              </a>
              <p className="text-xs text-slate-400">No credit card required.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* App screenshots */}
      <section className="bg-[#0A5F73]">
        <div className="max-w-5xl mx-auto px-6 pb-0 flex justify-center">
          <Reveal className="w-full max-w-4xl">
            <div className="w-full rounded-t-2xl border border-slate-200 shadow-2xl overflow-hidden hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300">
              <img src="/Landing%20Photo%201.png" alt="ALcounting invoice list" className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Second screenshot */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Know exactly what you're owed</h2>
              <p className="text-slate-500">See every open balance at a glance and send reminders in one click.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-200 shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <img src="/Landing%20Photo%203.png" alt="ALcounting open balance summary" className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
              Everything your back office actually needs
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-500 text-center mb-12">No bloat. No complexity. Just the tools a one-person operation uses every day.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="group bg-white rounded-xl border border-slate-200 p-6 flex gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-[#0D7490]/30 transition-all duration-300">
                  <span className="text-2xl inline-block group-hover:scale-110 transition-transform duration-300">{f.icon}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
            How ALcounting works
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-slate-500 text-center max-w-xl mx-auto mb-12">
            From "I have no idea where my invoices are" to a clean bookkeeping ledger in four steps.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((s, i) => (
            <Reveal key={s.step} delay={i * 120}>
              <div className="group text-center">
                <div className="w-12 h-12 rounded-full bg-[#0D7490] text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  {s.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand / positioning strip */}
      <section className="bg-[#0D7490]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <Reveal>
            <div className="inline-block bg-white rounded-lg px-6 py-3 mb-6">
              <img src="/ALcounting-wordmark-navy-cropped.png" alt="ALcounting" className="h-10 w-auto" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Built for businesses that have outgrown spreadsheets
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
              ALcounting was built by a small business owner, for small business owners.
              No boardroom. No enterprise pricing. Just a clean, honest tool that helps you
              run your back office the right way.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-block bg-white text-[#0D7490] font-bold px-8 py-3.5 rounded-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg"
            >
              Try ALcounting free for 14 days →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <Reveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Simple, honest pricing</h2>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed mb-10">
              One flat monthly plan. No per-client fees, no seat limits, no surprise add-ons.
              Start with a free 14-day trial and see if ALcounting fits the way you work.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="inline-flex flex-col items-center bg-white border-2 border-[#0D7490] rounded-xl px-10 py-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <span className="text-sm font-bold text-[#0D7490] uppercase tracking-widest mb-3">Free Trial</span>
              <span className="text-5xl font-bold text-slate-900 mb-1">14 days</span>
              <span className="text-slate-500 mb-6">No credit card required</span>
              <a
                href={SIGNUP_URL}
                className="bg-[#0D7490] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0A5F73] hover:scale-105 active:scale-95 transition-all duration-200 w-full text-center"
              >
                Start free trial →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Frequently asked questions</h2>
        </Reveal>
        <div className="space-y-6">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <div className="border-b border-slate-100 pb-6 hover:border-[#0D7490]/40 transition-colors duration-300">
                <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#101828]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <Reveal>
            <div className="inline-block bg-white rounded-lg px-6 py-3 mb-6">
              <img src="/ALcounting-wordmark-navy-cropped.png" alt="ALcounting" className="h-10 w-auto" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to get your back office under control?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Start your free 14-day trial today. No credit card, no commitment — just a cleaner way to run your business.
            </p>
            <a
              href={SIGNUP_URL}
              className="inline-block bg-[#0D7490] text-white font-bold text-base px-10 py-4 rounded-lg hover:bg-[#0A5F73] hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg border border-[#1A9DB5]"
            >
              Start free trial — it's free for 14 days →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} ALcounting. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:text-slate-600">Terms</a>
            <a href="/privacy" className="hover:text-slate-600">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

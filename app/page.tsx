import SignupForm from './components/SignupForm'

const FEATURES = [
  {
    title: 'Professional invoices',
    desc: 'Create and send polished invoices in minutes, track who has paid, and follow up on what hasn\'t — without spreadsheets.',
  },
  {
    title: 'A real bookkeeping ledger',
    desc: 'Every transaction lands in a proper ledger with running balances, categories, and reports your accountant will actually recognize.',
  },
  {
    title: 'Client management',
    desc: 'Keep contact info, billing details, and history for every client in one place — no more digging through email threads.',
  },
  {
    title: 'Clear financial reports',
    desc: 'Balance sheets, income by client, and account balances — drill into any number to see exactly what\'s behind it.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900 tracking-tight">Ledgerly</span>
          <a
            href="#signup"
            className="text-sm font-semibold text-[#1F4E5C] hover:text-[#163942]"
          >
            Get Early Access →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm font-semibold text-[#1F4E5C] uppercase tracking-wide mb-4">
          For small business owners, not accountants
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-3xl mx-auto">
          Invoicing and bookkeeping built for the one-person back office
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Simple enough to run yourself. Real enough to hand to your accountant.
          Track invoices, manage clients, and keep a true bookkeeping ledger — all in one place.
        </p>
        <div id="signup" className="mt-10 flex flex-col items-center gap-3">
          <SignupForm />
          <p className="text-xs text-slate-400">No credit card required. We'll only email you about early access.</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Everything your back office actually needs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FEATURES.map(f => (
              <div key={f.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / positioning strip */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Built for businesses that have outgrown spreadsheets — but aren't ready for enterprise software
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We're building this in the open with real small business owners, not in a boardroom.
          Sign up to follow along and be first in line when early access opens.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-[#101828]">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Be first to know when we launch
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Early access spots are limited. Join the list and we'll reach out personally.
          </p>
          <div className="flex justify-center">
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400">
          <span>© {new Date().getFullYear()} Ledgerly. All rights reserved.</span>
          <span>Brand name placeholder — final name pending domain selection.</span>
        </div>
      </footer>
    </main>
  )
}

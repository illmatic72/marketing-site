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

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Add your clients',
    desc: 'Bring over contacts and billing info in minutes — type them in or import from a spreadsheet you already have.',
  },
  {
    step: '2',
    title: 'Send a professional invoice',
    desc: 'Build an invoice with your line items, your branding, and your terms. AL keeps the next invoice number and totals straight for you.',
  },
  {
    step: '3',
    title: 'Get paid, automatically recorded',
    desc: 'Mark payments as they come in and they post straight to your ledger — no separate bookkeeping step, no double entry.',
  },
  {
    step: '4',
    title: 'Pull a report whenever you need one',
    desc: 'Balance sheets, income by client, and account balances — ready to view or hand to your accountant at tax time.',
  },
]

const FAQS = [
  {
    q: 'Who is this built for?',
    a: 'Solo operators and small business owners who are doing their own invoicing and bookkeeping today — usually in spreadsheets, sticky notes, or a tool that\'s grown too complicated. If you don\'t have a bookkeeper or back-office team, this is built for you.',
  },
  {
    q: 'Do I need any accounting background?',
    a: 'No. AL is designed so you can run your own back office without an accounting degree — but the ledger underneath is a real bookkeeping ledger, so the numbers will still make sense to your accountant if you hand them off.',
  },
  {
    q: 'Can I move my existing invoices and clients over?',
    a: 'Yes. You can import clients and historical line items from a spreadsheet (CSV or Google Sheets) instead of typing everything in by hand.',
  },
  {
    q: 'What will it cost?',
    a: 'Pricing isn\'t finalized yet — early access members will get a preview of pricing before anyone else and a say in how it\'s structured. No credit card is required to join the waitlist.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your data is private to your account — every record is scoped to you, and nobody else using the product can see it. We\'ll publish full security details before general availability.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <header className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900 tracking-tight"><span className="text-[#1F4E5C]">AL</span>counting</span>
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

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">
          How it works
        </h2>
        <p className="text-slate-600 text-center max-w-xl mx-auto mb-12">
          Four steps from "I have no idea where my invoices are" to a clean, real bookkeeping ledger.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map(s => (
            <div key={s.step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-[#1F4E5C] text-white font-bold flex items-center justify-center mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
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

      {/* Pricing teaser */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Simple pricing, built for one person</h2>
          <p className="text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
            We're still finalizing pricing, but the goal is a single straightforward plan —
            no per-client fees, no surprise add-ons. Early access members get a preview
            before anyone else and a voice in how it's structured.
          </p>
          <div className="inline-flex flex-col items-center bg-white border border-slate-200 rounded-xl px-8 py-6">
            <span className="text-sm font-semibold text-[#1F4E5C] uppercase tracking-wide mb-2">Early Access</span>
            <span className="text-3xl font-bold text-slate-900 mb-2">Free to start</span>
            <span className="text-sm text-slate-500">No credit card required while we build this together</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {FAQS.map(item => (
            <div key={item.q} className="border-b border-slate-100 pb-6">
              <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
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
          <span>© {new Date().getFullYear()} Alcounting. All rights reserved.</span>
          <span>Meet AL — your invoicing & bookkeeping assistant.</span>
        </div>
      </footer>
    </main>
  )
}

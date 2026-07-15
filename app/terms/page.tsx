const SIGNUP_URL = 'https://css-tracker-saas.vercel.app'

export default function TermsPage() {
  return (
    <main>
      {/* Nav */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <img src="/ALcounting-wordmark-navy-cropped.png" alt="ALcounting" className="h-12 w-auto" />
          </a>
          <a
            href={SIGNUP_URL}
            className="bg-[#0D7490] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#0A5F73] transition-colors"
          >
            Start Free Trial →
          </a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: July 15, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using ALcounting (the &quot;Service&quot;), operated by ALcounting
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a business based in Florida, you agree to be
              bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the
              Service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Description of Service</h2>
            <p>
              ALcounting is a software-as-a-service invoicing and bookkeeping tool for small businesses. It lets
              you create invoices, manage clients, record transactions in a ledger, and generate financial reports
              based on the information you enter.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">3. Not Professional Advice</h2>
            <p>
              ALcounting is a software tool, not an accounting firm, bookkeeper, tax preparer, or law firm. We do
              not provide accounting, tax, financial, or legal advice. The reports and figures ALcounting generates
              are only as accurate as the information you enter. You are responsible for reviewing your own
              financial records and consulting a licensed accountant, bookkeeper, or tax professional for advice
              specific to your business.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">4. Account Registration</h2>
            <p>
              You must be at least 18 years old and able to form a binding contract to use the Service. You are
              responsible for maintaining the confidentiality of your login credentials and for all activity under
              your account. Please notify us immediately at{' '}
              <a href="mailto:support@alcounting.com" className="text-[#0D7490] hover:underline">
                support@alcounting.com
              </a>{' '}
              if you suspect unauthorized use of your account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">5. Free Trial</h2>
            <p>
              New accounts receive a 14-day free trial. No credit card is required to start a trial. At the end of
              the trial, you will need to subscribe to a paid plan to continue using most features. If you do not
              subscribe, your account will be locked — your data will not be deleted, but access to most features
              will be paused until you subscribe.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">6. Subscription and Billing</h2>
            <p>
              Paid subscriptions are billed monthly in advance through our payment processor, Stripe, at the rate
              displayed at checkout. By subscribing, you authorize us to charge your payment method on a recurring
              basis until you cancel. You can cancel anytime from the Billing page in your account; cancellation
              takes effect at the end of your current billing period, and we do not provide refunds for partial
              billing periods. We may change our pricing with at least 30 days&apos; notice; continuing to use the
              Service after a price change takes effect means you accept the new price.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">7. Your Data</h2>
            <p>
              You own the business data you enter into ALcounting — your clients, invoices, transactions, and
              related records. We do not sell your data. We may access your data to provide support, maintain the
              Service, or as required by law. You are responsible for the accuracy of the information you enter and
              for maintaining your own backups of critical records.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">8. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to other accounts or to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Resell or provide the Service to third parties without our permission</li>
              <li>Reverse-engineer the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">9. Service Availability</h2>
            <p>
              We aim to keep ALcounting available and reliable, but the Service is provided &quot;as is&quot; and
              &quot;as available,&quot; without warranties of any kind, whether express or implied. We do not
              guarantee the Service will be uninterrupted, error-free, or secure at all times.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, ALcounting will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill,
              arising from your use of the Service. Our total liability for any claim relating to the Service is
              limited to the amount you paid us in the 12 months before the claim arose.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">11. Termination</h2>
            <p>
              You may stop using the Service and cancel your subscription at any time. We may suspend or terminate
              your access if you violate these Terms or if we discontinue the Service, with notice where reasonably
              possible. Upon termination, we will provide a reasonable opportunity to export your data before it is
              deleted.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. If we make material changes, we will notify you — for
              example, by email or an in-app notice. Continued use of the Service after changes take effect means
              you accept the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law
              principles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">14. Contact Us</h2>
            <p>
              Questions about these Terms? Email us at{' '}
              <a href="mailto:support@alcounting.com" className="text-[#0D7490] hover:underline">
                support@alcounting.com
              </a>
              .
            </p>
          </div>
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

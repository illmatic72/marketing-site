const SIGNUP_URL = 'https://css-tracker-saas.vercel.app'

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated: July 15, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy explains how ALcounting (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              collects, uses, and protects information when you use our invoicing and bookkeeping software (the
              &quot;Service&quot;).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Account information:</span> your name, email address, and password
                (your password is securely hashed by our authentication provider — we never see or store it in
                plain text).
              </li>
              <li>
                <span className="font-medium">Business data you enter:</span> client names and contact details,
                invoices, ledger transactions, categories, and other records you choose to store in ALcounting to
                run your business.
              </li>
              <li>
                <span className="font-medium">Payment information:</span> if you subscribe to a paid plan, your
                payment is processed directly by Stripe, our payment processor. ALcounting does not receive or
                store your full card number — Stripe shares only limited billing details (such as subscription
                status) with us.
              </li>
              <li>
                <span className="font-medium">Usage information:</span> basic technical information such as
                browser type and general usage patterns, used to keep the Service running smoothly and to
                troubleshoot issues.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">3. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide and maintain the Service</li>
              <li>Process your subscription and billing</li>
              <li>Communicate with you about your account, such as trial reminders or billing notices</li>
              <li>Respond to support requests</li>
              <li>Improve and secure the Service</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">4. How Information Is Shared</h2>
            <p>
              We do not sell your personal information or business data. We share information only with the service
              providers that help us run ALcounting, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Supabase (database hosting and authentication)</li>
              <li>Stripe (payment processing)</li>
              <li>Vercel (application hosting)</li>
            </ul>
            <p className="mt-2">
              These providers only receive the information necessary to perform their function and are
              contractually restricted from using it for other purposes. We may also disclose information if
              required by law or to protect the rights, safety, or property of ALcounting or others.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">5. Data Security</h2>
            <p>
              Your data is stored with industry-standard security measures, including encryption in transit and at
              rest, and access controls that keep each business&apos;s data separated from every other
              business&apos;s data. No system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">6. Data Retention</h2>
            <p>
              We retain your account and business data for as long as your account is active. If you cancel your
              subscription, your data remains accessible if you resubscribe. If you close your account entirely, we
              will delete your data within a reasonable period, except where we are required to retain certain
              records by law.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">7. Your Rights and Choices</h2>
            <p>
              You can access, update, or export most of your business data directly within the app. You may request
              a copy of your data or ask us to delete your account and associated data by emailing{' '}
              <a href="mailto:support@alcounting.com" className="text-[#0D7490] hover:underline">
                support@alcounting.com
              </a>
              . We will respond to reasonable requests within a reasonable timeframe.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">8. Cookies</h2>
            <p>
              We use only essential cookies required to keep you logged in and to remember your session. We do not
              use advertising or third-party tracking cookies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">9. Children&apos;s Privacy</h2>
            <p>
              ALcounting is intended for business use by adults. It is not directed at children under 13, and we do
              not knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you
              — for example, by email or an in-app notice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">11. Contact Us</h2>
            <p>
              Questions about this Privacy Policy or your data? Email us at{' '}
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

'use client'

import { useState } from 'react'

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error ?? 'Something went wrong.')
      setStatus('done')
    } catch (e: any) {
      setStatus('error')
      setError(e.message ?? 'Something went wrong.')
    }
  }

  if (status === 'done') {
    return (
      <div className="rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 text-sm font-medium">
        You're on the list — we'll email you when early access opens.
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@yourbusiness.com"
        className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F4E5C] focus:border-transparent"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-lg bg-[#1F4E5C] text-white px-6 py-3 text-sm font-semibold hover:bg-[#163942] disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'loading' ? 'Joining…' : 'Get Early Access'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 sm:absolute sm:mt-14">{error}</p>
      )}
    </form>
  )
}

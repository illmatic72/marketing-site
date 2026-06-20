import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { email } = await req.json().catch(() => ({}))

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const { error } = await supabase
    .from('landing_signups')
    .insert({ email: email.trim().toLowerCase() })

  if (error) {
    // Treat duplicate email as a success from the user's perspective
    if (error.code === '23505') {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}

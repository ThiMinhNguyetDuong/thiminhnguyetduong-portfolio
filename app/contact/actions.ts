'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const contactEmail =
  process.env.CONTACT_EMAIL ?? 'nguyet.tm.duong@gmail.com'

export type ContactFormState = {
  success: boolean
  error: string
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const subject = formData.get('subject')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'Please fill in all fields.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      error:
        'Email is not configured yet. Add RESEND_API_KEY to your environment variables.',
    }
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: contactEmail,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })

  if (error) {
    return {
      success: false,
      error: 'Failed to send message. Please try again or email me directly.',
    }
  }

  return { success: true, error: '' }
}

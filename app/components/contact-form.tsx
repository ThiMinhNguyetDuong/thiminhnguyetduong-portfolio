'use client'

import { useFormState, useFormStatus } from 'react-dom'
import {
  sendContactEmail,
  type ContactFormState,
} from 'app/contact/actions'

const initialState: ContactFormState = {
  success: false,
  error: '',
}

const inputClassName =
  'w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useFormState(sendContactEmail, initialState)

  if (state.success) {
    return (
      <div className="rounded-lg border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/40 px-4 py-6 text-green-800 dark:text-green-200">
        <p className="font-medium">Message sent successfully.</p>
        <p className="mt-2 text-sm text-green-700 dark:text-green-300">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error ? (
        <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm text-red-800 dark:text-red-200">
          {state.error}
        </div>
      ) : null}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClassName}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClassName}
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputClassName}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={`${inputClassName} resize-vertical`}
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <SubmitButton />
    </form>
  )
}

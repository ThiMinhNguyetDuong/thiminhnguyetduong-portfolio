import Link from 'next/link'
import { ContactForm } from 'app/components/contact-form'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Thi - CV, LinkedIn, and email.',
}

export default function Contact() {
  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-32 py-12">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-neutral-900 dark:text-neutral-100">
        Contact
      </h1>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              Get in Touch
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Feel free to reach out! I&apos;m always interested in new
              opportunities and collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-neutral-600 dark:text-neutral-400 w-20">
                Email
              </span>
              <Link
                href="mailto:nguyet.tm.duong@gmail.com"
                className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                nguyet.tm.duong@gmail.com
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-neutral-600 dark:text-neutral-400 w-20">
                LinkedIn
              </span>
              <Link
                href="https://linkedin.com/in/tmnduong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                linkedin.com/in/tmnduong
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-neutral-600 dark:text-neutral-400 w-20">
                CV
              </span>
              <Link
                href="/ThiMinhNguyetDuong_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                Download CV (PDF)
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

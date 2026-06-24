import Link from 'next/link'

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Thi - CV, LinkedIn, and email.',
}

export default function Contact() {
    return (
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 py-12">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter text-neutral-900 dark:text-neutral-100">Contact</h1>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Get in Touch</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                            Feel free to reach out! I'm always interested in new opportunities and collaborations.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-neutral-600 dark:text-neutral-400 w-20">Email</span>
                            <Link
                                href="mailto:nguyet.tm.duong@gmail.com"
                                className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                            >
                                nguyet.tm.duong@gmail.com
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span className="text-neutral-600 dark:text-neutral-400 w-20">LinkedIn</span>
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
                            <span className="text-neutral-600 dark:text-neutral-400 w-20">CV</span>
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

                {/* Contact Form */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Send a Message</h2>
                    <form className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 transition-colors resize-vertical"
                                placeholder="Tell me about your project or opportunity..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 py-3 px-6 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

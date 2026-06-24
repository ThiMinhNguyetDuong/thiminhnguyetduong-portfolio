import { ProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'View my projects.',
}

export default function Page() {
  return (
    <section className="px-6 md:px-12 lg:px-24 xl:px-32 py-12">
      <div className="mb-12">
        <h1 className="font-semibold text-3xl mb-4 tracking-tighter text-neutral-900 dark:text-neutral-100">
          My Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
          A collection of my work spanning full-stack development, game design, and collaborative projects.
        </p>
      </div>
      <ProjectPosts />
    </section>
  )
}

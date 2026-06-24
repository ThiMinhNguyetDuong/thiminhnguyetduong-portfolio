import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/projects/utils'

export function ProjectPostsSimple() {
  let allProjects = getBlogPosts()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-4">
              <p className="text-neutral-600 dark:text-neutral-400 w-[140px] md:w-[160px] tabular-nums flex-shrink-0">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export function ProjectPosts() {
  let allProjects = getBlogPosts()

  // Define project categories and their colors
  const getProjectCategory = (title: string) => {
    if (title.includes('Game') || title.includes('Spaceship') || title.includes('Animal')) {
      return { name: 'Game Development', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' }
    }
    if (title.includes('Management') || title.includes('Chatbot')) {
      return { name: 'Full-Stack', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' }
    }
    if (title.includes('Analytics')) {
      return { name: 'Data Engineering', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' }
    }
    if (title.includes('Vinylify')) {
      return { name: 'Full-Stack', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' }
    }
    if (title.includes('Travel Blog')) {
      return { name: 'Frontend', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' }
    }
    return { name: 'Other', color: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300' }
  }

  return (
    <div className="space-y-6">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, index) => {
          const category = getProjectCategory(post.metadata.title)
          return (
            <Link
              key={post.slug}
              className="group block p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg bg-white dark:bg-neutral-900"
              href={`/projects/${post.slug}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
                      {formatDate(post.metadata.publishedAt, false)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                    {post.metadata.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {post.metadata.summary}
                  </p>
                </div>
                <div className="flex items-center text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

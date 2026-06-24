function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 xl:px-32 py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        <div>
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Thi Minh Nguyet Duong. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-col space-y-2 text-neutral-600 md:flex-row md:space-x-6 md:space-y-0 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/tmnduong"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:nguyet.tm.duong@gmail.com"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">email</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

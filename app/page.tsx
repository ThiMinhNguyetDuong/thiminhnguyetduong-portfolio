import Link from 'next/link'
import { ProjectPostsSimple } from 'app/components/posts'

export default function Page() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 xl:px-32">
      {/* Main Hero Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          {/* Vertical About Label */}
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              About
            </h2>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-5xl lg:text-4xl font-bold tracking-tight mb-12 text-neutral-900 dark:text-neutral-100 leading-tight">
              I <span className="text-neutral-500 dark:text-neutral-400">built</span> interfaces that think - and products that matter.
            </h1>

            <div className="space-y-6 text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-4xl">
              <p className="text-lg">
                Hi, I'm Thi — a final-year Computer Science student and frontend developer based in Brussels. I specialise in building production-ready web applications with React, Next.js, and TypeScript, with a growing focus on cloud-native architecture and data-driven UI.
              </p>

              <p className="text-lg">
                Over the past year I've been working at Novable, an AI-powered B2B SaaS platform, where I've shipped features used by real clients — from UI redesigns that reduced workflow friction to analytics integration that informed product decisions. Alongside that, I've led QA on a live client platform and deployed full-stack applications on Azure independently.
              </p>

              <p className="text-lg">
                I care about writing clean, maintainable code and designing interfaces that genuinely serve the people using them — not just the ones that look good in a mockup.
              </p>

              <p className="text-lg">
                I'm currently completing my degree and open to new opportunities starting later in 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              Work Experience
            </h2>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-neutral-100">Work Experience</h3>

            {/* Novable — Part-time Developer */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Frontend Developer (Part-time) — Novable</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">May 2026 – Present • Brussels, Belgium</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Role</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Frontend Developer (Part-time)</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Company</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Novable</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Focus</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">UI/UX, product & analytics</p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-4xl">
                I transitioned from intern to contracted developer — taking on greater ownership of product features and working more directly on the direction of what gets built and how. I lead UI/UX improvements across core product areas, focusing on data interpretability and reducing friction for clients navigating complex workflows. Beyond implementation, I contribute to product decisions, analytics integration, and cross-functional planning alongside the CTO.
              </p>
            </div>

            {/* Novable — Intern */}
            <div className="space-y-6 mt-12">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Frontend Developer Intern — Novable</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">September 2025 – April 2026 • Brussels, Belgium</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Role</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Frontend Developer Intern</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Company</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Novable</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Stack</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">React, Next.js, TypeScript, Redux</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div>
                  <p className="mb-4">
                    My internship at Novable is where I went from writing components to thinking in products — building and shipping production features for a B2B SaaS platform used by real clients, working across React, Next.js, and TypeScript in a fast-moving environment.
                  </p>
                  <p>
                    I started by getting familiar with the codebase — debugging, refactoring, and improving existing flows — then gradually took on larger redesigns across core platform views.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    Over time I became more involved in brainstorming and design feedback loops, learning to balance technical constraints with user needs.
                  </p>
                  <p>
                    By the end of the internship, I was shipping features that worked for real clients in production — not just prototypes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          {/* Vertical Projects Label */}
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              Projects
            </h2>
          </div>

          {/* Projects Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-neutral-100">Latest Projects</h3>
            <ProjectPostsSimple />
          </div>
        </div>
      </section>

      {/* Participations Section */}
      <section className="py-16">
        <div className="flex items-start gap-16">
          {/* Vertical Participations Label */}
          <div className="flex-shrink-0">
            <h2 className="text-sm font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider writing-mode-vertical-rl transform rotate-180">
              Participations
            </h2>
          </div>

          {/* Participations Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-8 text-neutral-900 dark:text-neutral-100">Participations</h3>

            {/* E³UDRES² Hackathon */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">E³UDRES² European University Hackathon</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">February 2024 • Leuven, Belgium</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">What</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">EUDRES "Talent Portal" Hackathon</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Where</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Leuven, Belgium</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">When</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">2024</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div>
                  <p className="mb-4">
                    The challenge "Talent Portal" focused on developing an innovative platform to match talents with companies. I joined an amazing innovation team, where we brainstormed and developed a compelling business plan and created prototypes for the platform.
                  </p>
                  <p>
                    Switching gears, I also collaborated with the coding team, writing and testing algorithms designed to perfectly match talents to the right companies. Both teams were incredibly motivating, pushing us to tackle problems head-on and find creative solutions.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    The hackathon wasn't just about the intense coding and planning; it was also about the connections made. I met a diverse group of talented individuals who were just as passionate about solving the challenges of talent acquisition as I am.
                  </p>
                  <p>
                    Working alongside these brilliant minds was not only a pleasure but also an enriching experience that broadened my perspective. The ideas and concepts we developed are just the beginning, and I can't wait to see them come to life.
                  </p>
                </div>
              </div>
            </div>

            {/* SIVIBI Leadership */}
            <div className="space-y-6 mt-12">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Head of Human Resources - SIVIBI</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">2022 • Vietnamese Student Association in Belgium</p>

                <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Role</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">Head of Human Resources</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Organization</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">SIVIBI</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Event</span>
                    <p className="text-sm text-neutral-900 dark:text-neutral-100">BELCOME 2022-2023</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <div>
                  <p className="mb-4">
                    In 2022, I led "Belcome 2022-2023," an epic welcome event for over 70 new Vietnamese students in Belgium. As the Head of HR at SIVIBI, I was the mastermind behind the scenes, responsible for planning everything down to the last detail.
                  </p>
                  <p>
                    This involved a whirlwind of team meetings, endless to-do lists, and a few too many late-night coffee runs. Despite the chaos, we pulled off an event that was warm, inclusive, and downright fun.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    The experience taught me about the magic of community and the importance of good leadership—and that a little humor goes a long way in turning challenges into successes.
                  </p>
                  <p>
                    Working with such a diverse group of students and creating an environment where everyone felt welcome was incredibly rewarding. It showed me the power of bringing people together and the impact of thoughtful event planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

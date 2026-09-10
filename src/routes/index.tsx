import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowUpRight } from 'lucide-react'
import { OptimizedImage } from '@/components/optimized-image'

export const Route = createFileRoute('/')({
  component: Home,
})

const STRIP = [
  { src: '/gallery/kiln-study-no2.jpg', title: 'Kiln Study No. 2' },
  { src: '/gallery/terracotta-grid.jpg', title: 'Terracotta Grid' },
  { src: '/gallery/ochre-horizon.jpg', title: 'Ochre Horizon' },
  { src: '/gallery/sand-line-study.jpg', title: 'Sand Line Study' },
]

function Home() {
  const featured = allProjects.slice(0, 2)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-36 pb-24 md:px-10 md:pt-48 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-clay">
              Visual designer — identity, editorial, web
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              I design things
              <br />
              that still look
              <br />
              <span className="italic text-clay">right</span> years later.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              I'm Marisol Fenn, a Brooklyn-based designer building identity
              systems, editorial objects, and websites for people who care
              about the print run as much as the pixels.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-sm uppercase tracking-[0.08em] text-paper transition-colors hover:bg-clay hover:border-clay"
              >
                View the gallery
                <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm uppercase tracking-[0.08em] text-ink transition-colors hover:border-clay hover:text-clay"
              >
                See the work
              </Link>
            </div>
          </div>

          <div className="relative mt-8 md:col-span-5 md:mt-0">
            <div className="absolute -right-4 top-6 hidden h-full w-full border border-clay/50 md:block" />
            <OptimizedImage
              src="/headshot-on-white.jpg"
              alt="Marisol Fenn in her Bushwick studio"
              widths={[400, 600, 800]}
              sizes="(min-width: 768px) 380px, 70vw"
              className="relative aspect-[4/5] w-full max-w-sm object-cover"
              fetchPriority="high"
              loading="eager"
            />
            <p className="mt-3 text-xs uppercase tracking-[0.08em] text-ink-soft">
              Fig. 1 — Studio, Bushwick, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Selected pieces strip */}
      <section className="border-t border-ink/10 bg-paper-soft px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink">Recent studies</h2>
            <Link
              to="/gallery"
              className="hidden items-center gap-1 text-sm uppercase tracking-[0.08em] text-ink-soft hover:text-clay md:inline-flex"
            >
              Full gallery
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {STRIP.map((item, i) => (
              <Link
                key={item.src}
                to="/gallery"
                className={`group block ${i % 2 === 1 ? 'md:mt-8' : ''}`}
              >
                <OptimizedImage
                  src={item.src}
                  alt={item.title}
                  widths={[300, 500, 700]}
                  sizes="(min-width: 768px) 260px, 45vw"
                  aspect="4/5"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.08em] text-ink-soft">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-display text-3xl text-ink">
            Featured projects
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project._meta.path}
                to="/projects"
                className="group block border border-ink/10 bg-card"
              >
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  widths={[400, 700, 1000]}
                  sizes="(min-width: 768px) 480px, 90vw"
                  aspect="4/3"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="p-6">
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-ink">
                      {project.title}
                    </h3>
                    <span className="text-sm text-ink-soft">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-ink-soft">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

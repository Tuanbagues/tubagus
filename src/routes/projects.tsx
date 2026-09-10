import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ExternalLink, Github } from 'lucide-react'
import { OptimizedImage } from '@/components/optimized-image'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  const projects = [...allProjects].sort(
    (a, b) => Number(b.year) - Number(a.year),
  )

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-clay">
          Projects
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl">
          Selected work
        </h1>
        <p className="mt-5 max-w-lg text-lg text-ink-soft">
          Four to five projects a year, start to finish — identity, print,
          and the websites that go with them.
        </p>

        <div className="mt-16 space-y-20">
          {projects.map((project, i) => (
            <article
              key={project._meta.path}
              className="grid gap-8 md:grid-cols-12 md:gap-10"
            >
              <div
                className={`md:col-span-6 ${i % 2 === 1 ? 'md:order-2' : ''}`}
              >
                <OptimizedImage
                  src={project.image}
                  alt={project.title}
                  widths={[400, 700, 1000]}
                  sizes="(min-width: 768px) 560px, 90vw"
                  aspect="4/3"
                  className="w-full object-cover"
                />
              </div>

              <div
                className={`flex flex-col md:col-span-6 md:justify-center ${
                  i % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-3xl text-ink md:text-4xl">
                    {project.title}
                  </h2>
                  <span className="whitespace-nowrap text-sm text-ink-soft">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-sm uppercase tracking-[0.06em] text-clay">
                  {project.role}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {project.content}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/15 px-3 py-1 text-xs uppercase tracking-[0.06em] text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.06em] text-ink hover:text-clay"
                    >
                      <ExternalLink size={15} />
                      View site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.06em] text-ink hover:text-clay"
                    >
                      <Github size={15} />
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

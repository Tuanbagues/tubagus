import { createFileRoute } from '@tanstack/react-router'
import { OptimizedImage } from '@/components/optimized-image'

export const Route = createFileRoute('/about')({
  component: About,
})

const APPROACH = [
  {
    title: 'Start with the constraint',
    body: 'A logo that has to be stamped, a menu that has to update from a phone, a book that has to lie flat — the constraint is usually the idea.',
  },
  {
    title: 'Design for the object, not the deck',
    body: "Presentation decks don't ship. I mock everything up in the material it actually lives in as early as possible: cardstock, browser, storefront.",
  },
  {
    title: 'Leave the seams visible',
    body: 'A stamp that varies slightly between mugs, a grid that almost lines up — small imperfections read as handmade instead of templated.',
  },
]

const TIMELINE = [
  { range: '2018 — now', role: 'Independent studio', place: 'Brooklyn, NY' },
  {
    range: '2015 — 2018',
    role: 'Senior designer, Hollow & Stack',
    place: 'Brand identity studio, Philadelphia',
  },
  {
    range: '2012 — 2015',
    role: 'Junior designer, Print Row',
    place: 'Letterpress & editorial shop, Philadelphia',
  },
]

function About() {
  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <OptimizedImage
              src="/headshot-on-white.jpg"
              alt="TB.ACHMAD ILHAM EFENDI"
              widths={[350, 550, 750]}
              sizes="(min-width: 768px) 320px, 80vw"
              className="aspect-[4/5] w-full max-w-sm object-cover"
            />
          </div>

          <div className="md:col-span-8">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-clay">
              About
            </p>
            <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              Trained as a printmaker, working mostly in pixels now — the
              habits carried over anyway.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                I run a one-person studio out of a converted garment factory
                in Bushwick, taking on four or five projects a year — mostly
                identity systems and the websites, packaging, or signage that
                come with them. Before that I spent six years split between
                a Philadelphia letterpress shop and an identity studio,
                which is where the print habits stuck.
              </p>
              <p>
                I still keep a proof press in the studio. Most projects pass
                through it at least once, even the ones that end as a
                website — printing something at actual size catches spacing
                problems a screen never will.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-24 border-t border-ink/10 pt-16">
          <h2 className="font-display text-3xl text-ink">Approach</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {APPROACH.map((item, i) => (
              <div key={item.title}>
                <span className="font-display text-4xl text-clay">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-ink/10 pt-16">
          <h2 className="font-display text-3xl text-ink">Background</h2>
          <div className="mt-10 divide-y divide-ink/10">
            {TIMELINE.map((row) => (
              <div
                key={row.range}
                className="grid gap-2 py-5 md:grid-cols-[180px_1fr_1fr] md:items-baseline"
              >
                <span className="text-sm uppercase tracking-[0.06em] text-clay">
                  {row.range}
                </span>
                <span className="font-display text-xl text-ink">
                  {row.role}
                </span>
                <span className="text-ink-soft">{row.place}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

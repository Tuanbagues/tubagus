import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X } from 'lucide-react'
import { OptimizedImage } from '@/components/optimized-image'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const PIECES = [
  {
    src: '/gallery/kiln-study-no2.jpg',
    title: 'Kiln Study No. 2',
    medium: 'Risograph, 18 × 24 in',
    year: '2025',
    tall: true,
  },
  {
    src: '/gallery/low-tide-archive.jpg',
    title: 'Low Tide Archive',
    medium: 'Archival pigment print',
    year: '2024',
  },
  {
    src: '/gallery/field-notes-iii.jpg',
    title: 'Field Notes III',
    medium: 'Mixed media on panel',
    year: '2024',
    tall: true,
  },
  {
    src: '/gallery/terracotta-grid.jpg',
    title: 'Terracotta Grid',
    medium: 'Screenprint, edition of 40',
    year: '2023',
  },
  {
    src: '/gallery/ochre-horizon.jpg',
    title: 'Ochre Horizon',
    medium: 'Digital study',
    year: '2023',
  },
  {
    src: '/gallery/moss-interior.jpg',
    title: 'Moss Interior',
    medium: 'Gouache on paper',
    year: '2022',
    tall: true,
  },
  {
    src: '/gallery/rust-belt-poster.jpg',
    title: 'Rust Belt',
    medium: 'Letterpress poster',
    year: '2022',
  },
  {
    src: '/gallery/sand-line-study.jpg',
    title: 'Sand Line Study',
    medium: 'Ink on vellum',
    year: '2021',
  },
  {
    src: '/gallery/clay-fragment-01.jpg',
    title: 'Clay Fragment 01',
    medium: 'Archival pigment print',
    year: '2021',
    tall: true,
  },
] as const

function Gallery() {
  const [active, setActive] = useState<(typeof PIECES)[number] | null>(null)

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-clay">
          Gallery
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl">
          Studies &amp; ephemera
        </h1>
        <p className="mt-5 max-w-lg text-lg text-ink-soft">
          A running archive of prints, studies, and one-off pieces made
          between client work — most of it never leaves the studio wall.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {PIECES.map((piece, i) => (
            <button
              key={piece.src}
              type="button"
              onClick={() => setActive(piece)}
              className={`group block text-left ${piece.tall ? 'row-span-2' : ''} ${i % 5 === 2 ? 'md:mt-10' : ''}`}
            >
              <div className="relative overflow-hidden bg-ink/5">
                <OptimizedImage
                  src={piece.src}
                  alt={`${piece.title}, ${piece.medium}, ${piece.year}`}
                  widths={[300, 500, 800]}
                  sizes="(min-width: 768px) 380px, 46vw"
                  aspect={piece.tall ? '4/5.4' : '4/5'}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
              </div>
              <p className="mt-2 font-display text-base text-ink">
                {piece.title}
              </p>
              <p className="text-xs uppercase tracking-[0.06em] text-ink-soft">
                {piece.medium} — {piece.year}
              </p>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-paper hover:text-ochre"
          >
            <X size={32} />
          </button>
          <figure
            className="max-h-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={active.src}
              alt={`${active.title}, ${active.medium}, ${active.year}`}
              widths={[600, 900, 1300]}
              sizes="90vw"
              loading="eager"
              className="max-h-[75vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-paper">
              <span className="font-display text-xl">{active.title}</span>
              <span className="ml-3 text-sm uppercase tracking-[0.06em] text-paper/60">
                {active.medium} — {active.year}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}

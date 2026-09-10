import { Link } from '@tanstack/react-router'
import { SOCIALS } from '@/lib/socials'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <p className="font-display text-3xl leading-tight md:text-5xl">
          Let's make something
          <br />
          worth looking twice at.
        </p>

        <div className="mt-10 flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-2 text-sm uppercase tracking-[0.08em] text-paper/80 transition-colors hover:text-ochre"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.08em] text-paper/50">
            <Link to="/" className="hover:text-paper">
              Marisol Fenn Studio
            </Link>
            <span>Brooklyn, NY — Est. 2018</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

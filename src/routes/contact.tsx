import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Send } from 'lucide-react'
import { SOCIALS } from '@/lib/socials'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="px-6 pt-32 pb-24 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-clay">
          Contact
        </p>
        <h1 className="font-display text-5xl text-ink md:text-6xl">
          Start a project
        </h1>
        <p className="mt-5 max-w-lg text-lg text-ink-soft">
          Currently booking new identity and web projects for early next
          year. Tell me what you're working on.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-clay/40 bg-card px-8 py-12">
                <h2 className="font-display text-2xl text-ink">
                  Got it — thank you.
                </h2>
                <p className="mt-3 text-ink-soft">
                  Your note is in. I read everything myself and usually
                  reply within a few days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm uppercase tracking-[0.06em] text-clay hover:text-rust"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const formData = new FormData(form)
                  fetch('/contact.html', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(
                      formData as unknown as Record<string, string>,
                    ).toString(),
                  }).then(() => setSubmitted(true))
                }}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-[0.06em] text-ink-soft"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 text-lg text-ink outline-none transition-colors focus:border-clay"
                    placeholder="Odessa Kline"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-[0.06em] text-ink-soft"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full border-b border-ink/25 bg-transparent py-2 text-lg text-ink outline-none transition-colors focus:border-clay"
                    placeholder="odessa@studio.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-[0.06em] text-ink-soft"
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border-b border-ink/25 bg-transparent py-2 text-lg text-ink outline-none transition-colors focus:border-clay"
                    placeholder="A little about the project, timeline, and budget range."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 text-sm uppercase tracking-[0.08em] text-paper transition-colors hover:bg-clay hover:border-clay"
                >
                  <Send size={16} />
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-5">
            <div className="border-t border-ink/10 pt-8 md:border-t-0 md:pt-0">
              <h2 className="font-display text-xl text-ink">
                Find me elsewhere
              </h2>
              <ul className="mt-6 space-y-5">
                {SOCIALS.map(({ label, href, icon: Icon, handle }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={label === 'Email' ? undefined : '_blank'}
                      rel={
                        label === 'Email' ? undefined : 'noopener noreferrer'
                      }
                      className="group flex items-center justify-between border-b border-ink/10 pb-3 text-ink transition-colors hover:border-clay"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} className="text-clay" />
                        <span>
                          <span className="block text-sm uppercase tracking-[0.06em] text-ink-soft">
                            {label}
                          </span>
                          <span className="font-display text-lg">
                            {handle}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-ink-soft transition-colors group-hover:text-clay"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-sm leading-relaxed text-ink-soft">
                Studio visits by appointment only — the proof press takes up
                most of the walking room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

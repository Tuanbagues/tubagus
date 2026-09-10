// One-off generator for placeholder gallery artwork.
// Produces cohesive abstract compositions in the site's palette, rendered
// at high resolution so Netlify Image CDN has real pixels to optimize.
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'

const OUT_DIR = new URL('../public/gallery/', import.meta.url)
mkdirSync(OUT_DIR, { recursive: true })

const PAPER = '#f2e9db'
const INK = '#241f1b'
const CLAY = '#c3552f'
const RUST = '#8f3a20'
const MOSS = '#5c6b4f'
const OCHRE = '#d9a441'
const SAND = '#e4d3b6'

const W = 1400
const H = 1750

const grain = `
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" seed="${Math.random() * 100 | 0}"/>
    <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.4 0.4 0.4 0 0"/>
    <feComposite operator="in" in2="SourceGraphic"/>
  </filter>
`

function frame(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>${grain}</defs>
    ${inner}
    <rect width="${W}" height="${H}" fill="${INK}" opacity="0.05" filter="url(#grain)"/>
  </svg>`
}

const pieces = [
  {
    file: 'kiln-study-no2',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${PAPER}"/>
      <circle cx="980" cy="560" r="620" fill="${CLAY}"/>
      <circle cx="980" cy="560" r="620" fill="none" stroke="${INK}" stroke-width="6"/>
      <rect x="0" y="1180" width="${W}" height="${H - 1180}" fill="${INK}"/>
      <line x1="0" y1="1180" x2="${W}" y2="1180" stroke="${OCHRE}" stroke-width="14"/>
      <circle cx="300" cy="1500" r="120" fill="${SAND}"/>
    `),
  },
  {
    file: 'low-tide-archive',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${SAND}"/>
      ${Array.from({ length: 9 })
        .map((_, i) => `<rect x="0" y="${i * (H / 9)}" width="${W}" height="${H / 9 - 10}" fill="${i % 2 === 0 ? MOSS : SAND}" opacity="${0.9 - i * 0.05}"/>`)
        .join('')}
      <circle cx="1100" cy="420" r="260" fill="${PAPER}" stroke="${INK}" stroke-width="5"/>
    `),
  },
  {
    file: 'field-notes-iii',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${INK}"/>
      <path d="M0,900 C300,600 500,1200 800,850 C1050,560 1250,1100 ${W},760 L${W},${H} L0,${H} Z" fill="${CLAY}"/>
      <path d="M0,1150 C350,950 600,1350 950,1080 C1150,930 1300,1300 ${W},1050 L${W},${H} L0,${H} Z" fill="${RUST}" opacity="0.85"/>
      <circle cx="220" cy="320" r="70" fill="${OCHRE}"/>
    `),
  },
  {
    file: 'terracotta-grid',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${PAPER}"/>
      ${Array.from({ length: 6 })
        .map((_, r) =>
          Array.from({ length: 5 })
            .map((_, c) => {
              const colors = [CLAY, INK, SAND, OCHRE, PAPER]
              const fill = colors[(r + c) % colors.length]
              return `<rect x="${c * (W / 5)}" y="${r * (H / 6)}" width="${W / 5 - 8}" height="${H / 6 - 8}" fill="${fill}"/>`
            })
            .join(''),
        )
        .join('')}
      <circle cx="${W / 2}" cy="${H / 2}" r="300" fill="${INK}"/>
    `),
  },
  {
    file: 'ochre-horizon',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${OCHRE}"/>
      <rect y="${H * 0.55}" width="${W}" height="${H * 0.45}" fill="${INK}"/>
      <circle cx="${W * 0.7}" cy="${H * 0.52}" r="230" fill="${PAPER}"/>
      <circle cx="${W * 0.7}" cy="${H * 0.52}" r="230" fill="none" stroke="${RUST}" stroke-width="10"/>
    `),
  },
  {
    file: 'moss-interior',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${MOSS}"/>
      <rect x="120" y="200" width="${W - 240}" height="${H - 400}" fill="${PAPER}"/>
      <rect x="220" y="320" width="${W - 440}" height="${H - 640}" fill="${MOSS}" opacity="0.15"/>
      <line x1="220" y1="320" x2="${W - 220}" y2="${H - 320}" stroke="${INK}" stroke-width="4"/>
      <line x1="${W - 220}" y1="320" x2="220" y2="${H - 320}" stroke="${INK}" stroke-width="4"/>
    `),
  },
  {
    file: 'rust-belt-poster',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${INK}"/>
      <rect x="0" y="0" width="${W}" height="260" fill="${RUST}"/>
      <rect x="0" y="${H - 260}" width="${W}" height="260" fill="${RUST}"/>
      <circle cx="${W / 2}" cy="${H / 2}" r="420" fill="${SAND}"/>
      <rect x="${W / 2 - 40}" y="${H / 2 - 420}" width="80" height="840" fill="${CLAY}"/>
    `),
  },
  {
    file: 'sand-line-study',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${SAND}"/>
      ${Array.from({ length: 14 })
        .map((_, i) => `<line x1="0" y1="${i * (H / 14)}" x2="${W}" y2="${i * (H / 14) + 120}" stroke="${i % 3 === 0 ? CLAY : INK}" stroke-width="${i % 3 === 0 ? 10 : 3}" opacity="0.8"/>`)
        .join('')}
      <circle cx="1150" cy="1400" r="180" fill="${OCHRE}"/>
    `),
  },
  {
    file: 'clay-fragment-01',
    svg: frame(`
      <rect width="${W}" height="${H}" fill="${CLAY}"/>
      <path d="M0,0 L${W * 0.6},0 L0,${H * 0.7} Z" fill="${PAPER}"/>
      <path d="M${W},${H} L${W * 0.35},${H} L${W},${H * 0.3} Z" fill="${INK}"/>
      <circle cx="${W * 0.5}" cy="${H * 0.5}" r="90" fill="${OCHRE}"/>
    `),
  },
]

for (const piece of pieces) {
  const buf = Buffer.from(piece.svg)
  await sharp(buf)
    .jpeg({ quality: 88 })
    .toFile(new URL(`${piece.file}.jpg`, OUT_DIR).pathname)
  console.log('wrote', piece.file)
}

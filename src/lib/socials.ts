import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

export const SOCIALS = [
  {
    label: 'Email',
    href: 'mailto:hello@marisolfenn.studio',
    icon: Mail,
    handle: 'hello@marisolfenn.studio',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/marisolfenn',
    icon: Instagram,
    handle: '@marisolfenn',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/marisolfenn',
    icon: Github,
    handle: 'marisolfenn',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/marisolfenn',
    icon: Linkedin,
    handle: 'in/marisolfenn',
  },
] as const

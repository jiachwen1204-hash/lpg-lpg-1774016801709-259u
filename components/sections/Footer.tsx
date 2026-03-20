import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const BRAND = {
  name:    'Meh Ai',
  tagline: 'Unified AI. Unlimited Potential.',
  email:   'dev@apex.ms',
  address: 'B5-1-3, Forest Green Condominium, Bandar Sungai Long',
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Features', href: '#features' },
  { label: 'Contact',  href: '#contact'  },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--brand-900)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-heading font-bold text-xl text-white hover:text-[var(--brand-400)] transition-colors duration-200"
            >
              <img
                src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1774016800184-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp"
                alt="Meh Ai logo"
                className="h-10 w-auto object-contain"
              />
              {BRAND.name}
            </Link>
            <p className="mt-4 text-sm text-white/50 max-w-sm leading-relaxed">
              We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/50 hover:text-[var(--brand-400)] transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legal.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 hover:text-[var(--brand-400)] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-[var(--brand-400)] transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  {BRAND.email}
                </a>
                <div className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  {BRAND.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-white/40">
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
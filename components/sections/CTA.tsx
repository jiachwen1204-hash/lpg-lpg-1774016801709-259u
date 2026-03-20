import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  eyebrow:   'Get Started Today',
  heading:   'Unified AI. Unlimited Potential.',
  subtext:   'Empower your organization with intelligent automation, real-time analytics, and scalable workflows—all in one centralized platform.',
  cta:       { label: 'Start Free Trial',  href: '#contact'  },
  secondary: { label: 'Learn More',        href: '#features' },
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-gradient-to-b from-surface via-surface to-surface-100">
      {/* Subtle depth grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-500-alpha-6) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Brand glow - positioned at top */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full bg-brand-500/10 animate-pulse-glow" />
      </div>

      {/* Top accent line */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--brand-500-alpha-30), transparent)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimateIn>
          <p className="font-body text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6">
            {CONTENT.eyebrow}
          </p>
          <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-brand-600 to-brand-700">
              {CONTENT.heading}
            </span>
          </h2>
          <p className="font-body text-lg text-content-secondary mb-12 max-w-xl mx-auto leading-relaxed">
            {CONTENT.subtext}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-card scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href={CONTENT.cta.href}
                className="relative px-10 py-4 font-body font-semibold text-lg bg-brand-500 text-white rounded-card hover:bg-brand-700 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97]"
              >
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="group relative px-10 py-4 font-body font-medium text-base border-2 border-surface-border text-content-primary rounded-card hover:border-brand-500 hover:text-brand-600 transition-all ease-expo-out bg-surface/50 backdrop-blur-sm"
            >
              {CONTENT.secondary.label}
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </AnimateIn>

        {/* Trust indicators */}
        <AnimateIn delay={100}>
          <div className="mt-16 pt-10 border-t border-surface-border">
            <p className="font-body text-sm text-content-muted mb-5">Trusted by forward-thinking organizations</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              <div className="flex items-center gap-2 text-content-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-content-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-body text-sm font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-content-secondary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-body text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
import AnimateIn from '@/components/ui/AnimateIn'

interface StatItem {
  value: string
  label: string
}

const CONTENT = {
  badge:      'Enterprise AI Platform',
  headline:   'Unified AI.',
  highlight:  'Unlimited Potential.',
  subline:    'Integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Empowering organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
  cta:        { label: 'Start Free Trial', href: '#contact' },
  secondary:  { label: 'See Platform',    href: '#features' },
  stats: [
    { value: '99.9%', label: 'Platform Uptime'    },
    { value: '50+',   label: 'Enterprise Clients' },
    { value: '24/7',  label: 'AI Monitoring'       },
  ] satisfies StatItem[],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-nav"
    >
      {/* Background depth layers */}
      <div className="absolute inset-0">
        {/* Mesh gradient orbs */}
        <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full bg-brand-500/12 blur-[180px] animate-float pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[160px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] left-[60%] w-[500px] h-[500px] rounded-full bg-brand-400/8 blur-[120px] animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(255 255 255 / 0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />

        {/* Radial gradient fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, var(--background) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section text-center">
        {/* Badge */}
        <AnimateIn delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-brand-500/30 bg-brand-500/10 text-sm text-brand-400 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            {CONTENT.badge}
          </div>
        </AnimateIn>

        {/* Headline with gradient highlight */}
        <AnimateIn delay={80}>
          <h1 className="font-heading font-black text-[clamp(3rem,7vw,6rem)] leading-[1.02] tracking-[-0.04em] text-white mb-6">
            {CONTENT.headline}{' '}
            <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 bg-clip-text text-transparent animate-shimmer">
              {CONTENT.highlight}
            </span>
          </h1>
        </AnimateIn>

        {/* Subline */}
        <AnimateIn delay={160}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed font-light">
            {CONTENT.subline}
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn delay={240}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-card scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-medium bg-brand-500 text-white rounded-card hover:bg-brand-600 hover:shadow-glow transition-all ease-expo-out active:scale-[0.97]"
              >
                {CONTENT.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="px-8 py-4 font-body font-medium border border-white/15 text-white/80 rounded-card hover:border-brand-500 hover:text-brand-400 hover:bg-brand-500/5 transition-all ease-expo-out"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Stats */}
        <AnimateIn delay={320}>
          <div className="flex flex-wrap justify-center gap-12">
            {CONTENT.stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}
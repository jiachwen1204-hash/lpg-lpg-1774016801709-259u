import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle } from 'lucide-react'

interface ValueItem {
  icon: string
  title: string
  desc: string
}

interface StatItem {
  value: string
  label: string
}

const CONTENT = {
  label: 'About Us',
  heading: 'Unified AI. Unlimited Potential.',
  paragraphs: [
    'We provide integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform. Our technology empowers organizations to enhance efficiency, optimize decision-making, and drive scalable digital innovation.',
    'At Meh Ai, we believe that artificial intelligence should simplify complexity — not create it. Our team combines deep technical expertise with a commitment to delivering solutions that actually work for your business.',
  ],
  stats: [
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '10M+', label: 'Workflows Automated' },
  ] satisfies StatItem[],
  values: [
    { icon: '🔗', title: 'Integration First', desc: 'Seamlessly connects with your existing tools and workflows' },
    { icon: '🔒', title: 'Privacy by Design', desc: 'Enterprise-grade security with complete data sovereignty' },
    { icon: '📈', title: 'Scalable Intelligence', desc: 'Grows with your business from startup to enterprise' },
  ] satisfies ValueItem[],
  cta: { label: 'Start Free Trial', href: '#contact' },
}

export default function About() {
  return (
    <section id="about" className="relative py-section overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080810]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-brand-500/10 text-brand-500 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              {CONTENT.label}
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-400/90 to-white bg-[length:200%_auto] animate-shimmer">
                {CONTENT.heading}
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={200}>
            <p className="text-lg text-white/60 leading-relaxed font-light">
              {CONTENT.paragraphs[0]}
            </p>
          </AnimateIn>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {CONTENT.stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="relative rounded-card-lg border border-white/10 bg-white/[0.02] p-8 text-center group hover:border-brand-500/30 hover:bg-white/[0.04] transition-all duration-300">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-heading font-black text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 font-medium">
                  {stat.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Large background number */}
              <span className="absolute -top-8 -left-4 font-heading font-black text-[10rem] text-brand-500/5 leading-none select-none pointer-events-none">
                01
              </span>
              <div className="relative">
                <h3 className="font-heading font-bold text-display-md text-white mb-6">
                  Our Story
                </h3>
                <p className="text-content-secondary leading-relaxed mb-4">
                  {CONTENT.paragraphs[1]}
                </p>
                <p className="text-content-secondary leading-relaxed">
                  From our office in Bandar Sungai Long, we serve organizations worldwide, helping them harness the power of AI to transform how they work, decide, and grow.
                </p>

                {/* Address */}
                <div className="mt-8 p-4 rounded-card-lg border border-white/10 bg-white/[0.02]">
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Headquarters</div>
                  <div className="text-sm text-white/70">
                    B5-1-3, Forest Green Condominium<br />
                    Bandar Sungai Long
                  </div>
                  <a href="mailto:dev@apex.ms" className="inline-flex items-center gap-1.5 mt-2 text-sm text-brand-400 hover:text-brand-300 transition-colors">
                    dev@apex.ms
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Right: Values */}
          <AnimateIn direction="right" delay={100}>
            <div className="relative">
              <span className="absolute -top-8 -left-4 font-heading font-black text-[10rem] text-brand-500/5 leading-none select-none pointer-events-none">
                02
              </span>
              <div className="relative">
                <h3 className="font-heading font-bold text-display-md text-white mb-6">
                  What Sets Us Apart
                </h3>
                <div className="space-y-4">
                  {CONTENT.values.map((value, i) => (
                    <div key={value.title} className="relative group">
                      <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] rounded-card transition-all duration-300" />
                      <div className="relative p-5 rounded-card-lg border border-white/10 bg-white/[0.02] hover:border-brand-500/30 transition-all">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                            <span className="text-lg font-bold text-brand-400">0{i + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-white mb-1">
                              {value.title}
                            </h4>
                            <p className="text-sm text-white/50">
                              {value.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 relative inline-block">
                  <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-pill scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-pill hover:bg-brand-700 transition-all duration-300 shadow-glow"
                  >
                    {CONTENT.cta.label}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge: 'Trusted by Industry Leaders',
  clients: [
    'Meridian Systems',
    'Vertex Analytics',
    'Nexus Dynamics',
    'Apex Ventures',
    'Synapse Corp',
    'Horizon Labs',
  ],
  testimonials: [
    {
      quote: 'Meh Ai transformed our decision-making process. Their unified platform cut our analysis time by 70% while improving accuracy across all our workflows.',
      author: 'Sarah Chen',
      role: 'VP of Operations, Meridian Systems',
    },
    {
      quote: 'The integration was seamless and the results speak for themselves. We\'ve achieved a 3x improvement in operational efficiency within the first quarter.',
      author: 'Marcus Rivera',
      role: 'Chief Technology Officer, Nexus Dynamics',
    },
    {
      quote: 'Finally, an AI solution that actually delivers on its promises. The unified platform approach means our teams collaborate better than ever before.',
      author: 'Emily Nakamura',
      role: 'Director of Digital Innovation, Horizon Labs',
    },
    {
      quote: 'Scalable, intelligent, and incredibly intuitive. Meh Ai has become the backbone of our entire analytics infrastructure.',
      author: 'David Okonkwo',
      role: 'Head of Data Science, Apex Ventures',
    },
  ] satisfies Array<{ quote: string; author: string; role: string }>,
}

export default function SocialProof() {
  return (
    <section className="relative py-section overflow-hidden bg-[var(--brand-500)]">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-500/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-[140px] pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-body mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            {CONTENT.badge}
          </span>
        </AnimateIn>

        {/* Client logos marquee */}
        <div className="relative mb-24 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--brand-500)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--brand-500)] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-8 animate-marquee w-max">
            {[...CONTENT.clients, ...CONTENT.clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3.5 rounded-card border border-white/[0.06] bg-white/[0.02] text-white/50 font-body text-sm hover:border-sky-500/30 hover:text-white/70 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 100} direction="up">
              <div className="group relative h-full p-8 rounded-card-lg border border-white/[0.06] bg-white/[0.02] hover:border-sky-500/30 hover:bg-white/[0.04] transition-all duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card glow on hover */}
                <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/[0.02] rounded-card-lg transition-colors duration-500" />

                <div className="relative">
                  {/* Quote icon */}
                  <div className="mb-6 w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-indigo-500/10 border border-sky-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.004zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368l-.007.004z" />
                    </svg>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6 text-lg font-body">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/30 to-indigo-500/20 border border-sky-500/30 flex items-center justify-center">
                      <span className="text-sky-400 font-heading font-semibold text-lg">
                        {t.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white">{t.author}</div>
                      <div className="text-sm text-white/40 font-body">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Stats strip */}
        <AnimateIn delay={400}>
          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Organizations' },
                { value: '99.9%', label: 'Uptime' },
                { value: '3.2x', label: 'Avg. Efficiency Gain' },
                { value: '50ms', label: 'Avg. Response Time' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

const STATS: StatItem[] = [
  {
    value: 10000,
    suffix: '+',
    label: 'Organizations Empowered',
    description: 'Trusted by enterprises worldwide',
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'Platform Uptime',
    description: 'Enterprise-grade reliability',
  },
  {
    value: 500,
    suffix: '+',
    label: 'AI Models Deployed',
    description: 'Custom solutions delivered',
  },
  {
    value: 45,
    suffix: '%',
    label: 'Average Efficiency Gain',
    description: 'Measurable business impact',
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target * 10) / 10)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const displayValue = Number.isInteger(target) ? count : count.toFixed(1)

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-section-lg relative overflow-hidden bg-[#0f0f13]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn delay={0} direction="up">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Platform Metrics
            </span>
            <h2 className="font-heading font-bold text-display-lg text-white mb-4">
              Measurable Impact at Scale
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Our unified AI platform delivers quantifiable results across automation, analytics, and intelligent workflows.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100} direction="up">
              <div className={cn(
                'relative group p-6 rounded-card-lg',
                'bg-white/[0.03] border border-white/[0.08]',
                'hover:border-brand-500/30 hover:bg-white/[0.06]',
                'transition-all duration-300',
                'before:absolute before:top-0 before:left-0 before:right-0 before:h-px',
                'before:bg-gradient-to-r before:from-transparent before:via-brand-500/40 before:to-transparent'
              )}>
                <div className="font-heading font-black text-[clamp(2rem,4vw,3rem)] text-brand-400 leading-none mb-3">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-white text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-white/40">
                  {stat.description}
                </div>
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-500 rounded-card-lg -z-10 blur-xl" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
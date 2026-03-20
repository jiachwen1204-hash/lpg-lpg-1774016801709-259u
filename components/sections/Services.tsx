import AnimateIn from '@/components/ui/AnimateIn'
import { Bot, BarChart3, Layers, Zap } from 'lucide-react'

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Eliminate repetitive workflows with intelligent automation that learns from your operations and adapts in real time.',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Analytics',
    description: 'Transform raw data into actionable insights with machine learning models that surface what matters most.',
  },
  {
    icon: Layers,
    title: 'Unified Platform',
    description: 'Consolidate your AI tools, data sources, and workflows into a single centralized system built for scale.',
  },
  {
    icon: Zap,
    title: 'Scalable Innovation',
    description: 'Deploy AI solutions that grow with your business—from startup to enterprise—without compromising performance.',
  },
]

const CONTENT = {
  badge: 'What We Do',
  heading: 'Services That Deliver',
  subtext: 'Integrated AI solutions that unify automation, analytics, and intelligent workflows into a centralized platform.',
}

export default function Services() {
  return (
    <section id="services" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">
            {CONTENT.badge}
          </p>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
            {CONTENT.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-content-secondary">{CONTENT.subtext}</p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-6 rounded-card-lg border border-surface-border bg-surface hover:border-brand-500/50 transition-all duration-300 ease-expo-out overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/60 transition-all duration-300" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.02] transition-colors duration-300 rounded-card-lg" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-card bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed text-sm">{svc.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
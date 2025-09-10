import { Link } from 'react-router-dom'
import { Clock, Wallet, Bot, TrendingUp, Rocket, Shield, Link2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 fade-in">
          <p className="text-indigo-300 font-semibold tracking-wide">AutoFlow AI</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Streamline workflows, boost efficiency, and scale faster with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">AI-powered automation</span>.
          </h1>
          <p className="text-white/80 text-lg">
            We help businesses eliminate manual work and grow smarter with intelligent AI automation.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="inline-flex bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6 py-3 rounded-xl transition-colors">Book Free Consultation</Link>
            <Link to="/services" className="inline-flex bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl transition-colors">Explore Services</Link>
          </div>
        </div>
        <div className="relative h-[320px] sm:h-[420px] fade-in">
          {/* AI-inspired graphic */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
          <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#818CF8"/>
                <stop offset="50%" stopColor="#A78BFA"/>
                <stop offset="100%" stopColor="#F472B6"/>
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#grad)" strokeWidth="1.5">
              {Array.from({ length: 18 }).map((_, i) => (
                <path key={i} d={`M20 ${40+i*18} C 140 ${i*16}, 260 ${380-i*12}, 380 ${60+i*14}`} opacity={0.15 + i*0.03} />
              ))}
            </g>
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur w-72 text-center">
              <div className="mx-auto w-12 h-12 rounded-xl bg-indigo-500/20 grid place-items-center mb-3">
                <Rocket className="text-indigo-300" />
              </div>
              <p className="text-white font-semibold">Smarter Automation. Faster Growth. Real Results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Clock, title: 'Save Time' },
          { icon: Wallet, title: 'Reduce Costs' },
          { icon: Bot, title: 'Automate Workflows' },
          { icon: TrendingUp, title: 'Boost Sales' },
        ].map(({ icon: Icon, title }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center mb-3">
              <Icon className="text-indigo-300" size={20} />
            </div>
            <p className="font-semibold">{title}</p>
          </div>
        ))}
      </section>

      {/* Trusted by */}
      <section aria-label="Trusted by" className="space-y-4">
        <p className="text-center text-white/60 text-sm">Trusted by teams across industries</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
          {['Acme', 'Globex', 'Innotech', 'Umbrella'].map((brand) => (
            <div key={brand} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <span className="text-white/70 font-medium tracking-wide">{brand}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What we do</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { title: 'AI Chatbots & Virtual Assistants', points: ['24/7 customer support', 'Lead generation & qualification', 'Custom conversational AI'] },
            { title: 'Business Workflow Automation', points: ['Data entry automation', 'CRM & ERP integration', 'Automated reporting dashboards'] },
            { title: 'AI for Sales & Marketing', points: ['Personalized outreach', 'Automated follow-ups', 'Predictive lead scoring'] },
            { title: 'Custom AI Solutions', points: ['Tailored automation', 'ML models for decisions', 'Scalable AI infrastructure'] },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <h3 className="font-semibold mb-3">{s.title}</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Retail brand saved 200+ hours/month by automating reports.',
            'E-commerce company boosted conversions by 35% using AI chatbots.',
            'B2B startup cut customer support costs by 50% with AI automation.',
          ].map((c) => (
            <div key={c} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <p className="text-white/90">“{c}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Rocket, title: 'Faster Results' },
            { icon: Shield, title: 'Secure & Reliable' },
            { icon: Link2, title: 'Easy Integration' },
            { icon: TrendingUp, title: 'Proven ROI' },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/10 grid place-items-center mb-3">
                <Icon className="text-indigo-300" size={20} />
              </div>
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to automate your growth?</h2>
        <p className="text-white/90 mb-4">Chat with our experts and get your tailored AI roadmap.</p>
        <Link to="/contact" className="inline-flex bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-white/90 transition-colors">Book Free Consultation</Link>
      </section>
    </div>
  )
}
import { Link } from 'react-router-dom'
import { TrendingUp, Clock, ArrowRight } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    {
      company: 'Acme Retail',
      industry: 'Retail',
      result: '200+ hrs saved / mo',
      metrics: [
        { label: 'Time Saved', value: '65%' },
        { label: 'Cost Down', value: '28%' },
      ],
      summary: 'Automated weekly reporting across 12 stores using AI-powered data pipelines.',
      quote: '“We reclaimed entire workdays every week and improved decision speed.”',
      tags: ['Reporting', 'RPA', 'Data Pipeline'],
    },
    {
      company: 'Globex Commerce',
      industry: 'E‑commerce',
      result: '+35% conversions',
      metrics: [
        { label: 'Conversion Lift', value: '+35%' },
        { label: 'AHT Reduced', value: '−40%' },
      ],
      summary: 'Deployed AI chatbots for pre‑sales and support integrated with CRM.',
      quote: '“Customers get answers instantly and our team focuses on high‑value tasks.”',
      tags: ['Chatbot', 'CX', 'CRM'],
    },
    {
      company: 'Umbrella B2B',
      industry: 'SaaS',
      result: '50% lower support cost',
      metrics: [
        { label: 'Tickets Auto‑resolved', value: '62%' },
        { label: 'CSAT', value: '4.7/5' },
      ],
      summary: 'Routed tickets and generated solutions with LLM workflows and knowledge bases.',
      quote: '“Support quality went up while costs came down dramatically.”',
      tags: ['LLM', 'Support', 'KB'],
    },
  ]

  return (
    <div className="space-y-10 fade-in">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Case Studies</h1>
        <p className="text-white/80">Real results from real teams using AI automation.</p>
      </header>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cases.map((c) => (
          <article key={c.company} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-semibold">{c.company}</h3>
                <p className="text-white/60 text-sm">{c.industry}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-sm">
                <TrendingUp size={16} className="text-indigo-300" />
                {c.result}
              </span>
            </div>

            <p className="text-white/80 mb-4">{c.summary}</p>
            <p className="mb-4">{c.quote}</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {c.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-white/5 border border-white/10 p-3">
                  <p className="text-xs text-white/60">{m.label}</p>
                  <p className="font-semibold">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {c.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/80">{t}</span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock size={16} />
                <span>3–5 min read</span>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 font-medium">
                Work with us <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Want results like these?</h2>
        <p className="text-white/90 mb-4">Book a free consultation and get your tailored AI automation roadmap.</p>
        <Link to="/contact" className="inline-flex bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-white/90 transition-colors">Book Free Consultation</Link>
      </section>
    </div>
  )
}
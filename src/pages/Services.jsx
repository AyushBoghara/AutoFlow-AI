import { Link } from 'react-router-dom'
import { MessageSquare, Workflow, Megaphone, Brain } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'AI Chatbots & Virtual Assistants',
      icon: MessageSquare,
      desc: '24/7 customer support, lead capture, and intelligent routing to boost satisfaction and conversions.',
      items: ['24/7 customer support', 'Lead generation & qualification', 'Custom conversational AI'],
    },
    {
      title: 'Business Workflow Automation',
      icon: Workflow,
      desc: 'Automate repetitive tasks and integrate your stack (CRM/ERP) to reduce errors and save time.',
      items: ['Data entry automation', 'CRM & ERP integration', 'Automated reporting dashboards'],
    },
    {
      title: 'AI for Sales & Marketing',
      icon: Megaphone,
      desc: 'Personalized outreach, predictive scoring, and automated follow-ups to accelerate pipeline.',
      items: ['Personalized outreach', 'Automated follow-ups', 'Predictive lead scoring'],
    },
    {
      title: 'Custom AI Solutions',
      icon: Brain,
      desc: 'Tailored ML models and automation built for your unique processes and industry needs.',
      items: ['Tailored automation for industry needs', 'ML models for decision-making', 'Scalable AI infrastructure'],
    },
  ]

  return (
    <div className="space-y-12 fade-in">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold">Services</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          We design, build, and scale intelligent automation systems that drive measurable outcomes.
        </p>
      </header>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {services.map(({ title, icon: Icon, desc, items }) => (
          <article
            key={title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors focus-within:ring-2 focus-within:ring-indigo-400/70"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 grid place-items-center mb-4">
              <Icon className="text-indigo-300" size={22} aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-white/80 text-sm mb-4">{desc}</p>
            <ul className="space-y-2 text-white/75 text-sm">
              {items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-2 rounded-xl transition-colors"
                aria-label={`Learn more about ${title}`}
              >
                Learn More
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to unlock growth with AI?</h2>
        <p className="text-white/90 mb-4">Book a free consultation and we’ll map your automation opportunities.</p>
        <Link to="/contact" className="inline-flex bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-white/90 transition-colors">
          Book Free Consultation
        </Link>
      </section>
    </div>
  )
}
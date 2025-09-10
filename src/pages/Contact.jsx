export default function Contact() {
  return (
    <div className="space-y-10 fade-in">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-white/80">Tell us about your goals — we’ll propose the fastest path to ROI.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Form */}
        <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-xl font-semibold">Start the conversation</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Work email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
            <input id="company" name="company" type="text" autoComplete="organization" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-1">Estimated budget</label>
            <select id="budget" name="budget" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <option value="" disabled selected>Choose a range</option>
              <option>$5k–$10k</option>
              <option>$10k–$25k</option>
              <option>$25k–$50k</option>
              <option>$50k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Project details</label>
            <textarea id="message" name="message" rows="5" className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="What are you hoping to automate?" />
          </div>

          <div className="flex items-start gap-3 text-sm text-white/70">
            <input id="consent" name="consent" type="checkbox" className="mt-1" />
            <label htmlFor="consent">I agree to the processing of my information per the privacy policy.</label>
          </div>

          <button type="submit" className="inline-flex bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-6 py-3 rounded-xl transition-colors">Send message</button>
          <p className="text-xs text-white/60">We’ll get back within 1–2 business days.</p>
        </form>

        {/* Info */}
        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-xl font-semibold">Prefer email?</h2>
          <p className="text-white/80">Reach us at hello@autoflow.ai</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <p className="text-xs text-white/60">Typical response</p>
              <p className="font-semibold">1–2 business days</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-3">
              <p className="text-xs text-white/60">Office hours</p>
              <p className="font-semibold">Mon–Fri, 9–6pm</p>
            </div>
          </div>
        </aside>
      </div>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to get started?</h2>
        <p className="text-white/90 mb-4">Book a free consultation to explore your AI automation roadmap.</p>
        <a href="/contact" className="inline-flex bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-white/90 transition-colors">Book Free Consultation</a>
      </section>
    </div>
  )
}
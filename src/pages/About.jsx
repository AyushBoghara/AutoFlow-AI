import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="space-y-12 fade-in">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold">About AutoFlow AI</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Discover our story and commitment to transforming business operations through intelligent automation.
        </p>
      </section>

      {/* Company Story */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            We are a next-gen AI automation company helping businesses transform operations through intelligent workflows.
            Founded with the vision of making AI accessible to every business, we've grown from a small team of AI enthusiasts
            to a trusted partner for companies worldwide.
          </p>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 grid place-items-center mb-4">
              <span className="text-indigo-300 font-bold text-xl">M</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Mission</h3>
            <p className="text-white/80">
              Our mission is to free businesses from repetitive tasks and help them focus on growth.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 grid place-items-center mb-4">
              <span className="text-purple-300 font-bold text-xl">V</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Vision</h3>
            <p className="text-white/80">
              To make AI automation accessible for every business worldwide.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 grid place-items-center mb-4">
              <span className="text-pink-300 font-bold text-xl">V</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Values</h3>
            <ul className="text-white/80 space-y-1">
              <li>• Innovation</li>
              <li>• Efficiency</li>
              <li>• Trust</li>
              <li>• Scalability</li>
            </ul>
          </div>
        </div>

        {/* Team & Culture */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            We believe that the future of business lies in the seamless integration of human creativity and AI efficiency.
            Our team of experts works closely with each client to understand their unique challenges and design custom
            automation solutions that deliver measurable results.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Client-Centric Focus',
              'Cutting-Edge Technology',
              'Proven Methodologies',
              'Continuous Innovation'
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Join us in shaping the future of work</h2>
        <p className="text-white/90 mb-4">Let’s explore how automation can drive impact across your business.</p>
        <Link to="/contact" className="inline-flex bg-white text-black font-semibold px-6 py-3 rounded-2xl hover:bg-white/90 transition-colors">Book Free Consultation</Link>
      </section>
    </div>
  )
}
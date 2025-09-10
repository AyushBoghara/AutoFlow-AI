export default function Blog() {
  const posts = [
    {
      title: 'Top 5 Ways AI Can Automate Your Business',
      excerpt: 'From lead gen to reporting, here are practical wins you can ship this quarter.',
      date: 'Aug 28, 2025',
      tags: ['Automation', 'Playbooks'],
    },
    {
      title: 'The Future of Work: Humans + AI',
      excerpt: 'How teams collaborate with agents and LLM tooling to move faster.',
      date: 'Aug 12, 2025',
      tags: ['AI', 'Future of Work'],
    },
  ]

  return (
    <div className="space-y-8 fade-in">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Insights</h1>
        <p className="text-white/80">Thoughts, guides, and learnings on building with AI automation.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-white/70 text-sm mb-4">{p.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/60">{p.date}</div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
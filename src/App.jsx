import { Link, NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const linkBase = 'text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
  const active = 'text-white font-semibold'

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="backdrop-blur bg-white/5 border-b border-white/10 sticky top-0 z-40" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" aria-label="AutoFlow AI home">
          AutoFlow <span className="text-indigo-400">AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Primary">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <Link to="/contact" className="md:inline-flex hidden bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-4 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent" aria-label="Book a free consultation">
          Book Free Consultation
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          aria-controls="primary-navigation"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        id="primary-navigation"
        className={`md:hidden border-t border-white/10 bg-black/40 backdrop-blur ${mobileOpen ? 'block' : 'hidden'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col py-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `${linkBase} ${isActive ? active : ''}`}
                end={to === '/'}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-1 bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-4 py-2 rounded-lg transition-colors w-fit"
              onClick={() => setMobileOpen(false)}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white/70 text-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          © 2025 AutoFlow AI. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">LinkedIn</a>
          <a href="#" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">Twitter</a>
          <a href="#" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Skip link for keyboard users */}
      <a href="#main" className="skip-link sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-black/80 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg">Skip to main content</a>

      <Navbar />
      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

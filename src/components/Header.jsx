import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Modelos de Contratação', href: '#modelos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-28">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNav('#inicio') }}
              className="flex items-center group"
            >
              <img
                src="/logo_ricardo_castro.png"
                alt="Ricardo Castro - Software Quality Engineer"
                className="h-[72px] sm:h-[140px] w-auto object-contain"
                style={{ maxWidth: '480px' }}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="px-4 py-2 text-sm font-500 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contato"
                onClick={(e) => { e.preventDefault(); handleNav('#contato') }}
                className="btn-primary text-sm py-2 px-5"
              >
                Solicitar análise gratuita
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#020617] lg:hidden overflow-y-auto"
          >
            {/* Header area inside the menu */}
            <div className="flex items-center justify-between h-20 sm:h-28 px-4 sm:px-6 border-b border-white/5">
              <img
                src="/logo_ricardo_castro.png"
                alt="Ricardo Castro"
                className="h-[72px] sm:h-[140px] w-auto object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="px-4 sm:px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="px-4 py-4 text-base font-500 text-slate-200 hover:text-white rounded-xl hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-6">
                <a
                  href="#contato"
                  onClick={(e) => { e.preventDefault(); handleNav('#contato') }}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Solicitar análise gratuita
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

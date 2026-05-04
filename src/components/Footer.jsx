import { motion } from 'framer-motion'
import { MessageCircle, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  'Testes Manuais',
  'Automação com Playwright',
  'Testes de API',
  'Testes de Performance',
  'Consultoria em QA',
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 pt-14 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/3 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex mb-4">
              <img
                src="/logo_ricardo_castro.png"
                alt="Ricardo Castro - Software Quality Engineer"
                className="h-[140px] w-auto object-contain"
                style={{ maxWidth: '480px' }}
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              QA Engineer com mais de 10 anos de experiência em testes de software. Ajudo empresas a entregarem software mais estável, confiável e com menos bugs em produção.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://wa.me/5511973185149"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-green-500/40 hover:bg-green-500/10 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-slate-400 hover:text-green-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ricardo-batista-de-castro-740bb1222/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500/40 hover:bg-blue-500/10 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-slate-400 hover:text-blue-400" />
              </motion.a>
              <motion.a
                href="mailto:ricardocastrobc@hotmail.com"
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-violet-500/40 hover:bg-violet-500/10 flex items-center justify-center transition-all"
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4 text-slate-400 hover:text-violet-400" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-700 text-slate-300 uppercase tracking-widest mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-700 text-slate-300 uppercase tracking-widest mb-4">Serviços</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ricardo Castro — QA Engineer. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Desenvolvido por Ricardo Castro
          </p>
        </div>
      </div>
    </footer>
  )
}

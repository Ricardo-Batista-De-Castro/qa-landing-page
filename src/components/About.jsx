import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BadgeCheck, Layers, Cpu, GitBranch } from 'lucide-react'

const highlights = [
  { icon: BadgeCheck, color: '#60a5fa', text: '10+ anos em QA' },
  { icon: Layers, color: '#a78bfa', text: 'Automação Frontend & Backend' },
  { icon: Cpu, color: '#22d3ee', text: 'Testes de API & Performance' },
  { icon: GitBranch, color: '#34d399', text: 'Integração CI/CD' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Avatar placeholder with gradient ring */}
            <div className="relative inline-flex">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-600/20 border border-slate-700/60 flex items-center justify-center">
                <span className="text-7xl font-800 gradient-text select-none">RB</span>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-slate-800/90 border border-slate-700 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-xs text-slate-400">QA Engineer</p>
                <p className="text-sm font-700 text-white">10+ anos</p>
              </motion.div>
            </div>

            {/* Highlight pills */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, color, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                  style={{ background: `${color}10`, border: `1px solid ${color}25` }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                  <span className="text-xs font-600 text-slate-200">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-5">
              Sobre o profissional
            </span>
            <h2 className="section-title mb-6">
              Ricardo Batista{' '}
              <span className="gradient-text">De Castro</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                QA Engineer com mais de <strong className="text-white">10 anos de experiência</strong> em garantia de qualidade de software. Especialista em identificar falhas, estruturar processos de testes e implementar automação para aumentar a confiabilidade dos sistemas.
              </p>
              <p>
                Possui experiência em <strong className="text-white">testes manuais</strong>, automação de frontend com <strong className="text-white">Playwright</strong>, automação de backend com <strong className="text-white">Karate Labs</strong>, testes de API, testes de performance e integração de testes em pipelines de <strong className="text-white">CI/CD</strong>.
              </p>
              <p>
                Atua com foco em ajudar empresas a entregarem software mais estável, confiável e alinhado às principais práticas e tecnologias utilizadas por <strong className="text-white">times ágeis do mercado</strong>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="btn-primary"
              >
                Entrar em contato
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-batista-de-castro-740bb1222/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Ver LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

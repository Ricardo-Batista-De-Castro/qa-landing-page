import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BadgeCheck, Layers, Cpu, GitBranch } from 'lucide-react'

const highlights = [
  { icon: BadgeCheck, color: '#60a5fa', text: '19+ anos em controle de qualidade' },
  { icon: Layers, color: '#a78bfa', text: 'Automação Frontend & Backend' },
  { icon: Cpu, color: '#22d3ee', text: 'Testes de API & Performance' },
  { icon: GitBranch, color: '#34d399', text: 'Integração CI/CD' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Centered badge at top */}
          <div className="flex justify-center mb-8">
            <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Sobre o profissional
            </span>
          </div>

          {/* Top row: logo + text side by side */}
          <div className="flex flex-col sm:flex-row gap-8 items-stretch">
            {/* Logo card */}
            <div className="relative flex-shrink-0 self-stretch">
              <div className="w-52 sm:w-64 h-full min-h-[280px] rounded-3xl bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-600/20 border border-slate-700/60 flex items-center justify-center overflow-hidden p-2">
                <img
                  src="/logo_ricardo_castro.png"
                  alt="Ricardo Castro"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 bg-slate-800/90 border border-slate-700 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-xs text-slate-400">QA Engineer</p>
                <p className="text-sm font-700 text-white">19+ anos</p>
              </motion.div>
            </div>

            {/* Text content beside logo */}
            <div className="flex-1 pt-1">
              <h2 className="section-title mb-5">
                Ricardo Batista{' '}
                <span className="gradient-text">De Castro</span>
              </h2>
              <div className="space-y-3 text-slate-300 leading-relaxed">
                <p>
                  <strong className="text-white">Quality Engineer</strong> com mais de <strong className="text-white">19 anos de experiência em Qualidade</strong>, sendo <strong className="text-white">13 anos</strong> atuando na garantia da qualidade de produtos nas indústrias <strong className="text-white">alimentícia e farmacêutica</strong> e mais de <strong className="text-white">6 anos em Qualidade de Software</strong>. Especialista em identificar riscos, estruturar processos de testes e implementar automação para aumentar a confiabilidade dos sistemas.
                </p>

                <p>
                  Possui experiência em <strong className="text-white">todo o ciclo de vida de testes (STLC)</strong>, testes manuais, automação Web com <strong className="text-white">Playwright (JavaScript)</strong>, automação de APIs com <strong className="text-white">Karate Labs</strong> e <strong className="text-white">Postman</strong>, testes de performance com <strong className="text-white">K6</strong>, integração em pipelines de <strong className="text-white">CI/CD</strong>, validação de bancos de dados com <strong className="text-white">SQL</strong> e desenvolvimento de frameworks de automação.
                </p>

                <p>
                  Também atua na construção de <strong className="text-white">indicadores e métricas de qualidade</strong> utilizando <strong className="text-white">Grafana integrado ao Jira</strong>, apoiando a tomada de decisão e a melhoria contínua dos processos de qualidade.
                </p>

                <p>
                  Atua com foco em ajudar empresas a entregarem <strong className="text-white">software mais seguro, estável e confiável</strong>, reduzindo riscos por meio da prevenção de falhas, automação de testes e aplicação das melhores práticas de <strong className="text-white">Quality Engineering</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight pills */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contato" className="btn-primary">
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
    </section>
  )
}

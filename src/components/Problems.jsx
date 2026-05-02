import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Bug, Zap, ShieldOff, UserX, EyeOff, RefreshCw, ArrowRight
} from 'lucide-react'

const problems = [
  {
    icon: Bug,
    title: 'Bugs chegando em produção',
    desc: 'Falhas críticas que chegam até os usuários finais, causando prejuízo, retrabalho e perda de credibilidade.',
    color: '#f87171',
  },
  {
    icon: Zap,
    title: 'Falta de automação de testes',
    desc: 'Processos manuais lentos e sujeitos a erros humanos que não acompanham o ritmo de desenvolvimento.',
    color: '#fb923c',
  },
  {
    icon: ShieldOff,
    title: 'Deploys de alto risco',
    desc: 'Releases sem cobertura adequada de testes, gerando ansiedade, downtime e rollbacks emergenciais.',
    color: '#facc15',
  },
  {
    icon: UserX,
    title: 'Sem QA dedicado no time',
    desc: 'Desenvolvedores acumulando funções de QA, sem processos estruturados e sem estratégia de qualidade.',
    color: '#a78bfa',
  },
  {
    icon: EyeOff,
    title: 'Falta de visibilidade da qualidade',
    desc: 'Sem métricas, relatórios ou indicadores claros sobre a saúde real do sistema e cobertura de testes.',
    color: '#38bdf8',
  },
  {
    icon: RefreshCw,
    title: 'Retrabalho constante',
    desc: 'Falhas não detectadas geram ciclos intermináveis de correção, atrasando entregas e consumindo orçamento.',
    color: '#34d399',
  },
]

function ProblemCard({ icon: Icon, title, desc, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-glow card-hover rounded-2xl p-6"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-base font-700 text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Problems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problemas" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
            Problemas comuns
          </span>
          <h2 className="section-title mb-4">
            Você reconhece algum{' '}
            <span className="gradient-text">desses problemas?</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A maioria das empresas enfrenta esses desafios de qualidade. Um QA especializado transforma esses problemas em processos, automação e confiabilidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glow rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-700 text-white mb-1">
              Um QA especializado resolve esses problemas
            </h3>
            <p className="text-sm text-slate-400">
              Com processos estruturados, estratégia de testes e automação, entregue software com mais qualidade e menos risco.
            </p>
          </div>
          <a href="#contato" className="btn-primary flex-shrink-0">
            Quero resolver isso
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

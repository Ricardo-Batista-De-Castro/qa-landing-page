import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bug, Bot, Gauge, ClipboardList, Map, Zap } from 'lucide-react'

const items = [
  {
    icon: Bug,
    color: '#f87171',
    title: 'Relatórios detalhados de bugs',
    desc: 'Documentação completa com evidências, passos para reprodução, severidade e sugestões de correção.',
  },
  {
    icon: Bot,
    color: '#a78bfa',
    title: 'Suites de automação de testes',
    desc: 'Scripts automatizados com Playwright e Karate Labs, prontos para execução em pipelines de CI/CD.',
  },
  {
    icon: Gauge,
    color: '#34d399',
    title: 'Relatórios de performance',
    desc: 'Análise de tempo de resposta, throughput, gargalos e recomendações de otimização com K6.',
  },
  {
    icon: ClipboardList,
    color: '#60a5fa',
    title: 'Diagnóstico de qualidade',
    desc: 'Avaliação completa da maturidade de QA do sistema, cobertura atual e pontos críticos de melhoria.',
  },
  {
    icon: Map,
    color: '#22d3ee',
    title: 'Estratégias de testes',
    desc: 'Plano documentado com escopo, pirâmide de testes, prioridades e abordagem para o produto digital.',
  },
  {
    icon: Zap,
    color: '#facc15',
    title: 'Automação em fluxos críticos',
    desc: 'Implementação de automação nos fluxos mais importantes do sistema para garantir estabilidade contínua.',
  },
]

export default function Deliverables() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="entregas" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
            Exemplo de entregas
          </span>
          <h2 className="section-title mb-4">
            O que você recebe ao{' '}
            <span className="gradient-text">contratar o serviço</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Entregas concretas, documentadas e orientadas a resultados — não apenas relatórios, mas ativos de qualidade para o seu time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, color, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-glow card-hover rounded-2xl p-6"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-base font-700 text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

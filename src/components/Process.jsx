import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Map, FlaskConical, FileText } from 'lucide-react'

const steps = [
  {
    icon: Search,
    color: '#60a5fa',
    step: '01',
    title: 'Análise do sistema',
    desc: 'Entendimento profundo do produto, stack tecnológica, fluxos críticos e necessidades específicas do cliente.',
  },
  {
    icon: Map,
    color: '#a78bfa',
    step: '02',
    title: 'Estratégia de testes',
    desc: 'Definição do escopo, abordagem, ferramentas, prioridades e plano de execução alinhado ao negócio.',
  },
  {
    icon: FlaskConical,
    color: '#22d3ee',
    step: '03',
    title: 'Execução e identificação',
    desc: 'Execução dos testes, identificação de bugs, análise de cobertura e acompanhamento de correções.',
  },
  {
    icon: FileText,
    color: '#34d399',
    step: '04',
    title: 'Relatório e recomendações',
    desc: 'Entrega de relatórios detalhados com evidências, métricas de qualidade e recomendações de melhoria.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="como-funciona" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Como funciona
          </span>
          <h2 className="section-title mb-4">
            Processo simples e{' '}
            <span className="gradient-text">orientado a resultados</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Da análise inicial à entrega dos relatórios, cada etapa é planejada para maximizar qualidade e clareza.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-violet-500/30 to-emerald-500/20" />

          {steps.map(({ icon: Icon, color, step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glow rounded-2xl p-6 text-center relative"
            >
              <div className="relative inline-flex mb-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-800 flex items-center justify-center text-white"
                  style={{ background: color }}
                >
                  {i + 1}
                </span>
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

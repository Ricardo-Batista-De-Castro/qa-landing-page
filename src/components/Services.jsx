import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MousePointerClick, Zap, Server, Gauge, Lightbulb, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: MousePointerClick,
    color: '#60a5fa',
    title: 'Testes Manuais',
    desc: 'Exploração profunda do sistema para encontrar falhas que automação não alcança.',
    items: ['Testes funcionais', 'Testes exploratórios', 'Testes de regressão', 'Validação de regras de negócio'],
  },
  {
    icon: Zap,
    color: '#a78bfa',
    title: 'Automação de Testes',
    desc: 'Suites robustas de testes automatizados integradas ao seu pipeline de CI/CD.',
    items: ['Automação frontend com Playwright', 'Criação de suites automatizadas', 'Integração com CI/CD', 'Testes para aplicações web'],
  },
  {
    icon: Server,
    color: '#22d3ee',
    title: 'Testes de API e Backend',
    desc: 'Validação completa de APIs, integrações e lógica de backend com automação.',
    items: ['Validação de APIs REST', 'Testes de integração', 'Automação de testes de API', 'Automação backend com Karate Labs'],
  },
  {
    icon: Gauge,
    color: '#34d399',
    title: 'Testes de Performance',
    desc: 'Análise de carga, stress e gargalos para garantir que seu sistema aguenta a demanda.',
    items: ['Testes de carga', 'Testes de stress', 'Análise de performance', 'Identificação de gargalos'],
  },
  {
    icon: Lightbulb,
    color: '#fb923c',
    title: 'Consultoria em Qualidade',
    desc: 'Estratégia, processos e maturidade de QA para elevar o nível do seu time.',
    items: ['Estratégia de testes', 'Implementação de processos QA', 'Definição de pirâmide de testes', 'Apoio a times ágeis'],
  },
]

function ServiceCard({ icon: Icon, color, title, desc, items, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className="card-glow card-hover rounded-2xl p-6 flex flex-col"
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
        style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-lg font-700 text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
      <ul className="mt-auto space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <section id="servicos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
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
            Serviços
          </span>
          <h2 className="section-title mb-4">
            Tudo que seu produto precisa para{' '}
            <span className="gradient-text">ter qualidade real</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Soluções completas de QA adaptadas à realidade do seu time, do nível de maturidade e dos objetivos do negócio.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

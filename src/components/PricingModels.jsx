import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const plans = [
  {
    id: 'demand',
    badge: 'Flexível',
    badgeColor: '#60a5fa',
    title: 'Sob Demanda',
    subtitle: 'Para validações específicas',
    desc: 'Ideal para empresas que precisam validar funcionalidades pontuais, corrigir problemas ou fazer revisões antes de um release.',
    items: [
      'Escopo definido por entrega',
      'Testes manuais e/ou automação',
      'Relatório de bugs detalhado',
      'Início rápido',
    ],
    cta: 'Solicitar orçamento',
    highlight: false,
  },
  {
    id: 'hours',
    badge: 'Mais popular',
    badgeColor: '#a78bfa',
    title: 'Pacotes de Horas',
    subtitle: 'Suporte contínuo de QA',
    desc: 'Pacotes mensais para empresas que precisam de QA contínuo, com horas dedicadas para testes, automação e consultoria.',
    items: [
      'Banco de horas mensal',
      'Prioridade de atendimento',
      'Testes contínuos e automação',
      'Relatórios e métricas periódicas',
    ],
    cta: 'Escolher pacote',
    highlight: true,
  },
  {
    id: 'project',
    badge: 'Completo',
    badgeColor: '#34d399',
    title: 'Projeto Completo',
    subtitle: 'Para lançamentos críticos',
    desc: 'Cobertura completa de testes para sistemas antes de lançamentos importantes, com estratégia, execução e entrega de automação.',
    items: [
      'Análise e estratégia completa',
      'Automação de testes incluída',
      'Testes de performance e API',
      'Documentação e recomendações',
    ],
    cta: 'Falar sobre o projeto',
    highlight: false,
  },
]

export default function PricingModels() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="modelos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
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
            Modelos de contratação
          </span>
          <h2 className="section-title mb-4">
            Escolha o modelo ideal{' '}
            <span className="gradient-text">para seu momento</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Formatos flexíveis para atender desde startups em crescimento até empresas com demandas contínuas de qualidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map(({ id, badge, badgeColor, title, subtitle, desc, items, cta, highlight }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                highlight
                  ? 'bg-gradient-to-b from-violet-900/40 to-slate-900/60 border border-violet-500/40 shadow-lg shadow-violet-500/10'
                  : 'card-glow'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-violet-500 to-blue-500 text-white text-xs font-700 px-4 py-1 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}
              <span
                className="text-xs font-700 px-3 py-1 rounded-full mb-4 self-start"
                style={{ background: `${badgeColor}15`, color: badgeColor, border: `1px solid ${badgeColor}25` }}
              >
                {badge}
              </span>
              <h3 className="text-xl font-800 text-white mb-1">{title}</h3>
              <p className="text-sm font-600 mb-3" style={{ color: badgeColor }}>{subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-3 mb-8">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: badgeColor }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`mt-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-700 transition-all duration-200 ${
                  highlight
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:opacity-90 shadow-md'
                    : 'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

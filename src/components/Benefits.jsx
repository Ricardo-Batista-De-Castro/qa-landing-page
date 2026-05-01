import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingDown, ShieldCheck, Smile, DollarSign, Star, Calendar, Award } from 'lucide-react'

const benefits = [
  { icon: TrendingDown, color: '#f87171', title: 'Menos bugs em produção', desc: 'Problemas detectados antes do usuário, protegendo a reputação e a receita do negócio.' },
  { icon: ShieldCheck, color: '#60a5fa', title: 'Entregas mais seguras', desc: 'Releases com cobertura de testes, menos risco e mais confiança para toda a equipe.' },
  { icon: Smile, color: '#34d399', title: 'Melhor experiência do usuário', desc: 'Sistemas que funcionam corretamente geram satisfação, retenção e crescimento.' },
  { icon: DollarSign, color: '#facc15', title: 'Economia com correções tardias', desc: 'Corrigir bugs em produção custa até 10x mais do que identificar durante os testes.' },
  { icon: Star, color: '#a78bfa', title: 'Maior confiabilidade do software', desc: 'Sistemas testados e validados operam com maior estabilidade e disponibilidade.' },
  { icon: Calendar, color: '#22d3ee', title: 'Mais previsibilidade nas releases', desc: 'Processos de QA estruturados reduzem surpresas e tornam o planejamento mais assertivo.' },
  { icon: Award, color: '#fb923c', title: 'Qualidade no desenvolvimento', desc: 'Cultura de qualidade integrada ao fluxo ágil, elevando o padrão das entregas do time.' },
]

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            Benefícios
          </span>
          <h2 className="section-title mb-4">
            O que você ganha com um{' '}
            <span className="gradient-text">QA especializado</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Investir em qualidade de software não é custo — é estratégia que protege o produto, a equipe e o negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {benefits.map(({ icon: Icon, color, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card-glow card-hover rounded-2xl p-5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}15`, border: `1px solid ${color}25` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3 className="text-sm font-700 text-white mb-2">{title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

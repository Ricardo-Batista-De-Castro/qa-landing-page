import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const tools = [
  { name: 'Playwright', color: '#22d3ee', category: 'Automação' },
  { name: 'Karate Labs', color: '#a78bfa', category: 'API & Backend' },
  { name: 'Postman', color: '#fb923c', category: 'API Testing' },
  { name: 'K6', color: '#34d399', category: 'Performance' },
  { name: 'GitHub Actions', color: '#60a5fa', category: 'CI/CD' },
  { name: 'CI/CD', color: '#f472b6', category: 'DevOps' },
  { name: 'JavaScript', color: '#facc15', category: 'Linguagem' },
  { name: 'Grafana', color: '#38bdf8', category: 'Observabilidade' },
  { name: 'Testes de API', color: '#a78bfa', category: 'Backend' },
  { name: 'Testes Web', color: '#60a5fa', category: 'Frontend' },
  { name: 'Testes de Performance', color: '#34d399', category: 'Carga' },
  { name: 'Testes Exploratórios', color: '#fb923c', category: 'Manual' },
  { name: 'BDD / Gherkin', color: '#f87171', category: 'Metodologia' },
  { name: 'JIRA', color: '#38bdf8', category: 'Gestão' },
  { name: 'Agile / Scrum', color: '#a78bfa', category: 'Metodologia' },
  { name: 'Git', color: '#fb923c', category: 'Versionamento' },
]

export default function Tools() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ferramentas" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            Ferramentas & Tecnologias
          </span>
          <h2 className="section-title mb-4">
            Stack utilizada por{' '}
            <span className="gradient-text">times ágeis modernos</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Ferramentas de ponta para automação, testes de API, performance e integração contínua.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map(({ name, color, category }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.06, y: -2 }}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default transition-all duration-200"
              style={{
                background: `${color}10`,
                border: `1px solid ${color}25`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: color }}
              />
              <span className="text-sm font-600 text-slate-200 group-hover:text-white transition-colors">{name}</span>
              <span
                className="text-[10px] font-600 px-1.5 py-0.5 rounded-md"
                style={{ background: `${color}20`, color }}
              >
                {category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

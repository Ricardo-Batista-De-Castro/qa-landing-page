import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Quando vale a pena contratar um QA?',
    a: 'Sempre que seu sistema estiver indo para produção com bugs recorrentes, quando o time não tem tempo para testar adequadamente, antes de lançamentos importantes, ao iniciar um projeto novo ou ao perceber que a qualidade das entregas está impactando o negócio ou a experiência do usuário.',
  },
  {
    q: 'Você atua em projetos já em andamento?',
    a: 'Sim. A maioria dos projetos atendidos já está em produção ou em desenvolvimento avançado. O processo começa com uma análise do sistema atual, mapeamento dos fluxos críticos e definição de uma estratégia de testes adequada para a realidade do projeto.',
  },
  {
    q: 'Faz automação de testes do zero?',
    a: 'Sim. É possível estruturar uma suite de automação completa do zero, desde a escolha das ferramentas (como Playwright para frontend e Karate Labs para backend/API), definição da arquitetura dos testes, até a integração com pipelines de CI/CD.',
  },
  {
    q: 'Também realiza testes em APIs?',
    a: 'Sim. Os testes de API incluem validação de contratos, testes de integração, automação com Karate Labs e Postman, verificação de regras de negócio, status codes, payloads e performance das rotas.',
  },
  {
    q: 'Trabalha com automação frontend e backend?',
    a: 'Sim. A automação de frontend é feita com Playwright, cobrindo fluxos de interface, formulários, navegação e validações visuais. A automação de backend e API é feita com Karate Labs, cobrindo rotas, integrações e regras de negócio.',
  },
  {
    q: 'Como funciona a contratação?',
    a: 'O processo começa com uma conversa para entender as necessidades do projeto. Em seguida, é feita uma análise inicial do sistema e apresentada uma proposta com escopo, prazo e modelo de contratação (sob demanda, pacote de horas ou projeto completo). Após aprovação, o trabalho tem início rápido.',
  },
  {
    q: 'É possível integrar os testes ao pipeline de CI/CD?',
    a: 'Sim. A integração dos testes automatizados ao pipeline de CI/CD é parte do serviço. Os testes são configurados para rodar automaticamente a cada deploy ou pull request, garantindo feedback rápido sobre a qualidade do código.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-800 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-800/40 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-600 text-white">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-slate-400"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Dúvidas frequentes
          </span>
          <h2 className="section-title mb-4">
            Perguntas{' '}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Respostas para as dúvidas mais comuns sobre os serviços de QA.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import {
  Calendar, Award, Zap, Globe, Code2,
  ArrowRight, Shield,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const credentials = [
  { icon: Award, text: '10+ anos em QA' },
  { icon: Zap, text: 'Especialista em automação' },
  { icon: Globe, text: 'Sistemas web, APIs e mobile' },
  { icon: Code2, text: 'Playwright & Karate Labs' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">

        {/* Personal identification */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4"
        >
          <span className="text-sm sm:text-base font-semibold tracking-widest uppercase text-slate-400 letter-spacing-wide">
            Ricardo Castro
            <span className="mx-3 text-slate-600">·</span>
            <span className="gradient-text">Software Quality Engineer</span>
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="flex justify-center mb-8"
        >
          <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Shield className="w-3 h-3" />
            QA Engineer Sênior · 10+ anos
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-white mb-8"
        >
          Garanta software{' '}
          <span className="gradient-text">mais confiável</span>{' '}
          e reduza{' '}
          <br className="hidden sm:block" />
          bugs em produção
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Testes profissionais, automação estratégica e consultoria em qualidade para empresas que precisam entregar software estável, confiável e sem surpresas em produção.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          <a href="#contato" className="btn-primary">
            Solicitar análise gratuita
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contato" className="btn-secondary">
            <Calendar className="w-4 h-4" />
            Agendar conversa
          </a>
        </motion.div>

        {/* Credentials */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="flex flex-wrap justify-center gap-4"
        >
          {credentials.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/40 border border-slate-700/40 rounded-full px-4 py-2"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-3 h-3 text-blue-400" />
              </div>
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

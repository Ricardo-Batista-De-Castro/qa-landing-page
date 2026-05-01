import { motion } from 'framer-motion'
import {
  ChevronRight, Calendar, Award, Zap, Globe, Code2,
  CheckCircle2, ArrowRight, Shield, Activity, GitBranch
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

const dashboardItems = [
  { label: 'Cobertura de testes', value: '94%', color: '#22d3ee', bar: 94 },
  { label: 'Bugs detectados', value: '247', color: '#a78bfa', bar: 82 },
  { label: 'Taxa de automação', value: '78%', color: '#34d399', bar: 78 },
  { label: 'Performance score', value: '98/100', color: '#60a5fa', bar: 98 },
]

const statusItems = [
  { icon: CheckCircle2, label: 'Testes funcionais', status: 'PASSED', color: '#22d3ee' },
  { icon: CheckCircle2, label: 'API endpoints', status: 'PASSED', color: '#34d399' },
  { icon: Activity, label: 'Performance', status: 'OK', color: '#a78bfa' },
  { icon: GitBranch, label: 'CI/CD pipeline', status: 'BUILD OK', color: '#60a5fa' },
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex"
            >
              <span className="badge bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                <Shield className="w-3 h-3" />
                QA Engineer Sênior · 10+ anos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-900 leading-[1.08] tracking-tight text-white mb-6"
            >
              Garanta software{' '}
              <span className="gradient-text">mais confiável</span>{' '}
              e reduza bugs em produção
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl"
            >
              Testes profissionais, automação estratégica e consultoria em qualidade para empresas que precisam entregar software estável, confiável e sem surpresas em produção.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-3 mb-10"
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
              custom={4}
              className="grid grid-cols-2 gap-3"
            >
              {credentials.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-500/20 rounded-3xl blur-2xl" />

            <div className="relative card-glow rounded-2xl p-6 shadow-2xl shadow-black/40">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
                    <Shield className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-600 text-white">QA Dashboard</p>
                    <p className="text-xs text-slate-500">Última execução: agora</p>
                  </div>
                </div>
                <span className="badge bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                  ● LIVE
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-6">
                {dashboardItems.map(({ label, value, color, bar }) => (
                  <div key={label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs text-slate-400">{label}</span>
                      <span className="text-xs font-700" style={{ color }}>{value}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${bar}%` }}
                        transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Status items */}
              <div className="border-t border-slate-700/50 pt-4 space-y-2">
                {statusItems.map(({ icon: Icon, label, status, color }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5" style={{ color }} />
                      <span className="text-xs text-slate-400">{label}</span>
                    </div>
                    <span
                      className="text-[10px] font-700 px-2 py-0.5 rounded-full"
                      style={{ color, background: `${color}15` }}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom bar */}
              <div className="mt-5 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-xs text-slate-500">247 testes · 0 falhas críticas</span>
                <span className="text-xs font-600 text-emerald-400">✓ Aprovado</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute left-4 -bottom-5 card-glow rounded-xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Zap className="w-3 h-3 text-violet-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500">Playwright</p>
                <p className="text-xs font-600 text-white">Automação ativa</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="absolute right-4 -top-5 card-glow rounded-xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Activity className="w-3 h-3 text-cyan-400" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500">CI/CD</p>
                <p className="text-xs font-600 text-white">Pipeline OK</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

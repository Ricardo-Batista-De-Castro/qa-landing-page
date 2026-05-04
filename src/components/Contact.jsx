import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MessageCircle, Linkedin, Mail, Building2, User } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://formspree.io/f/xrejbdny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        const data = await response.json()
        setError(data?.errors?.[0]?.message || 'Erro ao enviar. Tente novamente.')
      }
    } catch {
      setError('Erro de conexão. Verifique sua internet e tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="badge bg-green-500/10 text-green-400 border border-green-500/20 mb-4">
            Contato
          </span>
          <h2 className="section-title mb-4">
            Vamos conversar sobre{' '}
            <span className="gradient-text">o seu projeto</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Preencha o formulário ou entre em contato direto pelo WhatsApp ou LinkedIn.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="https://wa.me/5511973185149"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-800 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                <p className="text-sm font-600 text-white group-hover:text-green-400 transition-colors">Conversar pelo WhatsApp</p>
                <p className="text-xs text-slate-500 mt-0.5">Resposta rápida</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ricardo-batista-de-castro-740bb1222/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-800 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                <p className="text-sm font-600 text-white group-hover:text-blue-400 transition-colors">Ricardo Batista De Castro</p>
                <p className="text-xs text-slate-500 mt-0.5">Conectar no LinkedIn</p>
              </div>
            </a>

            <a
              href="mailto:ricardocastrobc@hotmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-800 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">E-mail</p>
                <p className="text-sm font-600 text-white group-hover:text-violet-400 transition-colors">ricardocastrobc@hotmail.com</p>
                <p className="text-xs text-slate-500 mt-0.5">Enviar e-mail</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="card-glow rounded-2xl p-6 sm:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-700 text-white mb-2">Mensagem enviada!</h3>
                  <p className="text-slate-400 text-sm">Obrigado pelo contato. Retornarei em breve.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-600 text-slate-400 mb-2">
                        Nome *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-600 text-slate-400 mb-2">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-600 text-slate-400 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa (opcional)"
                        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-600 text-slate-400 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre o seu projeto e como posso ajudar..."
                      className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-colors resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { scale: 1.02 }}
                    whileTap={loading ? {} : { scale: 0.98 }}
                    className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

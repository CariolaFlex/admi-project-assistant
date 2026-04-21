import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  BarChart2, Network, BookOpen, Brain, FileText, Clock,
  ArrowRight, Target, Zap, TrendingUp, GraduationCap, Award,
} from 'lucide-react'
import { Card, MotionCard, CardBody } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { flashcards } from '../data/flashcards'
import { quizQuestions } from '../data/quiz_questions'
import { ejerciciosGantt } from '../data/ejercicios_gantt'
import { ejerciciosCpm } from '../data/ejercicios_cpm'

function AnimatedCounter({ value, duration = 1.2, suffix = '' }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let start = 0
    const t0 = performance.now()
    const step = (t) => {
      const progress = Math.min((t - t0) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(start + (value - start) * eased))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [value, duration])
  return <span>{display}{suffix}</span>
}

const modulos = [
  {
    to: '/gantt',
    icon: BarChart2,
    titulo: 'Carta Gantt',
    desc: 'Cálculo de ES/EF, holguras y visualización de ruta crítica.',
    gradient: 'from-emerald-400 via-teal-500 to-green-600',
    shadow: 'shadow-emerald-500/25',
    bg: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
    stat: `${ejerciciosGantt.length} ejercicios`,
  },
  {
    to: '/cpm',
    icon: Network,
    titulo: 'CPM — Ruta Crítica',
    desc: 'Pasada adelante y atrás, ES·EF·LS·LF·HT calculado automáticamente.',
    gradient: 'from-rose-400 via-red-500 to-orange-500',
    shadow: 'shadow-rose-500/25',
    bg: 'from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20',
    stat: `${ejerciciosCpm.length} ejercicios`,
  },
  {
    to: '/flashcards',
    icon: BookOpen,
    titulo: 'Flashcards',
    desc: 'Repasa conceptos con tarjetas interactivas filtrables.',
    gradient: 'from-blue-400 via-indigo-500 to-blue-600',
    shadow: 'shadow-blue-500/25',
    bg: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
    stat: `${flashcards.length} tarjetas`,
  },
  {
    to: '/quiz',
    icon: Brain,
    titulo: 'Simulador de Prueba',
    desc: 'Preguntas tipo examen con explicación detallada y puntaje.',
    gradient: 'from-purple-400 via-fuchsia-500 to-pink-600',
    shadow: 'shadow-purple-500/25',
    bg: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    stat: `${quizQuestions.length} preguntas`,
  },
  {
    to: '/resumen',
    icon: FileText,
    titulo: 'Resumen de Materia',
    desc: 'Fayol, PMI, WBS, SMART, organizaciones y fórmulas clave.',
    gradient: 'from-slate-400 via-gray-500 to-zinc-600',
    shadow: 'shadow-gray-500/25',
    bg: 'from-gray-50 to-slate-50 dark:from-gray-800/40 dark:to-slate-900/40',
    stat: 'PP1 completo',
  },
]

const temasCriticos = [
  { color: 'from-red-500 to-orange-500', titulo: 'CPM — Ruta Crítica', sub: 'ES · EF · LS · LF · HT' },
  { color: 'from-emerald-500 to-teal-500', titulo: 'Carta Gantt', sub: 'Desde tabla de actividades' },
  { color: 'from-blue-500 to-indigo-500', titulo: 'PMI — 5 Procesos', sub: 'Inicio → Cierre' },
  { color: 'from-purple-500 to-pink-500', titulo: 'PMI — 10 Áreas', sub: 'Integración al centro' },
  { color: 'from-amber-500 to-yellow-500', titulo: 'Proyecto + WBS', sub: '3 características + EDT' },
  { color: 'from-cyan-500 to-blue-500', titulo: 'SMART', sub: 'Objetivos medibles' },
]

const stats = [
  { value: flashcards.length, label: 'Flashcards', icon: BookOpen, gradient: 'from-blue-500 to-indigo-600' },
  { value: ejerciciosGantt.length + ejerciciosCpm.length, label: 'Ejercicios', icon: Target, gradient: 'from-emerald-500 to-teal-600' },
  { value: quizQuestions.length, label: 'Preguntas', icon: Brain, gradient: 'from-purple-500 to-pink-600' },
  { value: 4, label: 'Módulos', icon: GraduationCap, gradient: 'from-amber-500 to-orange-600' },
]

export function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* HERO */}
      <section className="relative pt-8 sm:pt-16 pb-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 mb-6 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
          <span>PP1 · Universidad de La Serena</span>
          <span className="text-gray-400 dark:text-gray-600">·</span>
          <span className="text-gray-500">Mónica Vigorena H.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
        >
          <span className="block text-gray-900 dark:text-white">Administración</span>
          <span className="block gradient-text bg-[length:200%_auto] animate-gradient-x">
            de Proyectos
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          Plataforma interactiva para dominar CPM, Carta Gantt, PMI y todos los conceptos
          clave del ramo.{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            Estudia, practica y aprueba.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            to="/quiz"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold shadow-xl shadow-purple-600/30 hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-105 transition-all text-sm"
          >
            <Brain size={16} />
            Empezar Simulador
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/resumen"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong text-gray-900 dark:text-white font-semibold hover:scale-105 transition-all text-sm"
          >
            <FileText size={16} />
            Ver Resumen
          </Link>
        </motion.div>
      </section>

      {/* STATS */}
      <section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative glass rounded-2xl p-4 sm:p-5 overflow-hidden group cursor-default"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${s.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative">
                <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg mb-3`}>
                  <s.icon size={16} />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                  <AnimatedCounter value={s.value} />
                  <span className="text-xl text-gray-400 ml-0.5">+</span>
                </div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MÓDULOS */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 flex items-end justify-between flex-wrap gap-2"
        >
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <Zap size={14} />
              MÓDULOS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Todo lo que necesitas
            </h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
            Herramientas interactivas para cada tema de la Prueba 1.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modulos.map((m, i) => (
            <motion.div
              key={m.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={m.to}>
                <div className={`group relative overflow-hidden rounded-2xl glass-strong shine-card hover:shadow-2xl ${m.shadow} transition-all duration-500 hover:-translate-y-1`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.bg} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative p-5 sm:p-6 flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`shrink-0 p-3 rounded-2xl bg-gradient-to-br ${m.gradient} text-white shadow-lg`}
                    >
                      <m.icon size={22} />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-base">
                          {m.titulo}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                          {m.stat}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {m.desc}
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:gap-2 transition-all">
                        Explorar
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEMAS CRÍTICOS */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400 mb-1">
            <TrendingUp size={14} />
            PRIORIDAD ALTA
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Temas críticos PP1
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {temasCriticos.map((t, i) => (
            <motion.div
              key={t.titulo}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="group flex items-center gap-3 p-3.5 rounded-xl glass hover:shadow-lg transition-all cursor-default"
            >
              <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform`}>
                {i + 1}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {t.titulo}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{t.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-600/30">
          {/* Animated orbs */}
          <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-bounce-subtle" />
          <div className="absolute bottom-[-50%] left-[-10%] w-96 h-96 bg-pink-300/20 rounded-full blur-3xl" />

          <div className="relative text-center text-white">
            <Award className="mx-auto mb-4" size={40} />
            <h3 className="text-2xl sm:text-3xl font-black mb-2">¿Listo para la prueba?</h3>
            <p className="text-white/80 max-w-md mx-auto mb-6 text-sm sm:text-base">
              Practica con 15 preguntas tipo examen diseñadas a partir del material oficial.
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-sm hover:scale-105 transition-transform shadow-xl"
            >
              Iniciar simulador
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

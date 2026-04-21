import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Home } from './pages/Home'
import { GanttPage } from './pages/GanttPage'
import { CPMPage } from './pages/CPMPage'
import { FlashcardsPage } from './pages/FlashcardsPage'
import { QuizPage } from './pages/QuizPage'
import { ResumenPage } from './pages/ResumenPage'
import {
  BarChart2, Network, BookOpen, Brain, FileText,
  Menu, X, Sun, Moon, Home as HomeIcon, Sparkles,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Inicio', icon: HomeIcon, exact: true },
  { to: '/gantt', label: 'Gantt', icon: BarChart2 },
  { to: '/cpm', label: 'CPM', icon: Network },
  { to: '/flashcards', label: 'Flashcards', icon: BookOpen },
  { to: '/quiz', label: 'Quiz', icon: Brain },
  { to: '/resumen', label: 'Resumen', icon: FileText },
]

function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="mesh-bg absolute inset-0" />
      <div className="grid-pattern absolute inset-0 opacity-40" />

      {/* Animated blobs */}
      <div className="blob bg-blue-500/30 dark:bg-blue-500/25 w-96 h-96 top-[-10%] left-[-10%]" />
      <div
        className="blob bg-purple-500/25 dark:bg-purple-500/25 w-[500px] h-[500px] top-[30%] right-[-10%]"
        style={{ animationDelay: '-5s' }}
      />
      <div
        className="blob bg-pink-500/20 dark:bg-pink-500/20 w-80 h-80 bottom-[-5%] left-[30%]"
        style={{ animationDelay: '-10s' }}
      />
    </div>
  )
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-4 pt-3">
      <nav className="glass-strong max-w-5xl mx-auto rounded-2xl shadow-lg shadow-black/5">
        <div className="px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:shadow-purple-600/50 transition-shadow">
              <Sparkles className="text-white" size={16} />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-bold text-gray-900 dark:text-white">ProjectLab</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">Admin. Proyectos</span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ to, label, icon: Icon, exact }) => (
              <NavLink
                key={to}
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'text-blue-700 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-lg"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon size={13} className="relative z-10" />
                    <span className="relative z-10">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDark(d => !d)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/20 dark:border-white/5"
            >
              <div className="px-3 py-2">
                {navItems.map(({ to, label, icon: Icon, exact }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={to}
                      end={exact}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold mb-0.5 ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-white/5'
                        }`
                      }
                    >
                      <Icon size={16} />
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/gantt" element={<PageWrapper><GanttPage /></PageWrapper>} />
        <Route path="/cpm" element={<PageWrapper><CPMPage /></PageWrapper>} />
        <Route path="/flashcards" element={<PageWrapper><FlashcardsPage /></PageWrapper>} />
        <Route path="/quiz" element={<PageWrapper><QuizPage /></PageWrapper>} />
        <Route path="/resumen" element={<PageWrapper><ResumenPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function Layout() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100">
      <AnimatedBackground />
      <NavBar />
      <main className="max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
        <AnimatedRoutes />
      </main>
      <footer className="max-w-5xl mx-auto px-4 py-8 text-center text-xs text-gray-500 dark:text-gray-500">
        <p>
          Universidad de La Serena · Facultad de Ingeniería ·{' '}
          <span className="gradient-text font-semibold">Admin. de Proyectos</span>
        </p>
        <p className="mt-1 text-gray-400 dark:text-gray-600">
          Docente Mónica Vigorena H. · Plataforma de estudio 2026
        </p>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

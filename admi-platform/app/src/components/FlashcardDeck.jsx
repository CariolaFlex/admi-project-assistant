import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { flashcards } from '../data/flashcards'
import { shuffleArray } from '../utils/helpers'
import { Badge } from './ui/Badge'
import { Button } from './ui/Button'
import { ProgressBar } from './ui/ProgressBar'
import { ChevronLeft, ChevronRight, Shuffle, RotateCcw, Eye, Sparkles } from 'lucide-react'

const categoriaColors = {
  CPM: 'critico',
  Gantt: 'holgura',
  Fundamentos: 'blue',
}

const categoriaGradients = {
  CPM: 'from-rose-500 via-red-500 to-orange-500',
  Gantt: 'from-emerald-500 via-teal-500 to-green-600',
  Fundamentos: 'from-blue-500 via-indigo-500 to-purple-500',
}

const dificultadColors = {
  basico: 'holgura',
  medio: 'yellow',
  avanzado: 'critico',
}

export function FlashcardDeck() {
  const [filtro, setFiltro] = useState('Todos')
  const [deck, setDeck] = useState(flashcards)
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [vistas, setVistas] = useState(new Set())
  const [direction, setDirection] = useState(0)

  const categorias = ['Todos', 'CPM', 'Gantt', 'Fundamentos']

  const filtrar = useCallback((cat) => {
    setFiltro(cat)
    const filtered = cat === 'Todos' ? flashcards : flashcards.filter(f => f.categoria === cat)
    setDeck(filtered)
    setIndex(0)
    setFlipped(false)
    setVistas(new Set())
  }, [])

  const barajar = () => {
    setDeck(shuffleArray(deck))
    setIndex(0)
    setFlipped(false)
  }

  const current = deck[index]

  const goNext = () => {
    setVistas(prev => new Set([...prev, current.id]))
    setFlipped(false)
    setDirection(1)
    setTimeout(() => setIndex(i => Math.min(i + 1, deck.length - 1)), 50)
  }

  const goPrev = () => {
    setFlipped(false)
    setDirection(-1)
    setTimeout(() => setIndex(i => Math.max(i - 1, 0)), 50)
  }

  const reiniciar = () => {
    setIndex(0)
    setFlipped(false)
    setVistas(new Set())
  }

  if (!current) return null

  const gradient = categoriaGradients[current.categoria] || 'from-gray-500 to-gray-700'

  return (
    <div className="space-y-5 max-w-xl mx-auto">
      {/* Filtros */}
      <div className="flex flex-wrap gap-2">
        {categorias.map(cat => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => filtrar(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filtro === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'glass text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </motion.button>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={barajar}
          className="px-3.5 py-1.5 rounded-full text-xs font-semibold glass text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-1"
        >
          <Shuffle size={12} /> Barajar
        </motion.button>
      </div>

      {/* Progreso */}
      <ProgressBar value={vistas.size} max={deck.length} label={`${vistas.size} / ${deck.length} vistas`} color="blue" />

      {/* Tarjeta con flip 3D */}
      <div style={{ perspective: '1500px' }} className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40, rotateY: direction * 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -direction * 40 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setFlipped(f => !f)}
            className="relative cursor-pointer select-none min-h-[240px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full min-h-[240px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cara frontal */}
              <div
                className="absolute inset-0 glass-strong rounded-2xl shadow-xl p-6 flex flex-col justify-between"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Aura gradient */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${gradient} opacity-20 blur-3xl`} />

                <div className="relative flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <Badge variant={categoriaColors[current.categoria] || 'gray'}>
                      {current.categoria}
                    </Badge>
                    <Badge variant={dificultadColors[current.dificultad]}>
                      {current.dificultad}
                    </Badge>
                  </div>
                  <span className="text-xs font-mono text-gray-400">{index + 1}/{deck.length}</span>
                </div>

                <div className="relative flex-1 flex flex-col justify-center py-4">
                  <p className="text-gray-900 dark:text-white font-semibold text-lg leading-relaxed">
                    {current.pregunta}
                  </p>
                </div>

                <div className="relative flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <Eye size={12} />
                  Toca para ver la respuesta
                </div>
              </div>

              {/* Cara trasera */}
              <div
                className={`absolute inset-0 rounded-2xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br ${gradient} text-white overflow-hidden`}
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                <div className="relative flex items-center gap-2">
                  <Sparkles size={14} className="text-white/80" />
                  <span className="text-xs font-bold uppercase tracking-wider opacity-90">Respuesta</span>
                </div>

                <div className="relative flex-1 flex flex-col justify-center py-4">
                  <p className="text-white text-base leading-relaxed font-medium">
                    {current.respuesta}
                  </p>
                </div>

                <div className="relative text-xs text-white/70">Toca para volver</div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navegación */}
      <div className="flex items-center justify-between gap-2">
        <Button onClick={goPrev} disabled={index === 0} variant="secondary" size="sm">
          <ChevronLeft size={16} /> Anterior
        </Button>
        <Button onClick={reiniciar} variant="ghost" size="sm">
          <RotateCcw size={14} />
        </Button>
        <Button onClick={goNext} disabled={index === deck.length - 1} size="sm">
          Siguiente <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { QuizSession } from '../components/QuizSession'

export function QuizPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-4"
      >
        <div className="shrink-0 p-3 rounded-2xl bg-gradient-to-br from-purple-400 via-fuchsia-500 to-pink-600 text-white shadow-lg shadow-purple-500/30">
          <Brain size={24} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            Simulador de Prueba
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            15 preguntas tipo examen · Explicación detallada en cada una
          </p>
        </div>
      </motion.div>
      <QuizSession />
    </div>
  )
}

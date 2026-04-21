import { motion } from 'framer-motion'
import { BarChart2 } from 'lucide-react'
import { GanttCalculator } from '../components/GanttCalculator'
import { Alert } from '../components/ui/Alert'

export function GanttPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-4"
      >
        <div className="shrink-0 p-3 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-green-600 text-white shadow-lg shadow-emerald-500/30">
          <BarChart2 size={24} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            Carta Gantt
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Separata N°1 · 3 ejercicios con cálculo automático
          </p>
        </div>
      </motion.div>

      <Alert variant="info">
        <strong className="font-bold">Regla fundamental:</strong> Inicio = MAX(Término de predecesoras) + 1 · Término = Inicio + Duración − 1 · Ruta crítica = actividades con Holgura = 0
      </Alert>

      <GanttCalculator />
    </div>
  )
}

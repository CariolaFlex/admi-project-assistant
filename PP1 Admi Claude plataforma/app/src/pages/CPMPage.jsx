import { motion } from 'framer-motion'
import { Network } from 'lucide-react'
import { CPMCalculator } from '../components/CPMCalculator'
import { Alert } from '../components/ui/Alert'

export function CPMPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-4"
      >
        <div className="shrink-0 p-3 rounded-2xl bg-gradient-to-br from-rose-400 via-red-500 to-orange-500 text-white shadow-lg shadow-rose-500/30">
          <Network size={24} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            CPM — Ruta Crítica
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Separata N°2 · Pasada adelante y atrás · ES·EF·LS·LF·HT
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-3 text-xs">
        <Alert variant="info">
          <strong>Adelante:</strong> EF = ES + Dur · nodo = MAX(EF)
        </Alert>
        <Alert variant="warning">
          <strong>Atrás:</strong> LS = LF − Dur · nodo = MIN(LS)
        </Alert>
      </div>

      <CPMCalculator />
    </div>
  )
}

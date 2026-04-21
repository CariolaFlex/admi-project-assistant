import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'
import { FlashcardDeck } from '../components/FlashcardDeck'

export function FlashcardsPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-4"
      >
        <div className="shrink-0 p-3 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 text-white shadow-lg shadow-blue-500/30">
          <BookOpen size={24} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            Flashcards
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            25 tarjetas · CPM, Gantt y Fundamentos · Toca para voltear
          </p>
        </div>
      </motion.div>
      <FlashcardDeck />
    </div>
  )
}

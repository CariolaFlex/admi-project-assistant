import { cn } from '../../utils/helpers'
import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40',
  secondary: 'bg-white/60 dark:bg-white/5 backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-white/10',
  danger: 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/40',
  success: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/40',
  purple: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/40',
  ghost: 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300',
}

const sizes = {
  sm: 'px-3.5 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({ children, variant = 'primary', size = 'md', className = '', disabled = false, onClick, type = 'button' }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </motion.button>
  )
}

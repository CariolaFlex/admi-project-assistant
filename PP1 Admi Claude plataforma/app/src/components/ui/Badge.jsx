import { cn } from '../../utils/helpers'

const variants = {
  critico: 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20',
  holgura: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
  gray: 'bg-gray-500/10 text-gray-700 dark:text-gray-300 border border-gray-500/20',
  yellow: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
  purple: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20',
  pink: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20',
}

export function Badge({ children, variant = 'gray', className = '', pulse = false }) {
  return (
    <span className={cn('inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold', variants[variant], className)}>
      {pulse && <span className={cn('w-1.5 h-1.5 rounded-full pulse-dot', variant === 'critico' ? 'bg-red-500' : variant === 'holgura' ? 'bg-emerald-500' : 'bg-blue-500')} />}
      {children}
    </span>
  )
}

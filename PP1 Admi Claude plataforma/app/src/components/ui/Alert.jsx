import { cn } from '../../utils/helpers'

const variants = {
  info: 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-800 dark:text-blue-200',
  success: 'bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-200',
  warning: 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-800 dark:text-amber-200',
  danger: 'bg-gradient-to-r from-rose-500/10 to-red-500/10 border-rose-500/20 text-rose-800 dark:text-rose-200',
}

export function Alert({ children, variant = 'info', className = '' }) {
  return (
    <div className={cn('border rounded-xl p-3.5 text-sm backdrop-blur', variants[variant], className)}>
      {children}
    </div>
  )
}

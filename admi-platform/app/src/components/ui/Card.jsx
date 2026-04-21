import { cn } from '../../utils/helpers'
import { motion } from 'framer-motion'

export function Card({ children, className = '', glass = false, hover = false, ...props }) {
  const base = glass
    ? 'glass rounded-2xl shadow-xl shadow-black/5'
    : 'bg-white dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 border border-gray-200/60 dark:border-white/10'

  return (
    <div
      className={cn(
        base,
        hover && 'hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function MotionCard({ children, className = '', delay = 0, glass = false, hover = false, ...props }) {
  const base = glass
    ? 'glass rounded-2xl shadow-xl shadow-black/5'
    : 'bg-white dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 border border-gray-200/60 dark:border-white/10'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        base,
        hover && 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={cn('p-5 border-b border-gray-200/60 dark:border-white/10', className)}>{children}</div>
}

export function CardBody({ children, className = '' }) {
  return <div className={cn('p-5', className)}>{children}</div>
}

import { cn } from '../utils/helpers'

export function GanttChart({ activities, totalDuration }) {
  if (!activities || activities.length === 0) return null

  const cols = totalDuration

  return (
    <div className="overflow-x-auto">
      <div className="min-w-max">
        {/* Header de días */}
        <div className="flex mb-1">
          <div className="w-48 shrink-0" />
          <div className="flex">
            {Array.from({ length: cols }, (_, i) => (
              <div
                key={i}
                className="w-7 text-center text-xs text-gray-500 dark:text-gray-400 font-mono border-l border-gray-200 dark:border-gray-700"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Filas de actividades */}
        {activities.map((act) => (
          <div key={act.code} className="flex items-center mb-1.5">
            {/* Nombre */}
            <div className="w-48 shrink-0 pr-2 text-right">
              <span className={cn(
                'text-xs font-semibold',
                act.isCritical ? 'text-red-600 dark:text-red-400' : 'text-green-700 dark:text-green-400',
              )}>
                {act.code}
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 ml-1 truncate hidden sm:inline">
                {act.name.length > 18 ? act.name.slice(0, 18) + '…' : act.name}
              </span>
            </div>

            {/* Barra */}
            <div className="flex relative" style={{ width: `${cols * 28}px` }}>
              {/* Grid de fondo */}
              {Array.from({ length: cols }, (_, i) => (
                <div key={i} className="w-7 h-6 border-l border-gray-100 dark:border-gray-800" />
              ))}

              {/* Barra de actividad */}
              <div
                className={cn(
                  'absolute top-0.5 h-5 rounded flex items-center justify-center text-xs font-bold text-white shadow-sm',
                  act.isCritical
                    ? 'bg-red-500 dark:bg-red-600'
                    : 'bg-green-500 dark:bg-green-600',
                )}
                style={{
                  left: `${(act.es - 1) * 28}px`,
                  width: `${act.duration * 28 - 2}px`,
                }}
              >
                {act.duration > 1 && (
                  <span className="text-[10px]">{act.duration}d</span>
                )}
              </div>

              {/* Extensión de holgura */}
              {act.ht > 0 && (
                <div
                  className="absolute top-0.5 h-5 rounded border-2 border-dashed border-green-400 dark:border-green-500 opacity-50"
                  style={{
                    left: `${(act.ef) * 28}px`,
                    width: `${act.ht * 28 - 2}px`,
                  }}
                />
              )}
            </div>

            {/* Info de holgura */}
            <div className="ml-2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {act.isCritical
                ? <span className="text-red-500 font-medium">crítica</span>
                : <span className="text-green-600">HT={act.ht}</span>
              }
            </div>
          </div>
        ))}

        {/* Leyenda */}
        <div className="flex gap-4 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
            <div className="w-4 h-3 bg-red-500 rounded" />
            Ruta crítica (HT=0)
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
            <div className="w-4 h-3 bg-green-500 rounded" />
            Con holgura
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
            <div className="w-4 h-3 border-2 border-dashed border-green-400 rounded" />
            Margen de holgura
          </div>
        </div>
      </div>
    </div>
  )
}

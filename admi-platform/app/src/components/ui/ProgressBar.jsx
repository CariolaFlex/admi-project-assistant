export function ProgressBar({ value, max, color = 'blue', label }) {
  const pct = Math.round((value / max) * 100)
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  }
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs mb-1 text-gray-600 dark:text-gray-400">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${colors[color]}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

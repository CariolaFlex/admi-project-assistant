import { useState } from 'react'
import { calculateGantt } from '../utils/ganttCalc'
import { GanttChart } from './GanttChart'
import { Card, CardHeader, CardBody } from './ui/Card'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { Alert } from './ui/Alert'
import { Table } from './ui/Table'
import { ejerciciosGantt } from '../data/ejercicios_gantt'
import { ChevronRight, Play, RotateCcw } from 'lucide-react'

export function GanttCalculator() {
  const [selectedId, setSelectedId] = useState(null)
  const [result, setResult] = useState(null)
  const [showSolution, setShowSolution] = useState(false)

  const ejercicio = ejerciciosGantt.find(e => e.id === selectedId)

  function handleCalculate() {
    if (!ejercicio) return
    const res = calculateGantt(ejercicio.actividades)
    setResult(res)
    setShowSolution(false)
  }

  function handleReset() {
    setResult(null)
    setShowSolution(false)
    setSelectedId(null)
  }

  return (
    <div className="space-y-4">
      {/* Selector de ejercicio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {ejerciciosGantt.map(ej => (
          <button
            key={ej.id}
            onClick={() => { setSelectedId(ej.id); setResult(null); setShowSolution(false) }}
            className={`p-3 rounded-xl border-2 text-left transition-all ${
              selectedId === ej.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 bg-white dark:bg-gray-800'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Ejercicio {ej.id}
              </span>
              <Badge variant={ej.tipo === 'laborales' ? 'blue' : 'purple'}>
                {ej.tipo}
              </Badge>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ej.titulo}</p>
            <p className="text-xs text-gray-400 mt-0.5">{ej.actividades.length} actividades</p>
          </button>
        ))}
      </div>

      {/* Tabla de actividades del ejercicio seleccionado */}
      {ejercicio && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{ejercicio.titulo}</h3>
              <Badge variant={ejercicio.tipo === 'laborales' ? 'blue' : 'purple'}>
                Días {ejercicio.tipo}
              </Badge>
            </div>
          </CardHeader>
          <CardBody className="space-y-3">
            <Table
              headers={['Código', 'Actividad', 'Duración', 'Predecesoras']}
              rows={ejercicio.actividades.map(a => [
                <span className="font-bold text-blue-600 dark:text-blue-400">{a.code}</span>,
                a.name,
                `${a.duration} días`,
                a.predecessors.length > 0 ? a.predecessors.join(', ') : '—',
              ])}
            />

            <div className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Preguntas:</strong>
              <ol className="mt-1 list-decimal list-inside space-y-0.5">
                {ejercicio.preguntas.map((p, i) => <li key={i}>{p}</li>)}
              </ol>
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button onClick={handleCalculate} size="sm">
                <Play size={14} /> Calcular Gantt
              </Button>
              <Button onClick={handleReset} variant="secondary" size="sm">
                <RotateCcw size={14} /> Reiniciar
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Resultado calculado */}
      {result && ejercicio && (
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Resultados del cálculo</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            {/* Tabla de fechas */}
            <Table
              headers={['Act.', 'Dur.', 'Inicio', 'Término', 'HT', 'Condición']}
              rows={result.activities.map(a => [
                <span className="font-bold">{a.code}</span>,
                a.duration,
                `Día ${a.es}`,
                `Día ${a.ef}`,
                a.ht,
                a.isCritical
                  ? <Badge variant="critico">Crítica</Badge>
                  : <Badge variant="holgura">Holgura {a.ht}d</Badge>,
              ])}
              rowClassName={(_, i) => {
                const act = result.activities[i]
                return act?.isCritical
                  ? 'bg-red-50 dark:bg-red-900/10'
                  : 'bg-white dark:bg-gray-900'
              }}
            />

            {/* Ruta crítica */}
            <Alert variant="danger">
              <strong>Ruta crítica:</strong> {result.criticalPath} | <strong>Duración total:</strong> {result.totalDuration} días {ejercicio.tipo}
            </Alert>

            {/* Diagrama Gantt */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Diagrama de Gantt</h4>
              <GanttChart activities={result.activities} totalDuration={result.totalDuration} />
            </div>

            {/* Botón ver solución oficial */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSolution(!showSolution)}
            >
              <ChevronRight size={14} className={showSolution ? 'rotate-90' : ''} />
              {showSolution ? 'Ocultar' : 'Ver'} solución del enunciado
            </Button>

            {showSolution && (
              <Alert variant="info">
                <div className="space-y-1">
                  <p><strong>Ruta crítica enunciado:</strong> {ejercicio.solucion.rutaCritica.join(' → ')}</p>
                  <p><strong>Duración total:</strong> {ejercicio.solucion.duracionTotal} días</p>
                  {result.criticalPath === ejercicio.solucion.rutaCritica.join(' → ') && result.totalDuration === ejercicio.solucion.duracionTotal && (
                    <p className="text-green-700 dark:text-green-400 font-medium">✓ Coincide con el resultado calculado</p>
                  )}
                </div>
              </Alert>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  )
}

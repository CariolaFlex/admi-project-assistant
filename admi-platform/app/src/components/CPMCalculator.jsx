import { useState } from 'react'
import { calculateCPM } from '../utils/cpmCalc'
import { Card, CardHeader, CardBody } from './ui/Card'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { Alert } from './ui/Alert'
import { Table } from './ui/Table'
import { ejerciciosCpm } from '../data/ejercicios_cpm'
import { Play, RotateCcw, ChevronRight } from 'lucide-react'

export function CPMCalculator() {
  const [selectedId, setSelectedId] = useState(null)
  const [result, setResult] = useState(null)
  const [showSolution, setShowSolution] = useState(false)

  const ejercicio = ejerciciosCpm.find(e => e.id === selectedId)

  function handleCalculate() {
    if (!ejercicio) return
    const res = calculateCPM(ejercicio.actividades)
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
      {/* Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {ejerciciosCpm.map(ej => (
          <button
            key={ej.id}
            onClick={() => { setSelectedId(ej.id); setResult(null); setShowSolution(false) }}
            className={`p-3 rounded-xl border-2 text-left transition-all ${
              selectedId === ej.id
                ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-red-300 bg-white dark:bg-gray-800'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Ejercicio {ej.id}
              </span>
              <Badge variant="gray">{ej.actividades.length} acts.</Badge>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ej.titulo}</p>
          </button>
        ))}
      </div>

      {/* Tabla del ejercicio */}
      {ejercicio && (
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{ejercicio.titulo}</h3>
          </CardHeader>
          <CardBody className="space-y-3">
            <Table
              headers={['Código', 'Actividad', 'Duración', 'Predecesoras']}
              rows={ejercicio.actividades.map(a => [
                <span className="font-bold text-red-600 dark:text-red-400">{a.code}</span>,
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

            <div className="flex gap-2">
              <Button onClick={handleCalculate} variant="danger" size="sm">
                <Play size={14} /> Calcular CPM
              </Button>
              <Button onClick={handleReset} variant="secondary" size="sm">
                <RotateCcw size={14} /> Reiniciar
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Resultado */}
      {result && ejercicio && (
        <Card>
          <CardHeader>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Tabla CPM — ES / EF / LS / LF / HT</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <Table
              headers={['Act.', 'Dur.', 'ES', 'EF', 'LS', 'LF', 'HT', 'Condición']}
              rows={result.activities.map(a => [
                <span className="font-bold">{a.code}</span>,
                a.duration,
                <span className="font-mono text-blue-600 dark:text-blue-400">{a.es}</span>,
                <span className="font-mono text-blue-600 dark:text-blue-400">{a.ef}</span>,
                <span className="font-mono text-orange-600 dark:text-orange-400">{a.ls}</span>,
                <span className="font-mono text-orange-600 dark:text-orange-400">{a.lf}</span>,
                <span className="font-mono font-bold">{a.ht}</span>,
                a.isCritical
                  ? <Badge variant="critico">Crítica</Badge>
                  : <Badge variant="holgura">HT={a.ht}</Badge>,
              ])}
              rowClassName={(_, i) => {
                const act = result.activities[i]
                return act?.isCritical
                  ? 'bg-red-50 dark:bg-red-900/10'
                  : 'bg-white dark:bg-gray-900'
              }}
            />

            <Alert variant="danger">
              <strong>Ruta crítica:</strong> {result.criticalPath} | <strong>Duración total:</strong> {result.totalDuration} días
            </Alert>

            {/* Leyenda CPM */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2">
                <span className="font-bold text-blue-700 dark:text-blue-400">ES</span> = Early Start<br />
                <span className="text-gray-600 dark:text-gray-400">Inicio más temprano</span>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2">
                <span className="font-bold text-blue-700 dark:text-blue-400">EF</span> = Early Finish<br />
                <span className="text-gray-600 dark:text-gray-400">EF = ES + Duración</span>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded p-2">
                <span className="font-bold text-orange-700 dark:text-orange-400">LS</span> = Late Start<br />
                <span className="text-gray-600 dark:text-gray-400">LS = LF − Duración</span>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded p-2">
                <span className="font-bold text-orange-700 dark:text-orange-400">LF</span> = Late Finish<br />
                <span className="text-gray-600 dark:text-gray-400">Término más tardío</span>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={() => setShowSolution(!showSolution)}>
              <ChevronRight size={14} className={showSolution ? 'rotate-90' : ''} />
              {showSolution ? 'Ocultar' : 'Ver'} solución verificada
            </Button>

            {showSolution && (
              <div className="space-y-2">
                <Alert variant="info">
                  <p><strong>Ruta crítica enunciado:</strong> {ejercicio.solucion.rutaCritica.join(' → ')}</p>
                  <p><strong>Duración total:</strong> {ejercicio.solucion.duracionTotal} días</p>
                </Alert>
                <Table
                  headers={['Act.', 'ES', 'EF', 'LS', 'LF', 'HT', 'Tipo']}
                  rows={ejercicio.solucion.tabla.map(r => [
                    <span className="font-bold">{r.code}</span>,
                    r.es, r.ef, r.ls, r.lf, r.ht,
                    r.critica ? <Badge variant="critico">Crítica</Badge> : <Badge variant="holgura">No crítica</Badge>,
                  ])}
                  rowClassName={(r) => r[6]?.props?.variant === 'critico' ? 'bg-red-50 dark:bg-red-900/10' : 'bg-white dark:bg-gray-900'}
                />
              </div>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  )
}

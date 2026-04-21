import { useState, useCallback } from 'react'
import { quizQuestions } from '../data/quiz_questions'
import { shuffleArray, saveToStorage, loadFromStorage } from '../utils/helpers'
import { Card, CardBody } from './ui/Card'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'
import { ProgressBar } from './ui/ProgressBar'
import { Alert } from './ui/Alert'
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react'

const temaColors = { CPM: 'critico', Gantt: 'holgura', Fundamentos: 'blue' }

export function QuizSession() {
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [history, setHistory] = useState([])
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const [filtro, setFiltro] = useState('Todos')

  const temas = ['Todos', 'CPM', 'Gantt', 'Fundamentos']
  const prevScore = loadFromStorage('quiz_last_score', null)

  const iniciar = useCallback((tema) => {
    const pool = tema === 'Todos' ? quizQuestions : quizQuestions.filter(q => q.tema === tema)
    setQuestions(shuffleArray(pool))
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setHistory([])
    setDone(false)
    setStarted(true)
    setFiltro(tema)
  }, [])

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const q = questions[current]
    const correct = idx === q.respuestaCorrecta
    if (correct) setScore(s => s + 1)
    setHistory(h => [...h, { id: q.id, correct, selected: idx }])
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      const finalScore = score + (selected === questions[current].respuestaCorrecta ? 0 : 0)
      saveToStorage('quiz_last_score', { score, total: questions.length, tema: filtro, date: new Date().toLocaleDateString('es-CL') })
      setDone(true)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  // Pantalla de inicio
  if (!started) {
    return (
      <div className="space-y-4 max-w-xl mx-auto">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Selecciona un tema para comenzar el simulador. Cada pregunta tiene explicación detallada.
        </p>
        {prevScore && (
          <Alert variant="info">
            Último intento: <strong>{prevScore.score}/{prevScore.total}</strong> en {prevScore.tema} — {prevScore.date}
          </Alert>
        )}
        <div className="grid grid-cols-2 gap-3">
          {temas.map(tema => {
            const count = tema === 'Todos' ? quizQuestions.length : quizQuestions.filter(q => q.tema === tema).length
            return (
              <button
                key={tema}
                onClick={() => iniciar(tema)}
                className="p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 bg-white dark:bg-gray-800 text-left transition-all"
              >
                <Badge variant={temaColors[tema] || 'gray'} className="mb-2">{tema}</Badge>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{count} preguntas</p>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // Pantalla de resultados
  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const nota = pct >= 90 ? '7.0' : pct >= 75 ? '6.0' : pct >= 60 ? '5.0' : pct >= 45 ? '4.0' : '3.0'
    return (
      <div className="space-y-4 max-w-xl mx-auto">
        <Card>
          <CardBody className="text-center py-8 space-y-3">
            <Trophy className="mx-auto text-yellow-500" size={40} />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Quiz terminado</h3>
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{score}/{questions.length}</p>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">Nota aprox.: {nota}</p>
            <ProgressBar value={score} max={questions.length} color={pct >= 60 ? 'green' : 'red'} />
            <div className="flex gap-2 justify-center flex-wrap mt-4">
              <Button onClick={() => iniciar(filtro)} size="sm">
                <RotateCcw size={14} /> Repetir
              </Button>
              <Button onClick={() => setStarted(false)} variant="secondary" size="sm">
                Cambiar tema
              </Button>
            </div>
          </CardBody>
        </Card>
        {/* Revisión */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Revisión de respuestas</h4>
          {history.map((h, i) => {
            const q = questions.find(q => q.id === h.id)
            if (!q) return null
            return (
              <Card key={i}>
                <CardBody className="space-y-2">
                  <div className="flex items-start gap-2">
                    {h.correct
                      ? <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      : <XCircle className="text-red-500 shrink-0 mt-0.5" size={16} />
                    }
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{q.pregunta}</p>
                  </div>
                  {!h.correct && (
                    <p className="text-xs text-red-600 dark:text-red-400 ml-6">
                      Tu respuesta: {q.opciones[h.selected]}
                    </p>
                  )}
                  <p className="text-xs text-green-700 dark:text-green-400 ml-6">
                    Correcta: {q.opciones[q.respuestaCorrecta]}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 ml-6 italic">{q.explicacion}</p>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  // Pregunta activa
  const q = questions[current]
  const isCorrect = selected === q.respuestaCorrecta

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <ProgressBar value={current + 1} max={questions.length} label={`Pregunta ${current + 1} de ${questions.length}`} />
      </div>

      <Card>
        <CardBody className="space-y-4">
          <div className="flex gap-2">
            <Badge variant={temaColors[q.tema] || 'gray'}>{q.tema}</Badge>
            <Badge variant={q.dificultad === 'basico' ? 'holgura' : q.dificultad === 'medio' ? 'yellow' : 'critico'}>
              {q.dificultad}
            </Badge>
          </div>

          <p className="font-medium text-gray-800 dark:text-gray-200 text-sm leading-relaxed">{q.pregunta}</p>

          <div className="space-y-2">
            {q.opciones.map((op, i) => {
              let cls = 'w-full text-left px-4 py-3 rounded-lg border-2 text-sm transition-all '
              if (!answered) {
                cls += 'border-gray-200 dark:border-gray-700 hover:border-blue-400 bg-white dark:bg-gray-800'
              } else if (i === q.respuestaCorrecta) {
                cls += 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
              } else if (i === selected && !isCorrect) {
                cls += 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
              } else {
                cls += 'border-gray-200 dark:border-gray-700 opacity-50 bg-white dark:bg-gray-800'
              }
              return (
                <button key={i} className={cls} onClick={() => handleSelect(i)}>
                  <span className="flex items-center gap-2">
                    {answered && i === q.respuestaCorrecta && <CheckCircle size={14} className="text-green-500 shrink-0" />}
                    {answered && i === selected && !isCorrect && <XCircle size={14} className="text-red-500 shrink-0" />}
                    {op}
                  </span>
                </button>
              )
            })}
          </div>

          {answered && (
            <Alert variant={isCorrect ? 'success' : 'danger'}>
              <strong>{isCorrect ? '¡Correcto!' : 'Incorrecto'}</strong> — {q.explicacion}
            </Alert>
          )}

          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              Puntaje: {score}/{current + (answered ? 1 : 0)}
            </span>
            {answered && (
              <Button onClick={handleNext} size="sm">
                {current + 1 >= questions.length ? 'Ver resultados' : 'Siguiente'}
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

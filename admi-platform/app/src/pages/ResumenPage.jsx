import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { MotionCard, CardHeader, CardBody } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Table } from '../components/ui/Table'
import { modulosInfo, organizaciones, procesosPMI, areasPMI } from '../data/modulos_info'

const colorMap = {
  blue: 'blue',
  purple: 'purple',
  green: 'holgura',
  red: 'critico',
}

const moduloGradients = {
  blue: 'from-blue-400 to-indigo-600',
  purple: 'from-purple-400 to-pink-600',
  green: 'from-emerald-400 to-teal-600',
  red: 'from-rose-400 to-red-600',
}

export function ResumenPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-4"
      >
        <div className="shrink-0 p-3 rounded-2xl bg-gradient-to-br from-slate-400 via-gray-500 to-zinc-600 text-white shadow-lg">
          <FileText size={24} />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
            Resumen PP1
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Toda la materia en un solo lugar
          </p>
        </div>
      </motion.div>

      {/* Módulos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modulosInfo.map((m, i) => (
          <MotionCard key={m.id} delay={i * 0.08} hover glass>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${moduloGradients[m.color]} flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                  {m.id}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-gray-900 dark:text-white text-sm truncate">{m.titulo}</h2>
                  <Badge variant={colorMap[m.color] || 'gray'} className="mt-0.5">Clases {m.clases}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <ul className="space-y-1.5">
                {m.temas.slice(0, 5).map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className={`shrink-0 w-1 h-1 rounded-full mt-2 bg-gradient-to-r ${moduloGradients[m.color]}`} />
                    {t}
                  </li>
                ))}
                {m.temas.length > 5 && (
                  <li className="text-xs text-gray-500 dark:text-gray-500 italic ml-3">
                    + {m.temas.length - 5} temas más…
                  </li>
                )}
              </ul>
            </CardBody>
          </MotionCard>
        ))}
      </div>

      {/* Fórmulas destacadas */}
      <MotionCard glass>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-base flex items-center gap-2">
            <span className="gradient-text">Fórmulas clave</span>
          </h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { titulo: 'CPM — Pasada adelante', formula: 'EF = ES + Duración\nnodo = MAX(EF llegantes)', grad: 'from-blue-500 to-indigo-600' },
              { titulo: 'CPM — Pasada atrás', formula: 'LS = LF − Duración\nnodo = MIN(LS salientes)', grad: 'from-orange-500 to-amber-600' },
              { titulo: 'Holgura Total', formula: 'HT = LF − EF = LS − ES\nHT = 0 → Crítica', grad: 'from-rose-500 to-red-600' },
              { titulo: 'Carta Gantt', formula: 'Inicio = MAX(EF preds) + 1\nTérmino = Inicio + Dur − 1', grad: 'from-emerald-500 to-teal-600' },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2, scale: 1.02 }}
                className={`relative overflow-hidden rounded-xl p-4 bg-gradient-to-br ${f.grad} text-white shadow-lg`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                <p className="text-xs font-bold uppercase tracking-wider opacity-90 mb-2">{f.titulo}</p>
                <pre className="text-sm font-mono font-semibold whitespace-pre-wrap leading-relaxed">{f.formula}</pre>
              </motion.div>
            ))}
          </div>
        </CardBody>
      </MotionCard>

      {/* Organizaciones */}
      <MotionCard hover>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-base">Organizaciones Mundiales</h2>
        </CardHeader>
        <CardBody>
          <Table
            headers={['Organización', 'País', 'Año', 'Estándar', 'Certificaciones']}
            rows={organizaciones.map(o => [
              <span className="font-bold gradient-text">{o.nombre}</span>,
              o.pais,
              o.año,
              o.estandar,
              o.certs,
            ])}
          />
        </CardBody>
      </MotionCard>

      {/* 5 Grupos PMI */}
      <MotionCard hover>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-base">5 Grupos de Procesos PMI</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-3">
            {procesosPMI.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/40 dark:hover:bg-white/5 transition-colors"
              >
                <div className="shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  {i + 1}
                </div>
                <div>
                  <span className="font-bold text-sm text-gray-900 dark:text-white">{p.nombre}</span>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{p.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-xs font-semibold text-center text-blue-700 dark:text-blue-300">
            Inicio → Planificación → Ejecución → Seguimiento/Control → Cierre
          </div>
        </CardBody>
      </MotionCard>

      {/* 10 Áreas PMI */}
      <MotionCard hover>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-base">10 Áreas de Conocimiento PMI</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {areasPMI.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05 }}
                className={`text-center text-xs rounded-xl p-3 font-semibold ${
                  a.esCentro
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/30 col-span-2 sm:col-span-1'
                    : 'bg-white/60 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/10'
                }`}
              >
                {a.esCentro && <span className="block text-[9px] font-black tracking-wider opacity-80 mb-0.5">NÚCLEO</span>}
                {a.nombre}
              </motion.div>
            ))}
          </div>
        </CardBody>
      </MotionCard>

      {/* Fayol */}
      <MotionCard hover>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-base">Proceso Administrativo de Fayol</h2>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {['Prever', 'Organizar', 'Dirigir', 'Coordinar', 'Controlar'].map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-[10px] flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{e}</span>
                </div>
                {i < 4 && <span className="text-gray-400 dark:text-gray-600">→</span>}
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Mnemotecnia: <span className="font-mono font-bold gradient-text">P-O-D-C-C</span>
          </p>
        </CardBody>
      </MotionCard>

      {/* SMART */}
      <MotionCard hover>
        <CardHeader>
          <h2 className="font-bold text-gray-900 dark:text-white text-base">Objetivos SMART</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {[
              ['S', 'Específico', 'Specific', 'from-red-500 to-orange-500'],
              ['M', 'Medible', 'Measurable', 'from-orange-500 to-amber-500'],
              ['A', 'Alcanzable', 'Achievable', 'from-amber-500 to-yellow-500'],
              ['R', 'Relevante', 'Relevant', 'from-emerald-500 to-teal-500'],
              ['T', 'Temporal', 'Time-bound', 'from-blue-500 to-indigo-500'],
            ].map(([letra, es, en, grad], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="relative overflow-hidden text-center p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200/60 dark:border-white/10"
              >
                <div className={`text-3xl sm:text-4xl font-black bg-gradient-to-br ${grad} bg-clip-text text-transparent`}>
                  {letra}
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 mt-1">{es}</p>
                <p className="text-[9px] text-gray-400 italic">{en}</p>
              </motion.div>
            ))}
          </div>
        </CardBody>
      </MotionCard>
    </div>
  )
}

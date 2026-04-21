/**
 * Calcula ES/EF/LS/LF y holguras usando el método CPM (pasada adelante + atrás).
 * @param {Array} activities - Array de { code, name, duration, predecessors: [] }
 * @returns {{ activities, criticalPath, totalDuration }}
 */
export function calculateCPM(activities) {
  const map = {}
  activities.forEach(a => { map[a.code] = { ...a, es: 0, ef: 0, ls: 0, lf: 0, ht: 0, isCritical: false } })

  const order = topologicalSort(activities)

  // Pasada hacia adelante (ES = 0-based)
  order.forEach(code => {
    const act = map[code]
    if (act.predecessors.length === 0) {
      act.es = 0
    } else {
      act.es = Math.max(...act.predecessors.map(p => map[p].ef))
    }
    act.ef = act.es + act.duration
  })

  const totalDuration = Math.max(...order.map(c => map[c].ef))

  // Pasada hacia atrás
  const reverseOrder = [...order].reverse()
  reverseOrder.forEach(code => {
    const act = map[code]
    const successors = activities.filter(a => a.predecessors.includes(code))
    if (successors.length === 0) {
      act.lf = totalDuration
    } else {
      act.lf = Math.min(...successors.map(s => map[s.code].ls))
    }
    act.ls = act.lf - act.duration
    act.ht = act.lf - act.ef
    act.isCritical = act.ht === 0
  })

  const criticalCodes = order.filter(c => map[c].isCritical)
  const criticalPath = criticalCodes.join(' → ')

  return {
    activities: order.map(c => map[c]),
    criticalPath,
    totalDuration,
  }
}

function topologicalSort(activities) {
  const result = []
  const visited = new Set()
  const map = {}
  activities.forEach(a => { map[a.code] = a })

  function visit(code) {
    if (visited.has(code)) return
    visited.add(code)
    map[code].predecessors.forEach(p => visit(p))
    result.push(code)
  }

  activities.forEach(a => visit(a.code))
  return result
}

export const modulosInfo = [
  {
    id: 'M01',
    titulo: 'Fundamentos de Administración',
    clases: '1 y 2',
    prueba: 'PP1',
    temas: [
      'Definición de Administración (Fayol, Koontz, Robbins, Terry & Rue)',
      'Proceso Administrativo de Fayol: P-O-D-C-C',
      'Definición de Proyecto (Heredia & Santana + PMI)',
      '3 características del proyecto: alcance definido, resultado único, temporal',
      'Los 4 pilares: Planificación, Programación, Organización, Control',
      'Organizaciones mundiales: PMI (1969), IPMA (1965), AXELOS/PRINCE2 (2013), APM (1972)',
      'PMI: 5 grupos de procesos',
      'PMI: 10 áreas de conocimiento',
    ],
    color: 'blue',
  },
  {
    id: 'M02',
    titulo: 'WBS, Actividades y Restricciones',
    clases: '3',
    prueba: 'PP1',
    temas: [
      'WBS/EDT: definición PMBOK, estructura jerárquica',
      'Actividades: atributos cuantitativos (duración, fechas, avance, costo, recursos)',
      'Actividades: atributos cualitativos (nombre, descripción, código, calendario)',
      '6 tipos de restricciones: físicas, seguridad, recursos, inversión, administrativas, ambientales',
      '10 técnicas de planificación (Gantt, WBS, CPM, Kanban, PERT...)',
      'Objetivos SMART: Específico, Medible, Alcanzable, Relevante, Temporal',
    ],
    color: 'purple',
  },
  {
    id: 'M03',
    titulo: 'Carta Gantt',
    clases: '3 y 4',
    prueba: 'PP1',
    temas: [
      'Construcción desde tabla de actividades',
      'Días laborales (L-V) vs días corridos (todos)',
      'Regla: Inicio = MAX(EF predecesoras) + 1',
      'Ruta crítica: secuencia con holgura = 0 → barra ROJA',
      'Actividades con holgura → barra VERDE',
      '3 ejercicios resueltos completos (Separata N°1)',
    ],
    color: 'green',
    ejercicios: 3,
    tipoEjercicios: 'gantt',
  },
  {
    id: 'M04',
    titulo: 'CPM — Ruta Crítica',
    clases: '4 y 5',
    prueba: 'PP1',
    temas: [
      'Diagrama de flechas: nodos = eventos, flechas = actividades',
      'ES, EF, LS, LF — definición y fórmulas',
      'Pasada hacia adelante: EF = ES + Dur, nodo = MAX',
      'Pasada hacia atrás: LS = LF - Dur, nodo = MIN',
      'Holgura Total: HT = LF − EF = LS − ES',
      'HT = 0 → Crítica. HT > 0 → No crítica',
      'Actividades ficticias: duración 0, flecha punteada',
      '3 ejercicios resueltos completos (Separata N°2)',
    ],
    color: 'red',
    ejercicios: 3,
    tipoEjercicios: 'cpm',
  },
]

export const organizaciones = [
  { nombre: 'PMI', pais: 'EE.UU.', año: 1969, estandar: 'PMBOK®', certs: 'PMP®, CAPM®, PgMP®' },
  { nombre: 'IPMA', pais: 'Europa', año: 1965, estandar: 'ICB', certs: 'Nivel A, B, C, D' },
  { nombre: 'AXELOS / PRINCE2®', pais: 'Reino Unido', año: 2013, estandar: 'PRINCE2®', certs: 'Foundation, Practitioner' },
  { nombre: 'APM', pais: 'Reino Unido', año: 1972, estandar: 'APMBoK', certs: 'Project Fundamentals' },
]

export const procesosPMI = [
  { nombre: 'Inicio', descripcion: 'Se establecen objetivos, se identifican interesados, se nombra al Director del proyecto.' },
  { nombre: 'Planificación', descripcion: 'Se define el alcance, se afinan objetivos, se nombra al equipo y se desarrolla el Plan de dirección.' },
  { nombre: 'Ejecución', descripcion: 'Se coordinan todos los procesos y recursos para completar el trabajo definido en el plan.' },
  { nombre: 'Seguimiento y Control', descripcion: 'Se compara el desempeño real con el planificado. Ocurre a lo largo de TODO el proyecto.' },
  { nombre: 'Cierre', descripcion: 'Se formaliza la aceptación de entregables con el cliente, se archiva documentación y se registran lecciones aprendidas.' },
]

export const areasPMI = [
  { nombre: 'Integración', esCentro: true },
  { nombre: 'Alcance', esCentro: false },
  { nombre: 'Cronograma', esCentro: false },
  { nombre: 'Costos', esCentro: false },
  { nombre: 'Calidad', esCentro: false },
  { nombre: 'Recursos', esCentro: false },
  { nombre: 'Comunicación', esCentro: false },
  { nombre: 'Riesgos', esCentro: false },
  { nombre: 'Adquisiciones', esCentro: false },
  { nombre: 'Interesados', esCentro: false },
]

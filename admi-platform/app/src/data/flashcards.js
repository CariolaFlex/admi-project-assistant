export const flashcards = [
  // CPM
  {
    id: 1, categoria: 'CPM', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Qué significa ES en CPM?',
    respuesta: 'Early Start — Primera fecha en que la actividad PUEDE COMENZAR (inicio más temprano posible).',
  },
  {
    id: 2, categoria: 'CPM', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Qué significa EF en CPM?',
    respuesta: 'Early Finish — Primera fecha en que la actividad PUEDE TERMINAR. Se calcula: EF = ES + Duración.',
  },
  {
    id: 3, categoria: 'CPM', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Qué significa LS en CPM?',
    respuesta: 'Late Start — Última fecha posible para INICIAR la actividad sin retrasar el proyecto.',
  },
  {
    id: 4, categoria: 'CPM', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Qué significa LF en CPM?',
    respuesta: 'Late Finish — Última fecha posible para TERMINAR la actividad sin retrasar el proyecto.',
  },
  {
    id: 5, categoria: 'CPM', prueba: 'PP1', dificultad: 'medio',
    pregunta: '¿Cómo se calcula la Holgura Total (HT)?',
    respuesta: 'HT = LF − EF = LS − ES. Si HT = 0, la actividad es CRÍTICA. Si HT > 0, no es crítica y puede retrasarse sin afectar el proyecto.',
  },
  {
    id: 6, categoria: 'CPM', prueba: 'PP1', dificultad: 'medio',
    pregunta: 'En la pasada hacia adelante, ¿qué operación aplico cuando múltiples flechas llegan a un nodo?',
    respuesta: 'Aplicar MAX: el nodo toma el mayor EF de todas las actividades que llegan. Así se asegura que TODAS estén terminadas antes de continuar.',
  },
  {
    id: 7, categoria: 'CPM', prueba: 'PP1', dificultad: 'medio',
    pregunta: 'En la pasada hacia atrás, ¿qué operación aplico cuando múltiples flechas salen de un nodo?',
    respuesta: 'Aplicar MIN: el nodo toma el menor LS de todas las actividades que salen. Así se determina cuándo a lo más tarde debe estar ese evento.',
  },
  {
    id: 8, categoria: 'CPM', prueba: 'PP1', dificultad: 'avanzado',
    pregunta: '¿Para qué sirve una actividad ficticia en el diagrama CPM?',
    respuesta: 'Representa una dependencia lógica sin duración real (duración = 0). Se dibuja con flecha punteada y se usa cuando dos caminos paralelos convergen en el mismo nodo para evitar ambigüedades.',
  },
  {
    id: 9, categoria: 'CPM', prueba: 'PP1', dificultad: 'avanzado',
    pregunta: 'Si el cliente exige reducir el plazo, ¿en qué actividades debes intervenir?',
    respuesta: 'Solo en actividades de la RUTA CRÍTICA (HT = 0). Acortar actividades fuera de la ruta crítica no reduce la duración total del proyecto y solo genera sobrecosto.',
  },
  // Carta Gantt
  {
    id: 10, categoria: 'Gantt', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Cuál es la regla para calcular el inicio de una actividad en el Gantt?',
    respuesta: 'Inicio = MAX(Término de todas sus predecesoras) + 1. La actividad espera a que TODAS sus predecesoras terminen.',
  },
  {
    id: 11, categoria: 'Gantt', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Cómo se calcula el término de una actividad en el Gantt?',
    respuesta: 'Término = Inicio + Duración − 1.',
  },
  {
    id: 12, categoria: 'Gantt', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Qué diferencia hay entre días laborales y días corridos?',
    respuesta: 'Días laborales: solo Lunes a Viernes (excluye sábados y domingos). Días corridos: todos los días del calendario incluyendo fines de semana.',
  },
  {
    id: 13, categoria: 'Gantt', prueba: 'PP1', dificultad: 'medio',
    pregunta: '¿Cómo se identifica la ruta crítica en una Carta Gantt?',
    respuesta: 'Es la secuencia de actividades con holgura = 0 que forma el camino más largo desde el inicio hasta el final. Se marca con barras ROJAS.',
  },
  {
    id: 14, categoria: 'Gantt', prueba: 'PP1', dificultad: 'medio',
    pregunta: 'Una actividad tiene holgura de 5 días y se retrasa 3 días. ¿Afecta al proyecto?',
    respuesta: 'No. El retraso de 3 días queda dentro del margen de holgura (5 días). La fecha de término del proyecto no cambia. Si se retrasa más de 5 días, entonces sí afectaría.',
  },
  // Fundamentos
  {
    id: 15, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Cuáles son las 3 características fundamentales de todo proyecto según PMI?',
    respuesta: '1) Alcance definido (resultado específico). 2) Resultado único (único en localización, diseño, entorno). 3) Temporal (tiene inicio y fin definidos).',
  },
  {
    id: 16, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Cuáles son los 5 elementos del proceso administrativo de Fayol?',
    respuesta: 'Prever → Organizar → Dirigir → Coordinar → Controlar. Mnemotecnia: P-O-D-C-C.',
  },
  {
    id: 17, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'medio',
    pregunta: '¿Cuáles son los 5 grupos de procesos del PMI?',
    respuesta: 'Inicio → Planificación → Ejecución → Seguimiento y Control → Cierre. El control ocurre a lo largo de TODO el proyecto, no solo al final.',
  },
  {
    id: 18, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'medio',
    pregunta: '¿Cuántas áreas de conocimiento define el PMI y cuál está en el centro?',
    respuesta: '10 áreas de conocimiento. INTEGRACIÓN está en el centro, rodeada de: Alcance, Cronograma, Costos, Calidad, Recursos, Comunicación, Riesgos, Adquisiciones e Interesados.',
  },
  {
    id: 19, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿En qué año se fundó el PMI y qué estándar publica?',
    respuesta: 'PMI se fundó en 1969 en EE.UU. Publica el PMBOK® (Project Management Body of Knowledge), desde 1987.',
  },
  {
    id: 20, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'medio',
    pregunta: '¿Qué significan las siglas WBS?',
    respuesta: 'Work Breakdown Structure (en español: EDT — Estructura de Desglose del Trabajo). Es la descomposición jerárquica del alcance total del proyecto en componentes más pequeños y manejables.',
  },
  {
    id: 21, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'basico',
    pregunta: '¿Qué significa cada letra de SMART?',
    respuesta: 'S=Específico, M=Medible, A=Alcanzable, R=Relevante, T=Temporal. Un objetivo SMART cumple los 5 criterios y tiene un período de tiempo definido.',
  },
  {
    id: 22, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'medio',
    pregunta: '¿Cuáles son los 4 pilares de la Administración de Proyectos?',
    respuesta: 'Planificación (estrategia general), Programación (actividades con fechas y duraciones), Organización (asignación de recursos), Control (mide y previene variaciones en tiempo y costo).',
  },
  {
    id: 23, categoria: 'Fundamentos', prueba: 'PP1', dificultad: 'avanzado',
    pregunta: '¿Cuál es la diferencia entre IPMA y PMI en su enfoque?',
    respuesta: 'PMI (EE.UU., 1969): marcos tradicionales e híbridos, estándar PMBOK®. IPMA (Europa, 1965): enfoque en competencias técnicas, de comportamiento y contextuales, estándar ICB.',
  },
  {
    id: 24, categoria: 'CPM', prueba: 'PP1', dificultad: 'avanzado',
    pregunta: 'En el ejercicio CobreAndes, ¿por qué no conviene reducir la actividad C (Terreno) para acortar el proyecto?',
    respuesta: 'Porque C tiene HT = 6 días (no es crítica). Reducirla no movería la fecha de término. Solo tiene sentido reducir actividades de la ruta crítica: A, B, D, E, G, H.',
  },
  {
    id: 25, categoria: 'Gantt', prueba: 'PP1', dificultad: 'avanzado',
    pregunta: 'En la Separata 1 Ej. 2, E tiene 6 días de holgura. Si E se retrasa 4 días, ¿afecta al proyecto?',
    respuesta: 'No. El retraso de 4 días queda absorbido dentro de los 6 días de holgura. El proyecto sigue terminando en el día 21.',
  },
]

# M02 — WBS, Ciclo de Vida y Actividades
**Basado en:** Clase N°3 · Docente Mónica Vigorena H.

---

## 1. Ciclo de Vida del Proyecto

Todo proyecto, por definición:
1. **Es de alcance definido** — se ejecuta para obtener un producto específico
2. **Tiene resultado único** — único en localización, diseño, entorno, personas involucradas
3. **Es temporal** — tiene inicio y fin claramente definidos en el tiempo

---

## 2. WBS / EDT — Estructura de Desglose del Trabajo

> **Definición PMBOK:** "Descomposición jerárquica del alcance total del trabajo a realizar en un proyecto, para cumplir con sus objetivos y crear sus entregables."

La EDT/WBS permite:
- Subdividir los entregables en componentes más pequeños y manejables
- Proporcionar una visión estructurada de lo que se debe entregar
- Organizar y definir el alcance total del proyecto
- Representar el trabajo especificado en el enunciado del alcance aprobado

### Ejemplo — WBS Construcción de Edificio:
```
Construcción del Edificio
├── Trabajos Preliminares
│   ├── Replanteo y nivelación
│   └── Relleno compactado
├── Cimentación y Estructura
│   ├── Excavación en plintos y cimiento
│   ├── Replantillo de hormigón simple
│   ├── Hormigón en zapatas, vigas, columnas
│   ├── Cimientos de piedra
│   ├── Acero de refuerzo
│   └── Contrapiso HS
├── Paredes y Enlucidos
│   ├── Mampostería de ladrillo
│   ├── Enlucido horizontal y vertical
│   ├── Empastado paredes
│   └── Colocación cerámica
├── Instalaciones Eléctricas y Sanitarias
│   ├── Tubería PVC desagüe
│   ├── Tubería de aguas servidas
│   ├── Tubería de agua fría
│   ├── Sifón PVC, llave de paso
│   ├── Inodoro, Lavamanos
│   └── Medidor de energía, tablero distribución
└── Pintura, Puertas y Ventanas
    ├── Puertas de madera y espejos
    ├── Puerta de laurel
    └── Ventana de aluminio y vidrio
```

---

## 3. Actividades que componen la WBS

> **Definición:** Una actividad es una **pieza reconocible de trabajo** que tiene un comienzo y un fin bien determinados.

Cada actividad tiene características que se dividen en:

### Atributos Cuantitativos (Medibles):
1. **Duración estimada** — período de tiempo asignado para terminar la actividad
2. **Fechas de inicio y término** — delimitan cuándo debe realizarse
3. **Porcentaje de avance teórico** — avance que debería tener en una fecha de control determinada
4. **Costo estimado** — costo para calcular el presupuesto total
5. **Recursos** — mano de obra, materiales y equipos

### Atributos Cualitativos (No medibles, pero identifican la actividad):
1. **Nombre de la actividad** — suficientemente claro para identificarla sin confusión
2. **Descripción del trabajo incluido** — detalle del trabajo necesario para completarla
3. **Número o código** — identifica la actividad y permite relacionar grupos (partidas de trabajo)
4. **Calendario de trabajo asociado** — tipo de calendario que se utilizará

### Ejemplo de ficha completa de una actividad:
| Campo | Valor |
|-------|-------|
| Fecha | 4-mar. |
| Nombre Actividad | Demolición de Aceras |
| Código | 210 |
| Calendario de trabajo | 09:00–19:00 hrs, Lunes a Viernes |
| Duración | 2 días |
| Fecha Inicio | 4-mar. |
| Fecha Término | 5-mar. |
| Recursos | 2 jornales, 2 martillos neumáticos, 1 chuzo |
| Costo | $57.865 |

---

## 4. Restricciones de una Actividad

> Las **restricciones** son las condiciones que requiere la actividad para comenzar o finalizar. Determinan las relaciones entre actividades y la secuencia de ejecución.

Para cada actividad, las preguntas clave son:
- ¿Cuáles son las actividades **precedentes** a ésta?
- ¿Qué actividades **deben seguir** a ésta?
- ¿Qué actividades **pueden realizarse simultáneamente** con ésta?

### Tipos de Restricciones:

| Tipo | Descripción |
|------|-------------|
| **Físicas o técnicas** | Dependen del método de trabajo adoptado |
| **De seguridad** | Uso de explosivos, derrumbes, trabajos en sectores peligrosos |
| **Por recursos** | Materiales, maquinarias o mano de obra disponibles |
| **Por oportunidad de inversión** | Disponibilidad de financiamiento |
| **Administrativas** | Reglamentos de empresa (máximo de horas de trabajo) |
| **Ambientales** | Clima, características del lugar, flora y fauna |

---

## 5. Técnicas de Planificación

> **Planificación:** Actividad mental creativa sobre qué se debe hacer, cómo, en qué lugar, por quién y con qué.

> **Técnicas de Planificación:** Herramientas del planificador que ayudan a analizar el plan y organizar la información.

```
Planificación + Técnicas de Planificación = PLAN DE TRABAJO
```

El Plan de Trabajo es la estrategia y tácticas para la ejecución del proyecto, en función de actividades, tiempo, cantidades, recursos y costos.

### Las 10 Herramientas de Planificación más usadas:

| N° | Técnica | Descripción corta |
|----|---------|------------------|
| 1 | **Diagrama de Gantt** | Barras en eje de tiempo — visual y simple |
| 2 | **WBS/EDT** | Desglose jerárquico del trabajo |
| 3 | **Ruta Crítica (CPM)** | Red de actividades con ES/EF/LS/LF |
| 4 | **Línea Base** | Referencia original para medir desviaciones |
| 5 | **Tablero Kanban** | Tarjetas de flujo de trabajo (ágil) |
| 6 | **Diagrama PERT** | Red con estimaciones probabilísticas |
| 7 | **Mapa Mental** | Organizador gráfico radial |
| 8 | **Matriz RACI** | Responsable, Aprobador, Consultado, Informado |
| 9 | **Mapa de Stakeholders** | Visualización de interesados |
| 10 | **Matriz de Decisiones** | Análisis comparativo de opciones |

> 💡 **Para la prueba:** Las más importantes son Gantt, CPM/Ruta Crítica y WBS.

---

## 6. Objetivos SMART (Clase 5)

Un objetivo SMART es aquel que cumple con 5 criterios:

| Letra | Significado | Descripción |
|-------|-------------|-------------|
| **S** | Específico *(Specific)* | Concreto en qué, dónde y quién |
| **M** | Medible *(Measurable)* | Tiene un indicador que permite medir su consecución |
| **A** | Alcanzable *(Achievable)* | Realista, no exagerado |
| **R** | Relevante *(Relevant)* | Alineado con los objetivos del proyecto/organización |
| **T** | Temporal *(Time-bound)* | Tiene un período de tiempo definido para su consecución |

**Ejemplo de objetivo SMART:**
> "Aumentar un 20% las ventas del producto A en el área de la Comunidad Valenciana en los próximos 6 meses, con responsabilidad de la gerencia de comercialización."

---

## 🧠 Preguntas de Autoevaluación

1. ¿Qué significa WBS y cómo lo define el PMBOK?
2. ¿Cuál es la diferencia entre atributos cuantitativos y cualitativos de una actividad?
3. Nombra 4 tipos de restricciones de una actividad.
4. ¿Qué es un Plan de Trabajo y cómo se obtiene?
5. Lista las 10 técnicas de planificación del ramo.
6. ¿Qué significa cada letra de SMART?
7. ¿Para qué sirven las preguntas "¿qué actividades son precedentes?" al planificar?
8. ¿Cuál es la diferencia entre "eficaz" y "eficiente"?

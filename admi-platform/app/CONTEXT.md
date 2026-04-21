# CONTEXT.md — Estado del Proyecto
# Actualiza este archivo al terminar cada sesión de trabajo.

## Última actualización
2026-04-20 — Sprint completo: scaffold Vite+React+Tailwind, todos los datos, utilidades, componentes y páginas de PP1.

## Cómo ejecutar el proyecto
```bash
cd "admi-platform/app"
npm install
npm run dev
# → http://localhost:5173
```

## Estado actual de cada módulo

| Archivo | Estado | Notas |
|---------|--------|-------|
| `src/data/flashcards.js` | ✅ Completo | 25 tarjetas (CPM, Gantt, Fundamentos) |
| `src/data/ejercicios_gantt.js` | ✅ Completo | 3 ejercicios Separata 1 |
| `src/data/ejercicios_cpm.js` | ✅ Completo | 3 ejercicios Separata 2 con tabla verificada |
| `src/data/quiz_questions.js` | ✅ Completo | 15 preguntas tipo prueba con explicación |
| `src/data/modulos_info.js` | ✅ Completo | M01–M04, organizaciones, procesos PMI, áreas PMI |
| `src/utils/ganttCalc.js` | ✅ Completo | Función pura, 1-based, ES/EF/LS/LF/HT |
| `src/utils/cpmCalc.js` | ✅ Completo | Función pura, 0-based, ES/EF/LS/LF/HT |
| `src/utils/helpers.js` | ✅ Completo | cn, shuffleArray, localStorage helpers |
| `src/components/ui/` | ✅ Completo | Card, Badge, Button, Alert, ProgressBar, Table |
| `src/components/GanttCalculator.jsx` | ✅ Completo | Selector ejercicio, tabla, botón calcular |
| `src/components/GanttChart.jsx` | ✅ Completo | Barras SVG-free, rojo=crítico, verde=holgura |
| `src/components/CPMCalculator.jsx` | ✅ Completo | Tabla ES/EF/LS/LF/HT, solución verificada |
| `src/components/FlashcardDeck.jsx` | ✅ Completo | Flip, filtro por categoría, shuffle, progreso |
| `src/components/QuizSession.jsx` | ✅ Completo | Opciones, feedback, puntaje, localStorage |
| `src/pages/Home.jsx` | ✅ Completo | Dashboard con temas críticos y accesos directos |
| `src/pages/GanttPage.jsx` | ✅ Completo | |
| `src/pages/CPMPage.jsx` | ✅ Completo | |
| `src/pages/FlashcardsPage.jsx` | ✅ Completo | |
| `src/pages/QuizPage.jsx` | ✅ Completo | |
| `src/pages/ResumenPage.jsx` | ✅ Completo | Toda la materia: Fayol, PMI, WBS, SMART, fórmulas |
| `src/App.jsx` | ✅ Completo | BrowserRouter, Layout, dark mode toggle |

## Datos cargados en /src/data/

| Archivo | Registros | Estado |
|---------|-----------|--------|
| `flashcards.js` | 25 tarjetas | ✅ |
| `ejercicios_gantt.js` | 3 ejercicios | ✅ |
| `ejercicios_cpm.js` | 3 ejercicios | ✅ |
| `quiz_questions.js` | 15 preguntas | ✅ |
| `modulos_info.js` | 4 módulos + orgs + PMI | ✅ |

## Decisiones técnicas importantes

### ganttCalc.js vs cpmCalc.js
- **Gantt**: usa escala **1-based** (inicio=1, EF=inicio+dur-1). Coincide con el enunciado "día 1, día 2..."
- **CPM**: usa escala **0-based** (ES=0, EF=ES+dur). Coincide con la notación estándar del PMBOK y los ejercicios de la separata.
- Ambas son funciones puras sin side-effects, testeables con Vitest.

### Dark mode
- Implementado con `class` strategy de Tailwind + `localStorage` para persistencia.
- Toggle en el topbar (ícono Sol/Luna).

### GanttChart
- Renderizado con divs absolutos (sin SVG externo), scroll horizontal para proyectos largos.
- Cada celda = 28px de ancho.

### QuizSession
- Guarda el último puntaje en `localStorage` como `quiz_last_score`.
- No acumula historial entre sesiones (solo el último resultado).

## Pendiente para futuras sesiones

### PP1 — mejoras opcionales
- [ ] Visualizador CPM como diagrama SVG de flechas y nodos (CPMDiagram.jsx)
- [ ] Modo "practica tú mismo" en Gantt: el usuario ingresa sus propios datos
- [ ] Más preguntas de quiz (actualmente 15, meta: 30+)

### PP2 y PP3
- Cuando llegue nueva materia:
  1. Crear `src/data/PP2/flashcards_PP2.js`, etc.
  2. Agregar módulo M05, M06... en `modulos_info.js`
  3. Crear `src/pages/PP2/` con sus propias páginas
  4. Extender el filtro de prueba en flashcards y quiz (`prueba: 'PP2'`)

## Estructura del repo

```
admi-platform/
├── M01_fundamentos.md        ← Fuente de verdad del dominio
├── M02_WBS_actividades.md
├── M03_carta_gantt.md
├── M04_CPM_ruta_critica.md
├── README.md
└── app/                      ← Aplicación React
    ├── CONTEXT.md            ← Este archivo
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── src/
        ├── data/
        ├── utils/
        ├── components/
        └── pages/
```

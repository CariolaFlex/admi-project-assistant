# 🎓 Administración de Proyectos — Plataforma de Estudio

**Universidad de La Serena · Facultad de Ingeniería**  
**Docente:** Mónica Vigorena H. · Ing. Constructor / Ing. Civil Industrial

---

## ✨ Demo

Plataforma web interactiva para estudiar Administración de Proyectos, con calculadoras CPM/Gantt, flashcards 3D, simulador de prueba y resumen completo de la materia.

---

## 🚀 Stack

| Tecnología | Versión |
|---|---|
| React | 18 |
| Vite | 8 |
| Tailwind CSS | 3 |
| Framer Motion | latest |
| React Router | v6 |
| lucide-react | latest |

---

## 📁 Estructura del Repositorio

```
admi-project-assistant/
├── README.md                          ← Este archivo
├── admi-platform/
│   ├── README.md                      ← Detalle de módulos y evaluaciones
│   ├── M01_fundamentos.md
│   ├── M02_WBS_actividades.md
│   ├── M03_carta_gantt.md
│   ├── M04_CPM_ruta_critica.md
│   └── app/                           ← App React+Vite
│       ├── src/
│       │   ├── pages/                 ← Home, Gantt, CPM, Flashcards, Quiz, Resumen
│       │   ├── components/            ← UI components + calculadoras
│       │   ├── data/                  ← Flashcards, ejercicios, preguntas quiz
│       │   └── utils/                 ← ganttCalc.js, cpmCalc.js, helpers.js
│       ├── package.json
│       ├── tailwind.config.js
│       └── vite.config.js
```

---

## ⚡ Correr localmente

```bash
cd "admi-platform/app"
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173)

---

## 📚 Módulos cubiertos

| Módulo | Contenido |
|---|---|
| M01 | Fundamentos, organizaciones mundiales (PMI, IPMA, PRINCE2) |
| M02 | WBS, ciclo de vida, alcance |
| M03 | Carta Gantt — construcción e interpretación |
| M04 | CPM — Ruta Crítica (ES/EF/LS/LF/Holgura) |

---

## 🔥 Funcionalidades

- **Calculadora Gantt** — ingresa actividades y genera diagrama automáticamente
- **Calculadora CPM** — pasada adelante/atrás, holguras, ruta crítica destacada
- **Flashcards 3D** — flip animado, categorías CPM/Gantt/Fundamentos
- **Simulador de Prueba** — 15 preguntas tipo examen con explicación detallada
- **Resumen PP1** — toda la materia: fórmulas, PMI, Fayol, SMART, organizaciones

---

## 🗓️ Evaluaciones

| Nota | Peso | Tipo |
|---|---|---|
| PP1 | 25% | Prueba escrita de desarrollo |
| PP2 | 25% | Prueba escrita de desarrollo |
| PP3 | 30% | Prueba escrita de desarrollo |
| Trabajos | 20% | Trabajos en clases |

---

*Desarrollado con Claude · Universidad de La Serena · 2026*

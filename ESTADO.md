# ESTADO — admi-project-assistant

**Estado al 2026-11-12, antes de la mudanza al Mac.** Verificado contra disco, GitHub y Vercel ese día.

## Qué es

Plataforma de estudio del ramo **Administración de Proyectos** (Universidad de La Serena):
calculadoras de Carta Gantt y CPM, 25 flashcards, simulador de prueba de 15 preguntas y resumen
de la materia de la PP1. React + Vite + Tailwind 3, sin backend: todo corre en el navegador.

- Se hizo el **20 y 21-04-2026** desde una sesión de Claude abierta en la carpeta de MathCariola
  (`C:\Universidad\mathcariola`). Ahí nació la carpeta `PP1 Admi Claude plataforma`, renombrada a
  `admi-platform` en el segundo commit.
- **No es Admi** (`C:\Cariolaspace\Vectium\productos\Admi`, el producto con Joaquín). Son repos
  distintos y no comparten código.
- Pertenece al **catálogo de Vectium**: demo que vive solo en GitHub + Vercel, sin nube.
- Está **terminado para la PP1** y sin actividad desde el 21-04 (los dos commits de octubre y
  noviembre solo cambian rutas en `CLAUDE.md`).

## Qué hay y dónde

| Lugar | Qué tiene |
|---|---|
| Local `C:\Cariolaspace\Vectium\catalogo\admi-project-assistant` | 52 archivos versionados (~0,5 MB) + `.git`. **Ningún ignorado**: no hay `node_modules`, `dist`, `.env`, `.vercel` ni `.claude` |
| GitHub `CariolaFlex/admi-project-assistant` | **Público**. Solo `main`, igual al local. Sin PR, ramas `claude/*`, Actions ni webhooks. Único autor `cariolaflex@gmail.com` |
| Vercel | Proyecto `admi-project-assistant` del equipo `andres-cariolas-projects` (cariolaflex). Producción = el último commit de `main` |
| Drive `Proyectos\Trabajos Freelance\AdmiProject_Assistant_Analisis.pdf` | Análisis del proyecto para el portafolio freelance (29-04, 52 KB). No está en el repo |

## Conexiones y cómo reconectar en el Mac

| Servicio | Dato | Nota |
|---|---|---|
| GitHub | `CariolaFlex/admi-project-assistant`, público, rama `main` | `git clone https://github.com/CariolaFlex/admi-project-assistant.git` |
| Vercel | `prj_VpvHIcvAhBzvCIv2vS8rlxQq2fAR`, equipo `andres-cariolas-projects` (`team_iML633n75JQVegwQNNQaLsDc`) | Enlazado a GitHub (no por CLI: no hay `.vercel/`). **Root Directory `admi-platform/app`**, sin framework ni comandos fijados (Vercel los detecta al construir). 0 variables de entorno, 0 crons, solo el dominio `admi-project-assistant.vercel.app` |
| Despliegues | 21-04 (`68d3849`), 26-10 (`0673de5`), 07-11 (`dafd238`) | Todos READY. Como el repo es público, un push a `main` publica solo (el bloqueo de Vercel con la cuenta vectiumspa afecta solo a repos privados) |
| Supabase / Firebase / otros | No tiene | Nunca usó nube. El progreso del quiz y el modo oscuro se guardan en `localStorage` del navegador |
| Secretos | Ninguno | No hay nada que copiar de Drive `Claves` |

Para trabajar en el Mac:

```bash
cd admi-platform/app
npm install
npm run dev
```

No hace falta `vercel link` ni `vercel env pull`: no hay variables. Si algún día se hace `vercel link`,
elegir el equipo `andres-cariolas-projects` y el proyecto existente.

**Fase 00, tarea 3.5:** si se pasa al equipo `vectium`, **transferir el proyecto de Vercel, no
recrearlo**, para mantener la URL.

## Lo que solo funciona en Windows

Nada del código. Solo las rutas `C:\...` de `CLAUDE.md` y de este archivo, que en el Mac pasan a
ser la ruta donde se clone.

## Hallazgos del 12-11 (sin arreglar: no se publica nada en la mudanza)

1. 🟡 **Los enlaces directos dan 404 en Vercel.** `/` responde 200, pero `/gantt`, `/cpm`,
   `/flashcards`, `/quiz` y `/resumen` dan 404 si se abren directo o se recarga la página.
   Navegando desde el inicio funciona. Causa: es una SPA con `BrowserRouter` y no tiene
   `vercel.json` con la reescritura a `index.html`. Arreglo (cuando se decida publicar):
   `admi-platform/app/vercel.json` con `{"rewrites":[{"source":"/(.*)","destination":"/"}]}`.
2. 🟡 **El `README.md` del raíz decía React 18 y React Router v6.** `package.json` tiene React 19,
   React Router 7, Vite 8 y Tailwind 3. Corregido el 12-11.
3. ⚪ **`admi-platform/README.md` describe una estructura que no está en el repo** (`modulos/`,
   `ejercicios/`, `sprints/`, M05 a M07, separatas resueltas). En el repo solo están M01 a M04 y
   la app. No se encontraron esos archivos en `C:\Cariolaspace` ni en Drive: probablemente
   nunca se escribieron o quedaron en la carpeta de la universidad en Documents (fuera de
   límites, no revisado). Las transcripciones de las dos sesiones de abril no existen
   (Desktop las marca sin transcripción), así que no se puede confirmar.
4. ⚪ Le falta el **sello día/noche + español/inglés**: tiene modo oscuro, pero no idioma.
5. ⚪ Le falta el `docs/CONEXIONES.md` que el `CLAUDE.md` global pide a las demos del catálogo.
   Esta sección de conexiones lo reemplaza (no usaba ningún servicio).

## Decisiones que ya existen (en otros repos)

- **Empleo, V51** (`CariolaConfig\empleo`): no fijar este repo en el perfil de GitHub, porque su
  tema es la universidad (REGLAS §1 del CV).
- **Workana (jun-2026):** figura entre los casos de estudio del portafolio. La memoria
  `workana_kit` lo ponía "tras login", pero la app no tiene login.

## Pendientes (ninguno urgente)

- [ ] Agregar `vercel.json` con la reescritura (hallazgo 1). Es publicar: decide Andrés.
- [ ] Decidir si sigue público y en el catálogo, o se archiva (no hay más pruebas del ramo en curso).
- [ ] Mejoras que quedaron anotadas en `admi-platform/app/CONTEXT.md` (diagrama CPM, modo
      "practica tú mismo", 30+ preguntas, materia de PP2 y PP3): solo si vuelve el ramo.

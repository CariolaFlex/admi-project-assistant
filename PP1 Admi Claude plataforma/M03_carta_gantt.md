# M03 — Carta Gantt / Diagrama de Gantt
**Basado en:** Clase N°3 + Separata N°1 · Docente Mónica Vigorena H.

---

## 1. ¿Qué es la Carta Gantt?

El **Diagrama de Gantt** es una herramienta de planificación y programación que representa gráficamente las actividades de un proyecto a lo largo del tiempo.

- Eje **horizontal (X):** Tiempo (días laborales o corridos, semanas, meses)
- Eje **vertical (Y):** Actividades del proyecto
- Las **barras** representan la duración de cada actividad
- Las **flechas** indican relaciones de precedencia entre actividades

### Tipos de días:
- **Días laborales:** Solo de Lunes a Viernes (L-M-X-J-V), excluye sábados y domingos
- **Días corridos:** Todos los días calendario incluyendo fines de semana

---

## 2. Conceptos Clave

### Actividades Predecesoras
Una actividad **predecesora** es aquella que debe **terminar** antes de que pueda **comenzar** la siguiente.

Ejemplo: Si B tiene predecesora A → B no puede iniciar hasta que A haya terminado completamente.

### Actividades en Paralelo
Cuando dos actividades tienen la misma predecesora pueden ejecutarse **simultáneamente** (en paralelo).

### Ruta Crítica en Gantt
La **ruta crítica** es la secuencia de actividades que determina la **duración mínima** del proyecto. Son las actividades que si se retrasan, retrasan todo el proyecto.

- En el Gantt se marcan en **ROJO** 🔴
- Actividades no críticas (con holgura) se marcan en **VERDE** 🟢

### Holgura
Es el tiempo que puede retrasarse una actividad **sin afectar** la fecha de término del proyecto.

```
Holgura = Fecha más tardía de inicio (LS) - Fecha más temprana de inicio (ES)
        = Fecha más tardía de término (LF) - Fecha más temprana de término (EF)
```

- **Holgura = 0** → Actividad CRÍTICA (ruta crítica)
- **Holgura > 0** → Actividad NO crítica (puede retrasarse)

---

## 3. Pasos para Construir una Carta Gantt

```
PASO 1: Leer la tabla de actividades
        → Identificar: Código, Nombre, Duración, Predecesoras

PASO 2: Ordenar las actividades
        → Las que no tienen predecesoras comienzan en el día 1

PASO 3: Calcular fechas de inicio y término para cada actividad
        → Inicio = Término de su predecesora más larga + 1
        → Término = Inicio + Duración - 1

PASO 4: Dibujar las barras en el eje de tiempo

PASO 5: Agregar flechas de dependencia

PASO 6: Identificar la ruta crítica
        → El camino más largo desde inicio hasta fin del proyecto
```

---

## 4. Cálculo de Fechas — Regla Fundamental

**Inicio de una actividad** = día siguiente al término de su(s) predecesora(s)

Cuando hay **múltiples predecesoras**, la actividad espera a que **TODAS** terminen:
```
Inicio(X) = MAX(Término(predecesoras de X)) + 1
```

**Término de una actividad:**
```
Término(X) = Inicio(X) + Duración(X) - 1
```

---

## 5. Ejercicios Resueltos

---

### 🔧 EJERCICIO 1: Remodelación de Oficina Modular

**Tabla de actividades (días laborales):**

| Código | Actividad | Duración (días) | Predecesoras |
|--------|-----------|----------------|--------------|
| A | Desmantelamiento de tabiques | 3 | — |
| B | Instalaciones eléctricas básicas | 2 | A |
| C | Pintura de muros | 4 | B |
| D | Instalación de piso flotante | 3 | B |
| E | Montaje de mobiliario nuevo | 2 | C, D |
| F | Limpieza y entrega final | 1 | E |

**Preguntas:** 1) Dibuje la Carta Gantt. 2) Determine la ruta crítica y duración total.

#### ✅ SOLUCIÓN:

**Cálculo de fechas:**

| Act. | Duración | Predecesoras | Inicio | Término | Holgura |
|------|----------|-------------|--------|---------|---------|
| A | 3 | — | Día 1 | Día 3 | 0 |
| B | 2 | A | Día 4 | Día 5 | 0 |
| C | 4 | B | Día 6 | Día 9 | 0 |
| D | 3 | B | Día 6 | Día 8 | **1** (termina antes que C) |
| E | 2 | C, D | Día 10 | Día 11 | 0 |
| F | 1 | E | Día 12 | Día 12 | 0 |

> 💡 **Nota clave:** D y C parten el mismo día (ambas esperan a B), pero C dura 4 días y D dura 3. Por tanto C termina en día 9 y D termina en día 8. E espera a **ambas**: espera hasta que termine C (día 9). Por eso D tiene 1 día de holgura.

**Carta Gantt (días laborales — L=Lunes, M=Martes, X=Miércoles, J=Jueves, V=Viernes):**

```
     L  M  X  J  V  S  D  L  M  X  J  V  ...
Día: 1  2  3  4  5  6  7  8  9  10 11 12

A:  [===]
B:        [==]
C:           [=======]
D:           [====] · (verde, 1 día holgura)
E:                    [===]
F:                          [=]
```

**Ruta Crítica: A → B → C → E → F**
**Duración total: 12 días laborales**

---

### 🏗️ EJERCICIO 2: Lanzamiento de Campaña Constructora

**Tabla de actividades (días corridos):**

| Código | Actividad | Duración | Predecesoras |
|--------|-----------|----------|-------------|
| A | Estudio de factibilidad comercial | 4 | — |
| B | Diseño de material gráfico | 6 | A |
| C | Obtención de permisos de publicidad | 8 | A |
| D | Producción de letreros y banners | 5 | B |
| E | Contratación de promotores | 3 | B |
| F | Instalación de publicidad en terreno | 4 | C, D |
| G | Evento de preventa | 2 | F, E |

**Preguntas:** 1) Carta Gantt. 2) Ruta crítica y duración total. 3) ¿Qué actividades tienen holgura y cuántos días? 4) Si E se retrasa 4 días, ¿cómo se ve afectado el proyecto?

#### ✅ SOLUCIÓN:

**Cálculo de fechas:**

| Act. | Dur. | Pred. | Inicio | Término |
|------|------|-------|--------|---------|
| A | 4 | — | 1 | 4 |
| B | 6 | A | 5 | 10 |
| C | 8 | A | 5 | 12 |
| D | 5 | B | 11 | 15 |
| E | 3 | B | 11 | 13 |
| F | 4 | C, D | 16 | 19 |
| G | 2 | F, E | 20 | 21 |

> 💡 F espera a C (termina 12) y D (termina 15) → espera al mayor = D → F inicia día 16
> 💡 G espera a F (termina 19) y E (termina 13) → espera al mayor = F → G inicia día 20

**Holguras:**
- C: Termina día 12, pero D (su "compañera" que alimenta F) termina día 15. C tiene **3 días de holgura**.
- E: Termina día 13, pero F (su "compañera" para G) termina día 19. E tiene **6 días de holgura**.
- Resto: holgura 0 → críticas.

**Ruta Crítica: A → B → D → F → G**
**Duración total: 21 días corridos**

**Respuesta a pregunta 4:** Si E se retrasa 4 días (terminaría día 17), como E tiene 6 días de holgura, el proyecto **NO SE VE AFECTADO**. El retraso de 4 días queda absorbido dentro del margen de holgura disponible.

---

### 🏭 EJERCICIO 3: Instalación de Sistema de Climatización Industrial

**Tabla de actividades (días laborales):**

| Código | Actividad | Duración | Predecesoras |
|--------|-----------|----------|-------------|
| A | Ingeniería de detalle y cálculo | 5 | — |
| B | Compra de equipos y materiales | 10 | A |
| C | Preparación de soportes estructurales | 4 | A |
| D | Tendido de ductos principales | 12 | B, C |
| E | Conexiones eléctricas y control | 6 | B |
| F | Montaje de unidades exteriores | 5 | B |
| G | Pruebas de presión y estanqueidad | 3 | D |
| H | Puesta en marcha y calibración | 4 | G, E, F |
| I | Capacitación a operadores de planta | 2 | H |

#### ✅ SOLUCIÓN:

**Cálculo de fechas:**

| Act. | Dur. | Pred. | Inicio | Término |
|------|------|-------|--------|---------|
| A | 5 | — | 1 | 5 |
| B | 10 | A | 6 | 15 |
| C | 4 | A | 6 | 9 |
| D | 12 | B, C | 16 | 27 |
| E | 6 | B | 16 | 21 |
| F | 5 | B | 16 | 20 |
| G | 3 | D | 28 | 30 |
| H | 4 | G, E, F | 31 | 34 |
| I | 2 | H | 35 | 36 |

> 💡 D espera a B (día 15) y C (día 9) → espera al mayor = B → D inicia día 16
> 💡 H espera a G (día 30), E (día 21) y F (día 20) → espera al mayor = G → H inicia día 31

**Holguras:**
- C: podría terminar hasta día 15 (cuando termina B), termina día 9 → holgura 6 días 🟢
- E: podría terminar hasta día 30 (cuando termina G), termina día 21 → holgura 9 días 🟢
- F: podría terminar hasta día 30 (cuando termina G), termina día 20 → holgura 10 días 🟢

**Ruta Crítica: A → B → D → G → H → I**
**Duración total: 36 días laborales**

**Respuesta pregunta 3 (reducir 3 días):** Hay que intervenir actividades de la **ruta crítica**. Se recomienda acortar B (Compra, 10 días, la más larga de la ruta crítica) o D (Tendido, 12 días, la más larga de todas).

**Respuesta pregunta 4 (solapar tareas):** Se puede solapar C con B (ambas dependen de A), o iniciar E mientras termina D.

---

## 6. Errores Comunes a Evitar

1. ❌ **Confundir días laborales y corridos:** Leer bien el enunciado
2. ❌ **Olvidar el "+1":** El inicio de una actividad es el día SIGUIENTE al término de su predecesora
3. ❌ **Ignorar el MAX cuando hay múltiples predecesoras:** La actividad espera a que todas terminen
4. ❌ **Marcar como crítica una actividad con holgura**
5. ❌ **Confundir la ruta crítica con la ruta más corta:** Es la MÁS LARGA en duración

---

## 🧠 Preguntas de Autoevaluación

1. ¿Qué diferencia hay entre días laborales y días corridos?
2. Si una actividad tiene predecesoras B (termina día 8) y C (termina día 11), ¿cuándo puede iniciar?
3. ¿Qué significa que una actividad tenga holgura de 0?
4. ¿En qué actividades conviene intervenir si el cliente pide reducir el plazo?
5. Una actividad con holgura de 5 días se retrasa 3 días, ¿afecta el proyecto? ¿Por qué?
6. ¿Cómo se marca la ruta crítica en una Carta Gantt?

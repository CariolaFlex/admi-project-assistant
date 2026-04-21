# M04 — Método del Camino Crítico (CPM)
**Basado en:** Clases N°4-5 + Separata N°2 · Docente Mónica Vigorena H.

---

## 1. ¿Qué es el CPM?

El **Método del Camino Crítico** (Critical Path Method) es una técnica de planificación de proyectos que permite:
- Determinar la **duración mínima** del proyecto
- Identificar la **ruta crítica** (secuencia de actividades que no puede retrasarse)
- Calcular la **holgura** de cada actividad (margen de tiempo disponible)

El CPM usa un **Diagrama de Flechas** donde:
- Los **nodos (círculos)** representan eventos (inicio o fin de actividades)
- Las **flechas** representan las actividades con su duración

---

## 2. Nomenclatura Fundamental

Para cada actividad se calculan 4 fechas, ubicadas en los extremos de la flecha:

```
        Nombre de Actividad (Duración)
    i ——[ES ————————————— EF]——> j
         LS                 LF
```

| Símbolo | Nombre | Definición |
|---------|--------|-----------|
| **ES** | Early Start (Inicio Temprano) | Primera fecha en que la actividad **puede comenzar** |
| **EF** | Early Finish (Término Temprano) | Primera fecha en que la actividad **puede terminar**. EF = ES + Duración |
| **LS** | Late Start (Inicio Tardío) | Última fecha posible para iniciar **sin retrasar** el proyecto |
| **LF** | Late Finish (Término Tardío) | Última fecha posible para terminar **sin retrasar** el proyecto |

### Fórmulas clave:
```
EF = ES + Duración          (hacia adelante)
LS = LF - Duración          (hacia atrás)
Holgura Total (HT) = LF - EF = LS - ES
```

---

## 3. Proceso de Cálculo en 4 Pasos

### PASO 1: Construir la red (diagrama de flechas)
- Cada actividad = una flecha
- Respetar las precedencias
- Usar **actividades ficticias** (duración 0) cuando dos caminos convergen en el mismo nodo

### PASO 2: Pasada hacia ADELANTE — Calcular ES y EF
- Empezar desde el nodo 1 (inicio), ES = 0
- `EF = ES + Duración`
- En nodos con múltiples llegadas: `ES del siguiente = MAX(EF de todas las que llegan)`

### PASO 3: Pasada hacia ATRÁS — Calcular LS y LF
- Empezar desde el último nodo, LF = EF del último nodo (duración total)
- `LS = LF - Duración`
- En nodos con múltiples salidas: `LF del anterior = MIN(LS de todas las que salen)`

### PASO 4: Calcular Holguras e identificar Ruta Crítica
- `HT = LF - EF` (o equivalentemente `LS - ES`)
- **Actividades con HT = 0 → forman la RUTA CRÍTICA**

---

## 4. Actividades Ficticias

Cuando dos actividades paralelas convergen en un mismo nodo, se usa una **actividad ficticia** (flecha punteada, duración = 0) para unirlas sin crear ambigüedad en la red.

```
     ——[A]——> nodo 3
    /          |
nodo1          | Ficticia (duración 0)
    \          ↓
     ——[B]——> nodo 4 ——> ...
```

---

## 5. Ejercicios Resueltos

---

### ⚙️ EJERCICIO 1: Instalación de Faenas (Ruta del Sol)

**Tabla:**

| Código | Actividad | Duración | Predecesoras |
|--------|-----------|----------|-------------|
| A | Instalación de cierres | 2 | — |
| B | Movimiento de tierras | 4 | A |
| C | Instalación de bodegas | 3 | A |
| D | Conexión de servicios | 2 | B, C |

**Se solicita:** 1) Diagrama de flechas con fechas. 2) Ruta crítica. 3) Holguras.

#### ✅ SOLUCIÓN:

**Red:** 
```
Nodo 1 —[A(2)]→ Nodo 2 —[B(4)]→ Nodo 3 —[D(2)]→ Nodo 5 (FIN)
                         —[C(3)]→ Nodo 4 —[Ficticia(0)]→ Nodo 3
```

**Pasada hacia adelante:**
- A: ES=0, EF=2
- B: ES=2, EF=6
- C: ES=2, EF=5
- En nodo 3 (convergencia B y C+Ficticia): max(EF_B=6, EF_C=5) = 6
- D: ES=6, EF=8

**Pasada hacia atrás (desde EF total = 8):**
- D: LF=8, LS=6
- Ficticia: LF=6, LS=6
- B: LF=6, LS=2
- C: LF=6, LS=3
- A: min(LS_B=2, LS_C=3) = 2 → LF=2, LS=0

**Tabla de holguras:**

| Actividad | Dur. | ES | EF | LS | LF | HT | Condición |
|-----------|------|----|----|----|----|----|-----------| 
| A | 2 | 0 | 2 | 0 | 2 | **0** | 🔴 Crítica |
| B | 4 | 2 | 6 | 2 | 6 | **0** | 🔴 Crítica |
| C | 3 | 2 | 5 | 3 | 6 | **1** | 🟢 No crítica |
| D | 2 | 6 | 8 | 6 | 8 | **0** | 🔴 Crítica |

**Ruta Crítica: A → B → D**
**Duración total: 8 días**

> 💡 C tiene 1 día de holgura: puede retrasarse máximo 1 día sin afectar la fecha de término del proyecto.

---

### 🏗️ EJERCICIO 2: Construcción de Radier (Proyecto Altamar II)

**Tabla:**

| Código | Actividad | Duración | Predecesoras |
|--------|-----------|----------|-------------|
| A | Trazado y niveles | 2 | — |
| B | Excavación | 6 | A |
| C | Adquisición de acero | 6 | — |
| D | Enfierradura | 3 | B, C |
| E | Instalaciones | 2 | B |
| F | Hormigonado | 4 | D, E |

> ⚠️ **Nota:** Aquí hay DOS actividades sin predecesoras (A y C), que son **caminos paralelos** desde el inicio.

**Se solicita:** 1) Diagrama con todos los cálculos. 2) Tabla de Holgura Total. 3) Si C se retrasa 2 días, ¿afecta al proyecto?

#### ✅ SOLUCIÓN:

**Red:**
```
Nodo 1 —[A(2)]→ Nodo 2 —[B(6)]→ Nodo 3 —[E(2)]→ Nodo 5 —[Ficticia]→ Nodo 6 —[F(4)]→ Nodo 7
         [C(6)] ——————→ Nodo 4 —[D(3)]→           Nodo 6
                                 ↑ (B y C convergen aquí vía Ficticia)
```

**Pasada hacia adelante:**
- A: ES=0, EF=2
- C: ES=0, EF=6
- B: ES=2, EF=8
- En nodo convergencia D (necesita B=8 y C=6): max=8
- D: ES=8, EF=11
- E: ES=8, EF=10
- En nodo convergencia F (necesita D=11 y E=10): max=11
- F: ES=11, EF=15

**Pasada hacia atrás (desde 15):**
- F: LF=15, LS=11
- D: LF=11, LS=8
- E: LF=11, LS=9
- B: LF=8, LS=2
- C: LF=8, LS=2
- A: LF=2, LS=0

**Tabla completa:**

| Actividad | Dur. | ES | EF | LS | LF | HT | Condición |
|-----------|------|----|----|----|----|----|-----------| 
| A | 2 | 0 | 2 | 0 | 2 | **0** | 🔴 Crítica |
| B | 6 | 2 | 8 | 2 | 8 | **0** | 🔴 Crítica |
| C | 6 | 0 | 6 | 2 | 8 | **2** | 🟢 No crítica |
| D | 3 | 8 | 11 | 8 | 11 | **0** | 🔴 Crítica |
| E | 2 | 8 | 10 | 9 | 11 | **1** | 🟢 No crítica |
| F | 4 | 11 | 15 | 11 | 15 | **0** | 🔴 Crítica |

**Ruta Crítica: A → B → D → F**
**Duración total: 15 días**

**Respuesta pregunta 3:** Si C se retrasa 2 días, **NO afecta la fecha de término** del proyecto. C tiene HT = 2 días, por lo que un retraso de exactamente 2 días agota su holgura pero no desplaza la ruta crítica ni la fecha final.

---

### 🏭 EJERCICIO 3: Montaje Industrial (CobreAndes)

**Tabla:**

| Código | Actividad | Duración | Predecesoras |
|--------|-----------|----------|-------------|
| A | Ingeniería | 4 | — |
| B | Fabricación | 10 | A |
| C | Terreno | 7 | A |
| D | Transporte | 3 | B |
| E | Soportes | 5 | C, D |
| F | Control | 8 | D |
| G | Pruebas | 4 | E |
| H | Puesta en marcha | 2 | G, F |

**Se solicita:** 1) Diagrama con fechas. 2) Ruta crítica y duración. 3) Si el cliente exige terminar 3 días antes, ¿qué actividad reducirías?

#### ✅ SOLUCIÓN:

**Pasada hacia adelante:**
- A: ES=0, EF=4
- B: ES=4, EF=14
- C: ES=4, EF=11
- D: ES=14, EF=17
- E (espera D=17 y C+Ficticia→nodo con D=17): ES=17, EF=22
- F: ES=17, EF=25
- G: ES=22, EF=26
- H (espera G=26 y F=25): max=26 → ES=26, EF=28

**Pasada hacia atrás (desde 28):**
- H: LF=28, LS=26
- G: LF=26, LS=22
- F: LF=26, LS=18
- E: LF=22, LS=17
- D: min(LS_E=17, LS_F=18) = 17 → LF=17, LS=14
- C: LF=17, LS=10
- B: LF=14, LS=4
- A: min(LS_B=4, LS_C=10) = 4 → LF=4, LS=0

**Tabla de holguras:**

| Actividad | Dur. | ES | EF | LS | LF | HT | Condición |
|-----------|------|----|----|----|----|----|-----------| 
| A | 4 | 0 | 4 | 0 | 4 | **0** | 🔴 Crítica |
| B | 10 | 4 | 14 | 4 | 14 | **0** | 🔴 Crítica |
| C | 7 | 4 | 11 | 10 | 17 | **6** | 🟢 No crítica |
| D | 3 | 14 | 17 | 14 | 17 | **0** | 🔴 Crítica |
| E | 5 | 17 | 22 | 17 | 22 | **0** | 🔴 Crítica |
| F | 8 | 17 | 25 | 18 | 26 | **1** | 🟢 No crítica |
| G | 4 | 22 | 26 | 22 | 26 | **0** | 🔴 Crítica |
| H | 2 | 26 | 28 | 26 | 28 | **0** | 🔴 Crítica |

**Ruta Crítica: A → B → D → E → G → H** *(+Ficticia entre C/D y E)*
**Duración total: 28 días**

**Respuesta pregunta 3 — Reducir 3 días:**
Para reducir el plazo, se debe intervenir una actividad de la **ruta crítica**.
- **B (Fabricación, 10 días)** es la más extensa de la ruta crítica → se recomienda reducirla (dobles turnos, más proveedores)
- **Criterio de exclusión:** No tiene sentido acortar C (Terreno) o F (Control) porque tienen holgura. Acelerarlos no mueve la fecha final y solo genera sobrecosto innecesario.

---

## 6. Actividades Ficticias — Regla de Uso

Se usan cuando:
1. Dos actividades paralelas tienen la misma predecesora Y comparten el mismo nodo destino
2. Para representar dependencias sin agregar duración

Características:
- Se dibujan con **flecha punteada** (- - →)
- **Duración = 0**
- Pueden ser críticas (HT=0) o no críticas

---

## 7. Errores Comunes

1. ❌ **Olvidar el MAX en la pasada hacia adelante** (cuando múltiples flechas llegan a un nodo)
2. ❌ **Olvidar el MIN en la pasada hacia atrás** (cuando múltiples flechas salen de un nodo)
3. ❌ **No usar actividades ficticias** cuando dos caminos convergen
4. ❌ **Intentar reducir actividades fuera de la ruta crítica** para acortar el proyecto
5. ❌ **Confundir ES con LS** (ES = lo más temprano posible; LS = lo más tarde permitido)

---

## 8. Comparación CPM vs Carta Gantt

| Característica | Carta Gantt | CPM (Diagrama de Flechas) |
|---------------|-------------|--------------------------|
| Representación | Barras en eje tiempo | Red de nodos y flechas |
| Calcula holgura | Visualmente (verde/rojo) | Numéricamente (HT = LF - EF) |
| Complejidad | Simple, visual | Más técnico, preciso |
| Uso | Comunicación y seguimiento | Análisis y optimización |
| Muestra dependencias | Sí (flechas entre barras) | Sí (estructura de red) |

---

## 🧠 Preguntas de Autoevaluación

1. ¿Qué significa ES, EF, LS y LF?
2. ¿Cómo se calcula la Holgura Total?
3. Si HT = 0, ¿qué implica para la actividad?
4. ¿En qué dirección se calculan ES y EF? ¿Y LS y LF?
5. Si múltiples flechas llegan a un nodo en la pasada hacia adelante, ¿qué operación aplico?
6. Si múltiples flechas salen de un nodo en la pasada hacia atrás, ¿qué operación aplico?
7. ¿Para qué sirve una actividad ficticia?
8. Si el cliente pide reducir 2 días el proyecto, ¿en qué actividades debes intervenir?
9. Una actividad tiene HT = 3. Si se retrasa 3 días, ¿cuánto cambia la fecha de término?
10. Una actividad tiene HT = 3. Si se retrasa 4 días, ¿cuánto cambia la fecha de término?

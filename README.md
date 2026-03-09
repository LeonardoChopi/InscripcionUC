# Sistema de Inscripción a Unidades Curriculares — Udelar

Sistema web de inscripción a materias universitarias inspirado en el sistema de la Universidad de la República (UdelaR). Permite cargar un array de materias, inscribirse a grupos, detectar conflictos de horario y persistir las inscripciones en el dispositivo del usuario.

---

## Archivos del proyecto

```
├── inscripcion_udelar.html   # Aplicación principal (HTML + CSS + JS en un solo archivo)
├── aviso-privacidad.js       # Módulo independiente para el aviso de almacenamiento local
└── README.md                 # Este archivo
```

---

## Funcionalidades

### Gestión de materias
- Carga dinámica de materias desde un array JavaScript
- Agrupación automática de clases del mismo grupo (mismo nombre + tipo + grupo) en una sola fila de la tabla
- Distinción visual entre clases **Teóricas** (morado) y **Prácticas** (verde azulado)
- Soporte para múltiples clases semanales por grupo (por ejemplo, martes y jueves)

### Inscripción
- Inscripción a grupos con un solo clic
- Desinscripción desde el panel lateral con el botón ✕
- Bloqueo de inscripciones duplicadas: si ya estás en un grupo de una materia, los demás grupos de la misma materia y tipo quedan deshabilitados
- Detección de conflictos de horario: si dos clases se superponen en el mismo día, la segunda queda bloqueada con indicación del conflicto

### Búsqueda y filtros
- **Barra de búsqueda** en tiempo real por nombre de materia
- **Filtro por día**: Lunes, Martes, Miércoles, Jueves, Viernes
- **Filtro por franja horaria**: Mañana (antes de las 12:00), Tarde (12:00–18:00), Noche (18:00+)
- **Filtro por tipo**: Teórico / Práctico
- **Filtro por estado**: Todos / Solo disponibles / Solo inscritas
- Botón para limpiar todos los filtros a la vez

### Panel lateral
- Sección **"Materias Inscritas"** con detalle de grupo, tipo, salón y horario
- **Vista de horario semanal** que aparece automáticamente al inscribirse en al menos una materia, organizada por día y con colores según el tipo

### Carga de arrays personalizados
- Botón **"Cargar array de UIs"** en el encabezado (esquina superior derecha)
- Modal con editor de código oscuro para pegar el array JavaScript
- Validación en tiempo real: detecta errores de sintaxis, campos faltantes y arrays vacíos
- Vista previa con chips de materias y tipos detectados antes de aplicar
- Acepta tanto el formato `const materias = [...]` como directamente `[...]`
- Al aplicar, reemplaza los datos actuales y limpia las inscripciones previas

### Persistencia local
- Las **materias inscritas** se guardan en `localStorage` (clave `udelar_v3`)
- El **array de materias personalizado** se guarda en `localStorage` (clave `udelar_v3_materias`)
- Al recargar la página, ambos se restauran automáticamente
- Un toast informa qué datos fueron recuperados al iniciar

---

## Formato del array de materias

Cada objeto del array debe tener los siguientes campos:

| Campo    | Tipo     | Descripción                                      | Ejemplo              |
|----------|----------|--------------------------------------------------|----------------------|
| `id`     | `number` | Identificador único numérico                     | `1`                  |
| `nombre` | `string` | Nombre de la materia                             | `"Fisica 1"`         |
| `tipo`   | `string` | `"Teorico"` o `"Practico"`                       | `"Practico"`         |
| `grupo`  | `string` | Nombre del grupo                                 | `"Grupo 1"`          |
| `salon`  | `string` | Nombre o código del salón                        | `"305 - 3er Piso"`   |
| `dia`    | `string` | Día de la semana (sin tildes en el valor)        | `"Miercoles"`        |
| `inicio` | `string` | Hora de inicio en formato `HH:MM`                | `"10:00"`            |
| `fin`    | `string` | Hora de fin en formato `HH:MM`                   | `"11:30"`            |

> **Nota sobre días:** usar los valores sin tilde en el campo `dia`: `Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`. La interfaz los muestra con tilde automáticamente.

### Ejemplo mínimo

```javascript
const materias = [
  { id: 1, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 1", salon: "305 - 3er Piso", dia: "Miercoles", inicio: "10:00", fin: "11:30" },
  { id: 2, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 1", salon: "305 - 3er Piso", dia: "Viernes",   inicio: "10:00", fin: "11:30" },
  { id: 3, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 1", salon: "307 - 3er Piso", dia: "Miercoles", inicio: "11:30", fin: "13:00" },
  { id: 4, nombre: "Calculo 1", tipo: "Teorico", grupo: "Grupo 2", salon: "Actos",           dia: "Martes",    inicio: "08:00", fin: "09:30" },
];
```

Un grupo con clases en múltiples días se representa con **un objeto por clase**. El sistema agrupa automáticamente todos los objetos que compartan `nombre`, `tipo` y `grupo` en una sola fila de la tabla.

---

## Módulo `aviso-privacidad.js`

Archivo JavaScript independiente que muestra un aviso informativo sobre el uso de `localStorage` cada vez que el usuario abre la página.

### Uso

Agregar la siguiente línea antes del cierre de `</body>` en el HTML:

```html
<script src="aviso-privacidad.js"></script>
```

### Comportamiento

- Muestra un modal en la parte inferior de la pantalla al cargar la página
- Informa que los datos se almacenan localmente en el dispositivo y no se envían a servidores externos
- Incluye una advertencia para no ingresar datos sensibles (contraseñas, documentos de identidad, datos bancarios, etc.)
- Checkbox **"No volver a mostrar este aviso"**: si el usuario lo activa, guarda la preferencia en `localStorage` y el aviso deja de aparecer en visitas futuras
- Se cierra con el botón "Entendido" o con la tecla `Escape`
- No requiere dependencias externas

---

## Almacenamiento local (localStorage)

| Clave                  | Contenido                                                  |
|------------------------|------------------------------------------------------------|
| `udelar_v3`            | Array de IDs de las materias actualmente inscritas         |
| `udelar_v3_materias`   | Array completo de materias cargado mediante el modal       |
| `aviso_privacidad_aceptado` | `"1"` si el usuario eligió no volver a ver el aviso  |

> Los datos se almacenan únicamente en el navegador del usuario. Ninguna información se transmite a servidores externos.

---

## Tecnologías utilizadas

- **HTML5** — estructura de la interfaz
- **CSS3** — estilos, animaciones y diseño responsivo con CSS variables
- **JavaScript (ES6+)** — lógica de la aplicación, sin frameworks ni dependencias externas
- **localStorage** — persistencia de datos en el dispositivo
- **Google Fonts** — tipografías IBM Plex Sans e IBM Plex Mono

---

## Compatibilidad

Funciona en cualquier navegador moderno con soporte para ES6 y localStorage:

- Google Chrome 60+
- Mozilla Firefox 55+
- Safari 11+
- Microsoft Edge 79+

---

## Estructura interna del código (`inscripcion_udelar.html`)

```
DATA          → Array de materias (fuente de datos inicial)
CONSTANTS     → Claves de localStorage, orden de días, franjas horarias
STATE         → Variables reactivas: enrolled, filters, searchQuery
PERSISTENCE   → saveToStorage / saveMaterias / loadFromStorage / loadMaterias
UTILS         → timeToMin, getFranja, hasTimeConflict, isEnrolled, isDuplicateMateria
ACTIONS       → inscribir(id), desinscribir(id)
GROUP ROWS    → buildGroupRows() — colapsa clases del mismo grupo en una fila
FILTER        → getVisibleRows() — aplica búsqueda + todos los filtros activos
RENDER        → renderFilters / renderTable / renderEnrolled / renderSchedule / renderStats
TOAST         → showToast(msg, type)
MODAL         → openModal / closeModal / parseArrayInput / applyArray
INIT          → Carga datos desde localStorage y renderiza
```

---

## Licencia

Proyecto de uso educativo. Sin licencia comercial asignada.
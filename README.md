# Sistema de Inscripción a Unidades Curriculares — Udelar

Aplicación web estática para explorar horarios de materias y armar tu inscripción sin conflictos. Funciona completamente en el navegador, sin servidor ni base de datos.

Repositorio GitHub del proyecto: https://github.com/LeonardoChopi/InscripcionUC 

---

## Archivos del proyecto

```
├── index.html          → Página principal (inscripción, ejemplos, guía)
├── cargar.html         → Editor para importar un array personalizado
├── materias.js         → Arrays de ejemplo pre-cargados
└── aviso-privacidad.js → Módulo de aviso de uso de localStorage
```

Todos los archivos deben estar en la **misma carpeta**. No se requiere ningún servidor — abrí `index.html` directamente en el navegador.

---

## Páginas

### `index.html` — Sistema de inscripción

La página principal tiene tres pestañas:

**Inscripción**
- Tabla de grupos con detección automática de conflictos de horario
- Bloqueo de inscripción duplicada por materia y tipo
- Filtros por día, franja horaria (mañana / tarde / noche), tipo (Teórico / Práctico) y vista (todos / disponibles / inscriptas)
- Búsqueda en tiempo real por nombre de materia
- Sidebar con lista de materias inscriptas y vista de horario semanal
- Persistencia automática en `localStorage`

**Ejemplos de materias**
- Cards con los conjuntos de horarios disponibles en `materias.js`
- Botón por materia para **ocultar o mostrar** sus grupos en la tabla principal
- Botones globales "Mostrar todo" / "Ocultar todo"
- Barra de estado que indica cuántas materias están visibles
- Si existe un array cargado manualmente con materias que no están en los ejemplos, aparece una card adicional con sus propios controles de visibilidad
- El estado de visibilidad persiste entre sesiones

**Cómo generar mi array**
- Instrucciones paso a paso para usar IA (Claude / ChatGPT) y convertir una imagen de cronograma en un array JS
- Prompt listo para copiar
- Espacio para colocar una imagen de referencia
- Ejemplo de formato de salida esperado

---

### `cargar.html` — Importar array

Editor independiente para cargar un array de materias personalizado:

- Textarea con sintaxis oscura para pegar el array
- Validación en tiempo real con feedback visual (verde / rojo)
- Preview de materias y tipos detectados
- Al guardar, escribe en `localStorage` y limpia inscripciones previas
- Banner de confirmación con botón para volver al sistema

---

## Formato del array de materias

Cada objeto representa **una clase en un día específico**. Si un grupo tiene clases en varios días, se necesita un objeto por cada día.

```js
const materias = [
  {
    id: 1,               // Número único autoincremental
    nombre: "Fisica 1",  // Nombre de la asignatura
    tipo: "Practico",    // "Teorico" o "Practico"
    grupo: "Grupo 1",    // Identificador del grupo
    salon: "305 - 3er Piso", // Salón o "Virtual"
    dia: "Miercoles",    // Lunes | Martes | Miercoles | Jueves | Viernes
    inicio: "10:00",     // Hora de inicio HH:MM
    fin: "11:30"         // Hora de fin HH:MM
  },
  {
    id: 2,
    nombre: "Fisica 1",
    tipo: "Practico",
    grupo: "Grupo 1",    // Mismo grupo, segundo día de la semana
    salon: "305 - 3er Piso",
    dia: "Viernes",
    inicio: "10:00",
    fin: "11:30"
  },
];
```

El sistema agrupa automáticamente los registros del mismo `nombre + tipo + grupo` en una sola fila de la tabla.

---

## Agregar ejemplos pre-cargados

Editá `materias.js` y agregá una entrada al array `EJEMPLOS_MATERIAS`:

```js
{
  id: 'mi-materia',               // Identificador único (sin espacios)
  nombre: 'Cálculo 1',            // Nombre que aparece en la card
  descripcion: 'Descripción breve del contenido.',
  color: '#1a3a5c',               // Color del punto decorativo (hex)
  datos: [
    { id: 1, nombre: "Calculo 1", tipo: "Teorico", grupo: "Grupo 1",
      salon: "301 - 3er Piso", dia: "Lunes", inicio: "08:00", fin: "09:30" },
    // ...
  ]
}
```

---

## Generar un array con IA

Si tenés una imagen de tu cronograma, podés usar Claude o ChatGPT con el siguiente prompt:

```
Extrae datos de un cronograma de clases y conviértelos en un array JS llamado materias.

Estructura de cada objeto:
{ id, nombre, tipo, grupo, salon, dia, inicio, fin }

Reglas:
- Un objeto por cada día con horario.
- id autoincremental.
- nombre: asignatura de la tabla.
- tipo: "Teorico" o "Practico".
- grupo: nombre del grupo.
- salon: "AULA - PISO" o "VIRTUAL".
- dia: Lunes | Martes | Miercoles | Jueves | Viernes.
- inicio y fin en formato HH:MM.

Devuelve SOLO:
const materias = [ ... ];

Imagen a procesar: [ADJUNTAR IMAGEN DE LOS HORARIOS]
```

Luego pegá el resultado en `cargar.html`.

---

## Almacenamiento local

Todos los datos se guardan en `localStorage` del navegador bajo estas claves:

| Clave | Contenido |
|---|---|
| `udelar_v3` | IDs de las inscripciones activas |
| `udelar_v3_materias` | Array de materias completo |
| `udelar_hidden` | Nombres de materias ocultas |
| `aviso_privacidad_aceptado` | Preferencia del aviso de privacidad |

Los datos **no se envían a ningún servidor**. Limpiar el `localStorage` del navegador restablece todo.

---

## Agregar imagen de referencia

En `index.html`, buscá el div con `id="imgPlaceholder"` dentro de la pestaña "Cómo generar mi array" y reemplazalo con tu imagen:

```html
<!-- Reemplazar esto: -->
<div class="image-placeholder" id="imgPlaceholder"> ... </div>

<!-- Por esto: -->
<img src="mi-horario.png" style="width:100%;border-radius:4px;border:1px solid var(--border)">
```

---

## Dependencias externas

- [IBM Plex Sans + IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Sans) — cargadas desde Google Fonts
- Sin frameworks, sin npm, sin build step

---

## Compatibilidad

Funciona en cualquier navegador moderno con soporte de `localStorage` y ES6. No requiere conexión a internet una vez descargado (excepto para cargar las fuentes de Google Fonts).

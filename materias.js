/**
 * materias.js
 * Arrays de ejemplo pre-cargados, organizados por materia.
 * Cada entrada en EJEMPLOS_MATERIAS representa un conjunto de horarios
 * que se puede cargar directamente en el sistema de inscripción.
 */

const EJEMPLOS_MATERIAS = [

  {
    id: 'fisica1',
    nombre: 'Física 1',
    descripcion: 'Mecánica clásica, termodinámica e introducción a ondas.',
    color: '#0f4c51',
    datos: [
      { id: 1,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 1", salon: "305 - 3er Piso",   dia: "Miercoles", inicio: "10:00", fin: "11:30" },
      { id: 2,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 1", salon: "305 - 3er Piso",   dia: "Viernes",   inicio: "10:00", fin: "11:30" },
      { id: 3,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 2", salon: "312 - 3er Piso",   dia: "Miercoles", inicio: "11:30", fin: "13:00" },
      { id: 4,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 2", salon: "301 - 3er Piso",   dia: "Viernes",   inicio: "11:30", fin: "13:00" },
      { id: 5,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 3", salon: "B11 - 1er Piso",   dia: "Martes",    inicio: "10:00", fin: "11:30" },
      { id: 6,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 3", salon: "B11 - 1er Piso",   dia: "Jueves",    inicio: "10:00", fin: "11:30" },
      { id: 7,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 4", salon: "312 - 3er Piso",   dia: "Martes",    inicio: "10:00", fin: "11:30" },
      { id: 8,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 4", salon: "312 - 3er Piso",   dia: "Jueves",    inicio: "10:00", fin: "11:30" },
      { id: 9,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 5", salon: "102 - 1er Piso",   dia: "Miercoles", inicio: "16:00", fin: "17:30" },
      { id: 10, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 5", salon: "102 - 1er Piso",   dia: "Viernes",   inicio: "16:00", fin: "17:30" },
      { id: 11, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 6", salon: "501 - 5to Piso",   dia: "Martes",    inicio: "13:00", fin: "14:30" },
      { id: 12, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 6", salon: "501 - 5to Piso",   dia: "Jueves",    inicio: "13:00", fin: "14:30" },
      { id: 13, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 7", salon: "A12 - 1er Piso",   dia: "Martes",    inicio: "16:00", fin: "17:30" },
      { id: 14, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 7", salon: "B11 - 1er Piso",   dia: "Jueves",    inicio: "16:00", fin: "17:30" },
      { id: 15, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 8", salon: "Virtual 02",       dia: "Martes",    inicio: "19:30", fin: "21:00" },
      { id: 16, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 8", salon: "Virtual 01",       dia: "Viernes",   inicio: "19:30", fin: "21:00" },
      { id: 17, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 9", salon: "102 - 1er Piso",   dia: "Miercoles", inicio: "10:00", fin: "11:30" },
      { id: 18, nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 9", salon: "102 - 1er Piso",   dia: "Viernes",   inicio: "10:00", fin: "11:30" },
      { id: 19, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 1", salon: "307 - 3er Piso",   dia: "Miercoles", inicio: "11:30", fin: "13:00" },
      { id: 20, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 1", salon: "307 - 3er Piso",   dia: "Viernes",   inicio: "11:30", fin: "13:00" },
      { id: 21, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 2", salon: "Actos - 1er Piso", dia: "Martes",    inicio: "08:00", fin: "09:30" },
      { id: 22, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 2", salon: "Actos - 1er Piso", dia: "Jueves",    inicio: "08:00", fin: "09:30" },
      { id: 23, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 3", salon: "303 - 3er Piso",   dia: "Lunes",     inicio: "16:00", fin: "17:30" },
      { id: 24, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 3", salon: "303 - 3er Piso",   dia: "Miercoles", inicio: "16:00", fin: "17:30" },
    ]
  },

  {
    id: 'matematica-inicial',
    nombre: 'Matemática Inicial',
    descripcion: 'Fundamentos de álgebra, funciones y cálculo introductorio.',
    color: '#4a1a6b',
    datos: [
      { id: 1,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 1", salon: "C22 - 2do Piso", dia: "Lunes",     inicio: "08:00", fin: "09:30" },
      { id: 2,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 1", salon: "C22 - 2do Piso", dia: "Miercoles", inicio: "08:00", fin: "11:00" },
      { id: 3,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 1", salon: "C22 - 2do Piso", dia: "Viernes",   inicio: "08:00", fin: "09:30" },
      { id: 4,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 2", salon: "B23 - 2do Piso", dia: "Lunes",     inicio: "09:30", fin: "11:00" },
      { id: 5,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 2", salon: "A12 - 1er Piso", dia: "Miercoles", inicio: "09:30", fin: "11:00" },
      { id: 6,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 2", salon: "B23 - 2do Piso", dia: "Viernes",   inicio: "09:30", fin: "12:30" },
      { id: 7,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 3", salon: "A21 - 2do Piso", dia: "Martes",    inicio: "09:30", fin: "11:00" },
      { id: 8,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 3", salon: "A21 - 2do Piso", dia: "Jueves",    inicio: "09:30", fin: "11:00" },
      { id: 9,  nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 3", salon: "A21 - 2do Piso", dia: "Viernes",   inicio: "08:00", fin: "11:00" },
      { id: 10, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 4", salon: "A12 - 1er Piso", dia: "Lunes",     inicio: "13:00", fin: "14:30" },
      { id: 11, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 4", salon: "A12 - 1er Piso", dia: "Miercoles", inicio: "13:00", fin: "14:30" },
      { id: 12, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 4", salon: "B11 - 1er Piso", dia: "Viernes",   inicio: "13:00", fin: "16:00" },
      { id: 13, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 5", salon: "A21 - 2do Piso", dia: "Lunes",     inicio: "14:30", fin: "16:00" },
      { id: 14, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 5", salon: "C22 - 2do Piso", dia: "Miercoles", inicio: "14:30", fin: "16:00" },
      { id: 15, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 5", salon: "A21 - 2do Piso", dia: "Viernes",   inicio: "14:30", fin: "17:30" },
      { id: 16, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 6", salon: "A12 - 1er Piso", dia: "Martes",    inicio: "14:30", fin: "16:00" },
      { id: 17, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 6", salon: "A12 - 1er Piso", dia: "Jueves",    inicio: "14:30", fin: "16:00" },
      { id: 18, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 6", salon: "A12 - 1er Piso", dia: "Viernes",   inicio: "13:00", fin: "16:00" },
      { id: 19, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 7", salon: "303 - 3er Piso", dia: "Lunes",     inicio: "18:00", fin: "19:30" },
      { id: 20, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 7", salon: "312 - 3er Piso", dia: "Miercoles", inicio: "18:00", fin: "21:00" },
      { id: 21, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 7", salon: "312 - 3er Piso", dia: "Viernes",   inicio: "18:00", fin: "19:30" },
      { id: 22, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 8", salon: "Virtual 06",     dia: "Martes",    inicio: "19:30", fin: "21:00" },
      { id: 23, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 8", salon: "Virtual 06",     dia: "Jueves",    inicio: "19:30", fin: "21:00" },
      { id: 24, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 8", salon: "Virtual 04",     dia: "Viernes",   inicio: "18:00", fin: "21:00" },
    ]
  },

  {
    id: 'intro-computacion',
    nombre: 'Int. a la Computación',
    descripcion: 'Fundamentos de programación, algoritmos y estructuras de datos.',
    color: '#1a3a5c',
    datos: [
      { id: 1,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 1",  salon: "303 - 3er Piso",   dia: "Lunes",    inicio: "09:30", fin: "12:30" },
      { id: 2,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 2",  salon: "115 - Bandejas N.", dia: "Lunes",    inicio: "09:30", fin: "12:30" },
      { id: 3,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 3",  salon: "303 - 3er Piso",   dia: "Lunes",    inicio: "13:00", fin: "16:00" },
      { id: 4,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 4",  salon: "Actos - 1er Piso", dia: "Lunes",    inicio: "17:30", fin: "20:30" },
      { id: 5,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 12", salon: "Actos - 1er Piso", dia: "Lunes",    inicio: "17:30", fin: "20:30" },
      { id: 6,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 5",  salon: "305 - 3er Piso",   dia: "Martes",   inicio: "09:30", fin: "12:30" },
      { id: 7,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 6",  salon: "312 - 3er Piso",   dia: "Martes",   inicio: "14:30", fin: "17:30" },
      { id: 8,  nombre: "Int. a la Computacion", tipo: "Teorico",  grupo: "Grupo 1",  salon: "Actos - 1er Piso", dia: "Martes",   inicio: "17:30", fin: "19:00" },
      { id: 9,  nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 7",  salon: "Actos - 1er Piso", dia: "Miercoles",inicio: "09:30", fin: "12:30" },
      { id: 10, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 8",  salon: "305 - 3er Piso",   dia: "Jueves",   inicio: "09:30", fin: "12:30" },
      { id: 11, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 9",  salon: "312 - 3er Piso",   dia: "Jueves",   inicio: "13:00", fin: "16:00" },
      { id: 12, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 10", salon: "Actos - 1er Piso", dia: "Jueves",   inicio: "14:30", fin: "17:30" },
      { id: 13, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 11", salon: "312 - 3er Piso",   dia: "Jueves",   inicio: "17:30", fin: "20:30" },
    ]
  },

  {
    id: 'todas',
    nombre: 'Todas las materias (combinado)',
    descripcion: 'Física 1 + Matemática Inicial + Int. a la Computación juntas.',
    color: '#1d5c3a',
    datos: [
      { id: 1,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 1", salon: "305 - 3er Piso",   dia: "Miercoles", inicio: "10:00", fin: "11:30" },
      { id: 2,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 1", salon: "305 - 3er Piso",   dia: "Viernes",   inicio: "10:00", fin: "11:30" },
      { id: 3,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 2", salon: "312 - 3er Piso",   dia: "Miercoles", inicio: "11:30", fin: "13:00" },
      { id: 4,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 2", salon: "301 - 3er Piso",   dia: "Viernes",   inicio: "11:30", fin: "13:00" },
      { id: 5,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 3", salon: "B11 - 1er Piso",   dia: "Martes",    inicio: "10:00", fin: "11:30" },
      { id: 6,  nombre: "Fisica 1", tipo: "Practico", grupo: "Grupo 3", salon: "B11 - 1er Piso",   dia: "Jueves",    inicio: "10:00", fin: "11:30" },
      { id: 7,  nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 1", salon: "307 - 3er Piso",   dia: "Miercoles", inicio: "11:30", fin: "13:00" },
      { id: 8,  nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 1", salon: "307 - 3er Piso",   dia: "Viernes",   inicio: "11:30", fin: "13:00" },
      { id: 9,  nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 2", salon: "Actos - 1er Piso", dia: "Martes",    inicio: "08:00", fin: "09:30" },
      { id: 10, nombre: "Fisica 1", tipo: "Teorico",  grupo: "Grupo 2", salon: "Actos - 1er Piso", dia: "Jueves",    inicio: "08:00", fin: "09:30" },
      { id: 11, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 1", salon: "C22 - 2do Piso", dia: "Lunes",     inicio: "08:00", fin: "09:30" },
      { id: 12, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 1", salon: "C22 - 2do Piso", dia: "Miercoles", inicio: "08:00", fin: "11:00" },
      { id: 13, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 1", salon: "C22 - 2do Piso", dia: "Viernes",   inicio: "08:00", fin: "09:30" },
      { id: 14, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 2", salon: "B23 - 2do Piso", dia: "Lunes",     inicio: "09:30", fin: "11:00" },
      { id: 15, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 2", salon: "A12 - 1er Piso", dia: "Miercoles", inicio: "09:30", fin: "11:00" },
      { id: 16, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 2", salon: "B23 - 2do Piso", dia: "Viernes",   inicio: "09:30", fin: "12:30" },
      { id: 17, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 3", salon: "A21 - 2do Piso", dia: "Martes",    inicio: "09:30", fin: "11:00" },
      { id: 18, nombre: "Matematica Inicial", tipo: "Teorico", grupo: "Grupo 3", salon: "A21 - 2do Piso", dia: "Jueves",    inicio: "09:30", fin: "11:00" },
      { id: 19, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 1",  salon: "303 - 3er Piso",   dia: "Lunes",    inicio: "09:30", fin: "12:30" },
      { id: 20, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 2",  salon: "115 - Bandejas N.", dia: "Lunes",    inicio: "09:30", fin: "12:30" },
      { id: 21, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 3",  salon: "303 - 3er Piso",   dia: "Lunes",    inicio: "13:00", fin: "16:00" },
      { id: 22, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 5",  salon: "305 - 3er Piso",   dia: "Martes",   inicio: "09:30", fin: "12:30" },
      { id: 23, nombre: "Int. a la Computacion", tipo: "Teorico",  grupo: "Grupo 1",  salon: "Actos - 1er Piso", dia: "Martes",   inicio: "17:30", fin: "19:00" },
      { id: 24, nombre: "Int. a la Computacion", tipo: "Practico", grupo: "Grupo 8",  salon: "305 - 3er Piso",   dia: "Jueves",   inicio: "09:30", fin: "12:30" },
    ]
  },

];

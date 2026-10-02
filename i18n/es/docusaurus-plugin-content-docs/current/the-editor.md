---
title: El editor
description: La página en la que escribes, la barra de herramientas de selección, el menú de barra y el menú ⋮ del documento.
---

# El editor

La página es donde escribes, y φ la mantiene en silencio: un título, tus
palabras y unos pocos controles que solo aparecen cuando los buscas. Todo lo
demás sobre un documento espera en sus menús y en su panel de Información hasta
que lo necesites.

<img src="/img/app/editor-light.png" alt="Un capítulo abierto en la página, con los capítulos del proyecto en la lista de al lado y los botones de la página arriba a la derecha" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="Un capítulo abierto en la página, con los capítulos del proyecto en la lista de al lado y los botones de la página arriba a la derecha" width="1600" height="1000" loading="lazy" decoding="async" />

## Escribe algo {#write-something}

1. Pulsa `⌘N` para un documento nuevo, o elige uno en la lista.
2. Escribe un título arriba. Es el nombre del documento en todas partes: en la
   lista, en la búsqueda y en los enlaces.
3. Escribe debajo. φ guarda sobre la marcha.
4. Escribe `/` en una línea vacía para un encabezado, una lista, una cita o
   cualquier otro bloque.
5. Selecciona palabras para ver la barra de herramientas: negrita, cursiva, un
   enlace, un resaltado, un comentario.

## Los botones sobre la página {#the-buttons-above-the-page}

Arriba a la derecha de la página hay unos pocos botones:

| Botón | Qué hace |
| --- | --- |
| **Vista dividida** (`⌘\`) | Abre un segundo panel junto a la página. Consulta [Lado a lado](./side-by-side). |
| **⋮** | El menú del documento, más abajo. |
| **Detalles…** (ⓘ) | El estado del documento, su sinopsis, su meta de palabras, sus etiquetas, su color, su estrella y dónde vive. |
| **Información** (`⌘⇧I`) | El panel de Información: **Esquema**, **Enlaces**, **Notas**, **Tareas** e **Historial**. |
| **Santuario** (`⌘.`) | Todo desaparece salvo la página. Consulta [Concentración y Santuario](./focus-and-writing-modes). |

El recuento de palabras está en la esquina inferior derecha de la página, junto
a la meta cuando el documento tiene una. Haz clic en él para abrir el
**Esquema** del panel de Información, con las palabras y el tiempo de lectura;
vuelve a hacer clic para ver las estadísticas completas del documento. Las notas
no muestran recuento, porque una nota no se escribe hacia una extensión.

## Guardar {#saving}

Nunca tienes que guardar. φ guarda un momento después de que dejas de escribir.
Cada guardado se escribe en un archivo temporal, se vuelve a leer para
comprobarlo y solo entonces se pone en su lugar, así que un cierre inesperado o
un disco lleno no pueden dejar un documento a medio escribir.

`⌘S` guarda al instante y además registra una versión a la que puedes volver.
Para ponerle nombre a una versión, usa **Guardar versión…** (`⌘⇧S`). Consulta
[Versiones y copias de seguridad](./versions-and-backup).

## Dar formato a una selección {#format-a-selection}

Selecciona un texto y una pequeña barra de herramientas flota sobre él:

- **Negrita** (`⌘B`), **Cursiva** (`⌘I`) y **Subrayado** (`⌘U`).
- **Encabezado**: convierte la línea en un encabezado, o de nuevo en texto.
- **Enlace**: pide una dirección web.
- **Resaltar y comentar** (la muestra de color): un color, un **Color
  personalizado** o **Quitar resaltado**.
- **Comentar (sin resaltado)**: un comentario sobre las palabras sin
  colorearlas.

**Más herramientas** (› al final) abre el resto: **Tachado**, **Código en
línea**, **Alinear a la izquierda**, **Centrar**, **Alinear a la derecha**,
**Justificar**, **Buscar palabra** (el [diccionario](./dictionary)) y **Guardar
selección como plantilla…**.

Los resaltados y los comentarios se guardan como
[anotaciones](./annotations). `Esc` cierra la barra de herramientas. No aparece
en el modo lectura ni en las páginas matinales.

## Insertar un bloque {#insert-a-block}

Escribe `/` y una palabra para acotar el menú, y pulsa `Enter`. Un espacio
cierra el menú, así que escribe una sola palabra: `/heading`, `/quote`,
`/table`, `/image`, `/date`, `/scene`, `/verse`, `/footnote`. Tus propias
[plantillas](./templates) también están en el menú, por su nombre.

También puedes apuntar al borde izquierdo de una línea y hacer clic en el **+**
que aparece (**Insertar bloque debajo (/)**).

El menú ofrece lo que encaja donde estás:

| Dónde | Qué ofrece el menú |
| --- | --- |
| **Un capítulo, poema o ensayo de un proyecto** | Todo, incluidos **Verso**, **Salto de escena**, **Epígrafe**, **Cita destacada**, **Capitular**, **Nota al pie**, **Cita bibliográfica**, **Bibliografía** e **Índice**. |
| **Una nota, o una pieza fuera de un proyecto** | Todo salvo esos bloques de manuscrito. |
| **Una entrada del diario** | Encabezados, listas, citas, imágenes y fechas; no hay avisos, tablas ni código. |
| **Páginas matinales** | No hay menú: solo el texto. |

Las listas de tareas (**Lista de tareas**) se ofrecen en Notas y en las páginas
de investigación. Para ofrecerlas en otro modo, abre **Ajustes → Ajustes de
escritura → Modos** y activa **Listas de tareas** para ese modo. Un bloque que
ya está en un documento siempre se muestra, esté donde esté el documento.

Cada bloque, y cómo insertarlo, está en
[Formato y bloques](./formatting-and-blocks).

## El menú ⋮ del documento {#the-documents--menu}

El **⋮** sobre la página reúne lo que haces con el documento en su conjunto:

- **Destacar**, **Añadir al tablero…** y **Definir meta de palabras**.
- **Mover a las piezas de Escribir** o **Mover a Notas**, para un documento que
  no está en un proyecto.
- **Detalles…**, **Vista dividida** y **Abrir al lado…**.
- Las partes del panel de Información: **Esquema**, **Enlaces y
  retroenlaces**, **Notas** e **Historial de versiones**; **Guardar versión…** y
  **Abrir el diccionario** (`⌘⇧D`).
- **Modo lectura**, **Desplazamiento de máquina de escribir**, **Santuario** y
  **Revisar ortografía…**.
- Todos los formatos en que se puede exportar el documento, **Guardar una copia
  (`.poiesis` con imágenes)…** y **Mover a otra bóveda…**.
- **Mover a la papelera**.

Una página matinal tiene **Sellar el día** en lugar de la estrella y el
tablero.

Haz clic derecho en el texto para ver sugerencias ortográficas, cortar, copiar
y pegar, y después **Esquema**, **Enlaces wiki**, **Anotaciones** e **Historial
de versiones**.

## Moverse entre documentos {#move-between-documents}

No hay pestañas. Abre un documento desde la lista, desde un enlace o con `⌘K`,
que muestra los documentos que tienes abiertos en **Abierto ahora**.

| Para | Haz esto |
| --- | --- |
| Crear un documento nuevo | `⌘N` |
| Cerrar el documento | `⌘W` |
| Ir atrás o adelante | **‹ ›** arriba de la lista, `⌘[` y `⌘]`, o los botones laterales del ratón |
| Abrir el de arriba o el de abajo en la lista | `⌥⌘←` y `⌥⌘→` |

## Leer sin editar {#read-without-editing}

El **Modo lectura** (`⌘E`, o **Ver → Modo lectura**) deja la página en solo
lectura, para que puedas repasar un borrador sin pulsaciones descarriadas. Un
clic normal sigue un enlace; mientras editas, mantén pulsado `⌘` y haz clic.
Pulsa `⌘E` otra vez para escribir.

Mientras escribes, φ compone la puntuación por ti: las comillas rectas se
vuelven tipográficas, dos guiones una raya y tres puntos unos puntos
suspensivos.

## Ver también {#see-also}

- [Formato y bloques](./formatting-and-blocks)
- [Concentración y Santuario](./focus-and-writing-modes)
- [Anotaciones](./annotations)
- [Atajos de teclado](./keyboard-shortcuts)

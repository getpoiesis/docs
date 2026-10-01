---
title: El editor
---

# El editor

La página es donde escribes, y φ la mantiene en silencio: un título, tus
palabras y controles que solo aparecen cuando los buscas. Esta página cubre la
página en sí, el guardado, la barra de herramientas de selección, el menú de
barra, el menú ⋮ del documento y el movimiento entre documentos.

<img src="/img/app/editor-light.png" alt="Un capítulo abierto en el editor, con su panel a la derecha" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="Un capítulo abierto en el editor, con su panel a la derecha" width="1600" height="1000" loading="lazy" decoding="async" />

## La página {#the-page}

En la parte superior de la página está el **título** del documento y, debajo, tu
texto. El título es como se llama el documento en todas partes: en la lista, en
la búsqueda, en `⌘K` y en los enlaces.

Todo lo demás sobre un documento (su estado, su sinopsis, su meta de palabras,
sus etiquetas, su color, su estrella y dónde vive) se guarda fuera de la página,
en **Detalles…**. Ábrelo desde el menú ⋮ del documento, arriba a la derecha, o
haz clic derecho en el documento en la lista.

En la esquina inferior derecha de la página está el **recuento de palabras** (o
«palabras de la meta», si has fijado una). Haz clic en él para ver las
**Estadísticas del documento**: palabras, caracteres, oraciones, tiempo de
lectura y tus totales de la bóveda. Las notas no muestran recuento, porque una
nota no se escribe hacia una extensión.

## Guardado automático {#autosave}

Nunca tienes que guardar. Mientras escribes, φ guarda tu trabajo automáticamente
un momento después de que te detienes. Cada guardado es **atómico y
verificado**: φ escribe en un archivo temporal, lo vuelve a leer para confirmar
que los bytes llegaron y solo entonces lo pone en su lugar. Un cierre inesperado
o un disco lleno no pueden dejarte con un documento a medio escribir.

Si quieres guardar *ahora mismo*, por ejemplo justo antes de apartarte, pulsa
`⌘S`. Eso escribe el documento actual de inmediato y además registra un punto de
control de versión, para que tengas un punto explícito al que volver. Para
guardar una versión con nombre, usa **Guardar versión…** (`⌘⇧S`). Consulta
[Versiones y copias de seguridad](versions-and-backup.md).

## La barra de herramientas flotante {#the-bubble-toolbar}

Selecciona un texto y una pequeña barra de herramientas flota sobre él. Siempre
contiene lo poco para lo que suele servir una selección:

- **Negrita** (`⌘B`), **Cursiva** (`⌘I`) y **Subrayado** (`⌘U`)
- **Encabezado**: convierte la línea en un encabezado, o de nuevo en texto
- **Enlace**: pide una dirección web y enlaza la selección. Consulta
  [Enlaces](formatting-and-blocks.md#links).
- **Resaltar y comentar** (la muestra de color): elige un color para resaltar la
  selección, elige un **Color personalizado** o **Quitar resaltado**
- **Comentar (sin resaltado)**: adjunta un comentario a la selección sin
  colorearla

Los resaltados y los comentarios se convierten en anotaciones; consulta
[Anotaciones](annotations.md).

El botón **›** del final (**Más herramientas**) abre el resto a su lado:

- **Tachado** y **Código en línea**
- **Alinear a la izquierda**, **Centrar**, **Alinear a la derecha** y
  **Justificar**
- **Buscar palabra**: abre el [diccionario](dictionary.md) con la selección
- **Guardar selección como plantilla…**: guarda el pasaje seleccionado como
  [plantilla](templates.md)

Pulsa `Esc` para cerrar la barra de herramientas. No aparece en el
[modo lectura](#reading-mode) ni en las páginas matutinas, que son
deliberadamente despojadas.

## El menú de barra {#the-slash-menu}

Para insertar un bloque (un encabezado, una lista, una cita, una imagen y más),
escribe **`/`** en cualquier punto de una línea. Se abre un menú; sigue
escribiendo para acotarlo y luego pulsa `Enter` o haz clic para insertar.

Escribe una sola palabra tras la barra, porque un espacio cierra el menú. Por
ejemplo:

- `/heading` o `/h1`, `/h2`, `/h3`
- `/bullet`, `/numbered`, `/task`
- `/quote`, `/table`, `/image`, `/code`
- `/date`, `/time`
- `/scene`, `/verse`, `/footnote`, `/toc`

Tus propias [plantillas](templates.md) también aparecen en el menú, por su
nombre.

También puedes pasar el puntero cerca del borde izquierdo de cualquier línea y
hacer clic en el **+** que aparece (**Insertar bloque debajo (/)**). Abre el
mismo menú para una línea nueva debajo.

### Qué ofrece cada tipo de documento {#what-each-kind-of-document-offers}

El menú solo ofrece lo que encaja con el documento en el que estás:

- **Los documentos de un proyecto** (capítulos, poemas, ensayos) lo tienen todo,
  incluidos los bloques de manuscrito: **Verso**, **Salto de escena**,
  **Epígrafe**, **Cita destacada**, **Nota al pie**, **Capitular**, **Cita
  bibliográfica**, **Bibliografía** e **Índice**.
- **Las notas**, y las piezas de Escribir que no están en un proyecto, lo tienen
  todo salvo esos bloques de manuscrito.
- **Las entradas del diario** tienen encabezados, listas, citas, imágenes y
  fechas, pero no recuadros, tablas ni bloques de código.
- **Las páginas matutinas** no tienen menú de barra. Son solo para el texto.

Las listas de tareas (**Lista de tareas**) se ofrecen en Notas y en las páginas
de investigación. Puedes cambiarlo por modo en **Ajustes → Ajustes de escritura
→ Modos → Listas de tareas**.

El catálogo completo está en [Formato y bloques](formatting-and-blocks.md).

## El menú ⋮ del documento {#the-documents--menu}

El **⋮** de la parte superior derecha de la página reúne lo que haces con el
documento en su conjunto:

- **Destacar**, **Añadir al tablero…** y **Definir meta de palabras**
- **Mover a las piezas de Escribir** o **Mover a Notas**, para un documento que
  no está en un proyecto
- **Detalles…**: estado, sinopsis, meta, etiquetas, color y ubicación
- **Información**: **Esquema**, **Enlaces y retroenlaces**, **Notas** e
  **Historial de versiones** abren esa pestaña del panel de información;
  **Guardar versión…** (`⌘⇧S`) y **Abrir el diccionario** (`⌘⇧D`)
- **Ver**: **Modo lectura**, **Desplazamiento de máquina de escribir** (`⌘⇧T`),
  **Santuario** (`⌘.`) y **Revisar ortografía…**
- **Exportar**: todos los formatos en que se puede guardar el documento, y
  **Guardar una copia (.poiesis con imágenes)…**. Consulta
  [Exportar](exporting.md).
- **Mover a la papelera**

En una página matutina el menú es más corto, con **Sellar el día** en lugar de
la estrella y el tablero.

Al hacer clic derecho en el texto también aparecen accesos directos a
**Esquema**, **Enlaces wiki**, **Anotaciones** e **Historial de versiones**,
debajo de los habituales cortar, copiar y pegar.

## Moverse entre documentos {#moving-between-documents}

No hay pestañas. Abres un documento eligiéndolo en la lista, siguiendo un enlace
o encontrándolo con `⌘K`. Los documentos que has tenido abiertos recientemente
aparecen en **Abierto ahora** en `⌘K`, donde puedes volver a uno o cerrarlo.

- **Documento nuevo**: `⌘N`
- **Cerrar el documento**: `⌘W` te devuelve a donde lo abriste.
- **Atrás y adelante**: las flechas **‹ ›** de la parte superior de la lista (o
  de la parte superior de la página cuando la lista está oculta), `⌘[` y `⌘]`, o
  los botones laterales del ratón. Vuelven sobre tus pasos como lo hace un
  navegador, algo muy útil después de seguir una cadena de
  [wiki-links](links-and-graph.md).
- **Anterior o siguiente en la lista**: `⌥⌘←` y `⌥⌘→` recorren los documentos de
  la lista en la que estás.

## Tipografía inteligente {#smart-typography}

Mientras escribes, φ ordena por ti la puntuación habitual: las comillas rectas se
vuelven tipográficas, dos guiones se convierten en una raya, tres puntos en unos
puntos suspensivos, etcétera. Escribes con naturalidad y el texto sale
compuesto.

## Modo lectura {#reading-mode}

Cuando prefieras leer en vez de editar, activa el **Modo lectura** (`⌘E`) desde
el menú **Ver**, o **Modo lectura** en el menú ⋮ del documento. La página pasa a
ser de solo lectura y un clic normal sigue los enlaces. (Mientras editas, mantén
`⌘` pulsado y haz clic para seguir uno.) Pulsa `⌘E` otra vez para volver a
escribir.

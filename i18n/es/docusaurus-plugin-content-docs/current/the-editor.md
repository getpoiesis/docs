---
title: El editor
description: La página en la que escribes, la barra de la selección, el menú de bloques y el menú ⋮ del documento.
---

# El editor

El editor es la página en la que escribes. En ella solo hay un título, tu
texto y unos pocos botones. Todo lo demás que tiene que ver con el documento
está en sus menús y en el panel de Información.

<img src="/img/app/editor-light.png" alt="Un capítulo abierto en la página, con los capítulos del proyecto en la lista de al lado y los botones de la página arriba a la derecha" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="Un capítulo abierto en la página, con los capítulos del proyecto en la lista de al lado y los botones de la página arriba a la derecha" width="1600" height="1000" loading="lazy" decoding="async" />

## Escribe algo {#write-something}

1. Pulsa `⌘N` para crear un documento, o haz clic en uno de la lista.
2. Escribe un título arriba. Con ese nombre aparecerá el documento en la
   lista, en las búsquedas y en los enlaces.
3. Escribe tu texto debajo del título. φ lo guarda por ti.
4. Escribe `/` en una línea vacía para añadir un encabezado, una lista, una
   cita u otro bloque.
5. Selecciona unas palabras para que aparezca la barra de herramientas. Desde
   ella puedes poner negrita o cursiva, crear un enlace, resaltar y comentar.

Mientras escribes, φ corrige la puntuación: cambia las comillas rectas por
comillas tipográficas, dos guiones por una raya y tres puntos por puntos
suspensivos.

## Los botones sobre la página {#the-buttons-above-the-page}

Estos botones están arriba a la derecha de la página:

| Botón | Para qué sirve |
| --- | --- |
| **Vista dividida** (`⌘\`) | Abre un segundo panel al lado de la página. Consulta [Documentos lado a lado](./side-by-side). |
| **⋮** | Abre el menú del documento, que se explica más abajo. |
| **Detalles…** (ⓘ) | Muestra el estado del documento, su sinopsis, su meta de palabras, sus etiquetas, su color y si está destacado, además del lugar donde se guarda. |
| **Información** (`⌘⇧I`) | Abre el panel de Información, que tiene cinco pestañas: **Esquema**, **Enlaces**, **Notas**, **Tareas** e **Historial**. |
| **Santuario** (`⌘.`) | Oculta todo menos la página. Consulta [Concentración y Santuario](./focus-and-writing-modes). |

El recuento de palabras está en la esquina inferior derecha de la página. Si
el documento tiene una meta de palabras, el recuento aparece junto a la meta.

- Haz clic una vez en el recuento para abrir **Esquema** en el panel de
  Información. Ahí verás el número de palabras y el tiempo de lectura.
- Haz clic otra vez para ver todas las estadísticas del documento.

Las notas no muestran recuento de palabras.

## Guardar {#saving}

No hace falta que guardes: φ lo hace un momento después de que dejes de
escribir.

Y lo hace con cuidado. Primero escribe los cambios en un archivo temporal,
luego lo vuelve a leer para comprobarlo y solo entonces sustituye el
documento. Así, aunque la aplicación se cierre de golpe o el disco se llene,
tu documento nunca queda a medio escribir.

- Pulsa `⌘S` para guardar en el momento. Además, se registra una versión a
  la que podrás volver más adelante.
- Elige **Guardar versión…** (`⌘⇧S`) para ponerle un nombre a la versión.

Consulta [Versiones y copias de seguridad](./versions-and-backup).

## Dar formato a una selección {#format-a-selection}

Selecciona un texto. Encima aparece una pequeña barra de herramientas con
estos botones:

<img src="/img/app/selection-toolbar-light.png" alt="Unas palabras seleccionadas en un capítulo, con la barra de herramientas encima y sus herramientas adicionales a la vista" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/selection-toolbar-dark.png" alt="Unas palabras seleccionadas en un capítulo, con la barra de herramientas encima y sus herramientas adicionales a la vista" width="1600" height="1000" loading="lazy" decoding="async" />

- **Negrita** (`⌘B`), **Cursiva** (`⌘I`) y **Subrayado** (`⌘U`).
- **Encabezado**: convierte la línea en un encabezado, o la devuelve a texto
  normal.
- **Enlace**: te pide una dirección web.
- **Resaltar y comentar** (la muestra de color): elige un color, un **Color
  personalizado** o **Quitar resaltado**.
- **Comentar (sin resaltado)**: añade un comentario a las palabras sin
  colorearlas.

Las demás herramientas están en **Más herramientas** (el › del final de la
barra): **Tachado**, **Código en línea**, **Alinear a la izquierda**,
**Centrar**, **Alinear a la derecha**, **Justificar**, **Buscar palabra**
(abre el [diccionario](./dictionary)) y **Guardar selección como
plantilla…**.

φ guarda los resaltados y los comentarios como
[anotaciones](./annotations).

Pulsa `Esc` para ocultar la barra. La barra no aparece en el modo lectura ni
en las páginas matinales.

## Insertar un bloque {#insert-a-block}

Un bloque es cualquier parte de la página que no es texto corriente: un
encabezado, una cita, una tabla o una imagen, por ejemplo.

<img src="/img/app/slash-menu-light.png" alt="Un capítulo con una barra escrita en una línea vacía y el menú de bloques abierto" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/slash-menu-dark.png" alt="Un capítulo con una barra escrita en una línea vacía y el menú de bloques abierto" width="1600" height="1000" loading="lazy" decoding="async" />

1. Escribe `/`. Se abre el menú de bloques.
2. Escribe una palabra para acortar el menú, por ejemplo `/heading`,
   `/quote`, `/table`, `/image`, `/date`, `/scene`, `/verse` o `/footnote`.
   No escribas ningún espacio, porque el espacio cierra el menú.
3. Pulsa `Intro`.

En el menú también están tus [plantillas](./templates), cada una con su
nombre.

Si prefieres el ratón, acerca el puntero al borde izquierdo de una línea y
haz clic en el **+** que aparece (**Insertar bloque debajo (/)**).

El menú cambia según el tipo de documento en el que estés:

| Dónde | Qué ofrece el menú |
| --- | --- |
| **Un capítulo, poema o ensayo de un proyecto** | Todo, incluidos **Verso**, **Salto de escena**, **Epígrafe**, **Cita destacada**, **Capitular**, **Nota al pie**, **Cita bibliográfica**, **Bibliografía** e **Índice**. |
| **Una nota, o una pieza fuera de un proyecto** | Todo menos esos bloques de manuscrito. |
| **Una entrada del diario** | Encabezados, listas, citas, imágenes y fechas. No hay avisos, tablas ni código. |
| **Páginas matinales** | No hay menú. Las páginas matinales son solo texto. |

Un [proyecto](./collections) es un libro u otra obra larga formada por
varios documentos.

Las listas de tareas (**Lista de tareas**) aparecen en el menú en Notas y en
las páginas de investigación. Si las quieres en otro modo, abre **Ajustes →
Ajustes de escritura → Modos** y activa **Listas de tareas** para ese modo.

Un bloque que ya está en un documento se muestra siempre, aunque el menú de
ese documento no lo ofrezca.

En [Formato y bloques](./formatting-and-blocks) tienes la lista de todos los
bloques y cómo insertar cada uno.

## El menú ⋮ del documento {#the-documents--menu}

Haz clic en **⋮**, encima de la página. Este menú reúne los comandos que
afectan al documento entero:

- **Destacar**, **Añadir al tablero…** y **Definir meta de palabras**.
- **Mover a las piezas de Escribir** o **Mover a Notas**. Solo aparecen si
  el documento no está en un proyecto.
- **Detalles…**, **Vista dividida** y **Abrir al lado…**.
- **Esquema**, **Enlaces y retroenlaces**, **Notas** e **Historial de
  versiones**. Cada una abre esa pestaña del panel de Información.
- **Guardar versión…** y **Abrir el diccionario** (`⌘⇧D`).
- **Modo lectura**, **Desplazamiento de máquina de escribir**, **Santuario**
  y **Revisar ortografía…**.
- Todos los formatos a los que puedes exportar el documento.
- **Guardar una copia (`.poiesis` con imágenes)…** y **Mover a otra
  bóveda…**. Una [bóveda](./vaults) es la carpeta donde φ guarda tus
  documentos.
- **Mover a la papelera**.

En una página matinal, el menú tiene **Sellar el día** en lugar de
**Destacar** y **Añadir al tablero…**.

Hay un segundo menú. Haz clic derecho en el texto y verás
las sugerencias de ortografía y las opciones de cortar, copiar y pegar,
seguidas de **Esquema**, **Enlaces wiki**, **Anotaciones** e **Historial de
versiones**.

## Moverse entre documentos {#move-between-documents}

φ no tiene pestañas. Un documento se abre de tres maneras:

- Haz clic en él en la lista.
- Haz clic en un enlace que lleve a él.
- Pulsa `⌘K`. Los documentos que tienes abiertos aparecen bajo **Abierto
  ahora**.

| Para | Haz esto |
| --- | --- |
| Crear un documento | `⌘N` |
| Cerrar el documento | `⌘W` |
| Ir atrás o adelante | **‹ ›** en la parte superior de la lista, `⌘[` y `⌘]`, o los botones laterales del ratón |
| Abrir el documento de arriba o el de abajo en la lista | `⌥⌘←` y `⌥⌘→` |

## Leer sin editar {#read-without-editing}

En el **Modo lectura** puedes leer el documento, pero no cambiarlo. Te sirve
para repasar un borrador sin escribir en él por descuido.

- Pulsa `⌘E`, o elige **Ver → Modo lectura**, para activarlo.
- Pulsa `⌘E` otra vez para volver a escribir.

En el modo lectura, basta con hacer clic en un enlace para seguirlo.
Mientras editas, mantén pulsada `⌘` y haz clic en el enlace.

## Ver también {#see-also}

- [Formato y bloques](./formatting-and-blocks)
- [Concentración y Santuario](./focus-and-writing-modes)
- [Anotaciones y notas al margen](./annotations)
- [Atajos de teclado](./keyboard-shortcuts)

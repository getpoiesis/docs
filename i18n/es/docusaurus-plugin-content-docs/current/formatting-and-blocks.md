---
title: Formato y bloques
description: Todos los tipos de formato y de bloque que tiene φ Poiesis, y las maneras de insertar cada uno.
---

# Formato y bloques

En esta página están todos los tipos de formato y todos los bloques de φ Poiesis. De
cada uno se explica para qué sirve y cómo se añade.

Un bloque es cualquier parte de la página que no es texto corriente: un
encabezado, una lista, una cita o una tabla, por ejemplo. Poiesis tiene además
bloques pensados para libros y poemas: versos, saltos de escena, epígrafes y
notas al pie.

## Da formato mientras escribes {#format-as-you-write}

Hay cuatro maneras de dar formato. Usa la que más te guste.

- **La barra de herramientas.** Selecciona unas palabras y haz clic en un
  botón de la barra que aparece encima.
- **Un atajo.** Selecciona unas palabras y pulsa un atajo, como `⌘B`.
- **El menú de bloques (`/`).** Escribe `/` en una línea vacía y, a
  continuación, una palabra: por ejemplo `/quote`, `/scene` o `/verse`.
  Pulsa `Intro`.
- **Markdown.** Escribe el Markdown que ya conoces: `## ` crea un encabezado
  y `**palabra**` pone una palabra en negrita.

Los mismos comandos están en el menú **Formato** de la barra de menús.

## Palabras y frases {#words-and-phrases}

| Formato | Atajo | Barra de herramientas | Markdown |
| --- | --- | --- | --- |
| **Negrita** | `⌘B` | **Negrita** | `**negrita**` |
| **Cursiva** | `⌘I` | **Cursiva** | `*cursiva*` |
| **Subrayado** | `⌘U` | **Subrayado** | `~subrayado~` |
| **Tachado** | **Formato → Tachado** | **Más herramientas** › **Tachado** | `~~tachado~~` |
| **Código en línea** | **Formato → Código en línea** | **Más herramientas** › **Código en línea** | `` `código` `` |
| **Resaltado** | | **Resaltar y comentar** | `==resaltado==` |
| **Enlace** | `⌘⇧K` | **Enlace** | `[texto](https://…)` |

**Para dejar de escribir en negrita o en cursiva.** Termina la palabra y
pulsa dos veces la barra espaciadora. El primer espacio todavía lleva el
formato; el segundo lo corta, y la palabra siguiente sale ya sin él.

**Enlaces.**

- Cuando escribes o pegas una dirección web, Poiesis la convierte en un enlace.
- Para cambiar un enlace, selecciona las palabras enlazadas y elige otra vez
  **Enlace**. Escribe la nueva dirección.
- Para quitar un enlace, selecciona las palabras enlazadas, elige **Enlace**
  y borra el contenido del campo.
- Los enlaces se abren en tu navegador. Mientras editas, mantén pulsada `⌘`
  y haz clic en el enlace.
- Para enlazar con otro documento de tu [bóveda](./vaults.md) (la carpeta donde
  Poiesis guarda tus documentos), usa un enlace wiki. Consulta
  [Enlaces y el grafo](./links-and-graph.md).

## Encabezados, listas y citas {#headings-lists-and-quotes}

| Bloque | Menú de bloques | Atajo | Markdown |
| --- | --- | --- | --- |
| **Texto** (un párrafo normal) | `/text` | `⌘⌥0` | |
| **Encabezado 1** | `/h1` | `⌘⌥1` | `# ` |
| **Encabezado 2** | `/h2` | `⌘⌥2` | `## ` |
| **Encabezado 3** | `/h3` | `⌘⌥3` | `### ` (también `####` y niveles más profundos) |
| **Lista con viñetas** | `/bullet` | `⌘⇧8` | `- ` o `* ` |
| **Lista ordenada** | `/numbered` | `⌘⇧7` | `1. ` |
| **Lista de tareas** | `/task` o `/checklist` | | `[] ` o `- [ ] ` (con `- [x] ` empieza ya marcada) |
| **Cita** | `/quote` | `⇧⌘B` | `> ` |
| **Separador** | `/divider` | | `---` |
| **Bloque de código** | `/code` | | ` ``` ` |
| **Tabla** | `/table` | | |

**Encabezados.** Con los encabezados se forma el esquema del documento, que
puedes ver en el panel de Información (`⌘⇧I`). El bloque **Índice** también
los recoge en una lista.

**Alineación.** **Alinear a la izquierda**, **Centrar** (`⌘⇧E`), **Alinear a
la derecha** (`⌘⇧R`) y **Justificar** (`⌘⇧J`) están en el menú **Formato**.
También están en **Más herramientas**, en la barra de herramientas.

**Listas de tareas.** Cada elemento tiene tres estados: pendiente, en curso
y hecho. Haz clic en la casilla para pasar al estado siguiente. El menú de bloques ofrece las listas de tareas en Notas y en las páginas de
investigación. Si las quieres en otro modo, abre **Ajustes → Ajustes de
escritura → Modos** y activa **Listas de tareas** para ese modo.

**Tablas.** Una tabla nueva tiene tres columnas y tres filas, y la primera
fila es la cabecera. Arrastra el borde de una columna para ensancharla.
Pulsa `Tab` para pasar a la celda siguiente.

**Bloques de código.** Poiesis colorea el código según el lenguaje que reconoce.
Si prefieres elegir tú el lenguaje, escribe su nombre justo después de los
tres acentos graves que abren el bloque, por ejemplo ` ```python `. Pulsa `Tab` para aumentar
la sangría y `⇧Tab` para reducirla. Para cambiar la sangría, abre **Ajustes
→ Editor → Código** y ajusta **Sangrar con** (**Espacios** o
**Tabulaciones**) y **Ancho de sangría**.

## Bloques para libros y poemas {#blocks-for-books-and-poems}

El menú de bloques ofrece estos bloques en los documentos que
pertenecen a un [proyecto](./collections.md): capítulos, poemas y ensayos. Un
proyecto es un libro u otra obra larga formada por varios documentos.

Si un documento ya tiene alguno de estos bloques, el bloque se sigue viendo
aunque el documento esté fuera de un proyecto.

| Bloque | Para qué sirve | Cómo se inserta |
| --- | --- | --- |
| **Verso** | Los versos de un poema. Poiesis respeta las líneas tal como las escribes, en el mismo margen que el resto del texto. | `/verse` o `⌥⌘V` |
| **Salto de escena** | Un adorno centrado entre escenas: **Asterismo** ⁂, **Estrellas** \* \* \*, **Floral** ❧ o **Espacio en blanco**. Pasa el puntero por encima para elegir otro. | `/scene` |
| **Epígrafe** | Una cita al comienzo, con su fuente en la línea de abajo. | `/epigraph` |
| **Cita destacada** | Una línea en letra grande, para darle énfasis. | `/pull-quote` |
| **Capitular** | Una primera letra grande para el párrafo. Elígela otra vez para quitarla. | `/drop` |
| **Índice** | Una lista de los encabezados del documento que se actualiza sola. Haz clic en un encabezado para ir a él. | `/toc` |
| **Nota al pie** | Una nota numerada. | `/footnote` |
| **Cita bibliográfica** | Una referencia a una fuente, que se muestra como autor y año. | `/citation` |
| **Bibliografía** | Una lista de las fuentes que has citado. | `/bibliography` |

Para saber más:

- [Poesía y verso](./poetry.md) explica los versos, los epígrafes y los saltos
  de escena.
- [Notas al pie y citas](./footnotes-and-citations.md) explica las notas al
  pie, las citas bibliográficas y la bibliografía.

## Imágenes, avisos y fechas {#pictures-callouts-and-dates}

| Bloque | Para qué sirve | Cómo se inserta |
| --- | --- | --- |
| **Imagen** | Una imagen con su pie. Con su barra de herramientas la colocas a la izquierda, en el centro, a la derecha o a todo el ancho. Arrastra su borde para cambiarle el tamaño. Poiesis copia el archivo a tu bóveda. | `/image`, o `![alt](https://…)` |
| **Aviso** | Un recuadro para un comentario aparte: información, consejo, advertencia o peligro. Pasa el puntero por encima para elegir otro tipo. | `/callout`, o `> [!tip] ` |
| **Fecha** | La fecha de hoy, en una etiqueta de fecha. La etiqueta enlaza el documento con ese día del [calendario](./calendar.md). | `/date` |
| **Fecha y hora** | Igual que **Fecha**, pero con la hora. | `/datetime` |
| **Hora** | La hora actual, como texto normal. | `/time` |

Haz clic en una etiqueta de fecha para abrir ese día en el calendario.
Para cambiar la fecha o la hora, haz clic en el lápiz que hay junto a la
etiqueta (**Editar fecha y hora**).

En las entradas del diario, el menú de bloques no ofrece avisos.

Dentro de una línea de texto también puedes añadir dos cosas:

- **Menciones con @.** Escribe `@` y elige un
  [personaje](./characters-and-authors.md). Para crear un personaje nuevo con
  el nombre que has escrito, elige **Crear @nombre**.
- **Enlaces wiki.** Escribe `[[` y elige un documento. Consulta
  [Enlaces y el grafo](./links-and-graph.md).

## Escribir en Markdown {#writing-in-markdown}

Cuando escribes Markdown, Poiesis lo convierte en formato. En las tablas de más
arriba tienes el Markdown de cada tipo de formato.

**Ver el Markdown.** Activa **Ajustes → Editor → Mostrar Markdown**. A
partir de entonces, las marcas (`**`, `#`, `[ ]( )`) se ven atenuadas
alrededor del formato en la línea en la que estás. Las marcas nunca forman
parte de tu texto.

**Pegar Markdown.** Cuando pegas un texto copiado de un editor de Markdown o
de una aplicación de notas, Poiesis le da formato: reconoce encabezados, listas de
tareas, tablas, citas, avisos, código, enlaces, imágenes y notas al pie. Las
notas al pie pueden ir escritas como `^[la nota]`, o como `[^1]` con una
línea `[^1]: la nota`.

Poiesis entiende también el Markdown que escriben otras aplicaciones de notas:

- `~texto~` pasa a ser texto subrayado.
- `==🟢texto==` pasa a ser un resaltado verde.
- `[[Nota|texto visible]]` pasa a ser un enlace wiki.
- Las `#etiquetas` pasan a ser las etiquetas del documento.

Para pegar el texto tal cual, sin formato, pulsa `⇧⌘V`.

Al pegar solo se conservan los bloques que ofrece el documento. Por ejemplo,
una lista de tareas pegada en un capítulo se convierte en una lista normal,
y cada elemento conserva su `[ ]`.

**Copiar como Markdown.** Abre la paleta de comandos (`⌘P`) y elige **Copiar
como Markdown**. Se copia la selección o, si no hay nada seleccionado, el
documento entero. También puedes hacer clic derecho en un
documento de la lista y elegir **Copiar como Markdown**.

## Ver también {#see-also}

- [El editor](./the-editor.md): la barra de herramientas y el menú de bloques.
- [Poesía y verso](./poetry.md)
- [Notas al pie y citas](./footnotes-and-citations.md)
- [Plantillas](./templates.md)

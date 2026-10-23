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
| **Desplegable** | `/toggle` | | |
| **Bloque de fórmula** | `/math` | | |

**Encabezados.** Con los encabezados se forma el esquema del documento, que
puedes ver en el panel de Información (`⌘⇧I`). El bloque **Índice** también
los recoge en una lista.

**Alineación.** **Alinear a la izquierda**, **Centrar** (`⌘⇧E`), **Alinear a
la derecha** (`⌘⇧R`) y **Justificar** (`⌘⇧J`) están en el menú **Formato**.
También están en **Más herramientas**, en la barra de herramientas.

**Listas.** Pulsa `Tab` para sangrar un elemento y `⇧Tab` para quitarle la
sangría. Retroceso al principio de un elemento lo borra o lo une a la línea
de arriba, y la lista sigue entera: los números continúan y las viñetas
mantienen su nivel. `Supr` al final de un elemento sube el siguiente.

**Listas de tareas.** Cada elemento tiene tres estados: pendiente, en curso
y hecho. Haz clic en la casilla para pasar al estado siguiente. El menú de bloques ofrece las listas de tareas en Notas y en las páginas de
investigación. Si las quieres en otro modo, abre **Ajustes → Ajustes de
escritura → Modos** y activa **Listas de tareas** para ese modo.

**Tablas.** Una tabla nueva tiene tres columnas y tres filas, y la primera
fila es la cabecera. Arrastra el borde de una columna para ensancharla.
Pulsa `Tab` para pasar a la celda siguiente.

Cuando el cursor está en una tabla, aparece encima una barra de herramientas.
Indica en qué fila y columna estás; por ejemplo, *Fila 2 de 3 · Columna 1 de
3*. Sus botones:

- **Añadir una fila arriba**, **Añadir una fila abajo** y **Eliminar fila**.
- **Añadir una columna a la izquierda**, **Añadir una columna a la derecha** y
  **Eliminar columna**.
- **Fila de encabezado** y **Columna de encabezado** activan o desactivan el
  encabezado.
- **Combinar celdas** une las celdas que has seleccionado. **Dividir celda**
  vuelve a separar una celda combinada.
- **Eliminar tabla** quita la tabla entera.

Una tabla siempre conserva al menos una fila y una columna. Para quitar la
última, usa **Eliminar tabla**.

**Bloques de código.** Poiesis colorea el código según el lenguaje que reconoce.
Si prefieres elegir tú el lenguaje, escribe su nombre justo después de los
tres acentos graves que abren el bloque, por ejemplo ` ```python `. Pulsa `Tab` para aumentar
la sangría y `⇧Tab` para reducirla. Para cambiar la sangría, abre **Ajustes
→ Editor → Código** y ajusta **Sangrar con** (**Espacios** o
**Tabulaciones**) y **Ancho de sangría**.

## Desplegables: secciones que se pliegan {#toggles-sections-that-fold-away}

Un desplegable pliega bloques bajo una línea a la que tú pones nombre. Úsalo
para un spoiler, un inciso o notas para ti dentro de un borrador.

1. Escribe `/toggle` y pulsa `Intro`.
2. Escribe la línea que da nombre a la sección (**Di qué se pliega aquí**).
3. Pulsa `Intro` al final de esa línea para escribir dentro de la sección.

| Para | Haz esto |
| --- | --- |
| Plegar o desplegar la sección | Haz clic en la flecha o pulsa `⌘⌥↩`. |
| Entrar en la sección | Pulsa `Intro` al final de la línea con nombre. Si la sección está plegada, se abre. |
| Salir de la sección | Pulsa `Intro` en una última línea vacía, `⌘↩` en cualquier punto de ella o `↓` al final. |
| Saltarte una sección plegada | Pulsa `↓` en su línea con nombre. |
| Deshacer el desplegable | Pulsa Retroceso en una línea con nombre vacía. Sus bloques vuelven a la página. |

El texto plegado sigue contando en el recuento de palabras, en las búsquedas
y en las exportaciones. Al imprimir, la sección se imprime entera. En el modo
lectura, la flecha pliega y despliega la sección sin cambiar el documento.

## Fórmulas {#math}

Las fórmulas se escriben en LaTeX y las compone KaTeX.

- **Una fórmula en su propia línea.** Escribe `/math` y elige **Bloque de
  fórmula**. Con el cursor en el bloque, su código fuente se abre encima de
  la fórmula, y la fórmula cambia a medida que escribes. Pulsa `⌘↩` o `Esc`
  para salir del bloque.
- **Una fórmula dentro de una línea.** Escribe `$$E = mc^2$$`, o escribe
  `/inline`, elige **Fórmula en línea** y escribe la fórmula. Haz doble clic
  en una fórmula en línea para cambiarla.

Si una fórmula no se puede leer, Poiesis te dice por qué en lugar de
ocultarla. Al imprimir, las fórmulas se componen como fórmulas de verdad. Un
formato de exportación que aún no sabe componer fórmulas conserva como texto
el LaTeX de un bloque de fórmula. Nada de una fórmula puede enlazar, cargar
ni ejecutar nada.

## Bloques para libros y poemas {#blocks-for-books-and-poems}

El menú de bloques ofrece estos bloques en los documentos de **Escribir**: los
capítulos, poemas y ensayos de un [proyecto](./collections.md), y las piezas
que aún no forman parte de ningún proyecto. Un proyecto es un libro u otra
obra larga formada por varios documentos. **Verso** se ofrece en todos los
documentos menos en las páginas matinales.

Si un documento ya tiene alguno de estos bloques, el bloque se sigue viendo
aunque el documento esté en otro sitio.

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

En las entradas del diario, el menú de bloques no ofrece avisos, tablas ni
bloques de código.

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

---
title: Formato y bloques
description: Todos los tipos de formato y de bloque que tiene φ, y las formas de insertar cada uno.
---

# Formato y bloques

φ tiene el formato que esperarías (encabezados, listas, citas, enlaces) y un
conjunto de bloques pensados para libros y poemas: verso, saltos de escena,
epígrafes, notas al pie. Esta página es la referencia: para qué sirve cada uno
y todas las formas de crearlo.

## Da formato mientras escribes {#format-as-you-write}

1. Selecciona palabras y elige en la barra de herramientas que aparece encima, o
   usa un atajo como `⌘B`.
2. Para un bloque, escribe `/` en una línea vacía y luego una palabra:
   `/quote`, `/scene`, `/verse`.
3. O escribe el Markdown al que estás acostumbrado: `## ` crea un encabezado,
   `**word**` la pone en negrita.
4. Los mismos comandos están en el menú **Formato** de la barra de menús.

## Palabras y frases {#words-and-phrases}

| Formato | Atajo | Barra de herramientas | Markdown |
| --- | --- | --- | --- |
| **Negrita** | `⌘B` | **Negrita** | `**bold**` |
| **Cursiva** | `⌘I` | **Cursiva** | `*italic*` |
| **Subrayado** | `⌘U` | **Subrayado** | `~underline~` |
| **Tachado** | **Formato → Tachado** | **Más herramientas** › **Tachado** | `~~strike~~` |
| **Código en línea** | **Formato → Código en línea** | **Más herramientas** › **Código en línea** | `` `code` `` |
| **Resaltado** | | **Resaltar y comentar** | `==highlight==` |
| **Enlace** | `⌘⇧K` | **Enlace** | `[text](https://…)` |

**Salir de la negrita o la cursiva.** Termina la palabra y pulsa la barra
espaciadora dos veces. El primer espacio se queda con la palabra con formato; el
segundo termina el formato, así que la palabra siguiente queda en texto normal.

**Enlaces.** Escribir o pegar una dirección web la convierte en enlace por sí
sola. Para cambiar o quitar uno, selecciona las palabras enlazadas y vuelve a
elegir **Enlace**: escribe una dirección nueva, o vacía el campo. Los enlaces se
abren en tu navegador; mientras editas, mantén pulsado `⌘` y haz clic. Para
enlazar a otro documento de la bóveda, usa en su lugar un enlace wiki
([Enlaces y el grafo](./links-and-graph)).

## Encabezados, listas y citas {#headings-lists-and-quotes}

| Bloque | Comando de barra | Atajo | Markdown |
| --- | --- | --- | --- |
| **Texto** (un párrafo simple) | `/text` | `⌘⌥0` | |
| **Encabezado 1** | `/h1` | `⌘⌥1` | `# ` |
| **Encabezado 2** | `/h2` | `⌘⌥2` | `## ` |
| **Encabezado 3** | `/h3` | `⌘⌥3` | `### ` (también `####` y niveles más profundos) |
| **Lista con viñetas** | `/bullet` | `⌘⇧8` | `- ` o `* ` |
| **Lista ordenada** | `/numbered` | `⌘⇧7` | `1. ` |
| **Lista de tareas** | `/task` o `/checklist` | | `[] ` o `- [ ] ` (`- [x] ` la empieza marcada) |
| **Cita** | `/quote` | `⇧⌘B` | `> ` |
| **Separador** | `/divider` | | `---` |
| **Bloque de código** | `/code` | | ` ``` ` |
| **Tabla** | `/table` | | |

Los encabezados construyen el esquema del documento en el panel de Información
y alimentan el bloque **Índice**.

**Alineación.** **Alinear a la izquierda**, **Centrar** (`⌘⇧E`), **Alinear a la
derecha** (`⌘⇧R`) y **Justificar** (`⌘⇧J`) están en el menú **Formato** y en
**Más herramientas** de la barra de herramientas.

**Las listas de tareas** tienen tres estados, pendiente, en curso y hecho; haz
clic en la casilla para hacer avanzar un elemento. Se ofrecen en Notas y en las
páginas de investigación. Para ofrecerlas en otro sitio, activa **Listas de
tareas** para ese modo en **Ajustes → Ajustes de escritura → Modos**.

**Las tablas** empiezan con tres columnas y tres filas con encabezado. Arrastra
el borde de una columna para ensancharla. `Tab` pasa a la celda siguiente.

**Los bloques de código** resaltan el lenguaje que reconocen, o el que indiques
tras la valla de apertura (` ```python `). `Tab` aumenta la sangría y `⇧Tab` la
reduce; elige **Sangrar con** (**Espacios** o **Tabulaciones**) y **Ancho de
sangría** en **Ajustes → Editor → Código**.

## Bloques para libros y poemas {#blocks-for-books-and-poems}

Se ofrecen en los documentos que pertenecen a un [proyecto](./collections):
capítulos, poemas, ensayos. Un documento que ya tiene uno lo muestra esté donde
esté.

| Bloque | Para qué sirve | Se inserta con |
| --- | --- | --- |
| **Verso** | Las líneas de un poema, tal como las escribes, en el propio margen del texto. | `/verse` o `⌥⌘V` |
| **Salto de escena** | Un ornamento centrado entre escenas: **Asterismo** ⁂, **Estrellas** \* \* \*, **Floral** ❧ o **Espacio en blanco**. Señálalo para cambiarlo. | `/scene` |
| **Epígrafe** | Una cita de apertura, con su fuente en una línea debajo. | `/epigraph` |
| **Cita destacada** | Una línea en tamaño grande, para dar énfasis. | `/pull-quote` |
| **Capitular** | Una primera letra ampliada para el párrafo. Vuelve a elegirla para quitarla. | `/drop` |
| **Índice** | Una lista viva de los encabezados del documento; haz clic en uno para ir allí. | `/toc` |
| **Nota al pie** | Una nota numerada. | `/footnote` |
| **Cita bibliográfica** | Una referencia autor–año a una fuente. | `/citation` |
| **Bibliografía** | Las fuentes que has citado, en una lista. | `/bibliography` |

El verso, los epígrafes y los saltos de escena se explican en
[Poesía y verso](./poetry); las notas al pie, las citas bibliográficas y la
bibliografía en [Notas al pie y citas](./footnotes-and-citations).

## Imágenes, avisos y fechas {#pictures-callouts-and-dates}

| Bloque | Para qué sirve | Se inserta con |
| --- | --- | --- |
| **Imagen** | Una imagen con un pie. Elige izquierda, centro, derecha o ancho completo desde su barra de herramientas, y arrastra su borde para cambiar su tamaño. El archivo se copia en tu bóveda. | `/image`, o `![alt](https://…)` |
| **Aviso** | Un recuadro para un comentario al margen: información, consejo, advertencia o peligro. Señálalo para cambiarlo. | `/callout`, o `> [!tip] ` |
| **Fecha** | La fecha de hoy como una ficha que enlaza el documento con ese día en el [calendario](./calendar). | `/date` |
| **Fecha y hora** | Lo mismo, con la hora. | `/datetime` |
| **Hora** | La hora actual, como texto simple. | `/time` |

Haz clic en una ficha de fecha para abrir su día en el calendario; el lápiz que
tiene al lado (**Editar fecha y hora**) cambia la fecha o la hora. Los avisos no
se ofrecen en las entradas del diario.

Dos cosas más se sitúan dentro de una línea:

- **Menciones con @**: escribe `@` y elige un
  [personaje](./characters-and-authors), o elige **Crear @nombre** para crear
  uno a partir de lo que escribiste.
- **Enlaces wiki**: escribe `[[` y elige un documento
  ([Enlaces y el grafo](./links-and-graph)).

## Escribir en Markdown {#writing-in-markdown}

φ convierte el Markdown en formato mientras escribes, con los patrones de las
tablas de arriba. También puedes verlo mientras escribes: activa **Ajustes →
Editor → Mostrar Markdown**, y las marcas (`**`, `#`, `[ ]( )`) aparecen tenues
alrededor del formato en la línea en la que estás. Nunca forman parte de tu
texto.

**Pegar Markdown.** El texto copiado de un editor de Markdown o de una
aplicación de notas llega con formato: encabezados, listas de tareas, tablas,
citas, avisos, código, enlaces, imágenes y notas al pie (`^[the note]`, o `[^1]`
con su línea `[^1]: the note`). También entiende las variantes que escriben otras
aplicaciones de notas: `~text~` subraya, `==🟢text==` es un resaltado verde,
`[[Note|shown text]]` es un enlace wiki y los `#tags` pasan a ser las
etiquetas del documento. Para pegar el texto exactamente como está, usa `⇧⌘V`.

Al pegar solo llega lo que el documento ofrece: una lista de tareas pegada en un
capítulo llega como lista, conservando sus `[ ]`.

**Copiar como Markdown.** **Copiar como Markdown**, en la paleta de comandos
(`⌘P`), copia la selección, o el documento entero si no hay nada seleccionado.
También está en el menú contextual de un documento en la lista.

## Ver también {#see-also}

- [El editor](./the-editor): la barra de herramientas y el menú de barra.
- [Poesía y verso](./poetry)
- [Notas al pie y citas](./footnotes-and-citations)
- [Plantillas](./templates)

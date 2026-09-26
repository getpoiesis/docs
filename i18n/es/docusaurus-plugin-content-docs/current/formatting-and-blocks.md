---
title: Formato y bloques
sidebar_position: 5
---

# Formato y bloques

φ te da el formato cotidiano que esperarías —encabezados, listas, citas, código,
enlaces— más un conjunto de bloques más ricos pensados para manuscritos y
poesía. Busca el formato en línea en la
[barra de herramientas flotante](the-editor.md#la-barra-de-herramientas-flotante)
o en el menú Formato, e inserta bloques desde el
[menú de barra](the-editor.md#el-menú-de-barra) (escribe `/`).

## Formato en línea

Selecciona texto y aplica:

- **Negrita**: `⌘B`
- **Cursiva**: `⌘I`
- **Subrayado**: `⌘U`
- **Tachado**: desde la barra de herramientas o el menú Formato
- **Código en línea**: para fragmentos cortos dentro de una oración

Todo esto también está en el menú **Formato**, y muchos tienen atajos de teclado
allí.

:::tip Sal de la negrita o la cursiva escribiendo
Cuando activas **negrita** o *cursiva* y sigues escribiendo, no hace falta volver
a la barra de herramientas para detenerla. Termina la palabra y pulsa la barra
espaciadora una segunda vez: el primer espacio sigue formando parte de la palabra
con formato y el siguiente quita el formato, de modo que la palabra siguiente
queda en texto normal.
:::

## Encabezados y párrafos

Tres niveles de encabezado estructuran un documento:

- **Encabezado 1**: `⌘⌥1`
- **Encabezado 2**: `⌘⌥2`
- **Encabezado 3**: `⌘⌥3`
- **Texto normal** (párrafo simple): `⌘⌥0`

También puedes escribir `/heading 1`, `/heading 2` o `/heading 3`. Los
encabezados alimentan el esquema del documento y el bloque
[Índice](#bloques-más-ricos).

## Listas

- **Lista con viñetas**: `⌘⇧8`, o `/bullet list`
- **Lista numerada**: `⌘⇧7`, o `/ordered list`
- **Lista de tareas**: `/task list`. Una lista de verificación con tres estados:
  pendiente, en curso, hecho.

## Citas y separadores

- **Cita**: `⌘⇧9`, o `/quote`. Para un pasaje citado destacado del texto que lo
  rodea.
- **Separador**: `/divider`. Una línea horizontal para separar secciones.

## Bloques de código

Para código de varias líneas, inserta un **bloque de código** con `/code block`.
Tiene resaltado de sintaxis y puedes fijar el lenguaje para que el resaltado
coincida. (Para unas pocas palabras de código dentro de una oración, usa el
código en línea.)

## Enlaces

- **Añadir un enlace**: selecciona texto y usa el botón de enlace en la barra de
  herramientas flotante (`⌘⇧K` desde el menú Formato), luego introduce la URL.
- **Detección automática**: pega o escribe una dirección web y φ la reconoce
  como un enlace.
- **Editar o quitar**: selecciona una palabra enlazada y abre de nuevo el control
  de enlace. Para editar, escribe una nueva URL; para quitar el enlace, borra el
  campo y confirma.

Los enlaces se abren en tu navegador predeterminado. Para seguir un enlace desde
dentro del editor, mantén `⌘` y haz clic (en
[modo lectura](the-editor.md#modo-lectura) un clic normal lo sigue).

## Escribir en Markdown

Si escribes Markdown por costumbre, sigue así: φ lo convierte en formato
mientras escribes.

- `#`, `##`, `###` y un espacio — un encabezado (`####` o más dan el más pequeño)
- `-`, `*` o `1.` y un espacio — una lista; `[] ` o `- [ ] ` — una tarea
  (`- [x] ` la empieza marcada)
- `>` y un espacio — una cita; luego `[!tip] ` la convierte en un aviso (`note`,
  `tip`, `warning`, `danger`)
- ` ``` ` — un bloque de código; `---` — un separador
- `**negrita**`, `*cursiva*`, `~~tachado~~`, `` `código` ``, `==resaltado==`
- `[texto](https://…)` — un enlace; `![alt](https://…)` — una imagen

**Desde Bear.** El Markdown propio de Bear llega como Bear lo entiende: `~texto~`
es un subrayado, `==🟢texto==` un resaltado verde (también 🟡 🔵 🟣 🔴),
`[[Nota|texto visible]]` y `[[Nota/Encabezado]]` enlazan a la nota, y las
`#etiquetas` —incluidas `#anidadas/etiquetas` y `#varias palabras#`— se añaden a
las etiquetas del documento. **⌥⇧⌘V** pega texto sin formato, como en Bear.

**Mostrar el Markdown.** Activa **Ajustes → Editor → Mostrar Markdown** para ver
los marcadores (`**`, `#`, `[…](…)` y demás) tenues alrededor del formato en la
línea que escribes. Desaparecen de las líneas que dejas y nunca forman parte de
tu texto: desactivar el ajuste no cambia nada del documento.

Las notas al pie también se pueden escribir al estilo Markdown: `^[la nota]` en
el texto, o `[^1]` con una línea `[^1]: la nota` más abajo.

**Pegar Markdown.** Pega texto copiado de un editor de Markdown o de otra app de
notas y llega con formato: encabezados, tareas, tablas, citas, avisos, código,
enlaces e imágenes. Cada línea es su propio párrafo y una `#palabra` sigue
siendo una palabra. El texto con formato de una página web o un procesador de
textos se pega como siempre. Para pegar el texto tal cual, usa **⇧⌘V**.

Lo pegado solo trae lo que el documento ofrece: una lista de tareas pegada en
un capítulo llega como lista con su `[ ]`, una tabla como una línea por fila, y
las páginas matutinas reciben párrafos simples.

**Copiar como Markdown.** Elige **Copiar como Markdown** en el menú ⋮ de un
documento o en la paleta de comandos (`⌘P`) para copiar la selección —o todo
el documento, si no hay nada seleccionado— como Markdown.

## Tablas

Inserta una tabla inicial con `/table`: una cuadrícula de 3×3 con una fila de
encabezado que puedes editar y ampliar desde ahí.

## Bloques más ricos

Más allá de la prosa estándar, φ incluye bloques pensados para libros, ensayos y
poesía. Insértalos desde el menú de barra. Algunos son herramientas de
**manuscrito** que aparecen en los documentos de escritura y de libro pero
quedan ocultas en la página minimalista del diario / páginas matinales; si no ves
alguno, comprueba el tipo de documento en el que estás.

| Bloque | Para qué sirve | Insertar con |
|---|---|---|
| **Aviso** | Una caja de info / consejo / advertencia / peligro para apartes y notas. | `/callout` |
| **Verso** | Un bloque de poema o verso que conserva tus saltos de línea duros y la sangría, para que la poesía mantenga su forma. | `/verse` |
| **Salto de escena** | Un separador centrado entre escenas de ficción: asterismo, estrellas, floral o un espacio en blanco. | `/scene break` |
| **Epígrafe** | Una cita inicial con una línea de atribución, para el comienzo de un capítulo o libro. | `/epigraph` |
| **Cita destacada** | Un extracto grande y prominente sacado para dar énfasis. | `/pull-quote` |
| **Capitular** | Una primera letra decorativa de gran tamaño. | `/drop cap` |
| **Imagen** | Una imagen con pie de foto editable, alineación y ancho ajustable arrastrando. El archivo se copia a la carpeta `assets/` de tu bóveda. | `/image` |
| **Índice** | Un esquema en vivo y clicable de los encabezados de este documento. Se regenera mientras editas. | `/table of contents` |
| **Bibliografía** | Una lista de referencias generada automáticamente de las fuentes citadas en el documento. | `/bibliography` |

También puedes soltar o pegar una imagen directamente en la página para
insertarla sin pie de foto.

### Elementos en línea

Algunos elementos van dentro de una línea en lugar de como su propio bloque:

| Elemento | Para qué sirve | Insertar con |
|---|---|---|
| **Nota al pie** | Una nota numerada. El marcador es un pequeño superíndice; al exportar las notas se reúnen al final (o como notas al pie nativas en Word). | `/footnote` |
| **Cita bibliográfica** | Una referencia en línea autor–año que apunta a una fuente en la biblioteca del documento. Edita la fuente una vez y cada cita se actualiza. | `/citation` |
| **Chip de fecha** | Una fecha (opcionalmente con una hora) que enlaza el documento a un día del calendario. | `/date` o `/date & time` |
| **@-mención** | Una referencia a un personaje por su nombre. | Escribe `@` |
| **Enlace wiki** | Un enlace cruzado `[[Título de la nota]]` a otra nota de tu bóveda. | Escribe `[[` |

Para más sobre estos elementos y cómo se comportan, consulta las guías
relacionadas: [Notas al pie y citas](footnotes-and-citations.md),
[Anotaciones](annotations.md) y [Enlaces y el grafo](links-and-graph.md).

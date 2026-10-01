---
title: Formato y bloques
---

# Formato y bloques

φ te da el formato cotidiano que esperarías (encabezados, listas, citas,
código, enlaces) más un conjunto de bloques más ricos pensados para manuscritos
y poesía. Da formato al texto desde la
[barra de herramientas flotante](the-editor.md#the-bubble-toolbar) o el menú
**Formato**, e inserta bloques desde el [menú de barra](the-editor.md#the-slash-menu)
(escribe `/`).

## Formato en línea {#inline-formatting}

Selecciona texto y aplica:

- **Negrita**: `⌘B`
- **Cursiva**: `⌘I`
- **Subrayado**: `⌘U`
- **Tachado**: desde **Más herramientas** (›) en la barra de herramientas o
  desde el menú Formato
- **Código en línea**: para fragmentos cortos dentro de una oración, desde los
  mismos sitios

:::tip Sal de la negrita o la cursiva escribiendo
Cuando activas la **negrita** o la *cursiva* y sigues escribiendo, no hace falta
volver a la barra de herramientas para detenerla. Termina la palabra y pulsa la
barra espaciadora una segunda vez: el primer espacio sigue formando parte de la
palabra con formato y el siguiente quita el formato, de modo que la palabra
siguiente queda en texto normal.
:::

## Encabezados y párrafos {#headings-and-paragraphs}

Tres niveles de encabezado estructuran un documento:

- **Encabezado 1**: `⌘⌥1`
- **Encabezado 2**: `⌘⌥2`
- **Encabezado 3**: `⌘⌥3`
- **Texto normal** (un párrafo simple): `⌘⌥0`

Desde el menú de barra, `/heading` muestra los tres, y `/h1`, `/h2` o `/h3` va
directamente a uno. `/text` convierte una línea de nuevo en un párrafo simple.
El botón **Encabezado** de la barra de herramientas flotante activa o desactiva
un encabezado mediano. Los encabezados alimentan el esquema del documento y el
bloque [Índice](#richer-blocks).

## Alineación {#alignment}

Los párrafos y encabezados se pueden alinear desde el menú Formato o desde
**Más herramientas** (›) en la barra de herramientas:

- **Alinear a la izquierda**
- **Centrar**: `⌘⇧E`
- **Alinear a la derecha**: `⌘⇧R`
- **Justificar**: `⌘⇧J`

## Listas {#lists}

- **Lista con viñetas**: `⌘⇧8`, o `/bullet`
- **Lista numerada**: `⌘⇧7`, o `/numbered`
- **Lista de tareas**: `/task` o `/checklist`. Una lista de verificación cuyos
  elementos pasan por tres estados: pendiente, en curso, hecho.

Las listas de tareas se ofrecen donde tienen sentido: en Notas y en las páginas
de investigación, por defecto. Un capítulo o un día del diario no las ofrecen.
Puedes cambiarlo para cada modo en **Ajustes → Ajustes de escritura → Modos →
Listas de tareas**. Un documento que ya contiene una lista de tareas siempre la
muestra, esté donde esté.

## Citas y separadores {#quotes-and-dividers}

- **Cita en bloque**: `⌘⇧9`, o `/quote`. Para un pasaje citado que se destaca
  del texto que lo rodea.
- **Separador**: `/divider`. Una línea horizontal para separar secciones.

## Bloques de código {#code-blocks}

Para código de varias líneas, inserta un **bloque de código** con `/code`. φ
reconoce el lenguaje y lo resalta por ti. Si escribes el bloque al estilo
Markdown, con el lenguaje tras la valla de apertura (` ```python `), se usa ese
lenguaje.

Dentro de un bloque de código, `Tab` aumenta la sangría y `⇧Tab` la reduce, y
`Enter` mantiene la sangría de la línea actual. Elige cómo se sangra en
**Ajustes → Editor → Código**: **Sangrar con** (**Espacios** o
**Tabulaciones**) y **Ancho de sangría**.

Para unas pocas palabras de código dentro de una oración, usa mejor el código en
línea.

## Enlaces {#links}

- **Añadir un enlace**: selecciona texto y usa **Enlace** en la barra de
  herramientas flotante (o **Formato → Enlace…**, `⌘⇧K`) y luego escribe la
  dirección web.
- **Detección automática**: escribe o pega una dirección web y φ la reconoce
  como enlace.
- **Editar o quitar**: selecciona las palabras enlazadas y vuelve a usar
  **Enlace**. Escribe una dirección nueva para cambiarla, o vacía el campo para
  quitar el enlace.

Los enlaces se abren en tu navegador predeterminado. Para seguir un enlace
mientras editas, mantén pulsado `⌘` y haz clic; en el
[modo de lectura](the-editor.md#reading-mode) basta un clic normal.

Para enlazar a otro documento de tu bóveda, usa en su lugar un enlace wiki:
consulta [Enlaces y el grafo](links-and-graph.md).

## Escribir en Markdown {#writing-in-markdown}

Si escribes Markdown por costumbre, sigue haciéndolo: φ lo convierte en formato
mientras escribes.

- `#`, `##`, `###` y un espacio: un encabezado (`####` y niveles más profundos
  dan el más pequeño)
- `-`, `*` o `1.` y un espacio: una lista; `[] ` o `- [ ] `: un elemento de lista
  de tareas (`- [x] ` lo empieza marcado), donde se ofrecen listas de tareas
- `>` y un espacio: una cita; después `[!tip] ` la convierte en un aviso (`note`,
  `tip`, `warning`, `danger`), donde se ofrecen avisos
- ` ``` `: un bloque de código; `---`: un separador
- `**negrita**`, `*cursiva*`, `~~tachado~~`, `` `código` ``, `==resaltado==`
- `[texto](https://…)`: un enlace; `![alt](https://…)`: una imagen

**Markdown de otras aplicaciones de notas.** Algunas aplicaciones escriben su
propia variante de Markdown, y φ la lee tal como la entienden ellas: `~texto~`
es un subrayado, `==🟢texto==` un resaltado verde (también 🟡 🔵 🟣 🔴),
`[[Nota|texto mostrado]]` y `[[Nota/Encabezado]]` enlazan a la nota, y las
`#etiquetas` (incluidas `#etiquetas/anidadas` y `#varias palabras#`) se añaden a
las etiquetas del documento. `⌥⇧⌘V` pega texto sin formato, igual que `⇧⌘V`.

**Mostrar el Markdown.** Activa **Ajustes → Editor → Mostrar Markdown** para ver
las marcas (`**`, `#`, `[…](…)` y demás) tenues alrededor del formato en la
línea que estás escribiendo. Desaparecen de las líneas que dejas atrás y nunca
forman parte de tu texto: desactivar el ajuste no cambia nada en el documento.

**Pegar Markdown.** Pega texto copiado de un editor de Markdown o de otra
aplicación de notas y llega con formato: encabezados, listas de tareas, tablas,
citas, avisos, código, enlaces e imágenes. Cada línea se convierte en su propio
párrafo, y una `#palabra` sigue siendo una palabra. Las notas al pie también se
conservan, tanto si están escritas como `^[la nota]` en el texto como si usan
`[^1]` con una línea `[^1]: la nota` debajo. El texto con formato de una página
web o de un procesador de textos se pega como siempre. Para pegar el texto
exactamente como está, usa `⇧⌘V`.

Al pegar solo llega lo que el documento ofrece: una lista de tareas pegada en un
capítulo llega como lista conservando sus `[ ]`, una tabla como una línea por
fila, y las páginas matutinas reciben párrafos simples.

**Copiar como Markdown.** Elige **Copiar como Markdown** en la paleta de
comandos (`⌘P`) para poner la selección (o el documento entero, si no hay nada
seleccionado) en el portapapeles como Markdown. También está en el menú ⋮ de un
documento y en su menú contextual de la lista, donde copia el documento entero.

## Tablas {#tables}

Inserta una tabla inicial con `/table`: una cuadrícula de 3×3 con una fila de
encabezado que puedes editar y ampliar a partir de ahí. Arrastra el borde de una
columna para hacerla más ancha o más estrecha.

Las tablas se ofrecen en las notas y en Escribir, pero no en las entradas del
diario.

## Fechas y horas {#dates-and-times}

- `/date` inserta la fecha de hoy como una **ficha de fecha**, que enlaza el
  documento con ese día en el [calendario](calendar.md).
- `/datetime` inserta la fecha y la hora actual como una ficha.
- `/time` inserta la hora actual como texto simple.

Haz clic en una ficha de fecha para abrir ese día en el calendario. El pequeño
lápiz a su lado (**Editar fecha y hora**) te permite cambiar la fecha, o añadir
o quitar la hora.

## Bloques más ricos {#richer-blocks}

Más allá de la prosa estándar, φ tiene bloques pensados para libros, ensayos y
poesía. Insértalos desde el menú de barra.

| Bloque | Para qué sirve | Se inserta con |
|---|---|---|
| **Aviso** | Un recuadro de información, consejo, advertencia o peligro para comentarios al margen. Cambia su tipo con los pequeños botones que aparecen al pasar el puntero. | `/callout` |
| **Imagen** | Una imagen con un pie editable. Elige izquierda, centro, derecha o ancho completo desde su barra de herramientas, y arrastra su borde para cambiar su tamaño. El archivo se copia en tu bóveda. | `/image` |
| **Verso** | Un bloque de poema o verso que conserva tus saltos de línea y espaciado. `Enter` empieza una línea nueva dentro del verso; `⌘↩` sale a un párrafo debajo. | `/verse` |
| **Salto de escena** | Un separador centrado entre escenas: asterismo, estrellas, florón o espacio en blanco. | `/scene` |
| **Epígrafe** | Una cita de apertura con una línea de atribución, para el comienzo de un capítulo o libro. | `/epigraph` |
| **Cita destacada** | Un fragmento grande y prominente extraído para dar énfasis. | `/pull-quote` |
| **Capitular** | Una primera letra decorativa de gran tamaño para el párrafo. | `/drop` |
| **Índice** | Un esquema vivo y clicable de los encabezados de este documento. Se actualiza mientras editas. | `/toc` |
| **Bibliografía** | Una lista de referencias construida a partir de las fuentes citadas en el documento. | `/bibliography` |

**Aviso** e **Imagen** están disponibles en las notas y en Escribir (las
imágenes también en el diario). El resto, de **Verso** hacia abajo, son bloques
de manuscrito: se ofrecen en los documentos que pertenecen a un proyecto, y se
ocultan en las notas, en las piezas fuera de un proyecto y en el diario. Un
documento que ya contiene uno siempre lo muestra.

### Elementos en línea {#inline-elements}

Algunos elementos se sitúan dentro de una línea en lugar de ser un bloque
propio:

| Elemento | Para qué sirve | Se inserta con |
|---|---|---|
| **Nota al pie** | Una nota numerada. φ te pide el texto de la nota y luego coloca una pequeña marca en superíndice. En documentos de un proyecto. | `/footnote` |
| **Cita bibliográfica** | Una referencia autor–año a una fuente de la biblioteca del documento. En documentos de un proyecto. | `/citation` |
| **Ficha de fecha** | Una fecha (opcionalmente con hora) que enlaza el documento con un día del calendario. | `/date` |
| **Mención con @** | Una referencia a un personaje. Elige uno de la lista, o elige **Create @nombre** (**Nuevo personaje**) para añadir uno a partir de lo que escribiste. | Escribe `@` |
| **Enlace wiki** | Un enlace `[[Título]]` a otro documento de tu bóveda. | Escribe `[[` |

Para saber más, consulta
[Notas al pie y citas](footnotes-and-citations.md),
[Personajes y autores](characters-and-authors.md),
[Anotaciones](annotations.md) y [Enlaces y el grafo](links-and-graph.md).

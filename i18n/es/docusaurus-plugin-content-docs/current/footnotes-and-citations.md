---
title: Notas al pie y citas
---

# Notas al pie y citas

Cuando tu escritura necesita un aparato crítico (un comentario al pie de la
página, una fuente reconocida en el texto, una lista de referencias al final),
φ lo trae incorporado. Las notas al pie y las citas forman parte del documento,
así que sobreviven a cada exportación y aparecen en el lugar correcto del libro
terminado.

<img src="/img/app/footnotes-light.png" alt="Marcas de notas al pie en la prosa, listadas en el panel de al lado" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="Marcas de notas al pie en la prosa, listadas en el panel de al lado" width="1600" height="1000" loading="lazy" decoding="async" />

:::note
Las notas al pie, las citas y la bibliografía son herramientas de manuscrito,
así que se ofrecen en los documentos que pertenecen a un
[proyecto](collections.md). No aparecen en el menú de barra de una nota, de una
pieza fuera de un proyecto ni de una entrada del diario.
:::

## Notas al pie {#footnotes}

Una nota al pie es una pequeña marca numerada en tu texto con una nota adjunta.
La marca solo muestra el número; el texto de la nota se guarda aparte para que
nunca interrumpa la línea que estás leyendo.

### Insertar una nota al pie {#inserting-a-footnote}

Escribe `/footnote` y pulsa `Enter`. φ te pide el texto de la **Nota al pie**;
escríbelo y confirma, y aparece una marca numerada en el cursor. La numeración
es automática y se mantiene en orden: inserta una nota al pie antes en el
documento y todo lo que viene después se renumera solo.

Pasa el puntero sobre una marca para leer su nota. Haz clic en la marca para
editar el texto.

### La lista de notas al pie {#the-footnote-list}

Todas las notas al pie del documento aparecen en el Panel de información
(`⇧⌘I`), en la pestaña **Esquema**, bajo **Notas al pie · N**:

- **Edita** una nota escribiendo en su cuadro (**Texto de la nota al pie…**).
- **Ir al marcador**: haz clic en su número para ir a ella en el texto, algo
  útil en un documento largo.
- **Eliminar nota al pie**: el icono de la papelera. Las notas al pie restantes
  se renumeran automáticamente.

Si aún no hay notas al pie, la lista dice **Aún no hay notas al pie. Inserta
una con /footnote.** En el modo de lectura es de solo lectura.

### Cómo se exportan las notas al pie {#how-footnotes-export}

Dónde acaba una nota al pie depende del formato:

- **PDF**: al pie de la página en la que está su marca, como en un libro
  impreso.
- **Word** y **RTF**: notas al pie reales, que el procesador de textos coloca y
  numera por sí mismo.
- **EPUB**: notas al pie que los lectores electrónicos muestran en una ventana
  emergente al tocar la marca.
- **HTML**: reunidas como notas finales al final, cada una enlazada de vuelta a
  su marca.
- **Markdown**: escritas en línea como `^[la nota]`.

Cuando exportas un proyecto entero, el estilo de exportación decide si las notas
al pie van al pie de la página o se reúnen al final, y si la numeración es
continua en todo el libro o se reinicia en cada capítulo. Consulta
[Exportar](exporting.md).

## Citas {#citations}

Una cita reconoce una fuente en estilo autor–año, como `(Smith, 2020)`, tomada
de una pequeña **biblioteca de fuentes** que se guarda con el documento.
Construyes la biblioteca mientras escribes y luego reutilizas sus fuentes.

### Añadir una cita {#adding-a-citation}

Escribe `/citation` y pulsa `Enter`. Se abre el diálogo **Citar una fuente**:

- **Elige una fuente existente** de la lista para citarla en el cursor. Las
  fuentes se ordenan por el apellido del autor, y **Buscar fuentes…** filtra por
  autor, título o año.
- **Añade una fuente nueva** con **Nueva fuente**. Rellena **Autor** (p. ej.
  `Smith, Jane`), **Título**, **Año** y **URL (opcional)**, y luego haz clic en
  **Añadir y citar**. La fuente se guarda en la biblioteca y la cita se inserta
  en un solo paso.

Solo necesitas un autor *o* un título para guardar una fuente.

### Editar y gestionar fuentes {#editing-and-managing-sources}

Haz clic en cualquier cita del texto para volver a abrir el diálogo como
**Editar fuente**. Desde ahí puedes:

- **Editar los datos de la fuente** y **Guardar**. Todas las citas que apuntan a
  la fuente se actualizan.
- **Hacer que la cita apunte a otra fuente** eligiendo otra de la lista.
- **Eliminar fuente** para borrarla de la biblioteca.
- **Cancelar** para dejarlo todo como estaba.

Una cita cuya fuente se ha eliminado se imprime como `(?)`, así que es fácil de
detectar.

### Una biblioteca por documento, una bibliografía por libro {#one-library-per-document-one-bibliography-per-book}

El diálogo muestra las fuentes del documento en el que estás. Sin embargo, cuando
exportas un proyecto entero, las fuentes de todos sus documentos se reúnen en
una sola biblioteca, de modo que una cita se resuelve sin importar en qué parte
del libro se añadió su fuente, y la bibliografía enumera todo lo que el libro
cita.

## La bibliografía {#the-bibliography}

Una bibliografía es una lista de referencias construida a partir de tus citas;
nunca la escribes a mano. Escribe `/bibliography` y pulsa `Enter` para colocar
el bloque.

La lista incluye solo las fuentes que has citado de verdad, cada una con el
formato `Autor. (Año). Título. URL` y ordenadas alfabéticamente por el apellido
del autor. Las fuentes de la biblioteca que no has citado no aparecen. Cita una
fuente nueva y se une a la lista.

En una exportación a PDF o Word, **la bibliografía empieza en una página
propia**.

## Consulta también {#see-also}

- [Exportar](exporting.md): cómo se representan las notas al pie, las citas y la
  bibliografía en cada formato.
- [Proyectos](collections.md): exportar un libro entero.

---
title: Notas al pie y citas
sidebar_position: 16
---

# Notas al pie y citas

Cuando tu escritura necesita un aparato —un inciso al pie de la página, una
fuente acreditada en el texto, una lista de referencias al final— φ lo trae
incorporado. Las notas al pie y las citas forman parte del documento, así que
sobreviven a cada exportación y aterrizan en el lugar correcto del libro
terminado.

## Notas al pie

Una nota al pie es un pequeño marcador numerado en tu texto con una nota
adjunta. El marcador muestra solo el número; el texto de la nota vive a un lado
para que nunca rompa la línea que estás leyendo.

### Insertar una nota al pie

Escribe `/footnote` y elige **Nota al pie** en el menú de barra. φ coloca un
marcador numerado en el cursor. La numeración es automática y se mantiene en
orden — inserta una nota al pie antes en el documento y todo lo que va después se
renumera solo.

### El panel de Notas al pie

El marcador lleva el texto de la nota, pero no lo editas en línea. En su lugar,
abre el panel **Notas al pie** en la barra lateral derecha, donde cada nota al pie
del documento aparece en orden:

- **Edita** una nota escribiendo en su casilla de texto.
- **Salta a un marcador** haciendo clic en su número — útil en un documento
  largo.
- **Quita** una nota al pie con el icono de la papelera. Las notas restantes se
  renumeran automáticamente.

En modo lectura el panel es de solo lectura — puedes navegar pero no editar.

### Cómo se exportan las notas al pie

Dónde acaba una nota al pie depende del formato:

- **PDF** — verdaderas notas al pie por página. Cada nota queda fijada al pie de
  la página en la que está su marcador, con una fina línea por encima, como lo
  hace un libro impreso.
- **DOCX, EPUB, HTML, Markdown** — las notas se recopilan como notas finales (o la
  nota al pie nativa del formato, en el estilo `^[…]` de Markdown).

## Citas

Una cita acredita una fuente al estilo autor–año —`(Smith, 2020)`— extraída de
una pequeña **biblioteca de fuentes** que se guarda con el documento. Construyes
la biblioteca a medida que escribes y luego reutilizas las fuentes a lo largo del
documento.

### Añadir una cita

Escribe `/citation` y elige **Cita bibliográfica**. Se abre el diálogo de citas:

- **Elige una fuente existente** de la lista para citarla en el cursor. Las
  fuentes se ordenan por el apellido del autor; la casilla de búsqueda filtra por
  autor, título o año.
- **Añade una fuente nueva** con **Nueva fuente**. Rellena **Autor** (p. ej.
  `Smith, Jane`), **Título**, **Año** y una **URL** opcional, luego **Añadir y
  citar**. La fuente se guarda en la biblioteca y la cita se inserta en un solo
  paso.

Solo necesitas un autor *o* un título para guardar una fuente.

### Editar y gestionar fuentes

Haz clic en cualquier cita del texto para reabrir el diálogo en modo edición.
Desde ahí puedes:

- **Editar los detalles de la fuente** — autor, título, año, URL. El cambio
  actualiza todas las citas que apuntan a esa fuente.
- **Cambiar la cita a otra fuente** eligiendo otra de la lista.
- **Eliminar la fuente** por completo con **Eliminar fuente**.

La biblioteca de fuentes pertenece al documento, así que una fuente definida en un
documento no se comparte con otro.

## La bibliografía

Una bibliografía es una lista de referencias generada a partir de tus citas —
nunca la escribes a mano. Escribe `/bibliography` y elige **Bibliografía** para
colocar el bloque.

La lista se construye automáticamente a partir de las fuentes que realmente has
citado: cada entrada se formatea como `Author. (Year). Title. URL`, y las entradas
se ordenan alfabéticamente por el apellido del autor. Las fuentes de la biblioteca
que no has citado no aparecen. Cita una fuente nueva y se añade la próxima vez que
la lista se genere.

Cuando exportas un libro o manuscrito, **la bibliografía se abre en su propia
página al final** — sin páginas en blanco sueltas antes de ella en el PDF.

## Véase también

- [Exportar e imprimir](exporting.md) — cómo se generan las notas al pie, las
  citas y la bibliografía en cada formato.
- [Colecciones (libros y manuscritos)](collections.md) — exportar un libro
  entero.

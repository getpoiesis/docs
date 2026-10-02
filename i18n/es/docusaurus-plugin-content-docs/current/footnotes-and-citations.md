---
title: Notas al pie y citas
description: Notas al pie de la página, fuentes reconocidas en el texto y una bibliografía construida a partir de ellas.
---

# Notas al pie y citas

Cuando un libro necesita un aparato crítico (un comentario al pie de la página,
una fuente reconocida en el texto, una lista de obras citadas), φ lo trae
incorporado. Las notas al pie y las citas forman parte del documento, así que
llegan a cada exportación y aparecen donde un lector las espera.

<img src="/img/app/footnotes-light.png" alt="Un capítulo con una marca de nota al pie en su texto, y el Esquema del panel de información con las dos notas al pie del capítulo" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="Un capítulo con una marca de nota al pie en su texto, y el Esquema del panel de información con las dos notas al pie del capítulo" width="1600" height="1000" loading="lazy" decoding="async" />

## Añadir una nota al pie {#add-a-footnote}

1. Pon el cursor donde debe ir la marca.
2. Escribe `/footnote` y pulsa `Enter`.
3. Escribe la nota en el cuadro **Nota al pie** y confirma.

Aparece un pequeño número en el texto. φ numera las notas al pie en orden:
añade una antes en el documento y las que vienen después se renumeran solas.

Las notas al pie, las citas y la bibliografía se ofrecen en los documentos que
pertenecen a un [proyecto](./collections), no en las notas, las piezas fuera
de un proyecto ni el diario.

## Leer y editar tus notas al pie {#read-and-edit-your-footnotes}

Pasa el puntero sobre una marca para leer su nota, y haz clic en ella para
cambiar el texto.

Todas las notas al pie aparecen también en el panel de información (`⌘⇧I`), en
**Esquema**, bajo **Notas al pie**:

- Escribe en el cuadro de una nota (**Texto de la nota al pie…**) para
  editarla.
- Haz clic en su número (**Ir al marcador**) para ir a ella en el texto.
- La papelera (**Eliminar nota al pie**) la quita, y las demás se renumeran.

## Citar una fuente {#cite-a-source}

1. Escribe `/citation` y pulsa `Enter`. Se abre **Citar una fuente**.
2. Elige una fuente de la lista, o búscala con **Buscar fuentes…**.
3. Para una nueva, elige **Nueva fuente**, rellena **Autor** (como *Smith,
   Jane*), **Título**, **Año** y **URL (opcional)**, y luego **Añadir y
   citar**.

La cita aparece en el texto en forma autor–año, como *(Smith, 2020)*. A una
fuente le basta con un autor o un título.

Haz clic en una cita para cambiarla. El diálogo se abre como **Editar
fuente**: edita los datos y **Guardar** (todas las citas de esa fuente se
actualizan), elige otra fuente, o **Eliminar fuente**. Una cita cuya fuente ya
no existe se muestra como *(?)*, así que es fácil de encontrar.

Cada documento guarda su propia lista de fuentes. Cuando exportas el proyecto,
se reúnen las listas de todos sus documentos, de modo que una cita encuentra
su fuente sin importar en qué parte del libro se añadió.

## Añadir una bibliografía {#add-a-bibliography}

Escribe `/bibliography` donde debe ir la lista. Incluye solo las fuentes que
has citado, en orden alfabético por apellido, cada una como *Autor. (Año).
Título. URL*, y se actualiza a medida que citas. En un PDF o un archivo de
Word, la bibliografía empieza en una página propia.

## Cómo se exportan {#how-they-export}

| Formato | Notas al pie |
| --- | --- |
| **Libro impreso y PDF** | Al pie de la página en la que está su marca. |
| **Word** y **Texto enriquecido** | Notas al pie reales, que el procesador de textos coloca y numera. |
| **Libro electrónico** | Notas que las apps de lectura abren al tocar la marca. |
| **Página web** | Reunidas al final, cada una enlazada de vuelta a su marca. |
| **Markdown** | Escritas en el texto como `^[the note]`. |

## Ver también {#see-also}

- [Formato y bloques](./formatting-and-blocks)
- [Proyectos](./collections)
- [Cómo funciona la exportación](./exporting)

---
title: Notas al pie y citas
description: Notas al pie de la página, fuentes citadas en el texto y una bibliografía que se compone con ellas.
---

# Notas al pie y citas

φ Poiesis puede añadir tres cosas que un libro a veces necesita: una nota al pie de
la página, una cita que nombra una fuente dentro del texto y una bibliografía
con las fuentes que has citado. Las tres forman parte del documento, de modo
que todas las exportaciones las incluyen, en el lugar donde el lector espera
encontrarlas.

<img src="/img/app/footnotes-light.png" alt="Un capítulo con la llamada de una nota al pie en el texto, y el Esquema del panel de Información con las dos notas al pie del capítulo" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="Un capítulo con la llamada de una nota al pie en el texto, y el Esquema del panel de Información con las dos notas al pie del capítulo" width="1600" height="1000" loading="lazy" decoding="async" />

Las notas al pie, las citas y la bibliografía solo están disponibles en los
documentos que pertenecen a un [proyecto](./collections). No lo están en las
notas, en las piezas que no forman parte de un proyecto ni en el diario.

## Añadir una nota al pie {#add-a-footnote}

1. Pon el cursor donde debe ir el número de la nota.
2. Escribe `/footnote` y pulsa `Intro`.
3. Escribe la nota en el cuadro **Nota al pie** y confirma.

En el texto aparece un número pequeño: la llamada. Poiesis numera las notas al pie
por orden. Si añades una nota más arriba en el documento, Poiesis vuelve a numerar
las que vienen después.

## Leer y editar las notas al pie {#read-and-edit-your-footnotes}

En el texto:

- Pasa el puntero por encima de una llamada para leer su nota.
- Haz clic en una llamada para cambiar el texto de la nota.

El panel de Información (`⌘⇧I`), el panel que está junto a tu página,
también muestra todas las notas al pie. Búscalas en **Esquema**, bajo **Notas
al pie**:

- Escribe en el cuadro de una nota (**Texto de la nota al pie…**) para
  editarla.
- Haz clic en su número (**Ir al marcador**) para ir a la llamada en el
  texto.
- Haz clic en la papelera (**Eliminar nota al pie**) para quitar la nota. Poiesis
  vuelve a numerar las demás.

## Citar una fuente {#cite-a-source}

1. Pon el cursor donde debe ir la cita.
2. Escribe `/citation` y pulsa `Intro`. Se abre **Citar una fuente**.
3. Elige una fuente de la lista. Para encontrarla, escribe en **Buscar
   fuentes…**.
4. Si la fuente no está en la lista, elige **Nueva fuente**. Rellena
   **Autor** (con la forma *Smith, Jane*), **Título**, **Año** y **URL
   (opcional)**, y pulsa **Añadir y citar**.

<img src="/img/app/cite-a-source-light.png" alt="El cuadro para citar una fuente sobre un capítulo, con el campo de búsqueda, una fuente y la opción de crear otra" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/cite-a-source-dark.png" alt="El cuadro para citar una fuente sobre un capítulo, con el campo de búsqueda, una fuente y la opción de crear otra" width="1600" height="1000" loading="lazy" decoding="async" />

La cita aparece en el texto con el autor y el año, por ejemplo *(Smith,
2020)*. A una fuente le basta con tener autor o título.

Para cambiar una cita, haz clic en ella. El cuadro se abre con el título
**Editar fuente**. Puedes:

- Editar los datos y pulsar **Guardar**. Todas las citas de esa fuente
  cambian también.
- Elegir otra fuente.
- Pulsar **Eliminar fuente**.

Si se ha eliminado la fuente de una cita, la cita se muestra como *(?)*, para
que la localices fácilmente.

Cada documento guarda su propia lista de fuentes. Al exportar el proyecto, Poiesis
reúne las listas de todos sus documentos. Así, cada cita encuentra su fuente,
aunque la hayas añadido en otro documento del libro.

## Añadir una bibliografía {#add-a-bibliography}

Escribe `/bibliography` donde debe ir la lista.

- Solo incluye las fuentes que has citado.
- Las fuentes van en orden alfabético por apellido.
- Cada una se escribe así: *Autor. (Año). Título. URL*.
- La lista se actualiza a medida que añades citas.

En un PDF o en un archivo de Word, la bibliografía empieza en una página
nueva.

## Cómo se exportan {#how-they-export}

| Formato | Notas al pie |
| --- | --- |
| **Libro impreso y PDF** | Al pie de la página donde está su llamada. |
| **Word** y **Texto enriquecido** | Notas al pie de verdad, que el procesador de textos coloca y numera. |
| **Libro electrónico** | Notas que las aplicaciones de lectura abren al tocar la llamada. |
| **Página web** | Reunidas al final, cada una con un enlace que vuelve a su llamada. |
| **Markdown** | Escritas dentro del texto, así: `^[la nota]`. |

## Ver también {#see-also}

- [Formato y bloques](./formatting-and-blocks)
- [Proyectos](./collections)
- [Cómo funciona la exportación](./exporting)

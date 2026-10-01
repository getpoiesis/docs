---
title: Exportar e imprimir
---

# Exportar e imprimir

Tu escritura vive en archivos `.poiesis`, pero el mundo quiere PDF, archivos de
Word, libros electrónicos y Markdown. φ exporta a todos ellos: un solo documento
para compartir un borrador, o todo un proyecto compilado en una obra terminada.

Nada sale de tu ordenador en el proceso. Cada exportación se hace localmente y
se escribe en un archivo que eliges en un diálogo de Guardar normal.

:::warning La exportación es ahora mismo la parte más verde de φ

φ es software en fase alfa, y **la exportación (PDF, Word, EPUB y páginas web de
obras completas) es el área en la que más se está trabajando todavía.** Entra
con las expectativas adecuadas:

- **Trata cada exportación como un borrador, no como un archivo final.** Abre el
  resultado en tu procesador de textos, visor de PDF o lector de libros
  electrónicos y revísalo antes de confiar en él. Cuenta con tener que retocar
  un poco allí.
- **Las maquetaciones complejas son donde más sufre.** Muchas notas al pie,
  citas y bibliografías, estructuras profundas de partes y capítulos, imágenes,
  portadas a página completa y bloques poco habituales pueden salir
  imperfectos.
- **Tu original siempre está a salvo.** Exportar nunca cambia tus archivos
  `.poiesis`, así que puedes volver a exportar tantas veces como quieras, y cada
  versión mejora los exportadores.

Si una exportación sale mal, tus comentarios sobre *qué* documentos fallan y
*cómo* son lo más útil que puedes enviar durante la alfa.

:::

## Exportar un solo documento {#exporting-a-single-document}

Con un documento abierto, puedes exportarlo desde:

- la paleta de comandos (`⌘P`): **Exportar documento como** seguido del
  formato, por ejemplo **Exportar documento como Markdown (.md)…**;
- el menú ⋮ del documento, arriba a la derecha, que lista todos los formatos
  cerca del final; o
- la lista: haz clic derecho en el documento y abre el submenú de exportación.

φ pregunta dónde guardar, y ya está. Los formatos son:

| Formato | Ideal para |
| --- | --- |
| **Markdown (.md)** | Llevar el texto a un editor de Markdown o a un sitio estático, o archivarlo en texto plano. Conserva los avisos, los `==resaltados==` y las notas al pie. |
| **HTML page (.html)** | Una página web completa y autónoma. |
| **HTML fragment (.html)** | Solo el cuerpo, sin página alrededor, para pegarlo en un sitio o un gestor de contenidos que pone la suya. |
| **Rich Text (.rtf)** | Se abre con formato en casi cualquier procesador de textos, y en portales de envío que rechazan `.docx`. |
| **Plain text (.txt)** | Solo el título y las palabras, sin formato. |
| **TextPack (.textpack)** | Tu texto y sus imágenes juntos en un solo archivo, para pasar el trabajo a otra app de escritura. |

**Los enlaces wiki salen como texto plano.** Un `[[enlace]]` es una forma de
moverte por tu propia bóveda, y un lector sin la bóveda no tiene nada que
seguir, así que en todos los formatos un enlace wiki se convierte solo en su
título.

### Otras formas de sacar un documento {#other-ways-to-take-a-document-out}

- **Guardar una copia (.poiesis con imágenes)…**, en el menú ⋮ del documento, la
  paleta de comandos o **Archivo → Guardar una copia…**, guarda el documento
  como un único archivo `.poiesis` portátil con sus imágenes dentro. Úsalo para
  mover un documento a otra bóveda o para enviárselo a otra persona que escriba
  con φ.
- **Copiar como Markdown** pone el texto en el portapapeles como Markdown. En la
  paleta de comandos copia la selección, o el documento entero si no hay nada
  seleccionado; desde el menú contextual de un documento en la lista, copia el
  documento entero.

## Exportar un proyecto (un libro o un manuscrito) {#exporting-a-project-a-book-or-manuscript}

Un [proyecto](./collections.md) compila sus documentos, en el orden del esquema
e incluyendo partes y capítulos, en una obra terminada. Abre su página de
exportación desde cualquiera de estos sitios:

- **Exportar manuscrito…** en el menú ⋮ del proyecto (arriba de su lista);
- **Exportar manuscrito…** al hacer clic derecho en el proyecto en la barra
  lateral; o
- **Ir a → Exportar** en el Resumen del proyecto.

La página empieza con un resumen de lo que sale: cuántos capítulos (o poemas, o
ensayos), partes y materiales preliminares y finales sin numerar, el recuento de
palabras, la autoría y si hay portada.

### Elegir cómo se ve {#choosing-how-it-looks}

Cuatro opciones pertenecen a la propia obra, así que una novela y un artículo en
la misma bóveda pueden salir cada uno a su manera:

- **Estilo** define la página, la tipografía, el encabezado y dónde van las
  notas:
  - **As it looks in φ** (el predeterminado): la página se imprime tal como la
    muestra el editor, con la fuente que hayas elegido, márgenes de libro y un
    título corrido.
  - **Standard manuscript**: interlineado doble, 12 puntos, márgenes de una
    pulgada y un encabezado con tu apellido y el número de página. Lo que piden
    agentes y editoriales.
  - **Paperback**: un libro encuadernado, con márgenes en espejo para dejar
    sitio al lomo y la tipografía ajustada a una página pequeña, listo para
    impresión bajo demanda en formato Digest o Trade.
  - **Poetry**: el verso compuesto como verso, sin nada justificado ni con
    guiones, y con aire alrededor de cada poema.
  - **Academic paper**: interlineado doble con un margen amplio, notas al pie de
    página y una bibliografía con sangría francesa al final.
- **Papel** es la página en la que se imprime un PDF: **Carta**, **A4**,
  **A5**, **Digest** (5,5 × 8,5 in) o **Trade** (6 × 9 in). Los demás formatos
  se reajustan.
- **Índice** define la profundidad de la tabla de contenidos: **Como lo define
  el estilo**, **Ninguno**, o **Hasta el título 1**, **2** o **3**.
- **Tinta**: **Negra** imprime enlaces y citas en negro, para que ningún color
  del tema llegue a un archivo publicado; **Mantener el color de φ** los deja
  teñidos. Las imágenes conservan su color en ambos casos.

Si combinas un estilo con un papel que sus reglas no usan (un manuscrito
estándar en un formato de bolsillo, por ejemplo), φ te avisa, pero te deja
exportar igualmente.

### Formatos {#formats}

Cada formato tiene su propia fila. Haz clic en **Guardar…** en el que quieras:

| Formato | Lo que obtienes |
| --- | --- |
| **PDF** | Paginado para imprimir o para leer: portada, portadilla, índice y notas al pie al final de su propia página. |
| **Word** | El manuscrito como lo espera una editorial, y todavía editable. Usa estilos con nombre reales, así que se puede reestilizar. |
| **EPUB** | Un libro electrónico adaptable para lectores y tiendas. Conserva la misma identidad cada vez que exportas, así que un lector electrónico recuerda por dónde ibas, y declara el idioma en el que escribes. |
| **Página web** | Un solo archivo HTML con toda la obra, estilos e imágenes incluidos. |
| **Markdown** | Un solo archivo Markdown, con los capítulos y su numeración. |
| **Texto enriquecido** | Se abre con formato en casi cualquier procesador de textos, y en portales de envío que rechazan `.docx`. |
| **Una copia del proyecto** | Todo tal como lo guarda φ, en un solo archivo `.poiesis`, para mover la obra a otra bóveda o archivarla. |

Cada exportación compilada lleva la **imagen de portada** cuando el formato
admite una, construye su índice a partir de la estructura de la obra y puede
cerrar con una página **Sobre el autor** cuando el perfil de autor tiene una
biografía o una foto. La autoría viene del autor del proyecto.

Cuando el archivo se ha guardado, un pequeño aviso en la parte inferior de la
ventana lo indica y muestra dónde ha ido.

### Imprimir {#printing}

φ no imprime a través del diálogo de impresión del sistema. En su lugar, exporta
un **PDF** e imprímelo. Con **As it looks in φ**, el PDF sigue las convenciones
de un libro: las líneas se ajustan como las ajusta el editor, los capítulos y
las partes empiezan en una página nueva, cada nota al pie queda al final de la
página en la que está su marca (consulta
[Notas al pie y citas](./footnotes-and-citations.md)), y la bibliografía empieza
en una página nueva al final. Los demás estilos definen su propia página,
tipografía y encabezados.

## Importar {#importing}

φ lee trabajo de otras herramientas y de tus propias copias de seguridad.

- **Un documento o proyecto de φ.** Elige **Importar un documento φ
  (.poiesis)…** en la paleta de comandos, o **Archivo → Importar documento φ…**,
  y escoge un archivo `.poiesis` creado con **Guardar una copia** o **Una copia
  del proyecto**. Sus imágenes vienen con él. También puedes arrastrar un
  archivo `.poiesis` a la ventana de φ.
- **Archivos Markdown.** Elige **Importar archivo(s) Markdown…** en la paleta de
  comandos, o **Importar…** en el menú de la bóveda, arriba de la barra lateral,
  o en el menú ⋮ de la lista de Notas. φ lee archivos Markdown (`.md`) y de
  texto plano (`.txt`), incluidos el front matter, los títulos, las listas y
  tareas, los avisos, los resaltados, las notas al pie y los enlaces wiki.
- **Una carpeta de notas Markdown.** Elige **Importar carpeta Markdown → a la
  bóveda actual…** o **Importar carpeta Markdown → como bóveda nueva…** en la
  paleta de comandos. φ trae la carpeta entera, conservando sus subcarpetas.
  - Conserva la **fecha de creación original** de cada nota: a partir de una
    fecha en el archivo, del nombre de archivo de una nota diaria (como
    `2022_11_11`) o del historial git de la carpeta si lo tiene. Tu línea
    temporal sobrevive a la mudanza.
  - Reconecta el **grafo de `[[enlaces]]`**: decodifica los nombres de archivo
    codificados (páginas con espacio de nombres, y caracteres como `:` o `&`),
    respeta las propiedades `title::` y `alias::` para que una página se
    encuentre por su nombre real y por cualquier alias, y trata las `#etiquetas`
    como enlaces a páginas. Los enlaces inversos y el grafo funcionan con las
    notas importadas desde el primer momento.

## Ver también {#see-also}

- [Proyectos](./collections.md): cómo estructurar la obra que exportas.
- [Notas al pie y citas](./footnotes-and-citations.md): cómo salen las notas y
  las referencias en cada formato.
- [Bóvedas](./vaults.md): dónde llega el trabajo importado.

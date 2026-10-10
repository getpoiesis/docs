---
title: Cómo funciona la exportación
description: Adónde puede ir tu obra desde φ Poiesis y cómo llevarla hasta allí.
---

# Cómo funciona la exportación

Exportar es crear, a partir de lo que has escrito, un archivo que puedes usar
fuera de φ Poiesis. A partir de un proyecto, por ejemplo un libro, Poiesis puede crear:

- un libro listo para imprenta, con su cubierta;
- un libro electrónico;
- un manuscrito para un agente o una editorial;
- una copia para compartir.

Primero dices adónde va el libro. Después, Poiesis te muestra solo las opciones que
ese destino necesita.

<img src="/img/app/export-light.png" alt="La pestaña Exportar de un libro: los cuatro destinos, el diseño y el formato, la comprobación y los botones de exportación" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/export-dark.png" alt="La pestaña Exportar de un libro: los cuatro destinos, el diseño y el formato, la comprobación y los botones de exportación" width="1600" height="1000" loading="lazy" decoding="async" />

## Exporta un proyecto {#export-a-project}

1. Abre el proyecto en **Escribir**.
2. Elige **Exportar**, debajo del proyecto, en la barra lateral.
3. Elige el destino: **Libro impreso**, **Libro electrónico**, **Agente o
   editorial** o **Compartir una copia**.
4. Elige las opciones que te pide la pestaña. Mientras tanto, Poiesis revisa el
   libro y te indica lo que tengas que corregir.
5. Si antes quieres ver todas las páginas, elige **Vista previa**.
6. Pulsa el botón de exportar y elige dónde guardar el archivo.

Poiesis crea todos los archivos en tu ordenador. Exportar nunca modifica tus
documentos, así que puedes hacerlo tantas veces como quieras.

## Los cuatro destinos {#the-four-destinations}

| Destino | Qué obtienes | Más información |
| --- | --- | --- |
| **Libro impreso** | El PDF del interior y la cubierta completa para KDP, IngramSpark, Lulu y otros servicios de impresión bajo demanda. | [Imprimir un libro](./print-a-book.md) |
| **Libro electrónico** | Un EPUB para Apple Books, Kindle, Kobo y Google Play. | [Crear un libro electrónico](./make-an-ebook.md) |
| **Agente o editorial** | Tu manuscrito en el formato estándar de manuscrito, en Word o PDF. | [Enviar a un agente o editorial](./send-to-an-agent.md) |
| **Compartir una copia** | Un PDF para leer, un Word para seguir editando, una página web, Markdown, texto enriquecido o una copia del proyecto entero. | [Compartir una copia](./share-a-copy.md) |

Poiesis recuerda el destino y las opciones de cada proyecto.

## Comprueba antes de exportar {#check-before-you-export}

Mientras eliges las opciones, Poiesis va componiendo el libro en segundo plano, sin
guardar nada. Después, la pestaña te muestra lo que ha encontrado:

- el número de páginas y el ancho del lomo, si es un libro impreso;
- lo que haya que corregir. Por ejemplo: falta la cubierta, la imagen de
  cubierta es demasiado pequeña para imprimirse nítida, una imagen no tiene
  descripción o faltan datos de contacto en tu perfil de autor;
- o bien **Nada que corregir: está listo.**

Los avisos son de dos tipos:

- Unos son solo informativos. Por ejemplo: el lomo es demasiado estrecho para
  llevar el título. Puedes exportar igualmente.
- Otros señalan problemas que estropearían un archivo publicado. Por ejemplo:
  falta una imagen. No puedes exportar hasta que los corrijas.

## Las páginas propias del libro {#the-books-own-pages}

Son la portada, la página de créditos, la dedicatoria, el epígrafe, la página
«Otros títulos» y «Sobre el autor». No las escribes en un documento: Poiesis las
crea con los datos que introduces en el proyecto.

- La cubierta y la descripción se ponen en lo alto de la página del proyecto.
- Todo lo demás está en [Datos del libro](./book-details.md), en esa misma
  página.
- «Sobre el autor» sale del [perfil](./characters-and-authors.md) del primer
  autor.

## Exporta un solo documento {#export-a-single-document}

Para exportar un documento suelto, y no todo un proyecto:

1. Abre el documento.
2. Pulsa `⌘P` y elige **Exportar documento como…**, o abre el menú **⋮** del
   documento.
3. Elige un formato.

Los formatos son:

- PDF
- Word
- Markdown
- una página HTML
- un fragmento HTML (solo el cuerpo, para pegarlo en un sitio web)
- texto enriquecido
- texto sin formato
- TextPack

**Copiar como Markdown** copia al portapapeles, en Markdown, el texto del
documento o lo que tengas seleccionado. La copia no lleva título ni
*front matter*. Encontrarás este comando en la paleta de comandos (`⌘P`) y en el
menú **⋮** del documento.

Los enlaces entre tus propios documentos (`[[enlaces wiki]]`) se convierten en
texto normal en todos los formatos, porque un lector que no tiene tu bóveda no
podría seguirlos.

## Ver también {#see-also}

- [Vista previa](./preview.md): todas las páginas antes de exportar.
- [Diseños y cómo ajustarlos](./designs.md): el aspecto del libro.
- [Datos del libro](./book-details.md): lo que aparece en la portada y en la
  página de créditos.
- [Importar](./importing.md): cómo traer tu obra a Poiesis.

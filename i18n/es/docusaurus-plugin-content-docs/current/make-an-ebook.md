---
title: Crear un libro electrónico
description: Un EPUB para Apple Books, Kindle, Kobo y Google Play.
---

# Crear un libro electrónico

La pestaña **Libro electrónico** crea un EPUB, el archivo que acepta cualquier
tienda de libros electrónicos: Apple Books, Kindle (KDP), Kobo y Google Play.
Lleva tu cubierta, las páginas propias del libro y un índice que las
aplicaciones de lectura pueden usar, compuesto con el mismo diseño que el libro
impreso.

## Crear el archivo {#make-the-file}

1. Abre la página **Exportar** del proyecto y elige **Libro electrónico**.
2. Elige el **Diseño**. Es el mismo que usa el libro impreso, así que los dos
   coinciden.
3. Lee la comprobación y corrige lo que señale.
4. Elige **Vista previa** y luego **Libro electrónico** para hojearlo como lo
   haría una aplicación de lectura.
5. Pulsa **Exportar EPUB** y elige dónde guardarlo.

## En qué se diferencia un libro electrónico del impreso {#how-an-ebook-differs-from-print}

Cada lector elige su tamaño de letra, su fuente y su pantalla, así que un libro
electrónico **se adapta**: no hay páginas fijas, ni números de página, ni
cabeceras. Del diseño se conserva todo lo que no es la página:

- las tipografías, que φ incrusta en el archivo;
- cómo abren los capítulos: el número y el título del capítulo juntos, y luego
  una capitular o las primeras palabras en versalitas;
- el adorno entre escenas;
- la portada, la página de créditos, la dedicatoria, el epígrafe y «Sobre el
  autor».

## Qué buscan las tiendas {#what-the-stores-look-for}

La comprobación cubre aquello por lo que las tiendas rechazan un libro:

- **Una cubierta.** Las tiendas muestran el libro con ella. Debe tener al menos
  1600 píxeles en su lado largo; lo ideal son 2560. Fíjala en la parte superior
  de la página del proyecto.
- **Descripciones de las imágenes** (texto alternativo), para los lectores que
  no pueden verlas.
- **Un ISBN**, si tienes uno para el libro electrónico: añádelo como **ISBN
  (libro electrónico)** en [Datos del libro](./book-details). KDP y Google Play
  no lo necesitan.

El EPUB se valida con el estándar EPUB mientras se crea.

## Ver también {#see-also}

- [Vista previa](./preview): hojea el libro electrónico en un teléfono, una
  tableta o una pantalla.
- [Diseños y cómo ajustarlos](./designs)
- [Imprimir un libro](./print-a-book)

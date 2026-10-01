---
title: Imprimir un libro
description: El PDF del interior y la cubierta completa para KDP, IngramSpark y otros servicios de impresión bajo demanda.
---

# Imprimir un libro

La pestaña **Libro impreso** crea los dos archivos que pide un servicio de
impresión bajo demanda: el interior, como PDF listo para imprenta, y la
cubierta, con portada, lomo y contracubierta en una sola página. φ calcula los
márgenes, las páginas en blanco antes de los capítulos y el lomo a partir del
número de páginas.

<img src="/img/app/export-light.png" alt="La pestaña Libro impreso: diseño, formato, papel y tinta, la comprobación, y Exportar cubierta y Exportar PDF para imprenta" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/export-dark.png" alt="La pestaña Libro impreso: diseño, formato, papel y tinta, la comprobación, y Exportar cubierta y Exportar PDF para imprenta" width="1600" height="1000" loading="lazy" decoding="async" />

## Crear los archivos {#make-the-files}

1. Abre la página **Exportar** del proyecto y elige **Libro impreso**.
2. Elige las cuatro cosas que pide un servicio de impresión:
   - **Diseño**: cómo se compone el libro (consulta [Diseños](./designs)).
   - **Formato**: el tamaño de la página impresa.
   - **Papel**: **Blanco** o **Crema**.
   - **Tinta**: **Negra**, o mantener el color de φ.
3. Lee la comprobación que aparece debajo de las opciones y corrige lo que
   señale.
4. Pulsa **Exportar PDF para imprenta** para el interior.
5. Pulsa **Exportar cubierta** para la cubierta completa.
6. Sube los dos archivos a tu servicio de impresión por separado.

## Elegir el formato {#choosing-the-trim-size}

| Formato | Habitual para |
| --- | --- |
| **5 × 8 in (12,7 × 20,3 cm)** | Libros de bolsillo de gran tirada |
| **5,25 × 8 in (13,3 × 20,3 cm)** | Novelas más cortas |
| **Digest: 5,5 × 8,5 in** | Novela, memorias, poesía |
| **Trade: 6 × 9 in** | La mayoría de la ficción y la no ficción; la opción segura |
| **6,14 × 9,21 in (15,6 × 23,4 cm)** | No ficción de mayor formato |
| **7 × 10 in (17,8 × 25,4 cm)** | Cuadernos de ejercicios y libros ilustrados |
| **Carta: 8,5 × 11 in** | Manuales y libros de gran formato |

Son los tamaños que imprimen KDP e IngramSpark. Si un proyecto está configurado
con un papel que no imprimen (A4, por ejemplo), la pestaña lo indica y te pide
que elijas uno.

## Papel y tinta {#paper-and-ink}

El **Crema** es habitual en ficción y el **Blanco** en no ficción. El crema es
algo más grueso, así que el mismo libro tiene un lomo más ancho.

Los enlaces y las citas se imprimen en negro de forma predeterminada, para que
ningún color de pantalla llegue a una página impresa. Las imágenes conservan su
color en ambos casos. Elige **Mantener el color de φ** solo si vas a pagar por
impresión en color.

## De qué se encarga φ {#what-φ-takes-care-of}

- **Los capítulos abren en página impar.** φ añade la página en blanco anterior
  cuando un diseño lo pide. Puedes desactivarlo en **Ajustar el diseño**.
- **Márgenes para la encuadernación.** El margen interior crece con el número de
  páginas, como exigen los servicios de impresión, para que el texto no quede
  pegado al lomo.
- **Límites de páginas.** Un libro de bolsillo necesita al menos 24 páginas y
  admite como máximo 828; la comprobación te avisa si el libro queda fuera de
  ese rango.
- **Sin cubierta dentro del interior.** La cubierta es un archivo aparte.
- **Notas al pie al final de su página**, y cabeceras y números de página tal
  como los fija el diseño, sin ninguno en las aperturas de capítulo.

## La cubierta {#the-cover}

**Exportar cubierta** crea un solo PDF con la contracubierta, el lomo y la
portada, más el octavo de pulgada de sangrado que los servicios de impresión
recortan.

- **La portada** es tu imagen de cubierta, que se fija en la parte superior de
  la página del proyecto.
- **La contracubierta y el lomo** toman su color de la imagen de cubierta. La
  contracubierta lleva la descripción del libro y la biografía breve del primer
  autor, y deja libre la esquina donde va el código de barras.
- **El lomo** se dimensiona según el número de páginas y el papel. A partir de
  80 páginas lleva el título y el autor; por debajo es demasiado estrecho y
  queda liso.

La comprobación avisa cuando la imagen de cubierta es demasiado pequeña para
imprimirse con nitidez: una cubierta impresa necesita unos 300 píxeles por
pulgada.

:::tip Pide una prueba impresa

Antes de publicar, pide una prueba impresa a tu servicio de impresión. Es la
única forma de ver los colores, los márgenes y el lomo como los verá un lector.

:::

## Ver también {#see-also}

- [Vista previa](./preview): todas las páginas del libro, en pliegos.
- [Diseños y cómo ajustarlos](./designs)
- [Datos del libro](./book-details): la portada, la página de créditos y el
  ISBN.
- [Crear un libro electrónico](./make-an-ebook): el mismo libro para
  aplicaciones de lectura.

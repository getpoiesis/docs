---
title: Imprimir un libro
description: El PDF del interior y la cubierta completa para KDP, IngramSpark y otros servicios de impresión bajo demanda.
---

# Imprimir un libro

Un servicio de impresión bajo demanda pide dos archivos. La pestaña **Libro
impreso** crea los dos:

- el **interior**: las páginas del libro, en un PDF listo para imprenta;
- la **cubierta**: la cubierta delantera, el lomo y la contracubierta en una
  sola página.

φ Poiesis calcula los márgenes y las páginas en blanco que van antes de los capítulos.
También calcula el ancho del lomo a partir del número de páginas.

<img src="/img/app/print-book-light.png" alt="La pestaña de libro impreso: diseño, formato, papel y tinta, la comprobación y los dos botones de exportación" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/print-book-dark.png" alt="La pestaña de libro impreso: diseño, formato, papel y tinta, la comprobación y los dos botones de exportación" width="1600" height="1000" loading="lazy" decoding="async" />

## Crea los archivos {#make-the-files}

1. Abre la página **Exportar** del proyecto (consulta
   [Cómo funciona la exportación](./exporting.md)) y elige **Libro impreso**.
2. Elige las cuatro cosas que pide un servicio de impresión:
   - **Diseño**: el aspecto del libro (consulta [Diseños y cómo ajustarlos](./designs.md)).
   - **Formato**: el tamaño de la página impresa.
   - **Papel**: **Blanco** o **Crema**.
   - **Tinta**: **Negra** o **Mantener el color de φ**.
3. Lee la comprobación que aparece debajo de las opciones y corrige lo que
   indique.
4. Pulsa **Exportar PDF para imprenta** para crear el interior.
5. Pulsa **Exportar cubierta** para crear la cubierta.
6. Sube los dos archivos a tu servicio de impresión. Se suben por separado.

## Elige el formato {#choosing-the-trim-size}

| Formato | Habitual en |
| --- | --- |
| **5 × 8 in (12,7 × 20,3 cm)** | Libros de bolsillo |
| **5,25 × 8 in (13,3 × 20,3 cm)** | Novelas cortas |
| **Digest: 5,5 × 8,5 in** | Novela, memorias, poesía |
| **Trade: 6 × 9 in** | Casi toda la ficción y la no ficción; la opción segura |
| **6,14 × 9,21 in (15,6 × 23,4 cm)** | No ficción de mayor tamaño |
| **7 × 10 in (17,8 × 25,4 cm)** | Cuadernos de ejercicios y libros ilustrados |
| **Carta: 8,5 × 11 in** | Manuales y libros de gran formato |

Estos son los formatos que imprimen KDP e IngramSpark. Si un proyecto tiene un
tamaño de papel que no imprimen, como A4, la pestaña te avisa y te pide que
elijas uno de estos.

## Papel y tinta {#paper-and-ink}

El papel **Crema** es el habitual en ficción, y el **Blanco**, en no ficción.
El papel crema es algo más grueso, así que con él el mismo libro tiene el lomo
más ancho.

De forma predeterminada, los enlaces y las citas se imprimen en negro. Así,
ningún color de tu pantalla acaba en una página impresa. Las imágenes
conservan siempre su color. Elige **Mantener el color de φ** solo si vas a
pagar una impresión en color.

## De qué se encarga Poiesis {#what-Poiesis-takes-care-of}

- **Los capítulos empiezan en página impar.** Cuando el diseño lo pide, Poiesis
  añade una página en blanco antes del capítulo allí donde hace falta. Puedes
  desactivarlo en **Ajustar el diseño**.
- **Márgenes para la encuadernación.** Cuantas más páginas tiene un libro, más
  ancho es su margen interior, para que el texto no se pierda en el lomo. Los
  servicios de impresión lo exigen.
- **Límites de páginas.** Un libro en rústica necesita 24 páginas como mínimo
  y puede tener 828 como máximo. La comprobación te avisa si tu libro tiene
  menos o más.
- **El interior no incluye la cubierta.** La cubierta es un archivo aparte.
- **Las notas al pie** van al pie de su página.
- **Las cabeceras y los números de página** siguen el diseño. La primera
  página de un capítulo no los lleva.

## La cubierta {#the-cover}

**Exportar cubierta** crea un único PDF con la contracubierta, el lomo y la
cubierta delantera. Le añade la sangre: un octavo de pulgada de más en todo el
borde, que el servicio de impresión recorta.

- **La cubierta delantera** es tu imagen de cubierta. La pones en lo alto de
  la página del proyecto.
- **La contracubierta y el lomo** toman su color de la imagen de cubierta.
- **La contracubierta** lleva la descripción del libro y la biografía breve
  del primer autor. La esquina donde va el código de barras queda vacía.
- **El lomo** se calcula a partir del número de páginas y del papel. A partir
  de 80 páginas, lleva el título y el autor. Con menos de 80, el lomo es
  demasiado estrecho para llevar texto y queda liso.

La comprobación te avisa cuando la imagen de cubierta es demasiado pequeña
para imprimirse nítida. Una cubierta impresa necesita unos 300 píxeles por
pulgada.

:::tip Pide un ejemplar de prueba

Antes de publicar, pide a tu servicio de impresión un ejemplar de prueba
impreso. Es la única manera de ver los colores, los márgenes y el lomo como
los verá un lector.

:::

## Ver también {#see-also}

- [Vista previa](./preview.md): todas las páginas del libro, en páginas
  enfrentadas.
- [Diseños y cómo ajustarlos](./designs.md)
- [Datos del libro](./book-details.md): la portada, la página de créditos y el
  ISBN.
- [Crear un libro electrónico](./make-an-ebook.md): el mismo libro para
  aplicaciones de lectura.

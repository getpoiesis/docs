---
title: Colecciones (libros y manuscritos)
sidebar_position: 7
---

# Colecciones (libros y manuscritos)

Una **colección** reúne documentos en una secuencia ordenada — la estructura de
un libro, un volumen de poesía, un conjunto de ensayos, un guion. Es como φ se
convierte en un editor de manuscritos en lugar de un simple cuaderno.

Una colección *referencia* documentos; no los contiene. El mismo documento puede
aparecer en más de una colección, y **eliminar una colección nunca elimina sus
documentos** — permanecen en tu biblioteca. La colección guarda el orden, la
estructura y la portada; la escritura se queda donde vive.

Abre el espacio **Escribir** (el icono de libro en el riel izquierdo) para
trabajar con colecciones.

## Crear una colección

En el espacio Escribir, haz clic en el **+** del encabezado de Colecciones para
crear una nueva. Cada colección muestra su tipo, la firma del autor, el número de
documentos y el recuento de palabras (frente a su meta, si está definida). Haz
clic en el nombre de una colección para abrirla.

Usa el menú **⋯** de una colección para añadir el documento actual, renombrarla,
abrirla para editar o eliminarla.

## Tipos de colección

El **tipo** de una colección tiñe su vocabulario —cómo llama φ a los elementos de
dentro— y da forma a sus exportaciones. Los tipos son:

- **Libro** — estructurado en *Capítulos* (agrupados en *Partes*).
- **Serie** — varios libros.
- **Poesía** — *Poemas*.
- **Colección de ensayos** — *Ensayos*.
- **Investigación** — material de investigación.
- **Diario** — *Entradas* con fecha.
- **Guion** — *Escenas* (agrupadas en *Actos*).
- **Personalizado** — *Secciones* y *Grupos* genéricos.

Cambia el tipo en cualquier momento desde la página de la colección. La estructura
que construiste se conserva; solo cambian las etiquetas.

## El árbol de estructura

Una colección es un **árbol recursivo** sin límite de profundidad. Un libro podría
ser:

```
Book
 └─ Part
     └─ Chapter
         └─ (a deeper sub-section, if you want one)
```

El árbol tiene dos clases de elementos: **documentos** (las hojas — tu escritura
real) y **grupos** (las ramas — Partes, Actos, etc.). Los elementos de grupo
existen solo para organizar; no contienen prosa propia.

### Los números se calculan, nunca se almacenan

φ deriva "Parte I", "Capítulo 3", "Escena 1.2" de la posición de cada elemento en
el árbol. Reordena cualquier cosa y todo se renumera al instante. Nunca escribes
un número de capítulo, y nunca tienes que corregir ninguno.

## El panel de la colección

Cuando una colección está abierta, el panel junto al riel es su navegación
principal — el árbol de estructura, con el recuento de palabras combinado y el
progreso de la meta arriba.

Tres pestañas se sitúan encima del árbol:

- **Capítulos** (etiquetadas según el tipo — *Poemas*, *Escenas*, etc.) — el árbol
  de estructura editable.
- **Esquema** — una lista plana con la sinopsis y el estado de cada elemento.
- **Índice** — el índice generado (ver más abajo).

### Añadir y editar elementos

Usa el **+** para añadir un documento o un grupo. Haz clic derecho en cualquier
elemento (o usa su menú) para el conjunto completo de acciones:

- **Añadir debajo** — un nuevo documento o grupo después de este.
- **Renombrar**, **Duplicar**.
- **Estado** — Borrador, Revisado, Final o Pendiente.
- **Color** — una muestra de etiqueta.
- **Páginas preliminares / finales** — marca el elemento como *sin numerar* (ver
  más abajo).
- **Abrir** el documento referenciado.
- **Quitar de la colección** — saca el elemento de la estructura; el documento en
  sí **no** se elimina. Quitar un grupo también desarchiva todo lo que contiene, y
  de nuevo no elimina ninguno de los documentos.
- **Mover arriba del todo** / **Mover abajo del todo**.

### Reordenar arrastrando

Arrastra cualquier elemento a un nuevo lugar — arriba, abajo, dentro de un grupo,
fuera de un grupo. El árbol se reanida y se renumera al soltar. También puedes
trabajar desde el teclado cuando el árbol tiene el foco: las teclas de flecha para
mover y expandir/contraer, Enter para abrir, `F2` para renombrar, Delete para
quitar, `⌘D` para duplicar, y `⌘[` / `⌘]` para empujar un elemento arriba o abajo
dentro de su grupo.

## Moverse entre capítulos mientras escribes

Cuando abres un documento que pertenece a una colección, aparece un navegador de
capítulos con su posición —"Capítulo 3 / 12"— y los controles de
anterior/siguiente. La navegación sigue el orden de lectura completo del libro,
descendiendo a los grupos, no solo el nivel actual. Usa los controles, o `⌘⌥←` y
`⌘⌥→`.

## La página de la colección

Con una colección abierta y ningún documento seleccionado, obtienes su **página**
— la portada y la vista general, todo editado en línea:

- **Imagen de portada** — haz clic en el recuadro de portada para elegir una;
  quítala desde el formulario de abajo.
- **Título** — edítalo en el sitio.
- **Perfil de autor** — elige un perfil para establecer la firma, o crea uno
  nuevo. Los perfiles de autor llevan un nombre, seudónimo, biografía, foto y
  enlaces, y aparecen en tus exportaciones.
- **Tipo** — cambia aquí el tipo de colección.
- **Descripción** — un breve resumen de la obra.
- **Meta de palabras** — ver más abajo.

Desde la página también puedes **Compilar** toda la colección en un único
documento HTML, o exportarla como **PDF**, **EPUB** o **DOCX**, y **Guardar una
copia** como archivo `.poiesis` portátil con las imágenes incrustadas.

## Páginas preliminares y finales

Algunas páginas de un libro no son capítulos — una dedicatoria, un prólogo, una
página de agradecimientos, un apéndice. Marca cualquier elemento como **Páginas
preliminares / finales** para hacerlo *sin numerar*: se muestra con su propio
nombre y no toma número, así que tus capítulos reales siguen empezando en 1.
Marcar un grupo como sin numerar se propaga a todo lo que contiene. Las
exportaciones respetan esto — las páginas preliminares aparecen sin numerar en el
índice y en el documento compilado.

## Índice

La pestaña **Índice** genera un índice a partir de la estructura — consciente de
la profundidad, siguiendo el árbol y su numeración calculada, con las páginas
preliminares y finales mostradas sin numerar. Se actualiza a medida que
reorganizas, y el mismo índice consciente del árbol se incrusta cuando exportas a
HTML, PDF, EPUB o DOCX.

## Metas de palabras

Puedes establecer una **meta de palabras** para una colección desde su página. El
encabezado del panel y el listado de la colección muestran una barra de progreso
frente al recuento de palabras combinado de cada documento de la colección. Los
documentos individuales también pueden llevar sus propias metas (definidas desde
el encabezado del documento), así que puedes seguir un solo capítulo y el libro
entero a la vez.

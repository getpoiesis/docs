---
title: Anotaciones
sidebar_position: 9
---

# Anotaciones

Las anotaciones te permiten marcar un pasaje y decir algo sobre él: un resaltado
para señalarlo, un comentario al margen para recordar por qué. Viven con el
documento, así que tus notas para ti mismo viajan con el borrador.

## Resaltar un pasaje

Selecciona algo de texto. Aparece la barra de herramientas flotante; haz clic en
el icono del **resaltador** (**Resaltar y comentar**) para abrir su menú y luego
elige un color. El texto seleccionado recibe un resaltado suave de ese color.

Hay cinco colores predefinidos: **Amarillo**, **Verde**, **Azul**, **Morado** y
**Naranja**. Son translúcidos, así que se leen bien tanto en temas claros como
oscuros.

### Un color personalizado

Junto a los predefinidos hay una muestra de **color personalizado**. Haz clic en
ella para abrir el selector de color del sistema y elegir cualquier color que te
guste para el resaltado.

## Un comentario sin resaltado

A veces quieres anotar algo sin colorear el texto. En el menú del resaltador,
elige **Comentar (sin resaltado)**. φ adjunta un comentario a la selección sin
teñirla — la nota en sí la escribes en el panel de Anotaciones. Cada resaltado
puede llevar también un comentario; los dos funcionan juntos.

Para quitar un resaltado, selecciona el texto resaltado y elige **Quitar
resaltado** en el mismo menú.

## El panel de Anotaciones

Abre el panel derecho (`⌘]` lo muestra u oculta) y elige la pestaña
**Anotaciones** para ver todas las anotaciones del documento actual. Cada tarjeta
muestra el texto citado, su color y una casilla para tu comentario.

Desde el panel puedes:

- **Ir al texto** — haz clic en la cita de una tarjeta para desplazarte y
  seleccionar ese pasaje en el editor. (Hacer clic en un resaltado del editor
  funciona al revés: abre esa anotación en el panel.)
- **Escribir o editar un comentario** — escribe en la casilla de notas de la
  tarjeta.
- **Recolorear** — elige otro predefinido, un color personalizado, o **Sin
  resaltado (comentario)**.
- **Resolver** — haz clic en la marca para señalar una anotación como hecha; las
  resueltas se atenúan pero se conservan.
- **Quitar** — haz clic en el icono de la papelera para eliminar la anotación.

### Encontrar anotaciones

Cuando un documento tiene varias anotaciones, usa la casilla de **búsqueda** para
filtrar por el texto citado o tu comentario, y el menú de **filtro** para mostrar
solo Resaltados, Comentarios, Abiertas o Resueltas.

### Anotaciones desvinculadas

Si el texto al que apuntaba una anotación se edita y desaparece, la anotación pasa
a estar **desvinculada** — se conserva en el panel y se marca, con una acción
**Volver a vincular a la selección** para que puedas reanclarla a un nuevo pasaje.

## Cómo se almacenan las anotaciones

Las anotaciones forman parte del documento. El resaltado de color es una marca en
el contenido del documento (una pequeña etiqueta `annotationId` sobre el texto), y
el comentario, el color y el estado de resolución se guardan en los metadatos del
documento dentro del mismo archivo `.poiesis`. Nada se almacena por separado y
nada sale de tu Mac — copia o respalda el archivo y sus anotaciones vienen con él.

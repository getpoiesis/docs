---
title: Anotaciones
---

# Anotaciones

Las anotaciones te permiten marcar un pasaje y decir algo sobre él: un resaltado
para señalarlo, un comentario para recordar por qué. Viven con el documento, así
que tus notas para ti mismo viajan con el borrador.

<img src="/img/app/annotations-light.png" alt="Un capítulo con dos resaltados y sus notas, junto a una nota al margen" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/annotations-dark.png" alt="Un capítulo con dos resaltados y sus notas, junto a una nota al margen" width="1600" height="1000" loading="lazy" decoding="async" />

## Resaltar un pasaje {#highlighting-a-passage}

Selecciona un texto. Aparece la barra de herramientas flotante; haz clic en la
muestra de color (**Resaltar y comentar**) para abrir su menú y luego elige un
color. El texto seleccionado recibe un resaltado suave de ese color.

Hay cinco colores predefinidos: **Amarillo**, **Verde**, **Azul**, **Morado** y
**Naranja**. Son translúcidos, así que se leen bien tanto en temas claros como
oscuros. A su lado, **Color personalizado** abre el selector de color del
sistema para que elijas el color que quieras.

Para quitar un resaltado, selecciona el texto resaltado, abre el mismo menú y
elige **Quitar resaltado**.

## Un comentario sin resaltado {#a-comment-without-a-highlight}

A veces quieres anotar algo sin colorear el texto. Selecciónalo y haz clic en
**Comentar (sin resaltado)** en la barra de herramientas flotante. φ adjunta un
comentario a la selección sin teñirla.

En ambos casos, el Panel de información se abre en su pestaña **Notas** con la
nueva anotación lista para que escribas en ella. Cada resaltado también puede
llevar un comentario; los dos funcionan juntos.

## La pestaña Notas {#the-notes-tab}

Todas las notas de un documento para sí mismo están en la pestaña **Notas** del
Panel de información. Ábrela con `⇧⌘A`, desde **Notas** en el menú ⋮ del
documento, o abriendo el Panel de información (`⇧⌘I`) y eligiendo la pestaña.
También puedes llegar haciendo clic derecho en el texto y eligiendo
**Anotaciones**.

La pestaña tiene tres secciones: notas al margen, anotaciones y acciones.

### Notas al margen {#margin-notes}

Las notas al margen tratan del documento entero y no de una frase concreta: un
recordatorio de lo que aún le falta al capítulo, una pregunta para el siguiente
borrador. Haz clic en **Añadir una nota al margen** y escribe en el cuadro
(**Escribe una nota sobre este documento…**). Cada una tiene un botón
**Eliminar nota al margen**.

### Anotaciones {#annotations}

Cada anotación aparece como una tarjeta con el texto citado, su color y un
cuadro para tu comentario. Desde una tarjeta puedes:

- **Saltar al texto**: haz clic en la cita para desplazarte a ese pasaje en el
  editor y seleccionarlo.
- **Escribir o editar el comentario**: escribe en el cuadro de nota de la
  tarjeta.
- **Cambiar el color**: elige otro color predefinido, un **Color
  personalizado** o **Sin resaltado (comentario)**.
- **Resolver**: haz clic en la marca de verificación para **Marcar como
  resuelta**. Las anotaciones resueltas se atenúan pero se conservan; **Marcar
  como no resuelta** recupera una.
- **Eliminar**: el icono de la papelera (**Eliminar anotación**).

En cuanto un documento tiene anotaciones, un cuadro de búsqueda (**Buscar
anotaciones…**) las filtra por el texto citado o por tu comentario, y un menú a
su lado muestra **Todas**, **Resaltados**, **Comentarios**, **Abiertas** o
**Resueltas**.

#### Anotaciones desvinculadas {#detached-annotations}

Si el texto al que apuntaba una anotación desaparece al editar, la anotación se
conserva y se marca como **Desvinculada del texto**. Selecciona un pasaje nuevo
y haz clic en **Volver a vincular a la selección** para anclarla ahí.

### Acciones {#action-items}

La última sección enumera los elementos de lista de tareas del documento que se
pueden seguir en un tablero, para que una tarea escrita en una nota pueda
convertirse en una tarjeta. Consulta [Tableros](boards.md).

## Cómo se almacenan las anotaciones {#how-annotations-are-stored}

Las anotaciones forman parte del documento. El resaltado es una marca en el
texto del documento, y el comentario, el color y el estado de resolución se
guardan en el mismo archivo `.poiesis`, junto con tus notas al margen. Nada se
guarda por separado y nada sale de tu ordenador: copia o haz una copia de
seguridad del archivo y sus anotaciones irán con él.

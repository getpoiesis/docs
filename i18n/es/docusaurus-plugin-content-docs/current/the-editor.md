---
title: El editor
sidebar_position: 4
---

# El editor

El editor es una página serena y a sangre completa. La mayor parte del tiempo
sois solo tú y el texto: los controles aparecen cuando los buscas y se retiran
cuando no. Esta página cubre lo básico de la escritura: la página en sí, el
guardado, la barra de selección, el menú de barra, las pestañas y el movimiento
entre documentos.

## Título y descripción

Sobre la página están el **título** del documento y una **descripción**
opcional. Ambos son campos de texto sencillo que crecen a medida que escribes. El
título da nombre al documento (y es lo que se muestra en las pestañas, la
búsqueda y los enlaces); la descripción es una breve línea de contexto para ti
mismo. Deja cualquiera de los dos en blanco si no lo necesitas.

## Guardado automático

Nunca tienes que guardar. Mientras escribes, φ guarda tu trabajo automáticamente
un instante después de que te detienes, con retardo para no escribir en cada
pulsación. Cada guardado es **atómico y verificado**: φ escribe en un archivo
temporal, lo vuelve a leer para confirmar que los bytes llegaron y solo entonces
lo intercambia en su sitio. Un fallo o un disco lleno no pueden dejarte con un
documento a medio escribir.

Si quieres guardar *ahora mismo* —por ejemplo, justo antes de alejarte— pulsa
`⌘S`. Eso vuelca el documento actual de inmediato y además escribe un punto de
control de versión, así tienes un punto explícito al que volver.

## La barra de herramientas flotante

Selecciona cualquier texto y una pequeña barra de herramientas flota sobre él.
Contiene el formato que buscas a media frase:

- **Negrita** (`⌘B`), **Cursiva** (`⌘I`), **Subrayado** (`⌘U`), **Tachado** y
  **Código en línea**.
- **Enlace**: convierte la selección en un enlace y pide la URL. (Consulta
  [Enlaces](formatting-and-blocks.md#enlaces).)
- **Alineación**: izquierda, centro, derecha, justificado.
- **Buscar palabra** (el icono del libro): abre el diccionario sin conexión
  sobre tu selección. Consulta [Diccionario y tesauro](dictionary.md).
- **Resaltar y comentar** (el resaltador): abre una pequeña paleta: elige un
  color para resaltar la selección, escoge un color personalizado, añade un
  **comentario** sin resaltado o **quita** un resaltado existente. Los
  resaltados y comentarios se convierten en anotaciones al margen. Consulta
  [Anotaciones](annotations.md).

Pulsa `Esc` para descartar la barra de herramientas.

La barra de herramientas es para documentos de prosa. En la superficie
simplificada del diario / páginas matinales no aparece: esa página está
deliberadamente desnuda.

## El menú de barra

Para insertar un bloque —un encabezado, una lista, una cita, una imagen y más—
escribe **`/`** al principio de una línea vacía (o en cualquier punto de una
línea). Se abre un menú; sigue escribiendo para filtrarlo y luego pulsa `Enter` o
haz clic para insertar. Por ejemplo, `/quote`, `/table`, `/image`.

Dos formas más de llegar a él:

- **El botón +.** Pasa el cursor cerca del borde izquierdo de cualquier bloque y
  aparecerá un **+**. Haz clic en él para abrir el menú de barra e insertar un
  bloque debajo.
- Ambas rutas abren el mismo menú. Qué bloques se ofrecen depende del tipo de
  documento: los bloques de manuscrito como el verso y las notas al pie quedan
  ocultos en la superficie del diario.

El catálogo completo está en [Formato y bloques](formatting-and-blocks.md).

## Pestañas

Los documentos se abren en pestañas a lo largo de la parte superior, como
funciona un navegador.

- **Nuevo documento**: `⌘N`, o el **+** al final de la tira de pestañas.
- **Cambiar de pestaña**: haz clic en cualquier pestaña. Cuando hay más pestañas
  de las que caben, un menú **▾** las lista todas.
- **Cerrar una pestaña**: la **✕** de la pestaña, o `⌘W` para cerrar la actual.

Algunas vistas de área completa —el grafo, los personajes, el calendario y
otras— también se abren como pestañas que puedes cerrar de la misma forma.

## Ir atrás y adelante

Seguir un enlace o abrir un documento recuerda dónde estabas. Usa las flechas de
**atrás** y **adelante** en la parte superior de la página para volver sobre tus
pasos, igual que en un navegador: práctico cuando has saltado por una cadena de
[wiki-links](links-and-graph.md) y quieres regresar.

## Tipografía inteligente

Mientras escribes, φ pule la puntuación habitual por ti: las comillas rectas se
vuelven curvas `"comillas inteligentes"`, dos guiones se convierten en una raya
y tres puntos en puntos suspensivos, y así sucesivamente. Tú escribes con
naturalidad y el texto sale compuesto tipográficamente.

## Modo lectura

Cuando prefieres leer antes que editar, **Ver → Modo lectura** (`⌘E`) hace que
la página sea de solo lectura y permite que un clic normal siga los enlaces.
Desactívalo para volver a editar.

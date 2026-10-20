---
title: Un recorrido por la ventana
description: La barra lateral, la lista, la página y el panel de Información, y las teclas que te llevan a cualquier parte.
---

# Un recorrido por la ventana

La ventana de φ Poiesis tiene tres columnas, de izquierda a derecha:

- La **barra lateral**, donde eliges un modo y un lugar dentro de él.
- La **lista**, que muestra lo que hay en ese lugar.
- La **página**, donde escribes.

A la derecha de la página puedes abrir además el panel de **Información**, que
muestra los datos del documento abierto.

Poiesis tiene tres modos: **Escribir**, **Notas** y **Diario**. Cada uno tiene su
propia pantalla de entrada, llamada **Inicio**.

<img src="/img/app/editor-light.png" alt="La barra lateral con el modo Escribir elegido, los capítulos de The Weighing House en la lista de al lado y un capítulo abierto en la página" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="La barra lateral con el modo Escribir elegido, los capítulos de The Weighing House en la lista de al lado y un capítulo abierto en la página" width="1600" height="1000" loading="lazy" decoding="async" />

## Cómo moverte {#get-around}

1. Elige un modo en la parte superior de la barra lateral: **Escribir**,
   **Notas** o **Diario**.
2. Elige un lugar en la barra lateral, por ejemplo un proyecto o **Todas las
   notas**. La lista muestra lo que contiene.
3. Haz clic en una fila de la lista. El documento se abre en la página y la
   lista se queda donde estaba.
4. Pulsa `⇧⌘I` para abrir el panel de **Información** junto a la página.
5. Pulsa `⌘[` para volver adonde estabas.

## La barra lateral {#the-sidebar}

De arriba abajo, la barra lateral tiene:

- **El nombre de la bóveda.** Una bóveda es la carpeta donde se guarda lo que
  escribes. Haz clic en el nombre para abrir el menú de la bóveda. En él
  aparecen tus bóvedas y, a continuación, **Abrir otra bóveda…**, **Nueva
  bóveda…**, **Mostrar en Finder** (**Mostrar en el Explorador de archivos**
  en Windows) e **Importar…**. Si tienes más de una bóveda, también aparece
  **Fusionar con otra bóveda…**. Consulta [Bóvedas](./vaults.md).
- **Los controles deslizantes**, al lado del nombre. Abren los **Ajustes**
  (`⌘,`).
- **Escribir · Notas · Diario**, el selector de modo. `⌘1`, `⌘2` y `⌘3` abren
  el Inicio de cada modo. Si la bóveda usa un solo modo, no hay selector.
- **Los lugares del modo**, por grupos. Están en la tabla de más abajo.
- **En la parte inferior:** lo que la bóveda está haciendo en ese momento
  (**Guardando…**, **Indexando…**), la **Papelera** y la insignia **Beta**.
  Haz clic en la insignia para enviarnos tus comentarios. De vez en cuando,
  una línea discreta encima pregunta qué tal te va con Poiesis.

| Modo | Qué aparece en la barra lateral |
| --- | --- |
| **Escribir** | **Inicio**, **Piezas**, **Proyectos** (cada proyecto, **Nuevo proyecto** y, cuando has guardado alguno, **Guardados**), **Mundo** (**Personajes**, **Mundo**, **Autores**, **Investigación**) |
| **Notas** | **Inicio**, **Bandeja de entrada**, **Todas las notas**, **Destacados**, **Carpetas** (con un **+** para crear una carpeta), **Etiquetas**, **Lugares** (**Tableros**, **Plantillas**) |
| **Diario** | **Inicio**, **Hoy**, **Todas las entradas**, **Páginas matinales**, **Lugares** (**Calendario**) |

Haz clic en un proyecto para abrir su página propia. La lista muestra su
esquema. Mientras el proyecto está abierto, debajo de él aparecen en la barra
lateral **Índice**, **Tablero**, **Leer** y **Exportar**.

Bajo el nombre del proyecto, en la lista, cinco pestañas muestran sus partes:
**Índice**, **Personajes**, **Mundo**, **Investigación** y **Tablero**. Cada
una muestra lo propio del proyecto y lo compartido. La pestaña en la que estás
muestra su nombre; señala las demás para ver el suyo. Pulsa `⌃1` a `⌃5` para
cambiar de pestaña o, desde cualquier lugar de un proyecto, `⌘G` y luego `P`,
`L` o `R` para sus personajes, su mundo o su investigación.

Los personajes, los autores, el mundo y la investigación también son de toda la bóveda, así que el grupo **Mundo** sigue en la barra lateral haya o no un proyecto abierto. **Personajes**, **Autores** e **Investigación** muestran una parte de la bóveda cada vez: el menú bajo el título de la lista elige **Este proyecto** (aquel en el que estabas), **Sin proyecto**, **Todo** o un proyecto por su nombre. Abierta desde un proyecto, la lista empieza en ese proyecto; abierta desde cualquier otro sitio, en lo que no pertenece a ningún proyecto. Poiesis recuerda tu elección para cada lista en cada bóveda.

Los recuentos aparecen al señalar una fila; el de la Bandeja de entrada y el avance de un proyecto hacia su meta de palabras (un porcentaje) se ven siempre.

Haz clic derecho en un proyecto o en una carpeta para abrir su menú. Para
meter una nota en una carpeta, arrástrala hasta la carpeta en la barra
lateral.

Algunos lugares no están en la barra lateral salvo que los añadas, pero
siempre quedan a una tecla:

- **El grafo:** `⌘G` y luego `G`, o **Grafo local** en Información → **Enlaces**.
- **El calendario** (fuera del Diario): `⌘G` y luego `C`, desde cualquier modo.

Tú decides qué lugares muestra cada modo. Consulta
[Puesta a punto](./setup.md).

## La lista {#the-list}

La segunda columna muestra lo que hay en el lugar que has elegido: los
capítulos de un proyecto, tus piezas, una carpeta de notas, los días del
diario, los tableros o la papelera.

En la parte superior de la lista:

- **‹ ›** van atrás y adelante. A su lado, Poiesis indica dónde estás; por ejemplo,
  **Escribir · Proyectos**.
- **El título** dice qué muestra la lista.
- **El orden** aparece en las piezas y en las notas: **Editado**, **Creado** o
  **Título**. En **Todas las notas**, el mismo menú tiene **Solo notas sin
  enlaces**, que muestra solo las notas que ningún enlace toca.
- **+** crea un documento nuevo aquí mismo. En un proyecto ofrece un capítulo
  nuevo (`⌘N`) o una parte nueva (`⇧⌘N`); cómo se llaman depende del tipo de
  proyecto.
- **⋮** abre un menú con las acciones menos habituales. En un proyecto, este
  menú incluye también las páginas y los ajustes del proyecto: **Índice**,
  **Icono…**, **Color…**, **Resumen**, **Investigación**, **Leer**, **Abrir
  el tablero del proyecto**, **Exportar manuscrito…** y **Eliminar
  proyecto…**.

**Buscar en la lista.** Las piezas, las notas, los personajes, los autores y
la investigación tienen un campo de búsqueda debajo del título. La lista se va
acortando a medida que escribes. Pulsa `Esc` para borrar la búsqueda.

**Anotar una idea.** **Todas las notas**, las carpetas y las etiquetas tienen
un cuadro **Anota una idea…**. Escribe una línea y pulsa `Intro`. Poiesis la guarda
como nota, en la carpeta o con la etiqueta que tienes abierta. En **Todas las
notas** o en una carpeta, si la línea lleva una palabra con almohadilla, como
`#idea`, la nota recibe esa etiqueta.

**Las carpetas se abren sin salir de la lista.** Abre una carpeta en Piezas o
en Notas y la lista muestra su contenido. Encima de la lista aparece la ruta;
por ejemplo, **Todo › Ensayos › Borradores**. Haz clic en un tramo de la ruta
para volver a él. Para mover un documento, arrástralo hasta una carpeta o
hasta un tramo de la ruta.

## Hacer más sitio {#make-more-room}

Para dar más sitio a la página sin perder de vista dónde estás:

- **Compacta la barra lateral** con el botón de arriba, **Ver → Barra
  lateral compacta** o `⌃⌘S`. Se queda en una franja estrecha de iconos;
  señala un icono para ver su nombre. El mismo botón la vuelve a abrir.
- **Compacta la lista** con el botón de arriba, **Ver → Lista compacta** o
  `⌃⌘L`. Muestra solo los títulos; señala un documento para ver su fecha y
  sus primeras líneas.

Poiesis recuerda cómo las dejaste. Para ocultarlo todo menos la página, usa
el [Santuario](./focus-and-writing-modes.md).

Un documento se vuelve a abrir donde lo dejaste: en el mismo punto de la
página y con el cursor donde estaba, incluso después de cerrar la app. Las
listas se ordenan por la última vez que cambiaron las palabras de un
documento, así que abrirlo, guardarlo en una carpeta o un proyecto, o
marcarlo con una estrella no lo sube arriba del todo.

## La página {#the-page}

La página muestra el título y el texto. Cuando hay un documento abierto,
arriba a la derecha están estos botones:

| Botón | Qué hace |
| --- | --- |
| **Buscar** (la lupa, `⌘K`) | Abre el buscador. Señálala y se abre en un campo. |
| **⋮** | El menú del documento: destacar, añadir a un tablero, modo lectura, desplazamiento de máquina de escribir, revisar la ortografía, guardar una versión, exportar, mover a la papelera y más. El esquema, los enlaces, las notas y el historial están en el panel de Información. |
| **Información** (`⇧⌘I`) | Abre o cierra el panel de Información. |
| **Santuario** (`⌘.`) | Lo oculta todo menos la página. Consulta [Concentración y Santuario](./focus-and-writing-modes.md). |

**Vista dividida** (`⌘\`) y **Detalles…** están en el menú **⋮**. Mientras estás en una de las dos, su botón aparece también en la barra, para salir con un clic.

El recuento de palabras está en la esquina inferior derecha. Si el documento
tiene una meta de palabras, la esquina muestra tus palabras y la meta. Haz
clic en él para ver un menú pequeño: **Información** abre la pestaña
**Esquema** del panel de Información, **Estadísticas…** abre las
**Estadísticas del documento** completas y **Empezar un sprint de
escritura…** prepara uno.

Mientras escribes, los botones de arriba a la derecha de la página, la
cabecera de la lista y el recuento de palabras se desvanecen. Mueve el
puntero, o pulsa una flecha, `Tab`, `Esc` o un atajo, y vuelven. Nada se
mueve cuando desaparecen.

## El panel de Información {#the-info-panel}

<img src="/img/app/outline-light.png" alt="El panel de Información junto a una página de investigación, con la pestaña Esquema abierta: palabras, tiempo de lectura, encabezados y notas al pie" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/outline-dark.png" alt="El panel de Información junto a una página de investigación, con la pestaña Esquema abierta: palabras, tiempo de lectura, encabezados y notas al pie" width="1600" height="1000" loading="lazy" decoding="async" />

Pulsa `⇧⌘I`, o haz clic en **Información**, para abrir un panel a la derecha
del documento. Tiene seis pestañas. La pestaña en la que estás muestra su nombre; señala
las demás para ver el suyo:

| Pestaña | Qué muestra |
| --- | --- |
| **Esquema** | Las palabras, el tiempo de lectura y la meta; los encabezados y las notas al pie; **Añadir al tablero…** y **Guardar versión…**. |
| **Enlaces** | A qué enlaza este documento y qué documentos enlazan con él, las notas enlazadas y el **Grafo local**. Consulta [Enlaces y el grafo](./links-and-graph.md). |
| **Notas** | Sus resaltados, comentarios y notas al margen (`⇧⌘A`). Consulta [Anotaciones y notas al margen](./annotations.md). |
| **Tareas** | Los elementos de sus listas de tareas y las tarjetas de tablero que les hacen seguimiento. |
| **Mundo** | En Escribir: los personajes que trae el documento (mencionados con @ o por su nombre), los lugares y el saber que nombra y la investigación enlazada a él. Haz clic en un personaje, lugar o entrada de saber para ver una línea sobre él y **Abrir**; haz clic en una página de investigación para abrirla junto a la página. Los lugares y el saber se encuentran por su nombre. |
| **Historial** | Sus versiones. Consulta [Versiones y copias de seguridad](./versions-and-backup.md). |

Algunos documentos muestran otras pestañas:

- Mientras usas el [diccionario](./dictionary.md) (`⇧⌘D`), este aparece como
  sexta pestaña.
- Una página matinal muestra en su lugar **La práctica** e **Historial**.
- Las páginas propias de un proyecto muestran el **Proyecto**.

**Abierto y cerrado.** El panel empieza cerrado. Una vez que lo abres, sigue
abierto en todos los documentos, incluso después de salir de Poiesis, hasta que lo
cierres; y una vez cerrado, sigue cerrado hasta que vuelvas a abrirlo. Si la ventana es demasiado estrecha para
mostrarlo todo, Poiesis oculta el panel sin cerrarlo. Ensancha la ventana y el panel
vuelve.

**Cambiar los anchos.** Arrastra la línea divisoria que hay entre dos columnas
para ensancharlas o estrecharlas. También puedes llegar a la divisoria con el
teclado y pulsar las teclas de flecha. Poiesis recuerda los anchos de cada bóveda.

**Cerrar el panel con su divisoria.** Haz doble clic en la divisoria del panel
de Información, o arrástrala hasta dejarlo casi cerrado.

## El Inicio de cada modo {#each-modes-home}

Para abrir el Inicio del modo en el que estás, pulsa `⌘⇧H` o haz clic en
**Inicio**, en la parte superior de la barra lateral.

**Escribir** muestra:

- El capítulo por el que **Continuar**, los proyectos que tienes **En
  marcha**, las **Piezas** recientes y la **Investigación reciente**.
- Al lado: **Hoy** (las palabras de hoy, tu racha, esta sesión, los días de
  esta semana), el mes y lo que **Vence esta semana** en tus tableros.

**Notas** muestra:

- **Anota una idea…**, las notas de **Editado recientemente** y tus **Acciones
  pendientes**.
- Al lado: el mes, tus notas de **Destacados** y tus **Etiquetas**.

**Diario** muestra:

- La entrada de hoy, **Esta semana** y los días anteriores.
- Al lado: las **Páginas matinales** de hoy, el mes y **Un día como hoy**, que
  muestra lo que escribiste en esta misma fecha otros años.

## Encuentra lo que sea: `⌘K` {#find-anything-k}

Pulsa `⌘K` (**Archivo → Buscar un documento…**), o haz clic en **Buscar…**
en la barra de la parte superior de la página, para encontrar un documento,
un proyecto o un personaje por su nombre. Se abre una ventana pequeña, la
paleta. Antes de que escribas nada, muestra:

- **Abierto ahora**: los documentos que has abierto y no has cerrado. El que
  está en pantalla lleva la marca **aquí ahora**.
- **Ir a**: el Inicio, los modos y los lugares. Aparecen más a medida que
  escribes.
- **Crear**: un documento nuevo. Aparecen más opciones a medida que escribes.

Cuando escribes, Poiesis busca en todos los documentos de los tres modos, tanto en
los títulos como en el texto. Cada resultado indica en qué modo está. Debajo de
los documentos, **Comandos** muestra los comandos cuyo nombre coincide, con su
atajo, para que también puedas ejecutarlos desde aquí.

| Tecla | Qué hace |
| --- | --- |
| `Intro` | Abre el resultado resaltado. |
| `⌥↵` | Lo abre al lado del documento en el que estás. |
| `⌘↵` | Lo abre y deja la paleta abierta, para que puedas abrir varios. |
| `⌘W` | Cierra el documento abierto que está resaltado; la paleta sigue abierta. |
| `Esc` | Cierra la paleta. |

## Ejecuta un comando: `⌘P` {#run-a-command-p}

Pulsa `⌘P` (**Archivo → Paleta de comandos…**) para ejecutar un comando. Hay
comandos para crear documentos, exportar, gestionar versiones y bóvedas,
activar el desplazamiento de máquina de escribir, buscar actualizaciones y
más. Antes de que escribas nada, la paleta muestra los comandos que has
ejecutado **Últimamente**. Escribe para buscar entre todos los comandos.

## Ir atrás y adelante {#go-back-and-forth}

| Teclas | Qué hacen |
| --- | --- |
| `⌘[` / `⌘]` | Atrás y adelante por los sitios donde has estado, tanto en la lista como en la página. Los botones laterales del ratón hacen lo mismo. |
| `⌥⌘←` / `⌥⌘→` | El documento de arriba o de abajo en la lista: el capítulo anterior o el siguiente, la nota siguiente, el día anterior. |
| `⌘W` | Cierra el documento y deja su lista. Si el documento se abrió desde otro sitio (el calendario, un tablero, el grafo), al cerrarlo vuelves al lugar desde donde lo abriste. Si no hay ningún documento abierto, `⌘W` te lleva al Inicio del modo. |
| `⌘⇧H` | El Inicio del modo. |

:::tip Todos los atajos en una tarjeta

Pulsa `⌘/` para ver juntos los atajos principales. Pulsa `⌘/` o `Esc` para
cerrarlos. La lista completa está en
[Atajos de teclado](./keyboard-shortcuts.md).

:::

## Ver también {#see-also}

- [Tu primera bóveda](./getting-started.md)
- [Puesta a punto](./setup.md)
- [Documentos lado a lado](./side-by-side.md)
- [Atajos de teclado](./keyboard-shortcuts.md)

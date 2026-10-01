---
title: Tableros
---

# Tableros

Un **tablero** son columnas de tarjetas: lo que hay que hacer en un proyecto, o
cualquier otra cosa que quieras mantener en movimiento. Las tarjetas llevan
fechas, prioridades, listas de comprobación y enlaces a tus documentos, y un
elemento de una lista de comprobación en un documento puede vivir en un tablero
y mantenerse al paso con él.

<img src="/img/app/boards-light.png" alt="Un tablero de tareas: To do, Doing y Done, con tarjetas" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/boards-dark.png" alt="Un tablero de tareas: To do, Doing y Done, con tarjetas" width="1600" height="1000" loading="lazy" decoding="async" />

## Dónde viven los tableros {#where-boards-live}

Abre **Lugares** → **Tableros** en la barra lateral de **Escribir** o de
**Notas**. Cada modo guarda los suyos:

- **Escribir** muestra los tableros que pertenecen a un **proyecto**.
- **Notas** muestra los tableros que no pertenecen a ninguno.

Sin ningún tablero elegido, la página muestra cada tablero de ese modo como un
mosaico: sus columnas y cuántas tarjetas hay abiertas. Haz clic en uno para
abrirlo.

## Crear un tablero {#making-a-board}

Hay dos tipos:

- **Nuevo tablero de tareas**: empieza con **To do**, **Doing** y **Done**. Sus
  columnas tienen un significado: la primera es lo pendiente, la última lo hecho,
  y todo lo que queda en medio está en curso. Es el tipo que sigue las acciones.
- **Nuevo tablero personalizado**: columnas libres (**Column 1**, **Column 2**,
  **Column 3**) sin ningún significado asociado.

Crea cualquiera de los dos con los botones de la página Tableros. Mientras no
hay ningún tablero abierto, **+** en lo alto de la lista de Tableros crea un
tablero de tareas; el **⋮** de la lista tiene **Nuevo tablero personalizado**.
φ te pide un nombre: **Nombra el tablero**.

En Escribir, un tablero se crea para el proyecto en el que estás: sin ningún
proyecto abierto no hay nada a lo que asociarlo. La página **Abrir el tablero
del proyecto** de un proyecto también tiene **Nuevo tablero de tareas para este
proyecto**.

## Columnas {#columns}

- **Añadir columna**: desde el **⋮** del tablero, o al final de las columnas.
- **Renombrar**: haz clic en el nombre de una columna y escribe.
- **Color**: elige uno para el punto junto a su nombre, o **Sin color**.
- **Mover**: arrastra una columna por su asa.
- **Quitar**: una columna puede irse cuando está vacía; mueve antes sus
  tarjetas. Un tablero de tareas siempre conserva al menos dos columnas.

## Tarjetas {#cards}

Haz clic en **Añadir tarjeta** en una columna (o en **+** en lo alto de la
lista, con el tablero abierto) para añadir una. Arrastra las tarjetas entre
columnas y hacia arriba y abajo. Haz clic en una tarjeta para abrirla:

- **Título**, **Notas** (una descripción) y una **Lista de comprobación**:
  escribe un elemento y pulsa Enter.
- **Enlazado a**: documentos, personajes y proyectos. Haz clic en un enlace para
  abrirlo.
- **Columna**, **Vence** (una fecha), **Recordar** (una fecha y una hora),
  **Prioridad** (**Baja**, **Normal**, **Alta** o **Urgente**) y un color de
  **Etiqueta**.
- **Archivar tarjeta**: la guarda sin eliminarla (ver más abajo).
- **Eliminar tarjeta**: la mueve a la papelera. **Restaurar** la devuelve a la
  columna de la que vino.

## Mantener ordenado un tablero {#keeping-a-board-tidy}

La cabecera del tablero muestra cuántas tarjetas hay abiertas, un campo para
**Buscar una palabra…** y **Mostrar archivadas**. Su **⋮** tiene:

- **Ocultar lo hecho**: mantiene fuera de la vista las tarjetas de la última
  columna.
- **Archivar lo terminado** (con un recuento): guarda de una vez todas las
  tarjetas de la última columna. Las tarjetas archivadas dejan de mostrarse y de
  contar, pero siguen en el archivo del tablero; **Mostrar archivadas** las trae
  de vuelta, tachadas, y **Devolver al tablero** en una tarjeta la recupera.
- **Añadir columna**.
- **Ajustes del tablero**: el **Nombre** del tablero; su **Proyecto** (un
  proyecto, que lo muestra en Escribir, o **Independiente**, que lo muestra en
  Notas); sus columnas, para renombrarlas, colorearlas, moverlas y quitarlas; y
  **Eliminar tablero**, que lo mueve a la papelera.

## Acciones: listas de comprobación que viven en un tablero {#action-items-checklists-that-live-on-a-board}

Un elemento de una lista de comprobación en una nota puede convertirse en una
tarjeta que lo sigue.

1. Escribe un elemento de lista de comprobación: teclea `[]` o usa
   `/checklist`.
2. Abre la pestaña **Notas** del panel de información (`⇧⌘A`). En **Acciones**
   aparece cada elemento de lista de comprobación del documento.
3. Haz clic en **Seguir** junto a uno y elige un tablero de tareas (o crea uno).

La tarjeta enlaza de vuelta a la nota, y ambas van a la par: marca el elemento y
la tarjeta pasa a la última columna del tablero; mueve la tarjeta y el elemento
la sigue. Una lista anidada también viaja con él: los hijos del elemento se
convierten en la lista de comprobación de la tarjeta.

El Inicio de Notas lista las **Acciones pendientes** de tus tableros de Notas,
con un enlace a **Todos los tableros**.

## Poner un documento en un tablero {#putting-a-document-on-a-board}

Una tarjeta también puede representar un documento entero: abre el **⋮** del
documento → **Añadir al tablero…** (también en la pestaña **Esquema** del panel
de información). Dale un título a la tarjeta, elige un tablero de tareas y la
tarjeta enlaza al documento. Los **Detalles…** de un documento listan las
tarjetas que apuntan a él.

## El tablero de capítulos de un proyecto {#a-projects-chapter-board}

Un proyecto tiene un tablero propio que nunca tienes que mantener: **Abrir el
tablero del proyecto** muestra sus capítulos como tarjetas en columnas de
estado: **Pendiente**, **Borrador**, **Revisado**, **Final**. Arrastra una
tarjeta y el estado del capítulo cambia. Los tableros de tareas del proyecto
están debajo. Consulta [Proyectos](collections.md).

## Fechas de vencimiento {#due-dates}

Una tarjeta con fecha **Vence** aparece en el [calendario](calendar.md) ese día
(**Vence ·** y el nombre del tablero; el filtro **Vence** del calendario muestra
solo esas), y bajo **Vence esta semana** en el Inicio de Escribir.

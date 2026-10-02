---
title: Plantillas
description: Bloques reutilizables que construyes una vez y colocas en cualquier documento con una barra.
---

# Plantillas

Una **plantilla** es un bloque que reutilizas: un encabezado de escena, el
esqueleto de un poema, un registro diario, una carta. Construye la estructura
una vez y luego colócala donde la necesites con `/`. Las plantillas pueden
rellenar la fecha de hoy y dejar el cursor donde vas a empezar a escribir.

## Usar una plantilla {#use-a-template}

1. Coloca el cursor donde debe ir la plantilla.
2. Escribe `/` y el nombre de la plantilla, o `/template` para verlas todas.
3. Elígela en el menú. Cada plantilla está marcada como **Insertar una
   plantilla guardada** (todas las bóvedas) o **Insertar una plantilla de la
   bóveda** (solo esta bóveda).

El bloque se inserta en el cursor, con las variables ya rellenadas.

## Guardar algo como plantilla {#save-something-as-a-template}

| Para guardar | Haz esto | Dónde se guarda |
| --- | --- | --- |
| El documento entero | `⌘P` → **Guardar documento como plantilla…**, y ponle nombre. | Todas las bóvedas. |
| Parte de un documento | Selecciónala, pulsa **›** (**Más herramientas**) en la barra que aparece y luego **Guardar selección como plantilla…**. Ponle nombre y elige **Todas las bóvedas** o **Solo esta bóveda**. | Tú eliges. |

Las plantillas para todas las bóvedas las guarda el propio φ, así que añadir o
quitar una nunca toca los archivos de tu bóveda. Las plantillas de una sola
bóveda se guardan dentro de su carpeta, así que viajan con la bóveda.

## La página Plantillas {#the-templates-page}

En **Notas**, abre **Plantillas** en **Lugares** de la barra lateral, o pulsa
`⌘K` y escribe *Plantillas*. La lista muestra todas las plantillas que esta
bóveda puede usar, marcadas como **Esta bóveda** o **En todas las bóvedas**.
Elige una para ver lo que escribe.

- **+** (**Nueva plantilla**) crea una vacía para esta bóveda, llamada
  **Plantilla sin título**.
- **Editar plantilla** la abre en el editor de plantillas.
- **Quitar plantilla** elimina una de las plantillas de esta bóveda. Las
  plantillas para todas las bóvedas se quitan en Ajustes (más abajo).

## Editar una plantilla {#edit-a-template}

El editor de plantillas es una superficie de escritura propia: editar una
plantilla ahí nunca altera el documento que tienes abierto. Cambia el nombre y
el contenido, y pulsa **Guardar**. Debajo tienes un recordatorio de las
variables.

**Ajustes → Plantillas** también las lista, en **Esta bóveda** y **Plantillas
globales**, cada una con un lápiz para editarla y una papelera para quitarla.
Debajo de las listas:

- **Instalar una plantilla…** añade un archivo de plantilla que alguien te haya
  dado.
- **Abrir carpeta de plantillas** muestra dónde se guardan las plantillas para
  todas las bóvedas.

## Rellenar fechas y el cursor {#fill-in-dates-and-the-caret}

Una plantilla puede llevar variables que se rellenan en el momento en que la
insertas. Como se rellenan cada vez, la misma plantilla da la fecha de hoy hoy
y la de mañana mañana. Escríbelas como texto plano en la plantilla:

| Variable | Se rellena con |
| --- | --- |
| `<% today %>` | La fecha de hoy. |
| `<% tomorrow %>` | La fecha de mañana. |
| `<% yesterday %>` | La fecha de ayer. |
| `<% time %>` | La hora actual. |
| `<% cursor %>` | Nada: es donde queda el cursor, para que empieces a escribir. |

En texto plano, las fechas se convierten en distintivos de fecha en los que
puedes hacer clic. Dentro de un enlace o de otro formato se convierten en texto
plano.

:::tip Una plantilla para cada tipo de día

Un registro diario con `<% today %>` como encabezado y `<% cursor %>` debajo te
da una página con fecha, lista para escribir, con una sola barra.

:::

## Ver también {#see-also}

- [Formato y bloques](./formatting-and-blocks): el menú `/`.
- [Diario y páginas matinales](./journal-and-morning-pages)
- [Ajustes](./settings)

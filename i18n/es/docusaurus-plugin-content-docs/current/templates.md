---
title: Plantillas
---

# Plantillas

Las plantillas son bloques reutilizables que colocas en cualquier documento: un
encabezado de escena, el esqueleto de un poema, un diseño de registro diario, un
formato de carta. Construye la estructura una vez y luego insértala donde la
necesites.

## Insertar una plantilla {#inserting-a-template}

Coloca el cursor donde debe ir la plantilla, escribe `/`, luego el nombre de la
plantilla (o la palabra `template` para verlas todas) y elígela de la lista. El
menú de barra inclinada marca cada una como plantilla guardada o plantilla de la
bóveda.

El bloque se inserta en el cursor, con las variables ya rellenadas (ver más
abajo).

## Guardar una plantilla {#saving-a-template}

Crea lo que quieras reutilizar y luego guárdalo:

- **El documento entero.** Abre la paleta de comandos (`⌘P`) y elige **Guardar
  documento como plantilla…**, luego dale un nombre. Una plantilla guardada así
  está disponible en todas las bóvedas.
- **Solo una selección.** Selecciona la parte que quieres, haz clic en **›**
  (**Más herramientas**) en la barra que aparece y luego en el icono **Guardar
  selección como plantilla…**. Ponle nombre y φ te pregunta dónde debe vivir:
  - **Todas las bóvedas**: disponible en todas partes. Estas plantillas las
    guarda la propia app, así que añadir o quitar una nunca toca los archivos de
    tu bóveda.
  - **Solo esta bóveda**: disponible solo en la bóveda actual, y se guarda dentro
    de su carpeta, así que viaja con la bóveda.

## El lugar Plantillas {#the-templates-place}

Cada plantilla que esta bóveda puede usar tiene su propio lugar. En **Notas**,
busca **Plantillas** en **Lugares** en la barra lateral, o pulsa `⌘K` y escribe
*Plantillas*.

La lista muestra primero las plantillas propias de esta bóveda y luego las
guardadas para todas las bóvedas (marcadas **En todas las bóvedas**). Elige una
para ver lo que escribe en la página.

- **+** (o **Nueva plantilla**) crea una plantilla de bóveda vacía llamada
  **Plantilla sin título**, lista para editar.
- **Editar plantilla** abre el editor de plantillas.
- **Quitar plantilla** elimina una plantilla de bóveda. (Las plantillas guardadas
  para todas las bóvedas se quitan en Ajustes, más abajo.)

## El editor de plantillas {#the-template-editor}

El editor de plantillas es una superficie de escritura propia. Editar una
plantilla ahí nunca altera el documento que tienes abierto. Cambia el nombre y
el contenido, y luego **Guardar**. Debajo tienes un recordatorio de las
variables.

## Plantillas en Ajustes {#templates-in-settings}

**Ajustes → Plantillas** también las reúne, en dos listas: **Esta bóveda** y
**Plantillas globales**. Cada una tiene un lápiz para editarla y una papelera
para quitarla. Debajo de las listas:

- **Instalar una plantilla…** añade un archivo de plantilla que alguien te haya
  dado.
- **Abrir carpeta de plantillas** muestra dónde se guardan las plantillas de
  todas las bóvedas.

## Variables de plantilla {#template-variables}

Una plantilla puede incluir variables que se rellenan en el momento en que la
insertas. Nunca se guardan ya rellenadas, así que la misma plantilla da la fecha
de hoy hoy y la de mañana mañana. Escríbelas como texto plano:

| Variable | Se rellena con |
| --- | --- |
| `<% today %>` | la fecha de hoy |
| `<% tomorrow %>` | la fecha de mañana |
| `<% yesterday %>` | la fecha de ayer |
| `<% time %>` | la hora actual |
| `<% cursor %>` | nada; aquí es donde queda el cursor |

Las variables funcionan en texto plano y dentro de enlaces. En texto plano, las
variables de fecha se convierten en distintivos de fecha en los que puedes hacer
clic; dentro de un enlace o de otro formato se convierten en texto plano. Tras
insertar, el cursor salta a donde pusiste `<% cursor %>`, para que puedas empezar
a escribir de inmediato.

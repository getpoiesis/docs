---
title: Plantillas
sidebar_position: 15
---

# Plantillas

Las plantillas son bloques reutilizables que sueltas en cualquier documento — un
encabezado de escena, el esqueleto de un poema, un diseño de registro diario, un
formato de carta. Construye la estructura una vez, luego insértala cuando la
necesites.

## Insertar una plantilla

Dos formas, ambas allá donde esté tu cursor:

- **Menú de barra inclinada** — escribe `/` en el editor, luego el nombre de la
  plantilla (o la palabra `template`), y elígela de la lista.
- **Paleta de comandos** — ábrela con `⌘P` y busca la plantilla.

El bloque se inserta en el cursor, con las variables rellenadas (ver más abajo).

## Guardar una plantilla

Crea lo que quieras reutilizar, luego guárdalo:

- **Guardar el documento entero** — **Guardar documento como plantilla…** en la
  paleta de comandos, o el botón de guardar en la lista de plantillas. Dale un
  nombre.
- **Guardar una selección** — selecciona la parte que quieres y usa **Guardar
  selección como plantilla…**, para conservar solo ese fragmento.

## Plantillas globales o de bóveda

Al guardar, φ pregunta dónde debe vivir:

- **Todas las bóvedas (global)** — disponible en todas partes. Las plantillas
  globales se guardan a nivel de la app, compartidas entre todas las bóvedas, así
  que añadir o quitar una nunca toca los archivos de tu bóveda.
- **Solo esta bóveda** — disponible únicamente en la bóveda actual, y viaja con
  ella.

En la lista de plantillas, ambas se muestran bajo las secciones **Plantillas
globales** y **Esta bóveda**.

## El editor de plantillas

Para cambiar una plantilla, abre el editor **Editar plantilla**. Es una superficie
de escritura independiente — editar una plantilla aquí nunca perturba tu documento
abierto. Edita el contenido y el nombre, luego guarda. También puedes renombrar,
quitar, instalar un archivo de plantilla o abrir la carpeta de plantillas desde la
lista.

## Variables de plantilla

Una plantilla puede incluir variables que se rellenan en el momento en que la
insertas (nunca se guardan ya resueltas). Escríbelas como texto literal:

| Variable        | Se rellena con                                 |
| --------------- | ---------------------------------------------- |
| `<% today %>`   | la fecha de hoy                                |
| `<% tomorrow %>`| la fecha de mañana                             |
| `<% yesterday %>`| la fecha de ayer                              |
| `<% time %>`    | la hora actual                                 |
| `<% cursor %>`  | nada — aquí es donde queda el cursor           |

Las variables funcionan en texto plano y dentro de enlaces. Las variables de fecha
se convierten en distintivos de fecha interactivos en texto plano; dentro de un
enlace o junto a otro formato se resuelven como texto plano. Tras la inserción, tu
cursor salta a donde colocaste `<% cursor %>`, para que puedas empezar a escribir de
inmediato.

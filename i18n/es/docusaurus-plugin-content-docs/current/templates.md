---
title: Plantillas
description: Bloques reutilizables que preparas una vez e insertas en cualquier documento desde el menú de bloques.
---

# Plantillas

Una **plantilla** es un bloque de texto que guardas una vez y usas siempre
que quieras: el encabezado de una escena, la estructura de un poema, un
registro diario, una carta. La insertas en cualquier documento con `/`. Una
plantilla también puede rellenar la fecha de hoy y dejar el cursor de texto
(la barrita que parpadea) justo donde quieres empezar a escribir.

## Usar una plantilla {#use-a-template}

1. Coloca el cursor donde quieras insertar la plantilla.
2. Escribe `/` y el nombre de la plantilla. O escribe `/template` para ver
   todas tus plantillas.
3. Elige la plantilla en el menú.

φ Poiesis inserta la plantilla donde está el cursor y rellena sus variables
(consulta [Rellenar fechas y colocar el cursor](#fill-in-dates-and-the-caret)).

En el menú, cada plantilla lleva uno de estos dos rótulos:

- **Insertar una plantilla guardada**: la plantilla está disponible en todas
  las [bóvedas](./vaults). Una bóveda es la carpeta que guarda lo que
  escribes.
- **Insertar una plantilla de la bóveda**: la plantilla solo está disponible
  en esta bóveda.

## Guardar algo como plantilla {#save-something-as-a-template}

| Para guardar | Haz esto | Dónde se guarda |
| --- | --- | --- |
| El documento entero | Pulsa `⌘P`, elige **Guardar documento como plantilla…** y ponle nombre. | En todas las bóvedas. |
| Una parte del documento | Selecciona esa parte. En la barra de herramientas que aparece, pulsa **›** (**Más herramientas**) y luego **Guardar selección como plantilla…**. Ponle nombre y elige **Todas las bóvedas** o **Solo esta bóveda**. | Donde tú elijas. |

Las plantillas para todas las bóvedas las guarda Poiesis fuera de tus bóvedas.
Añadir o quitar una no cambia los archivos de tu bóveda. Las plantillas de
una sola bóveda se guardan dentro de la carpeta de esa bóveda. Si copias o
mueves la bóveda, van con ella.

## La página Plantillas {#the-templates-page}

Para abrirla, ve a **Notas** y haz clic en **Plantillas**, en **Lugares** de
la barra lateral. O pulsa `⌘K` y escribe «Plantillas».

<img src="/img/app/templates-page-light.png" alt="La página Plantillas en Notas, con tres plantillas en la lista y «Daily log» seleccionada" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/templates-page-dark.png" alt="La página Plantillas en Notas, con tres plantillas en la lista y «Daily log» seleccionada" width="1600" height="1000" loading="lazy" decoding="async" />

La lista muestra todas las plantillas que puedes usar en esta bóveda. Cada
una indica **Esta bóveda** o **En todas las bóvedas**. Haz clic en una
plantilla para ver su contenido.

- **+** (**Nueva plantilla**) crea una plantilla vacía para esta bóveda,
  llamada **Plantilla sin título**.
- **Editar plantilla** abre la plantilla en el editor de plantillas.
- **Quitar plantilla** elimina una plantilla de esta bóveda. Para quitar una
  plantilla de todas las bóvedas, usa Ajustes (lo explicamos en la sección
  siguiente).

## Editar una plantilla {#edit-a-template}

El editor de plantillas es independiente de tus documentos. Editar una
plantilla no cambia el documento que tienes abierto.

<img src="/img/app/template-editor-light.png" alt="El editor de plantillas abierto en un registro diario que usa las variables de fecha y de cursor" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/template-editor-dark.png" alt="El editor de plantillas abierto en un registro diario que usa las variables de fecha y de cursor" width="1600" height="1000" loading="lazy" decoding="async" />

1. Cambia el nombre y el contenido.
2. Pulsa **Guardar**.

Debajo del editor tienes un recordatorio de las variables.

**Ajustes → Plantillas** también muestra tus plantillas, en **Esta bóveda**
y **Plantillas globales**. Cada una tiene un lápiz para editarla y una
papelera para quitarla. Debajo de las listas:

- **Instalar una plantilla…** añade un archivo de plantilla que te haya
  pasado alguien.
- **Abrir carpeta de plantillas** abre la carpeta que guarda las plantillas
  para todas las bóvedas.

## Rellenar fechas y colocar el cursor {#fill-in-dates-and-the-caret}

Una variable es un código corto dentro de una plantilla. Poiesis lo sustituye cada
vez que insertas la plantilla. Por eso la misma plantilla pone hoy la fecha
de hoy y mañana, la de mañana.

Escribe la variable como texto normal en la plantilla:

| Variable | Se sustituye por |
| --- | --- |
| `<% today %>` | La fecha de hoy. |
| `<% tomorrow %>` | La fecha de mañana. |
| `<% yesterday %>` | La fecha de ayer. |
| `<% time %>` | La hora actual. |
| `<% cursor %>` | Nada. Marca dónde queda el cursor, para que empieces a escribir ahí. |

En texto normal, una fecha se convierte en una etiqueta de fecha en la que
puedes hacer clic. Dentro de un enlace o de otro formato, se queda en texto
sin más.

:::tip Una plantilla para cada tipo de día

Crea una plantilla de registro diario con `<% today %>` como encabezado y
`<% cursor %>` debajo. Al insertarla, tienes una página con la fecha de hoy,
lista para escribir.

:::

## Ver también {#see-also}

- [Formato y bloques](./formatting-and-blocks): el menú de bloques (`/`).
- [Diario y páginas matinales](./journal-and-morning-pages)
- [Ajustes](./settings)

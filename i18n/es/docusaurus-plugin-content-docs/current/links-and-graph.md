---
title: Enlaces y el grafo
description: Enlaza un documento con otro mientras escribes, mira qué enlaza con qué y contempla el mapa de toda la bóveda.
---

# Enlaces y el grafo

Un enlace conecta un documento con otro. Para crear uno, escribe `[[` y el
nombre de un documento. φ registra cada enlace en los dos sentidos, de modo
que cualquier documento puede mostrarte tanto los documentos a los que
enlaza como los que enlazan con él. El **grafo** es un dibujo de todos los
enlaces de tu [bóveda](./vaults), la carpeta que guarda lo que escribes.

<img src="/img/app/links-light.png" alt="Una página de investigación con un enlace wiki en el texto y, en el panel de Información, la pestaña Enlaces con sus enlaces salientes, sus retroenlaces y sus fechas enlazadas" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/links-dark.png" alt="Una página de investigación con un enlace wiki en el texto y, en el panel de Información, la pestaña Enlaces con sus enlaces salientes, sus retroenlaces y sus fechas enlazadas" width="1600" height="1000" loading="lazy" decoding="async" />

## Enlazar con otro documento {#link-to-another-document}

1. Escribe `[[` en cualquier punto del texto. Se abre un menú con tus
   documentos.
2. Sigue escribiendo para acortar el menú.
3. Elige el documento con las flechas y `Intro`, o haz clic en él.

<img src="/img/app/link-menu-light.png" alt="Una nota con dos corchetes y unas letras escritas, y el menú de documentos coincidentes abierto" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/link-menu-dark.png" alt="Una nota con dos corchetes y unas letras escritas, y el menú de documentos coincidentes abierto" width="1600" height="1000" loading="lazy" decoding="async" />

Para seguir un enlace, haz clic en él con `⌘` pulsada. En
[modo lectura](./the-editor) basta un clic normal.

Para abrir el documento enlazado al lado del que tienes delante, haz clic en
el enlace con `⌥⌘` pulsadas (consulta
[Documentos lado a lado](./side-by-side)).

Un enlace elegido en el menú apunta al documento en sí: si más adelante le
cambias el nombre, el enlace sigue funcionando. En cambio, un `[[Título]]`
que escribes entero o que pegas busca su documento por el título.

## Enlazar con una página que aún no has escrito {#link-to-a-page-you-havent-written-yet}

1. Escribe `[[` y el título que quieras.
2. Si ningún documento se llama así, la última opción del menú es
   **Crear «…»**. Elígela.

φ escribe el enlace, pero el documento todavía no existe. Hasta que exista,
el enlace se muestra como enlace roto.

El documento se crea cuando sigues el enlace: haz clic en él con `⌘`
pulsada, o haz clic en él en **Enlaces salientes** (lo explicamos en la
sección siguiente). φ crea un documento con ese título y lo abre.

## Ver qué enlaza con qué {#see-what-links-where}

La pestaña **Enlaces** del
[panel de Información](./finding-your-way#the-info-panel) muestra los
enlaces de un documento. Hay tres formas de abrirla:

- Abre el panel de Información (`⇧⌘I`) y elige **Enlaces**.
- Haz clic en el **⋮** del documento y luego en **Enlaces y retroenlaces**.
- Haz clic derecho en la fila del documento, en una lista, y luego en
  **Enlaces wiki**.

La pestaña refleja el documento tal como lo estás leyendo, incluidos los
cambios que aún no has guardado.

| Sección | Qué contiene |
| --- | --- |
| **En este documento** | Los personajes que has mencionado aquí con @. Solo aparece si hay alguno. |
| **Enlaces salientes** | Todos los documentos a los que enlaza este. También figuran los enlaces a documentos que aún no existen, con un icono de crear. Haz clic en uno para crear ese documento. |
| **Retroenlaces** | Todos los documentos que enlazan *con* este. |
| **Fechas enlazadas** | Las fechas que añadiste con `/date`. Haz clic en una para ver ese día en el [calendario](./calendar). |
| **Investigación** y **Notas** | Las páginas de investigación (de Escribir) y las notas vinculadas a este documento. Desde aquí puedes añadir más. Consulta [Investigación](./research). |

Haz clic en cualquier entrada para abrirla. **Grafo local**, al final de la
pestaña, abre el grafo que rodea a este documento.

## Explorar el grafo {#explore-the-graph}

Hay tres formas de abrir el grafo:

- Haz clic en **Grafo**, en **Lugares** de la barra lateral (en Escribir y
  en Notas).
- Pulsa `⌘K` y elígelo.
- Pulsa `⌘G` y después `G`.

<img src="/img/app/graph-light.png" alt="El grafo de una bóveda: los documentos enlazados son puntos grandes unidos por líneas; los que no tienen enlaces, puntos pequeños y tenues" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="El grafo de una bóveda: los documentos enlazados son puntos grandes unidos por líneas; los que no tienen enlaces, puntos pequeños y tenues" width="1600" height="1000" loading="lazy" decoding="async" />

Cada punto es un documento y cada línea, un enlace. Cuantos más enlaces
tiene un punto, más grande es, así que tus documentos más enlazados saltan a
la vista. Los documentos sin enlaces se ven más tenues. Las páginas
matinales, los días del diario y las páginas de investigación nunca aparecen
en el grafo.

- **Haz clic en un punto** para abrir ese documento. Al cerrarlo, vuelves al
  grafo.
- **Pasa el puntero por un punto** para verlo con claridad. Sus enlaces y los
  puntos con los que está enlazado siguen nítidos, y todo lo demás se
  atenúa.
- **Desplázate** para acercar o alejar. **Arrastra** el fondo para moverte.
  Al alejarte, los títulos se desvanecen para que veas la forma del
  conjunto.
- El documento que tienes abierto se muestra en el color de acento.

La barra superior indica cuántos documentos hay en el grafo. Tiene dos
botones:

- **Animar** vuelve a colocar los puntos mientras miras.
- **Actualizar enlaces** reconstruye el grafo a partir de tu texto más
  reciente.

## Cambiar lo que muestra el grafo {#change-what-the-graph-shows}

Pulsa el botón del panel, arriba a la derecha del grafo (`⇧⌘I`). Se abren
los **Ajustes del grafo**:

<img src="/img/app/graph-settings-light.png" alt="El grafo con sus ajustes abiertos al lado" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-settings-dark.png" alt="El grafo con sus ajustes abiertos al lado" width="1600" height="1000" loading="lazy" decoding="async" />

| Grupo | Ajustes |
| --- | --- |
| **Qué grafo** | **Toda la bóveda**, o **Local**: el último documento que abriste y todo lo que está a dos enlaces de él como máximo. |
| **Mostrar** | **Huérfanos** (los documentos sin enlaces) y **Flechas** (el sentido de cada enlace). |
| **Visualización** | **Tamaño de nodo**, **Grosor de enlace**, **Desvanecer texto** y **Tamaño de etiqueta**. |
| **Fuerzas** | **Fuerza de repulsión**, **Distancia de enlace**, **Fuerza central** y **Fuerza de enlace**. Separan los puntos o los acercan. |

**Restablecer valores** recupera los ajustes originales.

Debajo de los ajustes, una línea indica cuántos documentos, cuántos enlaces
y cuántos documentos sin enlaces hay. **Más enlazados** muestra los
documentos con más enlaces. Haz clic en uno para abrirlo.

:::tip Encontrar las notas sin enlaces

**Sin enlazar**, en la barra lateral de Notas, muestra las notas a las que
no llega ningún enlace y de las que no sale ninguno. Consulta
[Notas e ideas al vuelo](./notes).

:::

## Ver también {#see-also}

- [Investigación](./research): notas e investigación vinculadas a un
  capítulo, un proyecto o un personaje.
- [Personajes y autores](./characters-and-authors): las menciones con @.
- [El calendario](./calendar)
- [Documentos lado a lado](./side-by-side)

---
title: Enlaces y el grafo
description: Enlaza un documento con otro mientras escribes, mira qué enlaza adónde y traza el mapa de toda la bóveda.
---

# Enlaces y el grafo

Escribe `[[` y el nombre de otro documento, y los dos quedan enlazados. φ lleva
la cuenta de cada enlace en los dos sentidos, así que desde cualquier página
puedes ver a qué apunta y qué apunta hacia ella. El grafo dibuja toda la red de
una vez.

<img src="/img/app/links-light.png" alt="Una página de investigación con un enlace wiki en su texto, y la pestaña Enlaces del panel de información con sus enlaces salientes, retroenlaces y fechas enlazadas" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/links-dark.png" alt="Una página de investigación con un enlace wiki en su texto, y la pestaña Enlaces del panel de información con sus enlaces salientes, retroenlaces y fechas enlazadas" width="1600" height="1000" loading="lazy" decoding="async" />

## Enlazar a otro documento {#link-to-another-document}

1. Escribe `[[` en cualquier parte del texto. Se abre un menú de documentos.
2. Sigue escribiendo para filtrarlo.
3. Elige el documento con las teclas de flecha y Retorno, o haz clic en él.
4. Para seguir el enlace, mantén pulsado `⌘` y haz clic en él. En el
   [modo de lectura](./the-editor) basta un clic normal.

Un enlace que eliges del menú apunta a ese documento en sí, así que renombrar
el documento más tarde no lo rompe. Un `[[Título]]` que escribes completo o
pegas encuentra su documento por el título.

Haz `⌥⌘`-clic en un enlace para abrir su documento junto al que estás (consulta
[Documentos lado a lado](./side-by-side)).

## Enlazar a una página que aún no has escrito {#link-to-a-page-you-havent-written-yet}

Si ningún documento tiene el título que escribiste, la última entrada del menú
es **Crear «…»**. Elígela y φ escribe el enlace, aunque todavía no haya nada al
otro lado. Se muestra como un enlace roto hasta que la página exista.

La página se crea cuando sigues el enlace: haz `⌘`-clic en él, o haz clic en él
en **Enlaces salientes** (más abajo). φ crea un documento con ese título y lo
abre.

## Ver qué enlaza adónde {#see-what-links-where}

Abre el panel de información (`⇧⌘I`) y elige **Enlaces**. También puedes elegir
**Enlaces y retroenlaces** en el **⋮** del documento, o **Enlaces wiki** en el
menú de clic derecho de una fila. La pestaña sigue al documento que estás
leyendo, incluidos los cambios que aún no has guardado:

| Sección | Qué muestra |
| --- | --- |
| **En este documento** | Los personajes que has mencionado aquí con @. Solo se muestra cuando hay alguno. |
| **Enlaces salientes** | Todos los documentos a los que enlaza este. Los enlaces que todavía no llevan a ninguna parte también aparecen, con un icono de crear; haz clic en uno para crear ese documento. |
| **Retroenlaces** | Todos los documentos que enlazan *a* este, aunque nunca hayas enlazado hacia fuera desde él. |
| **Fechas enlazadas** | Las fechas que has insertado con `/date`. Haz clic en una para mostrar ese día en el [calendario](./calendar). |
| **Investigación** y **Notas** | Las páginas de investigación (en Escribir) y las notas enlazadas a este documento, con formas de añadir más. Consulta [Investigación](./research). |

Haz clic en cualquier entrada para abrirla. **Grafo local**, al pie de la
pestaña, abre el grafo alrededor de este documento.

## Explorar el grafo {#explore-the-graph}

Abre el grafo desde **Grafo** en **Lugares** de la barra lateral (en Escribir y
Notas), desde `⌘K`, o con `⌘G` y luego `G`.

<img src="/img/app/graph-light.png" alt="El grafo de una bóveda: los documentos enlazados dibujados como puntos más grandes unidos por líneas, y los no enlazados como puntos pequeños y tenues" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="El grafo de una bóveda: los documentos enlazados dibujados como puntos más grandes unidos por líneas, y los no enlazados como puntos pequeños y tenues" width="1600" height="1000" loading="lazy" decoding="async" />

Cada punto es un documento y cada línea un enlace. Un punto crece con el número
de enlaces que tiene, así que tus centros destacan, y los documentos sin
enlaces se dibujan más tenues. Las páginas matinales, los días del diario y las
páginas de investigación nunca aparecen: el grafo es la forma de tu escritura
enlazada, no una lista de cada archivo.

- **Haz clic en un punto** para abrir ese documento. Al cerrarlo vuelves al
  grafo.
- **Pasa el puntero sobre un punto** para enfocarlo. Todo lo demás se atenúa, y
  sus enlaces y vecinos siguen nítidos.
- **Desplaza** para hacer zoom y **arrastra** el fondo para moverte. Con el zoom
  alejado, los títulos se desvanecen para que veas la forma.
- El documento que tienes abierto se marca con el color de acento.

La barra de arriba cuenta los documentos dibujados y tiene **Animar**, que
repite cómo se asienta la disposición, y **Actualizar enlaces**, que la
reconstruye a partir del texto más reciente.

## Cambiar lo que muestra el grafo {#change-what-the-graph-shows}

Pulsa el botón del panel, arriba a la derecha del grafo (`⇧⌘I`), para abrir
**Ajustes del grafo**:

| Grupo | Ajustes |
| --- | --- |
| **Qué grafo** | **Toda la bóveda**, o **Local**: el último documento que abriste y todo lo que está a dos enlaces o menos de él. |
| **Mostrar** | **Huérfanos** (documentos sin enlaces) y **Flechas** (hacia dónde apunta cada enlace). |
| **Visualización** | **Tamaño de nodo**, **Grosor de enlace**, **Desvanecer texto** y **Tamaño de etiqueta**. |
| **Fuerzas** | **Fuerza de repulsión**, **Distancia de enlace**, **Fuerza central** y **Fuerza de enlace**, que expanden o agrupan la disposición. |

**Restablecer valores** devuelve el aspecto original. Debajo de los ajustes,
una línea cuenta los documentos, los enlaces y los documentos sin enlaces, y
**Más enlazados** enumera tus mayores centros; haz clic en uno para abrirlo.

:::tip Encontrar cabos sueltos

**Sin enlazar**, en la barra lateral de Notas, lista las notas a las que nada
enlaza y que no enlazan a nada. Consulta [Notas y captura](./notes).

:::

## Ver también {#see-also}

- [Investigación](./research): notas e investigación enlazadas a un capítulo,
  un proyecto o un personaje.
- [Personajes y autores](./characters-and-authors): las menciones con @.
- [El calendario](./calendar)
- [Documentos lado a lado](./side-by-side)

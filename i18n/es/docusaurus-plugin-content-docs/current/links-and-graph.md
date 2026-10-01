---
title: Enlaces y el grafo
---

# Enlaces y el grafo

Las ideas se conectan. φ te permite enlazar un documento con otro en el mismo
momento en que lo mencionas, y luego te muestra esas conexiones de dos formas:
como una lista junto a la página y como un grafo de toda la bóveda. Nada sale de
tu ordenador; el índice de enlaces se construye y se consulta localmente.

<img src="/img/app/graph-light.png" alt="El grafo de una bóveda: documentos y los enlaces entre ellos" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="El grafo de una bóveda: documentos y los enlaces entre ellos" width="1600" height="1000" loading="lazy" decoding="async" />

## Enlazar con `[[wiki-links]]` {#linking-with-wiki-links}

Para enlazar a otro documento, escribe `[[` en cualquier parte del texto. Se
abre un pequeño menú que se va filtrando a medida que sigues escribiendo. Elige
el documento que quieras con las teclas de flecha y `Enter`, o haz clic en él.

Un enlace que eliges del menú apunta a ese documento en sí, así que renombrar el
documento más tarde no lo rompe. Un `[[Título]]` que escribes completo o pegas
encuentra su documento por el título.

Para abrir el documento al que apunta un enlace, mantén pulsado `⌘` y haz clic
en el enlace (en el [modo de lectura](the-editor.md#reading-mode) basta un clic
normal).

### Enlazar a algo que aún no existe {#linking-to-something-that-doesnt-exist-yet}

Si ningún documento tiene exactamente el título que escribiste, la última
entrada del menú es **Crear «…»**. Elígela y φ escribe el enlace, aunque todavía
no haya nada al otro lado. Es una forma rápida de anotar una idea antes de haber
escrito su página.

El documento en sí se crea cuando sigues el enlace: haz `⌘`-clic en él, o haz
clic en él en el panel Enlaces (más abajo). φ crea un documento con ese título y
lo abre.

## El panel Enlaces {#the-links-panel}

Abre el Panel de información (`⇧⌘I`) y elige la pestaña **Enlaces**, o elige
**Enlaces y retroenlaces** en el menú ⋮ del documento. Siempre refleja el
documento que estás leyendo, incluidos los cambios que aún no has guardado:

- **En este documento**: los personajes que has mencionado aquí con @. Haz clic
  en uno para abrir su página. (Solo se muestra cuando hay alguno.)
- **Enlaces salientes**: todos los documentos a los que enlaza este. Haz clic en
  una entrada para ir allí. Los enlaces que todavía no llevan a ninguna parte
  también aparecen, marcados con un **+**; haz clic en uno para crear ese
  documento y abrirlo.
- **Retroenlaces**: todos los documentos que enlazan *a* este. Así encuentras lo
  que hace referencia a la página en la que estás, aunque nunca hayas enlazado
  hacia fuera desde ella.
- **Fechas enlazadas**: las fechas que has insertado con `/date`. Haz clic en
  una para mostrar ese día en el [calendario](calendar.md).
- **Notas sobre esto**: notas y páginas de investigación enlazadas a este
  documento. Usa **Nueva nota sobre esto**, **Vincular una nota…** o **Nueva
  página de investigación** para añadir una. Consulta
  [Investigación](research.md).

Abajo del todo, **Grafo local** abre el grafo centrado en este documento.

## El grafo {#the-graph}

El grafo es un mapa de cómo se articula tu bóveda. Ábrelo desde **Grafo** en
**Lugares** de la barra lateral (en Escribir y Notas), desde `⌘K`, o con
**Ver → Ir a → Grafo** (`⌘G` y luego `G`).

Cada **punto** es un documento, y cada **línea** es un enlace entre dos
documentos. Un punto crece con el número de enlaces que tiene, así que tus
centros destacan. Los documentos sin ningún enlace (huérfanos) se dibujan más
tenues. Las páginas matutinas, los días del diario y las páginas de
investigación nunca aparecen en el grafo: es la forma de tu trabajo enlazado, no
un registro de cada archivo.

### Leer y moverse {#reading-and-moving-around}

- **Haz clic en un punto** para abrir ese documento.
- **Pasa el puntero sobre un punto** para enfocarlo: el resto del grafo se
  atenúa, los enlaces del documento se iluminan y los documentos a los que se
  conecta siguen nítidos. Es una forma rápida de ver todo lo que toca una
  página.
- **Desplaza** para hacer zoom; **arrastra** el fondo para moverte. Aleja el
  zoom para una vista general y las etiquetas se desvanecen para que veas la
  forma; vuelve a acercarte y los títulos regresan.
- El documento que tienes abierto se marca con el color de acento, para que
  encuentres tu sitio y explores hacia fuera desde él.

El grafo se encuadra solo para caber. Su pequeña barra de herramientas muestra
cuántos documentos hay dibujados, y tiene **Animar** (repetir cómo se asienta la
disposición), **Actualizar enlaces** (reconstruir a partir del contenido más
reciente) y **Ajustes del grafo**.

Pulsa `⌘.` para entrar en [Santuario](focus-and-writing-modes.md) y ocultar todo
excepto el grafo.

### Ajustes del grafo {#graph-settings}

Los ajustes están en la columna de lista junto al grafo, y **Ajustes del grafo**
en la barra de herramientas (`⇧⌘I`) los muestra también en el panel derecho:

- **Qué grafo**: **Toda la bóveda**, o **Local**, que muestra el último
  documento que abriste y todo lo que está a dos enlaces o menos de él.
- **Mostrar**: **Huérfanos** (documentos sin enlaces) y **Flechas** (hacia dónde
  apunta cada enlace).
- **Visualización**: **Tamaño de nodo**, **Grosor de enlace**, **Desvanecer
  texto** (con qué facilidad se desvanecen los títulos al alejar el zoom) y
  **Tamaño de etiqueta**.
- **Fuerzas**: **Fuerza de repulsión**, **Distancia de enlace**, **Fuerza
  central** y **Fuerza de enlace**, que expanden o agrupan la disposición.
- **Restablecer valores** vuelve al aspecto estándar.

Debajo de los ajustes, una línea cuenta los documentos, los enlaces y los
documentos sin enlaces, y **Más enlazados** enumera tus mayores centros. Haz
clic en uno para abrirlo.

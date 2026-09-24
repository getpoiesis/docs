---
title: Enlaces y el grafo
sidebar_position: 8
---

# Enlaces y el grafo

Las ideas se conectan. φ te permite enlazar un documento con otro en el mismo
momento en que lo mencionas, y luego te muestra esas conexiones de dos formas:
como una lista junto a la página y como un grafo de toda la bóveda. Nada sale de
tu Mac; el índice de enlaces se construye y se consulta localmente.

<img src="/img/app/graph-light.png" alt="El grafo de una bóveda: documentos y los enlaces entre ellos" width="1600" height="1048" loading="lazy" decoding="async" />
<img src="/img/app/graph-dark.png" alt="El grafo de una bóveda: documentos y los enlaces entre ellos" width="1600" height="1048" loading="lazy" decoding="async" />

## Enlazar con `[[wiki-links]]`

Para enlazar a otro documento, escribe `[[` en cualquier parte del texto. Se abre
un pequeño menú que filtra a medida que sigues escribiendo: elige el documento
que quieras con las teclas de flecha y `Enter`, o haz clic en él.

Los enlaces son por identidad, no por título: una vez que has enlazado a un
documento, renombrarlo más tarde no rompe el enlace.

### Enlazar a algo que aún no existe

Si ningún documento coincide con lo que escribiste, el menú ofrece arriba
**Crear «…»**. Elígelo y φ crea un documento nuevo con ese título y lo enlaza —
una forma rápida de capturar una idea antes de haber escrito su página. También
puedes seguir un enlace sin resolver más tarde desde el panel de Enlaces (más
abajo).

Mantén pulsado `⌘` y haz clic en cualquier wiki-link del editor para abrir el
documento al que apunta. Si ese documento aún no existe, hacer `⌘`-clic lo crea.

## El panel de Enlaces

Abre el panel derecho (`⌘]` lo muestra u oculta) y elige la pestaña **Enlaces**.
Siempre refleja el documento que estás leyendo —incluidas las ediciones que aún
no has guardado— y tiene tres secciones:

- **Enlaces salientes** — cada documento al que enlaza este. Haz clic en cualquier
  entrada para saltar allí.
- **Enlaces sin resolver** aparecen en la misma lista, marcados con un icono
  **+**. Son `[[títulos]]` que has escrito y que todavía no coinciden con ningún
  documento. Haz clic en uno para crear ese documento y abrirlo.
- **Retroenlaces** — cada documento que enlaza *a* este. Así es como encuentras
  qué hace referencia a la página en la que estás, aunque tú nunca hayas enlazado
  hacia fuera desde ella.
- **Fechas enlazadas** — cualquier fecha que hayas referenciado con `/date`, cada
  una enlazando a su día en el calendario.

## La vista de grafo

El grafo es un mapa de cómo se entrelaza tu bóveda. Ábrelo desde
**Ver → Ir a → Grafo** (`⌘G` y luego `G`).

Cada **punto** es un documento, y cada **línea** es un enlace entre dos
documentos. El tamaño de un punto crece con la cantidad de enlaces, así que tus
centros destacan con claridad. Los documentos sin ningún enlace (huérfanos)
aparecen atenuados. Las páginas matinales privadas nunca aparecen en el grafo.

### Leer y desplazarse

- **Haz clic en un punto** para abrir ese documento.
- **Pasa el cursor sobre un punto** para enfocarlo: el resto del grafo se atenúa,
  los enlaces del documento se iluminan y los documentos con los que se conecta
  permanecen resaltados — una forma rápida de ver todo lo que toca una página.
- **Desplázate** para acercar o alejar; **arrastra** el fondo para moverte. Aleja
  para tener una visión general —las etiquetas se desvanecen para que veas la
  forma— y vuelve a acercarte para que regresen los títulos.
- La disposición se organiza sola en vivo y encuadra todo el grafo por ti hasta
  que mueves o haces zoom, momento en el que se queda fija.
- La barra de herramientas tiene **Ajustar el grafo a la vista** para reencuadrar
  todo, **Actualizar enlaces** para reconstruir desde el contenido más reciente, y
  **Opciones del grafo** para afinar el aspecto.

### Opciones del grafo

Abre **Opciones del grafo** (el icono de deslizadores en la barra de herramientas)
para dar forma al grafo:

- **Mostrar huérfanos** — oculta o muestra los documentos sin enlaces.
- **Tamaño de nodo** y **Tamaño de etiqueta** — cómo de grandes son los puntos y
  sus títulos.
- **Desvanecer texto** — con qué facilidad se desvanecen los títulos al alejar.
- **Fuerzas** — la distancia de enlace y el empuje/atracción que dispersa la
  disposición, con **Restablecer valores** para volver al aspecto estándar.

### Saber dónde estás

El grafo muestra toda la bóveda. Para orientarte dentro de ella, abre primero un
documento y luego abre el grafo: el documento en el que estás queda marcado como
el punto activo, así que puedes localizarlo y explorar sus vecinos hacia fuera
desde ahí.

---
title: Santuario y sesiones de escritura
---

# Santuario y sesiones de escritura

Cuando llega el momento de escribir, la interfaz debería hacerse a un lado. El
Santuario despeja todo salvo la página, unos cuantos ajustes más discretos te
ayudan a no perder el hilo, y φ lleva la cuenta de tus sesiones y de tus palabras
sin que tengas que pedírselo.

<img src="/img/app/focus-light.png" alt="Santuario: las palabras y nada alrededor" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/focus-dark.png" alt="Santuario: las palabras y nada alrededor" width="1600" height="1000" loading="lazy" decoding="async" />

## Santuario {#sanctuary}

El Santuario oculta la barra lateral, la lista, el panel de Información y todos
los botones, y te deja a solas con la página. Pulsa `⌘.` para entrar. También
puedes usar **Ver → Santuario**, el icono del Santuario arriba a la derecha de la
página, **Santuario** en el menú ⋮ del documento, o **Santuario** en la paleta de
comandos (`⌘P`).

Está disponible donde hay algo con lo que quedarse a solas: un documento que
estás escribiendo, y el [grafo](./links-and-graph.md). Se queda en la ventana en
la que estás en lugar de pasar a pantalla completa; el elemento de pantalla
completa del menú **Ver** está ahí si quieres ambas cosas.

Mientras estás en el Santuario:

- **Solo la oración en la que estás se mantiene con toda su intensidad**; el
  resto del texto se atenúa. Si has elegido **Párrafo** en
  [Escritura enfocada](#focus-typing), todo el párrafo queda iluminado. Para
  mantenerlo todo con plena intensidad, desactiva **Ajustes → Apariencia → El
  santuario atenúa el resto**.
- **Una línea discreta arriba muestra dónde vive el documento**: su modo,
  proyecto, parte y capítulo, o su carpeta. Haz clic en cualquier paso para ir
  allí; eso sale del Santuario con el documento aún abierto.
- **El recuento de palabras pasa abajo al centro**, con cuántas palabras has
  añadido en esta sesión (**+N en esta sesión**).
- **El desplazamiento de máquina de escribir** tiene su propio botón arriba a la
  derecha, junto a la salida.

Para salir, pulsa `Esc` o `⌘.` otra vez, o haz clic en el icono de arriba a la
derecha. Ir a algún sitio al que el Santuario no pertenece, como el calendario o
un tablero, lo termina por sí solo.

## Desplazamiento de máquina de escribir {#typewriter-scrolling}

El desplazamiento de máquina de escribir mantiene la línea que estás escribiendo
en el centro de la ventana, para que tus ojos se queden quietos y el texto suba a
su encuentro. Actívalo o desactívalo con `⇧⌘T` (o `⌥⌘T`), **Ver → Desplazamiento
de máquina de escribir**, **Desplazamiento de máquina de escribir** en el menú ⋮
del documento, el botón dentro del Santuario, o **Ajustes → Editor →
Desplazamiento de máquina de escribir**.

## Escritura enfocada {#focus-typing}

La escritura enfocada atenúa todo excepto donde estás trabajando, dentro o fuera
del Santuario. Elige cuánto queda iluminado:

- **Oración**: solo la oración actual.
- **Párrafo**: el párrafo actual.
- **Desactivado**: todo queda plenamente iluminado. (El Santuario sigue
  atenuando hasta la oración a menos que lo hayas desactivado.)

Configúralo en **Ver → Escritura enfocada**, en **Ajustes → Editor → Escritura
enfocada**, o con **Alternar escritura enfocada** en la paleta de comandos.

## Modo lectura {#reading-mode}

Cuando quieras leer en lugar de editar, el modo lectura muestra el documento en
solo lectura, para que puedas volver a un borrador sin pulsaciones de tecla
descarriadas. Actívalo o desactívalo con `⌘E`, **Ver → Modo lectura**, **Modo
lectura** en el menú ⋮ del documento, o **Modo lectura** en la paleta de
comandos.

## Sesiones de escritura {#writing-sessions}

Una sesión de escritura es un tramo de trabajo. No tienes que iniciarla: empieza
con tu primera pulsación de tecla y lleva la cuenta de las palabras que añades.
Cuenta las palabras escritas, así que borrar no resta, y una sesión con muchas
revisiones sigue mostrando el trabajo que hiciste.

Una sesión solo cuenta el tiempo mientras de verdad estás escribiendo. Se
**pausa** tras un minuto sin teclear, cuando cambias a otra app, cuando sales
del editor y en el modo lectura. La siguiente pulsación la retoma. Tras veinte
minutos sin una palabra, la sesión termina sola.

Verás la sesión en tres lugares:

- **+N en esta sesión** en la pestaña **Esquema** del panel de Información, bajo
  el recuento de palabras.
- **+N en esta sesión** junto al recuento de palabras en el Santuario.
- **N min esta sesión** en el Inicio de **Escribir**, en la tarjeta de Hoy.

Si prefieres decidir tú cuándo empieza una sesión, desactiva **Iniciar sesiones
automáticamente** en **Ajustes → Ajustes de escritura**. Luego usa **Iniciar
sesión de escritura** en la paleta de comandos para empezar una, y **Terminar
sesión de escritura** para detenerla. Ambos comandos funcionan sea cual sea el
ajuste.

Tu **sesión más larga** y tu **mayor número de palabras en una sesión** se
conservan como récords personales, que se muestran en las estadísticas del
documento (ver más abajo).

## Recuento de palabras y estadísticas {#word-count--statistics}

El recuento de palabras de un documento está en la esquina inferior derecha de
la página. Las notas no lo muestran, porque una nota no se escribe con una
extensión en mente.

Haz clic en el recuento para ver las estadísticas del documento:

- **Palabras**, **Caracteres**, **Oraciones** y **Tiempo de lectura**.
- **Facilidad de lectura** y **Nivel escolar**, si **Estadísticas de
  legibilidad** está activado en **Ajustes → Ajustes de escritura**.
- Una pequeña gráfica del recuento de palabras del documento a lo largo del
  tiempo, titulada **Recuento · N días trabajados**, en cuanto tiene historial
  de más de un día.
- **Total de la bóveda**, **Documentos** y **Palabras totales**: las palabras
  de la bóveda ahora, cuántos documentos contiene y todas las palabras que has
  escrito en ella.
- **Sesión más larga** y **Mejor sesión (palabras)**, en cuanto tengas alguna.

## Metas de palabras {#word-goals}

Dale un objetivo a un documento con **Definir meta de palabras** en su menú ⋮, o
con el campo **Meta de palabras** en **Detalles…**. Con una meta definida:

- El recuento de la esquina muestra **palabras / meta palabras**, por ejemplo
  *1,240 / 3,000 palabras*.
- La pestaña **Esquema** del panel de Información muestra una barra que se llena
  a medida que escribes, y el porcentaje de la meta que has alcanzado (por
  ejemplo *41% de 3,000*).

Consulta [Proyectos](./collections.md) para metas de toda una obra.

## Mostrar Markdown {#show-markdown}

Si piensas en Markdown, **Ajustes → Editor → Mostrar Markdown** dibuja los
marcadores (`**`, `#`, `[ ]( )`, etc.) de forma tenue alrededor del formato en la
línea que estás escribiendo, y los vuelve a ocultar en las líneas que dejas.
Solo cambia lo que ves; tus documentos quedan exactamente como están.

---
title: Concentración y modos de escritura
sidebar_position: 14
---

# Concentración y modos de escritura

Cuando llega el momento de escribir, la interfaz debería desaparecer. φ tiene varias
maneras de aquietar la página — usa tanto o tan poco como quieras.

## Modo concentración

El modo concentración oculta todos los elementos de la interfaz — barra lateral,
paneles, barra de estado — dejando solo la página. Actívalo con `⌘⇧F` (o **Modo
concentración** en la paleta de comandos, `⌘P`). Vuelve a pulsarlo para traerlo todo
de vuelta.

## Santuario

El Santuario es el ajuste más profundo: la interfaz oculta *y* la ventana llevada a
pantalla completa, para que nada más sea visible. Actívalo con `⌘⇧↩`. Dura toda la
sesión — déjalo igual que como entraste.

## Desplazamiento de máquina de escribir

El desplazamiento de máquina de escribir mantiene el cursor centrado en la pantalla,
para que la línea que estás escribiendo se quede quieta y el texto suba a su
encuentro. Actívalo en **Ajustes → Editor → Desplazamiento de máquina de escribir**,
o con **Desplazamiento de máquina de escribir** en la paleta de comandos.

## Escritura enfocada

La escritura enfocada atenúa todo excepto donde estás trabajando, para que tu ojo
descanse en el pensamiento actual. Elige el alcance:

- **Oración** — solo la oración actual permanece brillante.
- **Párrafo** — el párrafo actual permanece brillante.
- **Desactivado** — todo está plenamente iluminado.

Configúralo en **Ajustes → Editor → Escritura enfocada**, en el menú **Ver →
Escritura enfocada**, o desde la paleta de comandos.

## Modo lectura

Cuando quieras leer en lugar de editar, el modo lectura abre el documento en solo
lectura — una forma deliberada de volver a visitar un borrador sin riesgo de
pulsaciones de tecla descarriadas. Actívalo con `⌘E`. Vuelve a pulsarlo para volver
a la edición.

## Sesiones de escritura

Una sesión de escritura registra el esfuerzo de una sentada. Inicia una desde el
botón de **reproducir** a la derecha de la barra de estado (o simplemente empieza a
escribir), y muestra:

```
active time · words · wpm
```

- **Tiempo activo** cuenta solo mientras escribes de verdad. Se **pausa
  automáticamente** cuando te quedas inactivo, cuando la ventana pierde el foco y
  cuando sales del editor (para Ajustes, el grafo o el modo lectura).
- **Palabras** es el total bruto de palabras escritas en esta sesión — las
  eliminaciones no restan — así que una sentada con muchas revisiones sigue
  reflejando el trabajo.
- **ppm** es tu ritmo a lo largo del tiempo activo.

Usa los botones de **pausar/reanudar** y **detener** en la barra de estado para
controlar la sesión a mano. Las sesiones viven mientras corre la app; salir las
termina. Tu **sesión más larga** y tu **mayor número de palabras en una sesión** se
conservan como récords personales.

## Estadísticas de escritura

Haz clic en el recuento de palabras en la barra de estado para ver el cuadro de
estadísticas del documento: palabras, caracteres, oraciones, tiempo de lectura,
legibilidad (facilidad de lectura y nivel escolar), una pequeña gráfica del recuento
de palabras a lo largo del tiempo, tus totales de toda la bóveda y tus récords de
sesión.

## Metas de palabras

Define un objetivo por documento con **Definir meta de palabras**. Cuando hay una
meta definida, la barra de estado muestra tu progreso como `palabras / meta` con una
pequeña barra que se llena conforme escribes y marca la meta como alcanzada cuando
llegas a ella.

---
title: Ortografía
sidebar_position: 6
---

# Ortografía

φ revisa la ortografía mientras escribes. Las palabras mal escritas aparecen con
un subrayado ondulado sutil, y puedes corregirlas desde el **menú contextual**
(clic derecho): elige una sugerencia o **Añadir al diccionario** para conservar
la palabra.

Todo está en **Ajustes → Idioma**.

## Revisar todo el documento

Cuando prefieras revisar un borrador terminado en una sola pasada deliberada, usa
**Revisar ortografía**. φ recorre cada error en orden y, para cada uno, muestra un
pequeño panel con sugerencias y tus opciones; nunca se corrige nada de forma
automática:

- **Cambiar** — reemplaza esta palabra por la sugerencia (o escribe la tuya en el
  cuadro).
- **Cambiar todo** — corrige todas las apariciones de la palabra en el documento.
- **Ignorar** / **Ignorar todo** — omite esta, o todas las apariciones, durante el
  resto de la pasada.
- **Añadir al diccionario** — conserva la palabra en todas partes, ahora y en
  documentos futuros.

La palabra en revisión se resalta en el texto para que siempre la veas en
contexto, y un contador indica cuántas quedan. Inicia la pasada como prefieras:

- la **paleta de comandos** (`⌘P`) → **Revisar ortografía…**
- **Editar → Revisar ortografía…** en el menú
- el atajo **⌘⇧L**
- el botón de ortografía en la **barra de estado**

La revisión de todo el documento usa los diccionarios integrados de φ (inglés,
español y francés vienen incluidos), así que funciona incluso cuando tu motor
habitual es el corrector del sistema operativo. Si el idioma del documento no tiene
un diccionario instalado, φ te lleva a **Ajustes → Idioma → Ortografía** para
añadir uno.

## Elegir un motor

En **Ajustes → Idioma → Ortografía** eliges cómo revisa φ la ortografía:

- **Nativo** (predeterminado): usa el corrector de tu sistema operativo. Es ligero
  y deja intactas las herramientas de escritura del sistema. En macOS el idioma
  se detecta automáticamente; en Windows y Linux eliges los idiomas abajo.
- **Mejorado**: usa los diccionarios incluidos de φ, para una revisión de la
  misma calidad en cualquier sistema operativo. Inglés, español, español
  (México) y francés vienen integrados.

Desactiva toda la función con el interruptor **Revisar ortografía**.

## Idiomas

Elige qué idiomas revisar en **Ajustes → Idioma → Ortografía → Idiomas**. Puedes
elegir más de uno: un documento se revisa contra todos ellos, así que una palabra
correcta en *cualquiera* de los idiomas elegidos no se marca. Esto es lo que hace
posible los documentos multilingües.

### Instalar más idiomas

El motor Mejorado puede usar cualquier diccionario Hunspell. Para añadir uno:

1. Descarga un diccionario Hunspell (una carpeta con un archivo `.aff` y uno `.dic`).
2. **Ajustes → Idioma → Ortografía → Instalar idioma…** y selecciona la carpeta.

## Anulaciones por documento y por bóveda

Los ajustes de ortografía se heredan en cascada: **documento → bóveda → global**.
El nivel más específico gana, y lo que no definas hereda del nivel superior.

- **Para un documento:** haz clic en el chip de ortografía de la **barra de
  estado** (parte inferior de la ventana) para fijar el motor y los idiomas de
  este documento. Elige **Usar predeterminado** para quitar la anulación.
- **Para una bóveda:** **Ajustes → Idioma → Esta bóveda** fija un valor
  predeterminado para todos los documentos de la bóveda actual. Elige **Usar
  global** para quitarlo.

## Diccionario personal

Las palabras que añades con **Añadir al diccionario** se recuerdan entre
documentos. Revísalas o elimínalas en **Ajustes → Idioma → Diccionario
personal**: al quitar una palabra, φ vuelve a marcarla.

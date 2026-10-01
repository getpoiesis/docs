---
title: Ortografía
---

# Ortografía

φ revisa tu ortografía mientras escribes. Las palabras mal escritas reciben un
sutil subrayado ondulado, y puedes corregirlas directamente desde el menú
contextual, o revisar todo el documento en una pasada tranquila.

Todo está en **Ajustes → Idioma**.

## Corregir una palabra sobre la marcha {#fixing-a-word-as-you-go}

Haz clic derecho en una palabra subrayada. El menú se abre con las sugerencias
de φ arriba: elige una para reemplazar la palabra. Elige **Añadir al
diccionario** para conservar la palabra y que deje de marcarse.

## Revisar todo el documento {#check-the-whole-document}

Cuando prefieras revisar un borrador terminado en una sola pasada deliberada,
ejecuta **Revisar ortografía**. φ recorre cada error en orden y, para cada uno,
muestra un pequeño panel con un cuadro de **Corrección** y sugerencias. Nunca se
corrige nada automáticamente:

- **Cambiar**: reemplaza esta palabra por la sugerencia (o por lo que hayas
  escrito en el cuadro).
- **Cambiar todo**: corrige todas las apariciones de la palabra en el documento.
- **Ignorar** / **Ignorar todo**: sáltate esta, o todas las apariciones, durante
  el resto de la pasada.
- **Añadir al diccionario**: conserva la palabra, ahora y en documentos futuros.

La palabra en revisión se resalta en el texto para que siempre la veas en
contexto, y un contador muestra cuántas quedan. Cuando φ no tiene nada que
ofrecer, dice **Sin sugerencias**, y puedes escribir tú mismo la corrección.

Empieza la pasada como prefieras:

- **Revisar ortografía…** en el menú ⋮ del documento
- **Edición → Revisar ortografía…** en la barra de menús, o `⌘;`
- **Revisar ortografía…** en la paleta de comandos (`⌘P`)

La revisión de todo el documento siempre usa los diccionarios incluidos en φ
(inglés, español, español de México y francés), incluso cuando tu motor habitual
es el corrector de tu sistema operativo. Si ninguno de los idiomas del documento
tiene un diccionario incluido, φ te dice que no puede hacer la revisión y te
ofrece **Abrir ajustes**, para que elijas un idioma que sí tenga.

## Ajustes {#settings}

### Ortografía {#spelling}

En **Ajustes → Idioma → Ortografía**:

- **Revisar ortografía**: activa o desactiva el subrayado.
- **Motor**: cómo revisa φ mientras escribes.
  - **Nativo** (el predeterminado) usa el corrector ortográfico de tu sistema
    operativo. Es ligero y deja intactas las herramientas de escritura de tu
    sistema.
  - **Mejorado** usa los diccionarios incluidos en φ, así obtienes los mismos
    resultados en cualquier sistema operativo.
- **Idiomas**: qué idiomas revisar. Puedes elegir más de uno: una palabra que es
  correcta en *cualquiera* de ellos no se marca, y eso es lo que hace funcionar
  los documentos multilingües. Con el motor Nativo en macOS, el sistema detecta
  el idioma por sí mismo.

### Esta bóveda {#this-vault}

En **Ajustes → Idioma → Esta bóveda**, **Predeterminado para esta bóveda**
permite que una bóveda revise de forma distinta al resto: **Usar global** (seguir
los ajustes de arriba), **Nativo** o **Mejorado**. Si eliges **Mejorado** aquí,
aparece una lista de idiomas para que elijas también los idiomas de esta bóveda.

## Diccionario personal {#personal-dictionary}

Las palabras que conservas se recuerdan entre documentos, pero dónde se guardan
depende del motor:

- Con **Mejorado**, y desde la revisión de todo el documento, **Añadir al
  diccionario** guarda la palabra en la lista propia de φ. Puedes revisarla, y
  quitar palabras, en **Ajustes → Idioma → Diccionario personal**. Quitar una
  palabra hace que φ vuelva a marcarla.
- Con **Nativo**, **Añadir al diccionario** en el menú contextual entrega la
  palabra al corrector ortográfico del sistema, así que no aparece en la lista
  de φ.

---
title: Ortografía
description: La ortografía revisada mientras escribes, y una pasada tranquila por todo un documento.
---

# Ortografía

φ revisa tu ortografía mientras escribes. Una palabra mal escrita recibe un
sutil subrayado ondulado que puedes corregir desde el menú contextual, o puedes
dejarlas todas para una pasada deliberada cuando el borrador esté terminado.
Nunca se corrige nada por ti.

## Revisar todo un documento {#check-a-whole-document}

1. Abre el documento.
2. Pulsa `⌘;`, o elige **Edición → Revisar ortografía…**, **Revisar
   ortografía…** en el menú ⋮ del documento, o **Revisar ortografía…** en la
   paleta de comandos.
3. Para cada palabra en la que se detiene φ, elige qué hacer (abajo).
4. Cuando φ dice que ha terminado, no queda nada por revisar.

La palabra en revisión se resalta en el texto, para que la veas donde está, y
un contador muestra cuántas quedan.

| Opción | Qué hace |
| --- | --- |
| **Cambiar** | Reemplaza esta palabra por la sugerencia, o por lo que hayas escrito en **Corrección**. |
| **Cambiar todo** | Reemplaza todas las apariciones en el documento. |
| **Ignorar** | Se salta esta. |
| **Ignorar todo** | Se salta todas las apariciones, durante el resto de esta pasada. |
| **Añadir al diccionario** | Conserva la palabra, aquí y en todos los demás documentos. |

Cuando φ no tiene nada que sugerir dice **Sin sugerencias**, y puedes escribir
tú la corrección.

La revisión de todo el documento usa los diccionarios propios de φ: inglés,
español, español (México) y francés. Si ninguno de los idiomas que revisas
tiene uno, φ te lo dice y te ofrece **Abrir ajustes**, para que elijas un
idioma que sí tenga.

## Corregir una palabra sobre la marcha {#fix-a-word-as-you-go}

Haz clic derecho en una palabra subrayada. Las sugerencias de φ están arriba
del menú: elige una para reemplazar la palabra, o elige **Añadir al
diccionario** para conservarla y que deje de marcarse.

## Elegir cómo revisa φ {#choose-how-φ-checks}

En **Ajustes → Idioma → Ortografía**:

- **Revisar ortografía**: el subrayado, activado o desactivado.
- **Motor**: cómo revisa φ mientras escribes.
  - **Nativo**, el predeterminado, usa el corrector ortográfico de tu propio
    ordenador.
  - **Mejorado** usa los diccionarios de φ, para obtener los mismos resultados
    en cualquier ordenador.
- **Idiomas**: qué idiomas revisar. Elige más de uno y una palabra que es
  correcta en cualquiera de ellos no se marca, así que un documento en dos
  idiomas se lee limpio. Con **Nativo** en un Mac, el sistema detecta el idioma
  por sí mismo.

Una bóveda puede revisar de forma distinta al resto: en **Ajustes → Idioma →
Esta bóveda**, pon **Predeterminado para esta bóveda** en **Usar global**,
**Nativo** o **Mejorado**. Con **Mejorado**, también puedes elegir los idiomas
de esa bóveda.

## Añadir un idioma que φ no trae {#add-a-language-φ-doesnt-bring}

El motor **Mejorado** puede revisar cualquier idioma que tenga un diccionario
Hunspell, el tipo que usan LibreOffice y Firefox: una carpeta con un archivo
`.aff` y otro `.dic`.

1. En **Ajustes → Idioma → Esta bóveda**, pon **Predeterminado para esta
   bóveda** en **Mejorado**.
2. Junto a **Añadir un idioma**, pulsa **Añadir…** y elige la carpeta del
   diccionario.
3. Marca el idioma nuevo en los **Idiomas** de esa bóveda.

## Tu diccionario personal {#your-personal-dictionary}

Dónde va una palabra que conservas depende del motor:

- Con **Mejorado**, y desde la revisión de todo el documento, **Añadir al
  diccionario** guarda la palabra en la lista propia de φ. Revísala, y quita
  palabras, en **Ajustes → Idioma → Diccionario personal**. Una palabra que
  quitas vuelve a marcarse.
- Con **Nativo**, **Añadir al diccionario** en el menú contextual entrega la
  palabra al corrector ortográfico de tu ordenador, así que no está en la lista
  de φ.

## Ver también {#see-also}

- [Diccionario y tesauro](./dictionary)
- [Temas e idiomas](./themes-and-languages)
- [Ajustes](./settings)

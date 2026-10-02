---
title: Ortografía
description: La ortografía, revisada mientras escribes o de una sola pasada tranquila por todo el documento.
---

# Ortografía

φ revisa la ortografía mientras escribes y marca con un subrayado ondulado
cada palabra mal escrita. Corrígelas una a una según las veas o, si lo
prefieres, revisa todo el documento de una sola pasada cuando termines el
borrador. φ nunca corrige una palabra por ti.

## Revisar todo un documento {#check-a-whole-document}

1. Abre el documento.
2. Pulsa `⌘;`. También puedes elegir **Edición → Revisar ortografía…**, o
   **Revisar ortografía…** en el menú ⋮ del documento o en la paleta de
   comandos.
3. φ se detiene en la primera palabra mal escrita. Elige qué hacer con ella
   (consulta la tabla de abajo).
4. Repite el paso con cada palabra, hasta que φ te avise de que ha terminado.

<img src="/img/app/spelling-check-light.png" alt="El cuadro de revisión ortográfica detenido en una palabra mal escrita, con sugerencias y los botones para cambiarla, ignorarla o añadirla al diccionario" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/spelling-check-dark.png" alt="El cuadro de revisión ortográfica detenido en una palabra mal escrita, con sugerencias y los botones para cambiarla, ignorarla o añadirla al diccionario" width="1600" height="1000" loading="lazy" decoding="async" />

φ resalta la palabra en el texto, para que la leas dentro de su frase. Un
contador indica cuántas palabras quedan.

| Opción | Qué hace |
| --- | --- |
| **Cambiar** | Sustituye esta palabra por la sugerencia, o por lo que hayas escrito en **Corrección**. |
| **Cambiar todo** | Sustituye la palabra todas las veces que aparece en el documento. |
| **Ignorar** | Pasa por alto esta aparición. |
| **Ignorar todo** | Pasa por alto todas las apariciones durante el resto de esta pasada. |
| **Añadir al diccionario** | Da la palabra por buena, aquí y en todos los demás documentos. |

Cuando φ no tiene nada que proponer, muestra **Sin sugerencias**. En ese
caso, escribe tú la corrección en **Corrección**.

La revisión de todo el documento usa los diccionarios propios de φ: inglés,
español, español (México) y francés. Si φ no tiene diccionario para ninguno
de los idiomas que revisas, te avisa y te ofrece **Abrir ajustes**. Allí
puedes elegir un idioma que φ sí tenga.

## Corregir una palabra sobre la marcha {#fix-a-word-as-you-go}

1. Haz clic derecho en una palabra subrayada. Las sugerencias de φ aparecen
   al principio del menú.
2. Haz clic en una sugerencia para sustituir la palabra. O elige **Añadir al
   diccionario** para darla por buena y que φ deje de subrayarla.

## Elegir cómo revisa φ {#choose-how-φ-checks}

Abre **Ajustes → Idioma → Ortografía**. Hay tres ajustes:

- **Revisar ortografía** activa o desactiva el subrayado.
- **Motor** define cómo revisa φ mientras escribes.
  - **Nativo**, el predeterminado, usa el corrector ortográfico de tu
    ordenador.
  - **Mejorado** usa los diccionarios de φ. Los resultados son los mismos en
    cualquier ordenador.
- **Idiomas** define qué idiomas se revisan. Si eliges más de uno, φ acepta
  cualquier palabra que sea correcta en alguno de ellos, algo muy útil cuando
  un documento mezcla dos idiomas. Con **Nativo** en un Mac, el sistema
  detecta el idioma automáticamente.

Cada [bóveda](./vaults) (la carpeta donde se guarda lo que escribes) puede
tener su propio ajuste. En **Ajustes → Idioma → Esta bóveda**, pon
**Predeterminado para esta bóveda** en **Usar global**, **Nativo** o
**Mejorado**. Con **Mejorado**, también puedes elegir los idiomas de esa
bóveda.

## Añadir un idioma que φ no trae {#add-a-language-φ-doesnt-bring}

El motor **Mejorado** puede revisar cualquier idioma para el que exista un
diccionario Hunspell, el mismo tipo de diccionario que usan LibreOffice y
Firefox. Es una carpeta que contiene un archivo `.aff` y otro `.dic`.

1. En **Ajustes → Idioma → Esta bóveda**, pon **Predeterminado para esta
   bóveda** en **Mejorado**.
2. Junto a **Añadir un idioma**, pulsa **Añadir…** y elige la carpeta del
   diccionario.
3. Marca el idioma nuevo en los **Idiomas** de esa bóveda.

## Tu diccionario personal {#your-personal-dictionary}

Cuando das una palabra por buena, el lugar donde se guarda depende del motor:

- **Mejorado**, y la revisión de todo el documento: **Añadir al diccionario**
  guarda la palabra en la lista propia de φ. Para ver la lista o quitar una
  palabra, abre **Ajustes → Idioma → Diccionario personal**. Si quitas una
  palabra, φ vuelve a subrayarla.
- **Nativo**: **Añadir al diccionario**, en el menú del clic derecho, guarda
  la palabra en el corrector ortográfico de tu ordenador. La palabra no
  aparece en la lista de φ.

## Ver también {#see-also}

- [Diccionario y tesauro](./dictionary)
- [Temas e idiomas](./themes-and-languages)
- [Ajustes](./settings)

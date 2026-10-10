---
title: Importar
description: Trae tu trabajo a φ Poiesis desde Markdown, desde otras aplicaciones y desde tus propias copias.
---

# Importar

A φ Poiesis puedes traer textos de otras aplicaciones de escritura y también copias que
hayas hecho con Poiesis. Lo que importas se convierte en documentos normales de Poiesis y
conserva sus fechas, sus enlaces y sus imágenes.

Los documentos importados van a una [bóveda](./vaults.md), la carpeta donde Poiesis
guarda tu trabajo.

## Importar archivos Markdown {#import-markdown-files}

1. Abre la paleta de comandos (`⌘P`).
2. Elige **Importar archivo(s) Markdown…**.
3. Selecciona los archivos `.md` o `.txt`.

También puedes empezar desde el menú de la bóveda, en lo alto de la barra
lateral: elige **Importar…**.

Poiesis lee el *front matter*, los encabezados, las listas y las tareas, los avisos,
los resaltados, las notas al pie y los enlaces wiki.

## Importar una carpeta de notas {#import-a-folder-of-notes}

Si vienes de otra aplicación de notas, como Obsidian o Logseq, puedes importar
la carpeta entera.

1. Abre la paleta de comandos (`⌘P`).
2. Elige **Importar carpeta Markdown → a la bóveda actual…** o **Importar
   carpeta Markdown → como bóveda nueva…**.
3. Selecciona la carpeta.

Poiesis respeta la estructura de la carpeta. También conserva:

- **La fecha en que se creó cada nota.** Poiesis la saca de una fecha escrita en el
  archivo, del nombre de archivo de una nota diaria (como `2022_11_11`) o del
  historial de git de la carpeta.
- **Los enlaces entre notas.** Poiesis descodifica los nombres de archivo
  codificados, lee las propiedades `title::` y `alias::`, y trata las
  `#etiquetas` como enlaces a páginas. Los retroenlaces y el grafo funcionan en
  cuanto termina la importación.

## Importar un documento o un proyecto de Poiesis {#import-a-Poiesis-document-or-project}

Un archivo `.poiesis` creado con **Guardar una copia** o con **Copia del
proyecto** se abre con sus imágenes. Hay tres maneras de importarlo:

- En la paleta de comandos, elige **Importar un documento Poiesis (`.poiesis`)…**.
- Elige **Archivo → Importar documento φ…**.
- Arrastra el archivo hasta la ventana de Poiesis.

## Ver también {#see-also}

- [Bóvedas](./vaults.md): adónde va lo que importas.
- [Compartir una copia](./share-a-copy.md): cómo hacer una copia del proyecto.

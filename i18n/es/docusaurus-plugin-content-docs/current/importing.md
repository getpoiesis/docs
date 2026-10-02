---
title: Importar
description: Trae tu trabajo a φ desde Markdown, otras aplicaciones y tus propias copias.
---

# Importar

φ lee trabajo de otras herramientas de escritura y de copias que has hecho tú
mismo. Lo que importas se convierte en documentos normales de φ, con sus
fechas, enlaces e imágenes intactos.

## Importar archivos Markdown {#import-markdown-files}

1. Abre la paleta de comandos (`⌘P`) y elige **Importar archivo(s) Markdown…**.
   También está en **Importar…**, en el menú de la bóveda en lo alto de la
   barra lateral.
2. Elige los archivos `.md` o `.txt`.

φ lee el front matter, los encabezados, las listas y tareas, los avisos
destacados, los resaltados, las notas al pie y los enlaces wiki.

## Importar una carpeta de notas {#import-a-folder-of-notes}

¿Vienes de otra aplicación de notas, como Obsidian o Logseq? Trae la carpeta
entera:

1. En la paleta de comandos, elige **Importar carpeta Markdown → a la bóveda
   actual…** o **Importar carpeta Markdown → como bóveda nueva…**.
2. Elige la carpeta.

φ conserva la estructura de la carpeta, y además:

- **la fecha de creación original de cada nota**, a partir de una fecha en el
  archivo, de un nombre de archivo de nota diaria (como `2022_11_11`) o del
  historial git de la carpeta;
- **los enlaces entre notas**: decodifica los nombres de archivo codificados,
  respeta las propiedades `title::` y `alias::`, y trata las `#tags` como
  enlaces a páginas, así que los retroenlaces y el grafo funcionan desde el
  primer momento.

## Importar un documento o proyecto de φ {#import-a-φ-document-or-project}

Un archivo `.poiesis` hecho con **Guardar una copia** o **Copia del proyecto**
se abre con sus imágenes:

- elige **Importar un documento φ (`.poiesis`)…** en la paleta de comandos, o
  **Archivo → Importar documento φ…**; o
- arrastra el archivo a la ventana de φ.

## Ver también {#see-also}

- [Bóvedas](./vaults): dónde acaba lo que importas.
- [Compartir una copia](./share-a-copy): cómo hacer una copia del proyecto.

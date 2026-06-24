---
title: Exportar e imprimir
sidebar_position: 17
---

# Exportar e imprimir

Tu escritura vive en archivos `.poiesis`, pero el mundo quiere documentos de
Word, PDF, libros electrónicos y Markdown. φ exporta a todos ellos — un único
documento para compartir un borrador, o una colección entera compilada en un
libro terminado.

Nada sale de tu Mac en el proceso: cada exportación se genera localmente y se
escribe en un archivo que tú eliges con un cuadro de diálogo Guardar normal.

:::caution Exportar es la parte más áspera de φ ahora mismo

φ es software alfa, y **exportar — EPUB, PDF, Word (DOCX) y HTML compilado — es el
área donde aún se trabaja con más intensidad.** Es la parte de la app que hoy más
probablemente te decepcione, así que afróntala con las expectativas adecuadas:

- **Trata cada exportación como un borrador, no como un archivo final.** Abre el
  resultado en la app de destino (Word, un visor de PDF, un lector de EPUB) y
  revísalo antes de fiarte de él. Cuenta con tener que hacer algo de limpieza
  allí.
- **Los diseños complejos son donde se resiente** — abundancia de notas al pie,
  citas y bibliografías, estructura de capítulos anidada, imágenes y portadas a
  sangre completa, y bloques poco habituales pueden representarse de forma
  imperfecta o necesitar arreglos manuales.
- **Tu fuente siempre está a salvo.** Exportar nunca cambia tus archivos
  `.poiesis`, así que puedes volver a exportar tantas veces como quieras — y los
  exportadores mejoran con cada versión, de modo que un documento que hoy se
  exporta mal debería exportarse mejor pronto.
- **Para obtener los resultados más fieles hoy**, Markdown y HTML son los más
  estables; DOCX, EPUB y PDF están mejorando, pero son los menos maduros.

Si una exportación sale mal, eso es terreno conocido — tus comentarios sobre
*qué* documentos fallan y *cómo* son lo más útil que puedes enviar durante la
fase alfa.

:::

## Exportar un único documento

Con un documento abierto, abre la paleta de comandos (`⌘P`) y elige **Exportar
documento como…** para el formato que quieras. φ lo genera y te pregunta dónde
guardarlo.

Los formatos de documento son:

- **Markdown / Obsidian (`.md`)** — Markdown al estilo de Obsidian: avisos,
  `==highlight==`, `[[wiki-links]]`, notas al pie. Lo mejor para llevar texto a
  otra app de Markdown o a un sitio estático, o para archivar en texto plano.
- **HTML (`.html`)** — HTML semántico y autónomo. Lo mejor para la web o para
  pegar en otra herramienta con el formato intacto.
- **Texto plano (`.txt`)** — solo las palabras, sin formato. Lo mejor cuando una
  herramienta quiere texto en bruto.

Estos exportan el único documento activo. Para compilar varios documentos en un
solo libro, usa una colección (más abajo).

## Exportar una colección (un libro o manuscrito)

Una [colección](collections.md) compila sus documentos — en el orden del árbol,
partes y capítulos incluidos — en una obra terminada. Abre la página de la
colección en el espacio **Escribir** y usa los botones de la parte inferior:

- **Compilar** — un único documento **HTML** autónomo, enmarcado con una portada,
  un índice y el estilo de exportación de la colección. Útil para previsualizar
  el libro entero en un navegador.
- **PDF** — un PDF listo para imprimir (ver más abajo).
- **EPUB** — un libro electrónico EPUB3: tu estilo de editor y la fuente elegida
  incrustados, imágenes incluidas, un índice de navegación consciente del árbol y
  la portada.
- **DOCX** — un documento de Word con los encabezados, marcas, listas, avisos y
  saltos de escena conservados. Lo mejor para editores, envíos y cualquiera que
  trabaje en Word.

Cada exportación de colección incrusta la **imagen de portada**, construye un
índice a partir de la estructura del libro y puede cerrar con una página **Sobre
el autor** cuando el perfil de autor tiene una biografía o una foto. La firma y
los datos del autor provienen del perfil de autor de la colección.

## Imprimir y PDF

φ no imprime a través del cuadro de diálogo de impresión del sistema; en su lugar
produce un PDF listo para imprimir que puedes imprimir o enviar. El PDF se
construye según las convenciones del libro:

- **Tamaño de papel fijo** — US Letter, con márgenes de libro, un título
  corriente en la parte superior y números de página al pie.
- **Cuerpo WYSIWYG** — cada página se representa con la fuente de editor y la
  medida de texto que elegiste, de modo que el PDF ajusta las líneas igual que lo
  hace el editor.
- **Una página por capítulo** — los capítulos (y las partes) empiezan en una
  página nueva, con aperturas centradas.
- **Verdaderas notas al pie por página** — cada nota al pie se fija al pie de la
  página donde está su marcador. Consulta [Notas al pie y
  citas](footnotes-and-citations.md).
- **Bibliografía en su propia página** — la lista de referencias abre una página
  nueva al final, sin páginas en blanco perdidas antes de ella.
- **Portada a sangre completa** — la imagen de portada llena su página, de borde
  a borde, sin encabezado ni pie corrientes.

## Importar

φ lee trabajo de otras herramientas y de tus propias copias de seguridad.

- **Importar un documento φ (`.poiesis`)** — desde el menú **Archivo**, o
  **Importar un documento φ** en la paleta de comandos (`⌘P`). Esto trae un
  archivo `.poiesis` portátil (con sus imágenes incrustadas) — por ejemplo, una
  copia que guardaste con **Guardar una copia**.
- **Importar archivo(s) Markdown** — elige **Importar archivo(s) Markdown** en la
  paleta de comandos. φ lee archivos Markdown / Obsidian / Logseq, incluido el
  frontmatter, encabezados, listas y tareas, avisos, resaltados y enlaces wiki.
- **Importar una bóveda de Obsidian / Logseq** — elige **Importar bóveda de
  Obsidian / Logseq** en la paleta de comandos para traer toda una carpeta de
  bóveda de forma recursiva, conservando su estructura de carpetas anidada.
  Puedes importarla **a tu bóveda actual** o **como una bóveda nueva**.

## Véase también

- [Colecciones (libros y manuscritos)](collections.md) — estructurar el libro que
  exportas.
- [Notas al pie y citas](footnotes-and-citations.md) — cómo se representa el
  aparato crítico en cada formato.
- [Bóvedas](vaults.md) — dónde aterriza el trabajo importado.

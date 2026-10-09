---
title: Bóvedas
description: Las carpetas donde se guarda lo que escribes, cómo pasar de una a otra y cómo usar una misma bóveda en varios dispositivos.
---

# Bóvedas

Una **bóveda** es el lugar donde se guarda lo que escribes. Es una carpeta
normal y corriente de tu ordenador. Contiene tus documentos, las imágenes que has
añadido y el historial de tus cambios. No hay base de datos ni cuenta.

Como una bóveda es una carpeta normal, puedes hacerle copias de seguridad,
moverla y sincronizarla con tus otros dispositivos.

Tus documentos son archivos `.poiesis`. Es el formato propio de φ Poiesis, así que
otras aplicaciones no pueden abrirlos directamente. Para usar tus textos en
otra aplicación, expórtalos como Markdown, Word, PDF o EPUB. Consulta
[Cómo funciona la exportación](./exporting).

## Crear una bóveda {#make-a-vault}

1. La primera vez que abras Poiesis, elige **Crear una bóveda** o **Abrir una
   carpeta**. Más adelante, haz clic en el nombre de la bóveda, en la parte
   superior de la barra lateral, y elige **Nueva bóveda…** o **Abrir otra
   bóveda…**.
2. En la ventana que se abre, elige una carpeta o crea una nueva. Puede estar
   en cualquier sitio: en Documentos, en una carpeta sincronizada, en un disco
   externo.
3. Poiesis abre la carpeta.

Lo que ocurre después depende de la carpeta:

- Si ya es una bóveda, Poiesis la abre tal como está.
- Si es cualquier otra carpeta, Poiesis la convierte en bóveda. Añade una nota,
  **Welcome to φ**, y un pequeño proyecto de ejemplo, **The Grey Morning**. No
  modifica nada de lo que ya había en la carpeta. Si la carpeta contiene
  archivos `.poiesis`, aparecen en Poiesis.

## Qué hay en la carpeta de una bóveda {#whats-in-a-vault-folder}

| En la carpeta | Qué es |
| --- | --- |
| Archivos `.poiesis` | Tus documentos, un archivo por cada uno. |
| `assets` | Aquí se copian las imágenes que añades, para que a la bóveda no le falte nada. |
| `.trash` | Los documentos que eliminas, hasta que los recuperas desde la **Papelera**, en la parte inferior de la barra lateral. Lo que siga ahí pasados 30 días se elimina definitivamente. |
| `.poiesis-history` o `.git` | El historial de versiones (consulta [Versiones y copias de seguridad](./versions-and-backup)). |
| `.poiesis-vault.json` | Un archivo pequeño que da nombre a la bóveda y recuerda sus ajustes. |

La mayoría de los gestores de archivos ocultan los nombres que empiezan por
punto. Nunca tendrás que modificar tú ninguno de estos archivos: de ellos se
encarga Poiesis.

## Cambiar de bóveda {#switch-between-vaults}

Puedes tener varias bóvedas; por ejemplo, una para una novela y otra para las
notas del día a día. Solo puede haber una abierta a la vez. Cada bóveda tiene
sus propios documentos, su historial y sus
[ajustes de escritura](./setup).

<img src="/img/app/vault-menu-light.png" alt="El menú de la bóveda abierto en la parte superior de la barra lateral" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/vault-menu-dark.png" alt="El menú de la bóveda abierto en la parte superior de la barra lateral" width="1600" height="1000" loading="lazy" decoding="async" />

Hay tres formas de cambiar:

- **El menú de la bóveda.** Haz clic en el nombre de la bóveda, en la parte
  superior de la barra lateral. El menú muestra tus bóvedas, y cada una indica
  dónde está guardada: **Local**, iCloud, Dropbox, Google Drive u OneDrive.
  Debajo están **Abrir otra bóveda…**, **Nueva bóveda…**, **Mostrar en
  Finder** (**Mostrar en el Explorador de archivos** en Windows) e
  **Importar…**.
- **El selector de bóvedas.** Elige **Archivo** → **Cambiar de bóveda…**
  (`⌥⌘O`). Se abre una lista breve. Escribe para acortarla y pulsa `Intro`. La
  bóveda en la que estás lleva la marca **aquí ahora**.
- **Abrir bóveda.** Elige **Archivo** → **Abrir bóveda…** (`⇧⌘O`) para abrir
  una carpeta como bóveda.

### Elegir los modos de una bóveda {#choose-a-vaults-modes}

Poiesis tiene tres modos: **Escribir**, **Notas** y **Diario**. Para elegir cuáles
tiene una bóveda:

1. Abre los **Ajustes** (`⌘,`).
2. Ve a **Bóveda** → **Espacios**.
3. Marca **Escribir**, **Notas** o **Diario**. Al menos uno tiene que quedar
   activado.

Una bóveda con un solo modo no muestra el selector de modo. En la misma
pantalla, **Se abre en** decide qué muestra la bóveda al abrirse: su
**Inicio** o uno de sus modos.

## Mover trabajo a otra bóveda {#move-work-to-another-vault}

Puedes mover un documento, un proyecto entero o una bóveda entera.

### Un documento {#a-document}

1. Elige **Mover a otra bóveda…** en el menú **⋮** del documento. También
   puedes hacer clic derecho en el documento en una lista.
2. Elige la bóveda. Las bóvedas que no tienen el modo del documento aparecen,
   pero no se pueden elegir.
3. Poiesis muestra los documentos relacionados con este: su investigación, los
   documentos a los que enlaza y los que enlazan con él. Están marcados, lo
   que significa que también se mueven. Desmarca los que deban quedarse.
4. Lee qué se queda atrás y mueve el documento.

Se queda atrás lo siguiente: el proyecto al que pertenecía el documento, sus
tarjetas en los tableros, los personajes que menciona (sus nombres siguen en
el texto) y su historial de versiones.

### Un proyecto {#a-project}

1. Elige **Mover a otra bóveda…** en el menú **⋮** del proyecto.
2. Marca qué más debe ir: sus páginas de investigación, sus tableros y otros
   personajes que se mencionan en sus capítulos. Esos personajes van como
   copias.

Se mueve el proyecto entero: sus partes y capítulos en su orden, su meta, su cubierta y su icono, y los personajes que solo pertenecen a él.

### Después de mover un documento o un proyecto {#after-a-document-or-project-moves}

- Un resumen indica qué se ha movido.
- En la otra bóveda no se sobrescribe nada. Si allí ya existe un archivo con
  el mismo nombre, Poiesis cambia el nombre del que llega.
- Los originales van a la **Papelera** de esta bóveda, así que todavía puedes
  recuperarlos.

### Una bóveda entera {#a-whole-vault}

Para pasar todo el contenido de esta bóveda a otra, elige **Fusionar con otra
bóveda…** en el menú de la bóveda.

- Van todos los documentos, proyectos, tableros, personajes, autores y
  plantillas, con sus imágenes.
- Las carpetas conservan su lugar. Si en la otra bóveda ya hay una carpeta con
  el mismo nombre, Poiesis le añade detrás el nombre de esta bóveda.
- De esta bóveda no se quita nada.
- El historial de versiones no se mueve. Se queda en la carpeta de esta
  bóveda.

Cuando termina la fusión, puedes conservar la bóveda antigua o elegir
**Quitar «…»**.

## Usar una bóveda en varios dispositivos {#use-a-vault-on-several-devices}

1. Pon la bóveda en una carpeta que compartan tus dispositivos: iCloud Drive,
   Dropbox, Google Drive, Mega, OneDrive o una unidad de red. Para trasladar
   una bóveda que ya tienes, sal de Poiesis, mueve su carpeta allí y vuelve a
   abrirla con **Abrir otra bóveda…**.
2. En cada ordenador, abre esa carpeta con **Abrir otra bóveda…**. Poiesis para
   iPhone y iPad todavía no ha salido; cuando salga, abrirá la misma carpeta.
3. Escribe en cualquiera de tus dispositivos. Al cabo de un momento, Poiesis detecta
   los cambios hechos en los demás y actualiza por sí solo la lista y el
   documento abierto.

**Si Poiesis no encuentra la carpeta.** Ocurre cuando se desconecta un disco o una
carpeta en la nube se queda sin conexión. Poiesis dice **No se puede acceder a** la
bóveda. Conserva lo que escribes y lo guarda cuando la carpeta vuelve a estar
disponible.

**Si los documentos tardan en aparecer en un Mac.** iCloud guarda algunos
documentos solo en la nube. Poiesis los descarga cuando los ve, así que pueden
tardar un poco en aparecer.

### Cuando dos dispositivos cambian el mismo documento {#when-two-devices-change-the-same-document}

Poiesis nunca sustituye los cambios de un dispositivo por los de otro. A veces un
documento cambia en dos dispositivos antes de que se sincronicen. En ese caso,
el documento se queda con una versión y Poiesis te guarda la otra para que la
revises. Una línea encima de la página dice **Hay una versión de** ese
dispositivo **esperando**. La fila del documento en la lista lleva una pequeña
marca.

1. Haz clic en **Comparar**. La versión en espera se abre al lado del
   documento actual, con las diferencias marcadas. Puedes alternar entre
   **Lado a lado** y **En el contenido**.
2. Elige una opción:
   - **Quedarme con esta** convierte la versión en espera en el documento.
   - **Quedarme con la actual** deja el documento como está y descarta la
     versión en espera.
   - **Conservar ambas** guarda la versión en espera como un documento aparte
     llamado «*título* (conflicted copy)».

Si hay varias versiones en espera, Poiesis te las muestra de una en una, empezando
por la más antigua. Puedes hacerlo desde cualquiera de tus dispositivos.

:::note El historial de git se queda en cada ordenador

Si la bóveda usa git para su historial, Poiesis guarda el historial de git en cada
ordenador, fuera de la carpeta sincronizada. Un servicio de sincronización
copia el historial archivo por archivo, y eso puede estropearlo. Consulta
[Versiones y copias de seguridad](./versions-and-backup).

:::

## Quitar una bóveda {#remove-a-vault}

1. Abre la bóveda.
2. Ve a **Ajustes** → **Bóveda** → **Gestionar** → **Quitar bóveda…**.
3. Elige una opción:
   - **Desvincular (conservar carpeta)**: Poiesis quita la bóveda de su lista y deja
     la carpeta donde está. Puedes volver a abrirla cuando quieras.
   - **Mover a la papelera**: Poiesis quita la bóveda de su lista y envía la carpeta
     entera a la papelera de tu ordenador. Puedes recuperarla de ahí mientras no
     vacíes la papelera.

Si era tu última bóveda, Poiesis vuelve a la pantalla de bienvenida.

## Ver también {#see-also}

- [Versiones y copias de seguridad](./versions-and-backup)
- [Importar](./importing): trae textos de otras aplicaciones.
- [Puesta a punto](./setup): qué muestra cada bóveda.

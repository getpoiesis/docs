---
title: Bóvedas
description: Las carpetas donde vive tu escritura, cómo moverte entre ellas y cómo usar una bóveda en varios dispositivos.
---

# Bóvedas

Una **bóveda** es donde vive tu escritura: una carpeta corriente de tu equipo,
con tus documentos, las imágenes que has añadido y su historial. No hay base de
datos ni cuenta. Como una bóveda es una carpeta corriente, tu trabajo sigue
siendo tuyo: puedes respaldarlo, moverlo y sincronizarlo con tus otros
dispositivos.

Tus documentos son archivos `.poiesis`, el formato propio de φ, así que otras
apps no pueden abrirlos directamente. Para llevar tu escritura a otra parte,
expórtala: Markdown, Word, PDF y EPUB están a un clic (consulta
[Exportar](./exporting)).

## Crear una bóveda {#make-a-vault}

1. La primera vez que abres φ, elige **Crear una bóveda** o **Abrir una
   carpeta**. Más adelante, haz clic en el nombre de la bóveda en la parte
   superior de la barra lateral y elige **Nueva bóveda…** u **Abrir otra
   bóveda…**.
2. En la ventana que se abre, elige una carpeta o crea una nueva. Puede estar
   en cualquier sitio: Documentos, una carpeta sincronizada, un disco externo.
3. φ la abre. Una carpeta que ya es una bóveda se abre tal cual. Cualquier otra
   carpeta se convierte en una, con una nota **Welcome to φ** y un pequeño
   proyecto de ejemplo, **The Grey Morning**. No se cambia nada de lo que ya
   había en la carpeta, y los archivos `.poiesis` que contenga aparecen en φ.

## Qué hay en la carpeta de una bóveda {#whats-in-a-vault-folder}

| En la carpeta | Qué es |
| --- | --- |
| Archivos `.poiesis` | Tus documentos, un archivo cada uno. |
| `assets` | Las imágenes que añades se copian aquí, así que la bóveda está completa por sí sola. |
| `.trash` | Los documentos que eliminas, hasta que los restauras desde la **Papelera**, al pie de la barra lateral. Lo que quede ahí se elimina para siempre pasados 30 días. |
| `.poiesis-history` o `.git` | El historial de versiones (consulta [Versiones y copias de seguridad](./versions-and-backup)). |
| `.poiesis-vault.json` | Un pequeño archivo que da nombre a la bóveda y recuerda sus ajustes. |

Los nombres que empiezan por punto están ocultos en la mayoría de los gestores
de archivos. Nunca tienes que tocar nada de esto: φ se encarga.

## Cambiar de bóveda {#switch-between-vaults}

Puedes tener varias bóvedas, por ejemplo una para una novela y otra para las
notas diarias. Solo hay una abierta a la vez, y cada una tiene sus propios
documentos, historial y [ajustes de escritura](./setup).

- **El menú de la bóveda.** Haz clic en el nombre de la bóveda en la parte
  superior de la barra lateral. Lista tus bóvedas, cada una con dónde vive
  (**Local**, iCloud, Dropbox, Google Drive u OneDrive), y después **Abrir otra
  bóveda…**, **Nueva bóveda…**, **Mostrar en Finder** (**Mostrar en el
  Explorador de archivos** en Windows) e **Importar…**.
- **El selector de bóvedas.** **Archivo** → **Cambiar de bóveda…** (`⌥⌘O`) abre
  una lista corta: escribe para acotarla y pulsa Intro. La bóveda en la que
  estás lleva la marca **aquí ahora**.
- **Archivo** → **Abrir bóveda…** (`⇧⌘O`) abre una carpeta como bóveda.

Para elegir qué modos tiene una bóveda, ve a **Ajustes** (`⌘,`) → **Bóveda** →
**Espacios** y marca **Escribir**, **Notas** o **Diario**; al menos uno queda
activado. Una bóveda con un solo modo no muestra selector de modo. **Se abre
en** elige dónde empieza la bóveda: su **Inicio**, o uno de sus modos.

## Mover trabajo a otra bóveda {#move-work-to-another-vault}

**Un documento.** Elige **Mover a otra bóveda…** en el menú **⋮** del
documento, o haz clic derecho sobre él en una lista. Elige la bóveda; una que no
tenga el modo del documento aparece, pero no se puede elegir. φ lista los
documentos conectados con él (su investigación, lo que enlaza, lo que lo
enlaza), marcados para moverse con él. Antes de moverlo, te dice lo que se
queda: el proyecto que deja, sus tarjetas en tableros, los personajes que
menciona (sus nombres quedan en el texto) y su historial de versiones.

**Un proyecto.** Elige **Mover a otra bóveda…** en el menú **⋮** del proyecto.
El proyecto va entero, con sus partes y capítulos en orden, su objetivo,
portada e icono, y los personajes propios del proyecto. Marca si van también
sus páginas de investigación, sus tableros y otros personajes que mencionan sus
capítulos (como copias).

Después, un resumen lista lo que se movió. No se sobrescribe nada en la otra
bóveda: un archivo con un nombre ya ocupado allí se renombra. Los originales van
a la **Papelera** de esta bóveda, así que puedes cambiar de idea.

**Una bóveda entera.** Para unir esta bóveda con otra, elige **Fusionar con
otra bóveda…** en el menú de la bóveda. Va todo: cada documento, proyecto,
tablero, personaje, autor y plantilla, con sus imágenes. Las carpetas conservan
su sitio; una cuyo nombre ya existe allí recibe el nombre de esta bóveda detrás
del suyo. No se quita nada de aquí. Al terminar, puedes conservar la bóveda
antigua o elegir **Quitar «…»**. Su historial de versiones se queda con su
carpeta.

## Usar una bóveda en varios dispositivos {#use-a-vault-on-several-devices}

1. Pon la bóveda en una carpeta que compartan tus dispositivos: iCloud Drive,
   Dropbox, Google Drive, Mega, OneDrive o una unidad de red. Para mover una
   bóveda existente, sal de φ, mueve su carpeta allí y vuelve a abrirla con
   **Abrir otra bóveda…**.
2. En cada ordenador, abre esa carpeta con **Abrir otra bóveda…**. φ para
   iPhone y iPad está en camino y abrirá la misma carpeta.
3. Escribe donde quieras. φ nota en un momento los cambios de tus otros
   dispositivos y actualiza la lista y el documento abierto por sí solo.

Si la carpeta de la bóveda desaparece, porque se desconecta un disco o una
carpeta en la nube está sin conexión, φ dice **No se puede acceder a** la bóveda
y conserva lo que escribes, y lo guarda en cuanto la carpeta vuelve. En un Mac,
los documentos que iCloud guarda solo en la nube se descargan cuando φ los ve,
así que pueden tardar un momento en aparecer.

### Cuando dos dispositivos cambian el mismo documento {#when-two-devices-change-the-same-document}

φ nunca sobrescribe los cambios de un dispositivo con los de otro. Si un
documento cambió en dos dispositivos antes de que se pusieran al día, el
documento conserva una versión y la otra se deja aparte. Una línea encima de la
página dice **Hay una versión de** ese dispositivo **esperando**, y la fila del
documento en la lista lleva una pequeña marca.

1. Pulsa **Comparar**. La versión en espera se abre junto al documento tal como
   está ahora, con las diferencias marcadas; alterna entre **Lado a lado** y
   **En el contenido**.
2. Elige **Quedarme con esta** para que la versión en espera pase a ser el
   documento, **Quedarme con la actual** para descartarla, o **Conservar ambas**
   para guardarla como un documento aparte llamado «*título* (conflicted
   copy)».

Si hay varias versiones esperando, llegan de una en una, de la más antigua a la
más reciente. Cualquiera de tus dispositivos puede resolverlas.

:::note El historial git se queda en cada ordenador

Si la bóveda usa git para su historial, φ guarda el historial git en cada
ordenador, fuera de la carpeta sincronizada, porque un servicio de
sincronización que lo copia archivo por archivo puede romperlo. Consulta
[Versiones y copias de seguridad](./versions-and-backup).

:::

## Quitar una bóveda {#remove-a-vault}

Abre la bóveda, ve a **Ajustes** → **Bóveda** → **Gestionar** → **Quitar
bóveda…** y elige:

- **Desvincular (conservar carpeta)**: φ olvida la bóveda y deja la carpeta
  exactamente donde está. Puedes volver a abrirla cuando quieras.
- **Mover a la papelera**: φ olvida la bóveda y mueve toda la carpeta a la
  papelera de tu ordenador, donde aún puedes recuperarla hasta que la vacíes.

Si era tu última bóveda, φ vuelve a la pantalla de bienvenida.

## Ver también {#see-also}

- [Versiones y copias de seguridad](./versions-and-backup)
- [Importar](./importing): trae escritura de otras apps.
- [Ajustes de escritura](./setup): qué muestra cada bóveda.

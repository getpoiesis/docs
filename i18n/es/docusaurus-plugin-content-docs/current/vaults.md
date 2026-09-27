---
title: Bóvedas
---

# Bóvedas

Una **bóveda** es donde vive tu escritura. Es una carpeta corriente de tu equipo
que contiene tus documentos, las imágenes que has añadido y un historial de
versiones. No hay base de datos ni nube: solo archivos en una carpeta que tú
elegiste.

Como una bóveda son archivos sencillos, tu trabajo es tuyo: puedes respaldarlo,
moverlo a otro equipo, abrirlo dentro de veinte años o echar un vistazo dentro
de la carpeta con tu gestor de archivos. Nada sale de tu ordenador a menos que
configures el respaldo por tu cuenta.

## Qué hay dentro de una bóveda {#whats-inside-a-vault}

Abre una carpeta de bóveda y verás:

- **Archivos `.poiesis`**: uno por documento. Cada uno es un pequeño archivo
  JSON que contiene tu texto y sus metadatos (título, etiquetas, fecha de
  creación, etcétera).
- **`assets/`**: las imágenes que insertas se copian aquí, así que una bóveda es
  autónoma. Mueve la carpeta y tus imágenes se mueven con ella.
- **`.trash/`**: los documentos que eliminas esperan aquí. Puedes restaurarlos
  desde la **Papelera**, al pie de la barra lateral; lo que quede ahí se elimina
  para siempre pasados 30 días.
- **El historial de versiones**: cada cambio queda registrado en un punto de
  control para que puedas volver a un borrador anterior. Vive en
  `.poiesis-history/`, o en un repositorio `.git` si pasas la bóveda a git.
  (Consulta [Versiones y copias de seguridad](versions-and-backup.md).)
- **`.poiesis-vault.json`**: un pequeño archivo marcador que da nombre a la
  bóveda y recuerda sus espacios.

Los nombres que empiezan por punto están ocultos por defecto en la mayoría de los
gestores de archivos. Nunca tienes que gestionar nada de esto a mano; φ lo crea y
lo mantiene por ti.

## Crear o abrir una bóveda {#creating-or-opening-a-vault}

La primera vez que inicias φ, te pide elegir dónde vive tu escritura, con dos
botones: **Crear una bóveda** y **Abrir una carpeta**. Ambos abren el selector de
carpetas de tu sistema (**Elegir una carpeta de bóveda**), donde puedes elegir
una carpeta existente o crear una nueva; así, una bóveda puede estar donde
quieras: `~/Documents`, una carpeta sincronizada, un disco externo, donde mejor
te venga.

Lo que pasa después depende de la carpeta:

- **Una carpeta que ya es una bóveda** (tiene un `.poiesis-vault.json`) se abre
  tal cual.
- **Cualquier otra carpeta**, vacía o no, se convierte en bóveda. φ añade
  `assets/`, `.trash/` y el archivo marcador, y coloca una nota **Welcome to φ**
  y un pequeño proyecto de ejemplo, **The Grey Morning**. Los archivos
  `.poiesis` que ya hubiera en la carpeta aparecen junto a ellos. No se cambia
  nada de lo que ya estaba.

Puedes hacer lo mismo más tarde:

- El **nombre de la bóveda** en la parte superior de la barra lateral → **Abrir
  otra bóveda…** o **Nueva bóveda…**.
- **Archivo → Abrir bóveda…** (`⇧⌘O`).
- **Ajustes** (`⌘,`) → **Bóveda** → **Gestionar** → **Abrir bóveda…** o **Crear
  bóveda…**.

## Varias bóvedas y cambio entre ellas {#multiple-vaults-and-switching}

Puedes tener más de una bóveda —digamos, una para una novela y otra para las
notas diarias— y moverte entre ellas con libertad. Solo hay una abierta a la vez.

**El menú de la bóveda.** Haz clic en el nombre de la bóveda en la parte superior
de la barra lateral. Muestra todas las bóvedas que has añadido (una marca señala
aquella en la que estás, y cada una indica dónde vive: **Local**, o iCloud,
Dropbox, Google Drive u OneDrive), y después **Abrir otra bóveda…**, **Nueva
bóveda…**, **Mostrar en Finder** e **Importar…**.

**El selector de bóvedas.** **Archivo → Cambiar de bóveda…** (`⌥⌘O`) abre una
pequeña paleta, **Cambiar a una bóveda…**: escribe para acotar la lista y pulsa
Intro. La bóveda en la que estás lleva la marca **aquí ahora**; **Abrir otra
bóveda…** y **Nueva bóveda…** están al final.

Cambiar de bóveda recarga la barra lateral, la búsqueda y todo lo demás para esa
carpeta. Cada bóveda es independiente: sus propios documentos, su propio
historial, sus propios [ajustes de escritura](setup.md).

## Espacios: qué modos tiene una bóveda {#spaces-which-modes-a-vault-has}

No todas las bóvedas necesitan los tres modos. En **Ajustes → Bóveda →
Espacios**, marca los que usa esta bóveda: **Escribir**, **Notas**, **Diario**
(al menos uno queda activado). Una bóveda con un solo modo no muestra ningún
selector de modo.

**Se abre en** elige dónde empieza la bóveda: su **Inicio**, o uno de sus modos.

## Quitar una bóveda {#removing-a-vault}

Para sacar una bóveda de φ, ábrela y ve a **Ajustes → Bóveda → Gestionar →
Quitar bóveda…**. φ te pregunta qué quieres decir:

- **Desvincular (conservar carpeta)**: φ olvida la bóveda, y la carpeta se queda
  exactamente donde está, intacta. Puedes volver a abrirla cuando quieras.
- **Mover a la papelera**: φ olvida la bóveda **y mueve toda la carpeta a la
  papelera de tu sistema**, donde aún puedes recuperarla hasta que la vacíes.

Si era la última bóveda, φ vuelve a la pantalla de bienvenida.

## Bóvedas en una carpeta sincronizada {#vaults-in-a-synced-folder}

Una bóveda puede vivir en iCloud Drive, Dropbox, Google Drive u OneDrive, y φ
para iPhone y iPad puede abrir la misma bóveda. Tus documentos son un archivo
cada uno y se sincronizan sin problemas. Si usas git para el historial de
versiones, φ guarda el repositorio git de una bóveda sincronizada en tu equipo,
fuera de la bóveda, porque un servicio de sincronización que copia un repositorio
archivo por archivo es justo como se rompen los repositorios. Consulta
[Versiones y copias de seguridad](versions-and-backup.md).

## Usar una bóveda en varios dispositivos {#using-a-vault-on-several-devices}

Pon la bóveda en una carpeta que compartan tus dispositivos —iCloud Drive,
Dropbox, Google Drive, Mega, OneDrive o una unidad de red— y ábrela en todos,
también en φ en tu iPhone o iPad. φ nota los cambios hechos en los otros
dispositivos (normalmente en menos de un segundo) y actualiza la lista, el
documento abierto y todo lo demás por sí solo.

- **Nada se sobrescribe.** Si el mismo documento cambió en dos dispositivos antes
  de que se pusieran al día, se conservan ambas versiones: la tuya pasa a ser un
  documento nuevo llamado «*título* (conflicted copy)» junto al original.
  Compáralos, quédate con lo que quieras y borra el otro.
- **Carpetas sin conexión.** Si la carpeta de la bóveda desaparece —un disco
  desconectado, una carpeta en la nube sin conexión— φ te avisa y conserva lo
  que escribes, y lo guarda en cuanto la carpeta vuelve.
- **iCloud en un Mac.** Los documentos que macOS guarda solo en la nube se
  descargan cuando φ los ve, así que pueden tardar un momento en aparecer.

## Respaldar y mover {#backing-up-and-moving}

Como una bóveda no es más que una carpeta, el respaldo más simple es el que ya
conoces: copia la carpeta. Time Machine, un disco sincronizado o una copia
manual funcionan todos, porque no hay nada especial que exportar.

Para mover una bóveda, mueve o copia la carpeta y luego apunta φ a la nueva
ubicación con **Abrir otra bóveda…**. Tus documentos, imágenes e historial viajan
juntos (en una bóveda git dentro de una carpeta sincronizada, el repositorio se
queda en el equipo que lo creó).

:::tip Respalda fuera del equipo con git
φ también puede respaldar el historial de versiones de una bóveda en tu propio
remoto de git según una programación, completamente bajo tu control. Eso se trata
en [Versiones y copias de seguridad](versions-and-backup.md).
:::

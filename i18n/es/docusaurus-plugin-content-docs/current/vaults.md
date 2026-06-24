---
title: Bóvedas
sidebar_position: 3
---

# Bóvedas

Una **bóveda** es donde vive tu escritura. Es una carpeta corriente de tu Mac
que contiene tus documentos, las imágenes que has añadido y un historial de
versiones. No hay base de datos ni nube: solo archivos en una carpeta que tú
elegiste.

Como una bóveda son archivos sencillos, tu trabajo es tuyo: puedes respaldarlo,
moverlo a otro equipo, abrirlo dentro de veinte años o echar un vistazo dentro
de la carpeta con el Finder. Nada sale de tu ordenador a menos que configures el
respaldo por tu cuenta.

## Qué hay dentro de una bóveda

Abre una carpeta de bóveda en el Finder y verás:

- **Archivos `.poiesis`**: uno por documento. Cada uno es un pequeño archivo
  JSON que contiene tu texto y sus metadatos (título, etiquetas, fecha de
  creación, etc.).
- **`assets/`**: las imágenes que insertas se copian aquí, así que una bóveda es
  autónoma. Mueve la carpeta y tus imágenes se mueven con ella.
- **Un historial de versiones**: cada cambio queda registrado en un punto de
  control para que puedas retroceder a un borrador anterior. (Consulta
  [Versiones y respaldo](versions-and-backup.md).)
- Un pequeño archivo marcador que da nombre a la bóveda.

Nunca tienes que gestionar esto a mano. φ los crea y los mantiene por ti.

## Crear o abrir una bóveda

La primera vez que inicias φ, te pide elegir dónde vive tu escritura. Tienes dos
opciones:

- **Crear una bóveda**: elige (o crea) una carpeta vacía y φ configura la
  estructura de la bóveda dentro de ella y deja una breve nota de bienvenida
  para que empieces.
- **Abrir una carpeta**: apunta φ a cualquier carpeta. Si ya contiene archivos
  `.poiesis`, aparecen; si no, se convierte en una bóveda nueva.

Eliges la ubicación con el selector de carpetas estándar de macOS, de modo que
una bóveda puede estar donde quieras: `~/Documents`, una carpeta sincronizada
con iCloud, un disco externo, donde mejor te venga.

Puedes hacer lo mismo más tarde desde el menú:

- **Archivo → Abrir bóveda…** (`⌘⇧O`) para añadir y cambiar a otra carpeta.
- **Archivo → Cambiar de bóveda…** para saltar entre bóvedas que ya has añadido.

## Varias bóvedas y cambio entre ellas

Puedes tener más de una bóveda —digamos, una para una novela y otra para las
notas diarias— y moverte entre ellas con libertad. Solo una está activa a la vez.

**Selector de la barra de estado.** El nombre de la bóveda activa aparece como un
selector en la interfaz. Haz clic en él para ver todas tus bóvedas, cambiar a una
(una marca de verificación señala la bóveda activa) o añadir una nueva con
**Abrir bóveda…** o **Crear bóveda…**. **Quitar bóveda** (el icono de la
papelera) saca una bóveda de la lista; **no** elimina ningún archivo del disco;
la carpeta se queda exactamente donde está.

**Ajustes.** Los mismos controles están en **Ajustes → Bóveda** (`⌘,`), que
también muestra la ruta completa de la bóveda activa en el disco y te permite
abrir, crear o quitar una bóveda.

Cambiar de bóveda recarga la barra lateral, la búsqueda y todo lo demás para esa
carpeta. Cada bóveda es independiente: sus propios documentos, su propio
historial.

## Respaldar y mover

Como una bóveda no es más que una carpeta, el respaldo más simple es el que ya
conoces: copia la carpeta. Time Machine, un disco sincronizado o una copia
manual funcionan todos, porque no hay nada especial que exportar.

Para mover una bóveda, mueve o copia la carpeta y luego apunta φ a la nueva
ubicación con **Abrir bóveda…**. Tus documentos, imágenes e historial viajan
juntos.

> φ también puede respaldar el historial de versiones de una bóveda en tu propio
> remoto de git según una programación, completamente bajo tu control. Eso se
> trata en [Versiones y respaldo](versions-and-backup.md).

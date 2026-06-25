---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

Esta página te lleva desde una instalación nueva hasta tu primera página
escrita.

## Instalación

φ es una app de macOS, nativa en Apple Silicon e Intel.
**[Descarga la última versión](https://getpoiesis.com/download)**, abre el `.dmg`
y arrastra φ a tu carpeta de Aplicaciones. Inícialo desde Aplicaciones (o con
Spotlight).

Las versiones están **firmadas y notarizadas por Apple**, así que se abren sin el
aviso de Gatekeeper de «desarrollador no identificado».

:::warning φ está en alfa
Estás usando software temprano: espera asperezas. Tu escritura siempre está a
salvo: son archivos planos en tu Mac, guardados de forma continua y con
versiones. Consulta la [introducción](intro.md) para ver qué es sólido y qué aún
se está asentando.
:::

## Primer inicio

La primera vez que abres φ, te pide elegir dónde debe vivir tu escritura. Una
**bóveda** es simplemente una carpeta que contiene tus documentos: elige una
carpeta existente o crea una nueva (por ejemplo `~/Documents/Mi Libro`).

:::note macOS pedirá acceso a la carpeta
Cuando tu bóveda está en una ubicación protegida —**Documentos, Escritorio,
Descargas o iCloud Drive**— macOS muestra un aviso como *«φ quiere acceder a
archivos de tu carpeta Documentos.»* Pulsa **OK** para permitirlo. φ lo necesita
para leer y guardar tus documentos ahí; es un aviso de privacidad estándar de
macOS y solo aparece una vez por ubicación. Puedes revisarlo o cambiarlo luego en
**Ajustes del Sistema → Privacidad y seguridad → Archivos y carpetas**.
:::

Ese es el único paso de configuración; una vez elegida, ya puedes escribir.

## Abrir o crear otra bóveda

Puedes tener varias bóvedas —una por proyecto, por ejemplo— y cambiar entre
ellas en cualquier momento:

1. Usa el selector de bóvedas en la barra de estado (abajo a la izquierda), o
   abre **Ajustes** (`⌘,`) → **Bóveda**.
2. Elige **Abrir** para apuntar φ a una carpeta existente, o **Crear** para
   hacer una nueva bóveda donde prefieras.

Consulta [Bóvedas](vaults.md) para más detalles.

## Escribe tu primer documento

1. Pulsa `⌘N` (o haz clic en **Nuevo documento**).
2. Escribe un **título** en la parte superior, luego pulsa Enter y empieza a
   escribir en el cuerpo.
3. Eso es todo: φ **guarda automáticamente** mientras escribes. No hay botón de
   guardar que buscar (aunque `⌘S` fuerza un guardado inmediato si lo prefieres).

### Algunas cosas para probar

- **Selecciona texto** para que aparezca la barra de herramientas flotante:
  negrita, cursiva, enlaces, resaltados y una búsqueda en el diccionario.
  Consulta [El editor](the-editor.md).
- **Escribe `/`** al principio de una línea para abrir el menú de barra y
  insertar encabezados, listas, citas, bloques de código y más.
- **Escribe `[[`** para enlazar a otro documento por su nombre. Los enlaces se
  convierten en una red navegable que puedes ver en el
  [grafo](links-and-graph.md).

## Orientarte

- **Riel izquierdo**: cambia entre tus espacios: Notas (árbol de carpetas),
  Escribir (colecciones) y Diario (calendario), además de accesos para el grafo,
  los personajes y más.
- **Barra lateral**: la lista del espacio actual; muéstrala u ocúltala con `⌘[`.
- **Panel derecho**: el contexto del documento actual: enlaces, esquema,
  anotaciones, historial de versiones y el diccionario. Muéstralo u ocúltalo con
  `⌘]`.
- **Barra de estado**: estado de guardado, estado de versión, un reloj en vivo,
  la sesión de escritura y los recuentos de palabras.

## Respalda tu trabajo

Como una bóveda es una carpeta sencilla, cualquier herramienta de respaldo (Time
Machine, una carpeta sincronizada, una copia a un disco externo) la protege.
Para el historial por documento y el respaldo opcional fuera del equipo,
consulta [Versiones y respaldo](versions-and-backup.md).

## Siguientes pasos

- [El editor](the-editor.md): adquiere soltura escribiendo y dando formato.
- [Colecciones](collections.md): estructura un libro o manuscrito.
- [Atajos de teclado](keyboard-shortcuts.md): trabaja más rápido.

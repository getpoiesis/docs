---
title: Primeros pasos
---

# Primeros pasos

Esta página te lleva de una instalación recién hecha a tu primera página escrita.

## Instalar {#install}

φ funciona en **macOS, Windows y Linux**.
**[Descarga la última versión](https://getpoiesis.com/download)** para tu
sistema y sigue [Instalar φ](installing.md): cubre cada plataforma, incluido el
aviso de SmartScreen de Windows (que aparece una sola vez) y los formatos
AppImage y `.deb` de Linux.

:::warning φ está en alfa
Estás usando software temprano: espera asperezas. Tu escritura en sí siempre está
a salvo: son archivos sencillos en tu equipo, guardados de forma continua y con
versiones. Consulta la [introducción](intro.md) para saber qué es sólido y qué
se está asentando todavía.
:::

## Primer inicio {#first-launch}

La primera vez que abres φ, muestra una breve **Bienvenida** y te pregunta dónde
debe vivir tu escritura. Una **bóveda** es simplemente una carpeta que contiene
tus documentos. Elige **Crear una bóveda** o **Abrir una carpeta**; en ambos
casos se abre el selector de carpetas de tu sistema, y eliges una carpeta
existente o creas una nueva (por ejemplo, `~/Documents/Mi libro`).

Si la carpeta aún no es una bóveda, φ la prepara y te deja dos cosas para
empezar: una nota llamada **Welcome to φ** y un breve proyecto de ejemplo, **The
Grey Morning**, que muestra cómo se arma y se exporta un libro. Léelos,
consérvalos o elimínalos cuando quieras.

:::note macOS te pedirá acceso a la carpeta
Cuando tu bóveda está en una ubicación protegida —**Documentos, Escritorio,
Descargas o iCloud Drive**—, macOS pregunta si φ puede acceder a los archivos de
ahí. Haz clic en **Permitir** (u **OK**). φ lo necesita para leer y guardar tus
documentos; es un aviso de privacidad estándar de macOS y aparece solo una vez
por ubicación. Puedes revisarlo más tarde en **Ajustes del Sistema → Privacidad
y seguridad → Archivos y carpetas**.

Si se denegó el acceso, φ te lo dice en lugar de mostrar una bóveda vacía: **φ no
puede leer esta carpeta**, con un botón **Permitir el acceso…**. Elige la carpeta
de la bóveda en el diálogo que se abre y tus documentos vuelven. Si la carpeta se
ha movido, se ha renombrado o está en un disco que no está conectado, verás en
cambio **Esta carpeta ya no está**.
:::

Ese es el único paso de configuración; una vez elegida, ya puedes escribir.

## Abrir o crear otra bóveda {#open-or-create-another-vault}

Puedes tener varias bóvedas —una por proyecto, por ejemplo— y cambiar entre ellas
en cualquier momento. Haz clic en el **nombre de la bóveda** en la parte superior
de la barra lateral: muestra tus bóvedas y ofrece **Abrir otra bóveda…** y
**Nueva bóveda…**. **Archivo → Cambiar de bóveda…** (`⌥⌘O`) hace lo mismo desde
el teclado.

Consulta [Bóvedas](vaults.md) para más detalles.

## Escribe tu primer documento {#write-your-first-document}

1. Pulsa `⌘N` (**Archivo → Nuevo documento**) o haz clic en el **+** de la parte
   superior de la lista. φ crea lo siguiente allí donde estás: un capítulo nuevo
   cuando hay un proyecto abierto, una pieza nueva en Escribir, una nota nueva en
   Notas.
2. Escribe un **título** arriba, luego haz clic en la página de debajo y empieza
   a escribir.
3. Ya está: φ **guarda automáticamente** mientras escribes. No hay botón de
   guardar que buscar (aunque `⌘S` fuerza un guardado inmediato si quieres).

### Algunas cosas que probar {#a-few-things-to-try}

- **Selecciona texto** para que aparezca una pequeña barra de herramientas:
  negrita, cursiva, subrayado, un encabezado, un enlace, un color de resaltado y
  **Comentar (sin resaltado)**. La **›** del final (**Más herramientas**) abre el
  resto, incluido **Buscar palabra** para el diccionario. Consulta
  [El editor](the-editor.md).
- **Escribe `/`** al principio de una línea para abrir el menú de barra e
  insertar encabezados, listas, citas, bloques de código y más.
- **Escribe `[[`** para enlazar a otro documento por su nombre. Los enlaces
  forman una red navegable que puedes ver en el [grafo](links-and-graph.md).

## Oriéntate {#find-your-way-around}

La ventana de φ tiene tres columnas: la **barra lateral** (tu bóveda, el
selector **Escribir · Notas · Diario** y los lugares de cada modo), la **lista**
de lo que hayas elegido ahí y la **página** en la que escribes, con un panel de
**Información** opcional a la derecha (`⇧⌘I`). Cada modo se abre en su propio
**Inicio**, y `⌘K` encuentra cualquier documento por su nombre.

[Cómo moverte por φ](finding-your-way.md) lo recorre todo.

## Respalda tu trabajo {#back-up-your-work}

Como una bóveda es una carpeta corriente, cualquier herramienta de copia de
seguridad (Time Machine, una carpeta sincronizada, una copia a un disco externo)
la protege. Para el historial por documento y el respaldo opcional fuera del
equipo, consulta [Versiones y copias de seguridad](versions-and-backup.md).

## Siguientes pasos {#next-steps}

- [Cómo moverte por φ](finding-your-way.md): la barra lateral, la lista, la
  página y las paletas.
- [El editor](the-editor.md): gana soltura escribiendo y dando formato.
- [Proyectos](collections.md): estructura un libro o un manuscrito.
- [Atajos de teclado](keyboard-shortcuts.md): trabaja más rápido.

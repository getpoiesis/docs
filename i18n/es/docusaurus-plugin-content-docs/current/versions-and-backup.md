---
title: Versiones y copias de seguridad
description: Cómo guarda φ Poiesis mientras escribes, cómo conserva versiones anteriores que puedes comparar y restaurar, y cómo respalda tu historial en un lugar que es tuyo.
---

# Versiones y copias de seguridad

φ Poiesis guarda tu trabajo mientras escribes. Además lleva un historial de cada
documento, así que siempre puedes volver a un borrador anterior.

Si quieres tener una copia fuera de tu ordenador, Poiesis puede enviar ese historial
a una copia de seguridad que te pertenece. Nada sale de tu ordenador si tú no
lo configuras.

<img src="/img/app/versions-light.png" alt="Un capítulo abierto con la pestaña Historial al lado: Guardado automático, Guardar versión, y las instantáneas con nombre y los puntos de control agrupados por día" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="Un capítulo abierto con la pestaña Historial al lado: Guardado automático, Guardar versión, y las instantáneas con nombre y los puntos de control agrupados por día" width="1600" height="1000" loading="lazy" decoding="async" />

## Guardar una instantánea {#save-a-snapshot}

Una instantánea es una versión a la que tú pones nombre. Sirve para señalar un
momento importante: el final de un capítulo, un borrador terminado o el
instante antes de un gran recorte.

1. Abre el documento.
2. Pulsa `⌘⇧S`, o elige **Guardar versión…** en el menú **⋮** del documento.
3. Ponle un nombre, por ejemplo «Segundo borrador, segunda parte».

La instantánea aparece en la pestaña **Historial** del documento, con la marca
**Snapshot**.

## Cómo conserva Poiesis tu trabajo {#how-Poiesis-keeps-your-work}

- **Poiesis guarda cada cambio.** Lo hace un momento después de que dejes de escribir. Mientras guarda, al pie de la barra lateral se lee **Guardando…**.
  No hay botón de guardar.
- **Poiesis crea puntos de control por ti.** Un punto de control es una versión que
  Poiesis crea sin que se lo pidas. Crea uno cada cinco minutos mientras trabajas, al
  cerrar la ventana y cuando actualiza tus documentos a un formato de archivo
  nuevo. Para cambiar la frecuencia, abre **Ajustes** (`⌘,`) → **Versiones** →
  **Punto de control automático cada**.
- **`⌘S` guarda al instante y crea un punto de control.** Úsalo cuando quieras
  una versión de un momento que eliges tú.
- **Poiesis guarda una versión antes de un cambio en toda la bóveda.** La bóveda es
  la carpeta que contiene tu trabajo. Cuando reemplazas una palabra en todos
  los documentos (consulta [Buscar y reemplazar](./search-and-replace)), Poiesis
  guarda primero una versión de la bóveda entera. Así puedes deshacer el
  cambio.

## Encontrar una versión antigua {#find-an-old-version}

El historial de un documento está en la pestaña **Historial** del panel de
Información, el panel que aparece junto al documento. Hay tres maneras de
abrirla:

- Pulsa `⇧⌘I` para abrir el panel de Información y haz clic en **Historial**.
- Elige **Historial de versiones** en el menú **⋮** del documento.
- Haz clic derecho en el documento en una lista y elige **Historial de
  versiones**.

En la pestaña **Historial**:

- **Guardado automático**, arriba del todo, te confirma que tus cambios ya
  están guardados.
- **Guardar versión…** crea una instantánea nueva.
- Debajo, las versiones se agrupan por día. Los puntos de control de un mismo
  día se pliegan en una sola línea, para que las instantáneas se vean bien. Haz
  clic en esa línea para ver los puntos de control.
- Puedes buscar versiones por su nombre.
- Puedes mostrar **Todas**, **Instantáneas**, **Puntos de control** o
  **Restauraciones**.
- Puedes plegar o desplegar todos los días a la vez.

## Comparar y restaurar {#compare-and-restore}

Haz clic en una versión para abrirla. Ocupa el lugar del documento, bajo una
barra que dice **Previsualizando la versión**. Puedes leerla, pero no editarla.

<img src="/img/app/version-preview-light.png" alt="Una versión anterior de un capítulo en vista previa, con los cambios marcados y el botón para restaurarla" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/version-preview-dark.png" alt="Una versión anterior de un capítulo en vista previa, con los cambios marcados y el botón para restaurarla" width="1600" height="1000" loading="lazy" decoding="async" />

| Botón | Qué hace |
| --- | --- |
| **Mostrar cambios** | Marca las diferencias con el documento tal como está ahora. Puedes alternar entre **Lado a lado** y **En el contenido**. Con **En el contenido**, **Cambios de metadatos** enumera además los cambios en el título, las etiquetas, el estado y otros datos parecidos. **Ocultar cambios** quita las marcas. |
| **Restaurar** | Convierte esta versión de nuevo en el documento. Antes, Poiesis guarda el documento actual como una versión nueva, así que no se pierde nada. |
| **Volver al actual** | Vuelve al documento tal como está ahora. `Esc` hace lo mismo. |

Poiesis marca los cambios letra por letra. Si prefieres que marque palabras enteras,
elige **Palabra** en **Ajustes** → **Editor** → **Detalle de diferencias**.

## Elegir dónde se guarda el historial {#choose-where-history-is-kept}

Cada bóveda guarda su historial de una de estas dos maneras. Se elige en
**Ajustes** → **Versiones** → **Backend**.

| Backend | Qué te ofrece |
| --- | --- |
| **Nativo** | El predeterminado. No hay que instalar nada. Conserva hasta 50 versiones de cada documento y va eliminando las más antiguas. Ese número se cambia en **Límite de historial local**. |
| **Git** | Historial sin límite y una copia de seguridad en un lugar que es tuyo. Git es un programa aparte, gratuito, que sirve para llevar historiales. Puedes elegir esta opción cuando git esté instalado en tu ordenador; hasta entonces, la opción dice **Git (requiere git)**. |

Piénsalo antes de pasar una bóveda a git: Poiesis no puede devolverla al sistema
anterior por ti. Antes del cambio, Poiesis te lo explica en **¿Convertir esta bóveda
a git?**. El historial que ya tienes pasa al nuevo sistema. Para volver más
adelante a **Nativo**, tendrás que borrar tú la carpeta `.git` de la
bóveda.

### Bóvedas en una carpeta en la nube {#vaults-in-a-cloud-folder}

Si la bóveda está en una carpeta en la nube, como iCloud Drive o Dropbox, Poiesis
guarda el historial de git en este ordenador, fuera de la bóveda. Los servicios
de sincronización copian los archivos de uno en uno y en cualquier orden, y eso
puede estropear un historial de git. Tus documentos no corren peligro: cada
documento es un solo archivo.

### iPhone y iPad {#iphone-and-ipad}

Poiesis para iPhone y iPad (próximamente) usa la misma bóveda, pero nunca ejecuta
git. Las versiones que se crean allí se guardan en la carpeta
`.poiesis-history` de la bóveda. Las dos aplicaciones usan esa carpeta.

## Respaldar tu historial con git {#back-up-your-history-with-git}

Con git, Poiesis puede enviar tu historial a un repositorio privado en un servicio
como GitHub o GitLab. Un repositorio es el lugar donde se almacena un historial
de git. De este modo existe una copia en otro sitio, además de tu ordenador.

1. Crea un repositorio privado y vacío en GitHub, en GitLab o en otro servicio
   de git.
2. Copia su dirección. Tiene este aspecto: `git@github.com:you/novel.git`.
3. En Poiesis, abre **Ajustes** → **Versiones** y pasa la bóveda a **Git**.
4. En **Respaldo en git**, pega la dirección en **URL del remoto de respaldo**.
5. Activa **Push automático de respaldos**.
6. Elige un valor en **Push cada**. Al principio son 15 minutos.
7. Pulsa **Hacer push ahora** para enviar la primera copia.

Poiesis envía el historial en segundo plano. Un servicio lento o que no responde
nunca te impide escribir. Si un envío tarda más de dos minutos, Poiesis lo
interrumpe y lo intenta de nuevo la próxima vez.

**Respaldar ahora** muestra cómo está la copia de seguridad: **Al día con el
remoto**, con commits sin enviar (historial que aún no ha salido) o todavía sin
remoto. También puedes enviar el historial desde la paleta de comandos: pulsa
`⌘P` y elige **Respaldar ahora (git push al remoto)**.

Los demás ajustes de **Respaldo en git** están pensados para quien quiera
mantener este trabajo separado de su cuenta principal de git:

| Ajuste | Para qué sirve |
| --- | --- |
| **Nombre del commit** y **Correo del commit** | El nombre y el correo que quedan registrados en el historial. Si los dejas en blanco, Poiesis usa la identidad de git de tu ordenador. |
| **Ruta de la clave SSH** | La clave privada con la que Poiesis envía el historial, por ejemplo `~/.ssh/id_ed25519`. Con ella, Poiesis puede enviar como otra cuenta. El archivo de la clave solo debes poder leerlo tú (`chmod 600`). |
| **URL del remoto de respaldo** | Si la dejas en blanco, Poiesis usa el `origin` que ya tenga el repositorio. |
| **Firmar commits** | Firma cada commit con una clave **SSH** o **GPG**, para que el servicio lo muestre como verificado. |

:::tip Usa un repositorio privado

Tu historial contiene todos tus borradores. Respáldalo en un repositorio
privado. Si puedes, usa una identidad reservada solo para esto.

:::

## Una bóveda es una carpeta corriente {#a-vault-is-an-ordinary-folder}

Una bóveda es una carpeta corriente. Contiene tus archivos `.poiesis`, una
carpeta `assets` con las imágenes y el historial de versiones. Por eso también
sirve cualquier copia de seguridad en la que ya confíes: Time Machine, una
carpeta sincronizada o una copia en un disco.

## Ver también {#see-also}

- [Bóvedas](./vaults): bóvedas en varios dispositivos, y qué pasa cuando dos
  de ellos cambian el mismo documento.
- [Buscar y reemplazar](./search-and-replace)
- [Ajustes](./settings)

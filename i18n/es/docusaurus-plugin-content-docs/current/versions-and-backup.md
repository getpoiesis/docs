---
title: Versiones y copias de seguridad
description: Cómo φ guarda mientras escribes, conserva versiones anteriores que puedes comparar y restaurar, y respalda tu historial en un lugar propio.
---

# Versiones y copias de seguridad

φ guarda mientras escribes y conserva un historial de cada documento para que
puedas volver a cualquier borrador anterior. Si quieres una copia fuera de tu
ordenador, también puede enviar ese historial a una copia de seguridad propia.
Nada sale de tu ordenador a menos que lo configures.

<img src="/img/app/versions-light.png" alt="Un capítulo abierto con la pestaña Historial al lado: Guardado automático, Guardar versión, e instantáneas con nombre y puntos de control agrupados por día" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="Un capítulo abierto con la pestaña Historial al lado: Guardado automático, Guardar versión, e instantáneas con nombre y puntos de control agrupados por día" width="1600" height="1000" loading="lazy" decoding="async" />

## Guardar una instantánea {#save-a-snapshot}

Una instantánea es una versión a la que pones nombre para marcar un hito: el
final de un capítulo, un borrador terminado, el momento antes de un gran corte.

1. Abre el documento.
2. Pulsa `⌘⇧S`, o elige **Guardar versión…** en el menú **⋮** del documento.
3. Dale un nombre, como «Segundo borrador, Parte dos».

Aparece en la pestaña **Historial** del documento, marcada como **Instantánea**.

## Cómo conserva φ tu trabajo {#how-φ-keeps-your-work}

- **Cada edición se guarda sola** un momento después de que dejas de escribir.
  Mientras se guarda, el pie de la barra lateral dice **Guardando…**. No hay
  ningún botón Guardar que recordar.
- **Los puntos de control se crean por ti**: cada cinco minutos mientras
  trabajas, cuando cierras la ventana y cuando φ actualiza tus documentos a un
  nuevo formato de archivo. Cambia la frecuencia en **Ajustes** (`⌘,`) →
  **Versiones** → **Punto de control automático cada**.
- **`⌘S`** guarda al instante y crea un punto de control, si quieres un punto
  propio al que volver.
- **Antes de un cambio en toda la bóveda.** Cuando reemplazas una palabra en
  todos los documentos (consulta [Buscar y reemplazar](./search-and-replace)),
  φ guarda primero una versión de toda la bóveda, para que el cambio se pueda
  deshacer.

## Encontrar una versión antigua {#find-an-old-version}

El historial de un documento está en la pestaña **Historial** del panel de
Información. Para abrirla:

- pulsa `⇧⌘I` para el panel de Información y luego haz clic en **Historial**;
- elige **Historial de versiones** en el menú **⋮** del documento; o
- haz clic derecho en el documento en una lista y elige **Historial de
  versiones**.

Arriba, **Guardado automático** te recuerda que tus ediciones ya están a salvo,
y **Guardar versión…** da nombre a una nueva versión. Debajo, las versiones se
agrupan por día. Los puntos de control de cada día se pliegan en una sola línea
que puedes abrir, para que las instantáneas destaquen. Puedes buscar versiones
por nombre, mostrar **Todas**, **Instantáneas**, **Puntos de control** o
**Restauraciones**, y plegar o desplegar todos los días a la vez.

## Comparar y restaurar {#compare-and-restore}

Haz clic en cualquier versión para abrirla en lugar del documento, en solo
lectura, bajo una barra **Previsualizando la versión**.

| Botón | Qué hace |
| --- | --- |
| **Mostrar cambios** | Marca lo que difiere del documento actual. Alterna entre **Lado a lado** y **En el contenido**. En el contenido, **Cambios de metadatos** también lista los cambios en el título, las etiquetas, el estado y similares. **Ocultar cambios** quita las marcas. |
| **Restaurar** | Vuelve a hacer de esta versión el documento. Lo que tienes ahora se guarda antes como una nueva versión, así que no se pierde nada. |
| **Volver al actual** | Regresa al documento tal como está ahora. `Esc` hace lo mismo. |

Los cambios se marcan letra a letra. Para marcar palabras enteras, elige
**Palabra** en **Ajustes** → **Editor** → **Detalle de diferencias**.

## Elegir dónde se guarda el historial {#choose-where-history-is-kept}

Cada bóveda guarda su historial de una de dos maneras, que se eligen en
**Ajustes** → **Versiones** → **Backend**.

| Backend | Qué te ofrece |
| --- | --- |
| **Nativo** | El predeterminado. No necesita nada instalado. Conserva hasta 50 versiones de cada documento y elimina las más antiguas; cámbialo en **Límite de historial local**. |
| **Git** | Historial ilimitado y una copia de seguridad en un lugar propio. Se ofrece cuando git está instalado en tu ordenador; hasta entonces dice **Git (requiere git)**. |

Pasar una bóveda a git es un paso sin vuelta atrás, y φ lo explica primero en
**¿Convertir esta bóveda a git?**. Tu historial existente se trae contigo. Para
volver a **Nativo** más adelante, tendrías que borrar tú mismo la carpeta
`.git` de la bóveda.

Si la bóveda está en una carpeta en la nube, como iCloud Drive o Dropbox, φ
guarda su historial git en este ordenador, fuera de la bóveda. Los servicios de
sincronización copian los archivos de uno en uno, en cualquier orden, y eso
puede romper un historial git; tus documentos son un archivo cada uno y viajan
sin problema. φ en iPhone y iPad (próximamente) usa la misma bóveda, pero nunca
ejecuta git: las versiones creadas allí se guardan en la carpeta
`.poiesis-history` de la bóveda, que comparten ambas apps.

## Respaldar tu historial con git {#back-up-your-history-with-git}

Con git, φ puede enviar tu historial a un repositorio privado en un servicio
como GitHub o GitLab, para que haya una copia en otro lugar además de tu
ordenador. φ lo envía en segundo plano: un servicio lento o inaccesible nunca
frena tu escritura, y si un envío se atasca, φ lo deja pasados dos minutos y lo
vuelve a intentar la próxima vez.

1. Crea un repositorio privado y vacío en GitHub, GitLab u otro servidor git.
   Copia su dirección (tiene este aspecto: `git@github.com:you/novel.git`).
2. En φ, cambia la bóveda a **Git** en **Ajustes** → **Versiones**.
3. En **Respaldo en git**, pega la dirección en **URL del remoto de respaldo**.
4. Activa **Push automático de respaldos** y elige **Push cada** (empieza en 15
   minutos).
5. Pulsa **Hacer push ahora** para enviar la primera copia.

**Respaldar ahora** te dice si estás **Al día con el remoto.**, si tienes
commits sin enviar o si aún no tienes remoto. También puedes enviar desde `⌘P`
→ **Respaldar ahora (git push al remoto)**.

Los demás ajustes de **Respaldo en git** son para quien quiera mantener este
trabajo separado de su cuenta git principal:

| Ajuste | Para qué sirve |
| --- | --- |
| **Nombre del commit** y **Correo del commit** | A nombre de quién se registra el historial. En blanco usa la identidad git de tu ordenador. |
| **Ruta de la clave SSH** | La clave privada con la que φ hace push, como `~/.ssh/id_ed25519`, para que pueda enviar como otra cuenta. El archivo de la clave solo debe poder leerlo tú (`chmod 600`). |
| **URL del remoto de respaldo** | En blanco usa el `origin` existente del repositorio. |
| **Firmar commits** | Firma cada commit con una clave **SSH** o **GPG** para que el servidor lo muestre como verificado. |

:::tip Usa un repositorio privado

Tu historial contiene cada borrador. Respáldalo en un repositorio privado,
idealmente con una identidad que uses solo para esto.

:::

## Una bóveda es una carpeta corriente {#a-vault-is-an-ordinary-folder}

Una bóveda es una carpeta corriente de archivos `.poiesis`, con una carpeta
`assets` para las imágenes y su historial de versiones, así que cualquier copia
de seguridad en la que ya confíes también sirve: Time Machine, una carpeta
sincronizada o una copia en un disco.

## Ver también {#see-also}

- [Bóvedas](./vaults): bóvedas en varios dispositivos, y qué pasa cuando dos
  de ellos cambian el mismo documento.
- [Buscar y reemplazar](./search-and-replace)
- [Ajustes](./settings)

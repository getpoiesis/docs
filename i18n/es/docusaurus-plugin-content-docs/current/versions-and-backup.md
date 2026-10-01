---
title: Versiones y copias de seguridad
---

# Versiones y copias de seguridad

Tu escritura se guarda continuamente, y φ mantiene un historial para que puedas
volver a cualquier borrador anterior. Nada sale de tu ordenador a menos que tú
mismo configures un remoto.

<img src="/img/app/versions-light.png" alt="El historial de un documento: instantáneas con nombre y puntos de control automáticos" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="El historial de un documento: instantáneas con nombre y puntos de control automáticos" width="1600" height="1000" loading="lazy" decoding="async" />

## Cómo funciona el guardado {#how-saving-works}

Cada edición se guarda sola un momento después de que dejas de escribir, y cada
escritura se verifica antes de darla por buena. Nunca tienes que pulsar Guardar.
Mientras se está guardando, el pie de la barra lateral dice **Guardando…**.

`⌘S` sigue ahí si lo quieres: guarda al instante y registra un punto de control,
para que tengas un punto explícito al que volver.

Además del guardado, φ registra **versiones**: copias de un momento dado que
puedes explorar y restaurar.

## Dos tipos de versión {#two-kinds-of-version}

- **Los puntos de control** se crean por ti: a intervalos regulares mientras
  trabajas (cada cinco minutos, salvo que lo cambies en **Ajustes → Versiones**),
  cuando cierras la ventana, cuando pulsas `⌘S` y cuando φ actualiza tus
  documentos a un nuevo formato de archivo. No tienes que pensar en ellos.
- **Las instantáneas** son versiones con nombre que creas a propósito para
  marcar un hito: el final de un capítulo, un borrador terminado. Pulsa `⌘⇧S`
  (**Archivo → Guardar versión…**), o haz clic en **Guardar instantánea** en la
  parte superior de la pestaña Historial, y dale un nombre.

## La pestaña Historial {#the-history-tab}

El historial de un documento vive en la pestaña **Historial** del
[panel de Información](./finding-your-way.md). Para abrirla:

- pulsa `⇧⌘I` para el panel de Información y luego haz clic en **Historial**;
- elige **Historial de versiones** en el menú ⋮ del documento; o
- haz clic derecho en el documento en la lista y elige **Historial de
  versiones**.

Arriba, **Guardado automático** te recuerda que tus ediciones ya están a salvo,
y **Guardar instantánea** da nombre a una nueva versión. Debajo, el historial se
agrupa por día (Hoy, Ayer, etc.). Los puntos de control de un día se pliegan en
una sola línea que puedes abrir, para que las instantáneas destaquen. Puedes
plegar o desplegar todos los días a la vez, buscar versiones por nombre y
filtrar por **Todas**, **Instantáneas**, **Puntos de control** o
**Restauraciones**.

### Ver una versión antigua {#looking-at-an-old-version}

Haz clic en cualquier versión para abrirla en lugar del documento, en solo
lectura, bajo una barra **Previsualizando la versión**:

- **Mostrar cambios** marca lo que difiere de la versión actual. Con los cambios
  visibles, alterna entre **Lado a lado** y **En el contenido**. En el contenido,
  una línea **Cambios de metadatos** también lista los cambios en el título, la
  descripción, las etiquetas, el estado, la meta o la estrella. **Ocultar
  cambios** quita las marcas. Puedes elegir con qué detalle se marcan los
  cambios, por palabra o por carácter, en **Ajustes → Editor → Detalle de
  diferencias**.
- **Restaurar** devuelve esta versión como documento activo. Tu texto actual se
  guarda antes como una nueva versión, así que no se pierde nada.
- **Volver al actual** (o `Esc`) regresa al documento tal como está ahora.

## Historial nativo o git {#native-history-or-git}

Cada bóveda tiene su propio **motor** de versiones, que se elige en **Ajustes →
Versiones**:

- **Nativo** guarda instantáneas locales junto a tu bóveda. No necesita nada
  instalado y funciona desde el primer momento. Hay un límite de versiones
  conservadas por documento (las más antiguas se eliminan para controlar el uso
  de disco), que puedes cambiar.
- **Git** guarda un historial completo e ilimitado, y puede respaldarlo en otro
  lugar. Se ofrece una vez que git está instalado en tu ordenador (hasta
  entonces la opción dice **Git (requiere git)**).

Pasar una bóveda a git es un paso deliberado, y φ lo explica primero en un
diálogo **¿Convertir esta bóveda a git?**: φ ejecuta `git init` en la bóveda,
hace commits periódicamente y trae contigo tu historial nativo existente. Una
vez que una bóveda es un repositorio git, se queda en git; para volver a Nativo
tendrías que borrar tú mismo su carpeta `.git`.

Algunas cosas que conviene saber:

- **Carpetas sincronizadas en la nube.** Si la bóveda vive en una carpeta
  sincronizada en la nube, φ guarda su repositorio git en este ordenador en
  lugar de dentro de la bóveda. La sincronización copia los archivos de un
  repositorio de uno en uno, en cualquier orden, y así es como se rompen los
  repositorios; tus documentos son un archivo cada uno y viajan sin problema.
- **φ en iPhone y iPad** lee y escribe la misma bóveda, pero nunca ejecuta git.
  Las versiones creadas allí se guardan en la carpeta `.poiesis-history` de la
  bóveda, que comparten ambas apps.
- Si no se puede conservar el historial de una bóveda, la pestaña Historial dice
  **El versionado no está disponible.** y por qué.

### Antes de cambios grandes {#before-big-changes}

Cuando reemplazas una palabra **en todas partes** de la bóveda (consulta
[Buscar y reemplazar](./search-and-replace.md)), φ guarda primero una versión de
toda la bóveda, con el nombre de lo que estás reemplazando, para que el cambio
se pueda deshacer.

## Respaldar en un remoto git {#backing-up-to-a-git-remote}

Con el motor git puedes enviar tu historial a un remoto propio (GitHub, GitLab o
cualquier servidor git), para que haya una copia en otro lugar además de tu
ordenador. En **Ajustes → Versiones → Respaldo en git**:

- Define una **URL del remoto de respaldo** a la que enviar (en blanco usa el
  origin existente del repositorio).
- Activa **Push automático de respaldos** para enviar los nuevos commits cada
  cierto tiempo, y ajusta **Push cada** (minutos).
- **Respaldar ahora** te dice si estás al día, si tienes commits sin enviar o si
  aún no tienes remoto. **Hacer push ahora** envía al instante; también lo hace
  **Respaldar ahora (git push al remoto)** en la paleta de comandos.
- Opcionalmente define un **Nombre del commit**, un **Correo del commit** y una
  **Ruta de la clave SSH** para que este trabajo quede fuera de tu cuenta
  principal, y **Firmar commits** para que aparezcan como verificados.

Usa un repositorio privado y una identidad dedicada para esto.

## Una bóveda son solo archivos {#a-vault-is-just-files}

Una bóveda es una carpeta normal de archivos `.poiesis` (con una carpeta
`assets/` para las imágenes, y su historial de versiones), así que cualquier
copia de seguridad en la que ya confíes también sirve: Time Machine, una carpeta
sincronizada o una copia en un disco. El versionado de φ es una red de
seguridad, no la única.

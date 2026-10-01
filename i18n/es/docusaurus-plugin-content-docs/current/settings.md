---
title: Ajustes
---

# Ajustes

φ reúne sus ajustes en un solo lugar, agrupados para que casi nunca tengas que
buscar. Una columna a la izquierda lista las categorías; elige una y sus
opciones aparecen al lado.

<img src="/img/app/settings-light.png" alt="Ajustes" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Ajustes" width="1600" height="1000" loading="lazy" decoding="async" />

Para abrir los Ajustes:

- haz clic en el botón de controles deslizantes arriba de la barra lateral,
  junto al nombre de la bóveda;
- en macOS, pulsa `⌘,` (o elige **Preferencias…** en el menú de la app); o
- pulsa `⌘K` y elige **Abrir ajustes**.

Las categorías son **Apariencia**, **Editor**, **Ajustes de escritura**,
**Idioma**, **Versiones**, **Bóveda**, **Plantillas**, **Atajos** y **Datos**.
Los cambios se aplican al instante. La mayoría de los ajustes afectan a toda la
app; **Ajustes de escritura**, **Versiones** y **Bóveda** pertenecen a la bóveda
que tienes abierta.

## Apariencia {#appearance}

El aspecto de φ. Los temas de color tienen su propia página:
[Temas e idiomas](./themes-and-languages.md).

### Tema {#theme}

- **Apariencia**: **Sistema**, **Claro** u **Oscuro**. Sistema sigue el ajuste
  de tu ordenador y cambia con él.
- **Tamaño de la interfaz**: escala toda la interfaz, iconos incluidos, a
  **100%**, **115%**, **130%** o **150%**.

### Tema de color {#color-theme}

Los temas de color instalados, cada uno con una pequeña vista previa. El tema
integrado **Phi** está marcado como **Oficial**; los temas que instales aparecen
debajo con una papelera para quitarlos. **Instalar tema…** añade un archivo de
tema, **Abrir carpeta de temas** muestra dónde se guardan y **Explorar temas
oficiales…** abre la galería.

### Barra lateral {#sidebar}

- **Barra lateral en tema claro**: **Oscuro** o **Claro**. En el tema claro la
  barra lateral es oscura por defecto, lo que mantiene la página como lo más
  luminoso de la pantalla; elige **Claro** para una barra lateral clara. (En el
  tema oscuro siempre es oscura.)
- **El santuario atenúa el resto**: en el
  [Santuario](./focus-and-writing-modes.md), solo la oración en la que estás se
  mantiene con toda su intensidad. Desactívalo para mantenerlo todo iluminado.

## Editor {#editor}

La propia superficie de escritura.

### Escritura {#writing}

- **Fuente del cuerpo**: el tipo de letra de tu texto, agrupado en Serif, Sans y
  Mono. Las fuentes que vienen con φ se integran en las exportaciones EPUB; las
  fuentes de tu sistema van marcadas como *sistema*.
- **Tamaño de fuente**: de 14 a 26 px. **Restablecer** vuelve al valor
  predeterminado.
- **Altura de línea**: de 1,3 a 2,2. **Restablecer** vuelve al valor
  predeterminado.
- **Escritura enfocada**: atenúa todo salvo la **Oración** o el **Párrafo**
  actual, o **Desactivado**.
- **Mostrar Markdown**: dibuja de forma tenue los marcadores de Markdown (`**`,
  `#`, `[ ]( )`) alrededor del formato en la línea que estás escribiendo. Tus
  documentos no cambian.
- **Desplazamiento de máquina de escribir**: mantiene el cursor en el centro de
  la ventana.
- **Formato de fecha**: cómo se muestran las fechas en toda la app: *June 11,
  2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026*, o
  **Custom…**. El día guardado nunca cambia; solo cómo se muestra. **Custom…**
  añade un campo **Patrón personalizado** que acepta tokens de date-fns (`yyyy`,
  `MMM`, `d`, `EEEE`…) y muestra la fecha de hoy como vista previa.

### Racha de escritura {#writing-streak}

- **Mínimo de palabras / día**: un día cuenta para tu racha en cuanto has
  escrito este número de palabras (50 o más).

### Código {#code}

Para los bloques de código.

- **Sangrar con**: **Espacios** o **Tabulaciones**.
- **Ancho de sangría**: espacios por sangría, y el ancho con el que se muestra
  una tabulación, de 1 a 8.

### Versiones e importación {#versions--import}

- **Detalle de diferencias**: con qué detalle se marcan los cambios al
  previsualizar una versión antigua: por **Palabra** o por **Carácter**.
- **Imágenes importadas**: **Copiar a la bóveda** coloca la imagen que traes en
  la carpeta `assets/` de la bóveda; **Incrustado** la mantiene dentro del
  documento (autónomo, pero con archivos más grandes).

## Ajustes de escritura {#setup}

Lo que φ te muestra en esta bóveda: las señales que te devuelve sobre tu
escritura y los lugares que ofrece cada modo. Desactivar algo lo oculta, nunca
toca tu trabajo. Esta categoría tiene su propia página:
[Ajustes de escritura](./setup.md).

- **Señales**: **Iniciar sesiones automáticamente** (una [sesión de
  escritura](./focus-and-writing-modes.md#writing-sessions) empieza con tu
  primera pulsación de tecla), **Estadísticas de legibilidad** (facilidad de
  lectura y nivel escolar en las estadísticas de un documento), **Racha**
  (**Llama y número**, **Días a secas** o **Apagada**), **La semana empieza en**
  (la primera columna del calendario y del mapa de calor, y la semana en la que
  se cuenta tu ritmo) y **Ritmo semanal** (**Ninguno**, o un número de días por
  semana).
- **Modos**: abre **Escribir**, **Notas** o **Diario** para elegir qué lugares
  ofrece, cambiar las señales solo para ese modo y decidir si se pueden empezar
  nuevas **Listas de tareas** allí. Un modo indica **Sigue a la bóveda** o
  **Difiere**, con **Volver a seguir a la bóveda** para deshacerlo.
- **Ajustes guardados**: **Guardar como…** conserva una copia de estos ajustes
  con un nombre, para aplicarlos a otra bóveda con **Usar en esta bóveda** o
  **Usar en otra bóveda…**.

## Idioma {#language}

- **Idioma**: el **Idioma de la interfaz** en el que habla φ, además de
  **Instalar un idioma…**, **Exportar plantilla en inglés…** y **Abrir
  carpeta**. Consulta [Temas e idiomas](./themes-and-languages.md#languages).
- **Ortografía**: **Revisar ortografía** activado o desactivado, el **Motor**
  (**Nativo** o **Mejorado**) y los **Idiomas** que revisar.
- **Esta bóveda**: un motor de ortografía solo para esta bóveda
  (**Predeterminado para esta bóveda**), que puede ser distinto del global.
- **Diccionario personal**: las palabras que has añadido, cada una con una
  papelera para quitarla.
- **Diccionario y tesauro**: **Instalar paquete de diccionario…** y los paquetes
  que tienes. Consulta [Diccionario y tesauro](./dictionary.md).

La ortografía se explica a fondo en [Ortografía](./spelling.md).

## Versiones {#versioning}

**Estos ajustes se aplican a la bóveda que tienes abierta.** Cada bóveda guarda
su propio historial, con su propio motor, remoto e identidad, por eso el nombre
de la bóveda aparece arriba.

### Backend {#backend}

- **Backend**: **Nativo** (instantáneas locales, nada que instalar; el
  predeterminado) o **Git** (historial completo y respaldo remoto opcional). Git
  se ofrece una vez que está instalado en tu ordenador; hasta entonces la opción
  dice **Git (requiere git)**.

Cambiar a git pregunta primero y explica lo que ocurre: φ ejecuta `git init` en
la bóveda, hace commits periódicamente y trae tu historial nativo. Una vez que
una bóveda es un repositorio git, φ la mantiene en git; para volver atrás
tendrías que quitar tú mismo la carpeta `.git`. Unas notas bajo el ajuste
explican dónde vive el repositorio si la bóveda está en una carpeta sincronizada
en la nube, y que φ en iPhone y iPad guarda sus versiones en la carpeta
`.poiesis-history` de la bóveda.

### Historial {#history}

- **Punto de control automático cada**: con qué frecuencia se guardan tus
  ediciones como versión automática. Escribe un número de minutos, elige **1**,
  **5**, **10** o **30**, o elige **Desactivado**. Las instantáneas con nombre y
  el punto de control al cerrar no se ven afectados.
- **Límite de historial local** (solo Nativo): el máximo de versiones que se
  conservan por documento; las más antiguas se eliminan.

### Respaldo en git (solo git) {#git-backup-git-only}

- **Nombre del commit** y **Correo del commit**: con qué identidad hace φ los
  commits. Déjalos en blanco para usar el usuario git de tu ordenador.
- **Ruta de la clave SSH**: la clave privada con la que φ hace push (por ejemplo
  `~/.ssh/id_ed25519`), con **Examinar…**. El archivo de la clave debe tener
  `chmod 600`.
- **URL del remoto de respaldo**: adónde hacer push. En blanco usa el origin
  existente del repositorio.
- **Push automático de respaldos**: envía los nuevos commits periódicamente,
  cada **Push cada** minutos.
- **Firmar commits**: los firma para que aparezcan como verificados, con un
  **Método de firma** (SSH o GPG) y una **Clave de firma**.
- **Respaldar ahora**: indica si estás al día, si tienes commits sin enviar o si
  aún no tienes remoto. **Hacer push ahora** envía de inmediato.

Más en [Versiones y copias de seguridad](./versions-and-backup.md).

## Bóveda {#vault}

Sobre la bóveda en la que estás trabajando.

- **Bóveda activa**: su nombre y su carpeta.
- **Espacios**: cuáles de **Escribir**, **Notas** y **Diario** muestra esta
  bóveda (al menos uno), y dónde se abre (**Se abre en**).
- **Gestionar**: **Abrir bóveda…** y **Crear bóveda…** para añadir una bóveda, y
  **Quitar bóveda…** para la que tienes abierta. Al quitarla te pregunta cómo:
  **Desvincular (conservar carpeta)** la saca de φ y deja la carpeta como está;
  **Mover a la papelera** mueve la carpeta entera a la Papelera de tu ordenador,
  donde aún puedes recuperarla.

Consulta [Bóvedas](./vaults.md) para verlo todo.

## Plantillas {#templates}

- Las **variables** de plantilla que puedes usar, como distintivos:
  `<% today %>`, `<% tomorrow %>`, `<% yesterday %>`, `<% time %>` y
  `<% cursor %>`.
- **Esta bóveda** y **Plantillas globales**: cada plantilla con un lápiz para
  editarla y una papelera para quitarla.
- **Instalar una plantilla…** añade un archivo de plantilla; **Abrir carpeta de
  plantillas** muestra dónde se guardan las globales.

Consulta [Plantillas](./templates.md).

## Atajos {#shortcuts}

Una tabla con búsqueda de los principales atajos de teclado de φ, agrupados de
la misma forma que la tarjeta que muestra `⌘/`. Escribe en **Buscar comandos…**
para acotarla. Para la lista completa, consulta
[Atajos de teclado](./keyboard-shortcuts.md).

## Datos {#data}

El estado de tus archivos `.poiesis`, las copias de seguridad que se hacen al
actualizarlos y un restablecimiento.

### Estado de la bóveda {#vault-health}

φ comprueba si tus documentos usan el formato de archivo actual. Si es así, lo
indica, con los números de versión. Si algunos son más antiguos, **Migrar todas
las notas** los actualiza, y antes se guarda una copia de seguridad de cada uno.

### Copias de seguridad {#backups}

Aparece una vez que se han migrado documentos. Muestra cuántos archivos de copia
hay y cuánto espacio ocupan. **Abrir carpeta de copias** los muestra; **Borrar
copias antiguas** elimina los que tienen más de 30 días.

### Restablecer {#reset}

**Restablecer todos los ajustes…** devuelve todos los ajustes de la app (tema,
editor, disposición, grafo, fechas, etc.) a su valor predeterminado, tras
preguntarte. Tus notas, bóvedas y registros de escritura se conservan.

---
title: Ajustes
sidebar_position: 18
---

# Ajustes

φ guarda sus ajustes en un solo lugar, agrupados para que rara vez tengas que
buscar. Abre los Ajustes con `⌘,` (o **Preferencias…** en el menú de la app). Una
columna a la izquierda enumera seis categorías; elige una y sus opciones aparecen
a la derecha.

Las categorías son **Apariencia**, **Editor**, **Versiones**, **Bóveda**,
**Plantillas** y **Datos**.

La mayoría de los ajustes se aplican a toda la app y surten efecto de inmediato.
La excepción es **Versiones**, que se configura *por bóveda* — ver más abajo.

## Apariencia

El aspecto de φ: claro u oscuro, el tamaño de la interfaz, qué tema de color usa
y en qué idioma habla. Los temas de color y los idiomas tienen su propia página —
ver [Temas e idiomas](themes-and-languages.md).

### Tema

- **Apariencia** — elige **Sistema**, **Claro** u **Oscuro**. Sistema sigue la
  configuración de tu Mac y cambia con ella.
- **Tamaño de la interfaz** — escala toda la interfaz, incluidos los iconos,
  entre **100%**, **115%**, **130%** y **150%**. Úsalo si la app se siente
  demasiado pequeña (o demasiado grande) en tu pantalla.

### Tema de color

Una lista de los temas de color instalados. El tema integrado **Phi** está
marcado como **Oficial**; los temas de la comunidad que instales aparecen debajo y
pueden quitarse con el icono de la papelera. **Instalar tema…** añade un archivo
JSON de tema, y **Abrir carpeta de temas** revela dónde viven. Todos los detalles
en la página [Temas e idiomas](themes-and-languages.md).

### Idioma

El **Idioma de la interfaz** de la app. Los idiomas integrados son inglés,
español y francés; **Predeterminado del sistema** sigue a tu Mac. Puedes
**Instalar un idioma…** (un archivo de traducción de la comunidad), **Exportar
plantilla en inglés…** para empezar la tuya y **Abrir carpeta** para ver dónde se
guardan los idiomas. Las traducciones que falten se muestran en inglés.

### Barra lateral

- **Mostrar documentos recientes** — muestra u oculta la sección Recientes en la
  parte superior de la barra lateral de archivos.

## Editor

Todo sobre la superficie de escritura en sí.

### Escritura

- **Fuente del cuerpo** — el tipo de letra de tu texto, agrupado en Serif, Sans y
  Mono. Las fuentes incluidas se integran en los EPUB; las del sistema están
  marcadas.
- **Tamaño de fuente** — el texto del cuerpo del editor, de 14 a 26 px.
  **Restablecer** lo devuelve al valor predeterminado.
- **Altura de línea** — el espacio entre líneas, de 1.3 a 2.2. **Restablecer** lo
  devuelve al valor predeterminado.
- **Escritura enfocada** — atenúa todo excepto la línea en la que estás:
  **Desactivado**, **Oración** o **Párrafo**.
- **Desplazamiento de máquina de escribir** — mantiene el cursor centrado
  verticalmente mientras escribes.
- **Formato de fecha** — cómo se muestran las fechas en la app. El día almacenado
  nunca cambia; esto solo afecta a cómo se muestra. Elegir **Personalizado**
  revela un campo de **Patrón personalizado** que usa tokens de date-fns (`yyyy`,
  `MMM`, `d`, `EEEE`…), con la fecha de hoy mostrada como vista previa en vivo.

### Racha de escritura

- **Mínimo de palabras / día** — un día cuenta para tu racha de escritura cuando
  escribes esta cantidad de palabras. El mínimo es 50.

### Código

Para los bloques de código.

- **Sangrar con** — **Espacios** o **Tabulaciones**.
- **Ancho de sangría** — espacios por sangría (y el ancho de visualización de una
  tabulación), de 1 a 8. 2 y 4 son habituales.

### Versiones e importación

- **Detalle de diferencias de versión** — con qué precisión se resaltan los
  cambios al previsualizar una versión: por **Palabra** o por **Carácter**.
- **Imágenes importadas** — cuando traes una imagen, o bien **Copiar a la bóveda**
  (a la carpeta `assets/` de la bóveda) o mantenerla **Incrustada** como data URI
  (autónoma, pero con documentos más grandes).

### Diccionario y tesauro

Instala y gestiona paquetes de diccionario sin conexión. Esta sección tiene su
propia página — ver [Diccionario y tesauro](dictionary.md).

## Versiones

**Estos ajustes se aplican a la bóveda activa.** Cada bóveda es su propio
repositorio con su propio backend, remoto e identidad — por eso el nombre de la
bóveda que estás configurando se muestra en la parte superior.

### Backend

Elige cómo se guarda el historial:

- **Nativo** — instantáneas locales, sin git. Es el valor predeterminado.
- **Git** — historial completo de git más respaldo remoto opcional. Disponible
  solo cuando git está instalado en tu equipo.

Cambiar a git es un paso para usuarios avanzados: φ ejecuta `git init` en la
bóveda, confirma automáticamente según una programación y migra tu historial
nativo existente a git. Un cuadro de diálogo de confirmación detalla primero las
advertencias. Una vez que una bóveda es un repositorio git, φ la mantiene en git;
para volver a nativo eliminas tú mismo la carpeta `.git`.

### Historial

- **Punto de control automático cada** — con qué frecuencia se confirman las
  ediciones como versión automática. Establece un número de minutos, elige un
  valor predefinido (1 / 5 / 10 / 30) o desactívalo (**Desactivado**). Las
  instantáneas manuales y los guardados al cerrar no se ven afectados.
- **Límite de historial local** (solo nativo) — el número máximo de versiones que
  se conservan por documento. Las instantáneas antiguas se podan para acotar el
  uso de disco. Instala git para historial ilimitado.

### Respaldo en git (solo backend de git)

Cuando una bóveda usa git, también puedes configurar cómo confirma φ y dónde hace
las copias de seguridad:

- **Nombre del commit** / **Correo del commit** — la identidad con la que confirma
  φ. Déjalo en blanco para usar el usuario git de tu equipo. Un correo dedicado
  mantiene este trabajo fuera de tu gráfico principal de GitHub.
- **Ruta de la clave SSH** — la clave privada que φ usa para hacer push (por
  ejemplo `~/.ssh/id_ed25519`). El archivo de clave debe tener `chmod 600`.
- **URL del remoto de respaldo** — el remoto de GitHub/GitLab/… al que hacer push.
  En blanco usa el origin existente del repositorio.
- **Push automático de respaldos** — envía los nuevos commits al remoto a
  intervalos regulares. Cuando está activo, define **Push cada** (minutos).
- **Firmar commits** — firma criptográficamente los commits para que aparezcan
  como *Verificado*. Elige un **Método de firma** (SSH o GPG) y una **Clave de
  firma**.
- **Respaldar ahora** — haz push de inmediato con **Hacer push ahora**. La pista
  te indica si estás al día, tienes commits sin enviar o aún no tienes remoto.

Para más sobre versiones y copias de seguridad, consulta [Versiones y copias de
seguridad](versions-and-backup.md).

## Bóveda

Sobre la bóveda en la que estás trabajando.

- **Bóveda activa** — el nombre y la ruta de carpeta de la bóveda actual.
- **Gestionar** — **Abrir bóveda…** y **Crear bóveda…** para cambiar o añadir
  bóvedas, y **Quitar bóveda…** para descartar la bóveda activa de φ. Quitar una
  bóveda solo hace que φ la olvide; tus archivos en disco quedan intactos.

Consulta [Bóvedas](vaults.md) para el panorama completo.

## Plantillas

Fragmentos reutilizables con variables. Esta sección enumera tus **plantillas de
bóveda** (específicas de la bóveda activa) y las **plantillas globales**
(disponibles en todas partes). Edita una con el icono del lápiz o quítala con el
icono de la papelera. **Instalar una plantilla…** añade un archivo de plantilla, y
**Abrir carpeta** revela dónde se guardan las plantillas globales.

Consulta [Plantillas](templates.md) para saber cómo funcionan las variables.

## Datos

El estado de tus archivos `.poiesis`, las copias de seguridad de migración y un
restablecimiento de ajustes.

### Estado de la bóveda

φ comprueba si tus documentos están en el esquema actual. Cuando todo está al día,
lo indica (con las versiones de esquema y de documento). Si algunos documentos
usan un esquema antiguo, **Migrar todas las notas** los actualiza — y se guarda
una copia de seguridad automáticamente antes de migrar cualquier documento.

### Copias de seguridad

Aparece una vez que se ha ejecutado una migración. Muestra cuántos archivos de
copia de seguridad existen y su tamaño total. **Abrir carpeta de copias** las
revela; **Borrar copias antiguas** elimina las más viejas.

### Restablecer

**Restablecer todos los ajustes…** restaura todos los ajustes de la app — tema,
editor, diseño, fechas, etc. — a sus valores de fábrica. Tus notas, bóvedas y
registros de escritura no se ven afectados.

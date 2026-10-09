---
title: Ajustes
description: Todas las secciones de los Ajustes de φ Poiesis y qué cambia cada ajuste.
---

# Ajustes

Todos los ajustes de φ Poiesis están en una sola ventana. A la izquierda aparecen las
secciones. Haz clic en una para ver sus ajustes a la derecha. Los cambios se
aplican al momento; no hace falta guardarlos.

<img src="/img/app/settings-light.png" alt="Los Ajustes abiertos en Apariencia: tema, tamaño de la interfaz, tema de color y barra lateral" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Los Ajustes abiertos en Apariencia: tema, tamaño de la interfaz, tema de color y barra lateral" width="1600" height="1000" loading="lazy" decoding="async" />

## Abrir los Ajustes {#open-settings}

Hay tres maneras:

- Haz clic en el botón de los controles deslizantes, en lo alto de la barra
  lateral, junto al nombre de la bóveda.
- Pulsa `⌘P` y elige **Abrir ajustes**.
- En un Mac, pulsa `⌘,` o elige **Preferencias…** en el menú de la aplicación.

Algunos ajustes cambian toda la aplicación. Otros solo cambian la bóveda que
tienes abierta. Una [bóveda](./vaults) es la carpeta que contiene tu trabajo.

| Sección | Qué contiene | A qué se aplica |
| --- | --- | --- |
| **Apariencia** | Claro u oscuro, el tamaño de la interfaz, el tema de color, el color de la barra lateral | Toda la aplicación |
| **Editor** | La zona donde escribes: fuente, tamaño, enfoque, fechas, racha, código, versiones | Toda la aplicación |
| **Ajustes de escritura** | Las señales (lo que Poiesis te muestra sobre tu escritura) y los lugares que tiene cada modo | La bóveda abierta |
| **Idioma** | El idioma de la aplicación, la ortografía, tu diccionario | Toda la aplicación, más un apartado **Esta bóveda** |
| **Versiones** | Cómo se guarda y se respalda el historial | La bóveda abierta |
| **Bóveda** | Qué modos tiene la bóveda, y añadir o quitar bóvedas | La bóveda abierta |
| **Plantillas** | Tus plantillas y sus variables | Esta bóveda y todas las bóvedas |
| **Atajos** | Los principales atajos de teclado | — |
| **Datos** | El estado de tus archivos, las copias de seguridad de las migraciones, un restablecimiento | Toda la aplicación |

## Apariencia {#appearance}

El aspecto de Poiesis. En [Temas e idiomas](./themes-and-languages) hay más
información sobre los temas de color.

| Ajuste | Qué hace |
| --- | --- |
| **Apariencia** | **Sistema**, **Claro** u **Oscuro**. **Sistema** sigue a tu ordenador: cuando este pasa al modo oscuro, Poiesis también. |
| **Tamaño de la interfaz** | **100%**, **115%**, **130%** o **150%**. Lo agranda todo, incluidos los iconos. |
| **Tema de color** | Los temas que tienes, cada uno con una pequeña vista previa. Con **Instalar tema…** y **Explorar temas oficiales…** puedes añadir más. **Abrir carpeta de temas** muestra dónde se guardan. |
| **Barra lateral en tema claro** | **Oscuro** o **Claro**. El valor predeterminado es **Oscuro**, para que la página sea lo más luminoso de la pantalla. En el tema oscuro, la barra lateral siempre es oscura. |
| **El santuario atenúa el resto** | El [Santuario](./focus-and-writing-modes) oculta todo lo que hay en Poiesis salvo la página. Con este ajuste activado, el Santuario atenúa además todo menos la oración que estás escribiendo. Si **Escritura enfocada** está en **Párrafo**, se mantiene nítido el párrafo entero. Desactiva el ajuste para que no se atenúe nada. |

## Editor {#editor}

La zona donde escribes.

| Ajuste | Qué hace |
| --- | --- |
| **Fuente del cuerpo** | El tipo de letra con el que escribes. La lista está agrupada en Serif, Sans y Mono. Las fuentes marcadas como *sistema* son de tu ordenador. Las demás vienen con Poiesis, y Poiesis las incluye dentro de los libros electrónicos que creas. |
| **Tamaño de fuente** | De 14 a 26 px. **Restablecer** vuelve al valor predeterminado. |
| **Altura de línea** | El espacio entre líneas, de 1,3 a 2,2. **Restablecer** vuelve al valor predeterminado. |
| **Escritura enfocada** | **Desactivado**, **Oración** o **Párrafo**. Atenúa todo menos la oración o el párrafo que estás escribiendo. |
| **Mostrar Markdown** | Muestra en un tono tenue las marcas de Markdown (`**`, `#` y `[ ]( )`) alrededor del formato, en la línea que estás escribiendo. Tus documentos no cambian. |
| **Desplazamiento de máquina de escribir** | Mantiene la línea que estás escribiendo en el centro de la ventana. |
| **Formato de fecha** | Cómo se muestran las fechas en toda la aplicación: *June 11, 2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026* o **Personalizado…**. Solo cambia la forma de mostrar la fecha. El día guardado no cambia nunca. |
| **Patrón personalizado** | Aparece al elegir **Personalizado…**. Escribe un patrón con los códigos de date-fns (`yyyy`, `MMM`, `d`, `EEEE`…). Mientras escribes, Poiesis muestra la fecha de hoy con ese patrón. |
| **Mínimo de palabras / día** | En **Racha de escritura**. Las palabras que tienes que escribir para que un día cuente en tu racha (50 o más). Una racha es una serie de días seguidos en los que has escrito. |
| **Sangrar con** | En **Código**. **Espacios** o **Tabulaciones** en los bloques de código. |
| **Ancho de sangría** | En **Código**. Cuántos espacios tiene una sangría, de 1 a 8. También define el ancho con que se ve una tabulación. |
| **Detalle de diferencias** | En **Versiones e importación**. Al previsualizar una versión antigua, Poiesis marca los cambios por **Palabra** o por **Carácter**. |
| **Imágenes importadas** | En **Versiones e importación**. **Copiar a la bóveda** pone las imágenes que importas en la carpeta `assets/` de la bóveda. **Incrustado** las deja dentro del documento, con lo que el documento ocupa más. |

## Ajustes de escritura {#setup}

Lo que Poiesis te muestra en esta bóveda. Cuando desactivas algo, Poiesis lo oculta. Tu
trabajo nunca se oculta ni se borra. En [Puesta a punto](./setup) se explica todo esto.

| Ajuste | Qué hace |
| --- | --- |
| **Iniciar sesiones automáticamente** | Activado: el reloj de la sesión arranca cuando escribes la primera letra. Desactivado: solo corre cuando lo pones en marcha tú. |
| **Estadísticas de legibilidad** | Muestra el nivel de lectura y la longitud de las oraciones en las estadísticas de un documento. |
| **Racha** | **Llama y número**, **Días a secas** o **Apagada**. |
| **La semana empieza en** | Cualquier día de la semana. Define la primera columna del calendario y del mapa de calor, y la semana en la que se cuenta tu ritmo. |
| **Ritmo semanal** | **Ninguno**, o cuántos días por semana quieres escribir. Un día sin escribir nunca lo pone a cero. |
| **Modos** | Abre **Escribir**, **Notas** o **Diario** para configurar ese modo. Puedes elegir los lugares que tiene (Personajes, Autores, Investigación, Tableros, Grafo, Calendario, páginas matinales). Puedes cambiar las señales (los ajustes de arriba) solo para ese modo. Puedes activar o desactivar las **Listas de tareas**. En cada modo se lee **Sigue a la bóveda** o **Difiere**. **Volver a seguir a la bóveda** elimina la diferencia. |
| **Ajustes guardados** | **Guardar como…** guarda esta configuración con un nombre. **Usar en esta bóveda** o **Usar en otra bóveda…** aplica a una bóveda una configuración guardada. También puedes cambiarle el nombre o eliminarla. |

## Idioma {#language}

| Ajuste | Qué hace |
| --- | --- |
| **Idioma de la interfaz** | El idioma de los menús y los textos de Poiesis: **Predeterminado del sistema**, un idioma que viene con Poiesis o uno que hayas instalado. Debajo están **Instalar un idioma…**, **Exportar plantilla en inglés…** y **Abrir carpeta**. |
| **Revisar ortografía** | Subraya las palabras mal escritas mientras escribes. |
| **Motor** | **Nativo** usa el corrector ortográfico de tu ordenador. **Mejorado** usa los diccionarios propios de Poiesis, así que el resultado es el mismo en cualquier ordenador. |
| **Idiomas** | Los idiomas que se revisan. Con **Nativo** en un Mac, es el Mac quien elige el idioma. |
| **Predeterminado para esta bóveda** | En **Esta bóveda**. **Usar global**, **Nativo** o **Mejorado**, solo para esta bóveda. Con **Mejorado** también puedes elegir los idiomas de esta bóveda. |
| **Diccionario personal** | Las palabras que has añadido. Cada una tiene un botón de papelera para quitarla. |
| **Diccionario y tesauro** | **Instalar paquete de diccionario…** añade un diccionario. Debajo están los paquetes que tienes, con su número de palabras. |

Consulta [Temas e idiomas](./themes-and-languages), [Ortografía](./spelling) y
[Diccionario y tesauro](./dictionary).

## Versiones {#versioning}

Estos ajustes son de la bóveda abierta. Su nombre aparece arriba. Cada bóveda
lleva su propio historial.

| Ajuste | Qué hace |
| --- | --- |
| **Backend** | **Nativo**: las versiones se guardan en este ordenador, sin instalar nada. **Git**: historial sin límite y, si quieres, una copia de seguridad en otro lugar. Mientras git no esté instalado, la opción dice **Git (requiere git)**. Al pasar a git, Poiesis te pregunta antes y traslada tu historial. Para volver atrás, tendrás que quitar tú la carpeta `.git` de la bóveda. |
| **Punto de control automático cada** | Cada cuánto crea Poiesis una versión de tus cambios sin que se lo pidas. Escribe un número de minutos, o elige **1**, **5**, **10**, **30** o **Desactivado**. No afecta a las versiones que guardas tú. |
| **Límite de historial local** | Solo con Nativo. El número máximo de versiones que se conservan de cada documento. Las más antiguas se eliminan. |

Cuando el backend es **Git**, aparece el grupo **Respaldo en git**:

| Ajuste | Qué hace |
| --- | --- |
| **Nombre del commit** · **Correo del commit** | El nombre y el correo que quedan registrados en el historial. Si los dejas en blanco, Poiesis usa el usuario de git de tu ordenador. |
| **Ruta de la clave SSH** | La clave privada con la que Poiesis envía la copia de seguridad. Con **Examinar…** puedes elegir el archivo. El archivo de la clave debe tener `chmod 600`. |
| **URL del remoto de respaldo** | La dirección a la que se envía la copia de seguridad. Si la dejas en blanco, Poiesis usa el remoto que ya tenga el repositorio. |
| **Push automático de respaldos** | Envía el historial nuevo cada cierto tiempo. **Push cada** fija el número de minutos. |
| **Firmar commits** | Firma los commits para que aparezcan como verificados. Elige un **Método de firma** (SSH o GPG) y una **Clave de firma**. |
| **Respaldar ahora** | Muestra cómo está la copia de seguridad: al día, con commits pendientes de envío o todavía sin remoto. **Hacer push ahora** envía la copia en el momento. |

Si la bóveda está en una carpeta en la nube, Poiesis guarda su repositorio de git en
este ordenador, no dentro de la bóveda. Poiesis para iPhone y iPad (próximamente)
nunca ejecuta git. Guarda las versiones en la carpeta `.poiesis-history` de la
bóveda. Hay más información en
[Versiones y copias de seguridad](./versions-and-backup).

## Bóveda {#vault}

| Ajuste | Qué hace |
| --- | --- |
| **Bóveda activa** | El nombre y la carpeta de la bóveda abierta. |
| **Espacios** | Los modos que muestra la bóveda: **Escribir**, **Notas** y **Diario** (al menos uno). **Se abre en** define lo que ves al abrir la bóveda: **Inicio** o uno de sus modos. |
| **Gestionar** | **Abrir bóveda…** y **Crear bóveda…** añaden una bóveda. **Quitar bóveda…** te pregunta cómo quitarla. **Desvincular (conservar carpeta)** quita la bóveda de Poiesis y no toca la carpeta. **Mover a la papelera** envía la carpeta entera a la papelera de tu ordenador; de ahí todavía puedes recuperarla. |

Consulta [Bóvedas](./vaults).

## Plantillas {#templates}

Arriba están las variables que puede usar una plantilla: `<% today %>`,
`<% tomorrow %>`, `<% yesterday %>`, `<% time %>` y `<% cursor %>`. La última
marca dónde queda el cursor en el documento nuevo.

Debajo hay dos listas: **Esta bóveda** y **Plantillas globales**. Cada
plantilla tiene un botón de lápiz para editarla y uno de papelera para
quitarla.

- **Instalar una plantilla…** añade un archivo de plantilla.
- **Abrir carpeta de plantillas** muestra dónde se guardan las plantillas.

Consulta [Plantillas](./templates).

## Atajos {#shortcuts}

Los principales atajos de teclado, en cuatro grupos: **Moverse**,
**Documentos**, **Escritura** y **Formato**. Es la misma lista que muestra
`⌘/`. Para encontrar un atajo, escribe en **Buscar comandos…**.

En [Atajos de teclado](./keyboard-shortcuts) están todos los atajos.

## Datos {#data}

| Ajuste | Qué hace |
| --- | --- |
| **Estado de la bóveda** | Indica si tus documentos usan el formato de archivo actual. Si algunos usan un formato más antiguo, **Migrar todas las notas** los actualiza. Antes, Poiesis guarda una copia de seguridad de cada uno. |
| **Copias de seguridad** | Aparece después de migrar documentos. Indica cuántas copias hay y cuánto ocupan. **Abrir carpeta de copias** las muestra; **Borrar copias antiguas** elimina las antiguas. |
| **Restablecer todos los ajustes…** | Devuelve todos los ajustes de la aplicación (tema, editor, disposición, grafo, fechas) a su valor predeterminado. Poiesis te pregunta antes. Tus documentos, tus bóvedas y tus registros de escritura se conservan. |

## Ver también {#see-also}

- [Puesta a punto](./setup): todo sobre las señales, los lugares y los
  modos.
- [Temas e idiomas](./themes-and-languages)
- [Atajos de teclado](./keyboard-shortcuts)
- [Versiones y copias de seguridad](./versions-and-backup)

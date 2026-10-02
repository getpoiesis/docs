---
title: Ajustes
description: Cada sección de los Ajustes de φ, y qué cambia cada ajuste.
---

# Ajustes

φ reúne sus ajustes en una sola ventana: las secciones a la izquierda y, a su
lado, los ajustes de la que elijas. Los cambios se aplican al instante; no hay
nada que guardar.

<img src="/img/app/settings-light.png" alt="Ajustes abiertos en Apariencia: tema, tamaño de la interfaz, tema de color y barra lateral" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Ajustes abiertos en Apariencia: tema, tamaño de la interfaz, tema de color y barra lateral" width="1600" height="1000" loading="lazy" decoding="async" />

## Abrir los Ajustes {#open-settings}

- Haz clic en el botón de controles deslizantes arriba de la barra lateral,
  junto al nombre de la bóveda.
- Pulsa `⌘P` y elige **Abrir ajustes**.
- En un Mac, pulsa `⌘,`, o elige **Preferencias…** en el menú de la app.

| Sección | Qué contiene | Se aplica a |
| --- | --- | --- |
| **Apariencia** | Claro u oscuro, tamaño de la interfaz, tema de color, la barra lateral | Toda la app |
| **Editor** | La superficie de escritura: fuente, tamaño, enfoque, fechas, racha, código, versiones | Toda la app |
| **Ajustes de escritura** | Las señales que te devuelve φ y los lugares que ofrece cada modo | La bóveda abierta |
| **Idioma** | El idioma de la app, la ortografía, tu diccionario | Toda la app, más una parte **Esta bóveda** |
| **Versiones** | Cómo se guarda y respalda el historial | La bóveda abierta |
| **Bóveda** | Qué modos tiene la bóveda, y añadir o quitar bóvedas | La bóveda abierta |
| **Plantillas** | Tus plantillas y sus variables | Esta bóveda y todas las bóvedas |
| **Atajos** | Los principales atajos de teclado | — |
| **Datos** | El estado de tus archivos, las copias de seguridad de migración, un restablecimiento | Toda la app |

## Apariencia {#appearance}

El aspecto de φ. Más sobre los temas de color en
[Temas e idiomas](./themes-and-languages).

| Ajuste | Qué hace |
| --- | --- |
| **Apariencia** | **Sistema**, **Claro** u **Oscuro**. Sistema sigue a tu ordenador y cambia con él. |
| **Tamaño de la interfaz** | **100%**, **115%**, **130%** o **150%**. Lo escala todo, iconos incluidos. |
| **Tema de color** | Los temas instalados, cada uno con una pequeña vista previa. **Instalar tema…**, **Abrir carpeta de temas** y **Explorar temas oficiales…** añaden más. |
| **Barra lateral en tema claro** | **Oscuro** (el predeterminado, para que la página sea lo más luminoso de la pantalla) o **Claro**. En el tema oscuro la barra lateral siempre es oscura. |
| **El santuario atenúa el resto** | En el [Santuario](./focus-and-writing-modes), solo la oración en la que estás se mantiene con toda su intensidad, o el párrafo si así lo indica **Escritura enfocada**. Desactívalo para mantenerlo todo iluminado. |

## Editor {#editor}

La superficie de escritura.

| Ajuste | Qué hace |
| --- | --- |
| **Fuente del cuerpo** | El tipo de letra en el que escribes, agrupado en Serif, Sans y Mono. Las fuentes marcadas como *sistema* vienen de tu ordenador; las demás vienen con φ y se integran en los libros electrónicos. |
| **Tamaño de fuente** | De 14 a 26 px. **Restablecer** vuelve al valor predeterminado. |
| **Altura de línea** | De 1,3 a 2,2. **Restablecer** vuelve al valor predeterminado. |
| **Escritura enfocada** | **Desactivado**, **Oración** o **Párrafo**: atenúa todo salvo la oración o el párrafo en el que estás. |
| **Mostrar Markdown** | Muestra de forma tenue las marcas `**`, `#` y `[ ]( )` alrededor del formato en la línea que estás escribiendo. Tus documentos no cambian. |
| **Desplazamiento de máquina de escribir** | Mantiene la línea que estás escribiendo en el centro de la ventana. |
| **Formato de fecha** | Cómo se muestran las fechas en toda la app: *June 11, 2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026*, o **Custom…**. Solo cambia cómo se muestra, nunca el día guardado. |
| **Patrón personalizado** | Aparece con **Personalizado…**. Acepta tokens de date-fns (`yyyy`, `MMM`, `d`, `EEEE`…) y muestra la fecha de hoy mientras escribes. |
| **Mínimo de palabras / día** | Bajo **Racha de escritura**: cuántas palabras hacen que un día cuente para tu racha (50 o más). |
| **Sangrar con** | Bajo **Código**: **Espacios** o **Tabulaciones** en los bloques de código. |
| **Ancho de sangría** | Bajo **Código**: espacios por sangría, de 1 a 8, y el ancho con el que se muestra una tabulación. |
| **Detalle de diferencias** | Bajo **Versiones e importación**: al previsualizar una versión antigua, marca los cambios por **Palabra** o por **Carácter**. |
| **Imágenes importadas** | Bajo **Versiones e importación**: **Copiar a la bóveda** coloca las imágenes que traes en la carpeta `assets/` de la bóveda; **Incrustado** las mantiene dentro del documento, lo que lo hace más grande. |

## Ajustes de escritura {#setup}

Lo que φ te muestra en esta bóveda. Desactivar algo lo oculta, nunca toca tu
trabajo. [Ajustes de escritura](./setup) lo explica a fondo.

| Ajuste | Qué hace |
| --- | --- |
| **Iniciar sesiones automáticamente** | El reloj empieza con tu primera pulsación de tecla. Desactivado, solo corre cuando lo inicias tú. |
| **Estadísticas de legibilidad** | Nivel de lectura y longitud de las oraciones en las estadísticas de un documento. |
| **Racha** | **Llama y número**, **Días a secas** o **Apagada**. |
| **La semana empieza en** | Cualquier día de la semana: la primera columna del calendario y del mapa de calor, y la semana en la que se cuenta tu ritmo. |
| **Ritmo semanal** | **Ninguno**, o un número de días por semana como objetivo. Un día perdido nunca lo reinicia. |
| **Modos** | Abre **Escribir**, **Notas** o **Diario** para elegir los lugares que ofrece (Personajes, Autores, Investigación, Tableros, Grafo, Calendario, páginas matinales), cambiar las señales solo para ese modo y activar o desactivar las **Listas de tareas**. Cada uno indica **Sigue a la bóveda** o **Difiere**; **Volver a seguir a la bóveda** deshace la diferencia. |
| **Ajustes guardados** | **Guardar como…** conserva estos ajustes con un nombre. **Usar en esta bóveda** o **Usar en otra bóveda…** los aplica a una bóveda; también puedes renombrarlos o eliminarlos. |

## Idioma {#language}

| Ajuste | Qué hace |
| --- | --- |
| **Idioma de la interfaz** | El idioma en el que habla φ: **Predeterminado del sistema**, un idioma que viene con φ o uno que hayas instalado. **Instalar un idioma…**, **Exportar plantilla en inglés…** y **Abrir carpeta** están debajo. |
| **Revisar ortografía** | Subraya las palabras mal escritas mientras escribes. |
| **Motor** | **Nativo** usa el corrector ortográfico de tu ordenador; **Mejorado** usa los diccionarios propios de φ, así que los resultados son los mismos en todos los sistemas. |
| **Idiomas** | Qué idiomas revisar. Con **Nativo** en un Mac, el sistema elige el idioma por sí mismo. |
| **Predeterminado para esta bóveda** | Bajo **Esta bóveda**: **Usar global**, **Nativo** o **Mejorado** solo para esta bóveda. Con **Mejorado**, también puedes elegir sus idiomas. |
| **Diccionario personal** | Las palabras que has añadido, cada una con una papelera para quitarla. |
| **Diccionario y tesauro** | **Instalar paquete de diccionario…**, y los paquetes que tienes con su número de palabras. |

Consulta [Temas e idiomas](./themes-and-languages), [Ortografía](./spelling) y
[Diccionario y tesauro](./dictionary).

## Versiones {#versioning}

Estos ajustes pertenecen a la bóveda abierta, y su nombre aparece arriba. Cada
bóveda guarda su propio historial.

| Ajuste | Qué hace |
| --- | --- |
| **Backend** | **Nativo**: instantáneas locales, nada que instalar. **Git**: historial completo y respaldo opcional en un remoto. Hasta que git está instalado, la opción dice **Git (requiere git)**. Cambiar a git pregunta primero y trae tu historial; para volver atrás, tendrías que quitar tú mismo la carpeta `.git` de la bóveda. |
| **Punto de control automático cada** | Con qué frecuencia tus ediciones se convierten en una versión automática: escribe un número de minutos, elige **1**, **5**, **10** o **30**, o **Desactivado**. Las versiones que guardas a mano no se ven afectadas. |
| **Límite de historial local** | Solo Nativo: el máximo de versiones que se conservan por documento. Las más antiguas se eliminan. |

Con **Git**, aparece un grupo **Respaldo en git**:

| Ajuste | Qué hace |
| --- | --- |
| **Nombre del commit** · **Correo del commit** | Con qué identidad hace φ los commits. En blanco usa el usuario git de tu ordenador. |
| **Ruta de la clave SSH** | La clave privada con la que φ hace push, con **Examinar…**. El archivo de la clave debe tener `chmod 600`. |
| **URL del remoto de respaldo** | Adónde hacer push. En blanco usa el remoto existente del repositorio. |
| **Push automático de respaldos** | Envía los nuevos commits periódicamente, cada **Push cada** minutos. |
| **Firmar commits** | Firma los commits para que aparezcan como verificados, con un **Método de firma** (SSH o GPG) y una **Clave de firma**. |
| **Respaldar ahora** | Indica si estás al día, si tienes commits esperando o si aún no tienes remoto. **Hacer push ahora** envía de inmediato. |

Si la bóveda está en una carpeta en la nube, φ guarda su repositorio git en
este ordenador en lugar de dentro de la bóveda. φ en iPhone y iPad
(próximamente) nunca ejecuta git; guarda las versiones en la carpeta
`.poiesis-history` de la bóveda. Más en
[Versiones y copias de seguridad](./versions-and-backup).

## Bóveda {#vault}

| Ajuste | Qué hace |
| --- | --- |
| **Bóveda activa** | El nombre y la carpeta de la bóveda abierta. |
| **Espacios** | Cuáles de **Escribir**, **Notas** y **Diario** muestra la bóveda (al menos uno), y dónde se abre (**Se abre en**): **Inicio** o uno de sus modos. |
| **Gestionar** | **Abrir bóveda…** y **Crear bóveda…** añaden una bóveda. **Quitar bóveda…** te pregunta cómo: **Desvincular (conservar carpeta)** la saca de φ y deja la carpeta como está; **Mover a la papelera** mueve la carpeta entera a la Papelera de tu ordenador, donde aún puedes recuperarla. |

Consulta [Bóvedas](./vaults).

## Plantillas {#templates}

Las variables que puede usar una plantilla, como distintivos: `<% today %>`,
`<% tomorrow %>`, `<% yesterday %>`, `<% time %>` y `<% cursor %>` (donde cae
el cursor). Debajo, dos listas, **Esta bóveda** y **Plantillas globales**, cada
plantilla con un lápiz para editarla y una papelera para quitarla. **Instalar
una plantilla…** añade un archivo de plantilla; **Abrir carpeta de plantillas**
muestra dónde se guardan. Consulta [Plantillas](./templates).

## Atajos {#shortcuts}

Los principales atajos de teclado, agrupados en **Moverse**, **Documentos**,
**Escritura** y **Formato**: la misma tarjeta que muestra `⌘/`. Escribe en
**Buscar comandos…** para acotar la lista. Todos los atajos están en
[Atajos de teclado](./keyboard-shortcuts).

## Datos {#data}

| Ajuste | Qué hace |
| --- | --- |
| **Estado de la bóveda** | Si tus documentos usan el formato de archivo actual. Si algunos son más antiguos, **Migrar todas las notas** los actualiza, y antes guarda una copia de seguridad de cada uno. |
| **Copias de seguridad** | Aparece una vez que se ha migrado algo: cuántas copias hay y cuánto ocupan, con **Abrir carpeta de copias** y **Borrar copias antiguas**. |
| **Restablecer todos los ajustes…** | Devuelve todos los ajustes de la app (tema, editor, disposición, grafo, fechas) a su valor predeterminado, tras preguntarte. Tus documentos, bóvedas y registros de escritura se conservan. |

## Ver también {#see-also}

- [Ajustes de escritura](./setup): señales, lugares y modos a fondo.
- [Temas e idiomas](./themes-and-languages)
- [Atajos de teclado](./keyboard-shortcuts)
- [Versiones y copias de seguridad](./versions-and-backup)

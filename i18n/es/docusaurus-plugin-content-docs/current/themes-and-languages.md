---
title: Temas e idiomas
sidebar_position: 19
---

# Temas e idiomas

φ debería sentirse como *tu* sala de escritura — con luz o en la oscuridad,
tintada como te gusta, en el idioma en el que piensas. Todo esto vive en
**Ajustes** (`⌘,`) → **Apariencia**.

## Claro, oscuro o sistema

En **Tema**, ajusta la **Apariencia** a **Claro**, **Oscuro** o **Sistema**.
Sistema sigue la apariencia de tu Mac y cambia con ella — clara de día, oscura de
noche, automáticamente.

También puedes alternar el modo actual sin abrir los Ajustes: abre la paleta de
comandos (`⌘P`) y elige **Cambiar tema (sistema / claro / oscuro)**, o usa
**Cambiar tema** en el menú Ver.

## Temas de color

Un *tema de color* tinta la interfaz — fondos, texto, acentos, el color de los
enlaces wiki, los colores de sintaxis del código, etc. El modo claro/oscuro de
arriba decide qué lado de un tema se aplica; el tema de color decide la paleta.
Cada tema de la lista muestra una pequeña vista previa —una mini maqueta de la
ventana de φ— construida con sus propios colores, para que veas cómo se ve antes
de cambiar.

### El tema φ integrado

φ viene con un tema oficial, **Phi**: grises neutros con una página de blanco o
negro puro. Es el predeterminado y está marcado como **Oficial** en la lista. No
se puede quitar.

### Instalar temas oficiales

La forma más rápida de añadir un tema es desde dentro de φ. En **Ajustes →
Apariencia → Tema de color**, haz clic en **Explorar temas oficiales…**. φ muestra
la galería oficial —Nord, Dracula, Gruvbox y compañía— cada uno con una pequeña
vista previa hecha con sus propios colores. Haz clic en **Instalar** en los que te
gusten.

Instalar añade el tema a tu lista de **Tema de color**; selecciónalo ahí para
aplicarlo. (No pasa nada por coger varios — elige tu favorito después.) Un tema ya
añadido muestra **Instalado**, y **Actualizar** vuelve a obtener su última versión.

La galería se guarda localmente en caché, así que se abre al instante y sigue
funcionando sin conexión una vez cargada; se actualiza en silencio cuando φ se
inicia y cuando buscas actualizaciones.

### Instalar un archivo de tema a mano

También puedes instalar un tema desde un archivo — útil para uno que hiciste tú
mismo o que te enviaron. Todo tema que no sea Phi es un pequeño archivo JSON que
vive fuera de la app, en tu carpeta de temas, así que añadir o quitar uno nunca
toca la aplicación en sí.

1. En **Ajustes → Apariencia → Tema de color**, haz clic en **Instalar tema…**.
2. Selecciona el archivo `.json` del tema.

Para ver dónde se guardan los temas —para colocar un archivo a mano o para
respaldarlos— haz clic en **Abrir carpeta de temas**. Los archivos que coloques
ahí se detectan la próxima vez que abras los Ajustes. Quita cualquier tema de la
comunidad con el icono de la papelera junto a él; su archivo se elimina de la
carpeta de temas.

### Cómo funcionan los temas (y por qué son seguros)

Un tema proporciona un conjunto de colores `light` y/o `dark`. Cualquier color que
un tema omita recurre al valor integrado de Phi, así que un tema parcial es
perfectamente válido. Los temas solo pueden establecer **colores** — las fuentes,
el espaciado y el diseño no son tematizables — y cada valor se valida como un color
CSS seguro cuando se instala el archivo, de modo que un archivo de tema no fiable
no puede hacer nada más allá de cambiar un color.

### La galería de temas

Los temas oficiales provienen de la **galería de temas de φ** — la misma
biblioteca desde la que instala el explorador integrado:

> **[github.com/getpoiesis/themes](https://github.com/getpoiesis/themes)**

**Las contribuciones son bienvenidas.** ¿Hiciste un tema del que estás orgulloso?
Abre una pull request a la galería y compártelo — los temas bien hechos se añaden
para todos, y luego aparecen en el explorador integrado para todos. El README del
repositorio tiene el (pequeño) formato de archivo de tema y las pautas de
contribución.

## Idiomas

La interfaz de φ puede funcionar en distintos idiomas.

### Cambiar de idioma

En **Ajustes → Apariencia → Idioma**, ajusta el **Idioma de la interfaz**.
**Predeterminado del sistema** sigue a tu Mac; de lo contrario, elige un idioma de
la lista.

Los idiomas integrados son:

- **Inglés** (English)
- **Español** (Español)
- **Francés** (Français)

### Paquetes de idioma de la comunidad

Como los temas, los idiomas adicionales son archivos JSON instalables que se
guardan en tu propia carpeta de locales, fuera de la app.

- **Instalar un idioma…** — selecciona un archivo `.json` de idioma para
  añadirlo. Aparece bajo **Comunidad** en la lista de idiomas.
- **Exportar plantilla en inglés…** — guarda un archivo con todos los textos de la
  interfaz en inglés. Traduce los valores e instala el resultado para usar φ en tu
  idioma — o compártelo para que pueda llegar a todos.
- **Abrir carpeta** — revela dónde viven los idiomas instalados.

Quita un idioma de la comunidad con el icono de la papelera junto a él.

### Las traducciones que falten se muestran en inglés

Una traducción no tiene que estar completa para ser útil. Cualquier texto que un
paquete de idioma no traduzca se muestra en inglés, así que φ siempre está
totalmente etiquetado aunque haya una traducción parcial.

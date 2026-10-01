---
title: Temas e idiomas
---

# Temas e idiomas

φ debería sentirse como *tu* sala de escritura: con luz o a oscuras, con el
tono que te guste, en el idioma en el que piensas. Los temas viven en **Ajustes
→ Apariencia**, y los idiomas en **Ajustes → Idioma**.

## Claro, oscuro o sistema {#light-dark-or-system}

En **Tema**, ajusta la **Apariencia** a **Claro**, **Oscuro** o **Sistema**.
Sistema sigue la apariencia de tu ordenador y cambia con ella: clara de día,
oscura de noche, automáticamente.

También puedes cambiar el modo actual sin abrir los Ajustes: abre la paleta de
comandos (`⌘P`) y elige **Cambiar tema (sistema / claro / oscuro)**, o usa
**Cambiar tema** en el menú Ver.

### La barra lateral {#the-sidebar}

En el tema claro, la barra lateral se queda oscura por defecto, para que la
página sea lo más luminoso de la pantalla. Si también la quieres clara, ajusta
**Ajustes → Apariencia → Barra lateral en tema claro** a **Claro**. En el tema
oscuro, la barra lateral siempre es oscura.

## Temas de color {#color-themes}

Un *tema de color* tiñe la interfaz: fondos, texto, acentos, el color de los
enlaces wiki, los colores de sintaxis del código, etc. El modo claro/oscuro de
arriba decide qué lado de un tema se aplica; el tema de color decide la paleta.
Cada tema de la lista muestra una pequeña vista previa (una mini maqueta de la
ventana de φ) construida con sus propios colores, para que veas cómo queda antes
de cambiar.

### El tema φ integrado {#the-built-in-φ-theme}

φ incluye un tema oficial, **Phi**: grises neutros con una página blanca o negra
pura. Es el predeterminado y está marcado como **Oficial** en la lista. No se
puede quitar.

### Instalar temas oficiales {#installing-official-themes}

La forma más rápida de añadir un tema es desde el propio φ. En **Ajustes →
Apariencia → Tema de color**, haz clic en **Explorar temas oficiales…**. φ
muestra la galería oficial (Nord, Dracula, Gruvbox y compañía), cada uno con una
pequeña vista previa dibujada con sus propios colores. Haz clic en **Instalar**
en los que te gusten.

Instalar añade el tema a tu lista de **Tema de color**; selecciónalo ahí para
aplicarlo. (Puedes coger varios sin problema y elegir tu favorito después.) Un
tema ya añadido muestra **Instalado**, y **Actualizar** descarga de nuevo su
última versión.

La galería se guarda en caché localmente, así que se abre al instante y sigue
funcionando sin conexión una vez cargada; se actualiza discretamente cuando φ
arranca y cuando buscas actualizaciones.

### Instalar un archivo de tema a mano {#installing-a-theme-file-by-hand}

También puedes instalar un tema desde un archivo, algo práctico para uno que
hayas hecho tú o que te hayan enviado. Todos los temas salvo Phi son un pequeño
archivo JSON que vive fuera de la app, en tu carpeta de temas, así que añadir o
quitar uno nunca toca la aplicación en sí.

1. En **Ajustes → Apariencia → Tema de color**, haz clic en **Instalar tema…**.
2. Selecciona el archivo `.json` del tema.

Para ver dónde se guardan los temas (para dejar un archivo a mano o hacer una
copia), haz clic en **Abrir carpeta de temas**. Los archivos que pongas ahí se
detectan la próxima vez que abras los Ajustes. Quita cualquier tema de la
comunidad con la papelera que tiene al lado; su archivo se elimina de la carpeta
de temas.

### Cómo funcionan los temas (y por qué son seguros) {#how-themes-work-and-why-theyre-safe}

Un tema aporta un conjunto de colores `light` y/o `dark`. Cualquier color que un
tema omita recurre al valor integrado de Phi, así que un tema parcial es
perfectamente válido. Los temas solo pueden definir **colores** (las fuentes,
los espaciados y la disposición no se pueden tematizar), y cada valor se valida
como un color CSS seguro al instalar el archivo, así que un archivo de tema no
fiable no puede hacer nada más que cambiar un color.

### La galería de temas {#the-themes-gallery}

Los temas oficiales vienen de la **galería de temas de φ**, la misma biblioteca
desde la que instala el explorador integrado en la app:

> **[github.com/getpoiesis/themes](https://github.com/getpoiesis/themes)**

**Las contribuciones son bienvenidas.** ¿Has hecho un tema del que estás
orgulloso? Abre una pull request en la galería y compártelo: los temas bien
hechos se añaden para todos, y luego aparecen en el explorador de la app para
todo el mundo. El README del repositorio explica el (pequeño) formato de archivo
de tema y las pautas para contribuir.

## Idiomas {#languages}

La interfaz de φ puede funcionar en distintos idiomas.

### Cambiar de idioma {#switching-language}

En **Ajustes → Idioma**, ajusta el **Idioma de la interfaz**. **Predeterminado
del sistema** sigue a tu ordenador; si no, elige un idioma de la lista.

Los idiomas que vienen con φ aparecen bajo **φ**, cada uno con su propio nombre y
el nombre en inglés al lado:

- **English (English)**
- **Español (Spanish)**
- **Français (French)**

Los idiomas que instalas tú aparecen bajo **Comunidad**.

### Paquetes de idioma de la comunidad {#community-language-packs}

Como los temas, los idiomas adicionales son archivos JSON instalables que se
guardan en tu propia carpeta de idiomas, fuera de la app.

- **Instalar un idioma…**: selecciona un archivo `.json` de idioma para añadirlo.
  Aparece bajo **Comunidad** en la lista de idiomas.
- **Exportar plantilla en inglés…**: guarda un archivo con todos los textos de
  la interfaz en inglés. Traduce los valores e instala el resultado para usar φ
  en tu idioma, o compártelo para que pueda incluirse para todos.
- **Abrir carpeta**: muestra dónde viven los idiomas instalados.

Quita un idioma de la comunidad con la papelera que tiene al lado.

### Las traducciones que faltan recurren al inglés {#missing-translations-fall-back-to-english}

Una traducción no tiene que estar completa para ser útil. Cualquier texto que un
paquete de idioma no traduzca recurre al inglés, así que φ siempre tiene todas
sus etiquetas, incluso con una traducción parcial.

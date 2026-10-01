---
title: Diccionario y tesauro
---

# Diccionario y tesauro

φ puede buscar una palabra por ti, para saber qué significa o para encontrar una
mejor, sin salir de la página ni conectarse a internet. Funciona como el
diccionario de un lector electrónico: instalas *paquetes* de diccionario, y cada
búsqueda ocurre en tu ordenador.

<img src="/img/app/dictionary-light.png" alt="El diccionario, abierto junto al documento" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/dictionary-dark.png" alt="El diccionario, abierto junto al documento" width="1600" height="1000" loading="lazy" decoding="async" />

## Buscar una palabra {#looking-up-a-word}

El diccionario se abre como una pestaña **Diccionario** en el
[Panel de información](./finding-your-way.md), junto a Esquema, Enlaces, Notas e
Historial. Solo se une al panel mientras lo usas, y solo cuando hay un documento
abierto: un tablero, una lista o la papelera no tienen palabras delante que
buscar.

Hay varias formas de llegar:

- **Desde una selección.** Selecciona una palabra en el editor. En la pequeña
  barra de herramientas que aparece, haz clic en **›** (**Más herramientas**) y
  luego en **Buscar palabra** (el icono del libro).
- **Desde el teclado.** Pulsa `⌘⇧D`, o elige **Ver → Diccionario**. Es práctico
  cuando quieres comprobar una palabra *antes* de escribirla. Pulsa `⌘⇧D` de
  nuevo y el panel vuelve a su Esquema.
- **Desde el documento.** Abre el menú ⋮ del documento, arriba a la derecha, y
  elige **Abrir el diccionario**. El mismo comando está en la paleta de comandos
  (`⌘P`).
- **Desde el cuadro de búsqueda.** Con la pestaña Diccionario abierta, escribe
  cualquier palabra en **Buscar una palabra…** y pulsa Enter.

Los resultados muestran la definición y, donde el diccionario los proporciona,
sinónimos. Cada resultado lleva la etiqueta del paquete del que procede. **Haz
clic en cualquier referencia cruzada o sinónimo** de una definición para buscar
esa palabra a su vez; te quedas dentro del panel.

### Palabras flexionadas {#inflected-words}

No tienes que escribir la forma exacta del diccionario. Busca *running*,
*changes* o *cities* y φ encontrará *run*, *change* y *city*. Muchos
diccionarios también llevan su propia lista de formas alternativas, que φ usa
automáticamente, así que con un diccionario de español *corriendo* se resuelve
en *correr*.

## Instalar un diccionario {#installing-a-dictionary}

φ no viene con ningún diccionario, así que la primera vez que abres la pestaña
dice **No hay diccionarios instalados.** Añadir uno lleva un minuto. φ lee el
formato **StarDict**, muy extendido:

1. Descarga un paquete de diccionario. Buenas fuentes gratuitas son
   [freedict.org](https://freedict.org) y [wikdict.com](https://www.wikdict.com).
   Para definiciones en inglés con sinónimos, un paquete StarDict de **WordNet**
   funciona bien.
2. Descomprímelo. Obtendrás una carpeta con archivos como `.ifo`, `.idx` y
   `.dict` (a veces comprimidos como `.idx.gz` o `.dict.dz`; ambos sirven).
3. En φ, abre **Ajustes** → **Idioma** → **Diccionario y tesauro**, haz clic en
   **Instalar paquete de diccionario…** y selecciona la carpeta.

El paquete aparece en la lista de inmediato y está listo para usarse. Instala
tantos como quieras: una búsqueda consulta todos.

### Idiomas {#languages}

Como los paquetes son simplemente archivos que eliges, φ no se limita al inglés.
Instala un diccionario de español o de francés para buscar palabras en ese
idioma, o un paquete bilingüe (inglés→español, por ejemplo) para traducir
mientras escribes.

## Gestionar paquetes {#managing-packs}

**Ajustes → Idioma → Diccionario y tesauro** enumera cada paquete instalado con
el número de palabras que contiene. Para quitar uno, haz clic en el icono de la
papelera a su lado y confirma **¿Quitar diccionario?**.

## Privacidad {#privacy}

Todo aquí es local. Los diccionarios instalados se guardan en la carpeta de
datos de la aplicación de φ, y ninguna búsqueda toca nunca la red.

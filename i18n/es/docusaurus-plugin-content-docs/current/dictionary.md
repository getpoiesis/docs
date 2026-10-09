---
title: Diccionario y tesauro
description: Consulta qué significa una palabra, o busca otra mejor, sin salir de la página ni conectarte a internet.
---

# Diccionario y tesauro

φ Poiesis te muestra qué significa una palabra, o qué otras palabras tienen un
significado parecido, al lado de la página que estás escribiendo. Primero
tienes que instalar uno o varios paquetes de diccionario. A partir de ahí,
todas las consultas se hacen en tu ordenador.

<img src="/img/app/dictionary-light.png" alt="Una palabra seleccionada en un capítulo, con sus definiciones y sinónimos en la pestaña Diccionario del panel de Información" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/dictionary-dark.png" alt="Una palabra seleccionada en un capítulo, con sus definiciones y sinónimos en la pestaña Diccionario del panel de Información" width="1600" height="1000" loading="lazy" decoding="async" />

## Buscar una palabra {#look-up-a-word}

Para buscar una palabra de tu texto:

1. Selecciona la palabra en la página.
2. En la barra de herramientas que aparece encima, haz clic en **Más
   herramientas** (›) y luego en **Buscar palabra**.
3. Lee la definición en la pestaña **Diccionario** del panel de Información,
   el panel que está junto a tu página.

Para buscar una palabra que no has escrito:

1. Pulsa `⌘⇧D`. También puedes elegir **Ver → Diccionario**, o **Abrir el
   diccionario** en el menú ⋮ del documento o en la paleta de comandos.
2. Escribe la palabra en **Buscar una palabra…** y pulsa `Intro`.
3. Pulsa `⌘⇧D` otra vez para que el panel vuelva a su pestaña **Esquema**.

Cada resultado muestra la definición y el nombre del paquete del que
procede. Si el paquete incluye sinónimos, también aparecen. Haz clic en un
sinónimo o en una referencia cruzada para buscar esa palabra.

No hace falta que escribas la palabra tal como figura en el diccionario. Con
*running*, *ledgers* y *cities* se encuentran *run*, *ledger* y *city*.
Además, muchos paquetes traen su propia lista de formas de cada palabra, así
que un diccionario de español encuentra *correr* a partir de *corriendo*.

La pestaña **Diccionario** solo está en el panel de Información mientras la
usas, y solo cuando hay un documento abierto.

## Instalar un diccionario {#install-a-dictionary}

Poiesis no trae ningún diccionario. La primera vez que abres la pestaña, dice **No
hay diccionarios instalados.** Poiesis lee paquetes de diccionario en **StarDict**,
un formato muy extendido. Para instalar uno:

1. Descarga un paquete. Dos buenas fuentes gratuitas son
   [freedict.org](https://freedict.org) y
   [wikdict.com](https://www.wikdict.com). Para definiciones en inglés con
   sinónimos, un paquete StarDict de **WordNet** funciona bien.
2. Descomprímelo. Obtendrás una carpeta con archivos que terminan en `.ifo`,
   `.idx` y `.dict`. A veces terminan en `.idx.gz` o `.dict.dz`, que también
   sirven.
3. Abre **Ajustes → Idioma → Diccionario y tesauro**.
4. Haz clic en **Instalar paquete de diccionario…** y elige la carpeta.

El paquete se puede usar de inmediato. Instala tantos como quieras: cada
consulta busca en todos. Un paquete puede estar en cualquier idioma, y con
uno bilingüe puedes traducir mientras escribes.

## Gestionar tus paquetes {#manage-your-packs}

En **Ajustes → Idioma → Diccionario y tesauro** aparece la lista de paquetes,
cada uno con el número de palabras que contiene. Para quitar un paquete, haz
clic en la papelera que tiene al lado y confirma en **¿Quitar diccionario?**

:::note Nada sale de tu ordenador
Poiesis guarda los paquetes instalados en su propia carpeta de aplicación. Ninguna
consulta se conecta a internet.
:::

## Ver también {#see-also}

- [Ortografía](./spelling)
- [El editor](./the-editor): la barra de herramientas de selección.
- [Temas e idiomas](./themes-and-languages)

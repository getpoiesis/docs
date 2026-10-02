---
title: Diccionario y tesauro
description: Busca una palabra, para saber qué significa o encontrar una mejor, sin salir de la página ni conectarte a internet.
---

# Diccionario y tesauro

φ puede buscar una palabra, para saber qué significa o para encontrar una
mejor, junto a la página que estás escribiendo. Funciona como el diccionario de
un lector electrónico: instalas paquetes de diccionario, y cada búsqueda ocurre
en tu ordenador.

<img src="/img/app/dictionary-light.png" alt="Una palabra seleccionada en un capítulo, y sus definiciones y sinónimos en la pestaña Diccionario del panel de Información" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/dictionary-dark.png" alt="Una palabra seleccionada en un capítulo, y sus definiciones y sinónimos en la pestaña Diccionario del panel de Información" width="1600" height="1000" loading="lazy" decoding="async" />

## Buscar una palabra {#look-up-a-word}

1. Selecciona la palabra en la página.
2. En la barra de herramientas que aparece encima, haz clic en **Más
   herramientas** (›) y luego en **Buscar palabra**.
3. Lee la definición en la pestaña **Diccionario** del panel de Información.

Para buscar una palabra que aún no has escrito, pulsa `⌘⇧D` (o elige **Ver →
Diccionario**, o **Abrir el diccionario** en el menú ⋮ del documento o en la
paleta de comandos), escríbela en **Buscar una palabra…** y pulsa `Enter`.
Pulsa `⌘⇧D` otra vez para devolver el panel a su **Esquema**.

Cada resultado muestra la definición y, donde el paquete los tiene, sinónimos,
con la etiqueta del paquete del que procede. Haz clic en cualquier sinónimo o
referencia cruzada para buscar esa palabra a su vez.

No necesitas la forma exacta del diccionario: *running*, *ledgers* y *cities*
encuentran *run*, *ledger* y *city*. Muchos paquetes llevan también su propia
lista de formas, así que un diccionario de español encuentra *correr* a partir
de *corriendo*.

La pestaña **Diccionario** solo se une al panel de Información mientras la
usas, y solo cuando hay un documento abierto.

## Instalar un diccionario {#install-a-dictionary}

φ no viene con ningún diccionario, así que la primera vez que abres la pestaña
dice **No hay diccionarios instalados.** Lee el formato **StarDict**, muy
extendido:

1. Descarga un paquete. Buenas fuentes gratuitas son
   [freedict.org](https://freedict.org) y
   [wikdict.com](https://www.wikdict.com). Para definiciones en inglés con
   sinónimos, un paquete StarDict de **WordNet** funciona bien.
2. Descomprímelo. Tendrás una carpeta con archivos que terminan en `.ifo`,
   `.idx` y `.dict` (a veces `.idx.gz` o `.dict.dz`; ambos sirven).
3. Abre **Ajustes → Idioma → Diccionario y tesauro**, haz clic en **Instalar
   paquete de diccionario…** y elige la carpeta.

El paquete está listo al instante. Instala tantos como quieras: una búsqueda
los consulta todos. Como los paquetes son archivos que tú eliges, pueden estar
en cualquier idioma, o ser bilingües, para traducir mientras escribes.

## Gestionar tus paquetes {#manage-your-packs}

**Ajustes → Idioma → Diccionario y tesauro** enumera cada paquete con el número
de palabras que contiene. Para quitar uno, haz clic en la papelera que tiene al
lado y confirma **¿Quitar diccionario?**

:::note Nada sale de tu ordenador
Los paquetes instalados se guardan en la carpeta de la aplicación de φ, y
ninguna búsqueda se conecta nunca a internet.
:::

## Ver también {#see-also}

- [Ortografía](./spelling)
- [El editor](./the-editor): la barra de herramientas de selección.
- [Temas e idiomas](./themes-and-languages)

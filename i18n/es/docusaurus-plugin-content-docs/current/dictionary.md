---
title: Diccionario y tesauro
sidebar_position: 12
---

# Diccionario y tesauro

φ incluye un diccionario sin conexión para que puedas comprobar el significado de
una palabra — o encontrar una mejor — sin salir de la página ni conectarte. Funciona
como el diccionario de un lector electrónico: instalas *paquetes* de diccionario, y
las búsquedas ocurren por completo en tu equipo.

## Buscar una palabra

Hay tres formas de buscar algo:

- **Desde una selección** — selecciona una palabra en el editor y haz clic en el
  icono del **libro** en la barra flotante.
- **Desde el comando** — pulsa `⌘⇧D`, o abre la paleta de comandos (`⌘P`) y elige
  **Abrir el diccionario**. Esto abre el panel del Diccionario sin importar en qué
  pestaña del panel derecho estuvieras — práctico cuando quieres comprobar una
  palabra *antes* de escribirla.
- **Desde el cuadro de búsqueda** — con el panel del Diccionario abierto, escribe
  cualquier palabra y pulsa Enter.

Los resultados muestran la definición y, donde el diccionario los proporciona,
sinónimos. **Haz clic en cualquier referencia cruzada o sinónimo** de una definición
para buscar esa palabra a su vez — la navegación se mantiene dentro del panel.

### Palabras flexionadas

No tienes que escribir la forma exacta del diccionario. Busca *corriendo*, *cambios*
o *ciudades* y φ encontrará *correr*, *cambio* y *ciudad*. Muchos diccionarios
también llevan su propia lista de formas alternativas, que φ usa automáticamente —
así que, para un diccionario en español, *corriendo* se resuelve en *correr*.

## Instalar un diccionario

φ lee el formato **StarDict**, ampliamente usado. Para añadir uno:

1. Descarga un paquete de diccionario — buenas fuentes gratuitas son
   [freedict.org](https://freedict.org) y [wikdict.com](https://www.wikdict.com).
   Para definiciones en inglés con sinónimos, un paquete StarDict de **WordNet**
   funciona bien.
2. Descomprímelo. Obtendrás una carpeta con archivos como `.ifo`, `.idx` y
   `.dict` (a veces comprimidos como `.idx.gz` o `.dict.dz` — ambos sirven).
3. En φ, abre **Ajustes** (`⌘,`) → **Editor** → **Diccionario y tesauro** →
   **Instalar paquete de diccionario…**, y selecciona la carpeta.

El paquete aparece en la lista de inmediato y está listo para usarse. Puedes instalar
tantos como quieras — las búsquedas recorren todos ellos, y los resultados se
etiquetan con su fuente.

### Idiomas

Como los paquetes no son más que archivos que tú eliges, φ no se limita al inglés.
Instala un diccionario monolingüe en español o francés para buscar palabras en ese
idioma, o un paquete bilingüe (por ejemplo inglés→español) para traducir mientras
escribes.

## Gestionar paquetes

En **Ajustes → Editor → Diccionario y tesauro** verás cada paquete instalado con su
recuento de palabras. Quita uno con el icono de la papelera. Un diccionario que vino
con φ está marcado como **Integrado** y se mantiene en su sitio.

## Privacidad

Todo aquí es local. Los diccionarios instalados se guardan en la carpeta de datos de
la aplicación de φ, y ninguna búsqueda toca jamás la red.

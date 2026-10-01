---
title: Buscar y reemplazar
---

# Buscar y reemplazar

φ responde a dos preguntas distintas. `⌘F` busca en la página que tienes
delante; `⌘⇧F` busca en todos los documentos de la bóveda. Ambos pueden
reemplazar lo que encuentran.

<img src="/img/app/search-light.png" alt="La página de búsqueda: coincidencias en toda la bóveda, agrupadas por documento" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="La página de búsqueda: coincidencias en toda la bóveda, agrupadas por documento" width="1600" height="1000" loading="lazy" decoding="async" />

## Buscar en este documento {#find-in-this-document}

Pulsa `⌘F` (**Edición → Buscar en el documento**). Se abre una barra de búsqueda
en la parte superior de la página, encima de tu texto, que toma como consulta
las palabras que tuvieras seleccionadas. Mientras escribes, φ resalta cada
coincidencia y se mueve a la primera.

- El contador te dice dónde estás: **3 de 12**, o **Sin resultados**.
- `Enter` va a la siguiente coincidencia y `⇧Enter` a la anterior; los botones
  de flecha hacen lo mismo.
- **Distinguir mayúsculas** (el botón Aa) hace que las mayúsculas cuenten.
- **Expresión regular** te permite buscar con un patrón.
- `Esc` cierra la barra y borra los resaltados.

Si no hay ningún documento abierto, `⌘F` abre en su lugar la página de búsqueda
(más abajo).

### Reemplazar en este documento {#replace-in-this-document}

Haz clic en **Reemplazar** en la barra, o pulsa `⌘⌥F` (**Edición → Buscar y
reemplazar en el documento**) para abrir la barra con el reemplazo ya visible.
Escribe el texto de reemplazo y luego:

- **Reemplazar** cambia la coincidencia actual y pasa a la siguiente.
- **Todo en el documento** cambia todas las coincidencias de este documento a la
  vez.

Un reemplazo aquí es una edición normal, así que `⌘Z` lo deshace.

## Buscar en todos los documentos {#search-every-document}

Pulsa `⌘⇧F` (**Edición → Buscar en todos los documentos…**) para abrir la página
**Buscar**. Se sitúa en la columna de lista, así que un resultado se abre en la
página de al lado y tu búsqueda se queda donde está para el siguiente.

Escribe al menos dos caracteres en **Buscar en todos los documentos…**. φ lee
todos los documentos de la bóveda, páginas matutinas incluidas, y enumera los
que coinciden, empezando por los que más coincidencias tienen. Bajo cada
documento ves sus coincidencias en contexto; un documento encontrado por su
nombre se marca **en el nombre**. **Distinguir mayúsculas** y **Expresión
regular** funcionan igual que en la barra de búsqueda.

Haz clic en un documento, o en cualquiera de sus coincidencias, para abrirlo con
el cursor justo en esa coincidencia.

### Reemplazar en todas partes {#replace-everywhere}

Escribe el texto de reemplazo en el segundo campo y haz clic en **Reemplazar en
todos los documentos…**. Como esto cambia muchos archivos a la vez, φ pregunta
primero: te dice cuántas apariciones reemplazará en cuántos documentos, y espera
a que hagas clic en **Reemplazar en todo**.

Si el versionado está activado para la bóveda, φ guarda una versión de toda la
bóveda antes de cambiar nada, con el nombre de lo que reemplazaste, para que
puedas volver a como estaban las cosas. Consulta
[Versiones y copias de seguridad](versions-and-backup.md). Si el versionado está
desactivado, φ te lo dice antes de que confirmes, porque el cambio no se puede
deshacer.

## Otras formas de encontrar cosas {#other-ways-to-find-things}

- **El campo de búsqueda de la lista.** Cada lista tiene un campo **Buscar…**
  arriba que la filtra por título, texto inicial y etiquetas.
- **`⌘K`** encuentra un documento, proyecto o personaje por su nombre y lo abre.
  Consulta [Orientarte](finding-your-way.md).

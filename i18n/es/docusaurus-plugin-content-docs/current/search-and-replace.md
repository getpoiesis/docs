---
title: Buscar y reemplazar
description: Encuentra palabras en la página en la que estás o en todos los documentos, y cámbialas de una vez.
---

# Buscar y reemplazar

φ responde a dos preguntas. `⌘F` busca en la página que tienes delante, y
`⇧⌘F` busca en todos los documentos de la bóveda. Ambos pueden reemplazar lo
que encuentran, así que renombrar a un personaje o corregir una palabra en
todas partes es un solo paso.

<img src="/img/app/search-light.png" alt="La página Buscar en la columna de lista: un campo de búsqueda y otro de reemplazo, y debajo las coincidencias agrupadas por documento, con las palabras en contexto" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="La página Buscar en la columna de lista: un campo de búsqueda y otro de reemplazo, y debajo las coincidencias agrupadas por documento, con las palabras en contexto" width="1600" height="1000" loading="lazy" decoding="async" />

## Cambiar un nombre en todas partes {#change-a-name-everywhere}

1. Pulsa `⇧⌘F` para abrir **Buscar**.
2. Escribe el nombre antiguo en **Buscar en todos los documentos…**.
3. Revisa las coincidencias, agrupadas por documento.
4. Escribe el nombre nuevo en **Reemplazar** y pulsa **Reemplazar en todos
   los documentos…**.
5. φ te dice cuántas apariciones cambiará en cuántos documentos. Pulsa
   **Reemplazar en todo** para seguir adelante.

Si el versionado está activado, φ guarda antes una versión de toda la bóveda,
con el nombre de lo que reemplazaste, para que puedas volver atrás. Si está
desactivado, φ te lo dice antes de que confirmes, porque el cambio no se puede
deshacer. Consulta [Versiones y copias de seguridad](./versions-and-backup).

## Buscar en este documento {#find-in-this-document}

Pulsa `⌘F` (**Edición → Buscar en el documento**). Se abre una barra encima de
tu texto, que empieza con las palabras que tuvieras seleccionadas. φ resalta
cada coincidencia mientras escribes.

- El contador te dice dónde estás: **3 de 12**, o **Sin resultados**.
- Return va a la siguiente coincidencia y `⇧`Return a la anterior; los botones
  de flecha hacen lo mismo.
- **Distinguir mayúsculas** (el botón Aa) hace que las mayúsculas cuenten.
- **Expresión regular** te permite buscar con un patrón.
- `Esc` cierra la barra y borra los resaltados.

Si no hay ningún documento abierto, `⌘F` abre en su lugar la página Buscar.

### Reemplazar en este documento {#replace-in-this-document}

Pulsa **Reemplazar** en la barra, o `⌥⌘F` (**Edición → Buscar y reemplazar en
el documento**) para abrir la barra con el reemplazo ya visible. Escribe el
texto de reemplazo y luego:

- **Reemplazar** cambia la coincidencia actual y pasa a la siguiente.
- **Todo en el documento** cambia todas las coincidencias de aquí a la vez.

Un reemplazo aquí es una edición normal, así que `⌘Z` lo deshace.

## Buscar en todos los documentos {#search-every-document}

`⇧⌘F` (**Edición → Buscar en todos los documentos…**) abre **Buscar** en la
columna de lista. Un resultado se abre en la página de al lado, y la búsqueda
se queda donde está para el siguiente.

Escribe al menos dos caracteres. φ lee todos los documentos de la bóveda,
páginas matinales incluidas, y enumera los que coinciden, empezando por los
que más coincidencias tienen, cada uno con sus coincidencias en contexto. Un
documento encontrado por su título se marca **en el nombre**. **Distinguir
mayúsculas** y **Expresión regular** funcionan igual que en la barra.

Haz clic en un documento, o en una de sus coincidencias, para abrirlo con esa
misma coincidencia seleccionada.

## Otras formas de encontrar cosas {#other-ways-to-find-things}

| Para encontrar | Usa |
| --- | --- |
| Un documento, proyecto o personaje por su nombre | `⌘K`. Consulta [Cómo moverte por φ](./finding-your-way). |
| Algo en la lista que estás viendo | El campo de búsqueda bajo el título de la lista. Filtra por título, texto inicial y etiquetas. |
| Un comando | `⌘P`. |

## Ver también {#see-also}

- [Cómo moverte por φ](./finding-your-way)
- [Organizar tu trabajo](./organizing)
- [Versiones y copias de seguridad](./versions-and-backup)

---
title: Buscar y reemplazar
description: Encuentra palabras en la página que tienes abierta o en todos tus documentos, y cámbialas de una sola vez.
---

# Buscar y reemplazar

φ tiene dos búsquedas. `⌘F` busca en el documento que tienes abierto. `⇧⌘F`
busca en todos los documentos de la [bóveda](./vaults), la carpeta donde se
guarda lo que escribes. Las dos pueden reemplazar lo que encuentran, así que
puedes cambiarle el nombre a un personaje o corregir una palabra en todas
partes a la vez.

<img src="/img/app/search-light.png" alt="La página Buscar en la columna de la lista: un campo de búsqueda y otro de reemplazo, y debajo las coincidencias agrupadas por documento, cada una con las palabras que la rodean" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="La página Buscar en la columna de la lista: un campo de búsqueda y otro de reemplazo, y debajo las coincidencias agrupadas por documento, cada una con las palabras que la rodean" width="1600" height="1000" loading="lazy" decoding="async" />

## Cambiar un nombre en todas partes {#change-a-name-everywhere}

1. Pulsa `⇧⌘F` para abrir **Buscar**.
2. Escribe el nombre antiguo en **Buscar en todos los documentos…**.
3. Revisa las coincidencias. Están agrupadas por documento.
4. Escribe el nombre nuevo en **Reemplazar**.
5. Pulsa **Reemplazar en todos los documentos…**. φ te dice cuántas
   coincidencias va a cambiar y en cuántos documentos.
6. Pulsa **Reemplazar en todo** para confirmar.

Si el historial de versiones está activado, φ guarda antes una versión de toda la bóveda
y le pone el nombre de lo que has reemplazado. Más adelante puedes volver a
esa versión. Si está desactivado, el cambio no se puede
deshacer, y φ te lo advierte antes de que confirmes. Consulta
[Versiones y copias de seguridad](./versions-and-backup).

## Buscar en este documento {#find-in-this-document}

1. Pulsa `⌘F` (**Edición → Buscar en el documento**). Se abre una barra
   encima del texto. Si tenías palabras seleccionadas, ya aparecen en la
   barra.
2. Escribe lo que quieres encontrar. φ resalta todas las coincidencias a
   medida que escribes.

<img src="/img/app/find-bar-light.png" alt="La barra de búsqueda sobre un capítulo, con las coincidencias resaltadas, el contador y el campo de reemplazo" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/find-bar-dark.png" alt="La barra de búsqueda sobre un capítulo, con las coincidencias resaltadas, el contador y el campo de reemplazo" width="1600" height="1000" loading="lazy" decoding="async" />

En la barra:

- El contador indica en qué coincidencia estás, por ejemplo **3 de 12**, o
  muestra **Sin resultados**.
- `Intro` pasa a la coincidencia siguiente, y `⇧Intro`, a la anterior. Los
  botones con flechas hacen lo mismo.
- **Distinguir mayúsculas** (el botón Aa) encuentra solo las palabras que
  tienen las mismas mayúsculas y minúsculas que has escrito.
- **Expresión regular** te permite buscar con un patrón.
- `Esc` cierra la barra y quita los resaltados.

Si no hay ningún documento abierto, `⌘F` abre la página Buscar.

### Reemplazar en este documento {#replace-in-this-document}

1. Pulsa **Reemplazar** en la barra. O pulsa `⌥⌘F` (**Edición → Buscar y
   reemplazar en el documento**), que abre la barra con el campo de reemplazo
   a la vista.
2. Escribe el texto nuevo.
3. Pulsa **Reemplazar** para cambiar la coincidencia actual y pasar a la
   siguiente. O pulsa **Todo en el documento** para cambiar todas las
   coincidencias de este documento.

Aquí, `⌘Z` deshace un reemplazo, igual que cualquier otro cambio.

## Buscar en todos los documentos {#search-every-document}

1. Pulsa `⇧⌘F` (**Edición → Buscar en todos los documentos…**). **Buscar** se
   abre en la columna de la lista.
2. Escribe al menos dos caracteres.
3. Haz clic en un documento o en una de sus coincidencias. El documento se
   abre al lado de la lista, con esa coincidencia seleccionada.

La búsqueda sigue abierta en la lista, así que puedes abrir el resultado
siguiente.

φ busca en todos los documentos de la bóveda, incluidas las páginas
matinales. Muestra los documentos que coinciden, empezando por el que tiene
más coincidencias. Debajo de cada documento ves sus coincidencias, con las
palabras que las rodean. Si la coincidencia está en el título de un
documento, este lleva la marca **en el nombre**. **Distinguir mayúsculas** y
**Expresión regular** funcionan igual que en la barra.

## Otras formas de encontrar cosas {#other-ways-to-find-things}

| Para encontrar | Usa |
| --- | --- |
| Un documento, un proyecto o un personaje por su nombre | `⌘K`. Consulta [Un recorrido por la ventana](./finding-your-way). |
| Algo en la lista que tienes delante | El campo de búsqueda que está bajo el título de la lista. Filtra por título, por las primeras líneas del texto y por etiquetas. |
| Un comando | `⌘P`. |

## Ver también {#see-also}

- [Un recorrido por la ventana](./finding-your-way)
- [Organizar](./organizing)
- [Versiones y copias de seguridad](./versions-and-backup)

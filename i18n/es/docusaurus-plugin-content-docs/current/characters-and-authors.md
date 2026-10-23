---
title: Personajes y autores
description: Una ficha para cada persona de tu obra, a mano en cualquier documento con @, y perfiles de autor que firman tus libros y manuscritos.
---

# Personajes y autores

Los **personajes** son las personas de tu obra. Cada uno tiene su ficha, y
puedes mencionarlos en cualquier documento escribiendo `@`. Los **autores**
son los nombres con los que publicas. De un perfil de autor salen la firma
del libro y su página «Sobre el autor». También salen de él los datos de
contacto del manuscrito que envías.

<img src="/img/app/characters-light.png" alt="Los personajes de un proyecto, con uno compartido señalado, y la ficha de un personaje: nombre, nombre de usuario, alias, el proyecto al que pertenece, rol y rasgos, notas, y los documentos, la investigación y las notas vinculados a él" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/characters-dark.png" alt="Los personajes de un proyecto, con uno compartido señalado, y la ficha de un personaje: nombre, nombre de usuario, alias, el proyecto al que pertenece, rol y rasgos, notas, y los documentos, la investigación y las notas vinculados a él" width="1600" height="1000" loading="lazy" decoding="async" />

Los dos están en **Escribir**, bajo **Mundo** en la barra lateral. El grupo
**Mundo** se queda ahí tanto si hay un proyecto abierto como si no. Desde
cualquier modo, `⌘K` encuentra un personaje por su nombre y abre cualquiera
de las dos listas. `⌘G` y luego `P` abre Personajes.

Los lugares, el trasfondo y la cronología de tu historia están en
[el mundo](./world.md).

## Añadir un personaje {#add-a-character}

1. En **Escribir**, haz clic en **Personajes**, bajo **Mundo**.
2. Haz clic en **+** (**Nuevo personaje**).
3. Rellena la ficha del personaje. φ Poiesis guarda cada campo cuando sales de él.
4. Para mencionar al personaje, escribe `@` y el principio de su nombre en
   cualquier documento.

## La ficha de un personaje {#a-characters-sheet}

| Campo | Para qué sirve |
| --- | --- |
| **Nombre** | Su nombre completo. |
| **Nombre de usuario** | Su `@usuario`. |
| **Alias** | Otros nombres, separados por comas. Todos funcionan con `@` y todos llevan al mismo personaje. |
| **Pertenece a** | **Todos los proyectos** (compartido), o los proyectos en los que aparece el personaje: un libro, o varios si es una serie. |
| **Persona real** | Márcalo si es alguien real. **Rol y rasgos** pasa entonces a llamarse **Detalles**. |
| **Rol y rasgos** | Unas líneas sobre quién es. |
| **Notas** | Su pasado, su aspecto, cómo cambia a lo largo de la historia o cualquier otra cosa. |
| **Enlazado desde** | Todos los documentos que lo mencionan, con el número de menciones. Haz clic en uno para abrirlo. |
| **Investigación** y **Notas** | Páginas de investigación y notas sobre el personaje: **Nueva página de investigación**, **Vincular investigación…**, **Nueva nota sobre esto** y **Vincular una nota…** (consulta [Investigación](./research.md)). |

**Eliminar**, al final de la ficha, envía el personaje a la papelera.

El campo de búsqueda que hay encima de la lista de personajes busca en los
nombres, los nombres de usuario y los alias.

## Mantener separado el mundo de cada libro {#keep-each-books-world-apart}

Un personaje pertenece al [proyecto](./collections.md) en el que lo creas. Para
ver los personajes de un proyecto, ábrelo y haz clic en la pestaña
**Personajes**, bajo su nombre en la lista (`⌃2`; **Alt+2** en Windows y
Linux). Primero aparecen los personajes propios del proyecto. Después vienen
los compartidos, con la marca **Compartido**.

Un personaje nuevo entra en ese proyecto cuando lo creas en esta lista, o con
`@` mientras escribes uno de los capítulos del proyecto.

- **Una serie:** en la ficha del personaje, marca varios proyectos en
  **Pertenece a**. El personaje estará en todos ellos.
- **Toda tu obra:** elige **Todos los proyectos** para alguien que aparece en
  todas partes, como una persona real o un narrador al que recurres más de
  una vez.
- **Toda la bóveda:** **Mundo → Personajes**, en la barra lateral, muestra
  los personajes de la [bóveda](./vaults.md), la carpeta donde se guarda lo
  que escribes. En la sección siguiente se explica cómo elegir cuáles.
- **Mover un proyecto:** cuando mueves un proyecto a otra bóveda, sus
  personajes propios se van con él. Un personaje que comparte con otros
  proyectos se queda.

## Elegir qué parte de la bóveda muestra una lista {#choose-which-part-of-the-vault-a-list-shows}

Las listas **Personajes**, **Autores** e **Investigación** de la barra
lateral muestran una parte de la bóveda cada vez. Un menú en la cabecera de la
lista elige cuál:

| Opción | Muestra |
| --- | --- |
| **Este proyecto** | El proyecto en el que estabas cuando abriste la lista. Su nombre aparece al lado. |
| **Sin proyecto** | Lo que no pertenece a ningún proyecto. |
| **Todo** | Todo lo que hay en la bóveda. |
| El nombre de un proyecto | Ese proyecto. |

Si abres la lista desde un proyecto, empieza en ese proyecto. Si la abres
desde cualquier otro sitio, empieza en **Sin proyecto**. φ recuerda lo que
elegiste para cada lista en cada bóveda.

Un personaje o una página de investigación nuevos que crees desde una lista
limitada a un proyecto pertenecen a ese proyecto.

## Mencionar a un personaje {#mention-a-character}

1. En un documento, escribe `@` y empieza a escribir un nombre. Poiesis te sugiere
   los personajes del proyecto en el que escribes y los compartidos.
2. Elige una sugerencia. Poiesis inserta la mención en el texto.

<img src="/img/app/mention-suggestions-light.png" alt="Un capítulo con una arroba y una letra escritas, y la lista de personajes coincidentes abierta" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/mention-suggestions-dark.png" alt="Un capítulo con una arroba y una letra escritas, y la lista de personajes coincidentes abierta" width="1600" height="1000" loading="lazy" decoding="async" />

Cada personaje aparece en las sugerencias una vez con su nombre completo y
otra vez por cada alias. No hace falta que escribas las tildes: con «jose»
se encuentra a José.

- Si mencionas a un personaje por su nombre completo y más adelante le
  cambias el nombre, la mención cambia también.
- Haz clic en una mención para abrir la ficha del personaje.
- Si escribes un nombre que no tiene ningún personaje, la última sugerencia
  es **Nuevo personaje**. Elígela, y Poiesis crea el personaje y añade la mención.

Al exportar, una mención se convierte en texto normal: el nombre o el alias
que elegiste, sin la `@`.

En las páginas matinales no hay sugerencias con `@`.

## Crear un perfil de autor {#make-an-author-profile}

<img src="/img/app/authors-light.png" alt="Un perfil de autor: foto, nombre, seudónimo, correo, sitio web, biografía, biografía breve, crédito de la foto, y la dirección postal y el teléfono para los envíos" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/authors-dark.png" alt="Un perfil de autor: foto, nombre, seudónimo, correo, sitio web, biografía, biografía breve, crédito de la foto, y la dirección postal y el teléfono para los envíos" width="1600" height="1000" loading="lazy" decoding="async" />

1. En **Escribir**, haz clic en **Autores**, bajo **Mundo**.
2. Haz clic en **+** (**Nuevo autor**).
3. Rellena el perfil. Poiesis guarda cada campo cuando sales de él.
4. Añade el perfil a un proyecto. En la página del proyecto, elígelo en
   **Ajustes** → **Perfil de autor**. O añádelo en **Datos del libro** →
   **Personas** (consulta [Datos del libro](./book-details.md)).

## Qué firma cada parte del perfil {#what-each-part-of-the-profile-signs}

| Campo | Dónde aparece |
| --- | --- |
| **Nombre** | Tu nombre legal. Es la primera línea del bloque de contacto, en la primera página de un manuscrito. Su apellido va en la cabecera de las páginas del manuscrito. |
| **Seudónimo / firma** | El nombre que lleva el libro: en la cubierta, en la portada, en la firma. Déjalo vacío si coincide con tu nombre. |
| **Foto** | Haz clic en el cuadrado que hay junto al nombre para añadir una. Aparece con «Sobre el autor». **Quitar foto** la quita. |
| **Crédito de la foto** | Se imprime debajo de la foto. |
| **Biografía** | «Sobre el autor», al final del libro, que sale del perfil del primer autor. |
| **Biografía breve** | Una o dos líneas para la contracubierta. Si está vacía, Poiesis usa el primer párrafo de **Biografía**. |
| **Correo** y **Sitio web** | Tu correo va también en el bloque de contacto de un manuscrito. |
| **Dirección postal** y **Teléfono** | Bajo **Para envíos**: el resto del bloque de contacto de la primera página de un manuscrito. |
| **Agente** | Si tienes agente: su nombre, su agencia, su dirección, su teléfono y su correo, uno por línea. Sustituyen a tus propios datos en la primera página del manuscrito. |
| **Otros títulos (página «Otros títulos»)** | Tus otros libros, cada uno con su año si quieres. Con ellos se compone la página «Otros títulos», al final de un libro. |
| **Firmado en** | Los proyectos que usan este perfil. Haz clic en uno para abrirlo. |

Cuando preparas un manuscrito para un agente, la exportación te dice qué le
falta a la primera página. Te ofrece **Abrir el perfil de autor** (consulta
[Enviar a un agente o editorial](./send-to-an-agent.md)).

**Eliminar** envía el perfil a la papelera.

## Ver también {#see-also}

- [Datos del libro](./book-details.md): quién ha escrito, traducido o editado el
  libro.
- [Enviar a un agente o editorial](./send-to-an-agent.md): el manuscrito y su
  primera página.
- [Investigación](./research.md): páginas vinculadas a un personaje.
- [El mundo](./world.md): lugares, trasfondo y la cronología.
- [Enlaces y el grafo](./links-and-graph.md)

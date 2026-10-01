---
title: Diario y páginas matutinas
---

# Diario y páginas matutinas

φ trae integrados dos hábitos diarios. El **diario** guarda una entrada fechada
para cada día, para conservarla y volver a ella. Las **páginas matutinas** son la
práctica privada de escribir y soltar. Ambos alimentan una **racha de
escritura**, para que presentarte cada día sea algo que puedas ver.

<img src="/img/app/journal-light.png" alt="El diario: un día tras otro, el más reciente primero" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/journal-dark.png" alt="El diario: un día tras otro, el más reciente primero" width="1600" height="1000" loading="lazy" decoding="async" />

## El modo Diario {#the-journal-mode}

**Diario** es el tercer modo del selector de la barra lateral (`⌘3`). Sus
lugares:

- **Inicio**: la entrada de hoy, esta semana y los días anteriores, las páginas
  matutinas de hoy, el mes y lo que escribiste este mismo día en otros años.
- **Hoy**: abre la entrada de hoy.
- **Todas las entradas**: cada día en que has escrito, el más reciente primero.
- **Páginas matutinas**: cada sesión de páginas matutinas.
- **Selladas**: las páginas matutinas que has terminado y sellado.
- **Lugares** → **Calendario**.

Una entrada de diario es un documento atado a un día. Vive en tu bóveda como
cualquier otro —se puede buscar, enlazar y exportar—, pero el diario la agrupa
por fecha, para que una práctica diaria tenga un hogar.

## Escribir hoy {#writing-today}

Cualquiera de estas opciones abre la entrada de hoy, y la crea si aún no existe:

- **Hoy** en la barra lateral.
- **+** en lo alto de **Todas las entradas** (**Escribir hoy**).
- En el Inicio del Diario, **Empieza la entrada de hoy** (o **Continuar la
  entrada** una vez que has empezado).
- `⌘P` → **Nueva entrada de diario**.

:::note
`⌘N` en el Diario crea una nueva **nota**, no una entrada: el diario tiene una
entrada por día.
:::

## Escribir en otro día {#writing-on-another-day}

Puedes escribir hoy o en cualquier día anterior, nunca por adelantado:

- Sin nada abierto en **Todas las entradas**, la página muestra todos los días
  como un solo flujo, con hoy arriba. Haz clic en un día para escribir en él
  ahí mismo, o usa **Escribir en un día…** para elegir una fecha.
- La **franja semanal** en lo alto de la lista: haz clic en un día.
- En el [calendario](calendar.md), selecciona un día y elige **Escribir este
  día**.

Un día que abres y dejas sin escribir se vuelve a quitar: va a la papelera en
lugar de dejar un archivo vacío.

## La página de una entrada {#an-entrys-page}

Una entrada va encabezada por su día de la semana, en dorado, sobre la fecha. A
su lado:

- Una etiqueta para las páginas matutinas de ese día: **Empezar las páginas
  matinales**, **Páginas matinales** o **selladas**.
- **Hoy**, cuando estás en otro día.
- **←** y **→** pasan al día anterior o siguiente en que escribiste.

Bajo la entrada, **Mencionado en**, con un recuento, lista los documentos que
llevan la fecha de ese día o enlazan a la entrada: lo que convierte una fecha en
un lugar.

## Páginas matutinas {#morning-pages}

Las páginas matutinas son una práctica manuscrita, lo primero del día: tres
páginas, escritas con libertad, sin releerlas. φ lo respeta. Las páginas
matutinas son **privadas** —se mantienen fuera de las listas, del grafo y de
`⌘K`— y están pensadas para soltarlas, no para pulirlas.

Por eso la superficie está despejada a propósito: sin menú de barra inclinada,
sin barra de herramientas, sin sugerencias, sin etiquetas, sin estado, sin meta;
solo la fecha y la página.

### Abrir las páginas de hoy {#open-todays-pages}

- **Diario** → **Páginas matutinas**, y luego **+** (**Empezar las páginas
  matutinas de hoy**) o **Escribir las páginas de hoy**.
- La tarjeta **Páginas matutinas** en el Inicio del Diario.
- La etiqueta de páginas matutinas en cualquier entrada.
- `⌘P` → **Páginas matutinas de hoy**.

### Tres páginas {#three-pages}

La meta son **tres páginas**, que φ cuenta como **750 palabras**. Un discreto
pie bajo la página muestra dónde estás
—`{words} / 750 palabras · página {page} de 3`—, con un pequeño anillo y **Marcar como hecho**. El botón espera hasta que
llegues a 750; pasa el puntero por encima para ver cuántas palabras faltan.

### Sellar el día {#sealing-the-day}

**Marcar como hecho** sella las páginas del día. También puedes sellarlas en
cualquier momento desde el **⋮** del documento → **Sellar el día**.

Las páginas matutinas no están pensadas para releerse, así que un día sellado se
abre en una tarjeta discreta en lugar de tu texto: *Tres páginas, selladas.*
Desde ahí, **Leer estas páginas** las muestra en modo de solo lectura, y
**Quitar el sello para editar…** (también en el **⋮**) te deja volver a escribir
en ellas, tras preguntar. Las páginas que abres desde el calendario siempre se
abren en modo de solo lectura.

### La práctica {#the-practice}

Con unas páginas matutinas abiertas, el panel de información (`⇧⌘I`) tiene dos
pestañas, **La práctica** e **Historial**. La práctica muestra las páginas y
palabras de hoy, tu racha y tu racha más larga, los días de este mes y cuántas
páginas has sellado.

La lista de **Páginas matutinas** muestra cada sesión con su día, su página y
sus palabras; su página añade los totales: sesiones, selladas y tus rachas.

### Convertir un documento en páginas matutinas {#turning-a-document-into-morning-pages}

Clic derecho sobre cualquier documento → **Marcar como páginas matinales** lo
convierte en páginas matutinas (y **Desmarcar páginas matinales** lo deshace).

:::tip
`⌘K` deja fuera las páginas matutinas, pero la página de búsqueda completa
(`⇧⌘F`) sí las incluye: consulta [Buscar y reemplazar](search-and-replace.md).
:::

## Rachas de escritura {#writing-streaks}

Una racha es la serie de días seguidos en los que has alcanzado un mínimo diario
de palabras. Escribe un poco cada día y crece.

### Qué cuenta {#what-counts}

- Un día cuenta en cuanto las palabras que **escribiste ese día** llegan al
  mínimo, en cualquier lugar de la bóveda: una entrada de diario, páginas
  matutinas, un capítulo, una nota. Las palabras se acreditan al día en que de
  verdad las escribiste.
- El mínimo es de **50 palabras al día**, salvo que lo subas en **Ajustes**
  (`⌘,`) → **Editor** → **Racha de escritura** → **Mínimo de palabras / día**.
  No puede bajar de 50.
- Hay **un día de gracia**: una racha que terminó *ayer* aún no está rota;
  tienes el resto de hoy para mantenerla.

### Dónde aparece {#where-it-shows}

- La tarjeta **Hoy** en el Inicio de Escribir.
- Una etiqueta en el Inicio del Diario.
- Una etiqueta en la lista del calendario.
- **La práctica**, junto a unas páginas matutinas.

### Cómo se muestra {#how-it-shows}

Elige en **Ajustes** → **Ajustes de escritura** → **Racha**:

- **Llama y número**: el calendario marca cada día en que escribiste con una
  llama y enlaza tu racha actual.
- **Días a secas**: las llamas se quedan, pero la racha no se resalta.
- **Apagada**: sin llamas en el calendario y sin racha en el Inicio de Escribir.

El **Ritmo semanal**, en el mismo sitio, es un objetivo más suave: proponte
escribir *N días a la semana*, medidos sobre siete días móviles, para que un
solo día perdido nunca lo reinicie. Consulta
[El calendario](calendar.md#the-streak-and-how-it-shows).

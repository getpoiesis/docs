---
title: Introducción
slug: /
---

# Te damos la bienvenida a φ

φ es una app de escritura pensada para el largo plazo: manuscritos, poesía,
ensayos y las notas que los alimentan. Está hecha ante todo para el **oficio de
escribir**: una página serena y a sangre completa, una serif en la que puedes
habitar y una estructura que se mantiene al margen hasta que la necesitas.

<img src="/img/app/write-home-light.png" alt="Escribir: el trabajo en curso, los proyectos y el mes detrás de ellos" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/write-home-dark.png" alt="Escribir: el trabajo en curso, los proyectos y el mes detrás de ellos" width="1600" height="1000" loading="lazy" decoding="async" />

:::warning φ está en alfa

Estás usando software temprano. El núcleo —escribir, organizar, versionar y
mantener tu trabajo a salvo en archivos sencillos— es sólido y se usa a diario.
Pero cuenta con asperezas, algún error ocasional y funciones que aún se están
asentando.

**El área más débil hoy es la exportación**: convertir tu trabajo en archivos
EPUB, PDF o Word. Está en pleno desarrollo y es la parte que más probablemente
necesite retoques en la app de destino. Trata los archivos exportados como
borradores y revísalos. Consulta [Exportar e imprimir](exporting.md) para saber
qué esperar.

Tu escritura en sí nunca está en riesgo: los documentos son archivos sencillos,
guardados de forma continua y verificados, con un historial de versiones al que
puedes volver.

:::

## Qué hace diferente a φ {#what-makes-φ-different}

**Tu escritura es tuya.** Todo vive en archivos sencillos en tu propio equipo,
en una carpeta que tú eliges. φ funciona en macOS, Windows y Linux, y no hay
cuenta, ni nube, ni se necesita red para escribir, editar, buscar o exportar.
Cierra la app, abre la carpeta y tu trabajo está justo ahí.

**Local primero, duradero por diseño.** Cada documento se guarda automáticamente
y se verifica tras cada escritura. φ mantiene un historial de versiones para que
puedas volver a cualquier borrador anterior, y puede respaldar ese historial en
tu propio remoto de git si quieres tenerlo fuera del equipo, pero nada sale de tu
ordenador a menos que tú lo configures.

**Tres modos, una bóveda.** φ es ante todo un editor de manuscritos, con un
cuaderno y un diario a su lado, y los tres comparten la misma base. Escribe un
libro como **proyecto** en *Escribir*, guarda ideas y fuentes en *Notas*, lleva
una entrada diaria y páginas matutinas en *Diario*, enlaza lo que sea con
`[[wiki-links]]` y míralo conectarse en el grafo, todo en un mismo lugar, una
sola bóveda.

**Silenciosa por defecto.** **Santuario** (`⌘.`) lo oculta todo salvo la página
y atenúa todo menos la frase en la que estás, de modo que las palabras que tienes
delante son lo único iluminado. El desplazamiento de máquina de escribir mantiene
tu línea centrada. La interfaz se aparta para que la página sea lo que importa.

## Qué no es φ {#what-φ-is-not}

- **No es un servicio en la nube.** No hay servidores ni cuentas de
  sincronización. El respaldo y la portabilidad se basan en archivos y en git,
  bajo tu control.
- **No es una herramienta de colaboración en tiempo real.** φ es, por diseño,
  una app de un solo autor.
- **No es nativa de Markdown.** Los documentos se almacenan como contenido
  estructurado (JSON de ProseMirror) para que los elementos enriquecidos
  —anotaciones, notas al pie, citas, bloques personalizados— sobrevivan las idas
  y vueltas. Aun así puedes *importar*, *pegar* y *exportar* Markdown con
  libertad.

## Cómo se almacena tu escritura {#how-writing-is-stored}

Cada documento es un archivo `.poiesis`: una pequeña envoltura JSON alrededor de
tu texto y sus metadatos. Una **bóveda** es simplemente una carpeta de estos
archivos, más algunas cosas que φ guarda a su lado:

- una carpeta `assets/` para las imágenes que añades,
- una carpeta `.trash/` para lo que eliminas,
- un pequeño archivo marcador, `.poiesis-vault.json`, que da nombre a la bóveda,
- y su historial de versiones: en `.poiesis-history/`, o en un repositorio git si
  te pasas a git.

Como todo son archivos sencillos en una carpeta normal, tu escritura es fácil de
respaldar, mover y conservar durante décadas. φ para iPhone y iPad también puede
abrir la misma bóveda. Consulta [Bóvedas](vaults.md) para saber más.

## A dónde ir después {#where-to-go-next}

¿Eres nuevo aquí? Empieza con [Primeros pasos](getting-started.md): instalarás
φ, crearás tu primera bóveda y escribirás tu primera página en pocos minutos.
Después, [Cómo moverte por φ](finding-your-way.md) te enseña la ventana.

---
title: Introducción
sidebar_position: 1
slug: /
---

# Te damos la bienvenida a φ

φ es una app de escritura pensada para el largo plazo: manuscritos, poesía,
ensayos y las notas que los alimentan. Está hecha ante todo para el **oficio de
escribir**: una página serena y a sangre completa, una serif en la que puedes
habitar y una estructura que se mantiene al margen hasta que la necesitas.

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

## Qué hace diferente a φ

**Tu escritura es tuya.** Todo vive en archivos sencillos en tu propio Mac, en
una carpeta que tú eliges. No hay cuenta, ni nube, ni se necesita red para
escribir, editar, buscar o exportar. Cierra la app, abre la carpeta y tu trabajo
está justo ahí.

**Local primero, duradero por diseño.** Cada documento se guarda automáticamente
y se verifica tras cada escritura. φ mantiene un historial de versiones para que
puedas retroceder a cualquier borrador anterior, y puede respaldar ese historial
en tu propio remoto de git si lo deseas para tenerlo fuera del equipo, pero nada
sale de tu ordenador a menos que tú lo configures.

**Una herramienta, dos modos.** φ es ante todo un editor de manuscritos y, en
segundo lugar, una app de notas, y ambos comparten la misma base. Escribe un
libro en *Colecciones*, lleva un diario diario, enlaza ideas con
`[[wiki-links]]` y míralas conectarse en el grafo, todo en un mismo lugar, una
sola bóveda.

**Silenciosa por defecto.** El modo concentración oculta cada elemento de la
interfaz. El desplazamiento de máquina de escribir mantiene tu línea centrada.
La interfaz se aparta para que la página sea lo único que importa.

## Qué no es φ

- **No es un servicio en la nube.** No hay servidores ni cuentas de
  sincronización. El respaldo y la portabilidad se basan en archivos y en git,
  bajo tu control.
- **No es una herramienta de colaboración en tiempo real.** φ es, por diseño,
  una app de un solo autor.
- **No es nativa de Markdown.** Los documentos se almacenan como contenido
  estructurado (JSON de ProseMirror) para que los elementos enriquecidos
  —anotaciones, notas al pie, citas, bloques personalizados— sobrevivan las idas
  y vueltas. Aun así puedes *importar* y *exportar* Markdown con libertad.

## Cómo se almacena tu escritura

Cada documento es un archivo `.poiesis`: una pequeña envoltura JSON alrededor de
tu texto y sus metadatos. Una **bóveda** es simplemente una carpeta de estos
archivos (más una carpeta `assets/` para las imágenes y un historial de
versiones). Como todo son archivos sencillos en una carpeta normal, tu escritura
es fácil de respaldar, mover y conservar durante décadas.

## A dónde ir después

¿Eres nuevo aquí? Empieza con [Primeros pasos](getting-started.md): instalarás
φ, crearás tu primera bóveda y escribirás tu primera página en pocos minutos.

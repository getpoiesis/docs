---
title: Versiones y copias de seguridad
sidebar_position: 13
---

# Versiones y copias de seguridad

Tu escritura se guarda continuamente, y φ mantiene un historial para que puedas
volver a cualquier borrador anterior. Nada sale de tu Mac a menos que tú mismo
configures un remoto.

## Cómo funciona el guardado

Cada edición se guarda automáticamente y se verifica después de cada escritura —
nunca tienes que pulsar Guardar para conservar tu trabajo. (`⌘S` está ahí si lo
quieres, pero rara vez hace falta.) La barra de estado muestra **Guardado**
cuando el archivo está en disco.

Además del guardado, φ registra **versiones**: copias en un momento dado que
puedes explorar y restaurar.

## Dos tipos de versión

- **Puntos de control** — se crean automáticamente mientras escribes: a
  intervalos regulares, cuando quedas inactivo y cuando cambias de documento.
  Capturan tu progreso sin esfuerzo alguno por tu parte.
- **Instantáneas** — versiones con nombre que creas a propósito para marcar un
  hito (el final de un capítulo, un borrador terminado). Pulsa `⌘⇧S`, o usa
  **Guardar versión…** desde la paleta de comandos (`⌘P`), y dale un nombre.

## El panel de historial de versiones

Ábrelo con `⌘]` (o el icono de reloj en la barra superior) para ver el historial
de este documento, agrupado por día — Hoy, Ayer, y así sucesivamente.

- **Explorar** — haz clic en cualquier versión para previsualizar su contenido
  completo en el área del editor. Filtra por tipo (Todas, Instantáneas, Puntos de
  control, Restauraciones) o busca por nombre.
- **Ver qué cambió** — con una versión abierta, elige **Mostrar cambios** para
  ver las diferencias respecto a la versión actual. Puedes ajustar con qué
  precisión se resaltan los cambios en **Ajustes → Editor → Versiones**.
- **Restaurar** — recupera una versión anterior como documento en vivo. Tu
  contenido actual se guarda primero como una nueva versión, así no se pierde
  nada.

## Instantáneas nativas frente a git

Cada bóveda tiene su propio **backend** de versionado, que se elige en **Ajustes
→ Versiones**:

- **Nativo** — instantáneas locales almacenadas junto a tu bóveda. No requiere
  git; funciona desde el primer momento. Hay un límite de historial por documento
  (las instantáneas antiguas se podan para mantener acotado el uso de disco), que
  puedes ajustar.
- **Git** — historial completo e ilimitado, además de la opción de respaldar
  fuera de la máquina. Elige esta opción si te sientes cómodo con git.

**Si git no está instalado**, φ se mantiene en Nativo y te lo indica — el
versionado sigue funcionando, simplemente no obtienes el historial ilimitado ni
el respaldo remoto de git. En ese caso la barra de estado muestra **git no
disponible**. Instala git para desbloquear esas funciones.

> Cambiar una bóveda a git ejecuta `git init` y confirma según una programación.
> Para volver a Nativo más tarde deberás eliminar tú mismo la carpeta `.git` en
> el Finder. Consulta las notas del cuadro de diálogo de conversión antes de
> cambiar.

## Copia de seguridad fuera de la máquina con un remoto de git

En el backend de git puedes enviar tu historial a tu propio remoto (GitHub,
GitLab o cualquier servidor git) para que una copia viva en otro lugar además de
tu Mac. En **Ajustes → Versiones → Respaldo en git**:

- Define una **URL del remoto de respaldo** a la que hacer push.
- Activa el **Push automático de respaldos** para enviar los nuevos commits a
  intervalos, o pulsa **Respaldar ahora** (también **Respaldar ahora** en la
  paleta de comandos) para hacer push bajo demanda.
- Opcionalmente, define un **nombre/correo del commit** dedicado y una **ruta de
  la clave SSH** para que este trabajo quede fuera de tu cuenta principal, y
  **firma los commits** para obtener una insignia Verificado.

Usa un repositorio privado y una identidad dedicada para esto.

## Una bóveda no es más que archivos

Como una bóveda es una carpeta normal de archivos `.poiesis` (con una carpeta
`assets/` y el historial de versiones), cualquier método de copia de seguridad en
el que ya confíes también funciona — Time Machine, una carpeta sincronizada en la
nube o una copia manual. El versionado de φ es una opción, no la única.

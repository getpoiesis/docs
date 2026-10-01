---
title: Instalar φ
---

# Instalar φ

φ funciona en **macOS, Windows y Linux**. Consigue la versión para tu sistema en
la **[página de descargas](https://getpoiesis.com/download)**: ofrece el archivo
adecuado para el equipo desde el que la visitas, con todas las demás opciones a un
clic.

:::warning φ está en alfa
Estás usando software temprano: espera asperezas. Tu escritura en sí siempre está
a salvo: son archivos sencillos en tu equipo, guardados de forma continua y con
versiones.
:::

:::danger ¿Sigues en la 0.8.2 o anterior? Descarga φ otra vez
**La 0.9.0 cambió cómo identifica tu sistema operativo a φ**, y eso rompió la
actualización que normalmente se te ofrecería. Una copia antigua seguirá diciendo
que está al día, para siempre. Descarga la versión actual desde la
[página de descargas](https://getpoiesis.com/download) e instálala sobre la que
tienes, una vez. A partir de la 0.9.0 las actualizaciones vuelven a funcionar con
normalidad.

Tu trabajo no se toca: bóvedas, ajustes, diccionarios e historial dependen del
nombre de la app, no de su identificador. Dos cosas se reinician una vez:
**macOS** vuelve a pedir acceso a la carpeta donde está tu bóveda, y **Windows**
trata esta como un programa distinto, así que desinstala la φ anterior o quedará
junto a esta en Agregar o quitar programas.
:::

## Requisitos del sistema {#system-requirements}

- **macOS** 12 (Monterey) o posterior — Apple Silicon o Intel.
- **Windows** 10 u 11 (64 bits).
- **Linux** — una distribución moderna de 64 bits. El AppImage funciona casi en
  cualquier parte; se ofrece un `.deb` para Debian y Ubuntu.

## macOS {#macos}

1. Descarga el `.dmg` — **Apple Silicon** o **Intel** según tu Mac. (¿No sabes
   cuál tienes? Menú Apple → **Acerca de este Mac**; un chip que aparezca como
   «Apple M-series» es Apple Silicon.)
2. Abre el `.dmg` y arrastra φ a tu carpeta **Aplicaciones**.
3. Ábrelo desde Aplicaciones o con Spotlight: aparece como **φ Poiesis**, así
   que al escribir «poiesis» lo encuentras.

Las versiones de macOS están **firmadas y notarizadas por Apple**, así que se
abren sin el aviso de Gatekeeper de «desarrollador no identificado».

## Windows {#windows}

1. Descarga el instalador (`.exe`) y ejecútalo. Durante la instalación puedes
   elegir la ubicación.
2. φ aún no tiene firma de código, así que **SmartScreen** de Windows puede
   avisar de que procede de un editor no reconocido. Haz clic en **Más
   información → Ejecutar de todas formas** para continuar; solo hace falta una
   vez.
3. Abre φ desde el menú Inicio, donde aparece como **φ Poiesis**.

:::note ¿Por qué el aviso de SmartScreen?
Un certificado de firma de código es algo que añadiremos más adelante. Hasta
entonces el aviso es esperable; la descarga procede directamente de nuestras
propias publicaciones.
:::

## Linux {#linux}

φ se distribuye en dos formatos. El **AppImage** es el más sencillo y **puede
actualizarse solo**; el **`.deb`** se integra con Debian y Ubuntu, pero se
actualiza reinstalando.

### AppImage (recomendado) {#appimage-recommended}

1. Descarga el `.AppImage`.
2. Hazlo ejecutable — en una terminal:
   ```bash
   chmod +x poiesis-*.AppImage
   ```
   …o haz clic derecho en el archivo → **Propiedades → Permisos → Permitir
   ejecutar el archivo como un programa**.
3. Haz doble clic en él, o ejecuta `./poiesis-*.AppImage`.

### Debian / Ubuntu (`.deb`) {#debian--ubuntu-deb}

```bash
sudo dpkg -i poiesis-*.deb
```

Después abre **φ Poiesis** desde el menú de aplicaciones.

## Mantenerse al día {#staying-up-to-date}

φ busca una versión nueva por su cuenta —unos segundos después de abrirse y luego
cada seis horas—, pero nunca la descarga sin preguntar. Cuando hay una
actualización, un pequeño aviso te lo dice:

1. **Hay una nueva versión (…) disponible.** Haz clic en **Descargar** cuando te
   venga bien.
2. **Descargando actualización… %** muestra cuánto lleva.
3. **La actualización … está lista para instalar.** Haz clic en **Reiniciar e
   instalar** para reiniciar ya en la nueva versión, o cierra el aviso para
   seguir: una actualización descargada también se instala la próxima vez que
   salgas de φ.

Esto funciona en **macOS**, **Windows** y el **AppImage de Linux**. El **`.deb`
de Linux** se actualiza descargando e instalando el `.deb` más reciente, o
cambiándote al AppImage.

### Comprobarlo a mano {#checking-by-hand}

- **macOS** — el menú de la app **φ Poiesis** → **Buscar actualizaciones…**.
- **Windows y Linux** — pulsa `⌘P` (Ctrl+P) y ejecuta **Buscar
  actualizaciones…**.

φ responde con **Buscando actualizaciones…** y después te ofrece la
actualización, te dice **φ está actualizado.** o avisa **No se pudieron buscar
actualizaciones.** si no puede llegar al servidor de descargas (por ejemplo,
cuando no tienes conexión).

## Siguientes pasos {#next-steps}

Con φ instalado, [Primeros pasos](getting-started.md) te guía por tu primera
bóveda y tu primera página.

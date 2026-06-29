---
title: Instalar φ
sidebar_position: 1
---

# Instalar φ

φ funciona en **macOS, Windows y Linux**. Consigue la versión para tu sistema en
la **[página de descargas](https://getpoiesis.com/download)**: ofrece el archivo
adecuado para el equipo desde el que la visitas, con todas las demás opciones a un
clic.

:::warning φ está en alfa
Estás usando software temprano: espera asperezas. Tu escritura siempre está a
salvo: son archivos planos en tu equipo, guardados de forma continua y con
versiones.
:::

## Requisitos del sistema

- **macOS** 12 (Monterey) o posterior — Apple Silicon o Intel.
- **Windows** 10 u 11 (64 bits).
- **Linux** — una distribución moderna de 64 bits. El AppImage funciona casi en
  cualquier parte; se ofrece un `.deb` para Debian y Ubuntu.

## macOS

1. Descarga el `.dmg` — **Apple Silicon** o **Intel** según tu Mac. (¿No sabes
   cuál? Menú Apple → **Acerca de este Mac**; un chip que aparezca como «Apple
   M-series» es Apple Silicon.)
2. Abre el `.dmg` y arrastra **φ** a tu carpeta de **Aplicaciones**.
3. Inícialo desde Aplicaciones o con Spotlight.

Las versiones de macOS están **firmadas y notarizadas por Apple**, así que se
abren sin el aviso de Gatekeeper de «desarrollador no identificado».

## Windows

1. Descarga el instalador (`.exe`) y ejecútalo. Durante la instalación puedes
   elegir la ubicación.
2. φ aún no está firmado, así que **SmartScreen** de Windows puede avisar de que
   procede de un editor no reconocido. Haz clic en **Más información → Ejecutar de
   todas formas** para continuar; solo hace falta una vez.
3. Inicia φ desde el menú Inicio.

:::note ¿Por qué el aviso de SmartScreen?
Un certificado de firma de código es algo que añadiremos más adelante. Hasta
entonces el aviso es esperable; la descarga procede directamente de nuestras
publicaciones.
:::

## Linux

φ se distribuye en dos formatos. El **AppImage** es el más sencillo y **se
actualiza solo**; el **`.deb`** se integra con Debian y Ubuntu, pero se actualiza
reinstalando.

### AppImage (recomendado)

1. Descarga el `.AppImage`.
2. Hazlo ejecutable — en una terminal:
   ```bash
   chmod +x poiesis-*.AppImage
   ```
   …o haz clic derecho en el archivo → **Propiedades → Permisos → Permitir
   ejecutar el archivo como un programa**.
3. Haz doble clic, o ejecuta `./poiesis-*.AppImage`.

### Debian / Ubuntu (`.deb`)

```bash
sudo dpkg -i poiesis-*.deb
```

Después inicia **φ** desde el menú de aplicaciones.

## Mantenerse al día

φ busca actualizaciones por su cuenta y las instala en segundo plano sin molestar:

- **macOS**, **Windows** y el **AppImage de Linux** se actualizan solos: se te
  pedirá reiniciar cuando una nueva versión esté lista.
- El **`.deb` de Linux** **no** se actualiza solo. Descarga e instala el `.deb`
  más reciente cuando quieras actualizar, o cámbiate al AppImage.

También puedes comprobarlo cuando quieras — **Ayuda → Buscar actualizaciones** (en
macOS, el menú de la app **φ**).

## Siguientes pasos

Con φ instalado, [Primeros pasos](getting-started.md) te guía por tu primera
bóveda y tu primera página.

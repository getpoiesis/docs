---
title: Instalar φ
description: Descarga φ para macOS, Windows o Linux, y mantenlo al día.
---

# Instalar φ

φ funciona en macOS, Windows y Linux. La
[página de descargas](https://getpoiesis.com/download) te ofrece el archivo
adecuado para el equipo desde el que la visitas, con todas las demás opciones a
un clic. Una vez instalado, φ te avisa cuando hay una versión nueva.

## Instalar φ {#install-φ-1}

1. Abre la [página de descargas](https://getpoiesis.com/download) y descarga el
   archivo que te ofrece.
2. Instálalo como espera tu sistema (mira más abajo).
3. Abre φ. Tu sistema lo muestra como **φ Poiesis**, así que al escribir
   «poiesis» en Spotlight o en el menú Inicio lo encuentras.
4. [Crea tu primera bóveda](./getting-started).

## Qué necesitas {#what-you-need}

| Sistema | Versión |
| --- | --- |
| **macOS** | 13 (Ventura) o posterior, en Apple Silicon o Intel |
| **Windows** | 10 u 11, de 64 bits |
| **Linux** | Una distribución moderna de 64 bits. El AppImage funciona casi en cualquier parte; el `.deb` es para Debian y Ubuntu. |

## En un Mac {#on-a-mac}

1. Descarga el `.dmg` para tu Mac: **Apple Silicon** o **Intel**. ¿No sabes
   cuál? Menú Apple → **Acerca de este Mac**: un chip llamado «Apple M…» es
   Apple Silicon.
2. Abre el `.dmg` y arrastra φ a **Aplicaciones**.
3. Ábrelo desde Aplicaciones o con Spotlight.

Las versiones para Mac están firmadas y notarizadas por Apple, así que se abren
sin el aviso de «desarrollador no identificado».

## En Windows {#on-windows}

1. Descarga el instalador (`.exe`) y ejecútalo. Puedes elegir dónde se instala
   φ.
2. φ aún no tiene firma de código, así que SmartScreen de Windows puede decir
   que procede de un editor no reconocido. Haz clic en **Más información** y
   luego en **Ejecutar de todas formas**. Solo hace falta hacerlo una vez, y la
   descarga procede directamente de las publicaciones de φ.
3. Abre φ desde el menú Inicio.

## En Linux {#on-linux}

El **AppImage** es la opción más sencilla y se actualiza solo. El **`.deb`** se
integra con Debian y Ubuntu, pero se actualiza instalando el `.deb` más
reciente.

Para el AppImage, haz el archivo ejecutable y luego haz doble clic en él:

```bash
chmod +x poiesis-*.AppImage
./poiesis-*.AppImage
```

O haz clic derecho en el archivo → **Propiedades** → **Permisos** → **Permitir
ejecutar el archivo como un programa**.

Para el `.deb`:

```bash
sudo dpkg -i poiesis-*.deb
```

Después abre **φ Poiesis** desde el menú de aplicaciones.

## Mantén φ al día {#keep-φ-up-to-date}

φ busca una versión nueva unos segundos después de abrirse, y luego cada seis
horas. Nunca la descarga sin preguntar. Cuando hay una actualización, un pequeño
aviso te lo dice:

1. **Hay una nueva versión (…) disponible.** Haz clic en **Descargar** cuando te
   venga bien.
2. **Descargando actualización… %** muestra cuánto lleva.
3. **La actualización … está lista para instalar.** Haz clic en **Reiniciar e
   instalar**, o cierra el aviso y sigue: una actualización descargada se
   instala la próxima vez que salgas de φ.

Esto funciona en macOS, Windows y el AppImage de Linux. Para el `.deb`,
descarga e instala tú mismo la versión nueva.

Para comprobarlo ahora:

- **En un Mac:** el menú **φ Poiesis** → **Buscar actualizaciones…**.
- **En Windows y Linux:** pulsa `Ctrl+P` y ejecuta **Buscar actualizaciones…**.

φ muestra **Buscando actualizaciones…** y luego te ofrece la actualización,
dice **φ está actualizado.** o dice **No se pudieron buscar actualizaciones.**
cuando no puede llegar al servidor de descargas, por ejemplo cuando no tienes
conexión.

:::note ¿Sigues en la 0.8.2 o anterior? Descarga φ otra vez

La versión 0.9.0 cambió cómo identifica tu sistema a φ, y eso rompió la
actualización que ofrecería una copia antigua: seguirá diciendo que está al día.
Descarga la versión actual desde la
[página de descargas](https://getpoiesis.com/download) e instálala sobre la que
tienes. Solo hace falta hacerlo una vez.

Tus bóvedas, ajustes, diccionarios e historial no se tocan. En un Mac, macOS
vuelve a pedir una vez acceso a la carpeta donde está tu bóveda. En Windows, la
nueva φ aparece como un programa distinto, así que desinstala la anterior desde
**Agregar o quitar programas**.

:::

## Consulta también {#see-also}

- [Tu primera bóveda](./getting-started)
- [Ajustes](./settings)
- [Bóvedas](./vaults)

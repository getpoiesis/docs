---
title: Instalar Poiesis
description: Descarga φ Poiesis para macOS, Windows o Linux y mantenlo actualizado.
---

# Instalar φ Poiesis

Poiesis funciona en macOS, Windows y Linux. Una vez instalado, te avisa cuando hay
una versión nueva.

## Instalar Poiesis {#install-Poiesis-1}

1. Abre la [página de descargas](https://getpoiesis.com/download). Te ofrece
   el archivo adecuado para el ordenador que estás usando. En la misma página
   están los archivos para los demás sistemas.
2. Descarga el archivo.
3. Instálalo. Más abajo tienes los pasos para tu sistema.
4. Abre Poiesis. En tu sistema aparece como **φ Poiesis**. Para encontrarlo, escribe
   «poiesis» en Spotlight o en el menú Inicio.
5. [Crea tu primera bóveda](./getting-started).

## Requisitos {#what-you-need}

| Sistema | Versión |
| --- | --- |
| **macOS** | 13 (Ventura) o posterior, con Apple Silicon o Intel |
| **Windows** | 10 u 11, de 64 bits |
| **Linux** | Una distribución moderna de 64 bits. El AppImage funciona en casi todas; el `.deb` es para Debian y Ubuntu. |

## En un Mac {#on-a-mac}

1. Descarga el `.dmg` que corresponda a tu Mac: **Apple Silicon** o **Intel**.
   Para saber cuál tienes, abre el menú Apple y elige **Acerca de este Mac**.
   Si el chip se llama «Apple M…», es Apple Silicon.
2. Abre el `.dmg`.
3. Arrastra Poiesis a **Aplicaciones**.
4. Abre Poiesis desde Aplicaciones o con Spotlight.

Las versiones para Mac están firmadas y certificadas por Apple. Se abren sin
el aviso de «desarrollador no identificado».

## En Windows {#on-windows}

1. Descarga el instalador (`.exe`).
2. Ejecútalo. Puedes elegir dónde se instala Poiesis.
3. Es posible que Windows SmartScreen diga que Poiesis procede de un editor
   desconocido. Se debe a que Poiesis todavía no tiene firma de código. Haz clic en
   **Más información** y luego en **Ejecutar de todas formas**. Solo hay que
   hacerlo una vez. La descarga procede directamente de las publicaciones de
   Poiesis.
4. Abre Poiesis desde el menú Inicio.

## En Linux {#on-linux}

Puedes elegir entre dos archivos:

- El **AppImage** es más sencillo y se actualiza solo.
- El **`.deb`** se instala como cualquier otro paquete de Debian y Ubuntu.
  Para actualizarlo, tienes que instalar tú el `.deb` más reciente.

**AppImage.** Dale permiso de ejecución al archivo y haz doble clic en él:

```bash
chmod +x poiesis-*.AppImage
./poiesis-*.AppImage
```

También puedes hacerlo sin terminal: clic derecho en el archivo →
**Propiedades** → **Permisos** → **Permitir ejecutar el archivo como un
programa**.

**`.deb`.** Instálalo con:

```bash
sudo dpkg -i poiesis-*.deb
```

Después abre **φ Poiesis** desde el menú de aplicaciones.

## Mantener Poiesis actualizado {#keep-Poiesis-up-to-date}

Poiesis comprueba si hay una versión nueva unos segundos después de abrirse y, a
partir de ahí, cada seis horas. Nunca descarga una actualización sin
preguntarte. Cuando hay una, aparece un pequeño aviso:

1. El aviso dice **Hay una nueva versión (…) disponible.** Haz clic en
   **Descargar** cuando te venga bien.
2. Mientras dura la descarga, el aviso muestra **Descargando actualización…
   %**.
3. El aviso dice **La actualización … está lista para instalar.** Haz clic en
   **Reiniciar e instalar**. Si lo prefieres, cierra el aviso y sigue
   escribiendo: Poiesis instalará la actualización la próxima vez que salgas.

Esto funciona en macOS, en Windows y con el AppImage de Linux. Si usas el
`.deb`, descarga e instala tú la versión nueva.

Para buscar una actualización ahora mismo:

- **En un Mac:** abre el menú **φ Poiesis** y elige **Buscar
  actualizaciones…**.
- **En Windows y Linux:** pulsa `Ctrl+P` y ejecuta **Buscar
  actualizaciones…**.

Poiesis muestra **Buscando actualizaciones…**. Después ocurre una de estas tres
cosas:

- Poiesis te ofrece la actualización.
- Poiesis dice **φ está actualizado.**
- Poiesis dice **No se pudieron buscar actualizaciones.** Significa que no consigue
  conectar con el servidor de descargas; por ejemplo, porque no tienes
  conexión.

:::note ¿Sigues con la 0.8.2 o una anterior? Vuelve a descargar Poiesis

La versión 0.9.0 cambió la forma en que tu sistema identifica a Poiesis. Por eso la
versión 0.8.2 y las anteriores no pueden actualizarse solas: siguen diciendo
que Poiesis está actualizado. Descarga la versión actual desde la
[página de descargas](https://getpoiesis.com/download) e instálala encima de
la que tienes. Solo hay que hacerlo una vez.

Tus bóvedas, tus ajustes, tus diccionarios y tu historial no cambian. En un
Mac, macOS te pide una vez más acceso a la carpeta donde está tu bóveda. En
Windows, la nueva Poiesis aparece como un programa distinto, así que desinstala la
antigua desde **Agregar o quitar programas**.

:::

## Ver también {#see-also}

- [Tu primera bóveda](./getting-started)
- [Ajustes](./settings)
- [Bóvedas](./vaults)

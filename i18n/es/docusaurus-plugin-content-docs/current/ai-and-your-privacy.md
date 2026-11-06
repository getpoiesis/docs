---
title: La IA y tu privacidad
description: Qué hace la IA en φ Poiesis, qué se envía y quién lo recibe.
---

# La IA y tu privacidad

La IA está desactivada hasta que la actives. Hasta entonces, nada de IA aparece en la app, salvo **Ajustes → IA**.

## Para qué sirve

[Ariadne](./ariadne.md) lee tu trabajo contigo, responde preguntas, comprueba datos y comenta, y te ayuda a organizar y llevar notas. No es para escribir tus piezas o libros, y no puede cambiar sus palabras. Solo puede empezar un proyecto como un esquema vacío, y solo si lo permites.

<img src="/img/app/ai-settings-off-light.png" alt="Ajustes → IA con la IA desactivada y la explicación de privacidad arriba." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-settings-off-dark.png" alt="Ajustes → IA con la IA desactivada y la explicación de privacidad arriba." width="1600" height="1000" loading="lazy" decoding="async" />

## Qué se envía

Tus mensajes, los nombres de la bóveda y el documento que tienes abiertos y lo que lee para responderte. No sube tu bóveda. Los interruptores de cada bóveda deciden qué puede leer.

**Tu diario y tus Páginas matutinas nunca se envían ni los lee ninguna IA**, actives lo que actives.

## Quién lo recibe

El proveedor que elegiste, directamente, con tu propia clave. φ Poiesis no tiene ningún servidor en medio y nunca lo ve. Lo que el proveedor haga con ello depende de sus propios términos, así que léelos. **Ajustes → IA → La IA y tu privacidad** enlaza a los términos de lo que uses.

Con un modelo local en Ollama, lo que lee se queda en tu equipo, salvo que actives las consultas a Wikipedia.

Los [agentes externos](./ai-agents.md) como Claude o Codex son apps independientes, y se aplican sus propios términos.

## Búsqueda web

Las consultas web están desactivadas hasta que las actives. Con **Buscar en la web** activado, las búsquedas pasan por Anthropic. Tu diario y tus Páginas matutinas quedan fuera. Con otros proveedores y modelos locales, puedes activar las consultas a Wikipedia en **Avanzado**: solo esas palabras salen de tu equipo, y solo hacia Wikipedia.

## Qué se queda en tu equipo

- **Las claves** se guardan en el almacenamiento seguro del sistema, cada una con su nombre, como `φ Poiesis: API key for Anthropic`. Si tu Mac tiene Touch ID, pregunta la primera vez que se usa una clave.
- **Los chats** se guardan en este equipo, fuera de tus bóvedas, salvo que actives **Guardar los chats en esta bóveda** en **Ajustes → IA**.

<img src="/img/app/ai-privacy-page-light.png" alt="La página La IA y tu privacidad, abierta desde Ajustes." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-privacy-page-dark.png" alt="La página La IA y tu privacidad, abierta desde Ajustes." width="1600" height="1000" loading="lazy" decoding="async" />

## Cómo desactivarla

En **Ajustes → IA**, elige **Desactivar**. Para eliminar una clave del almacenamiento del sistema, elige **Quitar clave**. Lo que un proveedor ya recibió depende de sus términos.

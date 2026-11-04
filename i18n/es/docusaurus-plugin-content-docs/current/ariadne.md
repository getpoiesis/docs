---
title: Ariadne
description: Una asistente junto a tu escritura, con tu propia clave o un modelo local.
---

# Ariadne

Ariadne es una asistente que está junto a lo que tengas abierto. Lee tu trabajo contigo, responde preguntas sobre él, revisa la continuidad y comenta en notas al margen. También lleva la biblia de tu historia y mantiene tu bóveda en orden. Nunca escribe tus piezas, y pregunta antes de cambiar nada. Lee [La IA y tu privacidad](./ai-and-your-privacy.md) antes de activarlo.

## Activarla

1. Abre **Ajustes → IA** y elige **Configurar Ariadne**.
2. Elige un proveedor. Puedes leer su política de privacidad desde la lista.
3. Lee la hoja que aparece y elige **Activar Ariadne**.
4. Añade tu clave de API si el proveedor la necesita y elige un modelo.

Con Ollama, debe estar funcionando en este equipo con un modelo que pueda usar herramientas.

Cada bóveda puede usar estos ajustes o los suyos. En **Esta bóveda**, dentro de **Ajustes → IA**, elige la bóveda y **Propio**.

<img src="/img/app/ai-consent-light.png" alt="La hoja que hay que leer antes de activar Ariadne, con la política de privacidad del proveedor." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-consent-dark.png" alt="La hoja que hay que leer antes de activar Ariadne, con la política de privacidad del proveedor." width="1600" height="1000" loading="lazy" decoding="async" />

## Abrirla

Usa el botón del robot en la barra de la página, o pulsa **⌘G** y luego **A**. Sigue abierta mientras te mueves por la app.

<img src="/img/app/ariadne-panel-light.png" alt="Ariadne abierto junto a un capítulo, con ideas para empezar." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-panel-dark.png" alt="Ariadne abierto junto a un capítulo, con ideas para empezar." width="1600" height="1000" loading="lazy" decoding="async" />

## Pregúntale sobre tu trabajo

Empieza con una sugerencia del panel o pregunta con tus palabras:

- **¿En qué debería trabajar hoy?** Mira lo que has escrito, tus tareas y tus notas abiertas.
- **Revisa la continuidad de un proyecto.** Compara el texto con tus personajes y tu mundo, y cita ambos pasajes para que lo compruebes.
- **Escríbeme una carta de editor sobre un proyecto.** Qué funciona, dónde se hace lento y qué te preguntaría primero.
- **Crea una biblia de la historia con mi manuscrito.** Completa personajes, lugares, eventos y sinopsis de capítulos con lo que dice el texto.

Con **Dejar notas al margen** activado, puede comentar un pasaje, también en una pieza. Estas notas aparecen como **De un agente** en tus anotaciones, y nunca cambian una palabra.

También puedes preguntarle cómo funciona φ Poiesis. Responde a partir de esta guía, que descarga la primera vez que preguntas y guarda en tu equipo, y te enlaza a la página.

## Recuerda, si estás de acuerdo

Dile a Ariadne algo duradero, como tu forma de trabajar o una decisión sobre el libro, y puede ofrecerse a guardarlo para próximos chats. Pregunta antes de añadir nada. Puedes leer y cambiar lo que guarda en **Lo que Ariadne recuerda**, en **Ajustes → IA**. Se guarda en la bóveda.

## Ordena tus notas

Pídele que ordene tu bandeja de entrada y te da un solo plan: archivar esto aquí, etiquetar esto, destacar aquello. Desmarca lo que no quieras y elige **Aplicar**. Nada se mueve hasta entonces, y **Deshacer** en la tarjeta lo devuelve a su sitio.

<img src="/img/app/ariadne-inbox-light.png" alt="Un solo plan para ordenar la bandeja de entrada, con una casilla junto a cada cambio, Descartar y Aplicar." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-inbox-dark.png" alt="Un solo plan para ordenar la bandeja de entrada, con una casilla junto a cada cambio, Descartar y Aplicar." width="1600" height="1000" loading="lazy" decoding="async" />

## Buscar en la web

Con Anthropic, Ariadne puede buscar en la web cuando una pregunta lo necesite, con sus fuentes enlazadas. Anthropic hace las búsquedas con tu clave. Puede tener un coste adicional, así que consulta antes los precios y términos de Anthropic. Está desactivado hasta que actives **Buscar en la web** en **Ajustes → IA**. Tu diario y tus Páginas matutinas quedan fuera.

Los demás proveedores y los modelos locales no buscan en la web. Ariadne puede consultar Wikipedia, y dice que eso es todo lo que ha mirado. Está desactivado hasta que actives **Consultar Wikipedia** en **Avanzado**, en **Ajustes → IA**. Entonces solo salen de tu equipo las palabras que consulta, y solo hacia Wikipedia.

<img src="/img/app/ai-web-search-light.png" alt="El ajuste para consultar Wikipedia en Ajustes → IA, en Avanzado, desactivado." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-web-search-dark.png" alt="El ajuste para consultar Wikipedia en Ajustes → IA, en Avanzado, desactivado." width="1600" height="1000" loading="lazy" decoding="async" />

Para conservar lo que encontró, elige **Guardar como página de investigación** bajo su respuesta. Las fuentes van con ella.

## Úsala sobre tu selección

Selecciona un texto y haz clic en el robot de la barra de herramientas. Se abre un pequeño menú en la página, y el chat sigue cerrado.

- Para ver el significado y los sinónimos de tus diccionarios, sin IA, usa el [libro junto a este botón](./dictionary.md).
- **Buscar sinónimos** y **Buscar antónimos** le preguntan a Ariadne, teniendo en cuenta la frase. Con una selección más larga, verás **Buscar un reemplazo**.
- **Decirlo de otra forma**, **Acortar** y **Revisar ortografía y gramática** funcionan dentro de un párrafo.
- **Preguntar en el chat** lleva la selección al panel.

Haz clic en una palabra para usarla. Con una frase, pregunta antes y nada cambia hasta que elijas **Reemplazar**. Deshacer lo revierte. Solo se envían la selección y su párrafo. El diario no tiene este menú.

<img src="/img/app/ariadne-selection-light.png" alt="La pregunta de si reemplazar la selección, con las opciones de conservar el texto o Reemplazar, sobre una frase seleccionada." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-selection-dark.png" alt="La pregunta de si reemplazar la selección, con las opciones de conservar el texto o Reemplazar, sobre una frase seleccionada." width="1600" height="1000" loading="lazy" decoding="async" />

## Enséñamelo en pantalla

Con **Controlar lo que hay en pantalla** activado, pide algo y Ariadne lo abre: «enséñame la investigación del capítulo tres». También puede cerrar lo que esté abierto. Si hay varias cosas, las lista como enlaces en los que puedes hacer clic.

## Sigue escribiendo mientras trabaja

Puedes enviar otro mensaje mientras Ariadne está ocupada, y lo leerá en su siguiente paso. **Detener** conserva lo que ha dicho hasta entonces. Escribe `/` para ver los comandos, como `/continuity`, `/timeline`, `/voices`, `/new` o `/help`.

<img src="/img/app/ariadne-timeline-light.png" alt="Ariadne señala un capítulo situado en febrero que viene después de otro situado en marzo, y pregunta si es intencionado." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-timeline-dark.png" alt="Ariadne señala un capítulo situado en febrero que viene después de otro situado en marzo, y pregunta si es intencionado." width="1600" height="1000" loading="lazy" decoding="async" />

## Qué envía cada mensaje

Los modelos no recuerdan nada entre mensajes, así que cada uno vuelve a enviar todo el chat, y cada paso de una respuesta es una petición aparte. Por eso la entrada es mucho mayor que la salida.

El recuento de la cabecera del panel muestra los tokens nuevos. Lo que tu proveedor reutilizó de su caché aparece aparte al pasar el puntero por encima. Los precios de tu proveedor indican cuánto cuesta cada cosa. Los resultados antiguos se acortan a medida que crece el chat, y un chat largo sugiere empezar otro.

## Darle permiso

Ariadne solo puede hacer lo que permiten los interruptores de la bóveda. Están desactivados hasta que los actives, en la lista de bóvedas de **Ajustes → IA**. Elige **Leer**, **Ayudar** o **Todo** para una bóveda con un clic, o **Ajustar** sus interruptores. Consulta [Agentes de IA](./ai-agents.md). Cada cambio también espera a que elijas **Permitir** o **Ahora no**.

<img src="/img/app/ariadne-ask-light.png" alt="Ariadne pide marcar una tarjeta como hecha, con su plan arriba." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-ask-dark.png" alt="Ariadne pide marcar una tarjeta como hecha, con su plan arriba." width="1600" height="1000" loading="lazy" decoding="async" />

## Enlazar un documento

Escribe `[[` en tu mensaje y elige un documento. El enlace se queda en tu frase, como en el editor.

<img src="/img/app/ariadne-link-light.png" alt="Un documento enlazado dentro de un mensaje." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-link-dark.png" alt="Un documento enlazado dentro de un mensaje." width="1600" height="1000" loading="lazy" decoding="async" />

## Cuando te atascas

Elige **¿Atascado?** en el cuadro de mensaje para recibir preguntas sobre tu pieza, ideas, enfoques, un esbozo de lo que podría venir o lo que tus notas ya dicen. También puedes iniciar un temporizador de escritura libre de 5, 10 o 15 minutos, que no usa IA.

Las sugerencias se quedan en el panel. Para conservar una respuesta, pasa el cursor sobre ella y elige **Guardar en una nota**, y va a tu bandeja de entrada. Una nota guardada así, o escrita por un agente, no cuenta para tus palabras.

<img src="/img/app/ariadne-stuck-light.png" alt="El menú ¿Atascado?, con preguntas, ideas y temporizador." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-stuck-dark.png" alt="El menú ¿Atascado?, con preguntas, ideas y temporizador." width="1600" height="1000" loading="lazy" decoding="async" />

## Chats anteriores

El botón de los bocadillos muestra los chats anteriores. Puedes buscarlos, renombrarlos y eliminarlos.

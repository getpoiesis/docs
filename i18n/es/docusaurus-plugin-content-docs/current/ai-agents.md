---
title: Agentes de IA y fusión de bóvedas
description: Conecta Claude, Claude Code, Codex o Gemini CLI, y fusiona bóvedas con un plan.
---

# Agentes de IA y fusión de bóvedas

Una app de IA en tu equipo puede trabajar con tus bóvedas a través de φ Poiesis. Lee primero [La IA y tu privacidad](./ai-and-your-privacy.md): estas apps son independientes de φ Poiesis, y se aplican sus propios términos.

## Conectar una app

1. Abre **Ajustes → IA**.
2. Elige **Conectar agentes de IA**. Muestra las apps que encontró (Claude, Claude Code, Codex y Gemini CLI) y el archivo de ajustes que cambia cada una.
3. Marca las que quieras y elige **Conectar**. φ Poiesis guarda una copia de cada archivo.
4. Reinicia esas apps.

Para otra app, elige **Copiar configuración para otra app**.

<img src="/img/app/ai-connect-light.png" alt="La hoja Conectar agentes de IA, con cada app y el archivo que cambia." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-connect-dark.png" alt="La hoja Conectar agentes de IA, con cada app y el archivo que cambia." width="1600" height="1000" loading="lazy" decoding="async" />

## Elegir qué pueden hacer

Todo está desactivado hasta que lo actives. **Ajustes → IA** lista tus bóvedas, y cada una tiene cuatro niveles a un clic:

- **No**: los agentes no ven la bóveda.
- **Leer**: pueden mirar, sin cambiar nada.
- **Ayudar**: también pueden dejar notas al margen, crear la biblia de la historia, escribir notas nuevas en tu bandeja de entrada y proponer fusiones.
- **Todo**: cada interruptor de abajo, incluso editar notas, la papelera y aplicar planes.

**Pausar todos los agentes** detiene a la vez todos los agentes externos y a Ariadne, y guarda tus niveles para cuando reanudes.

Los agentes externos solo muestran las herramientas que permiten tus interruptores. Algunas apps necesitan reiniciarse para notar un cambio, pero una herramienta desactivada se rechaza de todos modos.

Los cambios se aplican en la siguiente llamada del agente, sin reiniciar. **Todas las bóvedas** las ajusta a la vez, y pregunta antes si eliges **Todo**. Para interruptores sueltos, elige **Ajustar** junto a una bóveda. **Permisos por defecto para otras bóvedas** se aplica a las que no tengan los suyos.

| Interruptor | Qué permite |
|---|---|
| **Permitir que los agentes de IA lean esta bóveda** | Buscar y leer, salvo el diario y las Páginas matutinas. Los demás lo necesitan. |
| **Organizar** | Etiquetar y archivar documentos, y reordenar proyectos. |
| **Actualizar tareas y tarjetas** | Marcarlas como hechas, poner fechas y prioridad, mover y archivar tarjetas. |
| **Editar notas** | Cambiar el texto de las notas. Cada edición guarda una versión llamada **AI edited**. |
| **Dejar notas al margen** | Comentar un pasaje, también en una pieza, marcado **De un agente**. Las palabras nunca cambian. |
| **Crear la biblia de la historia** | Completar personajes, entradas del mundo y sinopsis de capítulos. Lo que tú hayas escrito se queda como está. |
| **Completar datos del libro** | Subtítulo, serie, palabras clave, idioma y descripción, si están vacíos. Nunca el título, las personas, los derechos ni los ISBN. |
| **Editar tarjetas** | Cambiar el título y las notas de una tarjeta. |
| **Mover notas a la papelera** | De una en una, y puedes restaurarla. |
| **Crear** | Notas, carpetas, tableros, tarjetas y esquemas vacíos tienen cada uno su interruptor. |
| **Proponer fusiones** | Planear la fusión de bóvedas o notas repetidas. |
| **Permitir que los agentes apliquen planes** | Aprobar un plan en el chat del agente. |

Los agentes nunca pueden cambiar las palabras de una pieza, ver el diario ni las Páginas matutinas, ni eliminar nada definitivamente. Nada se quita en bloque, salvo con un plan de fusión que apruebes.

<img src="/img/app/ai-vault-light.png" alt="Los interruptores de una bóveda en Ajustes → IA, agrupados por lo que permiten." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-vault-dark.png" alt="Los interruptores de una bóveda en Ajustes → IA, agrupados por lo que permiten." width="1600" height="1000" loading="lazy" decoding="async" />

## Qué pueden consultar los agentes

Con **Leer**, un agente puede leer un proyecto entero en orden, la ficha de un personaje y cada capítulo que lo nombra, tus lugares, historia y eventos, tus resaltados y notas al margen, y versiones anteriores de un documento. También puede ver tus palabras por día, contar palabras muy usadas y frases repetidas, y encontrar cabos sueltos como enlaces rotos y sinopsis que faltan. Puede ver qué encontraría una exportación, pero solo tú puedes exportar.

Muchos cambios de tareas pueden ir en un solo plan, que aplicas con un clic.

Algunas apps también ofrecen flujos listos, como una revisión de continuidad o una carta de editor. Usan los mismos interruptores.

## Fusionar bóvedas con un plan

Pide a un agente o a Ariadne que planee una fusión. Nada cambia hasta que la apruebes. Las bóvedas de origen no cambian, y al fusionar en una bóveda existente, antes se guarda una versión de ella.

- **En Ariadne**, el plan aparece en el chat. Haz tus elecciones y elige **Aplicar** o **Descartar**.
- **En un agente externo**, te muestra el plan en su propio chat. Puedes aplicarlo desde la lista de planes del panel de Ariadne, que aparece aunque Ariadne no esté configurado.
- **Para aprobarlo en el chat del agente**, activa **Permitir que los agentes apliquen planes** en cada bóveda implicada. φ Poiesis debe estar abierto, y una bóveda nueva se crea junto a la primera de origen.

:::caution
Con **Permitir que los agentes apliquen planes** activado, el permiso de la propia app es tu única comprobación. No pongas esa herramienta en permitir siempre.
:::

<img src="/img/app/ariadne-plan-light.png" alt="Un plan de fusión en el chat, con sus cifras, Descartar y Aplicar." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-plan-dark.png" alt="Un plan de fusión en el chat, con sus cifras, Descartar y Aplicar." width="1600" height="1000" loading="lazy" decoding="async" />

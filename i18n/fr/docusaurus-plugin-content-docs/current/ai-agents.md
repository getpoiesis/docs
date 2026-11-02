---
title: Agents IA et fusion de coffres
description: Connectez Claude, Claude Code, Codex ou Gemini CLI, et fusionnez des coffres à partir d’un plan.
---

# Agents IA et fusion de coffres

Une app d’IA sur votre ordinateur peut travailler avec vos coffres via φ Poiesis. Lisez d’abord [L’IA et votre vie privée](./ai-and-your-privacy.md) : ces apps sont indépendantes de φ Poiesis, et leurs propres conditions s’appliquent.

## Connecter une app

1. Ouvrez **Réglages → IA**.
2. Choisissez **Connecter les agents IA**. La liste montre les apps trouvées (Claude, Claude Code, Codex et Gemini CLI) et le fichier de réglages que chacune change.
3. Cochez celles que vous voulez et choisissez **Connecter**. φ Poiesis garde une copie de chaque fichier.
4. Redémarrez ces apps.

Pour une autre app, choisissez **Copier la configuration pour une autre app**.

<img src="/img/app/ai-connect-light.png" alt="La feuille Connecter les agents IA, avec chaque app et le fichier qu’elle change." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-connect-dark.png" alt="La feuille Connecter les agents IA, avec chaque app et le fichier qu’elle change." width="1600" height="1000" loading="lazy" decoding="async" />

## Choisir ce que les agents peuvent faire

Tout est désactivé tant que vous ne l’activez pas, pour chaque coffre, sous **Ce coffre**, dans **Réglages → IA**. **Permissions par défaut des autres coffres** s’applique à tout coffre qui n’a pas les siennes.

| Interrupteur | Ce qu’il permet |
|---|---|
| **Autoriser les agents IA à lire ce coffre** | Chercher et lire, sauf les Pages du matin. Les autres en ont besoin. |
| **Organiser** | Étiqueter et classer les documents, réordonner les projets. |
| **Mettre à jour tâches et cartes** | Les marquer comme faites, fixer dates et priorités, déplacer et archiver les cartes. |
| **Modifier les notes** | Changer le texte des notes. Chaque modification enregistre une version nommée **AI edited**. |
| **Mettre des notes à la corbeille** | Une à la fois, et vous pouvez la restaurer. |
| **Créer** | Notes, dossiers, tableaux, cartes et plans vides ont chacun leur interrupteur. |
| **Proposer des fusions** | Planifier la fusion de coffres ou de notes répétées. |
| **Autoriser les agents à appliquer les plans** | Approuver un plan dans le chat de l’agent. |

Les agents ne peuvent jamais changer les mots d’un texte, écrire dans le journal ni supprimer quoi que ce soit définitivement. Rien n’est retiré en masse, sauf par un plan de fusion que vous approuvez.

<img src="/img/app/ai-vault-light.png" alt="Les interrupteurs d’un coffre dans Réglages → IA, groupés selon ce qu’ils permettent." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-vault-dark.png" alt="Les interrupteurs d’un coffre dans Réglages → IA, groupés selon ce qu’ils permettent." width="1600" height="1000" loading="lazy" decoding="async" />

## Fusionner des coffres à partir d’un plan

Demandez à un agent ou à Amanuensis de planifier une fusion. Rien ne change tant que vous ne l’approuvez pas. Les coffres sources ne changent pas, et lors d’une fusion dans un coffre existant, une version en est d’abord enregistrée.

- **Dans Amanuensis**, le plan apparaît dans la discussion. Faites vos choix puis choisissez **Appliquer** ou **Abandonner**.
- **Dans un agent externe**, il vous montre le plan dans son propre chat. Vous pouvez l’appliquer depuis la liste des plans du panneau Amanuensis, qui apparaît même si Amanuensis n’est pas configuré.
- **Pour l’approuver dans le chat de l’agent**, activez **Autoriser les agents à appliquer les plans** sur chaque coffre concerné. φ Poiesis doit être ouvert, et un nouveau coffre se place à côté du premier coffre source.

:::caution
Avec **Autoriser les agents à appliquer les plans** activé, l’autorisation de l’app est votre seul contrôle. Ne réglez pas cet outil sur toujours autoriser.
:::

<img src="/img/app/amanuensis-plan-light.png" alt="Un plan de fusion dans la discussion, avec ses chiffres, Abandonner et Appliquer." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/amanuensis-plan-dark.png" alt="Un plan de fusion dans la discussion, avec ses chiffres, Abandonner et Appliquer." width="1600" height="1000" loading="lazy" decoding="async" />

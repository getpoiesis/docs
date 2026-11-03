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

Tout est désactivé tant que vous ne l’activez pas. **Réglages → IA** liste vos coffres, et chacun a quatre niveaux, à un clic :

- **Non** : les agents ne voient pas le coffre.
- **Lire** : ils peuvent regarder, sans rien changer.
- **Aider** : ils peuvent aussi laisser des notes en marge, créer la bible de l’histoire, écrire de nouvelles notes dans votre boîte d’entrée et proposer des fusions.
- **Tout** : chaque interrupteur ci-dessous, y compris modifier les notes, la corbeille et appliquer les plans.

Les changements s’appliquent au prochain appel de l’agent, sans redémarrage. **Tous les coffres** les règle d’un coup, et demande d’abord si vous choisissez **Tout**. Pour un seul interrupteur, choisissez **Ajuster** à côté d’un coffre. **Permissions par défaut des autres coffres** s’applique à ceux qui n’ont pas les leurs.

| Interrupteur | Ce qu’il permet |
|---|---|
| **Autoriser les agents IA à lire ce coffre** | Chercher et lire, sauf le journal et les Pages du matin. Les autres en ont besoin. |
| **Organiser** | Étiqueter et classer les documents, réordonner les projets. |
| **Mettre à jour tâches et cartes** | Les marquer comme faites, fixer dates et priorités, déplacer et archiver les cartes. |
| **Modifier les notes** | Changer le texte des notes. Chaque modification enregistre une version nommée **AI edited**. |
| **Laisser des notes en marge** | Commenter un passage, y compris dans un texte, marqué **D’un agent**. Les mots ne changent jamais. |
| **Créer la bible de l’histoire** | Compléter les personnages, les entrées du monde et les synopsis de chapitres. Ce que vous avez écrit reste tel quel. |
| **Compléter les infos du livre** | Sous-titre, série, mots-clés, langue et description, s’ils sont vides. Jamais le titre, les personnes, les droits ni les ISBN. |
| **Modifier les cartes** | Changer le titre et les notes d’une carte. |
| **Mettre des notes à la corbeille** | Une à la fois, et vous pouvez la restaurer. |
| **Créer** | Notes, dossiers, tableaux, cartes et plans vides ont chacun leur interrupteur. |
| **Proposer des fusions** | Planifier la fusion de coffres ou de notes répétées. |
| **Autoriser les agents à appliquer les plans** | Approuver un plan dans le chat de l’agent. |

Les agents ne peuvent jamais changer les mots d’un texte, voir le journal ou les Pages du matin, ni supprimer quoi que ce soit définitivement. Rien n’est retiré en masse, sauf par un plan de fusion que vous approuvez.

<img src="/img/app/ai-vault-light.png" alt="Les interrupteurs d’un coffre dans Réglages → IA, groupés selon ce qu’ils permettent." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-vault-dark.png" alt="Les interrupteurs d’un coffre dans Réglages → IA, groupés selon ce qu’ils permettent." width="1600" height="1000" loading="lazy" decoding="async" />

## Ce que les agents peuvent consulter

Avec **Lire**, un agent peut lire un projet entier dans l’ordre, la fiche d’un personnage et chaque chapitre qui le nomme, vos lieux, votre histoire et vos événements, vos surlignages et notes de marge, et les versions passées d’un document. Il peut aussi voir vos mots par jour, compter les mots très utilisés et les phrases répétées, et trouver les points en suspens comme les liens cassés et les synopsis manquants. Il peut voir ce qu’une exportation rencontrerait, mais vous seul pouvez exporter.

Plusieurs changements de tâches peuvent tenir dans un seul plan, que vous appliquez en un clic.

Certaines apps proposent aussi des parcours tout prêts, comme une relecture de continuité ou une lettre d’éditeur. Ils utilisent les mêmes interrupteurs.

## Fusionner des coffres à partir d’un plan

Demandez à un agent ou à Ariadne de planifier une fusion. Rien ne change tant que vous ne l’approuvez pas. Les coffres sources ne changent pas, et lors d’une fusion dans un coffre existant, une version en est d’abord enregistrée.

- **Dans Ariadne**, le plan apparaît dans la discussion. Faites vos choix puis choisissez **Appliquer** ou **Abandonner**.
- **Dans un agent externe**, il vous montre le plan dans son propre chat. Vous pouvez l’appliquer depuis la liste des plans du panneau Ariadne, qui apparaît même si Ariadne n’est pas configuré.
- **Pour l’approuver dans le chat de l’agent**, activez **Autoriser les agents à appliquer les plans** sur chaque coffre concerné. φ Poiesis doit être ouvert, et un nouveau coffre se place à côté du premier coffre source.

:::caution
Avec **Autoriser les agents à appliquer les plans** activé, l’autorisation de l’app est votre seul contrôle. Ne réglez pas cet outil sur toujours autoriser.
:::

<img src="/img/app/ariadne-plan-light.png" alt="Un plan de fusion dans la discussion, avec ses chiffres, Abandonner et Appliquer." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-plan-dark.png" alt="Un plan de fusion dans la discussion, avec ses chiffres, Abandonner et Appliquer." width="1600" height="1000" loading="lazy" decoding="async" />

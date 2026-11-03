---
title: L’IA et votre vie privée
description: Ce que fait l’IA dans φ Poiesis, ce qui est envoyé et qui le reçoit.
---

# L’IA et votre vie privée

L’IA est désactivée tant que vous ne l’activez pas. D’ici là, rien sur l’IA n’apparaît dans l’app, sauf **Réglages → IA**.

## À quoi elle sert

[Ariadne](./ariadne.md) lit votre travail avec vous, répond aux questions, vérifie les faits et commente, et vous aide à organiser et à prendre des notes. Elle n’est pas faite pour écrire vos textes ou vos livres, et elle ne peut pas en changer les mots. Elle ne peut lancer un projet que sous forme de plan vide, et seulement si vous l’autorisez.

<img src="/img/app/ai-settings-off-light.png" alt="Réglages → IA avec l’IA désactivée et l’explication sur la vie privée en haut." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-settings-off-dark.png" alt="Réglages → IA avec l’IA désactivée et l’explication sur la vie privée en haut." width="1600" height="1000" loading="lazy" decoding="async" />

## Ce qui est envoyé

Vos messages, les noms du coffre et du document ouverts et ce qu’il lit pour vous répondre. Il n’envoie pas tout votre coffre. Les interrupteurs de chaque coffre décident de ce qu’il peut lire.

**Votre journal et vos Pages du matin ne sont jamais envoyés ni lus par une IA**, quoi que vous activiez.

## Qui le reçoit

Le fournisseur que vous avez choisi, directement, avec votre clé. φ Poiesis n’a aucun serveur entre les deux et ne voit rien. Ce que le fournisseur en fait relève de ses propres conditions : lisez-les. **Réglages → IA → L’IA et votre vie privée** renvoie aux conditions de ce que vous utilisez.

Avec un modèle local via Ollama, ce qu’il lit reste sur votre ordinateur.

Les [agents externes](./ai-agents.md) comme Claude ou Codex sont des apps indépendantes, et leurs propres conditions s’appliquent.

## Ce qui reste sur votre ordinateur

- **Les clés** sont enregistrées dans le stockage sécurisé du système, chacune sous son nom, comme `φ Poiesis: API key for Anthropic`. Si votre Mac a Touch ID, il demande la première fois qu’une clé sert.
- **Les discussions** sont enregistrées sur cet ordinateur, hors de vos coffres.

<img src="/img/app/ai-privacy-page-light.png" alt="La page L’IA et votre vie privée, ouverte depuis les Réglages." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-privacy-page-dark.png" alt="La page L’IA et votre vie privée, ouverte depuis les Réglages." width="1600" height="1000" loading="lazy" decoding="async" />

## Pour la désactiver

Dans **Réglages → IA**, choisissez **Désactiver**. Pour supprimer une clé du stockage du système, choisissez **Retirer la clé**. Ce qu’un fournisseur a déjà reçu relève de ses conditions.

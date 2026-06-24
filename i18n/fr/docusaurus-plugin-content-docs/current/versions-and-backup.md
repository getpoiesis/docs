---
title: Versions et sauvegarde
sidebar_position: 13
---

# Versions et sauvegarde

Votre écriture est enregistrée en continu, et φ conserve un historique pour que
vous puissiez revenir à n’importe quel brouillon antérieur. Rien ne quitte votre
Mac, à moins que vous ne configuriez vous-même un distant.

## Comment fonctionne l’enregistrement

Chaque modification est enregistrée automatiquement et vérifiée après chaque
écriture — vous n’appuyez jamais sur Enregistrer pour conserver votre travail.
(`⌘S` est là si vous le souhaitez, mais c’est rarement nécessaire.) La barre
d’état affiche **Enregistré** lorsque le fichier est sur le disque.

En plus de l’enregistrement, φ consigne des **versions** : des copies à un
instant donné que vous pouvez parcourir et restaurer.

## Deux types de version

- **Points de contrôle** — créés automatiquement à mesure que vous écrivez : à
  intervalle régulier, quand vous devenez inactif et quand vous quittez un
  document. Ils capturent votre progression sans aucun effort de votre part.
- **Instantanés** — des versions nommées que vous créez volontairement pour
  marquer un jalon (la fin d’un chapitre, un brouillon terminé). Appuyez sur
  `⌘⇧S`, ou utilisez **Enregistrer une version…** depuis la palette de commandes
  (`⌘P`), et donnez-lui un nom.

## Le panneau d’historique des versions

Ouvrez-le avec `⌘]` (ou l’icône d’horloge dans la barre supérieure) pour voir
l’historique de ce document, regroupé par jour — Aujourd’hui, Hier, et ainsi de
suite.

- **Parcourir** — cliquez sur n’importe quelle version pour prévisualiser son
  contenu complet dans la zone d’édition. Filtrez par type (Toutes, Instantanés,
  Points de contrôle, Restaurations) ou recherchez par nom.
- **Voir ce qui a changé** — une version ouverte, choisissez **Afficher les
  changements** pour voir une comparaison avec la version actuelle. Vous pouvez
  régler la précision avec laquelle les changements sont mis en évidence dans
  **Réglages → Éditeur → Versions**.
- **Restaurer** — ramener une version antérieure comme document actif. Votre
  contenu actuel est d’abord enregistré comme nouvelle version, donc rien n’est
  jamais perdu.

## Instantanés natifs vs git

Chaque coffre a son propre **backend** de versionnage, choisi dans **Réglages →
Versions** :

- **Natif** — instantanés locaux stockés à côté de votre coffre. Aucun git
  requis ; fonctionne d’emblée. Il existe une limite d’historique par document
  (les anciens instantanés sont élagués pour limiter l’usage du disque), que vous
  pouvez ajuster.
- **Git** — historique complet et illimité, plus la possibilité de sauvegarder
  hors de la machine. Choisissez cette option si vous êtes à l’aise avec git.

**Si git n’est pas installé**, φ reste en mode Natif et vous le signale — le
versionnage continue de fonctionner, vous n’avez simplement pas l’historique
illimité de git ni la sauvegarde distante. La barre d’état affiche **git
indisponible** dans ce cas. Installez git pour débloquer ces fonctionnalités.

> Basculer un coffre vers git exécute `git init` et valide des commits selon une
> planification. Pour revenir au mode Natif plus tard, vous devez supprimer
> vous-même le dossier `.git` dans le Finder. Consultez les notes de la boîte de
> dialogue de conversion avant de basculer.

## Sauvegarde hors machine avec un distant git

Avec le backend git, vous pouvez pousser votre historique vers votre propre
distant (GitHub, GitLab ou tout hébergeur git) afin qu’une copie réside ailleurs
que sur votre Mac. Dans **Réglages → Versions → Sauvegarde git** :

- Définissez une **URL du distant de sauvegarde** vers laquelle pousser.
- Activez le **Push automatique des sauvegardes** pour pousser les nouveaux
  commits à intervalle régulier, ou appuyez sur **Sauvegarder maintenant**
  (également **Sauvegarder maintenant** dans la palette de commandes) pour
  pousser à la demande.
- Vous pouvez aussi définir un **nom/e-mail de commit** dédié et un **chemin de
  clé SSH** afin que ce travail reste hors de votre compte principal, et
  **signer les commits** pour obtenir un badge Vérifié.

Utilisez un dépôt privé et une identité dédiée pour cela.

## Un coffre n’est que des fichiers

Parce qu’un coffre est un simple dossier de fichiers `.poiesis` (avec un dossier
`assets/` et l’historique des versions), n’importe quelle méthode de sauvegarde
en laquelle vous avez déjà confiance fonctionne aussi — Time Machine, un dossier
synchronisé sur le cloud ou une copie manuelle. Le versionnage de φ est une
option, pas la seule.

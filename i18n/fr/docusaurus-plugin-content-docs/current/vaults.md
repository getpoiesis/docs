---
title: Coffres
sidebar_position: 3
---

# Coffres

Un **coffre** est l'endroit où vit votre écriture. C'est un dossier ordinaire sur
votre ordinateur qui contient vos documents, les images que vous avez ajoutées et un
historique des versions. Pas de base de données, pas de cloud — juste des fichiers
dans un dossier que vous avez choisi.

Parce qu'un coffre n'est que de simples fichiers, votre travail vous appartient :
vous pouvez le sauvegarder, le déplacer vers une autre machine, l'ouvrir dans
vingt ans, ou jeter un œil dans le dossier avec le Finder. Rien ne quitte votre
ordinateur tant que vous n'avez pas configuré vous-même une sauvegarde.

## Ce qu'il y a dans un coffre

Ouvrez un dossier de coffre dans le Finder et vous y verrez :

- **Des fichiers `.poiesis`** — un par document. Chacun est un petit fichier JSON
  qui contient votre texte et ses métadonnées (titre, étiquettes, date de
  création, et ainsi de suite).
- **`assets/`** — les images que vous insérez y sont copiées, de sorte qu'un
  coffre est autonome. Déplacez le dossier et vos images se déplacent avec lui.
- **Un historique des versions** — chaque modification fait l'objet d'un point de
  contrôle afin que vous puissiez revenir à un brouillon antérieur. (Voyez
  [Versions et sauvegarde](versions-and-backup.md).)
- Un petit fichier marqueur qui nomme le coffre.

Vous n'avez jamais à gérer cela à la main. φ les crée et les entretient pour vous.

## Créer ou ouvrir un coffre

La première fois que vous lancez φ, l'application vous demande de choisir où vit
votre écriture. Vous avez deux options :

- **Créer un coffre** — choisissez (ou créez) un dossier vide, et φ y met en place
  la structure du coffre et y dépose une courte note de bienvenue pour vous
  lancer.
- **Ouvrir un dossier** — pointez φ vers n'importe quel dossier. S'il contient
  déjà des fichiers `.poiesis`, ils apparaissent ; sinon, il devient un coffre
  neuf.

Vous choisissez l'emplacement avec le sélecteur de dossier standard de macOS,
ainsi un coffre peut se trouver où vous voulez — `~/Documents`, un dossier
synchronisé avec iCloud, un disque externe, où que cela vous convienne.

Vous pouvez faire de même plus tard depuis le menu :

- **Fichier → Ouvrir un coffre…** (`⌘⇧O`) pour ajouter un autre dossier et y
  basculer.
- **Fichier → Changer de coffre…** pour passer d'un coffre déjà ajouté à un autre.

## Plusieurs coffres et bascule

Vous pouvez garder plus d'un coffre — par exemple un pour un roman et un pour les
notes quotidiennes — et passer librement de l'un à l'autre. Un seul est actif à la
fois.

**Sélecteur de la barre d'état.** Le nom du coffre actif apparaît comme un
sélecteur dans l'interface. Cliquez dessus pour voir tous vos coffres, basculer
vers l'un d'eux (une coche marque le coffre actif), ou en ajouter un nouveau avec
**Ouvrir un coffre…** ou **Créer un coffre…**. **Retirer le coffre** (l'icône
corbeille) sort un coffre de la liste — cela ne supprime **aucun** fichier sur le
disque ; le dossier reste exactement où il est.

**Réglages.** Les mêmes commandes se trouvent dans **Réglages → Coffre** (`⌘,`),
qui affiche aussi le chemin complet du coffre actif sur le disque et vous permet
d'ouvrir, de créer ou de retirer un coffre.

Changer de coffre recharge la barre latérale, la recherche et tout le reste pour
ce dossier. Chaque coffre est indépendant — ses propres documents, son propre
historique.

## Sauvegarder et déplacer

Puisqu'un coffre n'est qu'un dossier, la sauvegarde la plus simple est celle que
vous connaissez déjà : copier le dossier. Time Machine, un disque synchronisé ou
une copie manuelle fonctionnent tous, car il n'y a rien de spécial à exporter.

Pour déplacer un coffre, déplacez ou copiez le dossier, puis pointez φ vers le
nouvel emplacement avec **Ouvrir un coffre…**. Vos documents, vos images et votre
historique voyagent ensemble.

> φ peut aussi sauvegarder l'historique des versions d'un coffre sur votre propre
> distant git selon un calendrier, entièrement sous votre contrôle. C'est traité
> dans [Versions et sauvegarde](versions-and-backup.md).

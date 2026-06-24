---
title: Introduction
sidebar_position: 1
slug: /
---

# Bienvenue dans φ

φ est une application d'écriture pensée pour la durée — manuscrits, poésie,
essais, et les notes qui les nourrissent. Elle est d'abord conçue pour le
**métier d'écrire** : une page calme et pleine largeur, un serif où l'on se sent
chez soi, et une structure qui reste discrète jusqu'à ce que vous en ayez besoin.

:::warning φ est en alpha

Vous utilisez un logiciel à un stade précoce. Le cœur — écrire, organiser,
versionner et garder votre travail en sécurité dans de simples fichiers — est
solide et utilisé au quotidien. Mais attendez-vous à des aspérités, des bogues
occasionnels et des fonctionnalités qui se stabilisent encore.

**Le point faible aujourd'hui, c'est l'export** — la conversion de votre travail
en fichiers EPUB, PDF ou Word. Il est en développement actif et c'est la partie
la plus susceptible de nécessiter un nettoyage dans l'application cible. Traitez
les fichiers exportés comme des brouillons et relisez-les. Voyez
[Exporter et imprimer](exporting.md) pour savoir à quoi vous attendre.

Votre écriture elle-même n'est jamais en danger : les documents sont de simples
fichiers, enregistrés en continu et vérifiés, avec un historique des versions que
vous pouvez restaurer.

:::

## Ce qui rend φ différent

**Votre écriture vous appartient.** Tout vit dans de simples fichiers sur votre
propre Mac, dans un dossier que vous choisissez. Pas de compte, pas de cloud, et
aucun réseau requis pour écrire, modifier, rechercher ou exporter. Fermez
l'application, ouvrez le dossier, et votre travail est là.

**Local d'abord, durable par conception.** Chaque document est enregistré
automatiquement et vérifié après chaque écriture. φ conserve un historique des
versions pour que vous puissiez revenir à un brouillon antérieur, et il peut
sauvegarder cet historique sur votre propre distant git si vous le souhaitez,
hors de votre machine — mais rien ne quitte votre ordinateur tant que vous ne
l'avez pas configuré.

**Un outil, deux modes.** φ est d'abord un éditeur de manuscrits et ensuite une
application de prise de notes, et les deux partagent les mêmes fondations. Écrivez
un livre dans les *Collections*, tenez un journal quotidien, reliez des idées avec
des `[[liens-wiki]]`, et regardez-les se connecter dans le graphe — le tout au
même endroit, dans un seul coffre.

**Discret par défaut.** Le mode concentration masque tout élément d'interface. Le
défilement machine à écrire garde votre ligne centrée. L'interface s'efface pour
que la page soit l'essentiel.

## Ce que φ n'est pas

- **Pas un service cloud.** Il n'y a ni serveurs ni comptes de synchronisation. La
  sauvegarde et la portabilité reposent sur les fichiers et git, sous votre
  contrôle.
- **Pas un outil de collaboration en temps réel.** φ est par conception une
  application à un seul auteur.
- **Pas natif Markdown.** Les documents sont stockés sous forme de contenu
  structuré (JSON ProseMirror) afin que les éléments riches — annotations, notes
  de bas de page, citations, blocs personnalisés — survivent aux aller-retours.
  Vous pouvez tout de même *importer* et *exporter* du Markdown librement.

## Comment l'écriture est stockée

Chaque document est un fichier `.poiesis` : une petite enveloppe JSON autour de
votre texte et de ses métadonnées. Un **coffre** n'est qu'un dossier de ces
fichiers (plus un dossier `assets/` pour les images et un historique des
versions). Parce que tout n'est que de simples fichiers dans un dossier normal,
votre écriture est facile à sauvegarder, à déplacer et à conserver pendant des
décennies.

## Où aller ensuite

Nouveau ici ? Commencez par [Premiers pas](getting-started.md) — vous installerez
φ, créerez votre premier coffre et écrirez votre première page en quelques
minutes.

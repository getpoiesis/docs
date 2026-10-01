---
title: Introduction
slug: /
---

# Bienvenue dans φ

φ est une application d'écriture pensée pour la durée — manuscrits, poésie,
essais, et les notes qui les nourrissent. Elle est d'abord conçue pour le
**métier d'écrire** : une page calme et pleine largeur, un serif où l'on se sent
chez soi, et une structure qui reste discrète jusqu'à ce que vous en ayez besoin.

<img src="/img/app/write-home-light.png" alt="Écrire : le travail en cours, les projets et le mois qui les précède" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/write-home-dark.png" alt="Écrire : le travail en cours, les projets et le mois qui les précède" width="1600" height="1000" loading="lazy" decoding="async" />

:::warning φ est en alpha

Vous utilisez un logiciel à un stade précoce. Le cœur — écrire, organiser,
versionner et garder votre travail en sécurité dans de simples fichiers — est
solide et utilisé au quotidien. Mais attendez-vous à des aspérités, des bogues
occasionnels et des fonctionnalités qui se stabilisent encore.

**Le point faible aujourd'hui, c'est l'export** — la conversion de votre travail
en fichiers EPUB, PDF ou Word. Il est en développement actif et c'est la partie
la plus susceptible de nécessiter un nettoyage dans l'application cible. Traitez
les fichiers exportés comme des brouillons et relisez-les. Voir
[Exporter et imprimer](exporting.md) pour savoir à quoi vous attendre.

Votre écriture elle-même n'est jamais en danger : les documents sont de simples
fichiers, enregistrés en continu et vérifiés, avec un historique des versions que
vous pouvez restaurer.

:::

## Ce qui rend φ différent {#what-makes-φ-different}

**Votre écriture vous appartient.** Tout vit dans de simples fichiers sur votre
propre ordinateur, dans un dossier que vous choisissez. φ fonctionne sous macOS,
Windows et Linux, et il n'y a ni compte, ni cloud, ni réseau requis pour écrire,
modifier, rechercher ou exporter. Fermez l'application, ouvrez le dossier : votre
travail est là.

**Local d'abord, durable par conception.** Chaque document est enregistré
automatiquement et vérifié après chaque écriture. φ conserve un historique des
versions pour que vous puissiez revenir à n'importe quel brouillon antérieur, et
peut sauvegarder cet historique sur votre propre dépôt git distant si vous le
voulez hors de la machine — mais rien ne quitte votre ordinateur à moins que vous
ne le configuriez.

**Trois modes, un coffre.** φ est d'abord un éditeur de manuscrits, avec un
carnet et un journal à ses côtés, et les trois partagent les mêmes fondations.
Écrivez un livre comme **projet** dans *Écrire*, gardez idées et sources dans
*Notes*, tenez une entrée quotidienne et des pages du matin dans *Journal*, liez
ce que vous voulez avec des `[[wiki-links]]`, et regardez le tout se connecter
dans le graphe — en un seul endroit, un seul coffre.

**Discrète par défaut.** **Sanctuaire** (`⌘.`) masque tout sauf la page et
estompe tout sauf la phrase où vous êtes, pour que les mots devant vous soient la
seule chose éclairée. Le défilement machine à écrire garde votre ligne centrée.
L'interface s'efface pour que la page soit l'essentiel.

## Ce que φ n'est pas {#what-φ-is-not}

- **Pas un service cloud.** Il n'y a ni serveurs ni comptes de synchronisation.
  La sauvegarde et la portabilité reposent sur des fichiers et sur git, sous
  votre contrôle.
- **Pas un outil de collaboration en temps réel.** φ est, par conception, une
  application pour un seul auteur.
- **Pas natif Markdown.** Les documents sont stockés sous forme de contenu
  structuré (JSON ProseMirror) pour que les éléments riches — annotations, notes
  de bas de page, citations, blocs personnalisés — survivent aux allers-retours.
  Vous pouvez tout de même *importer*, *coller* et *exporter* du Markdown
  librement.

## Comment l'écriture est stockée {#how-writing-is-stored}

Chaque document est un fichier `.poiesis` : une petite enveloppe JSON autour de
votre texte et de ses métadonnées. Un **coffre** n'est qu'un dossier de ces
fichiers, plus quelques éléments que φ garde à côté :

- un dossier `assets/` pour les images que vous ajoutez,
- un dossier `.trash/` pour ce que vous supprimez,
- un petit fichier marqueur, `.poiesis-vault.json`, qui nomme le coffre,
- et son historique des versions — dans `.poiesis-history/`, ou dans un dépôt
  git si vous passez à git.

Comme tout n'est que de simples fichiers dans un dossier ordinaire, votre
écriture est facile à sauvegarder, à déplacer et à conserver pendant des
décennies. φ pour iPhone et iPad peut aussi ouvrir le même coffre. Voir
[Coffres](vaults.md) pour en savoir plus.

## Par où continuer {#where-to-go-next}

Vous débutez ? Commencez par [Premiers pas](getting-started.md) — vous
installerez φ, créerez votre premier coffre et écrirez votre première page en
quelques minutes. Ensuite, [Se repérer dans φ](finding-your-way.md) vous fait
découvrir la fenêtre.

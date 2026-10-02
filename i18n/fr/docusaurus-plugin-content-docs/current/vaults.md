---
title: Coffres
description: Les dossiers où vit votre écriture, comment passer de l’un à l’autre, et comment utiliser un coffre sur plusieurs appareils.
---

# Coffres

Un **coffre** est l’endroit où vit votre écriture : un dossier ordinaire sur
votre ordinateur, qui contient vos documents, les images que vous avez ajoutées
et leur historique. Pas de base de données, pas de compte. Comme un coffre est
un dossier ordinaire, votre travail vous appartient : vous pouvez le
sauvegarder, le déplacer et le synchroniser sur vos autres appareils.

Vos documents sont des fichiers `.poiesis`, le format propre de φ : les autres
applications ne peuvent donc pas les ouvrir directement. Pour emmener votre
écriture ailleurs, exportez-la : Markdown, Word, PDF et EPUB sont tous à un clic
(voir [Exporter et imprimer](./exporting)).

## Créer un coffre {#make-a-vault}

1. La première fois que vous ouvrez φ, choisissez **Créer un coffre** ou
   **Ouvrir un dossier**. Plus tard, cliquez sur le nom du coffre en haut de la
   barre latérale et choisissez **Nouveau coffre…** ou **Ouvrir un autre
   coffre…**.
2. Choisissez un dossier, ou créez-en un nouveau, dans la fenêtre qui s’ouvre.
   Il peut se trouver n’importe où : Documents, un dossier synchronisé, un
   disque externe.
3. φ l’ouvre. Un dossier qui est déjà un coffre s’ouvre tel quel. Tout autre
   dossier en devient un, avec une note **Welcome to φ** et un petit projet
   d’exemple, **The Grey Morning**. Rien de ce qui se trouve déjà dans le
   dossier n’est modifié, et les fichiers `.poiesis` qu’il contient apparaissent
   dans φ.

## Ce que contient un dossier de coffre {#whats-in-a-vault-folder}

| Dans le dossier | Ce que c’est |
| --- | --- |
| Fichiers `.poiesis` | Vos documents, un fichier chacun. |
| `assets` | Les images que vous ajoutez sont copiées ici, pour que le coffre soit complet à lui seul. |
| `.trash` | Les documents que vous supprimez, jusqu’à ce que vous les restauriez depuis la **Corbeille** au pied de la barre latérale. Ce qui y reste est supprimé définitivement au bout de 30 jours. |
| `.poiesis-history` ou `.git` | L’historique des versions (voir [Versions et sauvegarde](./versions-and-backup)). |
| `.poiesis-vault.json` | Un petit fichier qui nomme le coffre et retient ses réglages. |

Les noms qui commencent par un point sont masqués dans la plupart des
gestionnaires de fichiers. Vous n’avez jamais à toucher à tout cela : φ s’en
occupe.

## Passer d’un coffre à l’autre {#switch-between-vaults}

Vous pouvez garder plusieurs coffres, disons un pour un roman et un pour les
notes quotidiennes. Un seul est ouvert à la fois, et chacun a ses propres
documents, son historique et ses [réglages d’écriture](./setup).

- **Le menu du coffre.** Cliquez sur le nom du coffre en haut de la barre
  latérale. Il liste vos coffres, chacun avec l’endroit où il se trouve
  (**Local**, iCloud, Dropbox, Google Drive ou OneDrive), puis **Ouvrir un autre
  coffre…**, **Nouveau coffre…**, **Afficher dans le Finder** (**Afficher dans
  l’Explorateur de fichiers** sous Windows) et **Importer…**.
- **Le sélecteur de coffres.** **Fichier** → **Changer de coffre…** (`⌥⌘O`)
  ouvre une courte liste : tapez pour la filtrer et appuyez sur Entrée. Le
  coffre où vous êtes est marqué **ici**.
- **Fichier** → **Ouvrir un coffre…** (`⇧⌘O`) ouvre un dossier comme coffre.

Pour choisir les modes d’un coffre, allez dans **Réglages** (`⌘,`) → **Coffre**
→ **Espaces** et cochez **Écrire**, **Notes** ou **Journal** ; au moins un reste
activé. Un coffre avec un seul mode n’affiche aucun sélecteur de mode.
**S’ouvre sur** choisit où le coffre démarre : son **Accueil**, ou l’un de ses
modes.

## Déplacer du travail vers un autre coffre {#move-work-to-another-vault}

**Un document.** Choisissez **Déplacer vers un coffre…** dans le menu **⋮** du
document, ou faites un clic droit dessus dans une liste. Choisissez le coffre ;
un coffre qui n’a pas le mode du document est affiché mais ne peut pas être
choisi. φ liste les documents qui lui sont liés (ses recherches, ce vers quoi il
renvoie, ce qui renvoie vers lui), cochés pour partir avec lui. Avant le
déplacement, il vous dit ce qui reste derrière : le projet qu’il quitte, ses
cartes sur les tableaux, les personnages qu’il mentionne (leurs noms restent
dans le texte) et son historique des versions.

**Un projet.** Choisissez **Déplacer vers un coffre…** dans le menu **⋮** du
projet. Le projet part entier, avec ses parties et chapitres dans l’ordre, son
objectif, sa couverture et son icône, et les personnages qui lui sont propres.
Cochez si ses pages de recherche, ses tableaux et les autres personnages
mentionnés dans ses chapitres (en copie) partent aussi.

Ensuite, un résumé liste ce qui a été déplacé. Rien n’est écrasé dans l’autre
coffre : un fichier dont le nom y est déjà pris est renommé. Les originaux vont
dans la **Corbeille** de ce coffre, pour que vous puissiez changer d’avis.

**Un coffre entier.** Pour fondre ce coffre dans un autre, choisissez
**Fusionner dans un autre coffre…** dans le menu du coffre. Chaque document,
projet, tableau, personnage, auteur et modèle part, avec ses images. Les
dossiers gardent leur place ; un dossier dont le nom est déjà pris là-bas reçoit
le nom de ce coffre après le sien. Rien n’est retiré ici. Une fois terminé, vous
pouvez garder l’ancien coffre ou choisir **Retirer «  …  »**. Son historique des
versions reste avec son dossier.

## Utiliser un coffre sur plusieurs appareils {#use-a-vault-on-several-devices}

1. Placez le coffre dans un dossier que vos appareils partagent : iCloud Drive,
   Dropbox, Google Drive, Mega, OneDrive ou un lecteur réseau. Pour déplacer un
   coffre existant, quittez φ, déplacez son dossier là-bas, puis rouvrez-le avec
   **Ouvrir un autre coffre…**.
2. Sur chaque ordinateur, ouvrez ce dossier avec **Ouvrir un autre coffre…**. φ
   pour iPhone et iPad arrive bientôt et ouvrira le même dossier.
3. Écrivez n’importe où. φ remarque en quelques instants les changements faits
   sur vos autres appareils et met à jour la liste et le document ouvert de
   lui-même.

Si le dossier du coffre disparaît, parce qu’un disque est débranché ou qu’un
dossier cloud est hors ligne, φ indique **Impossible d'accéder à «  …  »** et
garde ce que vous tapez, pour l’enregistrer dès que le dossier revient. Sur un
Mac, les documents qu’iCloud ne garde que dans le cloud sont téléchargés quand
φ les voit ; ils peuvent donc mettre un instant à apparaître.

### Quand deux appareils modifient le même document {#when-two-devices-change-the-same-document}

φ n’écrase jamais les changements d’un appareil avec ceux d’un autre. Si un
document a changé sur deux appareils avant qu’ils ne se synchronisent, le
document garde une version et l’autre est mise de côté. Une ligne au-dessus de
la page indique **Une version de** cet appareil **attend**, et la ligne du
document dans la liste porte une petite marque.

1. Appuyez sur **Comparer**. La version en attente s’ouvre à côté du document
   tel qu’il est maintenant, avec les différences marquées ; basculez entre
   **Côte à côte** et **Dans le contenu**.
2. Choisissez **Garder celle-ci** pour que la version en attente devienne le
   document, **Garder l’actuelle** pour l’abandonner, ou **Garder les deux**
   pour la conserver comme document séparé nommé «  *titre* (conflicted copy)  ».

Si plusieurs versions attendent, elles viennent une à une, la plus ancienne
d’abord. N’importe lequel de vos appareils peut les régler.

:::note L’historique git reste sur chaque ordinateur

Si le coffre utilise git pour son historique, φ garde l’historique git sur
chaque ordinateur, en dehors du dossier synchronisé, car un service de
synchronisation qui le copie fichier par fichier peut le casser. Voir
[Versions et sauvegarde](./versions-and-backup).

:::

## Retirer un coffre {#remove-a-vault}

Ouvrez le coffre, puis allez dans **Réglages** → **Coffre** → **Gérer** →
**Retirer le coffre…** et choisissez :

- **Dissocier (conserver le dossier)** : φ oublie le coffre et laisse le
  dossier exactement où il est. Vous pouvez le rouvrir à tout moment.
- **Déplacer vers la corbeille** : φ oublie le coffre et déplace tout le dossier
  dans la corbeille de votre ordinateur, où vous pouvez encore le récupérer tant
  que vous ne l’avez pas vidée.

Si c’était votre dernier coffre, φ revient à l’écran de bienvenue.

## Voir aussi {#see-also}

- [Versions et sauvegarde](./versions-and-backup)
- [Importer](./importing) : faites entrer l’écriture d’autres applications.
- [Réglages d’écriture](./setup) : ce que chaque coffre affiche.

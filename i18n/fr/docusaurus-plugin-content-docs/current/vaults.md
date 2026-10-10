---
title: Coffres
description: Les dossiers où se trouvent vos textes, comment passer de l’un à l’autre et comment utiliser un coffre sur plusieurs appareils.
---

# Coffres

Un **coffre** est l’endroit où se trouvent vos textes. C’est un dossier
ordinaire de votre ordinateur. Il contient vos documents, les images que vous
avez ajoutées et l’historique de vos modifications. Il n’y a ni base de
données ni compte.

Comme un coffre est un dossier ordinaire, vous pouvez le sauvegarder, le
déplacer et le synchroniser avec vos autres appareils.

Vos documents sont des fichiers `.poiesis`. C’est le format propre à φ Poiesis : les
autres applications ne peuvent donc pas les ouvrir directement. Pour utiliser
vos textes dans une autre application, exportez-les en Markdown, Word, PDF ou
EPUB. Voir [Comment fonctionne l’export](./exporting.md).

## Créer un coffre {#make-a-vault}

1. La première fois que vous ouvrez Poiesis, choisissez **Créer un coffre** ou
   **Ouvrir un dossier**. Par la suite, cliquez sur le nom du coffre, en haut
   de la barre latérale, et choisissez **Nouveau coffre…** ou **Ouvrir un
   autre coffre…**.
2. Dans la fenêtre qui s’ouvre, choisissez un dossier ou créez-en un. Il peut
   se trouver n’importe où : dans Documents, dans un dossier synchronisé, sur
   un disque externe.
3. Poiesis ouvre le dossier.

La suite dépend du dossier :

- Si le dossier est déjà un coffre, Poiesis l’ouvre tel quel.
- S’il s’agit de n’importe quel autre dossier, Poiesis en fait un coffre. Il y
  ajoute une note **Welcome to φ** et un petit projet d’exemple, **The Grey
  Morning**. Il ne modifie rien de ce qui se trouve déjà dans le dossier. Si
  le dossier contient des fichiers `.poiesis`, ils apparaissent dans Poiesis.

## Ce que contient le dossier d’un coffre {#whats-in-a-vault-folder}

| Dans le dossier | Ce que c’est |
| --- | --- |
| Fichiers `.poiesis` | Vos documents, à raison d’un fichier par document. |
| `assets` | Les images que vous ajoutez sont copiées ici : le coffre se suffit ainsi à lui-même. |
| `.trash` | Les documents que vous supprimez, tant que vous ne les restaurez pas depuis la **Corbeille**, tout en bas de la barre latérale. Ce qui y reste est supprimé définitivement au bout de 30 jours. |
| `.poiesis-history` ou `.git` | L’historique des versions (voir [Versions et sauvegarde](./versions-and-backup.md)). |
| `.poiesis-vault.json` | Un petit fichier qui donne son nom au coffre et retient ses réglages. |

La plupart des gestionnaires de fichiers masquent les noms qui commencent par
un point. Vous n’avez jamais besoin de modifier ces fichiers vous-même : Poiesis
s’en occupe.

## Passer d’un coffre à l’autre {#switch-between-vaults}

Vous pouvez avoir plusieurs coffres, par exemple un pour un roman et un pour
vos notes quotidiennes. Un seul coffre est ouvert à la fois. Chaque coffre a
ses propres documents, son historique et ses
[réglages d’écriture](./setup.md).

<img src="/img/app/vault-menu-light.png" alt="Le menu du coffre ouvert en haut de la barre latérale" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/vault-menu-dark.png" alt="Le menu du coffre ouvert en haut de la barre latérale" width="1600" height="1000" loading="lazy" decoding="async" />

Il existe trois façons de changer de coffre :

- **Le menu du coffre.** Cliquez sur le nom du coffre, en haut de la barre
  latérale. Le menu affiche la liste de vos coffres. Pour chacun, il indique
  où il est conservé : **Local**, iCloud, Dropbox, Google Drive ou OneDrive.
  Sous les coffres se trouvent **Ouvrir un autre coffre…**, **Nouveau
  coffre…**, **Afficher dans le Finder** (**Afficher dans l’Explorateur de
  fichiers** sur Windows) et **Importer…**.
- **Le sélecteur de coffres.** Choisissez **Fichier** → **Changer de
  coffre…** (`⌥⌘O`). Une courte liste s’ouvre. Tapez pour la réduire, puis
  appuyez sur Entrée. Le coffre où vous vous trouvez porte la mention
  **ici**.
- **Ouvrir un coffre.** Choisissez **Fichier** → **Ouvrir un coffre…**
  (`⇧⌘O`) pour ouvrir un dossier en tant que coffre.

### Choisir les modes d’un coffre {#choose-a-vaults-modes}

Poiesis compte trois modes : **Écrire**, **Notes** et **Journal**. Pour choisir
ceux dont dispose un coffre :

1. Ouvrez les **Réglages** (`⌘,`).
2. Allez dans **Coffre** → **Espaces**.
3. Cochez **Écrire**, **Notes** ou **Journal**. Au moins un mode doit rester
   activé.

Un coffre qui n’a qu’un seul mode n’affiche pas de sélecteur de mode. Sur le
même écran, **S’ouvre sur** détermine ce que le coffre affiche à l’ouverture :
son **Accueil** ou l’un de ses modes.

## Déplacer du travail vers un autre coffre {#move-work-to-another-vault}

Vous pouvez déplacer un seul document, un projet entier ou un coffre entier.

### Un document {#a-document}

1. Choisissez **Déplacer vers un coffre…** dans le menu ⋮ du document.
   Vous pouvez aussi faire un clic droit sur le document dans une liste.
2. Choisissez le coffre. Un coffre qui n’a pas le mode du document apparaît,
   mais vous ne pouvez pas le choisir.
3. Poiesis affiche la liste des documents liés à celui-ci : ses recherches, les
   documents vers lesquels il renvoie et ceux qui renvoient vers lui. Ils
   sont cochés, ce qui signifie qu’ils partent avec lui. Décochez ceux qui
   doivent rester.
4. Lisez ce qui reste sur place, puis déplacez le document.

Voici ce qui reste sur place : le projet dont le document faisait partie, ses
cartes sur les tableaux, les personnages qu’il mentionne (leurs noms restent
dans le texte) et son historique des versions.

### Un projet {#a-project}

1. Choisissez **Déplacer vers un coffre…** dans le menu **⋮** du projet.
2. Cochez ce qui doit partir aussi : ses pages de recherche, ses tableaux et
   les autres personnages que ses chapitres mentionnent. Ces personnages
   partent sous forme de copies.

Le projet part en entier : ses parties et ses chapitres dans l’ordre, son
objectif, sa couverture et son icône, ainsi que les personnages qui
n’appartiennent qu’à lui.

### Après le déplacement d’un document ou d’un projet {#after-a-document-or-project-moves}

- Un récapitulatif indique ce qui a été déplacé.
- Rien n’est écrasé dans l’autre coffre. Si un nom de fichier y est déjà
  pris, Poiesis renomme le fichier qui arrive.
- Les originaux vont dans la **Corbeille** de ce coffre : vous pouvez donc
  encore les récupérer.

### Un coffre entier {#a-whole-vault}

Pour verser tout le contenu de ce coffre dans un autre, choisissez
**Fusionner dans un autre coffre…** dans le menu du coffre.

- Tous les documents, projets, tableaux, personnages, auteurs et modèles
  partent, avec leurs images.
- Les dossiers gardent leur place. Si un nom de dossier est déjà pris dans
  l’autre coffre, Poiesis y ajoute le nom de ce coffre-ci.
- Rien n’est retiré de ce coffre.
- L’historique des versions ne part pas. Il reste avec le dossier de ce
  coffre.

Une fois la fusion terminée, vous pouvez garder l’ancien coffre ou choisir
**Retirer « … »**.

## Utiliser un coffre sur plusieurs appareils {#use-a-vault-on-several-devices}

1. Placez le coffre dans un dossier que vos appareils partagent : iCloud
   Drive, Dropbox, Google Drive, Mega, OneDrive ou un lecteur réseau. Pour
   déplacer un coffre que vous avez déjà, quittez Poiesis, déplacez son dossier à
   cet endroit, puis rouvrez-le avec **Ouvrir un autre coffre…**.
2. Sur chaque ordinateur, ouvrez ce dossier avec **Ouvrir un autre
   coffre…**. Poiesis pour iPhone et iPad n’est pas encore sorti. Quand il le sera,
   il ouvrira le même dossier.
3. Écrivez sur l’appareil de votre choix. Au bout d’un court instant, Poiesis
   détecte les modifications faites sur vos autres appareils. Il met à jour
   de lui-même la liste et le document ouvert.

**Si Poiesis ne trouve pas le dossier.** Cela arrive quand un disque est débranché
ou qu’un dossier cloud est hors ligne. Poiesis indique **Impossible d’accéder à**
ce coffre. Il conserve ce que vous tapez et l’enregistre dès que le dossier
est de nouveau accessible.

**Si les documents tardent à apparaître sur un Mac.** iCloud ne garde
certains documents que dans le cloud. Poiesis les télécharge quand il les voit :
ils peuvent donc mettre un petit moment à apparaître.

### Quand deux appareils modifient le même document {#when-two-devices-change-the-same-document}

Poiesis ne remplace jamais les modifications d’un appareil par celles d’un autre.
Il arrive qu’un document soit modifié sur deux appareils avant qu’ils ne se
synchronisent. Dans ce cas, le document garde l’une des versions, et Poiesis
conserve l’autre pour que vous puissiez l’examiner. Une ligne au-dessus de la
page indique **Une version de** cet appareil **attend**. Dans la liste, la
ligne du document porte une petite marque.

1. Cliquez sur **Comparer**. La version en attente s’ouvre à côté du document
   actuel, et les différences sont signalées. Vous pouvez passer de **Côte à
   côte** à **Dans le contenu**.
2. Choisissez une option :
   - **Garder celle-ci** : la version en attente devient le document.
   - **Garder l’actuelle** : le document reste tel qu’il est, et la version
     en attente est abandonnée.
   - **Garder les deux** : la version en attente est conservée comme un
     document distinct, nommé « *titre* (conflicted copy) ».

Si plusieurs versions sont en attente, Poiesis vous les présente une par une, de
la plus ancienne à la plus récente. Vous pouvez le faire sur n’importe lequel
de vos appareils.

:::note L’historique git reste sur chaque ordinateur

Si le coffre utilise git pour son historique, Poiesis conserve l’historique git
sur chaque ordinateur, en dehors du dossier synchronisé. Un service de
synchronisation copie l’historique fichier par fichier, ce qui peut
l’endommager. Voir [Versions et sauvegarde](./versions-and-backup.md).

:::

## Retirer un coffre {#remove-a-vault}

1. Ouvrez le coffre.
2. Allez dans **Réglages** → **Coffre** → **Gérer** → **Retirer le
   coffre…**.
3. Choisissez une option :
   - **Dissocier (conserver le dossier)** : Poiesis retire le coffre de sa liste
     et laisse le dossier là où il est. Vous pouvez le rouvrir à tout moment.
   - **Déplacer vers la corbeille** : Poiesis retire le coffre de sa liste et
     déplace tout le dossier dans la corbeille de votre ordinateur. Vous
     pouvez le récupérer tant que vous n’avez pas vidé la corbeille.

Si c’était votre dernier coffre, Poiesis revient à l’écran de bienvenue.

## Voir aussi {#see-also}

- [Versions et sauvegarde](./versions-and-backup.md)
- [Importer](./importing.md) : récupérez des textes venus d’autres applications.
- [Réglages d’écriture](./setup.md) : ce que chaque coffre affiche.

---
title: Coffres
---

# Coffres

Un **coffre** est l'endroit où vit votre écriture. C'est un dossier ordinaire sur
votre ordinateur qui contient vos documents, les images que vous avez ajoutées et
un historique des versions. Pas de base de données, pas de cloud — seulement des
fichiers dans un dossier que vous avez choisi.

Comme un coffre n'est fait que de simples fichiers, votre travail vous
appartient : vous pouvez le sauvegarder, le déplacer sur une autre machine,
l'ouvrir dans vingt ans, ou jeter un œil dans le dossier avec votre gestionnaire
de fichiers. Rien ne quitte votre ordinateur à moins que vous ne configuriez
vous-même une sauvegarde.

## Ce que contient un coffre {#whats-inside-a-vault}

Ouvrez un dossier de coffre et vous verrez :

- **Des fichiers `.poiesis`** — un par document. Chacun est un petit fichier JSON
  qui contient votre texte et ses métadonnées (titre, étiquettes, date de
  création, etc.).
- **`assets/`** — les images que vous insérez sont copiées ici, de sorte qu'un
  coffre est autonome. Déplacez le dossier et vos images le suivent.
- **`.trash/`** — les documents que vous supprimez attendent ici. Vous pouvez les
  restaurer depuis la **Corbeille**, au pied de la barre latérale ; ce qui y
  reste est supprimé définitivement au bout de 30 jours.
- **L'historique des versions** — chaque modification fait l'objet d'un point de
  contrôle pour que vous puissiez revenir à un brouillon antérieur. Il se trouve
  dans `.poiesis-history/`, ou dans un dépôt `.git` si vous passez le coffre à
  git. (Voir [Versions et sauvegarde](versions-and-backup.md).)
- **`.poiesis-vault.json`** — un petit fichier marqueur qui nomme le coffre et
  retient ses espaces.

Les noms qui commencent par un point sont masqués par défaut dans la plupart des
gestionnaires de fichiers. Vous n'avez jamais à gérer tout cela à la main ; φ le
crée et l'entretient pour vous.

## Créer ou ouvrir un coffre {#creating-or-opening-a-vault}

La première fois que vous lancez φ, il vous demande de choisir où vit votre
écriture, avec deux boutons : **Créer un coffre** et **Ouvrir un dossier**. Les
deux ouvrent le sélecteur de dossiers de votre système (**Choisir un dossier de
coffre**), où vous pouvez choisir un dossier existant ou en créer un nouveau — un
coffre peut donc se trouver où vous voulez : `~/Documents`, un dossier
synchronisé, un disque externe, là où cela vous convient.

La suite dépend du dossier :

- **Un dossier qui est déjà un coffre** (il contient un `.poiesis-vault.json`)
  s'ouvre tel quel.
- **Tout autre dossier** — vide ou non — devient un coffre. φ ajoute `assets/`,
  `.trash/` et le fichier marqueur, et y place une note **Welcome to φ** et un
  petit projet d'exemple, **The Grey Morning**. Les fichiers `.poiesis` déjà
  présents dans le dossier apparaissent à côté. Rien de ce qui s'y trouvait
  n'est modifié.

Vous pouvez faire la même chose plus tard :

- Le **nom du coffre** en haut de la barre latérale → **Ouvrir un autre
  coffre…** ou **Nouveau coffre…**.
- **Fichier → Ouvrir un coffre…** (`⇧⌘O`).
- **Réglages** (`⌘,`) → **Coffre** → **Gérer** → **Ouvrir un coffre…** ou
  **Créer un coffre…**.

## Plusieurs coffres et changement de coffre {#multiple-vaults-and-switching}

Vous pouvez avoir plus d'un coffre — disons, un pour un roman et un pour les
notes quotidiennes — et passer librement de l'un à l'autre. Un seul est ouvert à
la fois.

**Le menu du coffre.** Cliquez sur le nom du coffre en haut de la barre latérale.
Il liste tous les coffres que vous avez ajoutés (une coche marque celui où vous
êtes, et chacun indique où il se trouve — **Local**, ou iCloud, Dropbox, Google
Drive ou OneDrive), puis **Ouvrir un autre coffre…**, **Nouveau coffre…**,
**Afficher dans le Finder** et **Importer…**.

**Le sélecteur de coffres.** **Fichier → Changer de coffre…** (`⌥⌘O`) ouvre une
petite palette, **Passer à un coffre…** : tapez pour filtrer la liste, puis
appuyez sur Entrée. Le coffre où vous êtes est marqué **ici** ; **Ouvrir un
autre coffre…** et **Nouveau coffre…** se trouvent à la fin.

Changer de coffre recharge la barre latérale, la recherche et tout le reste pour
ce dossier. Chaque coffre est indépendant — ses propres documents, son propre
historique, ses propres [réglages d'écriture](setup.md).

## Déplacer un document vers un autre coffre {#moving-a-document-to-another-vault}

Pour déplacer un document vers un autre de vos coffres, choisissez **Déplacer
vers un coffre…** dans son menu ⋮ (sur sa ligne dans la liste, ou au-dessus de la
page).

- **Où il va.** Choisissez le coffre. Seuls ceux qui ont le mode du document
  sont proposés : un chapitre reste dans Écrire, une note dans Notes. Il arrive
  à la racine, avec ses étiquettes, notes, commentaires et pièces jointes.
- **Ce qui est lié.** φ liste les documents liés — ses pages de recherche, ce
  qu’une page de recherche sert, ce vers quoi il renvoie et ce qui renvoie vers
  lui — tous cochés pour partir avec lui. Décochez ceux que vous préférez
  laisser. Un document dont l’autre coffre n’a pas le mode ne peut pas partir,
  et le dit.
- **Ce qui reste.** Avant de déplacer, φ vous prévient : le projet qu’il quitte
  (un chapitre arrive comme brouillon), ses cartes sur les tableaux d’ici, les
  personnages qu’il mentionne (leurs noms restent dans le texte), les liens des
  documents qui restent, et son historique des versions.
- **Ensuite,** un résumé liste ce qui est parti et les pièces jointes copiées.
  Si l’autre coffre avait déjà un fichier différent du même nom, la copie est
  renommée plutôt qu’écrasée. Les originaux vont dans la **Corbeille** de ce
  coffre : rien n’est perdu si vous changez d’avis.

## Déplacer un projet, ou fusionner un coffre entier {#moving-a-project-or-merging-a-whole-vault}

**Un projet.** Choisissez **Déplacer vers un coffre…** dans le ⋮ du projet (dans
la barre latérale, ou le menu d’Écrire quand il est ouvert), puis un coffre qui
a Écrire. Le projet part entier : ses parties et chapitres dans l’ordre, son
objectif, sa couverture et son icône, et les personnages propres au projet.
Cochez ce qui doit partir aussi :

- **Ses pages de recherche.**
- **Ses tableaux.**
- **Les autres personnages mentionnés dans ses chapitres.** Ils partent en
  *copie*, car un autre projet peut aussi les mentionner.

Ensuite, le même résumé que pour un document, et les originaux — projet
compris — sont dans la **Corbeille** de ce coffre.

**Un coffre entier.** Pour fondre un coffre dans un autre, ouvrez-le et
choisissez **Fusionner dans un autre coffre…** dans le menu des coffres. Tout
part : chaque document à sa place, chaque projet, tableau, personnage, auteur et
modèle, et les pièces jointes qu’ils utilisent. Seuls les coffres qui ont tous
les modes utilisés ici sont proposés.

- Rien n’est écrasé : un dossier dont le nom est déjà pris là-bas reçoit le nom
  de ce coffre après le sien (par exemple « Brouillons (Anciennes notes) »), et
  une pièce jointe au nom déjà pris est renommée.
- Rien n’est retiré. Une fois terminé, ouvrez l’autre coffre, ou choisissez
  **Retirer « … »** pour sortir l’ancien coffre de φ — on vous demandera si son
  dossier va à la Corbeille ou reste sur le disque.
- L’historique des versions reste dans le dossier de l’ancien coffre.

## Espaces : quels modes a un coffre {#spaces-which-modes-a-vault-has}

Tous les coffres n'ont pas besoin des trois modes. Dans **Réglages → Coffre →
Espaces**, cochez ceux que ce coffre utilise — **Écrire**, **Notes**,
**Journal** (au moins un reste activé). Un coffre avec un seul mode n'affiche
aucun sélecteur de mode.

**S'ouvre sur** choisit où le coffre démarre : son **Accueil**, ou l'un de ses
modes.

## Retirer un coffre {#removing-a-vault}

Pour retirer un coffre de φ, ouvrez-le, puis allez dans **Réglages → Coffre →
Gérer → Retirer le coffre…**. φ vous demande ce que vous voulez dire :

- **Dissocier (conserver le dossier)** — φ oublie le coffre, et le dossier reste
  exactement où il est, intact. Vous pouvez le rouvrir à tout moment.
- **Déplacer vers la corbeille** — φ oublie le coffre **et déplace tout le
  dossier dans la corbeille de votre système**, où vous pouvez encore le
  récupérer tant que vous ne l'avez pas vidée.

Si c'était le dernier coffre, φ revient à l'écran de bienvenue.

## Coffres dans un dossier synchronisé {#vaults-in-a-synced-folder}

Un coffre peut se trouver dans iCloud Drive, Dropbox, Google Drive ou OneDrive,
et φ pour iPhone et iPad peut ouvrir le même coffre. Vos documents sont chacun un
fichier et se synchronisent sans risque. Si vous utilisez git pour l'historique
des versions, φ garde le dépôt git d'un coffre synchronisé sur votre ordinateur,
en dehors du coffre, parce qu'un service de synchronisation qui copie un dépôt
fichier par fichier, c'est précisément ainsi que les dépôts se cassent. Voir
[Versions et sauvegarde](versions-and-backup.md).

## Utiliser un coffre sur plusieurs appareils {#using-a-vault-on-several-devices}

Placez le coffre dans un dossier partagé par vos appareils — iCloud Drive,
Dropbox, Google Drive, Mega, OneDrive ou un lecteur réseau — et ouvrez-le
partout, y compris dans φ sur votre iPhone ou iPad. φ remarque les changements
faits sur les autres appareils (en général en moins d'une seconde) et met à jour
la liste, le document ouvert et tout le reste de lui-même.

- **Rien n'est écrasé.** Si le même document a changé sur deux appareils avant
  qu'ils ne se synchronisent, les deux versions sont gardées : la vôtre devient
  un nouveau document nommé « *titre* (conflicted copy) » à côté de l'original.
  Comparez-les, gardez ce que vous voulez et supprimez l'autre.
- **Dossiers hors ligne.** Si le dossier du coffre disparaît — un disque
  débranché, un dossier cloud hors ligne — φ vous le signale et garde ce que
  vous écrivez, pour l'enregistrer dès que le dossier revient.
- **iCloud sur un Mac.** Les documents que macOS garde seulement dans le cloud
  sont téléchargés quand φ les voit ; ils peuvent donc mettre un instant à
  apparaître.

## Sauvegarder et déplacer {#backing-up-and-moving}

Puisqu'un coffre n'est qu'un dossier, la sauvegarde la plus simple est celle que
vous connaissez déjà : copiez le dossier. Time Machine, un disque synchronisé ou
une copie manuelle fonctionnent tous, car il n'y a rien de spécial à exporter.

Pour déplacer un coffre, déplacez ou copiez le dossier, puis indiquez à φ le
nouvel emplacement avec **Ouvrir un autre coffre…**. Vos documents, images et
historique voyagent ensemble (pour un coffre git dans un dossier synchronisé, le
dépôt reste sur l'ordinateur qui l'a créé).

:::tip Sauvegarder hors de la machine avec git
φ peut aussi sauvegarder l'historique des versions d'un coffre sur votre propre
dépôt git distant selon un calendrier, entièrement sous votre contrôle. C'est
expliqué dans [Versions et sauvegarde](versions-and-backup.md).
:::

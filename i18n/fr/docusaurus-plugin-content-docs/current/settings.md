---
title: Réglages
---

# Réglages

φ rassemble ses réglages en un seul endroit, regroupés pour que vous ayez
rarement à chercher. Une colonne à gauche liste les catégories ; choisissez-en
une et ses options apparaissent à côté.

<img src="/img/app/settings-light.png" alt="Réglages" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Réglages" width="1600" height="1000" loading="lazy" decoding="async" />

Pour ouvrir les Réglages :

- cliquez sur le bouton à curseurs en haut de la barre latérale, à côté du nom
  du coffre ;
- sur macOS, appuyez sur `⌘,` (ou choisissez **Préférences…** dans le menu de
  l’app) ; ou
- appuyez sur `⌘K` et choisissez **Ouvrir les réglages**.

Les catégories sont **Apparence**, **Éditeur**, **Réglages d’écriture**,
**Langue**, **Versions**, **Coffre**, **Modèles**, **Raccourcis** et
**Données**. Les changements prennent effet immédiatement. La plupart des
réglages s’appliquent à toute l’app ; **Réglages d’écriture**, **Versions** et
**Coffre** appartiennent au coffre que vous avez ouvert.

## Apparence {#appearance}

L’aspect de φ. Les thèmes de couleur ont leur propre page :
[Thèmes et langues](./themes-and-languages.md).

### Thème {#theme}

- **Apparence** : **Système**, **Clair** ou **Sombre**. Système suit le réglage
  de votre ordinateur et bascule avec lui.
- **Taille de l'interface** : met à l’échelle toute l’interface, icônes
  comprises, à **100 %**, **115 %**, **130 %** ou **150 %**.

### Thème de couleur {#color-theme}

Les thèmes de couleur installés, chacun avec un petit aperçu. Le thème intégré
**Phi** est marqué **Officiel** ; les thèmes que vous installez apparaissent en
dessous avec une icône de corbeille pour les retirer. **Installer un thème…**
ajoute un fichier de thème, **Ouvrir le dossier des thèmes** montre où ils sont
conservés, et **Parcourir les thèmes officiels…** ouvre la galerie.

### Barre latérale {#sidebar}

- **Barre latérale en thème clair** : **Sombre** ou **Clair**. En thème clair,
  la barre latérale est sombre par défaut, ce qui garde la page comme l’élément
  le plus lumineux de l’écran ; choisissez **Clair** pour une barre latérale
  claire. (En thème sombre, elle est toujours sombre.)
- **Le sanctuaire atténue le reste** : dans le
  [Sanctuaire](./focus-and-writing-modes.md), seule la phrase où vous êtes reste
  pleinement visible. Désactivez ce réglage pour tout garder éclairé.

## Éditeur {#editor}

La surface d’écriture elle-même.

### Écriture {#writing}

- **Police du corps** : la police de votre texte, regroupée en Serif, Sans et
  Mono. Les polices fournies avec φ sont intégrées aux exports EPUB ; les
  polices de votre système sont marquées *système*.
- **Taille de police** : de 14 à 26 px. **Réinitialiser** revient à la valeur
  par défaut.
- **Hauteur de ligne** : de 1,3 à 2,2. **Réinitialiser** revient à la valeur
  par défaut.
- **Écriture focalisée** : atténue tout sauf la **Phrase** ou le **Paragraphe**
  en cours, ou **Désactivé**.
- **Afficher le Markdown** : dessine en léger les marqueurs Markdown (`**`,
  `#`, `[ ]( )`) autour de la mise en forme de la ligne que vous écrivez. Vos
  documents ne changent pas.
- **Défilement machine à écrire** : garde le curseur au milieu de la fenêtre.
- **Format de date** : comment les dates s’affichent dans toute l’app : *June
  11, 2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026*, ou
  **Custom…**. Le jour enregistré ne change jamais ; seulement son affichage.
  **Custom…** ajoute un champ **Modèle personnalisé** qui accepte les jetons de
  date-fns (`yyyy`, `MMM`, `d`, `EEEE`…) et affiche la date du jour en aperçu.

### Série d’écriture {#writing-streak}

- **Minimum de mots / jour** : un jour compte pour votre série dès que vous avez
  écrit ce nombre de mots (50 ou plus).

### Code {#code}

Pour les blocs de code.

- **Indenter avec** : **Espaces** ou **Tabulations**.
- **Largeur d’indentation** : espaces par indentation, et la largeur
  d’affichage d’une tabulation, de 1 à 8.

### Versions et import {#versions--import}

- **Détail des différences** : la finesse avec laquelle les changements sont
  marqués quand vous prévisualisez une ancienne version : par **Mot** ou par
  **Caractère**.
- **Images importées** : **Copier dans le coffre** place l’image que vous
  importez dans le dossier `assets/` du coffre ; **Intégré** la garde à
  l’intérieur du document (autonome, mais fichiers plus lourds).

## Réglages d’écriture {#setup}

Ce que φ vous montre dans ce coffre : les signaux qu’il vous renvoie sur votre
écriture, et les lieux que propose chaque mode. Désactiver quelque chose le
masque, jamais votre travail. Cette catégorie a sa propre page :
[Réglages d’écriture](./setup.md).

- **Signaux** : **Démarrer les sessions automatiquement** (une [session
  d’écriture](./focus-and-writing-modes.md#writing-sessions) commence à votre
  première frappe), **Statistiques de lisibilité** (facilité de lecture et
  niveau scolaire dans les statistiques d’un document), **Série** (**Flamme et
  compte**, **Jours simples** ou **Désactivée**), **La semaine commence le** (la
  première colonne du calendrier et de la carte de chaleur, et la semaine dans
  laquelle votre rythme est compté), et **Rythme hebdomadaire** (**Aucun**, ou
  un nombre de jours par semaine).
- **Modes** : ouvrez **Écrire**, **Notes** ou **Journal** pour choisir les lieux
  qu’il propose, changer les signaux pour ce mode seulement, et décider si de
  nouvelles **Listes de tâches** peuvent y être commencées. Un mode indique
  **Suit le coffre** ou **Diffère**, avec **Suivre le coffre à nouveau** pour
  annuler.
- **Réglages enregistrés** : **Enregistrer sous…** garde une copie de ces
  réglages sous un nom, pour les appliquer à un autre coffre avec **Utiliser
  dans ce coffre** ou **Utiliser dans un autre coffre…**.

## Langue {#language}

- **Langue** : la **Langue de l'interface** dans laquelle φ s’exprime, ainsi que
  **Installer une langue…**, **Exporter le modèle anglais…** et **Ouvrir le
  dossier**. Voir [Thèmes et langues](./themes-and-languages.md#languages).
- **Orthographe** : **Vérifier l’orthographe** activé ou non, le **Moteur**
  (**Natif** ou **Amélioré**) et les **Langues** à vérifier.
- **Ce coffre** : un moteur d’orthographe propre à ce coffre (**Par défaut pour
  ce coffre**), qui peut différer du moteur global.
- **Dictionnaire personnel** : les mots que vous avez ajoutés, chacun avec une
  icône de corbeille pour le retirer.
- **Dictionnaire et thésaurus** : **Installer un pack de dictionnaire…** et les
  packs dont vous disposez. Voir [Dictionnaire et thésaurus](./dictionary.md).

L’orthographe est traitée en détail dans [Orthographe](./spelling.md).

## Versions {#versioning}

**Ces réglages s’appliquent au coffre que vous avez ouvert.** Chaque coffre
conserve son propre historique, avec son propre moteur, son distant et son
identité, c’est pourquoi le nom du coffre est affiché en haut.

### Backend {#backend}

- **Backend** : **Natif** (instantanés locaux, rien à installer ; par défaut) ou
  **Git** (historique complet et sauvegarde distante facultative). Git est
  proposé dès qu’il est installé sur votre ordinateur ; jusque-là, l’option
  indique **Git (git requis)**.

Passer à git demande d’abord confirmation et explique ce qui se passe : φ
exécute `git init` dans le coffre, fait des commits à intervalles réguliers, et
reprend votre historique natif. Une fois qu’un coffre est un dépôt git, φ le
garde sur git ; pour revenir en arrière, il vous faudrait supprimer vous-même le
dossier `.git`. Des notes sous le réglage expliquent où se trouve le dépôt si le
coffre est dans un dossier synchronisé dans le cloud, et que φ sur iPhone et
iPad conserve plutôt ses versions dans le dossier `.poiesis-history` du coffre.

### Historique {#history}

- **Point de contrôle automatique toutes les** : la fréquence à laquelle vos
  modifications sont enregistrées comme version automatique. Tapez un nombre de
  minutes, choisissez **1**, **5**, **10** ou **30**, ou choisissez
  **Désactivé**. Les instantanés nommés et le point de contrôle à la fermeture ne
  sont pas concernés.
- **Limite d’historique local** (Natif uniquement) : le nombre maximal de
  versions conservées par document ; les plus anciennes sont élaguées.

### Sauvegarde git (git uniquement) {#git-backup-git-only}

- **Nom du commit** et **E-mail du commit** : l’identité sous laquelle φ fait
  ses commits. Laissez-les vides pour utiliser l’utilisateur git de votre
  ordinateur.
- **Chemin de la clé SSH** : la clé privée avec laquelle φ pousse (par exemple
  `~/.ssh/id_ed25519`), avec **Parcourir…**. Le fichier de clé doit être en
  `chmod 600`.
- **URL du distant de sauvegarde** : où pousser. Vide, elle utilise l’origin
  existant du dépôt.
- **Push automatique des sauvegardes** : pousse les nouveaux commits à
  intervalles réguliers, selon **Pousser toutes les** (minutes).
- **Signer les commits** : les signe pour qu’ils apparaissent comme vérifiés,
  avec une **Méthode de signature** (SSH ou GPG) et une **Clé de signature**.
- **Sauvegarder maintenant** : indique si vous êtes à jour, si vous avez des
  commits non poussés, ou si vous n’avez pas encore de distant. **Pousser
  maintenant** pousse immédiatement.

Plus d’informations dans [Versions et sauvegarde](./versions-and-backup.md).

## Coffre {#vault}

À propos du coffre dans lequel vous travaillez.

- **Coffre actif** : son nom et son dossier.
- **Espaces** : lesquels d’**Écrire**, **Notes** et **Journal** ce coffre
  affiche (au moins un), et où il s’ouvre (**S’ouvre sur**).
- **Gérer** : **Ouvrir un coffre…** et **Créer un coffre…** pour ajouter un
  coffre, et **Retirer le coffre…** pour celui que vous avez ouvert. Le retrait
  vous demande comment : **Dissocier (conserver le dossier)** le retire de φ et
  laisse le dossier tel quel ; **Déplacer vers la corbeille** déplace tout le
  dossier dans la Corbeille de votre ordinateur, d’où vous pouvez encore le
  récupérer.

Voir [Coffres](./vaults.md) pour une vue d’ensemble.

## Modèles {#templates}

- Les **variables** de modèle que vous pouvez utiliser, sous forme de
  pastilles : `<% today %>`, `<% tomorrow %>`, `<% yesterday %>`, `<% time %>`
  et `<% cursor %>`.
- **Ce coffre** et **Modèles globaux** : chaque modèle avec un crayon pour le
  modifier et une icône de corbeille pour le retirer.
- **Installer un modèle…** ajoute un fichier de modèle ; **Ouvrir le dossier des
  modèles** montre où sont conservés les modèles globaux.

Voir [Modèles](./templates.md).

## Raccourcis {#shortcuts}

Un tableau consultable des principaux raccourcis clavier de φ, regroupés de la
même façon que la carte qu’affiche `⌘/`. Tapez dans **Rechercher des
commandes…** pour le filtrer. Pour la liste complète, voir
[Raccourcis clavier](./keyboard-shortcuts.md).

## Données {#data}

La santé de vos fichiers `.poiesis`, les sauvegardes créées lors de leur mise à
jour, et une réinitialisation.

### Santé du coffre {#vault-health}

φ vérifie si vos documents utilisent le format de fichier actuel. Si c’est le
cas, il l’indique, avec les numéros de version. Si certains sont plus anciens,
**Migrer toutes les notes** les met à jour, et une sauvegarde de chacun est
d’abord enregistrée.

### Sauvegardes {#backups}

Apparaît une fois que des documents ont été migrés. Indique combien de fichiers
de sauvegarde existent et l’espace qu’ils occupent. **Ouvrir le dossier des
sauvegardes** les montre ; **Effacer les anciennes sauvegardes** supprime celles
de plus de 30 jours.

### Réinitialiser {#reset}

**Réinitialiser tous les réglages…** remet chaque réglage de l’app (thème,
éditeur, disposition, graphe, dates, etc.) à sa valeur par défaut, après
confirmation. Vos notes, coffres et historiques d’écriture sont conservés.

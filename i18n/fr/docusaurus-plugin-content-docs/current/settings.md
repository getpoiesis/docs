---
title: Réglages
sidebar_position: 18
---

# Réglages

φ rassemble ses réglages en un seul endroit, regroupés pour que vous ayez
rarement à chercher. Ouvrez les Réglages avec `⌘,` (ou **Préférences…** dans le
menu de l’app). Une colonne à gauche liste six catégories ; choisissez-en une et
ses options apparaissent à droite.

Les catégories sont **Apparence**, **Éditeur**, **Versions**, **Coffre**,
**Modèles** et **Données**.

La plupart des réglages s’appliquent à toute l’app et prennent effet
immédiatement. L’exception est **Versions**, qui se configure *par coffre* — voir
ci-dessous.

## Apparence

L’aspect de φ : clair ou sombre, la taille de l’interface, le thème de couleur
utilisé et la langue dans laquelle il s’exprime. Les thèmes de couleur et les
langues ont leur propre page — voir [Thèmes et langues](themes-and-languages.md).

### Thème

- **Apparence** — choisissez **Système**, **Clair** ou **Sombre**. Système suit
  le réglage de votre Mac et bascule avec lui.
- **Taille de l’interface** — met à l’échelle toute l’interface, icônes
  comprises, entre **100 %**, **115 %**, **130 %** et **150 %**. Utilisez-la si
  l’app vous paraît trop petite (ou trop grande) sur votre écran.

### Thème de couleur

Une liste des thèmes de couleur installés. Le thème intégré **Phi** est marqué
**Officiel** ; les thèmes de la communauté que vous installez apparaissent en
dessous et peuvent être retirés avec l’icône de corbeille. **Installer un
thème…** ajoute un fichier JSON de thème, et **Ouvrir le dossier des thèmes**
révèle où ils se trouvent. Détails complets sur la page [Thèmes et
langues](themes-and-languages.md).

### Langue

La **langue de l’interface** de l’app. Les langues intégrées sont l’anglais,
l’espagnol et le français ; **Réglage du système** suit votre Mac. Vous pouvez
**Installer une langue…** (un fichier de traduction communautaire), **Exporter le
modèle anglais…** pour commencer la vôtre, et **Ouvrir le dossier** pour voir où
les langues sont conservées. Les traductions manquantes reviennent à l’anglais.

### Barre latérale

- **Afficher les documents récents** — affiche ou masque la section Récents en
  haut de la barre latérale des fichiers.

## Éditeur

Tout ce qui concerne la surface d’écriture elle-même.

### Écriture

- **Police du corps** — la typographie de votre texte, regroupée en Serif, Sans
  et Mono. Les polices incluses sont intégrées aux exports EPUB ; les polices
  système sont signalées.
- **Taille de police** — le texte du corps de l’éditeur, de 14 à 26 px.
  **Réinitialiser** la ramène à la valeur par défaut.
- **Hauteur de ligne** — l’espace entre les lignes, de 1,3 à 2,2.
  **Réinitialiser** la ramène à la valeur par défaut.
- **Écriture focalisée** — atténue tout sauf la ligne où vous êtes :
  **Désactivé**, **Phrase** ou **Paragraphe**.
- **Défilement machine à écrire** — garde le curseur centré verticalement à
  mesure que vous tapez.
- **Format de date** — comment les dates s’affichent dans l’app. Le jour stocké
  ne change jamais ; cela n’affecte que son affichage. Choisir **Personnalisé**
  révèle un champ **Modèle personnalisé** qui utilise les jetons date-fns
  (`yyyy`, `MMM`, `d`, `EEEE`…), avec la date du jour affichée en aperçu en
  direct.

### Série d’écriture

- **Minimum de mots / jour** — une journée compte pour votre série d’écriture dès
  que vous écrivez ce nombre de mots. Le minimum est de 50.

### Code

Pour les blocs de code.

- **Indenter avec** — **Espaces** ou **Tabulations**.
- **Largeur d’indentation** — espaces par indentation (et largeur d’affichage
  d’une tabulation), de 1 à 8. 2 et 4 sont courants.

### Versions et import

- **Détail des différences** — avec quelle précision les changements sont mis en
  évidence lorsque vous prévisualisez une version : par **Mot** ou par
  **Caractère**.
- **Images importées** — lorsque vous importez une image, soit **Copier dans le
  coffre** (dans le dossier `assets/` du coffre), soit la conserver **Intégrée**
  en data URI (autonome, mais documents plus volumineux).

### Dictionnaire et thésaurus

Installez et gérez des packs de dictionnaire hors ligne. Cette section a sa
propre page — voir [Dictionnaire et thésaurus](dictionary.md).

## Versions

**Ces réglages s’appliquent au coffre actif.** Chaque coffre est son propre dépôt
avec son backend, son distant et son identité — le nom du coffre que vous
configurez est donc affiché en haut.

### Backend

Choisissez comment l’historique est conservé :

- **Natif** — instantanés locaux, aucun git requis. C’est l’option par défaut.
- **Git** — historique git complet plus sauvegarde distante optionnelle.
  Disponible uniquement lorsque git est installé sur votre ordinateur.

Basculer vers git est une étape pour utilisateurs avancés : φ exécute `git init`
dans le coffre, valide automatiquement des commits selon une planification et
migre votre historique natif existant vers git. Une boîte de dialogue de
confirmation détaille d’abord les mises en garde. Une fois qu’un coffre est un
dépôt git, φ le garde sous git ; pour revenir au natif, vous supprimez vous-même
le dossier `.git`.

### Historique

- **Point de contrôle automatique toutes les** — à quelle fréquence les
  modifications sont validées en version automatique. Définissez un nombre de
  minutes, choisissez un préréglage (1 / 5 / 10 / 30) ou désactivez-le
  (**Désactivé**). Les instantanés manuels et les enregistrements à la fermeture
  ne sont pas affectés.
- **Limite d’historique local** (natif uniquement) — le nombre maximal de
  versions conservées par document. Les anciens instantanés sont élagués pour
  limiter l’usage du disque. Installez git pour un historique illimité.

### Sauvegarde git (backend git uniquement)

Lorsqu’un coffre utilise git, vous pouvez aussi configurer comment φ valide les
commits et où il sauvegarde :

- **Nom du commit** / **E-mail du commit** — l’identité sous laquelle φ valide.
  Laissez vide pour utiliser l’utilisateur git de votre machine. Une adresse
  dédiée garde ce travail hors de votre graphe GitHub principal.
- **Chemin de la clé SSH** — la clé privée que φ utilise pour pousser (par
  exemple `~/.ssh/id_ed25519`). Le fichier de clé doit être en `chmod 600`.
- **URL du distant de sauvegarde** — le distant GitHub/GitLab/… vers lequel
  pousser. Vide utilise l’origin existant du dépôt.
- **Push automatique des sauvegardes** — pousse les nouveaux commits vers le
  distant à intervalle régulier. Lorsqu’il est actif, définissez **Pousser toutes
  les** (minutes).
- **Signer les commits** — signe cryptographiquement les commits pour qu’ils
  apparaissent comme *Vérifié*. Choisissez une **Méthode de signature** (SSH ou
  GPG) et une **Clé de signature**.
- **Sauvegarder maintenant** — pousse immédiatement avec **Pousser maintenant**.
  L’indication vous dit si vous êtes à jour, si vous avez des commits non poussés
  ou si vous n’avez pas encore de distant.

Pour en savoir plus sur les versions et la sauvegarde, voir [Versions et
sauvegarde](versions-and-backup.md).

## Coffre

À propos du coffre dans lequel vous travaillez.

- **Coffre actif** — le nom du coffre actuel et le chemin de son dossier.
- **Gérer** — **Ouvrir un coffre…** et **Créer un coffre…** pour changer de
  coffre ou en ajouter, et **Retirer le coffre…** pour retirer le coffre actif de
  φ. Retirer un coffre ne fait que l’oublier ; vos fichiers sur le disque restent
  intacts.

Voir [Coffres](vaults.md) pour le tableau complet.

## Modèles

Des fragments réutilisables avec variables. Cette section liste vos **modèles de
coffre** (propres au coffre actif) et vos **modèles globaux** (disponibles
partout). Modifiez-en un avec l’icône de crayon ou retirez-le avec l’icône de
corbeille. **Installer un modèle…** ajoute un fichier de modèle, et **Ouvrir le
dossier** révèle où sont stockés les modèles globaux.

Voir [Modèles](templates.md) pour comprendre le fonctionnement des variables.

## Données

La santé de vos fichiers `.poiesis`, les sauvegardes de migration et une
réinitialisation des réglages.

### Santé du coffre

φ vérifie si vos documents sont au schéma actuel. Quand tout est à jour, il le
signale (avec les versions de schéma et de document). Si certains documents
utilisent un schéma plus ancien, **Migrer toutes les notes** les met à jour — et
une sauvegarde est enregistrée automatiquement avant la migration de tout
document.

### Sauvegardes

Apparaît une fois qu’une migration a été exécutée. Indique combien de fichiers de
sauvegarde existent et leur taille totale. **Ouvrir le dossier des sauvegardes**
les révèle ; **Effacer les anciennes sauvegardes** retire les plus anciennes.

### Réinitialiser

**Réinitialiser tous les réglages…** rétablit tous les réglages de l’app —
thème, éditeur, mise en page, dates, etc. — à leurs valeurs d’usine. Vos notes,
coffres et statistiques d’écriture ne sont pas affectés.

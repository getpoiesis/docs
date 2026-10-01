---
title: Se repérer dans φ
---

# Se repérer dans φ

La fenêtre de φ a trois colonnes — la **barre latérale**, la **liste** et la
**page** — et chacun de ses trois modes s'ouvre sur un **Accueil** qui lui est
propre. Cette page est une visite, de gauche à droite, puis un tour des touches
qui vous mènent partout.

<img src="/img/app/write-home-light.png" alt="La barre latérale à gauche, et l'Accueil d'Écrire qui occupe le reste de la fenêtre" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/write-home-dark.png" alt="La barre latérale à gauche, et l'Accueil d'Écrire qui occupe le reste de la fenêtre" width="1600" height="1000" loading="lazy" decoding="async" />

## La barre latérale {#the-sidebar}

La barre latérale est toujours là, sauf dans le [Sanctuaire](focus-and-writing-modes.md).
De haut en bas :

- **Le nom du coffre.** Cliquez dessus pour le menu du coffre : vos coffres,
  **Ouvrir un autre coffre…**, **Nouveau coffre…**, **Afficher dans le Finder**
  et **Importer…**. Voir [Coffres](vaults.md).
- **Le bouton à curseurs**, à côté, ouvre les **Réglages** (`⌘,`).
- **Écrire · Notes · Journal** — le sélecteur de mode. `⌘1`, `⌘2` et `⌘3`
  choisissent un mode dans cet ordre et vous mènent à son Accueil. (Un coffre qui
  n'utilise qu'un seul mode n'a pas de sélecteur ; voir
  [Espaces](vaults.md#spaces-which-modes-a-vault-has).)
- **Les lieux du mode**, par groupes — voir ci-dessous.
- **Le pied** : ce que fait le coffre (**Enregistrement…**, **Indexation…**), la
  **Corbeille**, et le badge **Alpha**, qui est aussi le moyen de nous dire
  comment φ se passe pour vous.

Ce que contient la barre latérale de chaque mode :

| Mode | Lieux |
| --- | --- |
| **Écrire** | **Accueil**, **Pièces** (les écrits qui n'appartiennent à aucun projet), **Projets** (chaque projet, et **Nouveau projet**), **Monde** (**Personnages**, **Auteurs**, **Recherche**), **Lieux** (**Tableaux**, **Graphe**, **Calendrier**) |
| **Notes** | **Accueil**, **Toutes les notes**, **Favoris**, **Non liées**, **Dossiers** (avec un **+** pour un nouveau dossier), **Étiquettes**, **Lieux** (**Tableaux**, **Graphe**, **Calendrier**, **Modèles**) |
| **Journal** | **Accueil**, **Aujourd'hui**, **Toutes les entrées**, **Pages du matin**, **Scellées**, **Lieux** (**Calendrier**) |

Les lieux partagés affichés par chaque mode se choisissent dans
[Réglages → Réglages d'écriture](setup.md). Faites un clic droit sur un projet ou
un dossier de la barre latérale pour son propre menu — son icône, sa couleur, et
ainsi de suite — et glissez une note sur un dossier pour l'y ranger.

## La liste {#the-list}

Choisissez quelque chose dans la barre latérale et la deuxième colonne le liste :
le plan d'un projet, vos pièces, un dossier de notes, les jours du journal, les
tableaux, la corbeille. Choisissez une ligne et elle s'ouvre sur la page ; la
liste reste où elle est.

En haut de la liste :

- **‹ ›** — retour et suivant (`⌘[` et `⌘]`), avec l'endroit où vous êtes à côté.
- **Le titre** de ce qui est listé.
- **Le tri** — **Modifié**, **Créé** ou **Titre** — sur les listes de pièces et
  de notes.
- **+** — en créer un nouveau ici : un chapitre ou une partie dans un projet, une
  pièce, une note, l'entrée du jour, une carte sur un tableau.
- **⋮** — les choses moins fréquentes pour ce mode. Dans un projet, il contient
  aussi les pages propres au projet : **Sommaire**, **Aperçu**, **Lire**,
  **Ouvrir le tableau du projet** et **Exporter le manuscrit…**.

Les pièces, les notes, les personnages, les auteurs et la recherche ont un
**champ de recherche** sous le titre (**Rechercher dans pièces**, **Rechercher
dans toutes les notes**, …) qui filtre la liste pendant que vous tapez ; Échap
l'efface. **Toutes les notes**, un dossier de notes et une étiquette ont aussi
une zone **Notez une idée…** : tapez une ligne et appuyez sur Entrée, et elle est
enregistrée comme note.

**Les dossiers s'ouvrent sur place.** Dans Pièces et dans Notes, ouvrez un
dossier et la liste montre ce qu'il contient, avec le chemin du dossier au-dessus
— **Tout › Essais › Brouillons**. Cliquez sur n'importe quelle étape du chemin
pour en ressortir, et déposez un document sur un dossier ou sur une étape du
chemin pour l'y déplacer.

## La page {#the-page}

La page ne porte que le titre et les mots. Tout le reste est gardé sur ses
bords :

- **En haut à droite**, trois boutons : le menu **⋮** du document, **Infos**
  (`⇧⌘I`) et **Sanctuaire** (`⌘.`).
- **Dans le coin inférieur droit**, le nombre de mots — ou les mots par rapport à
  l'objectif, si le document en a un. Cliquez dessus pour les **Statistiques du
  document**.

### Le panneau Infos {#the-info-panel}

**Infos** ouvre un panneau à droite avec quatre onglets :

- **Plan** — mots, temps de lecture, l'objectif et cette séance ; les titres et
  les notes de bas de page du document ; **Ajouter au tableau…** et
  **Enregistrer un instantané**.
- **Liens** — ce vers quoi ce document pointe et ce qui pointe vers lui, et les
  notes à son sujet.
- **Notes** — ses surlignages, commentaires et tâches (`⇧⌘A` ouvre cet onglet).
- **Historique** — ses versions. Voir [Versions et sauvegarde](versions-and-backup.md).

Le [dictionnaire](dictionary.md) s'y ajoute comme cinquième onglet pendant que
vous l'utilisez. Le panneau reste ouvert jusqu'à ce que vous le fermiez ; une
fois fermé, il reste fermé pour tous les documents, même après avoir quitté,
jusqu'à ce que vous le rouvriez.

### Détails {#details}

Le statut d'un document, son synopsis ou sa description, son objectif de mots,
ses étiquettes, sa couleur, son étoile et son emplacement se trouvent sur sa page
**Détails** — choisissez **Détails…** dans n'importe quel menu ⋮ ou en faisant un
clic droit sur un document dans une liste. Voir
[Organiser votre travail](organizing.md).

### Redimensionner les colonnes {#resizing-the-columns}

Faites glisser le fin séparateur entre deux colonnes pour élargir ou rétrécir
l'une d'elles (ou donnez le focus au séparateur et utilisez les flèches). φ
retient les largeurs pour chaque coffre. Faire glisser le séparateur du panneau
Infos presque jusqu'au bout le ferme, tout comme un double-clic sur le
séparateur. Quand la fenêtre est trop étroite pour tout afficher, le panneau
Infos s'efface.

Avec le thème clair, la barre latérale reste sombre, pour que la page soit
l'élément le plus lumineux de l'écran. **Réglages → Apparence → Barre latérale en
thème clair** la rend claire.

## L'Accueil de chaque mode {#each-modes-home}

Chaque mode s'ouvre sur un **Accueil** qui occupe la page. `⌘⇧H` vous mène à
l'Accueil du mode où vous êtes, et **Accueil** en haut de la barre latérale fait
de même.

- **L'Accueil d'Écrire** vous accueille avec ce qu'il y a à **reprendre**, les
  projets sur lesquels vous travaillez, les pièces récentes et les **Recherches
  en cours** ; à côté, les chiffres du jour (mots aujourd'hui, votre série, cette
  séance, jours cette semaine), le mois, et ce qui est **À rendre cette semaine**
  sur vos tableaux.
- **L'Accueil de Notes** s'ouvre sur une zone **Notez une idée…** — appuyez sur
  Entrée pour l'enregistrer comme note, et un `#mot` dedans devient une
  étiquette — avec ce que vous avez modifié récemment et, à côté, le mois, vos
  notes favorites et vos étiquettes.
- **L'Accueil de Journal** s'ouvre sur l'entrée du jour, cette semaine et les
  jours précédents, avec vos **Pages du matin** du jour, le mois, et **Ce
  jour-là** — ce que vous avez écrit à cette date les autres années.

## Trouver un document : `⌘K` {#find-a-document-k}

`⌘K` (**Fichier → Rechercher un document…**) est le chemin vers partout. À
l'ouverture, avant que vous tapiez, il montre trois choses :

- **Ouvert maintenant** — les documents que vous avez ouverts et pas fermés.
  Celui à l'écran est marqué **ici**.
- **Aller à** — les modes et les lieux : Accueil, Écrire, Notes, Journal, le
  graphe et, à mesure que vous tapez, le calendrier, les tableaux, les
  personnages, les modèles, la corbeille, les Réglages.
- **Créer** — un nouveau document et, à mesure que vous tapez, un projet, un
  dossier, l'entrée du jour, et ainsi de suite.

Commencez à taper et il cherche dans tous les documents par titre et par contenu,
dans les trois modes (chaque résultat indique dans quel mode il se trouve), ainsi
que dans vos projets et personnages.

- **Entrée** ouvre le résultat en surbrillance.
- **`⌘↵`** l'ouvre et garde la palette ouverte, pour que vous puissiez en ouvrir
  plusieurs.
- **`⌘W`** (ou le **×** sur la ligne) ferme le document ouvert en surbrillance,
  et la palette reste.
- **Échap** ferme la palette.

## Commandes : `⌘P` {#commands-p}

`⌘P` (**Fichier → Palette de commandes…**) ne contient que des commandes — les
verbes. Avant que vous tapiez, elle montre ce que vous avez lancé
**Dernièrement** ; tapez pour chercher dans toutes les commandes : nouveaux
documents, exports, versions, coffres, défilement machine à écrire, recherche de
mises à jour, et le reste.

## Tous les raccourcis : `⌘/` {#all-the-shortcuts-}

`⌘/` affiche tous les raccourcis principaux sur une seule fiche. Appuyez de
nouveau sur `⌘/` (ou sur Échap) pour la fermer. La liste complète se trouve dans
[Raccourcis clavier](keyboard-shortcuts.md).

## Aller et revenir {#moving-back-and-forth}

- **`⌘[` / `⌘]`** — retour et suivant parmi les endroits où vous êtes passé,
  dans la liste comme dans la page. Les boutons latéraux de votre souris font de
  même.
- **`⌥⌘←` / `⌥⌘→`** — le document au-dessus ou en dessous dans la liste : le
  chapitre précédent ou suivant, la note suivante, la veille.
- **`⌘W`** — ferme le document ouvert et garde sa liste. Un document ouvert
  depuis ailleurs — le calendrier, un tableau, le graphe — se ferme en revenant
  là où vous l'avez ouvert. Sur un lieu sans document ouvert (le calendrier, le
  graphe, les tableaux, la corbeille), `⌘W` vous mène à l'Accueil du mode.
- **`⌘⇧H`** — l'Accueil du mode.

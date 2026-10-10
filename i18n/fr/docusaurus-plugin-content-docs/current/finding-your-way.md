---
title: Visite de la fenêtre
description: La barre latérale, la liste, la page et le panneau Infos, ainsi que les raccourcis qui vous mènent partout.
---

# Visite de la fenêtre

La fenêtre de φ Poiesis comporte trois colonnes, de gauche à droite :

- La **barre latérale**, où vous choisissez un mode, puis un lieu dans ce
  mode.
- La **liste**, qui affiche le contenu de ce lieu.
- La **page**, où vous écrivez.

Vous pouvez aussi ouvrir un panneau **Infos** à droite de la page. Il affiche
des détails sur le document ouvert.

Poiesis compte trois modes : **Écrire**, **Notes** et **Journal**. Chaque mode a
son propre écran de départ, appelé **Accueil**.

<img src="/img/app/editor-light.png" alt="La barre latérale avec le mode Écrire sélectionné, les chapitres de The Weighing House dans la liste à côté, et un chapitre ouvert sur la page" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="La barre latérale avec le mode Écrire sélectionné, les chapitres de The Weighing House dans la liste à côté, et un chapitre ouvert sur la page" width="1600" height="1000" loading="lazy" decoding="async" />

## Se déplacer {#get-around}

1. Choisissez un mode en haut de la barre latérale : **Écrire**, **Notes** ou
   **Journal**.
2. Choisissez un lieu dans la barre latérale, par exemple un projet ou
   **Toutes les notes**. La liste en affiche le contenu.
3. Cliquez sur une ligne de la liste. Le document s’ouvre sur la page. La
   liste ne bouge pas.
4. Appuyez sur `⇧⌘I` pour ouvrir le panneau **Infos** à côté de la page.
5. Appuyez sur `⌘[` pour revenir là où vous étiez.

## La barre latérale {#the-sidebar}

De haut en bas, la barre latérale comprend :

- **Le nom du coffre.** Un coffre est le dossier qui contient vos textes.
  Cliquez sur son nom pour ouvrir le menu du coffre. Vous y trouvez la liste
  de vos coffres, puis **Ouvrir un autre coffre…**, **Nouveau coffre…**,
  **Afficher dans le Finder** (**Afficher dans l’Explorateur de fichiers**
  sur Windows) et **Importer…**. Si vous avez plusieurs coffres, le menu
  propose aussi **Fusionner dans un autre coffre…**. Voir
  [Coffres](./vaults.md).
- **Les curseurs**, à côté du nom. Ils ouvrent les **Réglages** (`⌘,`).
- **Écrire · Notes · Journal**, le sélecteur de mode. `⌘1`, `⌘2` et `⌘3`
  ouvrent l’Accueil de chaque mode. Un coffre qui n’utilise qu’un seul mode
  n’a pas de sélecteur.
- **Les lieux du mode**, classés par groupes. Le tableau ci-dessous en donne
  la liste.
- **Tout en bas :** ce que le coffre est en train de faire
  (**Enregistrement…**, **Indexation…**), la **Corbeille** et le badge
  **Bêta**. Cliquez sur le badge pour nous envoyer vos remarques.

| Mode | Ce qu’affiche la barre latérale |
| --- | --- |
| **Écrire** | **Accueil**, **Pièces**, **Projets** (chaque projet, **Nouveau projet**, et **Rangés** quand vous en avez rangé), **Monde** (**Personnages**, **Auteurs**, **Recherche**), **Lieux** (**Graphe**, **Calendrier**) |
| **Notes** | **Accueil**, **Toutes les notes**, **Favoris**, **Non liées**, **Dossiers** (avec un **+** pour créer un dossier), **Étiquettes**, **Lieux** (**Tableaux**, **Graphe**, **Calendrier**, **Modèles**) |
| **Journal** | **Accueil**, **Aujourd’hui**, **Toutes les entrées**, **Pages du matin**, **Scellées**, **Lieux** (**Calendrier**) |

Cliquez sur un projet pour ouvrir la page du projet lui-même. La liste en
affiche le plan. Tant que le projet est ouvert, la barre latérale affiche
sous son nom : **Sommaire**, **Recherche**, **Personnages**, **Tableau**,
**Lire** et **Exporter**.

Faites un clic droit sur un projet ou sur un dossier pour ouvrir son menu.
Pour ranger une note dans un dossier, faites-la glisser sur ce dossier dans
la barre latérale.

Vous pouvez choisir les lieux que chaque mode affiche. Voir
[Réglages d’écriture](./setup.md).

## La liste {#the-list}

La deuxième colonne affiche le contenu du lieu que vous avez choisi : les
chapitres d’un projet, vos pièces, un dossier de notes, les jours du journal,
les tableaux ou la corbeille.

En haut de la liste :

- **‹ ›** permettent de revenir en arrière et d’avancer. À côté, Poiesis indique où
  vous êtes, par exemple **Écrire · Projets**.
- **Le titre** indique ce que la liste affiche.
- **Le tri** apparaît pour les pièces et les notes : **Modifié**, **Créé** ou
  **Titre**.
- **+** crée un nouveau document à cet endroit. Dans un projet, il propose un
  nouveau chapitre (`⌘N`) ou une nouvelle partie (`⇧⌘N`). Leur nom dépend du
  type de projet.
- **⋮** ouvre un menu d’actions moins courantes. Dans un projet, ce menu
  contient aussi les pages et les réglages du projet : **Sommaire**,
  **Icône…**, **Couleur…**, **Aperçu**, **Recherche**, **Lire**, **Ouvrir le
  tableau du projet**, **Exporter le manuscrit…** et **Supprimer le
  projet…**.

**Chercher dans la liste.** Les pièces, les notes, les personnages, les
auteurs et la recherche ont un champ de recherche sous le titre. La liste se
réduit à mesure que vous tapez. Appuyez sur `Esc` pour effacer la recherche.

**Noter une idée.** **Toutes les notes**, un dossier et une étiquette
comportent une zone **Notez une idée…**. Tapez une ligne et appuyez sur
`Enter`. Poiesis enregistre cette ligne comme une note, dans le dossier ou avec
l’étiquette que vous êtes en train de consulter. Dans **Toutes les notes** ou
dans un dossier, un mot précédé d’un dièse dans la ligne, comme `#idée`,
ajoute cette étiquette à la note.

**Les dossiers s’ouvrent sur place.** Ouvrez un dossier dans Pièces ou dans
Notes : la liste en affiche le contenu. Le chemin apparaît au-dessus de la
liste, par exemple **Tout › Essais › Brouillons**. Cliquez sur une étape du
chemin pour y revenir. Pour déplacer un document, faites-le glisser sur un
dossier ou sur une étape du chemin.

## La page {#the-page}

La page affiche le titre et le texte. Quand un document est ouvert, ces
boutons se trouvent en haut à droite :

| Bouton | Ce qu’il fait |
| --- | --- |
| **Vue partagée** (`⌘\`) | Ouvre un second volet à côté de celui-ci. Voir [Documents côte à côte](./side-by-side.md). |
| **⋮** | Le menu du document : mettre en favori, ajouter à un tableau, mode lecture, défilement machine à écrire, vérifier l’orthographe, enregistrer une version, exporter, mettre à la corbeille, etc. |
| **Détails…** (le ⓘ) | Le statut du document, son synopsis ou sa description, son objectif de mots, ses étiquettes, sa couleur et son emplacement. Voir [Organiser](./organizing.md). |
| **Infos** (`⇧⌘I`) | Ouvre ou ferme le panneau Infos. |
| **Sanctuaire** (`⌘.`) | Masque tout, sauf la page. Voir [Concentration et Sanctuaire](./focus-and-writing-modes.md). |

Le nombre de mots se trouve dans le coin inférieur droit. Si le document a un
objectif de mots, vous y voyez vos mots et l’objectif. Cliquez une fois
dessus pour ouvrir l’onglet **Plan** du panneau **Infos**. Cliquez une
seconde fois pour ouvrir les **Statistiques du document** complètes.

## Le panneau Infos {#the-info-panel}

<img src="/img/app/outline-light.png" alt="Le panneau Infos à côté d’une page de recherche, sur l’onglet Plan : mots, temps de lecture, titres et notes de bas de page" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/outline-dark.png" alt="Le panneau Infos à côté d’une page de recherche, sur l’onglet Plan : mots, temps de lecture, titres et notes de bas de page" width="1600" height="1000" loading="lazy" decoding="async" />

Appuyez sur `⇧⌘I`, ou cliquez sur **Infos**, pour ouvrir un panneau à droite
du document. Il comporte cinq onglets :

| Onglet | Ce qu’il affiche |
| --- | --- |
| **Plan** | Le nombre de mots, le temps de lecture et l’objectif ; les titres et les notes de bas de page ; **Ajouter au tableau…** et **Enregistrer une version…**. |
| **Liens** | Les documents vers lesquels celui-ci renvoie et ceux qui renvoient vers lui, les notes qui lui sont liées, et le **Graphe local**. Voir [Liens et graphe](./links-and-graph.md). |
| **Notes** | Ses surlignages, ses commentaires et ses notes en marge (`⇧⌘A`). Voir [Annotations et notes en marge](./annotations.md). |
| **Tâches** | Les éléments de ses listes de tâches, et les cartes de tableau qui les suivent. |
| **Historique** | Ses versions. Voir [Versions et sauvegarde](./versions-and-backup.md). |

Certains documents affichent d’autres onglets :

- Tant que vous utilisez le [dictionnaire](./dictionary.md) (`⇧⌘D`), il forme un
  sixième onglet.
- Une page du matin affiche à la place **La pratique** et **Historique**.
- Les pages du projet lui-même affichent **Projet**.

**Ouvert ou fermé.** Le panneau reste ouvert tant que vous ne le fermez pas.
Une fois fermé, il le reste pour tous les documents, même après avoir quitté
Poiesis, jusqu’à ce que vous le rouvriez. Si la fenêtre est trop étroite pour tout
afficher, Poiesis masque le panneau sans le fermer. Élargissez la fenêtre, et le
panneau revient.

**Modifier les largeurs.** Faites glisser le fin séparateur entre deux
colonnes pour les élargir ou les rétrécir. Vous pouvez aussi atteindre le
séparateur au clavier, puis utiliser les touches fléchées. Poiesis retient les
largeurs de chaque coffre.

**Fermer le panneau avec son séparateur.** Double-cliquez sur le séparateur
du panneau Infos, ou faites-le glisser presque jusqu’au bord.

## L’Accueil de chaque mode {#each-modes-home}

Pour ouvrir l’Accueil du mode où vous vous trouvez, appuyez sur `⌘⇧H` ou
cliquez sur **Accueil**, en haut de la barre latérale.

**Écrire** affiche :

- Le chapitre à **Reprendre**, les projets **En cours**, les **Pièces**
  récentes et les **Recherches récentes**.
- À côté : **Aujourd’hui** (les mots du jour, votre série, la session en
  cours, les jours de la semaine où vous avez écrit), le mois, et ce qui est
  **À rendre cette semaine** sur vos tableaux.

**Notes** affiche :

- **Notez une idée…**, les notes sous **Modifié récemment** et vos **Actions
  en cours**.
- À côté : le mois, vos notes sous **Favoris** et vos **Étiquettes**.

**Journal** affiche :

- L’entrée du jour, **Cette semaine** et les jours précédents.
- À côté : les **Pages du matin** du jour, le mois et **Ce jour-là**. **Ce
  jour-là** affiche ce que vous avez écrit à la même date, les autres années.

## Tout trouver : `⌘K` {#find-anything-k}

Appuyez sur `⌘K` (**Fichier → Rechercher un document…**), ou cliquez sur
**Rechercher…** dans la barre en haut de la page, pour trouver un document,
un projet ou un personnage par son nom. Une petite fenêtre s’ouvre :
la palette. Avant que vous ne tapiez quoi que ce soit, elle affiche :

- **Ouvert maintenant** : les documents que vous avez ouverts et pas encore
  fermés. Celui qui est à l’écran porte la mention **ici**.
- **Aller à** : l’Accueil, les modes et les lieux. D’autres destinations
  apparaissent à mesure que vous tapez.
- **Créer** : un nouveau document. D’autres choix apparaissent à mesure que
  vous tapez.

Dès que vous tapez, Poiesis cherche dans tous les documents des trois modes, dans
les titres comme dans le texte. Chaque résultat indique le mode où il se
trouve.

| Touche | Ce qu’elle fait |
| --- | --- |
| `Enter` | Ouvre le résultat sélectionné. |
| `⌥↵` | L’ouvre à côté du document où vous êtes. |
| `⌘↵` | L’ouvre et laisse la palette ouverte, pour que vous puissiez en ouvrir plusieurs. |
| `⌘W` | Ferme le document ouvert qui est sélectionné ; la palette reste ouverte. |
| `Esc` | Ferme la palette. |

## Lancer une commande : `⌘P` {#run-a-command-p}

Appuyez sur `⌘P` (**Fichier → Palette de commandes…**) pour lancer une
commande. Vous y trouvez notamment les nouveaux documents, les exports, les
versions, les coffres, le défilement machine à écrire et la recherche de
mises à jour. Avant que vous ne tapiez quoi que ce soit, la palette affiche
les commandes que vous avez lancées **Dernièrement**. Tapez pour chercher
parmi toutes les commandes.

## Aller et revenir {#go-back-and-forth}

| Touches | Ce qu’elles font |
| --- | --- |
| `⌘[` / `⌘]` | Reculer et avancer parmi les endroits où vous êtes passé, dans la liste comme sur la page. Les boutons latéraux de votre souris font la même chose. |
| `⌥⌘←` / `⌥⌘→` | Le document situé au-dessus ou au-dessous dans la liste : le chapitre précédent ou suivant, la note suivante, le jour d’avant. |
| `⌘W` | Ferme le document et conserve sa liste. Un document ouvert depuis un autre endroit (le calendrier, un tableau, le graphe) vous ramène, en se fermant, là où vous l’avez ouvert. Si aucun document n’est ouvert, `⌘W` vous ramène à l’Accueil du mode. |
| `⌘⇧H` | L’Accueil du mode. |

:::tip Tous les raccourcis sur une seule fiche

Appuyez sur `⌘/` pour voir les principaux raccourcis réunis. Appuyez sur `⌘/`
ou sur `Esc` pour refermer la fiche. La liste complète se trouve dans
[Raccourcis clavier](./keyboard-shortcuts.md).

:::

## Voir aussi {#see-also}

- [Votre premier coffre](./getting-started.md)
- [Réglages d’écriture](./setup.md)
- [Documents côte à côte](./side-by-side.md)
- [Raccourcis clavier](./keyboard-shortcuts.md)

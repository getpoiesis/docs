---
title: L’éditeur
description: La page où vous écrivez, la barre d’outils de sélection, le menu des blocs et le menu ⋮ du document.
---

# L’éditeur

L’éditeur, c’est la page où vous écrivez. Vous y trouvez un titre, votre texte
et quelques boutons. Tout le reste se range dans les menus du document et dans
son panneau Infos.

<img src="/img/app/editor-light.png" alt="Un chapitre ouvert sur la page, avec la liste des chapitres du projet à côté et les boutons de la page en haut à droite" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="Un chapitre ouvert sur la page, avec la liste des chapitres du projet à côté et les boutons de la page en haut à droite" width="1600" height="1000" loading="lazy" decoding="async" />

## Écrire {#write-something}

1. Appuyez sur `⌘N` pour créer un document, ou cliquez sur un document dans
   la liste.
2. Saisissez un titre en haut de la page. C’est sous ce nom que le document
   apparaît dans la liste, dans la recherche et dans les liens.
3. Écrivez votre texte sous le titre. φ l’enregistre pour vous.
4. Tapez `/` sur une ligne vide pour ajouter un titre, une liste, une citation
   ou un autre bloc.
5. Sélectionnez quelques mots pour faire apparaître la barre d’outils. Elle
   propose le gras, l’italique, le lien, le surlignage et le commentaire.

Pendant la saisie, φ corrige votre ponctuation : les guillemets droits
deviennent des guillemets typographiques, deux traits d’union deviennent un
tiret et trois points deviennent des points de suspension.

## Les boutons au-dessus de la page {#the-buttons-above-the-page}

Ces boutons se trouvent en haut à droite de la page :

| Bouton | Ce qu’il fait |
| --- | --- |
| **Vue partagée** (`⌘\`) | Ouvre un second volet à côté de la page. Voir [Documents côte à côte](./side-by-side). |
| **⋮** | Ouvre le menu du document, décrit plus bas. |
| **Détails…** (ⓘ) | Affiche le statut du document, son synopsis, son objectif de mots, ses étiquettes, sa couleur, s’il est en favori, et l’endroit où il est rangé. |
| **Infos** (`⌘⇧I`) | Ouvre le panneau Infos. Il comprend cinq parties : **Plan**, **Liens**, **Notes**, **Tâches** et **Historique**. |
| **Sanctuaire** (`⌘.`) | Masque tout sauf la page. Voir [Concentration et Sanctuaire](./focus-and-writing-modes). |

Le nombre de mots s’affiche dans le coin inférieur droit de la page. Si le
document a un objectif de mots, il apparaît à côté de l’objectif.

- Cliquez une fois sur le nombre de mots pour ouvrir **Plan** dans le panneau
  Infos. Vous y voyez le nombre de mots et le temps de lecture.
- Cliquez une seconde fois pour voir toutes les statistiques du document.

Les notes n’affichent pas de nombre de mots.

## Enregistrement {#saving}

Vous n’avez pas besoin d’enregistrer : φ le fait un instant après que vous
avez cessé de taper.

φ enregistre avec précaution. Chaque enregistrement est d’abord écrit dans un
fichier temporaire, que φ relit pour le vérifier ; c’est seulement ensuite
qu’il remplace le document. Si l’application plante ou si le disque est plein,
votre document ne reste donc jamais à moitié écrit.

- Appuyez sur `⌘S` pour enregistrer tout de suite. φ garde aussi une version,
  à laquelle vous pourrez revenir plus tard.
- Choisissez **Enregistrer une version…** (`⌘⇧S`) pour donner un nom à la
  version.

Voir [Versions et sauvegarde](./versions-and-backup).

## Mettre en forme une sélection {#format-a-selection}

Sélectionnez du texte. Une petite barre d’outils apparaît au-dessus, avec les
boutons suivants :

<img src="/img/app/selection-toolbar-light.png" alt="Quelques mots sélectionnés dans un chapitre, avec la barre d’outils au-dessus et ses outils supplémentaires visibles" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/selection-toolbar-dark.png" alt="Quelques mots sélectionnés dans un chapitre, avec la barre d’outils au-dessus et ses outils supplémentaires visibles" width="1600" height="1000" loading="lazy" decoding="async" />

- **Gras** (`⌘B`), **Italique** (`⌘I`) et **Souligné** (`⌘U`).
- **Titre** : transforme la ligne en titre, ou la ramène au texte normal.
- **Lien** : demande une adresse web.
- **Surligner et commenter** (la pastille de couleur) : choisissez une couleur,
  une **Couleur personnalisée** ou **Retirer le surlignage**.
- **Commenter (sans surlignage)** : ajoute un commentaire aux mots sans les
  colorer.

Cliquez sur **Plus d’outils** (› au bout de la barre) pour accéder aux autres
outils : **Barré**, **Code en ligne**, **Aligner à gauche**, **Centrer**,
**Aligner à droite**, **Justifier**, **Rechercher le mot** (qui ouvre le
[dictionnaire](./dictionary)) et **Enregistrer la sélection comme modèle…**.

φ conserve les surlignages et les commentaires sous forme
d’[annotations](./annotations).

Appuyez sur `Esc` pour masquer la barre d’outils. Elle n’apparaît ni en mode
lecture ni dans les pages du matin.

## Insérer un bloc {#insert-a-block}

Un bloc est un élément de la page qui n’est pas du texte courant : un titre,
une citation, un tableau ou une image, par exemple.

<img src="/img/app/slash-menu-light.png" alt="Un chapitre avec une barre oblique tapée sur une ligne vide et le menu des blocs ouvert" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/slash-menu-dark.png" alt="Un chapitre avec une barre oblique tapée sur une ligne vide et le menu des blocs ouvert" width="1600" height="1000" loading="lazy" decoding="async" />

1. Tapez `/`. Le menu des blocs s’ouvre.
2. Tapez un mot pour raccourcir le menu, par exemple `/heading`, `/quote`,
   `/table`, `/image`, `/date`, `/scene`, `/verse` ou `/footnote`. Ne tapez
   pas d’espace : une espace ferme le menu.
3. Appuyez sur `Enter`.

Vos propres [modèles](./templates) figurent aussi dans le menu, sous leur nom.

Vous pouvez également passer par la souris : placez le pointeur sur le bord
gauche d’une ligne et cliquez sur le **+** qui apparaît (**Insérer un bloc en
dessous (/)**).

Le menu varie selon le type de document :

| Où | Ce que propose le menu |
| --- | --- |
| **Un chapitre, un poème ou un essai dans un projet** | Tout, y compris **Vers**, **Saut de scène**, **Épigraphe**, **Exergue**, **Lettrine**, **Note de bas de page**, **Citation bibliographique**, **Bibliographie** et **Table des matières**. |
| **Une note, ou une pièce hors projet** | Tout, sauf ces blocs de manuscrit. |
| **Une entrée de journal** | Les titres, les listes, les citations, les images et les dates. Ni encadrés, ni tableaux, ni code. |
| **Les pages du matin** | Aucun menu. Les pages du matin ne contiennent que du texte. |

Un [projet](./collections) est un livre, ou tout autre texte long composé de
plusieurs documents.

Le menu propose les listes de tâches (**Liste de tâches**) dans Notes et sur
les pages de recherche. Pour en disposer dans un autre mode, ouvrez
**Réglages → Réglages d’écriture → Modes** et activez **Listes de tâches**
pour ce mode.

Un bloc déjà présent dans un document reste toujours affiché, même si le menu
de ce document ne le propose pas.

La page [Mise en forme et blocs](./formatting-and-blocks) recense tous les
blocs et la façon de les insérer.

## Le menu ⋮ du document {#the-documents--menu}

Cliquez sur **⋮** au-dessus de la page. Ce menu réunit les commandes qui
concernent le document entier :

- **Mettre en favori**, **Ajouter au tableau…** et **Définir un objectif de
  mots**.
- **Déplacer vers les pièces d’Écrire** ou **Déplacer vers Notes**, pour un
  document qui ne fait pas partie d’un projet.
- **Détails…**, **Vue partagée** et **Ouvrir à côté…**.
- **Plan**, **Liens et rétroliens**, **Notes** et **Historique des versions**.
  Chacune de ces commandes ouvre la partie correspondante du panneau Infos.
- **Enregistrer une version…** et **Ouvrir le dictionnaire** (`⌘⇧D`).
- **Mode lecture**, **Défilement machine à écrire**, **Sanctuaire** et
  **Vérifier l’orthographe…**.
- Tous les formats dans lesquels vous pouvez exporter le document.
- **Enregistrer une copie (`.poiesis` avec images)…** et **Déplacer vers un
  coffre…**. Un [coffre](./vaults) est le dossier où φ range vos documents.
- **Déplacer vers la corbeille**.

Sur une page du matin, **Sceller la journée** remplace **Mettre en favori** et
**Ajouter au tableau…**.

Il existe un second menu. Faites un clic droit dans le texte : vous y trouvez
les suggestions d’orthographe, puis couper, copier et coller, et enfin
**Plan**, **Liens wiki**, **Annotations** et **Historique des versions**.

## Passer d’un document à l’autre {#move-between-documents}

φ n’a pas d’onglets. Vous pouvez ouvrir un document de trois façons :

- Cliquez dessus dans la liste.
- Cliquez sur un lien qui y mène.
- Appuyez sur `⌘K`. Les documents déjà ouverts sont listés sous **Ouvert
  maintenant**.

| Pour | Faites ceci |
| --- | --- |
| Créer un document | `⌘N` |
| Fermer le document | `⌘W` |
| Revenir en arrière ou avancer | **‹ ›** en haut de la liste, `⌘[` et `⌘]`, ou les boutons latéraux de la souris |
| Ouvrir le document du dessus ou du dessous dans la liste | `⌥⌘←` et `⌥⌘→` |

## Lire sans modifier {#read-without-editing}

En **Mode lecture**, vous pouvez lire le document, mais pas le modifier. C’est
pratique pour relire un brouillon sans risquer d’y taper par mégarde.

- Appuyez sur `⌘E`, ou choisissez **Affichage → Mode lecture**, pour activer
  le mode lecture.
- Appuyez de nouveau sur `⌘E` pour revenir à l’écriture.

En mode lecture, il suffit de cliquer sur un lien pour le suivre. Pendant que
vous écrivez, maintenez `⌘` enfoncée et cliquez sur le lien.

## Voir aussi {#see-also}

- [Mise en forme et blocs](./formatting-and-blocks)
- [Concentration et Sanctuaire](./focus-and-writing-modes)
- [Annotations et notes en marge](./annotations)
- [Raccourcis clavier](./keyboard-shortcuts)

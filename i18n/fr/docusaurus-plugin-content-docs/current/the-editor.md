---
title: L’éditeur
description: La page sur laquelle vous écrivez, la barre d’outils de sélection, le menu slash et le menu ⋮ du document.
---

# L’éditeur

La page est l’endroit où vous écrivez, et φ la garde calme : un titre, vos mots,
et quelques commandes qui n’apparaissent que lorsque vous les cherchez. Tout le
reste d’un document attend dans ses menus et dans son panneau Infos jusqu’à ce
que vous en ayez besoin.

<img src="/img/app/editor-light.png" alt="Un chapitre ouvert sur la page, avec les chapitres du projet dans la liste à côté et les boutons de la page en haut à droite" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="Un chapitre ouvert sur la page, avec les chapitres du projet dans la liste à côté et les boutons de la page en haut à droite" width="1600" height="1000" loading="lazy" decoding="async" />

## Écrire quelque chose {#write-something}

1. Appuyez sur `⌘N` pour un nouveau document, ou choisissez-en un dans la
   liste.
2. Tapez un titre en haut. C’est le nom du document partout : dans la liste,
   dans la recherche et dans les liens.
3. Écrivez en dessous. φ enregistre au fur et à mesure.
4. Tapez `/` sur une ligne vide pour un titre, une liste, une citation ou
   n’importe quel autre bloc.
5. Sélectionnez des mots pour la barre d’outils : gras, italique, un lien, un
   surlignage, un commentaire.

## Les boutons au-dessus de la page {#the-buttons-above-the-page}

En haut à droite de la page se trouvent quelques boutons :

| Bouton | Ce qu’il fait |
| --- | --- |
| **Vue partagée** (`⌘\`) | Ouvre un second volet à côté de la page. Voir [Documents côte à côte](./side-by-side). |
| **⋮** | Le menu du document, ci-dessous. |
| **Détails…** (ⓘ) | Le statut du document, son synopsis, son objectif de mots, ses étiquettes, sa couleur, son étoile et son emplacement. |
| **Infos** (`⌘⇧I`) | Le panneau Infos : **Plan**, **Liens**, **Notes**, **Tâches** et **Historique**. |
| **Sanctuaire** (`⌘.`) | Tout disparaît sauf la page. Voir [Concentration et Sanctuaire](./focus-and-writing-modes). |

Le nombre de mots se trouve dans le coin inférieur droit de la page, face à
l’objectif quand le document en a un. Cliquez dessus pour ouvrir le **Plan** du
panneau Infos, avec les mots et le temps de lecture ; cliquez de nouveau pour
les statistiques complètes du document. Les notes n’affichent pas de compteur,
puisqu’une note ne s’écrit pas en vue d’une longueur.

## Enregistrement {#saving}

Vous n’avez jamais à enregistrer. φ enregistre un instant après que vous avez
cessé de taper. Chaque enregistrement est écrit dans un fichier temporaire,
relu pour vérification, et seulement ensuite mis en place : une panne ou un
disque plein ne peut donc pas laisser un document à moitié écrit.

`⌘S` enregistre immédiatement et garde aussi une version à laquelle vous pouvez
revenir. Pour nommer une version, utilisez **Enregistrer une version…**
(`⌘⇧S`). Voir [Versions et sauvegarde](./versions-and-backup).

## Mettre en forme une sélection {#format-a-selection}

Sélectionnez du texte et une petite barre d’outils flotte au-dessus :

- **Gras** (`⌘B`), **Italique** (`⌘I`) et **Souligné** (`⌘U`).
- **Titre** : transforme la ligne en titre, ou de nouveau en texte.
- **Lien** : demande une adresse web.
- **Surligner et commenter** (la pastille de couleur) : une couleur, une
  **Couleur personnalisée**, ou **Retirer le surlignage**.
- **Commenter (sans surlignage)** : un commentaire sur les mots sans les
  colorer.

**Plus d’outils** (› à l’extrémité) ouvre le reste : **Barré**, **Code en
ligne**, **Aligner à gauche**, **Centrer**, **Aligner à droite**,
**Justifier**, **Rechercher le mot** (le [dictionnaire](./dictionary)) et
**Enregistrer la sélection comme modèle…**.

Les surlignages et les commentaires sont gardés comme
[annotations](./annotations). `Esc` ferme la barre d’outils. Elle n’apparaît
pas en mode lecture ni sur les pages du matin.

## Insérer un bloc {#insert-a-block}

Tapez `/` et un mot pour filtrer le menu, puis appuyez sur `Enter`. Une espace
ferme le menu, alors tapez un seul mot : `/heading`, `/quote`, `/table`,
`/image`, `/date`, `/scene`, `/verse`, `/footnote`. Vos propres
[modèles](./templates) figurent aussi dans le menu, par leur nom.

Vous pouvez aussi survoler le bord gauche d’une ligne et cliquer sur le **+**
qui apparaît (**Insérer un bloc en dessous (/)**).

Le menu propose ce qui convient à l’endroit où vous êtes :

| Où | Ce que propose le menu |
| --- | --- |
| **Un chapitre, un poème ou un essai dans un projet** | Tout, y compris **Vers**, **Saut de scène**, **Épigraphe**, **Exergue**, **Lettrine**, **Note de bas de page**, **Citation bibliographique**, **Bibliographie** et **Table des matières**. |
| **Une note, ou un texte hors projet** | Tout sauf ces blocs de manuscrit. |
| **Une entrée de journal** | Titres, listes, citations, images et dates ; pas d’encadrés, de tableaux ni de code. |
| **Les pages du matin** | Aucun menu : le texte seul. |

Les listes de tâches (**Liste de tâches**) sont proposées dans les Notes et sur
les pages de recherche. Pour les proposer dans un autre mode, ouvrez
**Réglages → Réglages d’écriture → Modes** et activez **Listes de tâches** pour
ce mode. Un bloc déjà présent dans un document s’affiche toujours, où que vive
le document.

Chaque bloc, et la façon de l’insérer, se trouve dans
[Mise en forme et blocs](./formatting-and-blocks).

## Le menu ⋮ du document {#the-documents--menu}

Le **⋮** au-dessus de la page rassemble ce que vous faites au document dans
son ensemble :

- **Mettre en favori**, **Ajouter au tableau…** et **Définir un objectif de
  mots**.
- **Déplacer vers les pièces d’Écrire** ou **Déplacer vers Notes**, pour un
  document hors projet.
- **Détails…**, **Vue partagée** et **Ouvrir à côté…**.
- Les parties du panneau Infos : **Plan**, **Liens et rétroliens**, **Notes**
  et **Historique des versions** ; **Enregistrer une version…** et **Ouvrir le
  dictionnaire** (`⌘⇧D`).
- **Mode lecture**, **Défilement machine à écrire**, **Sanctuaire** et
  **Vérifier l’orthographe…**.
- Tous les formats dans lesquels le document peut être exporté,
  **Enregistrer une copie (`.poiesis` avec images)…** et **Déplacer vers un
  coffre…**.
- **Déplacer vers la corbeille**.

Une page du matin a **Sceller la journée** à la place de l’étoile et du
tableau.

Un clic droit dans le texte propose les suggestions d’orthographe, couper,
copier et coller, puis **Plan**, **Liens wiki**, **Annotations** et
**Historique des versions**.

## Passer d’un document à l’autre {#move-between-documents}

Il n’y a pas d’onglets. Ouvrez un document depuis la liste, depuis un lien, ou
avec `⌘K`, qui liste les documents ouverts sous **Ouvert maintenant**.

| Pour | Faites ceci |
| --- | --- |
| Créer un nouveau document | `⌘N` |
| Fermer le document | `⌘W` |
| Revenir en arrière ou aller en avant | **‹ ›** en haut de la liste, `⌘[` et `⌘]`, ou les boutons latéraux de la souris |
| Ouvrir le document au-dessus ou en dessous dans la liste | `⌥⌘←` et `⌥⌘→` |

## Lire sans modifier {#read-without-editing}

Le **Mode lecture** (`⌘E`, ou **Affichage → Mode lecture**) passe la page en
lecture seule, pour que vous puissiez parcourir un brouillon sans frappe
malencontreuse. Un simple clic suit un lien ; pendant l’édition, maintenez `⌘`
et cliquez. Appuyez de nouveau sur `⌘E` pour écrire.

Pendant que vous tapez, φ arrange votre ponctuation pour vous : les guillemets
droits deviennent typographiques, deux traits d’union un tiret, trois points
des points de suspension.

## Voir aussi {#see-also}

- [Mise en forme et blocs](./formatting-and-blocks)
- [Concentration et Sanctuaire](./focus-and-writing-modes)
- [Annotations](./annotations)
- [Raccourcis clavier](./keyboard-shortcuts)

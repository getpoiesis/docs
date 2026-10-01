---
title: L'éditeur
---

# L'éditeur

La page est l'endroit où vous écrivez, et φ la garde calme : un titre, vos mots,
et des commandes qui n'apparaissent que lorsque vous les cherchez. Cette page
couvre la page elle-même, l'enregistrement, la barre d'outils de sélection, le
menu slash, le menu ⋮ du document, et la navigation entre les documents.

<img src="/img/app/editor-light.png" alt="Un chapitre ouvert dans l'éditeur, avec son panneau à droite" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/editor-dark.png" alt="Un chapitre ouvert dans l'éditeur, avec son panneau à droite" width="1600" height="1000" loading="lazy" decoding="async" />

## La page {#the-page}

En haut de la page se trouve le **titre** du document, et en dessous votre
texte. Le titre est le nom du document partout ailleurs : dans la liste, dans la
recherche, dans `⌘K` et dans les liens.

Tout le reste d'un document (son statut, son synopsis, son objectif de mots, ses
étiquettes, sa couleur, son étoile et son emplacement) est gardé hors de la page,
dans **Détails…**. Ouvrez-le depuis le menu ⋮ du document en haut à droite, ou
faites un clic droit sur le document dans la liste.

Dans le coin inférieur droit de la page se trouve le **nombre de mots** (ou
« mots sur l'objectif », quand vous en avez fixé un). Cliquez dessus pour les
**Statistiques du document** : mots, caractères, phrases, temps de lecture, et
vos totaux pour le coffre. Les notes n'affichent pas de compteur, puisqu'une note
ne s'écrit pas en visant une longueur.

## Enregistrement automatique {#autosave}

Vous n'avez jamais à enregistrer. Pendant que vous tapez, φ enregistre votre
travail automatiquement un instant après que vous vous arrêtez. Chaque
enregistrement est **atomique et vérifié** : φ écrit dans un fichier temporaire,
le relit pour confirmer que les octets sont bien arrivés, et ne le met en place
qu'ensuite. Une panne ou un disque plein ne peut pas vous laisser avec un
document à moitié écrit.

Si vous voulez enregistrer *tout de suite*, par exemple juste avant de vous
éloigner, appuyez sur `⌘S`. Cela écrit immédiatement le document actuel et
enregistre aussi un point de contrôle de version, pour que vous ayez un point
explicite où revenir. Pour enregistrer une version nommée, utilisez
**Enregistrer une version…** (`⌘⇧S`). Voir [Versions et sauvegarde](versions-and-backup.md).

## La barre d'outils contextuelle {#the-bubble-toolbar}

Sélectionnez du texte et une petite barre d'outils flotte au-dessus. Elle
contient toujours les quelques choses auxquelles sert d'habitude une sélection :

- **Gras** (`⌘B`), **Italique** (`⌘I`) et **Souligné** (`⌘U`)
- **Titre** : transforme la ligne en titre, ou de nouveau en texte
- **Lien** : demande une adresse web et lie la sélection. Voir
  [Liens](formatting-and-blocks.md#links).
- **Surligner et commenter** (la pastille de couleur) : choisissez une couleur
  pour surligner la sélection, choisissez une **Couleur personnalisée**, ou
  **Retirer le surlignage**
- **Commenter (sans surlignage)** : attache un commentaire à la sélection sans la
  colorer

Les surlignages et les commentaires deviennent des annotations ; voir
[Annotations](annotations.md).

Le bouton **›** à l'extrémité (**Plus d'outils**) ouvre le reste à côté :

- **Barré** et **Code en ligne**
- **Aligner à gauche**, **Centrer**, **Aligner à droite** et **Justifier**
- **Rechercher le mot** : ouvre le [dictionnaire](dictionary.md) sur la
  sélection
- **Enregistrer la sélection comme modèle…** : garde le passage sélectionné
  comme [modèle](templates.md)

Appuyez sur `Échap` pour fermer la barre d'outils. Elle n'apparaît pas en
[mode lecture](#reading-mode) ni sur les pages du matin, qui sont
délibérément dépouillées.

## Le menu slash {#the-slash-menu}

Pour insérer un bloc (un titre, une liste, une citation, une image, et plus),
tapez **`/`** n'importe où dans une ligne. Un menu s'ouvre ; continuez à taper
pour le filtrer, puis appuyez sur `Entrée` ou cliquez pour insérer.

Tapez un seul mot après la barre oblique, car une espace ferme le menu. Par
exemple :

- `/heading` ou `/h1`, `/h2`, `/h3`
- `/bullet`, `/numbered`, `/task`
- `/quote`, `/table`, `/image`, `/code`
- `/date`, `/time`
- `/scene`, `/verse`, `/footnote`, `/toc`

Vos propres [modèles](templates.md) figurent aussi dans le menu, par leur nom.

Vous pouvez aussi survoler le bord gauche de n'importe quelle ligne et cliquer
sur le **+** qui apparaît (**Insérer un bloc en dessous (/)**). Il ouvre le même
menu pour une nouvelle ligne en dessous.

### Ce que propose chaque type de document {#what-each-kind-of-document-offers}

Le menu ne propose que ce qui convient au document où vous êtes :

- **Les documents d'un projet** (chapitres, poèmes, essais) ont tout, y compris
  les blocs de manuscrit : **Vers**, **Saut de scène**, **Épigraphe**,
  **Exergue**, **Note de bas de page**, **Lettrine**, **Citation
  bibliographique**, **Bibliographie** et **Table des matières**.
- **Les notes**, et les pièces d'Écrire qui ne sont pas dans un projet, ont tout
  sauf ces blocs de manuscrit.
- **Les entrées du journal** ont les titres, les listes, les citations, les
  images et les dates, mais pas d'encadrés, de tableaux ni de blocs de code.
- **Les pages du matin** n'ont aucun menu slash. Elles sont pour le texte seul.

Les listes de tâches (**Liste de tâches**) sont proposées dans Notes et sur les
pages de recherche. Vous pouvez changer cela par mode dans **Réglages →
Réglages d'écriture → Modes → Listes de tâches**.

Le catalogue complet se trouve dans [Mise en forme et blocs](formatting-and-blocks.md).

## Le menu ⋮ du document {#the-documents--menu}

Le **⋮** en haut à droite de la page rassemble ce que vous faites au document
dans son ensemble :

- **Mettre en favori**, **Ajouter au tableau…** et **Définir un objectif de
  mots**
- **Déplacer vers les pièces d'Écrire** ou **Déplacer vers Notes**, pour un
  document qui n'est pas dans un projet
- **Détails…** : statut, synopsis, objectif, étiquettes, couleur et emplacement
- **Infos** : **Plan**, **Liens et rétroliens**, **Notes** et **Historique des
  versions** ouvrent l'onglet correspondant du panneau Infos ; **Enregistrer une
  version…** (`⌘⇧S`) et **Ouvrir le dictionnaire** (`⌘⇧D`)
- **Affichage** : **Mode lecture**, **Défilement machine à écrire** (`⌘⇧T`),
  **Sanctuaire** (`⌘.`) et **Vérifier l'orthographe…**
- **Exporter** : tous les formats dans lesquels le document peut être
  enregistré, et **Enregistrer une copie (.poiesis avec images)…**. Voir
  [Exporter](exporting.md).
- **Déplacer vers la corbeille**

Sur une page du matin, le menu est plus court, avec **Sceller la journée** à la
place de l'étoile et du tableau.

Un clic droit dans le texte propose aussi des raccourcis vers **Plan**, **Liens
wiki**, **Annotations** et **Historique des versions**, sous les habituels
couper, copier et coller.

## Naviguer entre les documents {#moving-between-documents}

Il n'y a pas d'onglets. Vous ouvrez un document en le choisissant dans la liste,
en suivant un lien, ou en le trouvant avec `⌘K`. Les documents que vous avez
ouverts récemment sont listés sous **Ouvert maintenant** dans `⌘K`, où vous
pouvez revenir à l'un d'eux ou le fermer.

- **Nouveau document** : `⌘N`
- **Fermer le document** : `⌘W` vous ramène là d'où vous l'avez ouvert.
- **Retour et suivant** : les flèches **‹ ›** en haut de la liste (ou en haut de
  la page quand la liste est masquée), `⌘[` et `⌘]`, ou les boutons latéraux de
  votre souris. Ils retracent vos pas comme le fait un navigateur, ce qui est
  pratique après avoir suivi une chaîne de [wiki-links](links-and-graph.md).
- **Précédent ou suivant dans la liste** : `⌥⌘←` et `⌥⌘→` parcourent les
  documents de la liste où vous êtes.

## Typographie intelligente {#smart-typography}

Pendant que vous tapez, φ arrange pour vous la ponctuation courante : les
guillemets droits deviennent typographiques, deux traits d'union deviennent un
tiret cadratin, trois points deviennent des points de suspension, et ainsi de
suite. Vous écrivez naturellement et le texte sort composé.

## Mode lecture {#reading-mode}

Quand vous préférez lire plutôt que modifier, activez le **Mode lecture** (`⌘E`)
depuis le menu **Affichage**, ou **Mode lecture** dans le menu ⋮ du document. La
page passe en lecture seule et un simple clic suit les liens. (Pendant
l'édition, maintenez `⌘` et cliquez pour en suivre un.) Appuyez de nouveau sur
`⌘E` pour revenir à l'écriture.

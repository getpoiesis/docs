---
title: L'éditeur
sidebar_position: 4
---

# L'éditeur

L'éditeur est une page calme et pleine largeur. La plupart du temps, il n'y a que
vous et le texte — les commandes apparaissent quand vous en avez besoin et
s'effacent quand vous n'en avez pas. Cette page couvre les bases de l'écriture :
la page elle-même, l'enregistrement, la barre d'outils de sélection, le menu
slash, les onglets et la navigation entre les documents.

## Titre et description

Au-dessus de la page se trouvent le **titre** du document et une **description**
optionnelle. Les deux sont des champs de texte simple qui grandissent au fil de la
frappe. Le titre nomme le document (et c'est ce qui apparaît dans les onglets, la
recherche et les liens) ; la description est une courte ligne de contexte pour
vous-même. Laissez l'un ou l'autre vide si vous n'en avez pas besoin.

## Enregistrement automatique

Vous n'avez jamais à enregistrer. Au fil de la frappe, φ enregistre votre travail
automatiquement un instant après que vous arrêtez — temporisé pour ne pas écrire à
chaque frappe. Chaque enregistrement est **atomique et vérifié** : φ écrit dans un
fichier temporaire, le relit pour confirmer que les octets sont bien arrivés, et
ne le met en place qu'ensuite. Une panne ou un disque plein ne peut pas vous
laisser avec un document à moitié écrit.

Si vous voulez enregistrer *à l'instant* — par exemple juste avant de vous
éloigner — appuyez sur `⌘S`. Cela vide immédiatement le document actuel et écrit
aussi un point de contrôle de version, de sorte que vous avez un point explicite
où revenir.

## La barre d'outils contextuelle

Sélectionnez du texte et une petite barre d'outils flotte au-dessus. Elle contient
la mise en forme que vous utilisez en pleine phrase :

- **Gras** (`⌘B`), **Italique** (`⌘I`), **Souligné** (`⌘U`), **Barré**, et
  **Code en ligne**.
- **Lien** — transforme la sélection en lien et demande l'URL. (Voyez
  [Liens](formatting-and-blocks.md#liens).)
- **Alignement** — à gauche, centré, à droite, justifié.
- **Rechercher le mot** (l'icône livre) — ouvre le dictionnaire hors ligne sur
  votre sélection. Voyez [Dictionnaire et thésaurus](dictionary.md).
- **Surligner et commenter** (le surligneur) — ouvre une petite palette :
  choisissez une couleur pour surligner la sélection, choisissez une couleur
  personnalisée, ajoutez un **commentaire** sans surlignage, ou **retirez** un
  surlignage existant. Les surlignages et les commentaires deviennent des
  annotations en marge. Voyez [Annotations](annotations.md).

Appuyez sur `Échap` pour fermer la barre d'outils.

La barre d'outils est destinée aux documents en prose. Sur la surface épurée du
journal / des pages du matin, elle n'apparaît pas — cette page est délibérément
nue.

## Le menu slash

Pour insérer un bloc — un titre, une liste, une citation, une image, et plus —
tapez **`/`** au début d'une ligne vide (ou n'importe où sur une ligne). Un menu
s'ouvre ; continuez à taper pour le filtrer, puis appuyez sur `Entrée` ou cliquez
pour insérer. Par exemple, `/quote`, `/table`, `/image`.

Deux autres façons d'y accéder :

- **Le bouton +.** Survolez le bord gauche de n'importe quel bloc et un **+**
  apparaît. Cliquez dessus pour ouvrir le menu slash et insérer un bloc en
  dessous.
- Les deux chemins ouvrent le même menu. Les blocs proposés dépendent du type de
  document — les blocs de manuscrit comme les vers et les notes de bas de page
  sont masqués sur la surface du journal.

Le catalogue complet se trouve dans
[Mise en forme et blocs](formatting-and-blocks.md).

## Onglets

Les documents s'ouvrent dans des onglets en haut, comme dans un navigateur.

- **Nouveau document** — `⌘N`, ou le **+** au bout de la barre d'onglets.
- **Changer d'onglet** — cliquez sur n'importe quel onglet. Quand il y a plus
  d'onglets que la place disponible, un menu **▾** les liste tous.
- **Fermer un onglet** — le **✕** sur l'onglet, ou `⌘W` pour fermer l'onglet
  actuel.

Certaines vues pleine surface — le graphe, les personnages, le calendrier, et
d'autres — s'ouvrent aussi comme des onglets que vous pouvez fermer de la même
façon.

## Revenir en arrière et avancer

Suivre un lien ou ouvrir un document mémorise où vous étiez. Utilisez les flèches
**précédent** et **suivant** en haut de la page pour retracer vos pas, comme dans
un navigateur — pratique quand vous avez parcouru une chaîne de
[liens-wiki](links-and-graph.md) et voulez revenir.

## Typographie intelligente

Au fil de la frappe, φ corrige la ponctuation courante pour vous : les guillemets
droits deviennent des guillemets typographiques, deux traits d'union deviennent un
tiret cadratin, trois points deviennent des points de suspension, et ainsi de
suite. Vous écrivez naturellement et le texte ressort composé.

## Mode lecture

Quand vous préférez lire plutôt qu'éditer, **Affichage → Mode lecture** (`⌘E`)
rend la page en lecture seule et permet à un simple clic de suivre les liens.
Désactivez-le pour éditer à nouveau.

---
title: Collections (livres et manuscrits)
sidebar_position: 7
---

# Collections (livres et manuscrits)

Une **collection** rassemble des documents en une séquence ordonnée — la
structure d’un livre, d’un recueil de poésie, d’un ensemble d’essais, d’un
scénario. C’est ainsi que φ devient un éditeur de manuscrits plutôt qu’un simple
carnet.

Une collection *référence* des documents ; elle ne les contient pas. Un même
document peut figurer dans plus d’une collection, et **supprimer une collection
ne supprime jamais ses documents** — ils restent dans votre bibliothèque. La
collection détient l’ordre, la structure et la couverture ; l’écriture, elle,
reste là où elle vit.

Ouvrez l’espace **Écrire** (l’icône de livre sur le rail de gauche) pour
travailler avec les collections.

## Créer une collection

Dans l’espace Écrire, cliquez sur le **+** dans l’en-tête Collections pour en
créer une nouvelle. Chaque collection affiche son type, la signature de l’auteur,
le nombre de documents et le nombre de mots (par rapport à son objectif, s’il est
défini). Cliquez sur le nom d’une collection pour l’ouvrir.

Utilisez le menu **⋯** d’une collection pour ajouter le document actuel, la
renommer, l’ouvrir pour la modifier, ou la supprimer.

## Types de collection

Le **type** d’une collection teinte son vocabulaire — la façon dont φ nomme les
éléments qu’elle contient — et façonne ses exports. Les types sont :

- **Livre** — structuré en *Chapitres* (regroupés en *Parties*).
- **Série** — plusieurs livres.
- **Poésie** — des *Poèmes*.
- **Recueil d’essais** — des *Essais*.
- **Recherche** — du matériel de recherche.
- **Journal** — des *Entrées* datées.
- **Scénario** — des *Scènes* (regroupées en *Actes*).
- **Personnalisé** — des *Sections* et *Groupes* génériques.

Changez le type à tout moment depuis la page de la collection. La structure que
vous avez bâtie est préservée ; seuls les libellés changent.

## L’arborescence de structure

Une collection est un **arbre récursif** sans limite de profondeur. Un livre
pourrait être :

```
Book
 └─ Part
     └─ Chapter
         └─ (a deeper sub-section, if you want one)
```

L’arbre comporte deux sortes d’éléments : les **documents** (les feuilles — votre
écriture réelle) et les **groupes** (les branches — Parties, Actes, etc.). Les
éléments de groupe n’existent que pour organiser ; ils ne contiennent aucune
prose propre.

### Les numéros sont calculés, jamais stockés

φ déduit « Partie I », « Chapitre 3 », « Scène 1.2 » de la position de chaque
élément dans l’arbre. Réorganisez quoi que ce soit et tout se renumérote
instantanément. Vous ne tapez jamais un numéro de chapitre, et vous n’avez jamais
à en corriger un.

## Le panneau de la collection

Lorsqu’une collection est ouverte, le panneau voisin du rail est sa navigation
principale — l’arborescence de structure, avec le nombre de mots combiné et la
progression vers l’objectif en haut.

Trois onglets se trouvent au-dessus de l’arbre :

- **Chapitres** (libellé selon le type — *Poèmes*, *Scènes*, etc.) —
  l’arborescence de structure modifiable.
- **Plan** — une liste à plat avec le synopsis et le statut de chaque élément.
- **Index** — la table des matières générée (voir ci-dessous).

### Ajouter et modifier des éléments

Utilisez le **+** pour ajouter un document ou un groupe. Faites un clic droit sur
n’importe quel élément (ou utilisez son menu) pour accéder à l’ensemble des
actions :

- **Ajouter en dessous** — un nouveau document ou groupe après celui-ci.
- **Renommer**, **Dupliquer**.
- **Statut** — Brouillon, Révisé, Final ou À faire.
- **Couleur** — une pastille d’étiquette.
- **Pages liminaires / finales** — marquer l’élément comme *sans numéro* (voir
  ci-dessous).
- **Ouvrir** le document référencé.
- **Retirer de la collection** — sort l’élément de la structure ; le document
  lui-même n’est **pas** supprimé. Retirer un groupe désaffecte aussi tout ce
  qu’il contient, et là encore ne supprime aucun des documents.
- **Déplacer tout en haut** / **Déplacer tout en bas**.

### Réorganiser par glisser-déposer

Glissez n’importe quel élément vers un nouvel emplacement — vers le haut, vers le
bas, dans un groupe, hors d’un groupe. L’arbre se réimbrique et se renumérote au
moment où vous déposez. Vous pouvez aussi travailler au clavier lorsque l’arbre a
le focus : les flèches pour vous déplacer et développer/réduire, Entrée pour
ouvrir, `F2` pour renommer, Suppr pour retirer, `⌘D` pour dupliquer, et `⌘[` /
`⌘]` pour décaler un élément vers le haut ou le bas au sein de son groupe.

## Passer d’un chapitre à l’autre pendant l’écriture

Lorsque vous ouvrez un document qui appartient à une collection, un navigateur de
chapitres apparaît avec sa position — « Chapitre 3 / 12 » — et des contrôles
précédent/suivant. La navigation suit l’ordre de lecture complet du livre, en
descendant dans les groupes, pas seulement le niveau courant. Utilisez les
contrôles, ou `⌘⌥←` et `⌘⌥→`.

## La page de la collection

Avec une collection ouverte et aucun document sélectionné, vous obtenez sa
**page** — la couverture et la vue d’ensemble, le tout modifiable en place :

- **Image de couverture** — cliquez sur la zone de couverture pour en choisir
  une ; retirez-la depuis le formulaire ci-dessous.
- **Titre** — modifiez-le sur place.
- **Profil d’auteur** — choisissez un profil pour définir la signature, ou créez-
  en un nouveau. Les profils d’auteur portent un nom, un nom de plume, une
  biographie, une photo et des liens, et apparaissent dans vos exports.
- **Type** — changez ici le type de la collection.
- **Description** — un court résumé de l’œuvre.
- **Objectif de mots** — voir ci-dessous.

Depuis la page, vous pouvez aussi **Compiler** toute la collection en un seul
document HTML, ou l’exporter en **PDF**, **EPUB** ou **DOCX**, et **Enregistrer
une copie** sous forme de fichier `.poiesis` portable avec les images intégrées.

## Pages liminaires et finales

Certaines pages d’un livre ne sont pas des chapitres — une dédicace, une préface,
une page de remerciements, une annexe. Marquez n’importe quel élément comme
**Pages liminaires / finales** pour le rendre *sans numéro* : il s’affiche sous
son propre nom et ne prend aucun numéro, de sorte que vos véritables chapitres
commencent toujours à 1. Marquer un groupe comme sans numéro se répercute sur
tout ce qu’il contient. Les exports en tiennent compte — les pages liminaires
apparaissent sans numéro dans la table des matières et dans le document compilé.

## Table des matières

L’onglet **Index** génère une table des matières à partir de la structure — en
tenant compte de la profondeur, en suivant l’arbre et sa numérotation calculée,
les pages liminaires et finales étant affichées sans numéro. Elle se met à jour à
mesure que vous réorganisez, et la même table tenant compte de l’arbre est
intégrée lorsque vous exportez en HTML, PDF, EPUB ou DOCX.

## Objectifs de mots

Vous pouvez définir un **objectif de mots** pour une collection depuis sa page.
L’en-tête du panneau et la fiche de la collection affichent une barre de
progression par rapport au nombre de mots combiné de chaque document de la
collection. Les documents individuels peuvent aussi porter leurs propres
objectifs (définis depuis l’en-tête du document), de sorte que vous pouvez suivre
un seul chapitre et le livre entier à la fois.

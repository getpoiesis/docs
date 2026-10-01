---
title: Raccourcis clavier
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Raccourcis clavier

φ est conçu pour garder vos mains sur le clavier. Cette page liste tous les
raccourcis, écrits à la manière de macOS ; sur Windows et Linux, les
modificateurs se correspondent directement, et φ affiche les bons dans ses
propres menus.

<img src="/img/app/palette-light.png" alt="La recherche atteint documents, jours de journal et notes à la fois" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/palette-dark.png" alt="La recherche atteint documents, jours de journal et notes à la fois" width="1600" height="1000" loading="lazy" decoding="async" />

<Tabs groupId="os">
  <TabItem value="mac" label="macOS" default>

Les touches de modification sont ⌘ (Commande), ⇧ (Maj), ⌥ (Option) et ⌃
(Contrôle).

  </TabItem>
  <TabItem value="win" label="Windows / Linux">

Lisez les modificateurs macOS comme leurs équivalents : ⌘ → **Ctrl**, ⌥ →
**Alt**, ⇧ → **Maj**, ⌃ → **Ctrl**. Ainsi `⌘N` correspond à **Ctrl + N**, et
`⌘⌥F` à **Ctrl + Alt + F**.

Quelques-uns diffèrent :

- **Supprimer le document** se fait avec la seule touche **Suppr**.
- **Plein écran** est **F11**.
- **Rétablir** est **Ctrl + Y**.
- **Réglages** n’a pas de raccourci ; utilisez le bouton à curseurs en haut de
  la barre latérale.

</TabItem>
</Tabs>

Si vous en oubliez un, appuyez sur `⌘/` pour afficher une carte des principaux
raccourcis (appuyez de nouveau, ou sur `Esc`, pour la fermer). La même liste,
avec un champ de recherche, se trouve dans **Réglages → Raccourcis**. Et la
palette de commandes (`⌘P`) affiche le raccourci de chaque commande à côté
d’elle.

## S’orienter {#finding-your-way}

| Action | Raccourci |
| --- | --- |
| Rechercher un document… | `⌘K` |
| Palette de commandes | `⌘P` |
| Carte des raccourcis | `⌘/` |
| Rechercher dans ce document | `⌘F` |
| Rechercher et remplacer dans le document | `⌘⌥F` |
| Rechercher dans tous les documents | `⌘⇧F` |
| Aller à l’Accueil d’un mode (Écrire, Notes, Journal, dans l’ordre de la barre latérale) | `⌘1`, `⌘2`, `⌘3` |
| Accueil de ce mode | `⌘⇧H` |
| Précédent · suivant | `⌘[` · `⌘]` |
| Document précédent · suivant dans la liste | `⌥⌘←` · `⌥⌘→` |
| Changer de coffre… | `⌥⌘O` |
| Ouvrir un coffre… | `⌘⇧O` |
| Réglages (macOS) | `⌘,` |

Les boutons latéraux de votre souris permettent aussi de reculer et d’avancer.

### Aller à {#go-to}

Les raccourcis **Aller à** sont un accord : appuyez sur `⌘G`, relâchez, puis
appuyez sur la seconde touche dans les deux secondes environ.

| Aller à | Raccourci |
| --- | --- |
| Accueil de Notes | `⌘G` puis `N` |
| Accueil d’Écrire | `⌘G` puis `C` |
| Accueil du Journal | `⌘G` puis `J` |
| Rechercher un document… | `⌘G` puis `S` |
| Graphe | `⌘G` puis `G` |

## Documents {#documents}

| Action | Raccourci |
| --- | --- |
| Nouveau : un chapitre, un texte, une note ou une entrée, selon l’endroit où vous êtes | `⌘N` |
| Nouvelle partie (dans le plan d’un projet) | `⌘⇧N` |
| Fermer le document (en vue partagée : le volet où vous êtes) | `⌘W` |
| Vue partagée : un volet vide à côté ([côte à côte](side-by-side.md)) | `⌘\` |
| Volet précédent · volet suivant | `⌃⌘←` · `⌃⌘→` |
| Fermer les autres volets | `⌥⌘W` |
| Enregistrer maintenant, avec un point de contrôle | `⌘S` |
| Enregistrer une version… | `⌘⇧S` |
| Supprimer le document | `⌘⌫` |

`⌘N` crée la chose suivante là où vous êtes : un nouveau chapitre dans le plan
d’un projet, un texte ou une note dans le dossier ouvert, etc. `⌘W` sur un lieu
sans document (le calendrier, le graphe, les tableaux, la corbeille) vous ramène
à l’Accueil du mode.

## Affichage et panneaux {#view--panels}

| Action | Raccourci |
| --- | --- |
| Panneau Infos | `⇧⌘I` |
| Panneau Infos, onglet Notes | `⇧⌘A` |
| Dictionnaire | `⌘⇧D` |
| Mode lecture | `⌘E` |
| Sanctuaire (`Esc` permet aussi d’en sortir) | `⌘.` |
| Défilement machine à écrire | `⇧⌘T` ou `⌥⌘T` |
| Zoom avant · zoom arrière | `⌘+` · `⌘-` |
| Barre latérale par-dessus les volets, en vue partagée | `⌘0` |
| Plein écran | `⌃⌘F` |

Sur le graphe, `⇧⌘I` ouvre les réglages du graphe au lieu du panneau Infos.

## Édition {#editing}

| Action | Raccourci |
| --- | --- |
| Annuler | `⌘Z` |
| Rétablir | `⌘⇧Z` |
| Couper · copier · coller | `⌘X` · `⌘C` · `⌘V` |
| Coller en texte brut | `⇧⌘V` ou `⌥⇧⌘V` |
| Tout sélectionner | `⌘A` |
| Vérifier l’orthographe… | `⌘;` |

Un collage normal interprète le Markdown collé comme de la mise en forme ;
**Coller en texte brut** garde le texte exactement tel quel.

## Mise en forme {#formatting}

| Action | Raccourci |
| --- | --- |
| Gras | `⌘B` |
| Italique | `⌘I` |
| Souligné | `⌘U` |
| Lien… | `⌘⇧K` |
| Titre 1 · 2 · 3 | `⌘⌥1` · `⌘⌥2` · `⌘⌥3` |
| Texte normal | `⌘⌥0` |
| Liste à puces | `⌘⇧8` |
| Liste numérotée | `⌘⇧7` |
| Citation | `⌘⇧9` |
| Aligner à gauche | `⌘⇧L` |
| Centrer | `⌘⇧E` |
| Aligner à droite | `⌘⇧R` |
| Justifier | `⌘⇧J` |

**Barré** et **Code en ligne** se trouvent dans le menu **Format**, et derrière
**›** dans la barre d’outils qui apparaît quand vous sélectionnez du texte.

## Dans la palette `⌘K` {#in-the-k-palette}

| Action | Raccourci |
| --- | --- |
| Parcourir les résultats | `↑` · `↓` |
| Ouvrir le résultat en surbrillance | `↵` |
| L’ouvrir en gardant la palette ouverte, pour en ouvrir plusieurs | `⌘↵` |
| L’ouvrir à côté du document où vous êtes | `⌥↵` |
| Fermer le document ouvert en surbrillance | `⌘W` |
| Fermer la palette | `Esc` |

## Dans le plan d’un projet {#in-a-projects-outline}

Dans la liste à côté des chapitres d’un projet :

| Action | Raccourci |
| --- | --- |
| Renommer le chapitre ouvert | `↵` |
| Déplacer un chapitre vers le haut · le bas dans sa partie | `⌥↑` · `⌥↓` |

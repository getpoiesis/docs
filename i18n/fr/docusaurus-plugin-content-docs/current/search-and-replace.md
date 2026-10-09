---
title: Rechercher et remplacer
description: Retrouvez un mot dans la page ouverte ou dans tous vos documents, et remplacez-le partout en une seule fois.
---

# Rechercher et remplacer

φ Poiesis propose deux recherches. `⌘F` cherche dans le document ouvert. `⇧⌘F`
cherche dans tous les documents du [coffre](./vaults), le dossier qui contient
vos écrits. L’une comme l’autre peut remplacer ce qu’elle trouve : vous pouvez
ainsi renommer un personnage ou corriger un mot partout à la fois.

<img src="/img/app/search-light.png" alt="La page Recherche dans la colonne de liste : un champ de recherche et un champ de remplacement, puis les résultats regroupés par document, chaque mot dans son contexte" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="La page Recherche dans la colonne de liste : un champ de recherche et un champ de remplacement, puis les résultats regroupés par document, chaque mot dans son contexte" width="1600" height="1000" loading="lazy" decoding="async" />

## Changer un nom partout {#change-a-name-everywhere}

1. Appuyez sur `⇧⌘F` pour ouvrir **Recherche**.
2. Tapez l’ancien nom dans **Rechercher dans tous les documents…**.
3. Vérifiez les résultats. Ils sont regroupés par document.
4. Tapez le nouveau nom dans **Remplacer**.
5. Appuyez sur **Remplacer dans tous les documents…**. Poiesis vous indique combien
   d’occurrences il va modifier, et dans combien de documents.
6. Appuyez sur **Tout remplacer** pour confirmer.

Si le versionnage est activé, Poiesis enregistre d’abord une version de tout le
coffre, qui porte le nom de ce que vous avez remplacé. Vous pourrez y revenir
plus tard. Si le versionnage est désactivé, le changement est définitif, et Poiesis
vous en avertit avant que vous ne confirmiez. Voir
[Versions et sauvegarde](./versions-and-backup).

## Rechercher dans ce document {#find-in-this-document}

1. Appuyez sur `⌘F` (**Édition → Rechercher dans le document**). Une barre
   s’ouvre au-dessus de votre texte. Si des mots étaient sélectionnés, ils s’y
   trouvent déjà.
2. Tapez ce que vous cherchez. Poiesis surligne toutes les occurrences à mesure que
   vous tapez.

<img src="/img/app/find-bar-light.png" alt="La barre de recherche au-dessus d’un chapitre, avec les occurrences surlignées, le compteur et le champ de remplacement" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/find-bar-dark.png" alt="La barre de recherche au-dessus d’un chapitre, avec les occurrences surlignées, le compteur et le champ de remplacement" width="1600" height="1000" loading="lazy" decoding="async" />

Dans la barre :

- Le compteur indique sur quelle occurrence vous vous trouvez, par exemple
  **3 sur 12**, ou affiche **Aucun résultat**.
- Entrée passe à l’occurrence suivante, et `⇧` + Entrée à la précédente. Les
  boutons fléchés font la même chose.
- **Respecter la casse** (le bouton Aa) ne retient que les mots écrits avec
  les mêmes majuscules et minuscules que ce que vous avez tapé.
- **Expression régulière** permet de chercher à l’aide d’un motif.
- `Esc` ferme la barre et efface les surlignages.

Si aucun document n’est ouvert, `⌘F` ouvre la page Recherche.

### Remplacer dans ce document {#replace-in-this-document}

1. Appuyez sur **Remplacer** dans la barre. Ou appuyez sur `⌥⌘F` (**Édition →
   Rechercher et remplacer dans le document**) : la barre s’ouvre alors avec
   le champ de remplacement déjà affiché.
2. Tapez le texte de remplacement.
3. Appuyez sur **Remplacer** pour modifier l’occurrence en cours et passer à
   la suivante. Ou appuyez sur **Tout dans le document** pour modifier toutes
   les occurrences de ce document.

Ici, `⌘Z` annule un remplacement, comme n’importe quelle autre modification.

## Rechercher dans tous les documents {#search-every-document}

1. Appuyez sur `⇧⌘F` (**Édition → Rechercher dans tous les documents…**).
   **Recherche** s’ouvre dans la colonne de liste.
2. Tapez au moins deux caractères.
3. Cliquez sur un document, ou sur l’une de ses occurrences. Le document
   s’ouvre à côté de la liste, sur cette occurrence, déjà sélectionnée.

La recherche reste ouverte dans la liste : vous pouvez passer au résultat
suivant.

Poiesis cherche dans tous les documents du coffre, pages du matin comprises. Il
dresse la liste des documents concernés, en commençant par celui qui compte le
plus d’occurrences. Sous chaque document figurent ses occurrences, avec les
mots qui les entourent. Si c’est le titre du document qui correspond, le
document porte la mention **dans le nom**. **Respecter la casse** et
**Expression régulière** fonctionnent comme dans la barre.

## Autres façons de retrouver quelque chose {#other-ways-to-find-things}

| Pour retrouver | Utilisez |
| --- | --- |
| Un document, un projet ou un personnage d’après son nom | `⌘K`. Voir [Visite de la fenêtre](./finding-your-way). |
| Un élément de la liste affichée | Le champ de recherche sous le titre de la liste. Il filtre d’après le titre, le début du texte et les étiquettes. |
| Une commande | `⌘P`. |

## Voir aussi {#see-also}

- [Visite de la fenêtre](./finding-your-way)
- [Organiser](./organizing)
- [Versions et sauvegarde](./versions-and-backup)

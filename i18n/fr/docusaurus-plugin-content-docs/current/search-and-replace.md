---
title: Rechercher et remplacer
description: Trouvez des mots dans la page où vous êtes ou dans tous vos documents, et changez-les d’un coup.
---

# Rechercher et remplacer

φ répond à deux questions. `⌘F` cherche dans la page que vous avez sous les
yeux, et `⇧⌘F` cherche dans tous les documents du coffre. Les deux peuvent
remplacer ce qu’ils trouvent : renommer un personnage ou corriger une
orthographe partout se fait donc en une seule étape.

<img src="/img/app/search-light.png" alt="La page Recherche dans la colonne de liste : un champ de recherche et un champ de remplacement, puis les correspondances regroupées par document, avec les mots en contexte" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="La page Recherche dans la colonne de liste : un champ de recherche et un champ de remplacement, puis les correspondances regroupées par document, avec les mots en contexte" width="1600" height="1000" loading="lazy" decoding="async" />

## Changer un nom partout {#change-a-name-everywhere}

1. Appuyez sur `⇧⌘F` pour ouvrir **Recherche**.
2. Tapez l’ancien nom dans **Rechercher dans tous les documents…**.
3. Parcourez les correspondances, regroupées par document.
4. Tapez le nouveau nom dans **Remplacer**, puis appuyez sur **Remplacer dans
   tous les documents…**.
5. φ vous indique combien d’occurrences il va changer, et dans combien de
   documents. Appuyez sur **Tout remplacer** pour continuer.

Si le versionnage est activé, φ enregistre d’abord une version de tout le
coffre, nommée d’après ce que vous avez remplacé, pour que vous puissiez
revenir en arrière. S’il est désactivé, φ vous le signale avant que vous
confirmiez, car la modification ne pourra pas être annulée. Voir
[Versions et sauvegarde](./versions-and-backup).

## Rechercher dans ce document {#find-in-this-document}

Appuyez sur `⌘F` (**Édition → Rechercher dans le document**). Une barre s’ouvre
au-dessus de votre texte, en reprenant les mots que vous aviez sélectionnés.
φ surligne chaque correspondance pendant que vous tapez.

- Le compteur indique où vous en êtes : **3 sur 12**, ou **Aucun résultat**.
- Return passe à la correspondance suivante et `⇧`Return à la précédente ;
  les boutons fléchés font de même.
- **Respecter la casse** (le bouton Aa) tient compte des majuscules.
- **Expression régulière** vous permet de chercher avec un motif.
- `Esc` ferme la barre et efface les surlignages.

Si aucun document n’est ouvert, `⌘F` ouvre plutôt la page Recherche.

### Remplacer dans ce document {#replace-in-this-document}

Appuyez sur **Remplacer** dans la barre, ou sur `⌥⌘F` (**Édition → Rechercher
et remplacer dans le document**) pour ouvrir la barre avec le remplacement
affiché. Tapez le texte de remplacement, puis :

- **Remplacer** modifie la correspondance en cours et passe à la suivante.
- **Tout dans le document** modifie d’un coup toutes les correspondances
  d’ici.

Un remplacement ici est une modification ordinaire : `⌘Z` l’annule donc.

## Rechercher dans tous les documents {#search-every-document}

`⇧⌘F` (**Édition → Rechercher dans tous les documents…**) ouvre **Recherche**
dans la colonne de liste. Un résultat s’ouvre sur la page d’à côté, et la
recherche reste en place pour le suivant.

Tapez au moins deux caractères. φ lit tous les documents du coffre, pages du
matin comprises, et liste ceux qui correspondent, les plus riches en
correspondances d’abord, chacun avec ses correspondances en contexte. Un
document trouvé par son titre est marqué **dans le nom**. **Respecter la
casse** et **Expression régulière** fonctionnent comme dans la barre.

Cliquez sur un document, ou sur l’une de ses correspondances, pour l’ouvrir
avec précisément cette correspondance sélectionnée.

## D’autres façons de trouver {#other-ways-to-find-things}

| Pour trouver | Utilisez |
| --- | --- |
| Un document, un projet ou un personnage par son nom | `⌘K`. Voir [Se repérer](./finding-your-way). |
| Quelque chose dans la liste que vous regardez | Le champ de recherche sous le titre de la liste. Il filtre par titre, texte d’ouverture et étiquettes. |
| Une commande | `⌘P`. |

## Voir aussi {#see-also}

- [Se repérer](./finding-your-way)
- [Organiser votre travail](./organizing)
- [Versions et sauvegarde](./versions-and-backup)

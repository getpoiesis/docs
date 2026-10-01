---
title: Rechercher et remplacer
---

# Rechercher et remplacer

φ répond à deux questions différentes. `⌘F` cherche dans la page que vous avez
sous les yeux ; `⌘⇧F` cherche dans tous les documents du coffre. Les deux
peuvent remplacer ce qu'ils trouvent.

<img src="/img/app/search-light.png" alt="La page de recherche : les correspondances dans tout le coffre, regroupées par document" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/search-dark.png" alt="La page de recherche : les correspondances dans tout le coffre, regroupées par document" width="1600" height="1000" loading="lazy" decoding="async" />

## Rechercher dans ce document {#find-in-this-document}

Appuyez sur `⌘F` (**Édition → Rechercher dans le document**). Une barre de
recherche s'ouvre en haut de la page, au-dessus de votre texte, et reprend comme
requête les mots que vous aviez sélectionnés. Pendant que vous tapez, φ surligne
chaque correspondance et se place sur la première.

- Le compteur vous indique où vous en êtes : **3 sur 12**, ou **Aucun
  résultat**.
- `Enter` passe à la correspondance suivante et `⇧Enter` à la précédente ; les
  boutons fléchés font de même.
- **Respecter la casse** (le bouton Aa) tient compte des majuscules.
- **Expression régulière** vous permet de chercher avec un motif.
- `Esc` ferme la barre et efface les surlignages.

Si aucun document n'est ouvert, `⌘F` ouvre plutôt la page de recherche
(ci-dessous).

### Remplacer dans ce document {#replace-in-this-document}

Cliquez sur **Remplacer** dans la barre, ou appuyez sur `⌘⌥F` (**Édition →
Rechercher et remplacer dans le document**) pour ouvrir la barre avec le
remplacement déjà affiché. Tapez le texte de remplacement, puis :

- **Remplacer** modifie la correspondance en cours et passe à la suivante.
- **Tout dans le document** modifie d'un coup toutes les correspondances de ce
  document.

Un remplacement ici est une modification ordinaire : `⌘Z` l'annule donc.

## Rechercher dans tous les documents {#search-every-document}

Appuyez sur `⌘⇧F` (**Édition → Rechercher dans tous les documents…**) pour
ouvrir la page **Recherche**. Elle se place dans la colonne de liste, si bien
qu'un résultat s'ouvre sur la page d'à côté et que votre recherche reste en
place pour le suivant.

Tapez au moins deux caractères dans **Rechercher dans tous les documents…**. φ
lit tous les documents du coffre, pages du matin comprises, et liste ceux qui
correspondent, les plus riches en correspondances d'abord. Sous chaque document,
vous voyez ses correspondances en contexte ; un document trouvé par son nom est
marqué **dans le nom**. **Respecter la casse** et **Expression régulière**
fonctionnent comme dans la barre de recherche.

Cliquez sur un document, ou sur l'une de ses correspondances, pour l'ouvrir avec
le curseur placé précisément sur cette correspondance.

### Remplacer partout {#replace-everywhere}

Tapez le texte de remplacement dans le second champ et cliquez sur **Remplacer
dans tous les documents…**. Comme cela modifie de nombreux fichiers à la fois, φ
demande d'abord : il vous indique combien d'occurrences il va remplacer dans
combien de documents, et attend que vous cliquiez sur **Tout remplacer**.

Si le versionnage est activé pour le coffre, φ enregistre une version de tout le
coffre avant de modifier quoi que ce soit, nommée d'après ce que vous avez
remplacé, pour que vous puissiez revenir à l'état d'avant. Voir
[Versions et sauvegarde](versions-and-backup.md). Si le versionnage est
désactivé, φ vous le signale avant que vous confirmiez, car la modification ne
pourra pas être annulée.

## D'autres façons de trouver {#other-ways-to-find-things}

- **Le champ de recherche de la liste.** Chaque liste a un champ
  **Rechercher…** en haut qui la filtre par titre, texte d'ouverture et
  étiquettes.
- **`⌘K`** trouve un document, un projet ou un personnage par son nom et
  l'ouvre. Voir [Trouver son chemin](finding-your-way.md).

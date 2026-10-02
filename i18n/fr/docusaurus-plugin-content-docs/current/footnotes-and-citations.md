---
title: Notes de bas de page et citations
description: Des notes en bas de page, des sources créditées dans le texte, et une bibliographie construite à partir d’elles.
---

# Notes de bas de page et citations

Quand un livre a besoin d’un appareil critique (un aparté en bas de page, une
source créditée dans le texte, une liste des ouvrages cités), φ l’a intégré.
Les notes de bas de page et les citations font partie du document : elles
arrivent donc dans chaque export, là où un lecteur les attend.

<img src="/img/app/footnotes-light.png" alt="Un chapitre avec un appel de note dans son texte, et le Plan du panneau Infos qui liste les deux notes de bas de page du chapitre" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="Un chapitre avec un appel de note dans son texte, et le Plan du panneau Infos qui liste les deux notes de bas de page du chapitre" width="1600" height="1000" loading="lazy" decoding="async" />

## Ajouter une note de bas de page {#add-a-footnote}

1. Placez le curseur là où doit aller l’appel de note.
2. Tapez `/footnote` et appuyez sur `Enter`.
3. Écrivez la note dans la zone **Note de bas de page** et validez.

Un petit numéro apparaît dans le texte. φ numérote les notes dans l’ordre :
ajoutez-en une plus tôt dans le document et celles qui suivent se renumérotent
d’elles-mêmes.

Les notes de bas de page, les citations et la bibliographie sont proposées dans
les documents qui appartiennent à un [projet](./collections), pas dans les
notes, les textes hors projet ni le journal.

## Lire et modifier vos notes {#read-and-edit-your-footnotes}

Survolez un appel de note pour lire sa note, et cliquez dessus pour en modifier
le texte.

Chaque note de bas de page est aussi listée dans le panneau Infos (`⌘⇧I`), sur
**Plan**, sous **Notes de bas de page** :

- Tapez dans la zone d’une note (**Texte de la note…**) pour la modifier.
- Cliquez sur son numéro (**Aller au repère**) pour la retrouver dans le texte.
- La corbeille (**Supprimer la note**) la retire, et les autres se
  renumérotent.

## Citer une source {#cite-a-source}

1. Tapez `/citation` et appuyez sur `Enter`. **Citer une source** s’ouvre.
2. Choisissez une source dans la liste, ou cherchez-la avec **Rechercher des
   sources…**.
3. Pour une nouvelle source, choisissez **Nouvelle source**, remplissez
   **Auteur** (sous la forme *Smith, Jane*), **Titre**, **Année** et **URL
   (facultatif)**, puis **Ajouter et citer**.

La citation apparaît dans le texte au format auteur–année, comme *(Smith,
2020)*. Une source n’a besoin que d’un auteur ou d’un titre.

Cliquez sur une citation pour la modifier. La boîte de dialogue s’ouvre en
**Modifier la source** : modifiez les informations et cliquez sur
**Enregistrer** (toutes les citations de cette source suivent), choisissez une
autre source, ou **Supprimer la source**. Une citation dont la source a disparu
s’affiche *(?)*, pour qu’on la repère facilement.

Chaque document garde sa propre liste de sources. Quand vous exportez le
projet, les listes de tous ses documents sont réunies : une citation trouve
donc sa source où que celle-ci ait été ajoutée dans le livre.

## Ajouter une bibliographie {#add-a-bibliography}

Tapez `/bibliography` là où la liste doit aller. Elle ne liste que les sources
que vous avez citées, par ordre alphabétique du nom de famille, chacune sous la
forme *Auteur. (Année). Titre. URL*, et elle se met à jour à mesure que vous
citez. Dans un PDF ou un fichier Word, la bibliographie commence sur une page à
part.

## Comment elles s’exportent {#how-they-export}

| Format | Notes de bas de page |
| --- | --- |
| **Livre imprimé et PDF** | En bas de la page où se trouve leur appel de note. |
| **Word** et **Texte enrichi** | De vraies notes de bas de page, placées et numérotées par le traitement de texte. |
| **Livre numérique** | Des notes que les applis de lecture ouvrent quand on touche l’appel de note. |
| **Page web** | Regroupées à la fin, chacune reliée à son appel de note. |
| **Markdown** | Écrites dans le texte sous la forme `^[la note]`. |

## Voir aussi {#see-also}

- [Mise en forme et blocs](./formatting-and-blocks)
- [Projets](./collections)
- [Comment fonctionne l’export](./exporting)

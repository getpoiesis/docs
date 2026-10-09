---
title: Notes de bas de page et citations
description: Des notes en bas de page, des sources citées dans le texte, et une bibliographie qui se compose à partir d’elles.
---

# Notes de bas de page et citations

φ Poiesis sait ajouter trois choses dont un livre peut avoir besoin : une note en bas
de page, une citation qui nomme une source dans le texte, et une bibliographie
qui dresse la liste des sources citées. Elles font partie du document : chaque
export les contient donc, à l’endroit où le lecteur les attend.

<img src="/img/app/footnotes-light.png" alt="Un chapitre avec un appel de note dans le texte, et l’onglet Plan du panneau Infos qui affiche les deux notes de bas de page du chapitre" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="Un chapitre avec un appel de note dans le texte, et l’onglet Plan du panneau Infos qui affiche les deux notes de bas de page du chapitre" width="1600" height="1000" loading="lazy" decoding="async" />

Les notes de bas de page, les citations et la bibliographie n’existent que
dans les documents qui font partie d’un [projet](./collections). Vous ne les
trouverez ni dans les notes, ni dans les pièces hors projet, ni dans le
journal.

## Ajouter une note de bas de page {#add-a-footnote}

1. Placez le curseur là où doit se trouver le numéro de la note.
2. Tapez `/footnote` et appuyez sur `Enter`.
3. Écrivez la note dans la zone **Note de bas de page** et validez.

Un petit numéro, l’appel de note, apparaît dans le texte. Poiesis numérote les notes
dans l’ordre. Si vous ajoutez une note plus haut dans le document, Poiesis
renumérote celles qui suivent.

## Lire et modifier vos notes {#read-and-edit-your-footnotes}

Dans le texte :

- Survolez un appel de note pour lire la note.
- Cliquez sur un appel de note pour modifier le texte de la note.

Le panneau Infos (`⌘⇧I`), le panneau situé à côté de votre page, donne lui
aussi la liste de toutes les notes. Regardez dans **Plan**, sous **Notes de
bas de page** :

- Tapez dans la zone d’une note (**Texte de la note…**) pour la modifier.
- Cliquez sur son numéro (**Aller au repère**) pour aller à l’appel de note
  dans le texte.
- Cliquez sur la corbeille (**Supprimer la note**) pour supprimer la note. Poiesis
  renumérote les autres.

## Citer une source {#cite-a-source}

1. Placez le curseur là où doit se trouver la citation.
2. Tapez `/citation` et appuyez sur `Enter`. **Citer une source** s’ouvre.
3. Choisissez une source dans la liste. Pour en retrouver une, tapez dans
   **Rechercher des sources…**.
4. Si la source n’est pas dans la liste, choisissez **Nouvelle source**.
   Remplissez **Auteur** (sous la forme *Smith, Jane*), **Titre**, **Année**
   et **URL (facultatif)**, puis appuyez sur **Ajouter et citer**.

<img src="/img/app/cite-a-source-light.png" alt="La fenêtre pour citer une source au-dessus d’un chapitre, avec le champ de recherche, une source et l’option pour en créer une" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/cite-a-source-dark.png" alt="La fenêtre pour citer une source au-dessus d’un chapitre, avec le champ de recherche, une source et l’option pour en créer une" width="1600" height="1000" loading="lazy" decoding="async" />

La citation apparaît dans le texte sous la forme auteur et année, par exemple
*(Smith, 2020)*. Il suffit qu’une source ait un auteur ou un titre.

Pour modifier une citation, cliquez dessus. La boîte de dialogue s’ouvre sous
le nom **Modifier la source**. Vous pouvez alors :

- Modifier les informations et appuyer sur **Enregistrer**. Toutes les
  citations de cette source changent aussi.
- Choisir une autre source.
- Appuyer sur **Supprimer la source**.

Quand la source d’une citation a été supprimée, la citation s’affiche sous la
forme *(?)* : vous la repérez ainsi facilement.

Chaque document a sa propre liste de sources. Quand vous exportez le projet, Poiesis
réunit les listes de tous ses documents. Une citation retrouve donc sa source,
même si vous avez ajouté celle-ci dans un autre document du livre.

## Ajouter une bibliographie {#add-a-bibliography}

Tapez `/bibliography` à l’endroit où doit figurer la liste.

- Elle ne contient que les sources que vous avez citées.
- Les sources sont classées par ordre alphabétique du nom de famille.
- Chacune s’écrit sous la forme *Auteur. (Année). Titre. URL*.
- La liste se met à jour à mesure que vous ajoutez des citations.

Dans un PDF ou un fichier Word, la bibliographie commence sur une nouvelle
page.

## Ce qu’elles deviennent à l’export {#how-they-export}

| Format | Notes de bas de page |
| --- | --- |
| **Livre imprimé et PDF** | En bas de la page où se trouve leur appel de note. |
| **Word** et **Texte enrichi** | De vraies notes de bas de page, que le traitement de texte place et numérote lui-même. |
| **Livre numérique** | Des notes que l’application de lecture ouvre quand on touche l’appel de note. |
| **Page web** | Regroupées à la fin, chacune avec un lien de retour vers son appel de note. |
| **Markdown** | Écrites dans le texte sous la forme `^[la note]`. |

## Voir aussi {#see-also}

- [Mise en forme et blocs](./formatting-and-blocks)
- [Projets](./collections)
- [Comment fonctionne l’export](./exporting)

---
title: Notes de bas de page et citations
---

# Notes de bas de page et citations

Quand votre écriture a besoin d'un appareil critique (un aparté en bas de page,
une source créditée dans le texte, une liste de références à la fin), φ l'a
intégré. Les notes de bas de page et les citations font partie du document :
elles survivent donc à chaque export et arrivent au bon endroit dans le livre
terminé.

<img src="/img/app/footnotes-light.png" alt="Des appels de note dans la prose, listés dans le panneau à côté" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/footnotes-dark.png" alt="Des appels de note dans la prose, listés dans le panneau à côté" width="1600" height="1000" loading="lazy" decoding="async" />

:::note
Les notes de bas de page, les citations et la bibliographie sont des outils de
manuscrit : elles sont donc proposées dans les documents qui appartiennent à un
[projet](collections.md). Elles n'apparaissent pas dans le menu slash d'une
note, d'un texte hors projet ou d'une entrée de journal.
:::

## Notes de bas de page {#footnotes}

Une note de bas de page est un petit repère numéroté dans votre texte auquel
une note est attachée. Le repère n'affiche que le numéro ; le texte de la note
est gardé à part pour ne jamais couper la ligne que vous lisez.

### Insérer une note de bas de page {#inserting-a-footnote}

Tapez `/footnote` et appuyez sur `Enter`. φ vous demande le texte de la **Note
de bas de page** ; tapez-le et validez, et un repère numéroté apparaît au
curseur. La numérotation est automatique et reste dans l'ordre : insérez une
note plus tôt dans le document et tout ce qui suit se renumérote tout seul.

Survolez un repère pour lire sa note. Cliquez sur le repère pour modifier le
texte.

### La liste des notes {#the-footnote-list}

Toutes les notes de bas de page du document sont listées dans le Panneau
d’infos (`⇧⌘I`), dans l'onglet **Plan**, sous **Notes de bas de page · N** :

- **Modifiez** une note en tapant dans sa zone (**Texte de la note…**).
- **Aller au repère** : cliquez sur son numéro pour y aller dans le texte, ce
  qui est utile dans un long document.
- **Supprimer la note** : l'icône de corbeille. Les notes restantes se
  renumérotent automatiquement.

Tant qu'il n'y a aucune note, la liste indique **Aucune note de bas de page.
Insérez-en une avec /footnote.** En mode lecture, elle est en lecture seule.

### Comment les notes s'exportent {#how-footnotes-export}

L'endroit où arrive une note de bas de page dépend du format :

- **PDF** : en bas de la page où se trouve son repère, comme dans un livre
  imprimé.
- **Word** et **RTF** : de vraies notes de bas de page, que le traitement de
  texte place et numérote lui-même.
- **EPUB** : des notes que les liseuses affichent dans une fenêtre surgissante
  quand vous touchez le repère.
- **HTML** : regroupées en notes de fin, chacune reliée à son repère.
- **Markdown** : écrites en ligne sous la forme `^[la note]`.

Quand vous exportez un projet entier, le style d'export décide si les notes vont
en bas de page ou sont regroupées à la fin, et si la numérotation court tout au
long du livre ou recommence à chaque chapitre. Voir
[Exporter](exporting.md).

## Citations {#citations}

Une citation crédite une source au format auteur–année, comme `(Smith, 2020)`,
tirée d'une petite **bibliothèque de sources** conservée avec le document. Vous
construisez la bibliothèque au fil de l'écriture, puis vous réutilisez ses
sources.

### Ajouter une citation {#adding-a-citation}

Tapez `/citation` et appuyez sur `Enter`. La boîte de dialogue **Citer une
source** s'ouvre :

- **Choisissez une source existante** dans la liste pour la citer au curseur.
  Les sources sont triées par nom de famille de l'auteur, et **Rechercher des
  sources…** filtre par auteur, titre ou année.
- **Ajoutez une nouvelle source** avec **Nouvelle source**. Remplissez
  **Auteur** (p. ex. `Smith, Jane`), **Titre**, **Année** et **URL
  (facultatif)**, puis cliquez sur **Ajouter et citer**. La source est
  enregistrée dans la bibliothèque et la citation est insérée en une seule
  étape.

Il suffit d'un auteur *ou* d'un titre pour enregistrer une source.

### Modifier et gérer les sources {#editing-and-managing-sources}

Cliquez sur n'importe quelle citation dans le texte pour rouvrir la boîte de
dialogue en mode **Modifier la source**. De là, vous pouvez :

- **Modifier les informations de la source** et **Enregistrer**. Toutes les
  citations qui pointent vers la source se mettent à jour.
- **Faire pointer la citation vers une autre source** en en choisissant une
  autre dans la liste.
- **Supprimer la source** pour la retirer de la bibliothèque.
- **Annuler** pour tout laisser tel quel.

Une citation dont la source a été supprimée s'affiche sous la forme `(?)`, pour
qu'on la repère facilement.

### Une bibliothèque par document, une bibliographie par livre {#one-library-per-document-one-bibliography-per-book}

La boîte de dialogue liste les sources du document où vous vous trouvez. Quand
vous exportez un projet entier, en revanche, les sources de tous ses documents
sont réunies en une seule bibliothèque : une citation se résout donc où que sa
source ait été ajoutée dans le livre, et la bibliographie liste tout ce que le
livre cite.

## La bibliographie {#the-bibliography}

Une bibliographie est une liste de références construite à partir de vos
citations ; vous ne la tapez jamais à la main. Tapez `/bibliography` et appuyez
sur `Enter` pour placer le bloc.

La liste ne comprend que les sources que vous avez réellement citées, chacune
au format `Auteur. (Année). Titre. URL` et triées par ordre alphabétique du nom
de famille de l'auteur. Les sources de la bibliothèque que vous n'avez pas
citées n'apparaissent pas. Citez une nouvelle source et elle rejoint la liste.

Dans un export PDF ou Word, **la bibliographie commence sur une page à part**.

## Voir aussi {#see-also}

- [Exporter](exporting.md) : comment les notes de bas de page, les citations et
  la bibliographie s'affichent dans chaque format.
- [Projets](collections.md) : exporter un livre entier.

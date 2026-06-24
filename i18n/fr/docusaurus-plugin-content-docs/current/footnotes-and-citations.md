---
title: Notes de bas de page et citations
sidebar_position: 16
---

# Notes de bas de page et citations

Quand votre écriture a besoin d’un appareil — une remarque au pied de la page,
une source créditée dans le texte, une liste de références à la fin — φ l’intègre
nativement. Les notes de bas de page et les citations font partie du document,
elles survivent donc à chaque export et atterrissent au bon endroit dans le livre
fini.

## Notes de bas de page

Une note de bas de page est un petit repère numéroté dans votre texte, assorti
d’une note. Le repère n’affiche que le numéro ; le texte de la note vit à l’écart
pour ne jamais couper la ligne que vous lisez.

### Insérer une note de bas de page

Tapez `/footnote` et choisissez **Note de bas de page** dans le menu slash. φ
dépose un repère numéroté au curseur. La numérotation est automatique et reste
dans l’ordre — insérez une note plus tôt dans le document et tout ce qui suit se
renumérote tout seul.

### Le panneau Notes de bas de page

Le repère porte le texte de la note, mais vous ne l’éditez pas en ligne. Ouvrez
plutôt le panneau **Notes de bas de page** dans la barre latérale de droite, où
chaque note du document est listée dans l’ordre :

- **Modifiez** une note en tapant dans son champ de texte.
- **Allez à un repère** en cliquant sur son numéro — utile dans un long document.
- **Supprimez** une note avec l’icône de corbeille. Les notes restantes se
  renumérotent automatiquement.

En mode lecture, le panneau est en lecture seule — vous pouvez naviguer mais pas
modifier.

### Comment les notes de bas de page s’exportent

L’endroit où aboutit une note dépend du format :

- **PDF** — de vraies notes par page. Chaque note est ancrée au bas de la page où
  se trouve son repère, avec un fin filet au-dessus, à la manière d’un livre
  imprimé.
- **DOCX, EPUB, HTML, Markdown** — les notes sont rassemblées en notes de fin (ou
  la note native du format, dans le style `^[…]` de Markdown).

## Citations

Une citation crédite une source en style auteur–année — `(Smith, 2020)` — tirée
d’une petite **bibliothèque de sources** conservée avec le document. Vous
constituez la bibliothèque au fil de l’écriture, puis vous réutilisez les sources
dans tout le document.

### Ajouter une citation

Tapez `/citation` et choisissez **Citation bibliographique**. La boîte de
dialogue de citation s’ouvre :

- **Choisissez une source existante** dans la liste pour la citer au curseur. Les
  sources sont triées par nom d’auteur ; le champ de recherche filtre par auteur,
  titre ou année.
- **Ajoutez une nouvelle source** avec **Nouvelle source**. Renseignez
  **Auteur** (p. ex. `Smith, Jane`), **Titre**, **Année** et une **URL**
  facultative, puis **Ajouter et citer**. La source est enregistrée dans la
  bibliothèque et la citation est insérée en une seule étape.

Il suffit d’un auteur *ou* d’un titre pour enregistrer une source.

### Modifier et gérer les sources

Cliquez sur n’importe quelle citation dans le texte pour rouvrir la boîte de
dialogue en mode édition. De là, vous pouvez :

- **Modifier les détails de la source** — auteur, titre, année, URL. Le
  changement met à jour chaque citation qui pointe vers cette source.
- **Remplacer la citation par une autre source** en en choisissant une autre dans
  la liste.
- **Supprimer la source** entièrement avec **Supprimer la source**.

La bibliothèque de sources appartient au document, de sorte qu’une source définie
dans un document n’est pas partagée avec un autre.

## La bibliographie

Une bibliographie est une liste de références générée à partir de vos citations —
vous ne la tapez jamais à la main. Tapez `/bibliography` et choisissez
**Bibliographie** pour placer le bloc.

La liste est construite automatiquement à partir des sources que vous avez
réellement citées : chaque entrée est formatée comme `Author. (Year). Title.
URL`, et les entrées sont triées par ordre alphabétique de nom d’auteur. Les
sources de la bibliothèque que vous n’avez pas citées n’apparaissent pas. Citez
une nouvelle source et elle est ajoutée au prochain rendu de la liste.

Lorsque vous exportez un livre ou un manuscrit, **la bibliographie s’ouvre sur sa
propre page à la fin** — sans page blanche superflue avant elle dans le PDF.

## Voir aussi

- [Exporter et imprimer](exporting.md) — comment les notes de bas de page, les
  citations et la bibliographie se rendent dans chaque format.
- [Collections (livres et manuscrits)](collections.md) — exporter un livre
  entier.

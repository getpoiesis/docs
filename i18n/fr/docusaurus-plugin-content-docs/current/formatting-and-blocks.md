---
title: Mise en forme et blocs
---

# Mise en forme et blocs

φ vous offre la mise en forme du quotidien à laquelle vous vous attendez
(titres, listes, citations, code, liens), plus un ensemble de blocs plus riches
conçus pour les manuscrits et la poésie. Mettez en forme le texte depuis la
[barre d'outils contextuelle](the-editor.md#the-bubble-toolbar) ou le menu
**Format**, et insérez des blocs depuis le [menu slash](the-editor.md#the-slash-menu)
(tapez `/`).

## Mise en forme en ligne {#inline-formatting}

Sélectionnez du texte et appliquez :

- **Gras** : `⌘B`
- **Italique** : `⌘I`
- **Souligné** : `⌘U`
- **Barré** : depuis **Plus d’outils** (›) dans la barre d'outils, ou depuis le
  menu Format
- **Code en ligne** : pour de courts extraits au sein d'une phrase, depuis les
  mêmes endroits

:::tip Sortez du gras ou de l'italique en tapant
Quand vous activez le **gras** ou l'*italique* et que vous continuez à écrire,
inutile de revenir à la barre d'outils pour l'arrêter. Terminez le mot, puis
appuyez une deuxième fois sur la barre d'espace : la première espace reste
attachée au mot mis en forme, et la suivante retire la mise en forme, si bien que
le mot d'après s'écrit en texte normal.
:::

## Titres et paragraphes {#headings-and-paragraphs}

Trois niveaux de titre structurent un document :

- **Titre 1** : `⌘⌥1`
- **Titre 2** : `⌘⌥2`
- **Titre 3** : `⌘⌥3`
- **Texte normal** (un paragraphe simple) : `⌘⌥0`

Depuis le menu slash, `/heading` affiche les trois, et `/h1`, `/h2` ou `/h3`
mène directement à l'un d'eux. `/text` retransforme une ligne en paragraphe
simple. Le bouton **Titre** de la barre d'outils contextuelle active ou désactive
un titre moyen. Les titres alimentent le plan du document et le bloc
[Table des matières](#richer-blocks).

## Alignement {#alignment}

Les paragraphes et les titres peuvent être alignés depuis le menu Format ou
depuis **Plus d’outils** (›) dans la barre d'outils :

- **Aligner à gauche**
- **Centrer** : `⌘⇧E`
- **Aligner à droite** : `⌘⇧R`
- **Justifier** : `⌘⇧J`

## Listes {#lists}

- **Liste à puces** : `⌘⇧8`, ou `/bullet`
- **Liste numérotée** : `⌘⇧7`, ou `/numbered`
- **Liste de tâches** : `/task` ou `/checklist`. Une liste de contrôle dont les
  éléments passent par trois états : à faire, en cours, fait.

Les listes de tâches sont proposées là où elles ont leur place : dans les Notes
et sur les pages de recherche, par défaut. Un chapitre ou une journée du journal
n'en propose pas. Vous pouvez changer cela pour chaque mode dans **Réglages →
Réglages d’écriture → Modes → Listes de tâches**. Un document qui contient déjà
une liste de tâches l'affiche toujours, où qu'il se trouve.

## Citations et séparateurs {#quotes-and-dividers}

- **Bloc de citation** : `⌘⇧9`, ou `/quote`. Pour un passage cité détaché du
  texte qui l'entoure.
- **Séparateur** : `/divider`. Une ligne horizontale pour séparer des sections.

## Blocs de code {#code-blocks}

Pour du code sur plusieurs lignes, insérez un **bloc de code** avec `/code`. φ
reconnaît le langage et le colore pour vous. Si vous écrivez le bloc à la manière
de Markdown, avec le langage après la clôture d'ouverture (` ```python `), c'est
ce langage qui est utilisé.

Dans un bloc de code, `Tab` augmente l'indentation et `⇧Tab` la réduit, et
`Enter` conserve l'indentation de la ligne en cours. Choisissez la façon
d'indenter dans **Réglages → Éditeur → Code** : **Indenter avec** (**Espaces**
ou **Tabulations**) et **Largeur d’indentation**.

Pour quelques mots de code au sein d'une phrase, utilisez plutôt le code en
ligne.

## Liens {#links}

- **Ajouter un lien** : sélectionnez du texte et utilisez **Lien** dans la barre
  d'outils contextuelle (ou **Format → Lien…**, `⌘⇧K`), puis saisissez l'adresse
  web.
- **Détection automatique** : tapez ou collez une adresse web et φ la reconnaît
  comme un lien.
- **Modifier ou supprimer** : sélectionnez les mots liés et utilisez de nouveau
  **Lien**. Tapez une nouvelle adresse pour la changer, ou videz le champ pour
  supprimer le lien.

Les liens s'ouvrent dans votre navigateur par défaut. Pour suivre un lien
pendant l'édition, maintenez `⌘` et cliquez ; en
[mode lecture](the-editor.md#reading-mode), un simple clic suffit.

Pour créer un lien vers un autre document de votre coffre, utilisez plutôt un
lien wiki : voir [Liens et graphe](links-and-graph.md).

## Écrire en Markdown {#writing-in-markdown}

Si vous écrivez en Markdown par habitude, continuez : φ le transforme en mise en
forme pendant que vous tapez.

- `#`, `##`, `###` et une espace : un titre (`####` et au-delà donnent le plus
  petit)
- `-`, `*` ou `1.` et une espace : une liste ; `[] ` ou `- [ ] ` : un élément de
  liste de tâches (`- [x] ` le crée coché), là où les listes de tâches sont
  proposées
- `>` et une espace : une citation ; ensuite `[!tip] ` la transforme en encadré
  (`note`, `tip`, `warning`, `danger`), là où les encadrés sont proposés
- ` ``` ` : un bloc de code ; `---` : un séparateur
- `**gras**`, `*italique*`, `~~barré~~`, `` `code` ``, `==surlignage==`
- `[texte](https://…)` : un lien ; `![alt](https://…)` : une image

**Le Markdown d'autres applications de notes.** Certaines applications écrivent
leur propre variante de Markdown, et φ la lit comme elles l'entendent :
`~texte~` est un soulignement, `==🟢texte==` un surlignage vert (🟡 🔵 🟣 🔴
aussi), `[[Note|texte affiché]]` et `[[Note/Titre]]` renvoient vers la note, et
les `#étiquettes` (y compris `#étiquettes/imbriquées` et `#plusieurs mots#`)
sont ajoutées aux étiquettes du document. `⌥⇧⌘V` colle du texte brut, comme
`⇧⌘V`.

**Afficher le Markdown.** Activez **Réglages → Éditeur → Afficher le Markdown**
pour voir les marques (`**`, `#`, `[…](…)` et les autres) en discret autour de
la mise en forme dans la ligne que vous écrivez. Elles disparaissent des lignes
que vous quittez, et elles ne font jamais partie de votre texte : désactiver le
réglage ne change rien au document.

**Coller du Markdown.** Collez du texte copié depuis un éditeur Markdown ou une
autre application de notes et il arrive mis en forme : titres, listes de tâches,
tableaux, citations, encadrés, code, liens et images. Chaque ligne devient son
propre paragraphe, et un `#mot` reste un mot. Les notes de bas de page suivent
aussi, qu'elles soient écrites `^[la note]` dans le texte ou sous forme `[^1]`
avec une ligne `[^1]: la note` en dessous. Le texte mis en forme provenant d'une
page web ou d'un traitement de texte se colle comme toujours. Pour coller le
texte exactement tel quel, utilisez `⇧⌘V`.

Un collage n'apporte que ce que le document propose : une liste de tâches collée
dans un chapitre arrive sous forme de liste en gardant ses `[ ]`, un tableau
sous forme d'une ligne par rangée, et les pages du matin reçoivent des
paragraphes simples.

**Copier en Markdown.** Choisissez **Copier en Markdown** dans la palette de
commandes (`⌘P`) pour placer la sélection (ou tout le document, si rien n'est
sélectionné) dans le presse-papiers au format Markdown. C'est aussi dans le menu
⋮ d'un document et dans son menu contextuel de la liste, où cela copie tout le
document.

## Tableaux {#tables}

Insérez un tableau de départ avec `/table` : une grille de 3×3 avec une ligne
d'en-tête que vous pouvez modifier et agrandir à partir de là. Faites glisser le
bord d'une colonne pour l'élargir ou la rétrécir.

Les tableaux sont proposés dans les notes et dans Écrire, mais pas dans les
entrées du journal.

## Dates et heures {#dates-and-times}

- `/date` insère la date du jour sous forme de **puce de date**, qui relie le
  document à ce jour dans le [calendrier](calendar.md).
- `/datetime` insère la date et l'heure actuelle sous forme de puce.
- `/time` insère l'heure actuelle en texte simple.

Cliquez sur une puce de date pour ouvrir ce jour dans le calendrier. Le petit
crayon à côté (**Modifier la date et l’heure**) vous permet de changer la date,
ou d'ajouter ou de retirer l'heure.

## Blocs plus riches {#richer-blocks}

Au-delà de la prose standard, φ propose des blocs conçus pour les livres, les
essais et la poésie. Insérez-les depuis le menu slash.

| Bloc | À quoi il sert | S'insère avec |
|---|---|---|
| **Encadré** | Un encadré d'information, d'astuce, d'avertissement ou de danger pour les apartés. Changez son type avec les petits boutons qui apparaissent au survol. | `/callout` |
| **Image** | Une image avec une légende modifiable. Choisissez gauche, centre, droite ou pleine largeur depuis sa barre d'outils, et faites glisser son bord pour la redimensionner. Le fichier est copié dans votre coffre. | `/image` |
| **Vers** | Un bloc de poème ou de vers qui conserve vos retours à la ligne et vos espacements. `Enter` commence une nouvelle ligne dans le vers ; `⌘↩` sort vers un paragraphe en dessous. | `/verse` |
| **Saut de scène** | Un séparateur centré entre les scènes : astérisme, étoiles, fleuron ou espace vide. | `/scene` |
| **Épigraphe** | Une citation d'ouverture avec une ligne d'attribution, pour le début d'un chapitre ou d'un livre. | `/epigraph` |
| **Exergue** | Un extrait grand et bien visible mis en avant pour l'emphase. | `/pull-quote` |
| **Lettrine** | Une première lettre décorative surdimensionnée pour le paragraphe. | `/drop` |
| **Table des matières** | Un plan vivant et cliquable des titres de ce document. Il se met à jour pendant que vous éditez. | `/toc` |
| **Bibliographie** | Une liste de références construite à partir des sources citées dans le document. | `/bibliography` |

**Encadré** et **Image** sont disponibles dans les notes et dans Écrire (les
images aussi dans le journal). Les autres, de **Vers** jusqu'en bas, sont des
blocs de manuscrit : ils sont proposés dans les documents qui appartiennent à un
projet, et masqués dans les notes, dans les textes hors projet et dans le
journal. Un document qui en contient déjà un l'affiche toujours.

### Éléments en ligne {#inline-elements}

Quelques éléments se placent à l'intérieur d'une ligne plutôt que de former leur
propre bloc :

| Élément | À quoi il sert | S'insère avec |
|---|---|---|
| **Note de bas de page** | Une note numérotée. φ vous demande le texte de la note, puis place une petite marque en exposant. Dans les documents d'un projet. | `/footnote` |
| **Citation bibliographique** | Une référence auteur–année à une source de la bibliothèque du document. Dans les documents d'un projet. | `/citation` |
| **Puce de date** | Une date (éventuellement avec une heure) qui relie le document à un jour du calendrier. | `/date` |
| **Mention @** | Une référence à un personnage. Choisissez-en un dans la liste, ou choisissez **Create @nom** (**Nouveau personnage**) pour en ajouter un à partir de ce que vous avez tapé. | Tapez `@` |
| **Lien wiki** | Un lien `[[Titre]]` vers un autre document de votre coffre. | Tapez `[[` |

Pour en savoir plus, voir
[Notes de bas de page et citations](footnotes-and-citations.md),
[Personnages et auteurs](characters-and-authors.md),
[Annotations](annotations.md) et [Liens et graphe](links-and-graph.md).

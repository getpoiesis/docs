---
title: Mise en forme et blocs
sidebar_position: 5
---

# Mise en forme et blocs

φ vous offre la mise en forme du quotidien à laquelle vous vous attendez — titres,
listes, citations, code, liens — plus un ensemble de blocs plus riches conçus pour
les manuscrits et la poésie. Accédez à la mise en forme en ligne depuis la
[barre d'outils contextuelle](the-editor.md#la-barre-doutils-contextuelle) ou le menu Format,
et insérez des blocs depuis le [menu slash](the-editor.md#le-menu-slash)
(tapez `/`).

## Mise en forme en ligne

Sélectionnez du texte et appliquez :

- **Gras** — `⌘B`
- **Italique** — `⌘I`
- **Souligné** — `⌘U`
- **Barré** — depuis la barre d'outils ou le menu Format
- **Code en ligne** — pour de courts extraits au sein d'une phrase

Ces options se trouvent aussi dans le menu **Format**, et beaucoup y ont des
raccourcis clavier.

:::tip Sortez du gras ou de l'italique en tapant
Quand vous activez le **gras** ou l'*italique* et que vous continuez à écrire,
inutile de revenir à la barre d'outils pour l'arrêter. Terminez le mot, puis
appuyez une deuxième fois sur la barre d'espace : la première espace reste
attachée au mot mis en forme, et la suivante retire la mise en forme, si bien que
le mot d'après s'écrit en texte normal.
:::

## Titres et paragraphes

Trois niveaux de titre structurent un document :

- **Titre 1** — `⌘⌥1`
- **Titre 2** — `⌘⌥2`
- **Titre 3** — `⌘⌥3`
- **Texte normal** (paragraphe simple) — `⌘⌥0`

Vous pouvez aussi taper `/heading 1`, `/heading 2`, ou `/heading 3`. Les titres
alimentent le plan du document et le bloc [Sommaire](#blocs-plus-riches).

## Listes

- **Liste à puces** — `⌘⇧8`, ou `/bullet list`
- **Liste numérotée** — `⌘⇧7`, ou `/ordered list`
- **Liste de tâches** — `/task list`. Une liste de contrôle à trois états : à
  faire, en cours, terminé.

## Citations et séparateurs

- **Citation** — `⌘⇧9`, ou `/quote`. Pour un passage cité, distinct du texte
  environnant.
- **Séparateur** — `/divider`. Un filet horizontal pour séparer les sections.

## Blocs de code

Pour du code multiligne, insérez un **bloc de code** avec `/code block`. Il est à
coloration syntaxique, et vous pouvez définir le langage pour que la coloration
corresponde. (Pour quelques mots de code au sein d'une phrase, utilisez plutôt le
code en ligne.)

## Liens

- **Ajouter un lien** — sélectionnez du texte et utilisez le bouton de lien dans
  la barre d'outils contextuelle (`⌘⇧K` depuis le menu Format), puis saisissez
  l'URL.
- **Détection automatique** — collez ou tapez une adresse web et φ la reconnaît
  comme un lien.
- **Modifier ou retirer** — sélectionnez un mot lié et rouvrez la commande de
  lien. Pour modifier, tapez une nouvelle URL ; pour retirer le lien, videz le
  champ et confirmez.

Les liens s'ouvrent dans votre navigateur par défaut. Pour suivre un lien depuis
l'intérieur de l'éditeur, maintenez `⌘` et cliquez (en
[mode lecture](the-editor.md#mode-lecture), un simple clic le suit).

## Écrire en Markdown

Si vous écrivez en Markdown par habitude, continuez : φ le transforme en mise
en forme pendant que vous tapez.

- `#`, `##`, `###` et une espace — un titre (`####` et plus donnent le plus petit)
- `-`, `*` ou `1.` et une espace — une liste ; `[] ` ou `- [ ] ` — une tâche
  (`- [x] ` la commence cochée)
- `>` et une espace — une citation ; puis `[!tip] ` la change en encadré
  (`note`, `tip`, `warning`, `danger`)
- ` ``` ` — un bloc de code ; `---` — un séparateur
- `**gras**`, `*italique*`, `~~barré~~`, `` `code` ``, `==surlignage==`
- `[texte](https://…)` — un lien ; `![alt](https://…)` — une image

**Depuis Bear.** Le Markdown propre à Bear arrive comme Bear l'entend : `~texte~`
est un soulignement, `==🟢texte==` un surlignage vert (🟡 🔵 🟣 🔴 aussi),
`[[Note|texte affiché]]` et `[[Note/Titre]]` renvoient à la note, et les
`#étiquettes` — y compris `#imbriquées/étiquettes` et `#plusieurs mots#` —
rejoignent les étiquettes du document. **⌥⇧⌘V** colle du texte brut, comme dans
Bear.

**Afficher le Markdown.** Activez **Réglages → Éditeur → Afficher le Markdown**
pour voir les marqueurs (`**`, `#`, `[…](…)` et les autres) en discret autour de
la mise en forme de la ligne en cours. Ils disparaissent des lignes que vous
quittez et ne font jamais partie du texte : désactiver le réglage ne change rien
au document.

Les notes de bas de page s'écrivent aussi en Markdown : `^[la note]` dans le
texte, ou `[^1]` avec une ligne `[^1]: la note` plus bas.

**Coller du Markdown.** Collez du texte copié depuis un éditeur Markdown ou une
autre app de notes : il arrive mis en forme — titres, tâches, tableaux,
citations, encadrés, code, liens et images. Chaque ligne devient son propre
paragraphe, et un `#mot` reste un mot. Le texte mis en forme d'une page web ou
d'un traitement de texte se colle comme avant. Pour coller le texte tel quel,
utilisez **⇧⌘V**.

Un collage n'apporte que ce que le document propose : une liste de tâches
collée dans un chapitre arrive en liste avec ses `[ ]`, un tableau en une ligne
par rangée, et les pages du matin reçoivent des paragraphes simples.

**Copier en Markdown.** Choisissez **Copier en Markdown** dans le menu ⋮ d'un
document ou dans la palette de commandes (`⌘P`) pour copier la sélection — ou
tout le document si rien n'est sélectionné — en Markdown.

## Tableaux

Insérez un tableau de départ avec `/table` — une grille 3×3 avec une ligne
d'en-tête que vous pouvez modifier et agrandir à partir de là.

## Blocs plus riches

Au-delà de la prose standard, φ propose des blocs conçus pour les livres, les
essais et la poésie. Insérez-les depuis le menu slash. Certains sont des outils de
**manuscrit** qui apparaissent dans les documents d'écriture et de livre mais sont
masqués sur la page minimale du journal / des pages du matin — si vous n'en voyez
pas un, vérifiez le type de document dans lequel vous êtes.

| Bloc | À quoi il sert | Insérer avec |
|---|---|---|
| **Encadré** | Un encadré info / astuce / avertissement / danger pour les apartés et les notes. | `/callout` |
| **Vers** | Un bloc de poème ou de vers qui conserve vos sauts de ligne et votre indentation, pour que la poésie garde sa forme. | `/verse` |
| **Saut de scène** | Un séparateur centré entre les scènes en fiction — astérisme, étoiles, fleuron, ou un espace vide. | `/scene break` |
| **Épigraphe** | Une citation d'ouverture avec une ligne d'attribution, pour le début d'un chapitre ou d'un livre. | `/epigraph` |
| **Exergue** | Un grand extrait mis en valeur, sorti pour attirer l'attention. | `/pull-quote` |
| **Lettrine** | Une première lettre décorative surdimensionnée. | `/drop cap` |
| **Image** | Une image avec une légende modifiable, un alignement et une largeur ajustable par glissement. Le fichier est copié dans le dossier `assets/` de votre coffre. | `/image` |
| **Table des matières** | Un plan cliquable et en direct des titres de ce document. Il se régénère à mesure que vous modifiez. | `/table of contents` |
| **Bibliographie** | Une liste de références générée automatiquement à partir des sources citées dans le document. | `/bibliography` |

Vous pouvez aussi déposer ou coller une image directement sur la page pour
l'insérer sans légende.

### Éléments en ligne

Quelques éléments se placent à l'intérieur d'une ligne plutôt que comme leur
propre bloc :

| Élément | À quoi il sert | Insérer avec |
|---|---|---|
| **Note de bas de page** | Une note numérotée. Le repère est un petit exposant ; à l'export, les notes sont rassemblées à la fin (ou comme notes de bas de page natives dans Word). | `/footnote` |
| **Citation bibliographique** | Une référence en ligne auteur–année qui pointe vers une source de la bibliothèque du document. Modifiez la source une fois et chaque citation se met à jour. | `/citation` |
| **Puce de date** | Une date (éventuellement avec une heure) qui relie le document à un jour du calendrier. | `/date` ou `/date & time` |
| **@-mention** | Une référence à un personnage par son nom. | Tapez `@` |
| **Lien wiki** | Un lien croisé `[[Titre de note]]` vers une autre note de votre coffre. | Tapez `[[` |

Pour en savoir plus sur ces éléments et leur comportement, voyez les guides
associés : [Notes de bas de page et citations](footnotes-and-citations.md),
[Annotations](annotations.md), et [Liens et graphe](links-and-graph.md).

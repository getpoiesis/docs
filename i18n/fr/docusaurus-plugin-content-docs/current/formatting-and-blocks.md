---
title: Mise en forme et blocs
description: Toutes les mises en forme et tous les blocs de φ, et toutes les façons d’insérer chacun.
---

# Mise en forme et blocs

φ a la mise en forme à laquelle vous vous attendez (titres, listes, citations,
liens) et un ensemble de blocs conçus pour les livres et les poèmes : vers,
sauts de scène, épigraphes, notes de bas de page. Cette page sert de
référence : à quoi sert chacun, et toutes les façons de le créer.

## Mettre en forme en écrivant {#format-as-you-write}

1. Sélectionnez des mots et choisissez dans la barre d’outils au-dessus, ou
   utilisez un raccourci comme `⌘B`.
2. Pour un bloc, tapez `/` sur une ligne vide, puis un mot : `/quote`,
   `/scene`, `/verse`.
3. Ou écrivez le Markdown dont vous avez l’habitude : `## ` crée un titre,
   `**mot**` le met en gras.
4. Les mêmes commandes se trouvent dans le menu **Format** de la barre de
   menus.

## Mots et expressions {#words-and-phrases}

| Mise en forme | Raccourci | Barre d’outils | Markdown |
| --- | --- | --- | --- |
| **Gras** | `⌘B` | **Gras** | `**gras**` |
| **Italique** | `⌘I` | **Italique** | `*italique*` |
| **Souligné** | `⌘U` | **Souligné** | `~souligné~` |
| **Barré** | **Format → Barré** | **Plus d’outils** › **Barré** | `~~barré~~` |
| **Code en ligne** | **Format → Code en ligne** | **Plus d’outils** › **Code en ligne** | `` `code` `` |
| **Surlignage** | | **Surligner et commenter** | `==surlignage==` |
| **Lien** | `⌘⇧K` | **Lien** | `[texte](https://…)` |

**Sortir du gras ou de l’italique.** Terminez le mot et appuyez deux fois sur
la barre d’espace. La première espace reste avec le mot mis en forme ; la
seconde met fin à la mise en forme, et le mot suivant s’écrit en texte normal.

**Liens.** Taper ou coller une adresse web en fait un lien tout seul. Pour en
modifier ou en supprimer un, sélectionnez les mots liés et choisissez de
nouveau **Lien** : tapez une nouvelle adresse, ou videz le champ. Les liens
s’ouvrent dans votre navigateur ; pendant l’édition, maintenez `⌘` et cliquez.
Pour créer un lien vers un autre document du coffre, utilisez plutôt un lien
wiki ([Liens et graphe](./links-and-graph)).

## Titres, listes et citations {#headings-lists-and-quotes}

| Bloc | Commande slash | Raccourci | Markdown |
| --- | --- | --- | --- |
| **Texte** (un paragraphe simple) | `/text` | `⌘⌥0` | |
| **Titre 1** | `/h1` | `⌘⌥1` | `# ` |
| **Titre 2** | `/h2` | `⌘⌥2` | `## ` |
| **Titre 3** | `/h3` | `⌘⌥3` | `### ` (`####` et au-delà aussi) |
| **Liste à puces** | `/bullet` | `⌘⇧8` | `- ` ou `* ` |
| **Liste ordonnée** | `/numbered` | `⌘⇧7` | `1. ` |
| **Liste de tâches** | `/task` ou `/checklist` | | `[] ` ou `- [ ] ` (`- [x] ` la crée cochée) |
| **Citation** | `/quote` | `⇧⌘B` | `> ` |
| **Séparateur** | `/divider` | | `---` |
| **Bloc de code** | `/code` | | ` ``` ` |
| **Tableau** | `/table` | | |

Les titres construisent le plan du document dans le panneau Infos et
alimentent un bloc **Table des matières**.

**Alignement.** **Aligner à gauche**, **Centrer** (`⌘⇧E`), **Aligner à
droite** (`⌘⇧R`) et **Justifier** (`⌘⇧J`) se trouvent dans le menu **Format**
et sous **Plus d’outils** dans la barre d’outils.

**Les listes de tâches** ont trois états, à faire, en cours et fait ; cliquez
sur la case pour faire avancer un élément. Elles sont proposées dans les Notes
et sur les pages de recherche. Pour les proposer ailleurs, activez **Listes de
tâches** pour ce mode dans **Réglages → Réglages d’écriture → Modes**.

**Les tableaux** commencent avec trois colonnes, trois lignes et une ligne
d’en-tête. Faites glisser le bord d’une colonne pour l’élargir. `Tab` passe à
la cellule suivante.

**Les blocs de code** colorent le langage qu’ils reconnaissent, ou celui que
vous indiquez après la clôture d’ouverture (` ```python `). `Tab` augmente
l’indentation et `⇧Tab` la réduit ; réglez **Indenter avec** (**Espaces** ou
**Tabulations**) et **Largeur d’indentation** sous **Réglages → Éditeur →
Code**.

## Blocs pour les livres et les poèmes {#blocks-for-books-and-poems}

Ils sont proposés dans les documents qui appartiennent à un
[projet](./collections) : chapitres, poèmes, essais. Un document qui en
contient déjà un l’affiche où qu’il se trouve.

| Bloc | À quoi il sert | S’insère avec |
| --- | --- | --- |
| **Vers** | Les lignes d’un poème, gardées telles que vous les écrivez, à la marge du texte. | `/verse` ou `⌥⌘V` |
| **Saut de scène** | Un ornement centré entre les scènes : **Astérisme** ⁂, **Étoiles** \* \* \*, **Fleuron** ❧ ou **Espace vide**. Survolez-le pour en changer. | `/scene` |
| **Épigraphe** | Une citation d’ouverture, avec sa source sur une ligne en dessous. | `/epigraph` |
| **Exergue** | Une ligne composée en grand, pour l’emphase. | `/pull-quote` |
| **Lettrine** | Une première lettre agrandie pour le paragraphe. Choisissez-la de nouveau pour la retirer. | `/drop` |
| **Table des matières** | Une liste vivante des titres du document ; cliquez sur l’un d’eux pour y aller. | `/toc` |
| **Note de bas de page** | Une note numérotée. | `/footnote` |
| **Citation bibliographique** | Une référence auteur–année à une source. | `/citation` |
| **Bibliographie** | La liste des sources que vous avez citées. | `/bibliography` |

Les vers, les épigraphes et les sauts de scène sont expliqués dans
[Poésie et vers](./poetry) ; les notes de bas de page, les citations et la
bibliographie dans [Notes de bas de page et citations](./footnotes-and-citations).

## Images, encadrés et dates {#pictures-callouts-and-dates}

| Bloc | À quoi il sert | S’insère avec |
| --- | --- | --- |
| **Image** | Une image avec une légende. Choisissez gauche, centre, droite ou pleine largeur depuis sa barre d’outils, et faites glisser son bord pour la redimensionner. Le fichier est copié dans votre coffre. | `/image`, ou `![alt](https://…)` |
| **Encadré** | Une boîte pour un aparté : information, astuce, avertissement ou danger. Survolez-le pour en changer. | `/callout`, ou `> [!tip] ` |
| **Date** | La date du jour sous forme de puce, qui relie le document à ce jour dans le [calendrier](./calendar). | `/date` |
| **Date et heure** | La même chose, avec l’heure. | `/datetime` |
| **Heure** | L’heure actuelle, en texte simple. | `/time` |

Cliquez sur une puce de date pour ouvrir son jour dans le calendrier ; le
crayon à côté (**Modifier la date et l’heure**) change la date ou l’heure. Les
encadrés ne sont pas proposés dans les entrées du journal.

Deux autres éléments se placent à l’intérieur d’une ligne :

- **Les mentions @** : tapez `@` et choisissez un
  [personnage](./characters-and-authors), ou choisissez **Créer @nom** pour
  en créer un à partir de ce que vous avez tapé.
- **Les liens wiki** : tapez `[[` et choisissez un document
  ([Liens et graphe](./links-and-graph)).

## Écrire en Markdown {#writing-in-markdown}

φ transforme le Markdown en mise en forme pendant que vous tapez, selon les
motifs des tableaux ci-dessus. Vous pouvez aussi le voir en écrivant : activez
**Réglages → Éditeur → Afficher le Markdown**, et les marques (`**`, `#`,
`[ ]( )`) apparaissent en léger autour de la mise en forme de la ligne où vous
êtes. Elles ne font jamais partie de votre texte.

**Coller du Markdown.** Le texte copié depuis un éditeur Markdown ou une
application de notes arrive mis en forme : titres, listes de tâches, tableaux,
citations, encadrés, code, liens, images et notes de bas de page
(`^[la note]`, ou `[^1]` avec sa ligne `[^1]: la note`). Il comprend aussi les
variantes qu’écrivent d’autres applications de notes : `~texte~` souligne,
`==🟢texte==` est un surlignage vert, `[[Note|texte affiché]]` est un lien
wiki, et les `#étiquettes` deviennent les étiquettes du document. Pour coller
le texte exactement tel quel, utilisez `⇧⌘V`.

Un collage n’apporte que ce que le document propose : une liste de tâches
collée dans un chapitre arrive sous forme de liste en gardant ses `[ ]`.

**Copier en Markdown.** **Copier en Markdown**, dans la palette de commandes
(`⌘P`), copie la sélection, ou tout le document quand rien n’est sélectionné.
C’est aussi dans le menu contextuel (clic droit) d’un document dans la liste.

## Voir aussi {#see-also}

- [L’éditeur](./the-editor) : la barre d’outils et le menu slash.
- [Poésie et vers](./poetry)
- [Notes de bas de page et citations](./footnotes-and-citations)
- [Modèles](./templates)

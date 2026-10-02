---
title: Mise en forme et blocs
description: Toutes les mises en forme et tous les blocs de φ, et les façons d’insérer chacun.
---

# Mise en forme et blocs

Cette page recense toutes les mises en forme et tous les blocs de φ. Pour
chacun, elle indique à quoi il sert et comment l’ajouter.

Un bloc est un élément de la page qui n’est pas du texte courant : un titre,
une liste, une citation ou un tableau, par exemple. φ a aussi des blocs pour
les livres et les poèmes : les vers, les sauts de scène, les épigraphes et les
notes de bas de page.

## Mettre en forme en écrivant {#format-as-you-write}

Il y a quatre façons de mettre en forme. Prenez celle qui vous convient.

- **La barre d’outils.** Sélectionnez quelques mots, puis cliquez sur un
  bouton de la barre d’outils qui apparaît au-dessus.
- **Un raccourci.** Sélectionnez quelques mots, puis appuyez sur un raccourci
  comme `⌘B`.
- **Le menu des blocs.** Tapez `/` sur une ligne vide, puis un mot, par
  exemple `/quote`, `/scene` ou `/verse`. Appuyez sur `Enter`.
- **Markdown.** Tapez le Markdown que vous connaissez déjà : `## ` crée un
  titre et `**mot**` met un mot en gras.

Les mêmes commandes se trouvent dans le menu **Format** de la barre des menus.

## Mots et expressions {#words-and-phrases}

| Mise en forme | Raccourci | Barre d’outils | Markdown |
| --- | --- | --- | --- |
| **Gras** | `⌘B` | **Gras** | `**gras**` |
| **Italique** | `⌘I` | **Italique** | `*italique*` |
| **Souligné** | `⌘U` | **Souligné** | `~souligné~` |
| **Barré** | **Format → Barré** | **Plus d’outils** › **Barré** | `~~barré~~` |
| **Code en ligne** | **Format → Code en ligne** | **Plus d’outils** › **Code en ligne** | `` `code` `` |
| **Surlignage** | | **Surligner et commenter** | `==surligné==` |
| **Lien** | `⌘⇧K` | **Lien** | `[texte](https://…)` |

**Pour arrêter le gras ou l’italique.** Terminez le mot et appuyez deux fois
sur la barre d’espace. La première espace garde la mise en forme ; la seconde
y met fin, et le mot suivant s’écrit en texte normal.

**Liens.**

- Quand vous tapez ou collez une adresse web, φ en fait un lien.
- Pour modifier un lien, sélectionnez les mots liés et choisissez de nouveau
  **Lien**. Saisissez la nouvelle adresse.
- Pour supprimer un lien, sélectionnez les mots liés, choisissez **Lien** et
  videz le champ.
- Les liens s’ouvrent dans votre navigateur. Pendant que vous écrivez,
  maintenez `⌘` enfoncée et cliquez sur le lien.
- Pour créer un lien vers un autre document de votre [coffre](./vaults) (le
  dossier où φ range vos documents), utilisez un lien wiki. Voir
  [Liens et graphe](./links-and-graph).

## Titres, listes et citations {#headings-lists-and-quotes}

| Bloc | Commande `/` | Raccourci | Markdown |
| --- | --- | --- | --- |
| **Texte** (un paragraphe ordinaire) | `/text` | `⌘⌥0` | |
| **Titre 1** | `/h1` | `⌘⌥1` | `# ` |
| **Titre 2** | `/h2` | `⌘⌥2` | `## ` |
| **Titre 3** | `/h3` | `⌘⌥3` | `### ` (ainsi que `####` et au-delà) |
| **Liste à puces** | `/bullet` | `⌘⇧8` | `- ` ou `* ` |
| **Liste ordonnée** | `/numbered` | `⌘⇧7` | `1. ` |
| **Liste de tâches** | `/task` ou `/checklist` | | `[] ` ou `- [ ] ` (avec `- [x] `, la tâche est déjà cochée) |
| **Citation** | `/quote` | `⇧⌘B` | `> ` |
| **Séparateur** | `/divider` | | `---` |
| **Bloc de code** | `/code` | | ` ``` ` |
| **Tableau** | `/table` | | |

**Titres.** Les titres forment le plan du document, que vous pouvez consulter
dans le panneau Infos (`⌘⇧I`). Un bloc **Table des matières** les reprend
aussi.

**Alignement.** **Aligner à gauche**, **Centrer** (`⌘⇧E`), **Aligner à
droite** (`⌘⇧R`) et **Justifier** (`⌘⇧J`) se trouvent dans le menu **Format**,
ainsi que sous **Plus d’outils** dans la barre d’outils.

**Listes de tâches.** Chaque élément a trois états : à faire, en cours et
terminé. Cliquez sur la case pour le faire passer à l’état suivant. Le menu
des blocs propose les listes de tâches dans Notes et sur les pages de
recherche. Pour en disposer dans un autre mode, ouvrez **Réglages → Réglages
d’écriture → Modes** et activez **Listes de tâches** pour ce mode.

**Tableaux.** Un nouveau tableau compte trois colonnes et trois lignes, dont
la première sert d’en-tête. Faites glisser le bord d’une colonne pour
l’élargir. Appuyez sur `Tab` pour passer à la cellule suivante.

**Blocs de code.** φ colore le code selon le langage qu’il reconnaît. Pour
choisir vous-même le langage, tapez son nom après les accents graves
d’ouverture, par exemple ` ```python `. Appuyez sur `Tab` pour augmenter le
retrait et sur `⇧Tab` pour le réduire. Pour changer le retrait, ouvrez
**Réglages → Éditeur → Code**, puis réglez **Indenter avec** (**Espaces** ou
**Tabulations**) et **Largeur d’indentation**.

## Blocs pour les livres et les poèmes {#blocks-for-books-and-poems}

Le menu des blocs propose ces blocs dans les documents qui font partie d’un
[projet](./collections) : les chapitres, les poèmes et les essais. Un projet
est un livre, ou tout autre texte long composé de plusieurs documents.

Si un document contient déjà l’un de ces blocs, celui-ci reste affiché même
quand le document se trouve hors d’un projet.

| Bloc | À quoi il sert | Pour l’insérer |
| --- | --- | --- |
| **Vers** | Les vers d’un poème. φ garde les lignes telles que vous les écrivez, à la même marge que le reste du texte. | `/verse` ou `⌥⌘V` |
| **Saut de scène** | Un ornement centré entre deux scènes : **Astérisme** ⁂, **Étoiles** \* \* \*, **Fleuron** ❧ ou **Espace vide**. Placez le pointeur dessus pour en choisir un autre. | `/scene` |
| **Épigraphe** | Une citation placée en ouverture, avec sa source sur la ligne du dessous. | `/epigraph` |
| **Exergue** | Une phrase en grands caractères, pour la mettre en valeur. | `/pull-quote` |
| **Lettrine** | Une grande lettre initiale pour le paragraphe. Choisissez-la de nouveau pour la retirer. | `/drop` |
| **Table des matières** | Une liste des titres du document, qui se met à jour toute seule. Cliquez sur un titre pour vous y rendre. | `/toc` |
| **Note de bas de page** | Une note numérotée. | `/footnote` |
| **Citation bibliographique** | Un renvoi à une source, présenté sous la forme auteur et année. | `/citation` |
| **Bibliographie** | La liste des sources que vous avez citées. | `/bibliography` |

Pour en savoir plus :

- [Poésie et vers](./poetry) explique les vers, les épigraphes et les sauts de
  scène.
- [Notes de bas de page et citations](./footnotes-and-citations) explique les
  notes de bas de page, les citations bibliographiques et la bibliographie.

## Images, encadrés et dates {#pictures-callouts-and-dates}

| Bloc | À quoi il sert | Pour l’insérer |
| --- | --- | --- |
| **Image** | Une image avec sa légende. Sa barre d’outils permet de la placer à gauche, au centre, à droite ou en pleine largeur. Faites glisser son bord pour la redimensionner. φ copie le fichier dans votre coffre. | `/image`, ou `![alt](https://…)` |
| **Encadré** | Un cadre pour une remarque en marge du texte : info, astuce, avertissement ou danger. Placez le pointeur dessus pour choisir un autre type. | `/callout`, ou `> [!tip] ` |
| **Date** | La date du jour, sous forme de pastille. La pastille relie le document à ce jour dans le [calendrier](./calendar). | `/date` |
| **Date et heure** | Comme **Date**, avec l’heure en plus. | `/datetime` |
| **Heure** | L’heure qu’il est, en texte simple. | `/time` |

Cliquez sur une pastille de date pour ouvrir ce jour dans le calendrier.
Cliquez sur le crayon à côté de la pastille (**Modifier la date et l’heure**)
pour changer la date ou l’heure.

Le menu des blocs ne propose pas les encadrés dans les entrées de journal.

Vous pouvez aussi ajouter deux éléments au fil d’une ligne de texte :

- **Les mentions @.** Tapez `@` et choisissez un
  [personnage](./characters-and-authors). Pour créer un personnage à partir du
  nom que vous venez de taper, choisissez **Créer @nom**.
- **Les liens wiki.** Tapez `[[` et choisissez un document. Voir
  [Liens et graphe](./links-and-graph).

## Écrire en Markdown {#writing-in-markdown}

Quand vous tapez du Markdown, φ le transforme en mise en forme. Les tableaux
ci-dessus donnent le Markdown de chaque mise en forme.

**Voir le Markdown.** Activez **Réglages → Éditeur → Afficher le Markdown**.
Les signes Markdown (`**`, `#`, `[ ]( )`) apparaissent alors en estompé autour de la
mise en forme, sur la ligne où vous vous trouvez. Ils ne font jamais partie
de votre texte.

**Coller du Markdown.** Quand vous collez un texte copié depuis un éditeur
Markdown ou une application de notes, φ le met en forme : titres, listes de
tâches, tableaux, citations, encadrés, code, liens, images et notes de bas de
page. Ces dernières peuvent s’écrire `^[la note]`, ou bien `[^1]` accompagné
d’une ligne `[^1]: la note`.

φ comprend aussi le Markdown propre à d’autres applications de notes :

- `~texte~` devient du texte souligné.
- `==🟢texte==` devient un surlignage vert.
- `[[Note|texte affiché]]` devient un lien wiki.
- les `#étiquettes` deviennent les étiquettes du document.

Pour coller le texte tel quel, sans mise en forme, appuyez sur `⇧⌘V`.

Un collage ne garde que les blocs que le document propose. Par exemple, une
liste de tâches collée dans un chapitre devient une liste ordinaire, et chaque
élément conserve son `[ ]`.

**Copier en Markdown.** Ouvrez la palette de commandes (`⌘P`) et choisissez
**Copier en Markdown**. La commande copie la sélection ou, si rien n’est
sélectionné, le document entier. Vous pouvez aussi faire un clic droit sur un
document dans la liste et choisir **Copier en Markdown**.

## Voir aussi {#see-also}

- [L’éditeur](./the-editor) : la barre d’outils et le menu des blocs.
- [Poésie et vers](./poetry)
- [Notes de bas de page et citations](./footnotes-and-citations)
- [Modèles](./templates)

---
title: Exporter et imprimer
---

# Exporter et imprimer

Votre écriture vit dans des fichiers `.poiesis`, mais le monde veut des PDF, des
fichiers Word, des livres numériques et du Markdown. φ exporte vers tous ces
formats : un seul document pour partager un brouillon, ou tout un projet
compilé en une œuvre achevée.

Rien ne quitte votre ordinateur au cours du processus. Chaque export est réalisé
localement et écrit dans un fichier que vous choisissez dans une boîte de
dialogue d’enregistrement classique.

:::warning L’export est la partie la plus brute de φ pour l’instant

φ est un logiciel en alpha, et **l’export (PDF, Word, EPUB et pages web d’œuvres
complètes) est le domaine encore le plus activement en chantier.** Abordez-le
avec les bonnes attentes :

- **Traitez chaque export comme un brouillon, pas comme un fichier final.**
  Ouvrez le résultat dans votre traitement de texte, votre lecteur de PDF ou
  votre liseuse, et relisez-le avant de vous y fier. Attendez-vous à y faire
  quelques retouches.
- **C’est sur les mises en page complexes qu’il peine.** Les notes de bas de
  page nombreuses, les citations et bibliographies, une structure profonde de
  parties et de chapitres, les images, les couvertures pleine page et les blocs
  inhabituels peuvent sortir imparfaits.
- **Votre source est toujours en sécurité.** Exporter ne modifie jamais vos
  fichiers `.poiesis`, vous pouvez donc exporter à nouveau aussi souvent que
  vous le voulez, et chaque version améliore les exportateurs.

Si un export sort mal, vos retours sur *quels* documents posent problème et
*comment* sont ce que vous pouvez envoyer de plus utile pendant l’alpha.

:::

## Exporter un seul document {#exporting-a-single-document}

Avec un document ouvert, vous pouvez l’exporter depuis :

- la palette de commandes (`⌘P`) : **Exporter le document en** suivi du format,
  par exemple **Exporter le document en Markdown (.md)…** ;
- le menu ⋮ du document en haut à droite, qui liste tous les formats vers le
  bas ; ou
- la liste : faites un clic droit sur le document et ouvrez le sous-menu
  d’export.

φ vous demande où enregistrer, et c’est tout. Les formats sont :

| Format | Idéal pour |
| --- | --- |
| **Markdown (.md)** | Passer le texte dans un éditeur Markdown ou un site statique, ou l’archiver en texte brut. Conserve les encadrés, les `==surlignages==` et les notes de bas de page. |
| **HTML page (.html)** | Une page web complète et autonome. |
| **HTML fragment (.html)** | Seulement le corps, sans page autour, à coller dans un site ou un système de contenu qui fournit la sienne. |
| **Rich Text (.rtf)** | S’ouvre mis en forme dans presque tous les traitements de texte, et dans les portails de soumission qui refusent le `.docx`. |
| **Plain text (.txt)** | Seulement le titre et les mots, sans mise en forme. |
| **TextPack (.textpack)** | Votre texte et ses images ensemble dans un seul fichier, pour confier le travail à une autre app d’écriture. |

**Les liens wiki sortent en texte brut.** Un `[[lien]]` sert à circuler dans
votre propre coffre, et un lecteur sans le coffre n’a rien à suivre ; dans tous
les formats, un lien wiki devient donc simplement son titre.

### Autres façons de sortir un document {#other-ways-to-take-a-document-out}

- **Enregistrer une copie (.poiesis avec images)…**, dans le menu ⋮ du document,
  la palette de commandes ou **Fichier → Enregistrer une copie…**, enregistre le
  document comme un seul fichier `.poiesis` portable avec ses images à
  l’intérieur. Utilisez-le pour déplacer un document vers un autre coffre ou
  l’envoyer à quelqu’un d’autre qui écrit avec φ.
- **Copier en Markdown** place le texte dans le presse-papiers en Markdown. Dans
  la palette de commandes, il copie la sélection, ou le document entier si rien
  n’est sélectionné ; depuis le menu contextuel d’un document dans la liste, il
  copie le document entier.

## Exporter un projet (un livre ou un manuscrit) {#exporting-a-project-a-book-or-manuscript}

Un [projet](./collections.md) compile ses documents, dans l’ordre du plan et
avec ses parties et chapitres, en une seule œuvre achevée. Ouvrez sa page
d’export depuis l’un de ces endroits :

- **Exporter le manuscrit…** dans le menu ⋮ du projet (en haut de sa liste) ;
- **Exporter le manuscrit…** par un clic droit sur le projet dans la barre
  latérale ; ou
- **Aller à → Exporter** dans l’Aperçu du projet.

La page commence par un résumé de ce qui sort : combien de chapitres (ou de
poèmes, ou d’essais), de parties et de pages liminaires et finales non
numérotées, le nombre de mots, la signature, et s’il y a une couverture.

### Choisir l’apparence {#choosing-how-it-looks}

Quatre choix appartiennent à l’œuvre elle-même, si bien qu’un roman et un
article dans le même coffre peuvent sortir chacun à leur façon :

- **Style** définit la page, la typographie, l’en-tête courant et la place des
  notes :
  - **As it looks in φ** (par défaut) : la page s’imprime telle que l’éditeur
    l’affiche, dans la police choisie, avec des marges de livre et un titre
    courant.
  - **Standard manuscript** : double interligne, corps 12, marges d’un pouce,
    et un en-tête courant avec votre nom de famille et le numéro de page. Ce que
    demandent les agents et les éditeurs.
  - **Paperback** : un livre relié, avec des marges en miroir pour dégager la
    reliure et une typographie adaptée à une petite page, prêt pour
    l’impression à la demande au format Digest ou Trade.
  - **Poetry** : le vers composé en vers, sans rien de justifié ni de coupé, et
    de l’espace autour de chaque poème.
  - **Academic paper** : double interligne avec une large marge, notes en bas de
    page, et une bibliographie en retrait négatif à la fin.
- **Papier** est la page sur laquelle un PDF s’imprime : **Letter**, **A4**,
  **A5**, **Digest** (5,5 × 8,5 po) ou **Trade** (6 × 9 po). Les autres formats
  se recomposent.
- **Sommaire** définit la profondeur de la table des matières : **Comme le style
  le définit**, **Aucun**, ou **Jusqu’au titre 1**, **2** ou **3**.
- **Encre** : **Noire** imprime les liens et les citations en noir, pour
  qu’aucune couleur du thème n’atteigne un fichier publié ; **Garder la couleur
  de φ** les garde teintés. Les images gardent leur couleur dans les deux cas.

Si vous associez un style à un papier que ses règles n’utilisent pas (un
manuscrit standard au format poche, par exemple), φ vous avertit mais vous
laisse tout de même exporter.

### Formats {#formats}

Chaque format a sa propre ligne. Cliquez sur **Enregistrer…** sur celui que vous
voulez :

| Format | Ce que vous obtenez |
| --- | --- |
| **PDF** | Paginé pour l’impression ou la lecture : couverture, page de titre, sommaire, et notes en bas de leur propre page. |
| **Word** | Le manuscrit tel qu’un éditeur l’attend, et toujours modifiable. Il utilise de vrais styles nommés, donc on peut le remettre en forme. |
| **EPUB** | Un livre numérique recomposable pour les liseuses et les librairies. Il garde la même identité à chaque export, pour qu’une liseuse retrouve votre position, et il déclare la langue dans laquelle vous écrivez. |
| **Page web** | Un seul fichier HTML avec toute l’œuvre, styles et images compris. |
| **Markdown** | Un seul fichier Markdown, chapitres et numérotation conservés. |
| **Texte enrichi** | S’ouvre mis en forme dans presque tous les traitements de texte, et dans les portails de soumission qui refusent le `.docx`. |
| **Une copie du projet** | Tout, tel que φ le conserve, dans un seul fichier `.poiesis`, pour déplacer l’œuvre vers un autre coffre ou la mettre de côté. |

Chaque export compilé porte l’**image de couverture** quand le format peut en
contenir une, construit son sommaire à partir de la structure de l’œuvre, et
peut se terminer par une page **À propos de l’auteur** quand le profil d’auteur
a une biographie ou une photo. La signature vient de l’auteur du projet.

Une fois le fichier enregistré, une petite notification en bas de la fenêtre le
signale et indique où il est allé.

### Imprimer {#printing}

φ n’imprime pas par la boîte de dialogue d’impression du système. Exportez
plutôt un **PDF** et imprimez-le. Avec **As it looks in φ**, le PDF suit les
conventions du livre : les lignes se coupent comme dans l’éditeur, les
chapitres et les parties commencent sur une nouvelle page, chaque note se place
en bas de la page où se trouve son appel (voir
[Notes de bas de page et citations](./footnotes-and-citations.md)), et la
bibliographie commence sur une nouvelle page à la fin. Les autres styles
définissent leur propre page, leur typographie et leurs en-têtes courants.

## Importer {#importing}

φ lit le travail venant d’autres outils et de vos propres sauvegardes.

- **Un document ou un projet φ.** Choisissez **Importer un document φ
  (.poiesis)…** dans la palette de commandes, ou **Fichier → Importer un
  document φ…**, et sélectionnez un fichier `.poiesis` créé avec **Enregistrer
  une copie** ou **Une copie du projet**. Ses images viennent avec lui. Vous
  pouvez aussi faire glisser un fichier `.poiesis` sur la fenêtre de φ.
- **Des fichiers Markdown.** Choisissez **Importer des fichiers Markdown…** dans
  la palette de commandes, ou **Importer…** dans le menu du coffre en haut de la
  barre latérale ou dans le menu ⋮ de la liste des Notes. φ lit les fichiers
  Markdown (`.md`) et texte brut (`.txt`), y compris le front matter, les
  titres, les listes et les tâches, les encadrés, les surlignages, les notes de
  bas de page et les liens wiki.
- **Un dossier de notes Markdown.** Choisissez **Importer un dossier Markdown →
  dans le coffre actuel…** ou **Importer un dossier Markdown → comme nouveau
  coffre…** dans la palette de commandes. φ importe tout le dossier, en
  conservant ses sous-dossiers.
  - Il conserve la **date de création d’origine** de chaque note : à partir
    d’une date dans le fichier, d’un nom de fichier de note quotidienne (comme
    `2022_11_11`), ou de l’historique git du dossier s’il en a un. Votre
    chronologie survit au déménagement.
  - Il reconnecte le **graphe des `[[liens]]`** : il décode les noms de fichiers
    encodés (pages avec espace de noms, et caractères comme `:` ou `&`),
    respecte les propriétés `title::` et `alias::` pour qu’une page soit trouvée
    par son vrai nom et par n’importe quel alias, et traite les `#étiquettes`
    comme des liens vers des pages. Les rétroliens et le graphe fonctionnent sur
    les notes importées immédiatement.

## Voir aussi {#see-also}

- [Projets](./collections.md) : structurer l’œuvre que vous exportez.
- [Notes de bas de page et citations](./footnotes-and-citations.md) : comment
  les notes et les références sortent dans chaque format.
- [Coffres](./vaults.md) : où arrive le travail importé.

---
title: Exporter et imprimer
sidebar_position: 17
---

# Exporter et imprimer

Votre écriture vit dans des fichiers `.poiesis`, mais le monde veut des documents
Word, des PDF, des livres numériques et du Markdown. φ exporte vers tous ces
formats — un document unique pour partager un brouillon, ou toute une collection
compilée en un livre achevé.

Rien ne quitte votre Mac au cours du processus : chaque export est rendu
localement et écrit dans un fichier que vous choisissez avec une boîte de
dialogue d’enregistrement classique.

:::caution L’export est la partie la plus rugueuse de φ pour l’instant

φ est un logiciel en alpha, et **l’export — EPUB, PDF, Word (DOCX) et HTML
compilé — est le domaine encore le plus activement en chantier.** C’est la
partie de l’app la plus susceptible de décevoir aujourd’hui, alors abordez-la
avec les bonnes attentes :

- **Traitez chaque export comme un brouillon, pas comme un fichier final.** Ouvrez
  le résultat dans l’application cible (Word, un lecteur de PDF, un lecteur EPUB)
  et relisez-le avant de vous y fier. Attendez-vous à devoir y faire quelques
  retouches.
- **Les mises en page complexes sont là où ça force** — notes de bas de page
  nombreuses, citations et bibliographies, structure imbriquée de chapitres,
  images et couvertures pleine page, ainsi que les blocs inhabituels peuvent être
  rendus imparfaitement ou nécessiter une correction manuelle.
- **Votre source est toujours en sécurité.** L’export ne modifie jamais vos
  fichiers `.poiesis`, vous pouvez donc réexporter autant de fois que vous le
  souhaitez — et les exportateurs s’améliorent à chaque version, donc un document
  qui s’exporte mal aujourd’hui devrait mieux s’exporter bientôt.
- **Pour les résultats les plus fidèles aujourd’hui**, Markdown et HTML sont les
  plus stables ; DOCX, EPUB et PDF s’améliorent mais sont les moins matures.

Si un export sort mal, c’est un territoire connu — vos retours sur *quels*
documents posent problème et *comment* sont la chose la plus utile que vous
puissiez envoyer pendant l’alpha.

:::

## Exporter un document unique

Un document ouvert, ouvrez la palette de commandes (`⌘P`) et choisissez
**Exporter le document en…** pour le format souhaité. φ le rend et vous demande
où l’enregistrer.

Les formats de document sont :

- **Markdown / Obsidian (`.md`)** — Markdown au format Obsidian : encadrés,
  `==surlignage==`, `[[liens-wiki]]`, notes de bas de page. Idéal pour déplacer
  du texte vers une autre app Markdown ou un site statique, ou pour un archivage
  en texte brut.
- **HTML (`.html`)** — HTML sémantique et autonome. Idéal pour le web ou pour
  coller dans un autre outil en conservant la mise en forme.
- **Texte brut (`.txt`)** — juste les mots, sans mise en forme. Idéal lorsqu’un
  outil veut du texte brut.

Ces formats exportent le seul document actif. Pour compiler plusieurs documents
en un seul livre, utilisez une collection (ci-dessous).

## Exporter une collection (un livre ou un manuscrit)

Une [collection](collections.md) compile ses documents — dans l’ordre de
l’arborescence, parties et chapitres compris — en une œuvre achevée. Ouvrez la
page de la collection dans l’espace **Écrire** et utilisez les boutons en bas :

- **Compiler** — un seul document **HTML** autonome, encadré d’une page de titre,
  d’un sommaire et du style d’export de la collection. Pratique pour
  prévisualiser tout le livre dans un navigateur.
- **PDF** — un PDF prêt à imprimer (voir ci-dessous).
- **EPUB** — un livre numérique EPUB3 : votre style d’édition et la police
  choisie intégrés, images comprises, un sommaire de navigation tenant compte de
  l’arborescence et la couverture.
- **DOCX** — un document Word conservant les titres, les marques, les listes, les
  encadrés et les sauts de scène. Idéal pour les éditeurs, les soumissions et
  quiconque travaille dans Word.

Chaque export de collection intègre l’**image de couverture**, construit un
sommaire à partir de la structure du livre et peut se clore par une page **À
propos de l’auteur** lorsque le profil d’auteur comporte une biographie ou une
photo. La signature et les détails de l’auteur proviennent du profil d’auteur de
la collection.

## Impression et PDF

φ n’imprime pas via la boîte de dialogue d’impression du système ; il produit à
la place un PDF prêt à imprimer que vous pouvez imprimer ou envoyer. Le PDF est
construit selon les conventions du livre :

- **Taille de papier fixe** — US Letter, avec des marges de livre, un titre
  courant en haut et des numéros de page en bas.
- **Corps WYSIWYG** — chaque page est rendue dans la police d’édition et la
  largeur de texte que vous avez choisies, de sorte que le PDF coupe les lignes
  comme le fait l’éditeur.
- **Une page par chapitre** — les chapitres (et les parties) commencent sur une
  nouvelle page, avec des ouvertures centrées.
- **De vraies notes de bas de page par page** — chaque note de bas de page est
  épinglée au bas de la page où se trouve son repère. Voir [Notes de bas de page
  et citations](footnotes-and-citations.md).
- **Bibliographie sur sa propre page** — la liste de références ouvre une page
  neuve à la fin, sans pages blanches parasites avant elle.
- **Couverture pleine page** — l’image de couverture remplit sa page, bord à
  bord, sans en-tête ni pied de page courant.

## Importer

φ lit le travail provenant d’autres outils et de vos propres sauvegardes.

- **Importer un document φ (`.poiesis`)** — depuis le menu **Fichier**, ou
  **Importer un document φ** dans la palette de commandes (`⌘P`). Cela importe un
  fichier `.poiesis` portable (avec ses images intégrées) — par exemple, une
  copie que vous avez enregistrée avec **Enregistrer une copie**.
- **Importer des fichiers Markdown** — choisissez **Importer des fichiers
  Markdown** dans la palette de commandes. φ lit les fichiers Markdown / Obsidian
  / Logseq, y compris le frontmatter, les titres, les listes et les tâches, les
  encadrés, les surlignages et les liens wiki.
- **Importer un coffre Obsidian / Logseq** — choisissez **Importer un coffre
  Obsidian / Logseq** dans la palette de commandes pour importer récursivement un
  dossier de coffre entier, en conservant sa structure de dossiers imbriqués.
  Vous pouvez l’importer **dans votre coffre actuel** ou **comme nouveau
  coffre**.

## Voir aussi

- [Collections (livres et manuscrits)](collections.md) — structurer le livre que
  vous exportez.
- [Notes de bas de page et citations](footnotes-and-citations.md) — comment
  l’appareil de notes est rendu dans chaque format.
- [Coffres](vaults.md) — où atterrit le travail importé.

---
title: Premiers pas
---

# Premiers pas

Cette page vous mène d'une installation toute neuve à votre première page écrite.

## Installer {#install}

φ fonctionne sous **macOS, Windows et Linux**.
**[Téléchargez la dernière version](https://getpoiesis.com/download)** pour
votre système, puis suivez [Installer φ](installing.md) — la page couvre chaque
plateforme, y compris l'invite SmartScreen de Windows (une seule fois) et les
formats AppImage et `.deb` de Linux.

:::warning φ est en alpha
Vous utilisez un logiciel à un stade précoce — attendez-vous à des aspérités.
Votre écriture elle-même est toujours en sécurité : ce sont de simples fichiers
sur votre ordinateur, enregistrés en continu et versionnés. Voir
l'[introduction](intro.md) pour ce qui est solide et ce qui se stabilise encore.
:::

## Premier lancement {#first-launch}

La première fois que vous ouvrez φ, il affiche un court écran de **Bienvenue** et
vous demande où votre écriture doit vivre. Un **coffre** est simplement un
dossier qui contient vos documents. Choisissez **Créer un coffre** ou **Ouvrir un
dossier** ; dans les deux cas, le sélecteur de dossiers de votre système s'ouvre,
et vous choisissez un dossier existant ou en créez un nouveau (par exemple
`~/Documents/Mon livre`).

Si le dossier n'est pas encore un coffre, φ le prépare et vous laisse deux
choses pour commencer : une note intitulée **Welcome to φ**, et un court projet
d'exemple, **The Grey Morning**, qui montre comment un livre se construit et
s'exporte. Lisez-les, gardez-les ou supprimez-les quand vous voulez.

:::note macOS demandera l'accès au dossier
Quand votre coffre se trouve dans un emplacement protégé — **Documents, Bureau,
Téléchargements ou iCloud Drive** — macOS demande si φ peut accéder aux fichiers
qui s'y trouvent. Cliquez sur **Autoriser** (ou **OK**). φ en a besoin pour lire
et enregistrer vos documents ; c'est une invite de confidentialité standard de
macOS, qui n'apparaît qu'une fois par emplacement. Vous pourrez la revoir plus
tard dans **Réglages Système → Confidentialité et sécurité → Fichiers et
dossiers**.

Si l'accès a été refusé, φ le dit au lieu d'afficher un coffre vide : **φ ne peut
pas lire ce dossier**, avec un bouton **Autoriser l'accès…**. Choisissez le
dossier du coffre dans la fenêtre qui s'ouvre, et vos documents reviennent. Si
le dossier a été déplacé, renommé, ou se trouve sur un disque qui n'est pas
connecté, vous verrez plutôt **Ce dossier n'existe plus**.
:::

C'est la seule étape de configuration ; une fois votre choix fait, vous pouvez
écrire.

## Ouvrir ou créer un autre coffre {#open-or-create-another-vault}

Vous pouvez avoir plusieurs coffres — un par projet, par exemple — et passer de
l'un à l'autre à tout moment. Cliquez sur le **nom du coffre** en haut de la
barre latérale : il liste vos coffres et propose **Ouvrir un autre coffre…** et
**Nouveau coffre…**. **Fichier → Changer de coffre…** (`⌥⌘O`) fait la même chose
depuis le clavier.

Voir [Coffres](vaults.md) pour les détails.

## Écrivez votre premier document {#write-your-first-document}

1. Appuyez sur `⌘N` (**Fichier → Nouveau document**), ou cliquez sur le **+** en
   haut de la liste. φ crée l'élément suivant là où vous êtes : un nouveau
   chapitre quand un projet est ouvert, une nouvelle pièce dans Écrire, une
   nouvelle note dans Notes.
2. Tapez un **titre** en haut, puis cliquez dans la page en dessous et commencez
   à écrire.
3. C'est tout — φ **enregistre automatiquement** pendant que vous tapez. Il n'y a
   pas de bouton d'enregistrement à chercher (même si `⌘S` force un
   enregistrement immédiat si vous le souhaitez).

### Quelques choses à essayer {#a-few-things-to-try}

- **Sélectionnez du texte** pour faire apparaître une petite barre d'outils —
  gras, italique, souligné, un titre, un lien, une couleur de surlignage, et
  **Commenter (sans surlignage)**. Le **›** à son extrémité (**Plus d'outils**)
  ouvre le reste, dont **Rechercher le mot** pour le dictionnaire. Voir
  [L'éditeur](the-editor.md).
- **Tapez `/`** en début de ligne pour ouvrir le menu slash et insérer des
  titres, des listes, des citations, des blocs de code, et plus.
- **Tapez `[[`** pour lier un autre document par son nom. Les liens forment une
  toile navigable que vous pouvez voir dans le [graphe](links-and-graph.md).

## Se repérer {#find-your-way-around}

La fenêtre de φ a trois colonnes : la **barre latérale** (votre coffre, le
sélecteur **Écrire · Notes · Journal**, et les lieux de chaque mode), la
**liste** de ce que vous y avez choisi, et la **page** sur laquelle vous
écrivez — avec un panneau **Infos** facultatif à droite (`⇧⌘I`). Chaque mode
s'ouvre sur son propre **Accueil**, et `⌘K` trouve n'importe quel document par
son nom.

[Se repérer dans φ](finding-your-way.md) vous fait faire le tour de tout cela.

## Sauvegardez votre travail {#back-up-your-work}

Comme un coffre est un simple dossier, n'importe quel outil de sauvegarde (Time
Machine, un dossier synchronisé, une copie sur un disque externe) le protège.
Pour l'historique par document et une sauvegarde facultative hors de la machine,
voir [Versions et sauvegarde](versions-and-backup.md).

## Étapes suivantes {#next-steps}

- [Se repérer dans φ](finding-your-way.md) — la barre latérale, la liste, la
  page et les palettes.
- [L'éditeur](the-editor.md) — gagnez en aisance pour écrire et mettre en forme.
- [Projets](collections.md) — structurez un livre ou un manuscrit.
- [Raccourcis clavier](keyboard-shortcuts.md) — travaillez plus vite.

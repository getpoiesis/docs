---
title: Tableaux
---

# Tableaux

Un **tableau**, ce sont des colonnes de cartes — les choses à faire pour un
projet, ou tout ce que vous voulez faire avancer. Les cartes portent des dates,
des priorités, des listes de contrôle et des liens vers vos documents, et un
élément de liste de contrôle dans un document peut vivre sur un tableau et
rester synchronisé avec lui.

<img src="/img/app/boards-light.png" alt="Un tableau de tâches : To do, Doing et Done, avec des cartes" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/boards-dark.png" alt="Un tableau de tâches : To do, Doing et Done, avec des cartes" width="1600" height="1000" loading="lazy" decoding="async" />

## Où vivent les tableaux {#where-boards-live}

Ouvrez **Lieux** → **Tableaux** dans la barre latérale d’**Écrire** ou de
**Notes**. Chaque mode garde les siens :

- **Écrire** affiche les tableaux qui appartiennent à un **projet**.
- **Notes** affiche les tableaux qui n’appartiennent à aucun.

Quand aucun tableau n’est choisi, la page affiche chaque tableau de ce mode sous
forme de vignette — ses colonnes et le nombre de cartes ouvertes. Cliquez sur
l’un d’eux pour l’ouvrir.

## Créer un tableau {#making-a-board}

Il en existe deux sortes :

- **Nouveau tableau de tâches** — commence avec **To do**, **Doing** et
  **Done**. Ses colonnes ont un sens : la première, c’est à faire ; la dernière,
  c’est terminé ; tout ce qui se trouve entre les deux est en cours. C’est la
  sorte qui suit les actions.
- **Nouveau tableau personnalisé** — des colonnes libres (**Column 1**,
  **Column 2**, **Column 3**) sans signification particulière.

Créez l’un ou l’autre avec les boutons de la page Tableaux. Tant qu’aucun
tableau n’est ouvert, **+** en haut de la liste Tableaux crée un tableau de
tâches ; le **⋮** de la liste propose **Nouveau tableau personnalisé**. φ vous
demande : **Nommez le tableau**.

Dans Écrire, un tableau est créé pour le projet où vous êtes — sans projet
ouvert, il n’y a rien à quoi le rattacher. La page **Ouvrir le tableau du
projet** d’un projet propose aussi **Nouveau tableau de tâches pour ce projet**.

## Colonnes {#columns}

- **Ajouter une colonne** — depuis le **⋮** du tableau, ou au bout des colonnes.
- **Renommer** — cliquez sur le nom d’une colonne et tapez.
- **Couleur** — choisissez-en une pour la pastille à côté de son nom, ou **Sans
  couleur**.
- **Déplacer** — glissez une colonne par sa poignée.
- **Retirer** — une colonne peut partir une fois vide ; déplacez d’abord ses
  cartes. Un tableau de tâches garde toujours au moins deux colonnes.

## Cartes {#cards}

Cliquez sur **Ajouter une carte** dans une colonne (ou sur **+** en haut de la
liste, tableau ouvert) pour en ajouter une. Glissez les cartes d’une colonne à
l’autre, et vers le haut ou le bas. Cliquez sur une carte pour l’ouvrir :

- **Titre**, **Notes** (une description) et une **Liste de contrôle** — tapez un
  élément et appuyez sur Entrée.
- **Lié à** — documents, personnages et projets. Cliquez sur un lien pour
  l’ouvrir.
- **Colonne**, **Échéance** (une date), **Rappel** (une date et une heure),
  **Priorité** (**Basse**, **Normale**, **Haute** ou **Urgente**) et une couleur
  d’**Étiquette**.
- **Archiver la carte** — la range sans la supprimer (voir plus bas).
- **Supprimer la carte** — l’envoie à la corbeille. **Restaurer** la remet dans
  la colonne d’où elle venait.

## Garder un tableau en ordre {#keeping-a-board-tidy}

L’en-tête du tableau affiche le nombre de cartes ouvertes, un champ **Chercher
un mot…** et **Afficher les archivées**. Son **⋮** propose :

- **Masquer ce qui est fait** — garde hors de vue les cartes de la dernière
  colonne.
- **Archiver ce qui est terminé** (avec un nombre) — range d’un coup toutes les
  cartes de la dernière colonne. Les cartes archivées ne s’affichent plus et ne
  comptent plus, mais restent dans le fichier du tableau ; **Afficher les
  archivées** les fait revenir, barrées, et **Remettre sur le tableau** sur une
  carte la réintègre.
- **Ajouter une colonne**.
- **Réglages du tableau** — le **Nom** du tableau ; son **Projet** (un projet,
  qui l’affiche dans Écrire, ou **Autonome**, qui l’affiche dans Notes) ; ses
  colonnes, à renommer, colorer, déplacer et retirer ; et **Supprimer le
  tableau**, qui l’envoie à la corbeille.

## Actions : des listes de contrôle qui vivent sur un tableau {#action-items-checklists-that-live-on-a-board}

Un élément de liste de contrôle dans une note peut devenir une carte qui le
suit.

1. Écrivez un élément de liste de contrôle — tapez `[]` ou utilisez
   `/checklist`.
2. Ouvrez l’onglet **Notes** du panneau d’informations (`⇧⌘A`). Sous
   **Actions**, chaque élément de liste de contrôle du document est listé.
3. Cliquez sur **Suivre** à côté de l’un d’eux, et choisissez un tableau de
   tâches (ou créez-en un).

La carte renvoie à la note, et les deux restent synchronisées : cochez l’élément
et la carte passe dans la dernière colonne du tableau ; déplacez la carte et
l’élément suit. Une liste imbriquée suit aussi — les enfants de l’élément
deviennent la liste de contrôle de la carte.

L’Accueil de Notes liste les **Actions en cours** de vos tableaux de Notes, avec
un lien vers **Tous les tableaux**.

## Mettre un document sur un tableau {#putting-a-document-on-a-board}

Une carte peut aussi représenter un document entier : ouvrez le **⋮** du
document → **Ajouter au tableau…** (aussi dans l’onglet **Plan** du panneau
d’informations). Donnez un titre à la carte, choisissez un tableau de tâches, et
la carte renvoie au document. Les **Détails…** d’un document listent les cartes
qui pointent vers lui.

## Le tableau des chapitres d’un projet {#a-projects-chapter-board}

Un projet a un tableau à lui que vous n’avez jamais à tenir : **Ouvrir le
tableau du projet** affiche ses chapitres comme des cartes dans des colonnes de
statut — **À faire**, **Brouillon**, **Révisé**, **Final**. Glissez une carte et
le statut du chapitre change. Les tableaux de tâches du projet se trouvent en
dessous. Voir [Projets](collections.md).

## Échéances {#due-dates}

Une carte avec une date d’**Échéance** apparaît dans le
[calendrier](calendar.md) ce jour-là (**Échéance ·** et le nom du tableau ; le
filtre **Échéance** du calendrier n’affiche que celles-là), et sous **À rendre
cette semaine** dans l’Accueil d’Écrire.

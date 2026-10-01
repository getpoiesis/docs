---
title: Sanctuaire et sessions d’écriture
---

# Sanctuaire et sessions d’écriture

Quand vient le moment d’écrire, l’interface devrait s’effacer. Le Sanctuaire
dégage tout sauf la page, quelques réglages plus discrets vous aident à garder
le fil, et φ suit vos séances et vos nombres de mots sans que vous ayez à le lui
demander.

<img src="/img/app/focus-light.png" alt="Sanctuaire : les mots, et rien autour" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/focus-dark.png" alt="Sanctuaire : les mots, et rien autour" width="1600" height="1000" loading="lazy" decoding="async" />

## Sanctuaire {#sanctuary}

Le Sanctuaire masque la barre latérale, la liste, le panneau Infos et tous les
boutons, et vous laisse seul avec la page. Appuyez sur `⌘.` pour y entrer. Vous
pouvez aussi utiliser **Affichage → Sanctuaire**, l’icône du Sanctuaire en haut à
droite de la page, **Sanctuaire** dans le menu ⋮ du document, ou **Sanctuaire**
dans la palette de commandes (`⌘P`).

Il est proposé là où il y a quelque chose avec quoi être seul : un document que
vous écrivez, et le [graphe](./links-and-graph.md). Il reste dans la fenêtre où
vous êtes au lieu de passer en plein écran ; l’élément plein écran du menu
**Affichage** est là si vous voulez les deux.

Pendant que vous êtes dans le Sanctuaire :

- **Seule la phrase où vous êtes reste pleinement visible** ; le reste du texte
  est atténué. Si vous avez choisi **Paragraphe** sous
  [Écriture focalisée](#focus-typing), c’est tout le paragraphe qui reste
  éclairé. Pour tout garder pleinement visible, désactivez **Réglages →
  Apparence → Le sanctuaire atténue le reste**.
- **Une ligne discrète en haut indique où vit le document** : son mode, son
  projet, sa partie et son chapitre, ou son dossier. Cliquez sur n’importe quelle
  étape pour y aller ; cela quitte le Sanctuaire en gardant le document ouvert.
- **Le nombre de mots passe en bas au centre**, avec le nombre de mots ajoutés
  pendant cette séance (**+N cette séance**).
- **Le défilement machine à écrire** a son propre bouton en haut à droite, à côté
  de la sortie.

Pour sortir, appuyez sur `Esc` ou de nouveau sur `⌘.`, ou cliquez sur l’icône en
haut à droite. Aller quelque part où le Sanctuaire n’a pas sa place, comme le
calendrier ou un tableau, y met fin de lui-même.

## Défilement machine à écrire {#typewriter-scrolling}

Le défilement machine à écrire garde la ligne que vous écrivez au milieu de la
fenêtre, pour que vos yeux restent en place et que le texte monte à leur
rencontre. Activez-le ou désactivez-le avec `⇧⌘T` (ou `⌥⌘T`), **Affichage →
Défilement machine à écrire**, **Défilement machine à écrire** dans le menu ⋮ du
document, le bouton dans le Sanctuaire, ou **Réglages → Éditeur → Défilement
machine à écrire**.

## Écriture focalisée {#focus-typing}

L’écriture focalisée atténue tout sauf l’endroit où vous travaillez, dans le
Sanctuaire ou en dehors. Choisissez ce qui reste éclairé :

- **Phrase** : seulement la phrase en cours.
- **Paragraphe** : le paragraphe en cours.
- **Désactivé** : tout est pleinement éclairé. (Le Sanctuaire atténue quand même
  jusqu’à la phrase, sauf si vous l’avez désactivé.)

Réglez-la dans **Affichage → Écriture focalisée**, dans **Réglages → Éditeur →
Écriture focalisée**, ou avec **Basculer l'écriture focalisée** dans la palette
de commandes.

## Mode lecture {#reading-mode}

Quand vous voulez lire plutôt que modifier, le mode lecture affiche le document
en lecture seule, pour que vous puissiez revisiter un brouillon sans frappe
malencontreuse. Basculez-le avec `⌘E`, **Affichage → Mode lecture**, **Mode
lecture** dans le menu ⋮ du document, ou **Mode lecture** dans la palette de
commandes.

## Sessions d’écriture {#writing-sessions}

Une session d’écriture, ou *séance*, est une plage de travail. Vous n’avez pas à
la démarrer : elle commence à votre première frappe et compte les mots que vous
ajoutez. Elle compte les mots écrits, donc supprimer ne retranche rien, et une
séance riche en révisions montre quand même le travail accompli.

Une séance ne compte le temps que pendant que vous écrivez vraiment. Elle se met
**en pause** après une minute sans frappe, quand vous passez à une autre app,
quand vous quittez l’éditeur, et en mode lecture. La frappe suivante la reprend.
Après vingt minutes sans un mot, la séance se termine d’elle-même.

Vous verrez la séance à trois endroits :

- **+N cette séance** dans l’onglet **Plan** du panneau Infos, sous le nombre de
  mots.
- **+N cette séance** à côté du nombre de mots dans le Sanctuaire.
- **N min cette séance** sur l’Accueil d’**Écrire**, dans la carte Aujourd’hui.

Si vous préférez décider quand une séance commence, désactivez **Démarrer les
sessions automatiquement** dans **Réglages → Réglages d’écriture**. Utilisez
ensuite **Démarrer la session d’écriture** dans la palette de commandes pour en
commencer une, et **Terminer la session d’écriture** pour l’arrêter. Les deux
commandes fonctionnent quel que soit le réglage.

Votre **session la plus longue** et **le plus de mots en une session** sont
conservés comme records personnels, affichés dans les statistiques du document
ci-dessous.

## Nombre de mots et statistiques {#word-count--statistics}

Le nombre de mots d’un document se trouve dans le coin inférieur droit de la
page. Les notes n’en affichent pas, puisqu’une note ne s’écrit pas en vue d’une
longueur.

Cliquez sur le nombre pour voir les statistiques du document :

- **Mots**, **Caractères**, **Phrases** et **Temps de lecture**.
- **Facilité de lecture** et **Niveau scolaire**, si **Statistiques de
  lisibilité** est activé dans **Réglages → Réglages d’écriture**.
- Un petit graphique du nombre de mots du document au fil du temps, intitulé
  **Nombre de mots · N jours travaillés**, dès qu’il a plus d’un jour
  d’historique.
- **Total du coffre**, **Documents** et **Mots au total** : les mots du coffre
  aujourd’hui, le nombre de documents qu’il contient, et tous les mots que vous y
  avez écrits.
- **Session la plus longue** et **Meilleure session (mots)**, dès que vous en
  avez.

## Objectifs de mots {#word-goals}

Donnez un objectif à un document avec **Définir un objectif de mots** dans son
menu ⋮, ou le champ **Objectif de mots** dans **Détails…**. Avec un objectif
défini :

- Le nombre dans le coin affiche **mots / objectif mots**, par exemple
  *1 240 / 3 000 mots*.
- L’onglet **Plan** du panneau Infos affiche une barre qui se remplit à mesure
  que vous écrivez, et le pourcentage de l’objectif atteint (par exemple
  *41 % de 3 000*).

Voir [Projets](./collections.md) pour les objectifs sur toute une œuvre.

## Afficher le Markdown {#show-markdown}

Si vous pensez en Markdown, **Réglages → Éditeur → Afficher le Markdown**
dessine les marqueurs (`**`, `#`, `[ ]( )`, etc.) en léger autour de la mise en
forme de la ligne que vous écrivez, et les masque à nouveau dans les lignes que
vous quittez. Cela ne change que ce que vous voyez ; vos documents restent
exactement tels qu’ils sont.

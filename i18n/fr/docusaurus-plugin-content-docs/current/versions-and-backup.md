---
title: Versions et sauvegarde
---

# Versions et sauvegarde

Votre écriture est enregistrée en continu, et φ conserve un historique pour que
vous puissiez revenir à n’importe quel brouillon antérieur. Rien ne quitte votre
ordinateur à moins que vous ne configuriez vous-même un distant.

<img src="/img/app/versions-light.png" alt="L’historique d’un document : instantanés nommés et points de contrôle automatiques" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="L’historique d’un document : instantanés nommés et points de contrôle automatiques" width="1600" height="1000" loading="lazy" decoding="async" />

## Comment fonctionne l’enregistrement {#how-saving-works}

Chaque modification s’enregistre d’elle-même un instant après que vous avez
cessé de taper, et chaque écriture est vérifiée avant d’être considérée comme
fiable. Vous n’avez jamais besoin d’appuyer sur Enregistrer. Pendant un
enregistrement, le pied de la barre latérale indique **Enregistrement…**.

`⌘S` est toujours là si vous le souhaitez : il enregistre immédiatement et crée
un point de contrôle, pour que vous ayez un point explicite où revenir.

En plus de l’enregistrement, φ crée des **versions** : des copies à un instant
donné que vous pouvez parcourir et restaurer.

## Deux types de version {#two-kinds-of-version}

- **Les points de contrôle** sont créés pour vous : à intervalle régulier
  pendant que vous travaillez (toutes les cinq minutes, sauf si vous le changez
  dans **Réglages → Versions**), quand vous fermez la fenêtre, quand vous
  appuyez sur `⌘S`, et quand φ met à jour vos documents vers un nouveau format
  de fichier. Vous n’avez pas à y penser.
- **Les instantanés** sont des versions nommées que vous créez volontairement
  pour marquer une étape : la fin d’un chapitre, un brouillon terminé. Appuyez
  sur `⌘⇧S` (**Fichier → Enregistrer une version…**), ou cliquez sur
  **Enregistrer un instantané** en haut de l’onglet Historique, et donnez-lui un
  nom.

## L’onglet Historique {#the-history-tab}

L’historique d’un document se trouve dans l’onglet **Historique** du
[panneau Infos](./finding-your-way.md). Pour l’ouvrir :

- appuyez sur `⇧⌘I` pour le panneau Infos, puis cliquez sur **Historique** ;
- choisissez **Historique des versions** dans le menu ⋮ du document ; ou
- faites un clic droit sur le document dans la liste et choisissez
  **Historique des versions**.

En haut, **Enregistré** vous rappelle que vos modifications sont déjà en
sécurité, et **Enregistrer un instantané** nomme une nouvelle version. En
dessous, l’historique est regroupé par jour (Aujourd’hui, Hier, etc.). Les
points de contrôle d’une journée se replient en une seule ligne que vous pouvez
ouvrir, pour que les instantanés ressortent. Vous pouvez replier ou déplier tous
les jours d’un coup, chercher des versions par nom, et filtrer par **Toutes**,
**Instantanés**, **Points de contrôle** ou **Restaurations**.

### Consulter une ancienne version {#looking-at-an-old-version}

Cliquez sur n’importe quelle version pour l’ouvrir à la place du document, en
lecture seule, sous une barre **Aperçu de la version** :

- **Afficher les changements** marque ce qui diffère de la version actuelle.
  Avec les changements affichés, basculez entre **Côte à côte** et **Dans le
  contenu**. Dans le contenu, une ligne **Changements de métadonnées** liste
  aussi les changements de titre, de description, d’étiquettes, de statut,
  d’objectif ou d’étoile. **Masquer les changements** retire les marques. Vous
  pouvez choisir la finesse du marquage, par mot ou par caractère, dans
  **Réglages → Éditeur → Détail des différences**.
- **Restaurer** fait de cette version le document actif. Votre texte actuel est
  d’abord enregistré comme nouvelle version, donc rien n’est perdu.
- **Revenir à l’actuel** (ou `Esc`) revient au document tel qu’il est
  maintenant.

## Historique natif ou git {#native-history-or-git}

Chaque coffre a son propre **moteur** de versions, choisi dans **Réglages →
Versions** :

- **Natif** conserve des instantanés locaux à côté de votre coffre. Il ne
  nécessite aucune installation et fonctionne d’emblée. Le nombre de versions
  conservées par document est limité (les plus anciennes sont élaguées pour
  maîtriser l’espace disque), et vous pouvez modifier cette limite.
- **Git** conserve un historique complet et illimité, et peut le sauvegarder
  ailleurs. Il est proposé dès que git est installé sur votre ordinateur
  (jusque-là, l’option indique **Git (git requis)**).

Passer un coffre à git est une démarche délibérée, et φ l’explique d’abord dans
une boîte de dialogue **Convertir ce coffre en git ?** : φ exécute `git init`
dans le coffre, fait des commits à intervalles réguliers, et reprend votre
historique natif existant. Une fois qu’un coffre est un dépôt git, il reste sur
git ; pour revenir à Natif, il vous faudrait supprimer vous-même son dossier
`.git`.

Quelques points à connaître :

- **Dossiers synchronisés dans le cloud.** Si le coffre se trouve dans un
  dossier synchronisé dans le cloud, φ garde son dépôt git sur cet ordinateur
  plutôt qu’à l’intérieur du coffre. La synchronisation copie les fichiers d’un
  dépôt un par un, dans n’importe quel ordre, et c’est ainsi que les dépôts se
  cassent ; vos documents font chacun un seul fichier et voyagent sans risque.
- **φ sur iPhone et iPad** lit et écrit le même coffre mais n’exécute jamais
  git. Les versions créées là-bas sont conservées dans le dossier
  `.poiesis-history` du coffre, que les deux apps partagent.
- Si l’historique ne peut pas du tout être conservé pour un coffre, l’onglet
  Historique indique **Le versionnage est indisponible.** et pourquoi.

### Avant les gros changements {#before-big-changes}

Quand vous remplacez un mot **partout** dans le coffre (voir
[Rechercher et remplacer](./search-and-replace.md)), φ enregistre d’abord une
version du coffre entier, nommée d’après ce que vous remplacez, pour que le
changement puisse être annulé.

## Sauvegarder vers un distant git {#backing-up-to-a-git-remote}

Avec le moteur git, vous pouvez pousser votre historique vers un distant à vous
(GitHub, GitLab ou n’importe quel hébergeur git), pour qu’une copie existe
ailleurs que sur votre ordinateur. Dans **Réglages → Versions → Sauvegarde
git** :

- Définissez une **URL du distant de sauvegarde** vers laquelle pousser (vide,
  elle utilise l’origin existant du dépôt).
- Activez **Push automatique des sauvegardes** pour pousser les nouveaux commits
  régulièrement, et réglez **Pousser toutes les** (minutes).
- **Sauvegarder maintenant** vous indique si vous êtes à jour, si vous avez des
  commits non poussés, ou si vous n’avez pas encore de distant. **Pousser
  maintenant** pousse immédiatement ; tout comme **Sauvegarder maintenant (git
  push vers le distant)** dans la palette de commandes.
- Définissez éventuellement un **Nom du commit**, un **E-mail du commit** et un
  **Chemin de la clé SSH** pour que ce travail reste à l’écart de votre compte
  principal, et **Signer les commits** pour qu’ils apparaissent comme vérifiés.

Utilisez un dépôt privé et une identité dédiée pour cela.

## Un coffre, ce ne sont que des fichiers {#a-vault-is-just-files}

Un coffre est un simple dossier de fichiers `.poiesis` (avec un dossier
`assets/` pour les images, et son historique de versions), donc toute sauvegarde
en laquelle vous avez déjà confiance fonctionne aussi : Time Machine, un dossier
synchronisé, ou une copie sur un disque. Le versionnage de φ est un filet de
sécurité, pas le seul.

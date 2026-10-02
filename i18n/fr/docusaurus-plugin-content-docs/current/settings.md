---
title: Réglages
description: Toutes les sections des Réglages de φ, et ce que change chaque réglage.
---

# Réglages

Tous les réglages de φ sont réunis dans une seule fenêtre. Les sections sont
à gauche : cliquez sur l’une d’elles pour afficher ses réglages à droite. Un
changement s’applique aussitôt ; il n’y a rien à enregistrer.

<img src="/img/app/settings-light.png" alt="Les Réglages ouverts sur Apparence : thème, taille de l’interface, thème de couleur et barre latérale" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Les Réglages ouverts sur Apparence : thème, taille de l’interface, thème de couleur et barre latérale" width="1600" height="1000" loading="lazy" decoding="async" />

## Ouvrir les Réglages {#open-settings}

Vous avez trois possibilités :

- Cliquez sur le bouton à curseurs en haut de la barre latérale, à côté du nom
  du coffre.
- Appuyez sur `⌘P` et choisissez **Ouvrir les réglages**.
- Sur un Mac, appuyez sur `⌘,` ou choisissez **Préférences…** dans le menu de
  l’application.

Certains réglages valent pour toute l’application, d’autres seulement pour le
coffre ouvert. Un [coffre](./vaults) est le dossier qui contient votre travail.

| Section | Ce qu’elle contient | S’applique à |
| --- | --- | --- |
| **Apparence** | Clair ou sombre, taille de l’interface, thème de couleur, couleur de la barre latérale | Toute l’application |
| **Éditeur** | La zone où vous écrivez : police, taille, concentration, dates, série, code, versions | Toute l’application |
| **Réglages d’écriture** | Les signaux (ce que φ vous montre de votre écriture) et les lieux de chaque mode | Le coffre ouvert |
| **Langue** | La langue de l’application, l’orthographe, votre dictionnaire | Toute l’application, avec une partie **Ce coffre** |
| **Versions** | La façon dont l’historique est conservé et sauvegardé | Le coffre ouvert |
| **Coffre** | Les modes du coffre ; ajouter ou retirer des coffres | Le coffre ouvert |
| **Modèles** | Vos modèles et leurs variables | Ce coffre et tous les coffres |
| **Raccourcis** | Les principaux raccourcis clavier | — |
| **Données** | L’état de vos fichiers, les sauvegardes de migration, une réinitialisation | Toute l’application |

## Apparence {#appearance}

L’aspect de φ. La page [Thèmes et langues](./themes-and-languages) en dit plus
sur les thèmes de couleur.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Apparence** | **Système**, **Clair** ou **Sombre**. **Système** suit votre ordinateur : φ passe en sombre quand votre ordinateur le fait. |
| **Taille de l’interface** | **100%**, **115%**, **130%** ou **150%**. Agrandit tout, icônes comprises. |
| **Thème de couleur** | Les thèmes dont vous disposez, chacun avec un petit aperçu. **Installer un thème…** et **Parcourir les thèmes officiels…** permettent d’en ajouter. **Ouvrir le dossier des thèmes** montre où ils sont rangés. |
| **Barre latérale en thème clair** | **Sombre** ou **Clair**. **Sombre** est le choix par défaut : la page est ainsi la zone la plus lumineuse de l’écran. En thème sombre, la barre latérale est toujours sombre. |
| **Le sanctuaire atténue le reste** | Le [Sanctuaire](./focus-and-writing-modes) masque tout dans φ, sauf la page. Quand ce réglage est activé, le Sanctuaire atténue tout sauf la phrase que vous écrivez. Si **Écriture focalisée** est réglée sur **Paragraphe**, c’est le paragraphe entier qui reste net. Désactivez le réglage pour ne rien atténuer. |

## Éditeur {#editor}

La zone où vous écrivez.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Police du corps** | La police dans laquelle vous écrivez. La liste est divisée en trois groupes : Serif, Sans et Mono. Les polices marquées *système* viennent de votre ordinateur. Les autres sont fournies avec φ, qui les intègre aux livres numériques que vous créez. |
| **Taille de police** | De 14 à 26 px. **Réinitialiser** rétablit la valeur par défaut. |
| **Hauteur de ligne** | L’espace entre les lignes, de 1,3 à 2,2. **Réinitialiser** rétablit la valeur par défaut. |
| **Écriture focalisée** | **Désactivé**, **Phrase** ou **Paragraphe**. Atténue tout sauf la phrase ou le paragraphe que vous écrivez. |
| **Afficher le Markdown** | Affiche les signes Markdown (`**`, `#` et `[ ]( )`) en texte pâle autour de la mise en forme, sur la ligne que vous écrivez. Vos documents ne changent pas. |
| **Défilement machine à écrire** | Garde la ligne que vous écrivez au milieu de la fenêtre. |
| **Format de date** | L’affichage des dates dans toute l’application : *June 11, 2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026*, ou **Personnalisé…**. Seul l’affichage change ; le jour enregistré, lui, ne change jamais. |
| **Modèle personnalisé** | Apparaît quand vous choisissez **Personnalisé…**. Saisissez un modèle avec les symboles de date-fns (`yyyy`, `MMM`, `d`, `EEEE`…). φ affiche la date du jour selon ce modèle à mesure que vous tapez. |
| **Minimum de mots / jour** | Sous **Série d’écriture**. Le nombre de mots à écrire pour qu’une journée compte dans votre série (50 ou plus). Une série est une suite de jours consécutifs où vous avez écrit. |
| **Indenter avec** | Sous **Code**. **Espaces** ou **Tabulations**, dans les blocs de code. |
| **Largeur d’indentation** | Sous **Code**. Le nombre d’espaces d’un retrait, de 1 à 8. Il fixe aussi la largeur d’affichage d’une tabulation. |
| **Détail des différences** | Sous **Versions et import**. Quand vous consultez une ancienne version, φ signale les changements par **Mot** ou par **Caractère**. |
| **Images importées** | Sous **Versions et import**. **Copier dans le coffre** place les images que vous importez dans le dossier `assets/` du coffre. **Intégré** les garde à l’intérieur du document, ce qui l’alourdit. |

## Réglages d’écriture {#setup}

Ce que φ vous montre dans ce coffre. Quand vous désactivez un élément, φ le
masque. Votre travail, lui, n’est jamais masqué ni supprimé. La page
[Réglages d’écriture](./setup) explique tout cela.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Démarrer les sessions automatiquement** | Activé : le chronomètre de session démarre dès la première lettre que vous tapez. Désactivé : il ne tourne que si vous le lancez. |
| **Statistiques de lisibilité** | Affiche le niveau de lecture et la longueur des phrases dans les statistiques d’un document. |
| **Série** | **Flamme et compte**, **Jours simples** ou **Désactivée**. |
| **La semaine commence le** | N’importe quel jour de la semaine. Ce réglage fixe la première colonne du calendrier et de la carte de chaleur, ainsi que la semaine sur laquelle votre rythme est calculé. |
| **Rythme hebdomadaire** | **Aucun**, ou le nombre de jours par semaine où vous voulez écrire. Un jour manqué ne le remet jamais à zéro. |
| **Modes** | Ouvrez **Écrire**, **Notes** ou **Journal** pour configurer ce mode. Vous pouvez choisir les lieux qu’il propose (Personnages, Auteurs, Recherche, Tableaux, Graphe, Calendrier, pages du matin). Vous pouvez modifier les signaux (les réglages ci-dessus) pour ce mode seulement. Vous pouvez activer ou désactiver les **Listes de tâches**. Chaque mode porte la mention **Suit le coffre** ou **Diffère**. **Suivre le coffre à nouveau** supprime la différence. |
| **Réglages enregistrés** | **Enregistrer sous…** enregistre ces réglages sous un nom. **Utiliser dans ce coffre** ou **Utiliser dans un autre coffre…** applique des réglages enregistrés à un coffre. Vous pouvez aussi les renommer ou les supprimer. |

## Langue {#language}

| Réglage | Ce qu’il fait |
| --- | --- |
| **Langue de l’interface** | La langue des menus et des libellés de φ : **Réglage du système**, une langue fournie avec φ ou une langue que vous avez installée. En dessous se trouvent **Installer une langue…**, **Exporter le modèle anglais…** et **Ouvrir le dossier**. |
| **Vérifier l’orthographe** | Souligne les mots mal orthographiés pendant que vous écrivez. |
| **Moteur** | **Natif** utilise le correcteur de votre ordinateur. **Amélioré** utilise les dictionnaires de φ : les résultats sont alors les mêmes sur tous les ordinateurs. |
| **Langues** | Les langues à vérifier. Avec **Natif** sur un Mac, c’est le Mac qui choisit la langue. |
| **Par défaut pour ce coffre** | Sous **Ce coffre**. **Utiliser global**, **Natif** ou **Amélioré**, pour ce coffre uniquement. Avec **Amélioré**, vous pouvez aussi choisir les langues de ce coffre. |
| **Dictionnaire personnel** | Les mots que vous avez ajoutés. Chacun a un bouton corbeille pour le retirer. |
| **Dictionnaire et thésaurus** | **Installer un pack de dictionnaire…** ajoute un dictionnaire. En dessous figurent les packs dont vous disposez, avec leur nombre de mots. |

Voir [Thèmes et langues](./themes-and-languages), [Orthographe](./spelling) et
[Dictionnaire et thésaurus](./dictionary).

## Versions {#versioning}

Ces réglages concernent le coffre ouvert, dont le nom est affiché en haut.
Chaque coffre conserve son propre historique.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Backend** | **Natif** : les versions sont conservées sur cet ordinateur, sans rien installer. **Git** : un historique sans limite et, si vous le souhaitez, une sauvegarde ailleurs. Tant que git n’est pas installé, l’option s’appelle **Git (git requis)**. Quand vous passez à git, φ vous demande d’abord confirmation, puis transfère votre historique. Pour revenir en arrière, vous devez supprimer vous-même le dossier `.git` du coffre. |
| **Point de contrôle automatique toutes les** | La fréquence à laquelle φ crée de lui-même une version de vos modifications. Saisissez un nombre de minutes, ou choisissez **1**, **5**, **10**, **30** ou **Désactivé**. Ce réglage ne touche pas aux versions que vous enregistrez vous-même. |
| **Limite d’historique local** | Avec Natif uniquement. Le nombre maximal de versions conservées pour chaque document. Les plus anciennes sont supprimées. |

Quand le backend est **Git**, un groupe **Sauvegarde git** apparaît :

| Réglage | Ce qu’il fait |
| --- | --- |
| **Nom du commit** · **E-mail du commit** | Le nom et l’e-mail inscrits dans l’historique. S’ils sont vides, φ utilise l’utilisateur git de votre ordinateur. |
| **Chemin de la clé SSH** | La clé privée dont φ se sert pour envoyer la sauvegarde. **Parcourir…** vous laisse choisir le fichier. Le fichier de la clé doit être en `chmod 600`. |
| **URL du distant de sauvegarde** | L’adresse où la sauvegarde est envoyée. Si elle est vide, φ utilise le distant existant du dépôt. |
| **Push automatique des sauvegardes** | Envoie le nouvel historique à intervalles réguliers. **Pousser toutes les** fixe le nombre de minutes. |
| **Signer les commits** | Signe les commits pour qu’ils apparaissent comme vérifiés. Choisissez une **Méthode de signature** (SSH ou GPG) et une **Clé de signature**. |
| **Sauvegarder maintenant** | Indique l’état de la sauvegarde : à jour, commits en attente d’envoi ou aucun distant pour le moment. **Pousser maintenant** envoie la sauvegarde tout de suite. |

Si le coffre se trouve dans un dossier cloud, φ conserve son dépôt git sur cet
ordinateur, et non dans le coffre. Sur iPhone et iPad, φ (bientôt disponible)
n’exécute jamais git : il conserve les versions dans le dossier
`.poiesis-history` du coffre. Pour en savoir plus, voyez
[Versions et sauvegarde](./versions-and-backup).

## Coffre {#vault}

| Réglage | Ce qu’il fait |
| --- | --- |
| **Coffre actif** | Le nom et le dossier du coffre ouvert. |
| **Espaces** | Les modes que le coffre affiche : **Écrire**, **Notes** et **Journal** (au moins un). **S’ouvre sur** fixe ce que vous voyez à l’ouverture du coffre : **Accueil** ou l’un de ses modes. |
| **Gérer** | **Ouvrir un coffre…** et **Créer un coffre…** ajoutent un coffre. **Retirer le coffre…** vous demande comment le retirer. **Dissocier (conserver le dossier)** retire le coffre de φ sans toucher au dossier. **Déplacer vers la corbeille** envoie tout le dossier dans la corbeille de votre ordinateur, où vous pouvez encore le récupérer. |

Voir [Coffres](./vaults).

## Modèles {#templates}

En haut figurent les variables qu’un modèle peut utiliser : `<% today %>`,
`<% tomorrow %>`, `<% yesterday %>`, `<% time %>` et `<% cursor %>`. La
dernière indique où se place le curseur dans le nouveau document.

En dessous, deux listes : **Ce coffre** et **Modèles globaux**. Chaque modèle
a un bouton crayon pour le modifier et un bouton corbeille pour le supprimer.

- **Installer un modèle…** ajoute un fichier de modèle.
- **Ouvrir le dossier des modèles** montre où les modèles sont rangés.

Voir [Modèles](./templates).

## Raccourcis {#shortcuts}

Les principaux raccourcis clavier, en quatre groupes : **Se déplacer**,
**Documents**, **Écriture** et **Format**. C’est la liste qu’affiche `⌘/`.
Tapez dans **Rechercher des commandes…** pour trouver un raccourci.

La page [Raccourcis clavier](./keyboard-shortcuts) les donne tous.

## Données {#data}

| Réglage | Ce qu’il fait |
| --- | --- |
| **Santé du coffre** | Indique si vos documents sont au format de fichier actuel. Si certains sont dans un format plus ancien, **Migrer toutes les notes** les met à jour. φ enregistre d’abord une sauvegarde de chacun. |
| **Sauvegardes** | Apparaît une fois que des documents ont été migrés. Indique le nombre de sauvegardes et leur taille. **Ouvrir le dossier des sauvegardes** les montre ; **Effacer les anciennes sauvegardes** supprime les plus anciennes. |
| **Réinitialiser tous les réglages…** | Rétablit la valeur par défaut de tous les réglages de l’application (thème, éditeur, disposition, graphe, dates). φ vous demande d’abord confirmation. Vos documents, vos coffres et vos statistiques d’écriture sont conservés. |

## Voir aussi {#see-also}

- [Réglages d’écriture](./setup) : tout sur les signaux, les lieux et les
  modes.
- [Thèmes et langues](./themes-and-languages)
- [Raccourcis clavier](./keyboard-shortcuts)
- [Versions et sauvegarde](./versions-and-backup)

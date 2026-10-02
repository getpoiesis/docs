---
title: Réglages
description: Chaque section des Réglages de φ, et ce que change chaque réglage.
---

# Réglages

φ rassemble ses réglages dans une seule fenêtre : les sections à gauche, et à
côté les réglages de celle que vous choisissez. Les changements prennent effet
immédiatement ; il n’y a rien à enregistrer.

<img src="/img/app/settings-light.png" alt="Les Réglages ouverts sur Apparence : thème, taille de l’interface, thème de couleur et barre latérale" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/settings-dark.png" alt="Les Réglages ouverts sur Apparence : thème, taille de l’interface, thème de couleur et barre latérale" width="1600" height="1000" loading="lazy" decoding="async" />

## Ouvrir les Réglages {#open-settings}

- Cliquez sur le bouton à curseurs en haut de la barre latérale, à côté du nom
  du coffre.
- Appuyez sur `⌘P` et choisissez **Ouvrir les réglages**.
- Sur Mac, appuyez sur `⌘,`, ou choisissez **Préférences…** dans le menu de
  l’app.

| Section | Ce qu’elle contient | S’applique à |
| --- | --- | --- |
| **Apparence** | Clair ou sombre, taille de l’interface, thème de couleur, la barre latérale | Toute l’app |
| **Éditeur** | La surface d’écriture : police, taille, focalisation, dates, série, code, versions | Toute l’app |
| **Réglages d’écriture** | Les signaux que φ vous renvoie et les lieux que propose chaque mode | Le coffre ouvert |
| **Langue** | La langue de l’app, l’orthographe, votre dictionnaire | Toute l’app, plus une partie **Ce coffre** |
| **Versions** | Comment l’historique est conservé et sauvegardé | Le coffre ouvert |
| **Coffre** | Les modes du coffre, et l’ajout ou le retrait de coffres | Le coffre ouvert |
| **Modèles** | Vos modèles et leurs variables | Ce coffre et tous les coffres |
| **Raccourcis** | Les principaux raccourcis clavier | — |
| **Données** | La santé de vos fichiers, les sauvegardes de migration, une réinitialisation | Toute l’app |

## Apparence {#appearance}

L’aspect de φ. Plus d’informations sur les thèmes de couleur dans
[Thèmes et langues](./themes-and-languages).

| Réglage | Ce qu’il fait |
| --- | --- |
| **Apparence** | **Système**, **Clair** ou **Sombre**. Système suit votre ordinateur et bascule avec lui. |
| **Taille de l'interface** | **100 %**, **115 %**, **130 %** ou **150 %**. Met tout à l’échelle, icônes comprises. |
| **Thème de couleur** | Les thèmes installés, chacun avec un petit aperçu. **Installer un thème…**, **Ouvrir le dossier des thèmes** et **Parcourir les thèmes officiels…** en ajoutent d’autres. |
| **Barre latérale en thème clair** | **Sombre** (par défaut, pour que la page soit l’élément le plus lumineux de l’écran) ou **Clair**. En thème sombre, la barre latérale est toujours sombre. |
| **Le sanctuaire atténue le reste** | Dans le [Sanctuaire](./focus-and-writing-modes), seule la phrase où vous êtes reste pleinement visible, ou le paragraphe si **Écriture focalisée** le demande. Désactivez-le pour tout garder éclairé. |

## Éditeur {#editor}

La surface d’écriture.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Police du corps** | La police dans laquelle vous écrivez, regroupée en Serif, Sans et Mono. Les polices marquées *système* viennent de votre ordinateur ; les autres sont fournies avec φ et intégrées aux livres numériques. |
| **Taille de police** | De 14 à 26 px. **Réinitialiser** revient à la valeur par défaut. |
| **Hauteur de ligne** | De 1,3 à 2,2. **Réinitialiser** revient à la valeur par défaut. |
| **Écriture focalisée** | **Désactivé**, **Phrase** ou **Paragraphe** : atténue tout sauf la phrase ou le paragraphe où vous êtes. |
| **Afficher le Markdown** | Affiche en léger les marques `**`, `#` et `[ ]( )` autour de la mise en forme de la ligne que vous écrivez. Vos documents ne changent pas. |
| **Défilement machine à écrire** | Garde la ligne que vous écrivez au milieu de la fenêtre. |
| **Format de date** | Comment les dates s’affichent dans toute l’app : *June 11, 2026*, *Jun 11, 2026*, *6/11/2026*, *2026-06-11*, *Tue, Jun 11, 2026*, ou **Custom…**. Seul l’affichage change, jamais le jour enregistré. |
| **Modèle personnalisé** | Apparaît avec **Personnalisé…**. Accepte les jetons de date-fns (`yyyy`, `MMM`, `d`, `EEEE`…) et affiche la date du jour pendant que vous tapez. |
| **Minimum de mots / jour** | Sous **Série d’écriture** : combien de mots font compter une journée dans votre série (50 ou plus). |
| **Indenter avec** | Sous **Code** : **Espaces** ou **Tabulations** dans les blocs de code. |
| **Largeur d’indentation** | Sous **Code** : espaces par indentation, de 1 à 8, et la largeur d’affichage d’une tabulation. |
| **Détail des différences** | Sous **Versions et import** : quand vous prévisualisez une ancienne version, marque les changements par **Mot** ou par **Caractère**. |
| **Images importées** | Sous **Versions et import** : **Copier dans le coffre** place les images que vous importez dans le dossier `assets/` du coffre ; **Intégré** les garde à l’intérieur du document, qui devient plus lourd. |

## Réglages d’écriture {#setup}

Ce que φ vous montre dans ce coffre. Désactiver quelque chose le masque, jamais
votre travail. [Réglages d’écriture](./setup) traite le sujet en entier.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Démarrer les sessions automatiquement** | Le chronomètre démarre à votre première frappe. Désactivé, il ne tourne que si vous le lancez. |
| **Statistiques de lisibilité** | Le niveau de lecture et la longueur des phrases dans les statistiques d’un document. |
| **Série** | **Flamme et compte**, **Jours simples** ou **Désactivée**. |
| **La semaine commence le** | N’importe quel jour de la semaine : la première colonne du calendrier et de la carte de chaleur, et la semaine sur laquelle votre rythme est compté. |
| **Rythme hebdomadaire** | **Aucun**, ou un nombre de jours par semaine à viser. Un jour manqué ne le réinitialise jamais. |
| **Modes** | Ouvrez **Écrire**, **Notes** ou **Journal** pour choisir les lieux qu’il propose (Personnages, Auteurs, Recherche, Tableaux, Graphe, Calendrier, pages du matin), changer les signaux pour ce mode seulement, et activer ou désactiver les **Listes de tâches**. Chacun indique **Suit le coffre** ou **Diffère** ; **Suivre le coffre à nouveau** annule la différence. |
| **Réglages enregistrés** | **Enregistrer sous…** garde ces réglages sous un nom. **Utiliser dans ce coffre** ou **Utiliser dans un autre coffre…** les pose sur un coffre ; vous pouvez aussi les renommer ou les supprimer. |

## Langue {#language}

| Réglage | Ce qu’il fait |
| --- | --- |
| **Langue de l'interface** | La langue que parle φ : **Réglage du système**, une langue fournie avec φ, ou une langue que vous avez installée. **Installer une langue…**, **Exporter le modèle anglais…** et **Ouvrir le dossier** se trouvent en dessous. |
| **Vérifier l’orthographe** | Souligne les mots mal orthographiés pendant que vous écrivez. |
| **Moteur** | **Natif** utilise le correcteur orthographique de votre ordinateur ; **Amélioré** utilise les dictionnaires de φ, si bien que les résultats sont les mêmes sur tous les systèmes. |
| **Langues** | Les langues à vérifier. Avec **Natif** sur Mac, le système choisit la langue tout seul. |
| **Par défaut pour ce coffre** | Sous **Ce coffre** : **Utiliser global**, **Natif** ou **Amélioré** pour ce coffre seulement. Avec **Amélioré**, vous pouvez aussi choisir ses langues. |
| **Dictionnaire personnel** | Les mots que vous avez ajoutés, chacun avec un bouton corbeille pour le retirer. |
| **Dictionnaire et thésaurus** | **Installer un pack de dictionnaire…**, et les packs dont vous disposez avec leur nombre de mots. |

Voir [Thèmes et langues](./themes-and-languages), [Orthographe](./spelling) et
[Dictionnaire et thésaurus](./dictionary).

## Versions {#versioning}

Ces réglages appartiennent au coffre ouvert, dont le nom est affiché en haut.
Chaque coffre conserve son propre historique.

| Réglage | Ce qu’il fait |
| --- | --- |
| **Backend** | **Natif** : des instantanés locaux, rien à installer. **Git** : l’historique complet et une sauvegarde facultative vers un distant. Tant que git n’est pas installé, l’option indique **Git (git requis)**. Passer à git demande d’abord confirmation et reprend votre historique ; pour revenir en arrière, il vous faudrait supprimer vous-même le dossier `.git` du coffre. |
| **Point de contrôle automatique toutes les** | La fréquence à laquelle vos modifications deviennent une version automatique : tapez un nombre de minutes, choisissez **1**, **5**, **10** ou **30**, ou **Désactivé**. Les versions que vous enregistrez à la main ne sont pas concernées. |
| **Limite d’historique local** | Natif uniquement : le nombre maximal de versions conservées par document. Les plus anciennes sont supprimées. |

Avec **Git**, un groupe **Sauvegarde git** apparaît :

| Réglage | Ce qu’il fait |
| --- | --- |
| **Nom du commit** · **E-mail du commit** | L’identité sous laquelle φ fait ses commits. Vides, ils utilisent l’utilisateur git de votre ordinateur. |
| **Chemin de la clé SSH** | La clé privée avec laquelle φ pousse, avec **Parcourir…**. Le fichier de clé doit être en `chmod 600`. |
| **URL du distant de sauvegarde** | Où pousser. Vide, elle utilise le distant existant du dépôt. |
| **Push automatique des sauvegardes** | Pousse les nouveaux commits à intervalles réguliers, selon **Pousser toutes les** (en minutes). |
| **Signer les commits** | Signe les commits pour qu’ils apparaissent comme vérifiés, avec une **Méthode de signature** (SSH ou GPG) et une **Clé de signature**. |
| **Sauvegarder maintenant** | Indique si vous êtes à jour, si des commits attendent, ou si vous n’avez pas encore de distant. **Pousser maintenant** pousse immédiatement. |

Si le coffre se trouve dans un dossier cloud, φ garde son dépôt git sur cet
ordinateur plutôt qu’à l’intérieur du coffre. φ sur iPhone et iPad (bientôt)
n’exécute jamais git ; il conserve les versions dans le dossier
`.poiesis-history` du coffre. Plus d’informations dans
[Versions et sauvegarde](./versions-and-backup).

## Coffre {#vault}

| Réglage | Ce qu’il fait |
| --- | --- |
| **Coffre actif** | Le nom et le dossier du coffre ouvert. |
| **Espaces** | Lesquels d’**Écrire**, **Notes** et **Journal** le coffre affiche (au moins un), et ce sur quoi il s’ouvre (**S’ouvre sur**) : l’**Accueil** ou l’un de ses modes. |
| **Gérer** | **Ouvrir un coffre…** et **Créer un coffre…** ajoutent un coffre. **Retirer le coffre…** vous demande comment : **Dissocier (conserver le dossier)** le retire de φ et laisse le dossier tel quel ; **Déplacer vers la corbeille** déplace tout le dossier dans la Corbeille de votre ordinateur, d’où vous pouvez encore le récupérer. |

Voir [Coffres](./vaults).

## Modèles {#templates}

Les variables qu’un modèle peut utiliser, sous forme de pastilles :
`<% today %>`, `<% tomorrow %>`, `<% yesterday %>`, `<% time %>` et
`<% cursor %>` (là où se place le curseur). En dessous, deux listes, **Ce
coffre** et **Modèles globaux**, chaque modèle avec un crayon pour le modifier
et un bouton corbeille pour le retirer. **Installer un modèle…** ajoute un
fichier de modèle ; **Ouvrir le dossier des modèles** montre où ils sont
conservés. Voir [Modèles](./templates).

## Raccourcis {#shortcuts}

Les principaux raccourcis clavier, regroupés en **Se déplacer**,
**Documents**, **Écriture** et **Format** : la même carte que celle qu’affiche
`⌘/`. Tapez dans **Rechercher des commandes…** pour restreindre la liste. Tous
les raccourcis figurent dans [Raccourcis clavier](./keyboard-shortcuts).

## Données {#data}

| Réglage | Ce qu’il fait |
| --- | --- |
| **Santé du coffre** | Si vos documents utilisent le format de fichier actuel. Si certains sont plus anciens, **Migrer toutes les notes** les met à jour, en enregistrant d’abord une sauvegarde de chacun. |
| **Sauvegardes** | Apparaît dès que quelque chose a été migré : combien de sauvegardes existent et leur taille, avec **Ouvrir le dossier des sauvegardes** et **Effacer les anciennes sauvegardes**. |
| **Réinitialiser tous les réglages…** | Remet chaque réglage de l’app (thème, éditeur, disposition, graphe, dates) à sa valeur par défaut, après confirmation. Vos documents, vos coffres et vos historiques d’écriture sont conservés. |

## Voir aussi {#see-also}

- [Réglages d’écriture](./setup) : signaux, lieux et modes en détail.
- [Thèmes et langues](./themes-and-languages)
- [Raccourcis clavier](./keyboard-shortcuts)
- [Versions et sauvegarde](./versions-and-backup)

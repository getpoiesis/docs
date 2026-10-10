---
title: Versions et sauvegarde
description: Comment φ Poiesis enregistre pendant que vous écrivez, garde les versions précédentes pour les comparer et les restaurer, et sauvegarde votre historique dans un endroit qui vous appartient.
---

# Versions et sauvegarde

φ Poiesis enregistre votre travail pendant que vous écrivez. Il garde aussi un
historique de chaque document : vous pouvez donc revenir à n’importe quel état
antérieur du texte.

Si vous voulez une copie ailleurs que sur votre ordinateur, Poiesis peut envoyer cet
historique vers une sauvegarde qui vous appartient. Rien ne quitte votre
ordinateur tant que vous ne l’avez pas configuré.

<img src="/img/app/versions-light.png" alt="Un chapitre ouvert, avec l’onglet Historique à côté : Enregistré, Enregistrer une version, puis les instantanés nommés et les points de contrôle regroupés par jour" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="Un chapitre ouvert, avec l’onglet Historique à côté : Enregistré, Enregistrer une version, puis les instantanés nommés et les points de contrôle regroupés par jour" width="1600" height="1000" loading="lazy" decoding="async" />

## Enregistrer un instantané {#save-a-snapshot}

Un instantané est une version à laquelle vous donnez un nom. Il sert à marquer
une étape importante : la fin d’un chapitre, un premier jet terminé ou le
moment qui précède une grosse coupe.

1. Ouvrez le document.
2. Appuyez sur `⌘⇧S`, ou choisissez **Enregistrer une version…** dans le menu
   **⋮** du document.
3. Donnez-lui un nom, par exemple « Deuxième jet, deuxième partie ».

L’instantané apparaît dans l’onglet **Historique** du document, avec la mention
**Snapshot**.

## Comment Poiesis protège votre travail {#how-Poiesis-keeps-your-work}

- **Poiesis enregistre chaque modification.** Il le fait un instant après que vous
  avez cessé de taper. Pendant ce temps, le bas de la barre latérale affiche
  **Enregistrement…**. Il n’y a pas de bouton Enregistrer.
- **Poiesis crée des points de contrôle à votre place.** Un point de contrôle est une
  version que Poiesis crée sans que vous le demandiez. Il en crée un toutes les cinq
  minutes pendant que vous travaillez, quand vous fermez la fenêtre et quand il
  convertit vos documents dans un nouveau format de fichier. Pour changer cette
  fréquence, ouvrez les **Réglages** (`⌘,`) → **Versions** → **Point de
  contrôle automatique toutes les**.
- **`⌘S` enregistre tout de suite et crée un point de contrôle.** Utilisez-le
  quand vous voulez une version à un moment précis.
- **Poiesis enregistre une version avant toute modification du coffre entier.** Un
  coffre est le dossier qui contient votre travail. Quand vous remplacez un mot
  dans tous les documents (voir
  [Rechercher et remplacer](./search-and-replace.md)), Poiesis enregistre d’abord une
  version du coffre entier. Vous pouvez ainsi annuler l’opération.

## Retrouver une ancienne version {#find-an-old-version}

L’historique d’un document se trouve dans l’onglet **Historique** du panneau
Infos, le panneau situé à côté du document. Vous pouvez l’ouvrir de trois
façons :

- Appuyez sur `⇧⌘I` pour ouvrir le panneau Infos, puis cliquez sur
  **Historique**.
- Choisissez **Historique des versions** dans le menu ⋮ du document.
- Faites un clic droit sur le document dans une liste, puis choisissez
  **Historique des versions**.

Dans l’onglet **Historique** :

- **Enregistré**, tout en haut, vous confirme que vos modifications sont déjà
  enregistrées.
- **Enregistrer une version…** crée un nouvel instantané.
- En dessous, les versions sont regroupées par jour. Les points de contrôle
  d’une même journée sont repliés sur une seule ligne, ce qui laisse les
  instantanés bien visibles. Cliquez sur cette ligne pour voir les points de
  contrôle.
- Vous pouvez rechercher une version par son nom.
- Vous pouvez afficher **Toutes** les versions, les **Instantanés**, les
  **Points de contrôle** ou les **Restaurations**.
- Vous pouvez replier ou déplier tous les jours d’un coup.

## Comparer et restaurer {#compare-and-restore}

Cliquez sur une version pour l’ouvrir. Elle s’affiche à la place du document,
sous une barre **Aperçu de la version**. Vous pouvez la lire, mais pas la
modifier.

<img src="/img/app/version-preview-light.png" alt="Une version antérieure d’un chapitre en aperçu, avec les modifications signalées et le bouton pour la restaurer" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/version-preview-dark.png" alt="Une version antérieure d’un chapitre en aperçu, avec les modifications signalées et le bouton pour la restaurer" width="1600" height="1000" loading="lazy" decoding="async" />

| Bouton | Ce qu’il fait |
| --- | --- |
| **Afficher les changements** | Signale ce qui diffère du document actuel. Passez de **Côte à côte** à **Dans le contenu**, ou l’inverse. Avec **Dans le contenu**, **Changements de métadonnées** énumère en plus les changements apportés au titre, aux étiquettes, au statut et aux autres informations de ce genre. **Masquer les changements** retire les marques. |
| **Restaurer** | Cette version redevient le document. Poiesis enregistre d’abord le document actuel comme nouvelle version : rien n’est perdu. |
| **Revenir à l’actuel** | Revient au document actuel. `Esc` fait la même chose. |

Poiesis signale les changements lettre par lettre. Pour qu’il les signale par mots
entiers, choisissez **Mot** dans **Réglages** → **Éditeur** → **Détail des
différences**.

## Choisir où l’historique est conservé {#choose-where-history-is-kept}

Chaque coffre conserve son historique de l’une de ces deux façons. Vous la
choisissez dans **Réglages** → **Versions** → **Backend**.

| Backend | Ce qu’il vous apporte |
| --- | --- |
| **Natif** | Le choix par défaut. Il n’y a rien à installer. Il garde jusqu’à 50 versions de chaque document et supprime les plus anciennes. Vous pouvez changer ce nombre dans **Limite d’historique local**. |
| **Git** | Un historique sans limite, et une sauvegarde dans un endroit qui vous appartient. Git est un programme à part, gratuit, conçu pour conserver des historiques. Vous pouvez le choisir dès que git est installé sur votre ordinateur ; d’ici là, l’option s’appelle **Git (git requis)**. |

Réfléchissez avant de passer un coffre à git : Poiesis ne peut pas faire le chemin
inverse à votre place. Il vous explique d’abord ce qui va changer, dans
**Convertir ce coffre en git ?**. Votre historique existant est transféré.
Pour revenir plus tard à **Natif**, vous devrez supprimer vous-même le dossier
`.git` du coffre.

### Coffres placés dans un dossier cloud {#vaults-in-a-cloud-folder}

Si le coffre se trouve dans un dossier cloud, comme iCloud Drive ou Dropbox, Poiesis
conserve l’historique git sur cet ordinateur, en dehors du coffre. Les services
de synchronisation copient les fichiers un par un, dans n’importe quel ordre,
ce qui peut corrompre un historique git. Vos documents, eux, ne risquent
rien : chaque document est un seul fichier.

### iPhone et iPad {#iphone-and-ipad}

Sur iPhone et iPad, Poiesis (bientôt disponible) utilise le même coffre, mais
n’exécute jamais git. Les versions créées sur ces appareils sont conservées
dans le dossier `.poiesis-history` du coffre. Les deux applications se servent
de ce dossier.

## Sauvegarder votre historique avec git {#back-up-your-history-with-git}

Avec git, Poiesis peut envoyer votre historique vers un dépôt privé, sur un service
comme GitHub ou GitLab. Un dépôt est un espace de stockage pour un historique
git. Une copie existe alors ailleurs que sur votre ordinateur.

1. Créez un dépôt privé et vide sur GitHub, GitLab ou un autre hébergeur git.
2. Copiez son adresse. Elle ressemble à `git@github.com:you/novel.git`.
3. Dans Poiesis, ouvrez **Réglages** → **Versions** et passez le coffre à **Git**.
4. Sous **Sauvegarde git**, collez l’adresse dans **URL du distant de
   sauvegarde**.
5. Activez **Push automatique des sauvegardes**.
6. Réglez **Pousser toutes les**. La valeur de départ est de 15 minutes.
7. Appuyez sur **Pousser maintenant** pour envoyer la première copie.

Poiesis envoie l’historique en arrière-plan. Un service lent ou injoignable ne vous
empêche jamais d’écrire. Si un envoi dure plus de deux minutes, Poiesis l’interrompt
et réessaie la fois suivante.

**Sauvegarder maintenant** indique l’état de la sauvegarde : **À jour avec le
distant**, des commits non poussés (une partie de l’historique n’est pas encore
envoyée) ou aucun distant pour le moment. Vous pouvez aussi envoyer
l’historique depuis la palette de commandes : appuyez sur `⌘P` et choisissez
**Sauvegarder maintenant (git push vers le distant)**.

Les autres réglages de **Sauvegarde git** s’adressent à celles et ceux qui
veulent séparer ce travail de leur compte git principal :

| Réglage | À quoi il sert |
| --- | --- |
| **Nom du commit** et **E-mail du commit** | Le nom et l’e-mail inscrits dans l’historique. S’ils sont vides, Poiesis utilise l’identité git de votre ordinateur. |
| **Chemin de la clé SSH** | La clé privée dont Poiesis se sert pour envoyer l’historique, par exemple `~/.ssh/id_ed25519`. Grâce à elle, Poiesis peut envoyer l’historique sous un autre compte. Vous seul devez pouvoir lire le fichier de la clé (`chmod 600`). |
| **URL du distant de sauvegarde** | Si elle est vide, Poiesis utilise le distant `origin` existant du dépôt. |
| **Signer les commits** | Signe chaque commit avec une clé **SSH** ou **GPG**, pour que l’hébergeur l’affiche comme vérifié. |

:::tip Utilisez un dépôt privé

Votre historique contient tous vos brouillons. Sauvegardez-le dans un dépôt
privé. Si vous le pouvez, utilisez une identité réservée à cet usage.

:::

## Un coffre est un dossier ordinaire {#a-vault-is-an-ordinary-folder}

Un coffre est un dossier ordinaire. Il contient vos fichiers `.poiesis`, un
dossier `assets` pour les images et l’historique des versions. Toute sauvegarde
en laquelle vous avez déjà confiance fonctionne donc aussi : Time Machine, un
dossier synchronisé ou une copie sur un disque.

## Voir aussi {#see-also}

- [Coffres](./vaults.md) : un coffre sur plusieurs appareils, et ce qui se passe
  quand deux d’entre eux modifient le même document.
- [Rechercher et remplacer](./search-and-replace.md)
- [Réglages](./settings.md)

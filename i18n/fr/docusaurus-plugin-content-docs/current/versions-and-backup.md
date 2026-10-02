---
title: Versions et sauvegarde
description: Comment φ enregistre pendant que vous écrivez, conserve des versions antérieures que vous pouvez comparer et restaurer, et sauvegarde votre historique dans un endroit à vous.
---

# Versions et sauvegarde

φ enregistre pendant que vous écrivez, et conserve un historique de chaque
document pour que vous puissiez revenir à n’importe quel brouillon antérieur.
Si vous voulez une copie hors de votre ordinateur, il peut aussi envoyer cet
historique vers une sauvegarde à vous. Rien ne quitte votre ordinateur à moins
que vous ne le configuriez.

<img src="/img/app/versions-light.png" alt="Un chapitre ouvert avec l’onglet Historique à côté : Enregistré, Enregistrer une version, et des instantanés nommés et points de contrôle regroupés par jour" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/versions-dark.png" alt="Un chapitre ouvert avec l’onglet Historique à côté : Enregistré, Enregistrer une version, et des instantanés nommés et points de contrôle regroupés par jour" width="1600" height="1000" loading="lazy" decoding="async" />

## Enregistrer un instantané {#save-a-snapshot}

Un instantané est une version que vous nommez, pour marquer une étape : la fin
d’un chapitre, un brouillon terminé, le moment avant une grosse coupe.

1. Ouvrez le document.
2. Appuyez sur `⌘⇧S`, ou choisissez **Enregistrer une version…** dans le menu
   **⋮** du document.
3. Donnez-lui un nom, par exemple «  Deuxième brouillon, deuxième partie  ».

Il apparaît dans l’onglet **Historique** du document, marqué comme instantané.

## Comment φ conserve votre travail {#how-φ-keeps-your-work}

- **Chaque modification s’enregistre d’elle-même** un instant après que vous
  avez cessé de taper. Pendant l’enregistrement, le pied de la barre latérale
  indique **Enregistrement…**. Il n’y a pas de bouton Enregistrer à ne pas
  oublier.
- **Des points de contrôle sont créés pour vous** : toutes les cinq minutes
  pendant que vous travaillez, quand vous fermez la fenêtre, et quand φ met à
  jour vos documents vers un nouveau format de fichier. Changez la fréquence
  dans **Réglages** (`⌘,`) → **Versions** → **Point de contrôle automatique
  toutes les**.
- **`⌘S`** enregistre immédiatement et crée un point de contrôle, si vous aimez
  avoir un point à vous où revenir.
- **Avant un changement dans tout le coffre.** Quand vous remplacez un mot dans
  tous les documents (voir [Rechercher et remplacer](./search-and-replace)), φ
  enregistre d’abord une version du coffre entier, pour que le changement
  puisse être annulé.

## Retrouver une ancienne version {#find-an-old-version}

L’historique d’un document se trouve dans l’onglet **Historique** du panneau
Infos. Pour l’ouvrir :

- appuyez sur `⇧⌘I` pour le panneau Infos, puis cliquez sur **Historique** ;
- choisissez **Historique des versions** dans le menu **⋮** du document ; ou
- faites un clic droit sur le document dans une liste et choisissez
  **Historique des versions**.

**Enregistré**, en haut, vous rappelle que vos modifications sont déjà en
sécurité, et **Enregistrer une version…** nomme une nouvelle version. En
dessous, les versions sont regroupées par jour. Les points de contrôle de
chaque jour se replient en une seule ligne que vous pouvez ouvrir, pour que les
instantanés ressortent. Vous pouvez chercher des versions par nom, afficher
**Toutes**, **Instantanés**, **Points de contrôle** ou **Restaurations**, et
replier ou déplier tous les jours d’un coup.

## Comparer et restaurer {#compare-and-restore}

Cliquez sur n’importe quelle version pour l’ouvrir à la place du document, en
lecture seule, sous une barre **Aperçu de la version**.

| Bouton | Ce qu’il fait |
| --- | --- |
| **Afficher les changements** | Marque ce qui diffère du document actuel. Basculez entre **Côte à côte** et **Dans le contenu**. Dans le contenu, **Changements de métadonnées** liste aussi les changements de titre, d’étiquettes, de statut et autres. **Masquer les changements** retire les marques. |
| **Restaurer** | Fait de cette version le document. Ce que vous avez maintenant est d’abord enregistré comme nouvelle version, donc rien n’est perdu. |
| **Revenir à l’actuel** | Revient au document tel qu’il est maintenant. `Esc` fait de même. |

Les changements sont marqués lettre par lettre. Pour marquer des mots entiers à
la place, choisissez **Mot** dans **Réglages** → **Éditeur** → **Détail des
différences**.

## Choisir où l’historique est conservé {#choose-where-history-is-kept}

Chaque coffre conserve son historique de l’une de deux façons, choisie dans
**Réglages** → **Versions** → **Backend**.

| Backend | Ce qu’il vous apporte |
| --- | --- |
| **Natif** | Le choix par défaut. Il ne nécessite aucune installation. Il conserve jusqu’à 50 versions de chaque document et élimine les plus anciennes ; modifiez cela dans **Limite d’historique local**. |
| **Git** | Un historique illimité, et une sauvegarde dans un endroit à vous. Il est proposé dès que git est installé sur votre ordinateur ; jusque-là, il indique **Git (git requis)**. |

Passer un coffre à git est une étape sans retour, et φ l’explique d’abord dans
**Convertir ce coffre en git ?**. Votre historique existant est repris. Pour
revenir à **Natif** plus tard, il vous faudrait supprimer vous-même le dossier
`.git` du coffre.

Si le coffre se trouve dans un dossier cloud comme iCloud Drive ou Dropbox, φ
garde son historique git sur cet ordinateur, en dehors du coffre. Les services
de synchronisation copient les fichiers un par un, dans n’importe quel ordre, ce
qui peut casser un historique git ; vos documents font chacun un seul fichier et
voyagent sans risque. φ sur iPhone et iPad (bientôt) utilise le même coffre
mais n’exécute jamais git : les versions créées là-bas sont conservées dans le
dossier `.poiesis-history` du coffre, que les deux apps partagent.

## Sauvegarder votre historique avec git {#back-up-your-history-with-git}

Avec git, φ peut envoyer votre historique vers un dépôt privé sur un service
comme GitHub ou GitLab, pour qu’une copie existe ailleurs que sur votre
ordinateur. φ l’envoie en arrière-plan : un service lent ou injoignable ne
retarde jamais votre écriture, et si un envoi bloque, φ abandonne au bout de
deux minutes et réessaie la fois suivante.

1. Créez un dépôt privé et vide sur GitHub, GitLab ou un autre hébergeur git.
   Copiez son adresse (elle ressemble à `git@github.com:you/novel.git`).
2. Dans φ, passez le coffre à **Git** dans **Réglages** → **Versions**.
3. Sous **Sauvegarde git**, collez l’adresse dans **URL du distant de
   sauvegarde**.
4. Activez **Push automatique des sauvegardes** et choisissez **Pousser toutes
   les** (au départ, 15 minutes).
5. Appuyez sur **Pousser maintenant** pour envoyer la première copie.

**Sauvegarder maintenant** vous indique si vous êtes **À jour avec le
distant.**, si vous avez des commits non poussés, ou si vous n’avez pas encore
de distant. Vous pouvez aussi pousser depuis `⌘P` → **Sauvegarder maintenant
(git push vers le distant)**.

Les autres réglages sous **Sauvegarde git** s’adressent à ceux qui veulent
garder ce travail à l’écart de leur compte git principal :

| Réglage | À quoi il sert |
| --- | --- |
| **Nom du commit** et **E-mail du commit** | Sous quelle identité l’historique est enregistré. Vide, il utilise l’identité git de votre ordinateur. |
| **Chemin de la clé SSH** | La clé privée avec laquelle φ pousse, comme `~/.ssh/id_ed25519`, pour pouvoir pousser sous un autre compte. Le fichier de clé doit être lisible par vous seul (`chmod 600`). |
| **URL du distant de sauvegarde** | Vide, elle utilise l’`origin` existant du dépôt. |
| **Signer les commits** | Signe chaque commit avec une clé **SSH** ou **GPG** pour que l’hébergeur l’affiche comme vérifié. |

:::tip Utilisez un dépôt privé

Votre historique contient chaque brouillon. Sauvegardez-le dans un dépôt privé,
idéalement sous une identité que vous n’utilisez que pour cela.

:::

## Un coffre est un dossier ordinaire {#a-vault-is-an-ordinary-folder}

Un coffre est un dossier ordinaire de fichiers `.poiesis`, avec un dossier
`assets` pour les images et son historique des versions, donc toute sauvegarde
en laquelle vous avez déjà confiance fonctionne aussi : Time Machine, un dossier
synchronisé, ou une copie sur un disque.

## Voir aussi {#see-also}

- [Coffres](./vaults) : les coffres sur plusieurs appareils, et ce qui se passe
  quand deux d’entre eux modifient le même document.
- [Rechercher et remplacer](./search-and-replace)
- [Réglages](./settings)

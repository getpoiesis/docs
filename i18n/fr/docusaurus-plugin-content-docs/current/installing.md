---
title: Installer φ
description: Téléchargez φ pour macOS, Windows ou Linux, et gardez-le à jour.
---

# Installer φ

φ fonctionne sur macOS, Windows et Linux. Une fois installé, il vous prévient
dès qu’une nouvelle version est disponible.

## Installer φ {#install-φ}

1. Ouvrez la [page de téléchargement](https://getpoiesis.com/download). Elle
   vous propose le fichier qui convient à l’ordinateur que vous utilisez. Les
   fichiers destinés aux autres systèmes se trouvent sur la même page.
2. Téléchargez le fichier.
3. Installez-le. Les étapes propres à votre système sont décrites plus bas.
4. Ouvrez φ. Votre système l’affiche sous le nom **φ Poiesis**. Pour le
   trouver, tapez « poiesis » dans Spotlight ou dans le menu Démarrer.
5. [Créez votre premier coffre](./getting-started).

## Configuration requise {#what-you-need}

| Système | Version |
| --- | --- |
| **macOS** | 13 (Ventura) ou version ultérieure, sur Apple Silicon ou Intel |
| **Windows** | 10 ou 11, 64 bits |
| **Linux** | Une distribution 64 bits récente. L’AppImage fonctionne presque partout ; le `.deb` est destiné à Debian et Ubuntu. |

## Sur un Mac {#on-a-mac}

1. Téléchargez le `.dmg` qui correspond à votre Mac : **Apple Silicon** ou
   **Intel**. Pour savoir lequel vous avez, ouvrez le menu Pomme et choisissez
   **À propos de ce Mac**. Une puce dont le nom commence par « Apple M… » est
   une puce Apple Silicon.
2. Ouvrez le `.dmg`.
3. Faites glisser φ dans **Applications**.
4. Ouvrez φ depuis Applications ou Spotlight.

Les versions pour Mac sont signées et notarisées par Apple. Elles s’ouvrent
sans l’avertissement « développeur non identifié ».

## Sur Windows {#on-windows}

1. Téléchargez le programme d’installation (`.exe`).
2. Lancez-le. Vous pouvez choisir l’emplacement où φ sera installé.
3. Windows SmartScreen peut vous signaler que φ provient d’un éditeur inconnu.
   C’est parce que le code de φ n’est pas encore signé. Cliquez sur
   **Informations complémentaires**, puis sur **Exécuter quand même**. Vous
   n’aurez à le faire qu’une seule fois. Le fichier téléchargé provient
   directement des versions publiées par φ.
4. Ouvrez φ depuis le menu Démarrer.

## Sur Linux {#on-linux}

Vous avez le choix entre deux fichiers :

- L’**AppImage** est la solution la plus simple, et elle se met à jour toute
  seule.
- Le **`.deb`** s’installe comme les autres paquets Debian et Ubuntu. Pour le
  mettre à jour, vous installez vous-même le `.deb` plus récent.

**AppImage.** Rendez le fichier exécutable, puis double-cliquez dessus :

```bash
chmod +x poiesis-*.AppImage
./poiesis-*.AppImage
```

Vous pouvez aussi vous passer du terminal : faites un clic droit sur le
fichier → **Propriétés** → **Permissions** → **Autoriser l’exécution du
fichier comme un programme**.

**`.deb`.** Installez-le avec la commande suivante :

```bash
sudo dpkg -i poiesis-*.deb
```

Ouvrez ensuite **φ Poiesis** depuis le menu de vos applications.

## Garder φ à jour {#keep-φ-up-to-date}

φ vérifie s’il existe une nouvelle version quelques secondes après son
ouverture, puis toutes les six heures. Il ne télécharge jamais de mise à jour
sans vous demander votre accord. Quand une mise à jour existe, un petit
bandeau apparaît :

1. Le bandeau indique **Une nouvelle version (…) est disponible.** Cliquez
   sur **Télécharger** quand vous êtes prêt.
2. Pendant le téléchargement, le bandeau affiche **Téléchargement de la mise
   à jour… %**.
3. Le bandeau indique **La mise à jour … est prête à être installée.**
   Cliquez sur **Redémarrer et installer**. Vous pouvez aussi fermer le
   bandeau et continuer à écrire : φ installera la mise à jour la prochaine
   fois que vous le quitterez.

Cela fonctionne sur macOS, sur Windows et avec l’AppImage sur Linux. Si vous
utilisez le `.deb`, téléchargez et installez vous-même la nouvelle version.

Pour vérifier tout de suite si une mise à jour existe :

- **Sur un Mac :** ouvrez le menu **φ Poiesis** et choisissez **Rechercher
  des mises à jour…**.
- **Sur Windows et Linux :** appuyez sur `Ctrl+P` et lancez **Rechercher des
  mises à jour…**.

φ affiche **Recherche de mises à jour…**. Trois cas sont ensuite possibles :

- φ vous propose la mise à jour.
- φ indique **φ est à jour.**
- φ indique **Impossible de rechercher des mises à jour.** Cela signifie
  qu’il n’arrive pas à joindre le serveur de téléchargement, par exemple
  parce que vous êtes hors ligne.

:::note Encore en version 0.8.2 ou antérieure ? Téléchargez φ à nouveau

La version 0.9.0 a modifié la façon dont votre système identifie φ. De ce
fait, les versions 0.8.2 et antérieures ne peuvent plus se mettre à jour
toutes seules : elles continuent d’indiquer que φ est à jour. Téléchargez la
version actuelle depuis la [page de téléchargement](https://getpoiesis.com/download)
et installez-la par-dessus celle que vous avez. Vous n’aurez à le faire
qu’une seule fois.

Vos coffres, vos réglages, vos dictionnaires et votre historique ne sont pas
modifiés. Sur un Mac, macOS vous redemande une fois l’accès au dossier où se
trouve votre coffre. Sur Windows, le nouveau φ apparaît comme un programme
distinct : désinstallez donc l’ancien depuis **Ajouter ou supprimer des
programmes**.

:::

## Voir aussi {#see-also}

- [Votre premier coffre](./getting-started)
- [Réglages](./settings)
- [Coffres](./vaults)

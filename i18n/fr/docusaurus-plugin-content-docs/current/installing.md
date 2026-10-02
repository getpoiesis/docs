---
title: Installer φ
description: Téléchargez φ pour macOS, Windows ou Linux, et gardez-le à jour.
---

# Installer φ

φ fonctionne sous macOS, Windows et Linux. La
[page de téléchargement](https://getpoiesis.com/download) propose le fichier
adapté à l’ordinateur depuis lequel vous la consultez, avec toutes les autres
options à un clic. Une fois installé, φ vous prévient quand une nouvelle version
est disponible.

## Installer φ {#install-φ}

1. Ouvrez la [page de téléchargement](https://getpoiesis.com/download) et
   téléchargez le fichier proposé.
2. Installez-le comme votre système le prévoit (voir ci-dessous).
3. Ouvrez φ. Votre système l’affiche sous le nom **φ Poiesis** : taper
   «  poiesis  » dans Spotlight ou le menu Démarrer le trouve donc.
4. [Créez votre premier coffre](./getting-started).

## Ce qu’il vous faut {#what-you-need}

| Système | Version |
| --- | --- |
| **macOS** | 13 (Ventura) ou ultérieur, sur Apple Silicon ou Intel |
| **Windows** | 10 ou 11, 64 bits |
| **Linux** | Une distribution 64 bits récente. L’AppImage fonctionne presque partout ; le `.deb` est destiné à Debian et Ubuntu. |

## Sur un Mac {#on-a-mac}

1. Téléchargez le `.dmg` adapté à votre Mac : **Apple Silicon** ou **Intel**.
   Vous ne savez pas lequel ? Menu Pomme → **À propos de ce Mac** : une puce
   nommée «  Apple M…  » est une Apple Silicon.
2. Ouvrez le `.dmg` et glissez φ dans **Applications**.
3. Ouvrez-le depuis Applications ou Spotlight.

Les versions Mac sont signées et notarisées par Apple : elles s’ouvrent donc
sans l’avertissement «  développeur non identifié  ».

## Sous Windows {#on-windows}

1. Téléchargez le programme d’installation (`.exe`) et lancez-le. Vous pouvez
   choisir où φ est installé.
2. φ n’est pas encore signé, donc Windows SmartScreen peut indiquer qu’il
   provient d’un éditeur non reconnu. Cliquez sur **Informations
   complémentaires**, puis sur **Exécuter quand même**. Vous n’avez à le faire
   qu’une fois, et le téléchargement provient directement des versions publiées
   par φ.
3. Ouvrez φ depuis le menu Démarrer.

## Sous Linux {#on-linux}

L’**AppImage** est le choix le plus simple et se met à jour toute seule. Le
**`.deb`** s’intègre à Debian et Ubuntu, mais vous le mettez à jour en
installant le `.deb` plus récent.

Pour l’AppImage, rendez le fichier exécutable, puis double-cliquez dessus :

```bash
chmod +x poiesis-*.AppImage
./poiesis-*.AppImage
```

Ou faites un clic droit sur le fichier → **Propriétés** → **Permissions** →
**Autoriser l’exécution du fichier comme un programme**.

Pour le `.deb` :

```bash
sudo dpkg -i poiesis-*.deb
```

Ouvrez ensuite **φ Poiesis** depuis votre menu d’applications.

## Garder φ à jour {#keep-φ-up-to-date}

φ cherche une nouvelle version quelques secondes après son ouverture, puis
toutes les six heures. Il n’en télécharge jamais une sans vous le demander.
Quand une mise à jour existe, un petit bandeau vous le signale :

1. **Une nouvelle version (…) est disponible.** Cliquez sur **Télécharger**
   quand cela vous convient.
2. **Téléchargement de la mise à jour… %** indique où il en est.
3. **La mise à jour … est prête à être installée.** Cliquez sur **Redémarrer et
   installer**, ou fermez le bandeau et continuez : une mise à jour téléchargée
   est installée la prochaine fois que vous quittez φ.

Cela fonctionne sous macOS, sous Windows et avec l’AppImage Linux. Pour le
`.deb`, téléchargez et installez vous-même la version plus récente.

Pour vérifier maintenant :

- **Sur un Mac :** menu **φ Poiesis** → **Rechercher des mises à jour…**.
- **Sous Windows et Linux :** appuyez sur `Ctrl+P` et lancez **Rechercher des
  mises à jour…**.

φ affiche **Recherche de mises à jour…**, puis vous propose la mise à jour,
indique **φ est à jour.**, ou affiche **Impossible de rechercher des mises à
jour.** quand il ne parvient pas à joindre le serveur de téléchargement, par
exemple quand vous êtes hors ligne.

:::note Encore en 0.8.2 ou antérieure ? Téléchargez φ à nouveau

La version 0.9.0 a changé la façon dont votre système identifie φ, ce qui a
cassé la mise à jour qu’une copie plus ancienne vous proposerait : elle
continuera de dire qu’elle est à jour. Téléchargez la version actuelle depuis
la [page de téléchargement](https://getpoiesis.com/download) et installez-la
par-dessus celle que vous avez. Vous n’avez à le faire qu’une fois.

Vos coffres, réglages, dictionnaires et historique ne sont pas touchés. Sur un
Mac, macOS redemande une fois l’accès au dossier où se trouve votre coffre.
Sous Windows, le nouveau φ apparaît comme un programme distinct : désinstallez
donc l’ancien depuis **Ajouter ou supprimer des programmes**.

:::

## Voir aussi {#see-also}

- [Votre premier coffre](./getting-started)
- [Réglages](./settings)
- [Coffres](./vaults)

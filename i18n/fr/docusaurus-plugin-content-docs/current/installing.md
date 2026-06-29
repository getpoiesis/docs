---
title: Installer φ
sidebar_position: 1
---

# Installer φ

φ fonctionne sur **macOS, Windows et Linux**. Récupérez la version pour votre
système sur la **[page de téléchargement](https://getpoiesis.com/download)** :
elle propose le fichier adapté à l'ordinateur depuis lequel vous la consultez,
avec toutes les autres options à portée de clic.

:::warning φ est en alpha
Vous utilisez un logiciel à un stade précoce — attendez-vous à quelques aspérités.
Votre écriture, elle, est toujours en sécurité : ce sont des fichiers simples sur
votre ordinateur, enregistrés en continu et versionnés.
:::

## Configuration requise

- **macOS** 12 (Monterey) ou plus récent — Apple Silicon ou Intel.
- **Windows** 10 ou 11 (64 bits).
- **Linux** — une distribution moderne en 64 bits. L'AppImage fonctionne presque
  partout ; un `.deb` est fourni pour Debian et Ubuntu.

## macOS

1. Téléchargez le `.dmg` — **Apple Silicon** ou **Intel** selon votre Mac. (Vous
   ne savez pas lequel ? Menu Pomme → **À propos de ce Mac** ; une puce indiquée
   « Apple M-series » est une Apple Silicon.)
2. Ouvrez le `.dmg` et glissez **φ** dans votre dossier **Applications**.
3. Lancez-la depuis Applications ou Spotlight.

Les versions macOS sont **signées et notariées par Apple**, elles s'ouvrent donc
sans l'avertissement Gatekeeper « développeur non identifié ».

## Windows

1. Téléchargez l'installeur (`.exe`) et exécutez-le. Vous pouvez choisir
   l'emplacement d'installation au cours de la configuration.
2. φ n'est pas encore signé, donc **SmartScreen** de Windows peut avertir qu'il
   provient d'un éditeur non reconnu. Cliquez sur **Informations complémentaires
   → Exécuter quand même** pour continuer — une seule fois suffit.
3. Lancez φ depuis le menu Démarrer.

:::note Pourquoi l'invite SmartScreen ?
Un certificat de signature de code est quelque chose que nous ajouterons plus
tard. En attendant, l'invite est normale ; le téléchargement provient directement
de nos propres publications.
:::

## Linux

φ est distribué en deux formats. L'**AppImage** est le plus simple et **se met à
jour tout seul** ; le **`.deb`** s'intègre à Debian et Ubuntu, mais se met à jour
en réinstallant.

### AppImage (recommandé)

1. Téléchargez le `.AppImage`.
2. Rendez-le exécutable — dans un terminal :
   ```bash
   chmod +x poiesis-*.AppImage
   ```
   …ou faites un clic droit sur le fichier → **Propriétés → Permissions →
   Autoriser l'exécution du fichier comme un programme**.
3. Double-cliquez dessus, ou exécutez `./poiesis-*.AppImage`.

### Debian / Ubuntu (`.deb`)

```bash
sudo dpkg -i poiesis-*.deb
```

Lancez ensuite **φ** depuis votre menu d'applications.

## Rester à jour

φ recherche les mises à jour de lui-même et les installe discrètement en
arrière-plan :

- **macOS**, **Windows** et l'**AppImage Linux** se mettent à jour seuls — un
  redémarrage vous est proposé lorsqu'une nouvelle version est prête.
- Le **`.deb` Linux** ne se met **pas** à jour automatiquement. Téléchargez et
  installez le `.deb` plus récent quand vous souhaitez mettre à niveau, ou passez
  à l'AppImage.

Vous pouvez aussi vérifier à la demande — **Aide → Rechercher les mises à jour**
(sur macOS, le menu de l'application **φ**).

## Étapes suivantes

φ installé, [Premiers pas](getting-started.md) vous guide dans votre premier
coffre et votre première page.

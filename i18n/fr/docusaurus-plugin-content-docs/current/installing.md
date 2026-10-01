---
title: Installer φ
---

# Installer φ

φ fonctionne sous **macOS, Windows et Linux**. Récupérez la version pour votre
système sur la **[page de téléchargement](https://getpoiesis.com/download)** —
elle propose le fichier adapté à l'ordinateur depuis lequel vous la consultez,
avec toutes les autres options à un clic.

:::warning φ est en alpha
Vous utilisez un logiciel à un stade précoce — attendez-vous à des aspérités.
Votre écriture elle-même est toujours en sécurité : ce sont de simples fichiers
sur votre ordinateur, enregistrés en continu et versionnés.
:::

:::danger Vous utilisez encore la 0.8.2 ou antérieure ? Téléchargez φ à nouveau
**La 0.9.0 a changé la façon dont votre système d'exploitation identifie φ**, et
cela a cassé la mise à jour qui vous serait normalement proposée. Une ancienne
copie continuera de vous dire qu'elle est à jour, indéfiniment. Téléchargez la
version actuelle depuis la [page de téléchargement](https://getpoiesis.com/download)
et installez-la par-dessus celle que vous avez — une seule fois. Les mises à jour
fonctionnent de nouveau normalement à partir de la 0.9.0.

Votre travail n'est pas touché : coffres, réglages, dictionnaires et historique
dépendent du nom de l'application, pas de son identifiant. Deux choses se
réinitialisent une fois — **macOS** redemande l'accès au dossier où se trouve
votre coffre, et **Windows** la considère comme un programme distinct : désinstallez
l'ancien φ, sinon il restera à côté de celui-ci dans Ajouter ou supprimer des
programmes.
:::

## Configuration requise {#system-requirements}

- **macOS** 12 (Monterey) ou ultérieur — Apple Silicon ou Intel.
- **Windows** 10 ou 11 (64 bits).
- **Linux** — une distribution 64 bits récente. L'AppImage fonctionne presque
  partout ; un `.deb` est fourni pour Debian et Ubuntu.

## macOS {#macos}

1. Téléchargez le `.dmg` — **Apple Silicon** ou **Intel** selon votre Mac. (Vous
   ne savez pas lequel ? Menu Pomme → **À propos de ce Mac** ; une puce indiquée
   « Apple M-series » est une Apple Silicon.)
2. Ouvrez le `.dmg` et glissez φ dans votre dossier **Applications**.
3. Lancez-le depuis Applications ou Spotlight — il y figure sous le nom
   **φ Poiesis**, donc taper « poiesis » le trouve.

Les versions macOS sont **signées et notarisées par Apple**, elles s'ouvrent
donc sans l'avertissement Gatekeeper « développeur non identifié ».

## Windows {#windows}

1. Téléchargez le programme d'installation (`.exe`) et lancez-le. Vous pouvez
   choisir l'emplacement d'installation pendant la configuration.
2. φ n'est pas encore signé, donc **SmartScreen** de Windows peut avertir qu'il
   provient d'un éditeur non reconnu. Cliquez sur **Informations complémentaires
   → Exécuter quand même** pour continuer — vous n'avez à le faire qu'une fois.
3. Lancez φ depuis le menu Démarrer, où il figure sous le nom **φ Poiesis**.

:::note Pourquoi l'invite SmartScreen ?
Un certificat de signature de code est quelque chose que nous ajouterons plus
tard. D'ici là, l'invite est attendue ; le téléchargement provient directement
de nos propres versions publiées.
:::

## Linux {#linux}

φ est distribué en deux formats. L'**AppImage** est le plus simple et **peut se
mettre à jour tout seul** ; le **`.deb`** s'intègre à Debian et Ubuntu mais se
met à jour en le réinstallant.

### AppImage (recommandé) {#appimage-recommended}

1. Téléchargez le `.AppImage`.
2. Rendez-le exécutable — dans un terminal :
   ```bash
   chmod +x poiesis-*.AppImage
   ```
   …ou faites un clic droit sur le fichier → **Propriétés → Permissions →
   Autoriser l'exécution du fichier comme un programme**.
3. Double-cliquez dessus, ou lancez `./poiesis-*.AppImage`.

### Debian / Ubuntu (`.deb`) {#debian--ubuntu-deb}

```bash
sudo dpkg -i poiesis-*.deb
```

Lancez ensuite **φ Poiesis** depuis votre menu d'applications.

## Rester à jour {#staying-up-to-date}

φ cherche une nouvelle version de lui-même — quelques secondes après son
ouverture, puis toutes les six heures — mais n'en télécharge jamais une sans
demander. Quand une mise à jour existe, un petit bandeau vous le signale :

1. **Une nouvelle version (…) est disponible.** Cliquez sur **Télécharger** quand
   cela vous convient.
2. **Téléchargement de la mise à jour… %** indique où il en est.
3. **La mise à jour … est prête à être installée.** Cliquez sur **Redémarrer et
   installer** pour redémarrer tout de suite dans la nouvelle version, ou fermez
   le bandeau pour continuer — une mise à jour téléchargée est aussi installée la
   prochaine fois que vous quittez φ.

Cela fonctionne sous **macOS**, **Windows** et avec l'**AppImage Linux**. Le
**`.deb` Linux** se met à jour en téléchargeant et en installant le `.deb` le plus
récent, ou en passant à l'AppImage.

### Vérifier à la main {#checking-by-hand}

- **macOS** — le menu de l'application **φ Poiesis** → **Rechercher des mises à
  jour…**.
- **Windows et Linux** — appuyez sur `⌘P` (Ctrl+P) et lancez **Rechercher des
  mises à jour…**.

φ répond **Recherche de mises à jour…**, puis vous propose la mise à jour, vous
dit **φ est à jour.**, ou indique **Impossible de rechercher des mises à jour.**
s'il ne peut pas joindre le serveur de téléchargement (par exemple, quand vous
êtes hors ligne).

## Étapes suivantes {#next-steps}

Une fois φ installé, [Premiers pas](getting-started.md) vous guide dans votre
premier coffre et votre première page.

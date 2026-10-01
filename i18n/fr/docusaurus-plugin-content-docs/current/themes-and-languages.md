---
title: Thèmes et langues
---

# Thèmes et langues

φ devrait ressembler à *votre* pièce d’écriture : à la lumière ou dans
l’obscurité, teinté comme vous l’aimez, dans la langue dans laquelle vous
pensez. Les thèmes se trouvent dans **Réglages → Apparence**, et les langues
dans **Réglages → Langue**.

## Clair, sombre ou système {#light-dark-or-system}

Sous **Thème**, réglez **Apparence** sur **Clair**, **Sombre** ou **Système**.
Système suit l’apparence de votre ordinateur et bascule avec elle : clair le
jour, sombre la nuit, automatiquement.

Vous pouvez aussi changer le mode en cours sans ouvrir les Réglages : ouvrez la
palette de commandes (`⌘P`) et choisissez **Changer de thème (système / clair /
sombre)**, ou utilisez **Changer de thème** dans le menu Affichage.

### La barre latérale {#the-sidebar}

En thème clair, la barre latérale reste sombre par défaut, pour que la page soit
l’élément le plus lumineux de l’écran. Si vous la voulez claire aussi, réglez
**Réglages → Apparence → Barre latérale en thème clair** sur **Clair**. En thème
sombre, la barre latérale est toujours sombre.

## Thèmes de couleur {#color-themes}

Un *thème de couleur* teinte l’interface : fonds, texte, accents, la couleur des
liens wiki, les couleurs de syntaxe du code, etc. Le mode clair/sombre ci-dessus
décide quel côté d’un thème s’applique ; le thème de couleur décide de la
palette. Chaque thème de la liste affiche un petit aperçu (une mini maquette de
la fenêtre de φ) construit à partir de ses propres couleurs, pour que vous
voyiez son rendu avant de changer.

### Le thème φ intégré {#the-built-in-φ-theme}

φ est livré avec un thème officiel, **Phi** : des gris neutres avec une page
blanche ou noire pure. C’est le thème par défaut, marqué **Officiel** dans la
liste. Il ne peut pas être retiré.

### Installer des thèmes officiels {#installing-official-themes}

La façon la plus rapide d’ajouter un thème est de le faire depuis φ. Dans
**Réglages → Apparence → Thème de couleur**, cliquez sur **Parcourir les thèmes
officiels…**. φ affiche la galerie officielle (Nord, Dracula, Gruvbox et
compagnie), chacun avec un petit aperçu dessiné à partir de ses propres
couleurs. Cliquez sur **Installer** sur ceux qui vous plaisent.

L’installation ajoute le thème à votre liste **Thème de couleur** ;
sélectionnez-le là pour l’appliquer. (En prendre plusieurs ne pose aucun
problème ; choisissez votre préféré ensuite.) Un thème déjà ajouté affiche
**Installé**, et **Mettre à jour** récupère sa dernière version.

La galerie est mise en cache localement : elle s’ouvre instantanément et
continue de fonctionner hors ligne une fois chargée ; elle se rafraîchit
discrètement au démarrage de φ et quand vous recherchez des mises à jour.

### Installer un fichier de thème à la main {#installing-a-theme-file-by-hand}

Vous pouvez aussi installer un thème depuis un fichier, pratique pour un thème
que vous avez créé ou qu’on vous a envoyé. Tous les thèmes autres que Phi sont
de petits fichiers JSON qui vivent en dehors de l’app, dans votre dossier de
thèmes, donc en ajouter ou en retirer un ne touche jamais à l’application
elle-même.

1. Dans **Réglages → Apparence → Thème de couleur**, cliquez sur **Installer un
   thème…**.
2. Sélectionnez le fichier `.json` du thème.

Pour voir où les thèmes sont conservés (pour y déposer un fichier à la main ou
les sauvegarder), cliquez sur **Ouvrir le dossier des thèmes**. Les fichiers que
vous y placez sont pris en compte la prochaine fois que vous ouvrez les
Réglages. Retirez n’importe quel thème de la communauté avec l’icône de
corbeille à côté ; son fichier est supprimé du dossier des thèmes.

### Comment fonctionnent les thèmes (et pourquoi ils sont sûrs) {#how-themes-work-and-why-theyre-safe}

Un thème fournit un ensemble de couleurs `light` et/ou `dark`. Toute couleur
qu’un thème omet revient à la valeur intégrée de Phi, donc un thème partiel
convient parfaitement. Les thèmes ne peuvent définir que des **couleurs** (les
polices, les espacements et la mise en page ne sont pas personnalisables), et
chaque valeur est validée comme couleur CSS sûre à l’installation du fichier ;
un fichier de thème non fiable ne peut donc rien faire d’autre que changer une
couleur.

### La galerie de thèmes {#the-themes-gallery}

Les thèmes officiels proviennent de la **galerie de thèmes φ**, la même
bibliothèque que celle depuis laquelle installe le navigateur intégré à l’app :

> **[github.com/getpoiesis/themes](https://github.com/getpoiesis/themes)**

**Les contributions sont les bienvenues.** Vous avez créé un thème dont vous
êtes fier ? Ouvrez une pull request sur la galerie et partagez-le : les thèmes
bien faits sont ajoutés pour tous, puis apparaissent dans le navigateur de l’app
pour tout le monde. Le README du dépôt décrit le (petit) format de fichier de
thème et les règles de contribution.

## Langues {#languages}

L’interface de φ peut fonctionner dans différentes langues.

### Changer de langue {#switching-language}

Dans **Réglages → Langue**, réglez **Langue de l'interface**. **Réglage du
système** suit votre ordinateur ; sinon, choisissez une langue dans la liste.

Les langues fournies avec φ sont listées sous **φ**, chacune sous son propre nom
avec le nom anglais à côté :

- **English (English)**
- **Español (Spanish)**
- **Français (French)**

Les langues que vous installez vous-même sont listées sous **Communauté**.

### Packs de langue de la communauté {#community-language-packs}

Comme les thèmes, les langues supplémentaires sont des fichiers JSON
installables conservés dans votre propre dossier de langues, en dehors de l’app.

- **Installer une langue…** : sélectionnez un fichier `.json` de langue pour
  l’ajouter. Elle apparaît sous **Communauté** dans la liste des langues.
- **Exporter le modèle anglais…** : enregistre un fichier contenant tous les
  textes de l’interface en anglais. Traduisez les valeurs et installez le
  résultat pour utiliser φ dans votre langue, ou partagez-le pour qu’il puisse
  être livré à tous.
- **Ouvrir le dossier** : montre où se trouvent les langues installées.

Retirez une langue de la communauté avec l’icône de corbeille à côté.

### Les traductions manquantes reviennent à l’anglais {#missing-translations-fall-back-to-english}

Une traduction n’a pas besoin d’être complète pour être utile. Tout texte qu’un
pack de langue ne traduit pas revient à l’anglais, donc φ est toujours
entièrement libellé, même avec une traduction partielle.

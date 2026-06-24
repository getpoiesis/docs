---
title: Thèmes et langues
sidebar_position: 19
---

# Thèmes et langues

φ devrait ressembler à *votre* salle d’écriture — dans la lumière ou
l’obscurité, teintée comme vous l’aimez, dans la langue dans laquelle vous
pensez. Tout cela se trouve sous **Réglages** (`⌘,`) → **Apparence**.

## Clair, sombre ou système

Sous **Thème**, réglez **Apparence** sur **Clair**, **Sombre** ou **Système**.
Système suit l’apparence de votre Mac et bascule avec lui — clair le jour, sombre
la nuit, automatiquement.

Vous pouvez aussi changer le mode actuel sans ouvrir les Réglages : ouvrez la
palette de commandes (`⌘P`) et choisissez **Changer de thème (système / clair /
sombre)**, ou utilisez **Changer de thème** dans le menu Affichage.

## Thèmes de couleur

Un *thème de couleur* teinte l’interface — arrière-plans, texte, accents, la
couleur des liens wiki, les couleurs de coloration syntaxique du code, etc. Le
mode clair/sombre ci-dessus décide quel côté d’un thème s’applique ; le thème de
couleur décide de la palette.

### Le thème φ intégré

φ est livré avec un thème officiel, **Phi** : des gris neutres avec une page d’un
blanc ou d’un noir pur. C’est le thème par défaut et il est marqué **Officiel**
dans la liste. Il ne peut pas être retiré.

### Installer un thème de la communauté

Tout thème autre que Phi est un *thème de la communauté* — un petit fichier JSON
que vous installez. Il vit en dehors de l’app, dans votre dossier de thèmes, de
sorte qu’en ajouter ou en retirer un ne touche jamais à l’application
elle-même.

Pour en installer un :

1. Dans **Réglages → Apparence → Thème de couleur**, cliquez sur **Installer un
   thème…**.
2. Sélectionnez le fichier `.json` du thème.

Le thème apparaît dans la liste immédiatement et s’applique lorsque vous le
sélectionnez. Pour voir où les thèmes sont conservés (par exemple pour y déposer
un fichier à la main, ou pour les sauvegarder), cliquez sur **Ouvrir le dossier
des thèmes**. Les fichiers que vous y placez sont pris en compte à la prochaine
ouverture des Réglages.

Retirez un thème de la communauté avec l’icône de corbeille à côté de lui ; son
fichier est supprimé du dossier des thèmes.

### Comment fonctionnent les thèmes (et pourquoi ils sont sûrs)

Un thème fournit un jeu de couleurs `light` et/ou `dark`. Toute couleur qu’un
thème omet revient à la valeur Phi intégrée, de sorte qu’un thème partiel est
parfaitement acceptable. Les thèmes ne peuvent définir que des **couleurs** — les
polices, l’espacement et la mise en page ne sont pas thématisables — et chaque
valeur est validée comme une couleur CSS sûre lors de l’installation du fichier,
si bien qu’un fichier de thème non fiable ne peut rien faire d’autre que changer
une couleur.

### La galerie de thèmes

Les thèmes de la communauté officiellement pris en charge vivent dans la
**galerie de thèmes φ** :

> **[github.com/getpoiesis/themes](https://github.com/getpoiesis/themes)**

C’est le foyer des palettes prêtes à l’emploi — Nord, Dracula et compagnie —
empaquetées sous forme de fichiers de thème installables. Parcourez-la pour
trouver une palette qui vous plaît, téléchargez le `.json` et installez-le comme
ci-dessus.

**Les contributions sont les bienvenues.** Vous avez créé un thème dont vous êtes
fier ? Ouvrez une pull request vers la galerie et partagez-le — les thèmes bien
faits sont ajoutés pour tout le monde. Le README du dépôt contient le (petit)
format de fichier de thème et les consignes de contribution.

## Langues

L’interface de φ peut fonctionner dans différentes langues.

### Changer de langue

Sous **Réglages → Apparence → Langue**, réglez la **Langue de l’interface**.
**Réglage du système** suit votre Mac ; sinon, choisissez une langue dans la
liste.

Les langues intégrées sont :

- **Anglais** (English)
- **Espagnol** (Español)
- **Français** (Français)

### Packs de langue de la communauté

Comme les thèmes, les langues supplémentaires sont des fichiers JSON installables
conservés dans votre propre dossier de langues, en dehors de l’app.

- **Installer une langue…** — sélectionnez un fichier de langue `.json` pour
  l’ajouter. Elle apparaît sous **Communauté** dans la liste des langues.
- **Exporter le modèle anglais…** — enregistre un fichier contenant chaque texte
  d’interface en anglais. Traduisez les valeurs et installez le résultat pour
  faire fonctionner φ dans votre langue — ou partagez-le pour qu’il puisse être
  livré à tous.
- **Ouvrir le dossier** — révèle où vivent les langues installées.

Retirez une langue de la communauté avec l’icône de corbeille à côté d’elle.

### Les traductions manquantes reviennent à l’anglais

Une traduction n’a pas besoin d’être complète pour être utile. Tout texte qu’un
pack de langue ne traduit pas revient à l’anglais, de sorte que φ est toujours
entièrement étiqueté, même avec une traduction partielle en place.

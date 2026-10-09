---
title: Orthographe
description: L’orthographe vérifiée au fil de l’écriture, ou tout un document relu en une seule fois, sans hâte.
---

# Orthographe

φ Poiesis vérifie l’orthographe pendant que vous écrivez et souligne d’un trait ondulé
chaque mot mal orthographié. Corrigez les mots au fur et à mesure, ou attendez
d’avoir fini votre premier jet pour relire tout le document d’une traite. Poiesis ne
corrige jamais un mot à votre place.

## Vérifier tout un document {#check-a-whole-document}

1. Ouvrez le document.
2. Appuyez sur `⌘;`. Vous pouvez aussi choisir **Édition → Vérifier
   l’orthographe…**, ou **Vérifier l’orthographe…** dans le menu ⋮ du document
   ou dans la palette de commandes.
3. Poiesis s’arrête sur le premier mot mal orthographié. Choisissez ce que vous
   voulez en faire (voir le tableau ci-dessous).
4. Faites de même pour chaque mot, jusqu’à ce que Poiesis annonce que tout est
   terminé.

<img src="/img/app/spelling-check-light.png" alt="La fenêtre de vérification orthographique arrêtée sur un mot mal orthographié, avec des suggestions et les boutons pour le modifier, l’ignorer ou l’ajouter au dictionnaire" width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/spelling-check-dark.png" alt="La fenêtre de vérification orthographique arrêtée sur un mot mal orthographié, avec des suggestions et les boutons pour le modifier, l’ignorer ou l’ajouter au dictionnaire" width="1600" height="1000" loading="lazy" decoding="async" />

Poiesis surligne le mot dans le texte : vous le lisez ainsi dans sa phrase. Un
compteur indique combien de mots il reste.

| Choix | Ce qu’il fait |
| --- | --- |
| **Remplacer** | Remplace ce mot par la suggestion, ou par ce que vous avez tapé dans **Correction**. |
| **Tout remplacer** | Remplace le mot partout où il apparaît dans le document. |
| **Ignorer** | Laisse ce mot tel quel, cette fois-ci. |
| **Tout ignorer** | Laisse le mot tel quel partout, jusqu’à la fin de cette vérification. |
| **Ajouter au dictionnaire** | Accepte le mot, dans ce document et dans tous les autres. |

Quand Poiesis n’a rien à proposer, il affiche **Aucune suggestion**. Tapez alors
vous-même la correction dans **Correction**.

Pour vérifier tout un document, Poiesis se sert de ses propres dictionnaires :
anglais, espagnol, espagnol (Mexique) et français. S’il n’a de dictionnaire
pour aucune des langues que vous vérifiez, il vous le signale et propose
**Ouvrir les réglages**. Vous pouvez y choisir une langue dont il dispose.

## Corriger un mot au passage {#fix-a-word-as-you-go}

1. Faites un clic droit sur un mot souligné. Les suggestions de Poiesis figurent en
   haut du menu.
2. Cliquez sur une suggestion pour remplacer le mot. Si le mot est correct,
   choisissez plutôt **Ajouter au dictionnaire** : Poiesis ne le soulignera plus.

## Choisir comment Poiesis vérifie {#choose-how-Poiesis-checks}

Ouvrez **Réglages → Langue → Orthographe**. Vous y trouvez trois réglages :

- **Vérifier l’orthographe** active ou désactive le soulignement.
- **Moteur** détermine comment Poiesis vérifie pendant la saisie.
  - **Natif**, le choix par défaut, fait appel au correcteur orthographique de
    votre ordinateur.
  - **Amélioré** fait appel aux dictionnaires de Poiesis. Les résultats sont alors
    les mêmes sur tous les ordinateurs.
- **Langues** indique les langues à vérifier. Si vous en cochez plusieurs, Poiesis
  accepte tout mot correct dans l’une d’elles, ce qui est pratique pour un
  document écrit en deux langues. Avec **Natif** sur un Mac, le système
  reconnaît la langue tout seul.

Un [coffre](./vaults) (le dossier qui contient vos textes) peut avoir son
propre réglage. Dans **Réglages → Langue → Ce coffre**, réglez **Par défaut
pour ce coffre** sur **Utiliser global**, **Natif** ou **Amélioré**. Avec
**Amélioré**, vous pouvez aussi choisir les langues de ce coffre.

## Ajouter une langue que Poiesis ne fournit pas {#add-a-language-Poiesis-doesnt-bring}

Le moteur **Amélioré** sait vérifier toute langue pour laquelle il existe un
dictionnaire Hunspell, le type de dictionnaire qu’utilisent LibreOffice et
Firefox. Un tel dictionnaire est un dossier qui contient un fichier `.aff` et
un fichier `.dic`.

1. Dans **Réglages → Langue → Ce coffre**, réglez **Par défaut pour ce
   coffre** sur **Amélioré**.
2. À côté de **Ajouter une langue**, appuyez sur **Ajouter…** et choisissez le
   dossier du dictionnaire.
3. Cochez la nouvelle langue dans les **Langues** de ce coffre.

## Votre dictionnaire personnel {#your-personal-dictionary}

L’endroit où Poiesis range un mot que vous acceptez dépend du moteur :

- **Amélioré**, et la vérification de tout un document : **Ajouter au
  dictionnaire** enregistre le mot dans la liste de Poiesis. Pour consulter cette
  liste ou en retirer un mot, ouvrez **Réglages → Langue → Dictionnaire
  personnel**. Un mot retiré est de nouveau souligné.
- **Natif** : **Ajouter au dictionnaire**, dans le menu du clic droit,
  enregistre le mot dans le correcteur orthographique de votre ordinateur. Il
  ne figure pas dans la liste de Poiesis.

## Voir aussi {#see-also}

- [Dictionnaire et thésaurus](./dictionary)
- [Thèmes et langues](./themes-and-languages)
- [Réglages](./settings)

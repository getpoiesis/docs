---
title: Orthographe
description: L’orthographe vérifiée pendant que vous écrivez, et une passe sereine sur tout un document.
---

# Orthographe

φ vérifie votre orthographe pendant que vous écrivez. Un mot mal orthographié
reçoit un discret soulignement ondulé, que vous pouvez corriger depuis le menu
contextuel, ou vous pouvez tous les garder pour une seule passe délibérée une
fois le brouillon terminé. Rien n’est jamais corrigé à votre place.

## Vérifier tout un document {#check-a-whole-document}

1. Ouvrez le document.
2. Appuyez sur `⌘;`, ou choisissez **Édition → Vérifier l’orthographe…**,
   **Vérifier l’orthographe…** dans le menu ⋮ du document, ou **Vérifier
   l’orthographe…** dans la palette de commandes.
3. Pour chaque mot où φ s’arrête, choisissez quoi faire (ci-dessous).
4. Quand φ indique que tout est fait, il ne reste rien à relire.

Le mot en cours de relecture est surligné dans le texte, pour que vous le voyiez
là où il se trouve, et un compteur indique combien il en reste.

| Choix | Ce qu’il fait |
| --- | --- |
| **Remplacer** | Remplace ce mot par la suggestion, ou par ce que vous avez tapé dans **Correction**. |
| **Tout remplacer** | Remplace toutes les occurrences dans le document. |
| **Ignorer** | Passe celle-ci. |
| **Tout ignorer** | Passe toutes les occurrences, pour le reste de cette passe. |
| **Ajouter au dictionnaire** | Conserve le mot, ici et dans tous les autres documents. |

Quand φ n’a rien à proposer, il affiche **Aucune suggestion**, et vous pouvez
taper la correction vous-même.

La vérification de tout le document utilise les dictionnaires propres à φ :
anglais, espagnol, espagnol (Mexique) et français. Si aucune des langues que
vous vérifiez n’en a un, φ vous le dit et propose **Ouvrir les réglages**, pour
que vous choisissiez une langue qu’il possède.

## Corriger un mot au fil de l’écriture {#fix-a-word-as-you-go}

Faites un clic droit sur un mot souligné. Les suggestions de φ sont en haut du
menu : choisissez-en une pour remplacer le mot, ou choisissez **Ajouter au
dictionnaire** pour le conserver et qu’il ne soit plus signalé.

## Choisir comment φ vérifie {#choose-how-φ-checks}

Dans **Réglages → Langue → Orthographe** :

- **Vérifier l’orthographe** : active ou désactive le soulignement.
- **Moteur** : la façon dont φ vérifie pendant que vous tapez.
  - **Natif**, par défaut, utilise le correcteur orthographique de votre
    ordinateur.
  - **Amélioré** utilise les dictionnaires de φ, pour les mêmes résultats sur
    chaque ordinateur.
- **Langues** : les langues à vérifier. Choisissez-en plusieurs et un mot
  correct dans n’importe laquelle d’entre elles n’est pas signalé : un document
  en deux langues se lit donc sans faux signalements. Avec **Natif** sur un
  Mac, le système détecte la langue tout seul.

Un coffre peut vérifier différemment des autres : dans **Réglages → Langue →
Ce coffre**, réglez **Par défaut pour ce coffre** sur **Utiliser global**,
**Natif** ou **Amélioré**. Avec **Amélioré**, vous pouvez aussi choisir les
langues de ce coffre.

## Ajouter une langue que φ n’apporte pas {#add-a-language-φ-doesnt-bring}

Le moteur **Amélioré** peut vérifier n’importe quelle langue disposant d’un
dictionnaire Hunspell, celui qu’utilisent LibreOffice et Firefox : un dossier
contenant un fichier `.aff` et un fichier `.dic`.

1. Dans **Réglages → Langue → Ce coffre**, réglez **Par défaut pour ce coffre**
   sur **Amélioré**.
2. À côté de **Ajouter une langue**, appuyez sur **Ajouter…** et choisissez le
   dossier du dictionnaire.
3. Cochez la nouvelle langue dans les **Langues** de ce coffre.

## Votre dictionnaire personnel {#your-personal-dictionary}

L’endroit où va un mot conservé dépend du moteur :

- Avec **Amélioré**, et depuis la vérification de tout le document, **Ajouter
  au dictionnaire** garde le mot dans la liste propre à φ. Consultez-la, et
  retirez-en des mots, dans **Réglages → Langue → Dictionnaire personnel**. Un
  mot que vous retirez est de nouveau signalé.
- Avec **Natif**, **Ajouter au dictionnaire** dans le menu contextuel confie le
  mot au correcteur orthographique de votre ordinateur : il n’est donc pas dans
  la liste de φ.

## Voir aussi {#see-also}

- [Dictionnaire et thésaurus](./dictionary)
- [Thèmes et langues](./themes-and-languages)
- [Réglages](./settings)

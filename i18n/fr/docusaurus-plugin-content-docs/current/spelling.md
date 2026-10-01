---
title: Orthographe
---

# Orthographe

φ vérifie votre orthographe pendant que vous écrivez. Les mots mal orthographiés
reçoivent un discret soulignement ondulé, et vous pouvez les corriger
directement depuis le menu contextuel, ou relire tout le document en une passe
sereine.

Tout se trouve dans **Réglages → Langue**.

## Corriger un mot au fil de l'écriture {#fixing-a-word-as-you-go}

Faites un clic droit sur un mot souligné. Le menu s'ouvre avec les suggestions
de φ en haut : choisissez-en une pour remplacer le mot. Choisissez **Ajouter au
dictionnaire** pour conserver le mot et qu'il ne soit plus signalé.

## Vérifier tout le document {#check-the-whole-document}

Quand vous préférez relire un brouillon terminé en une seule passe délibérée,
lancez **Vérifier l’orthographe**. φ parcourt chaque faute dans l'ordre et, pour
chacune, affiche un petit panneau avec une zone **Correction** et des
suggestions. Rien n'est jamais corrigé automatiquement :

- **Remplacer** : remplace ce mot par la suggestion (ou par ce que vous avez
  tapé dans la zone).
- **Tout remplacer** : corrige toutes les occurrences du mot dans le document.
- **Ignorer** / **Tout ignorer** : passe celle-ci, ou toutes les occurrences,
  pour le reste de la passe.
- **Ajouter au dictionnaire** : conserve le mot, maintenant et dans les
  documents à venir.

Le mot en cours de relecture est surligné dans le texte pour que vous le voyiez
toujours en contexte, et un compteur indique combien il en reste. Quand φ n'a
rien à proposer, il affiche **Aucune suggestion**, et vous pouvez taper
vous-même la correction.

Lancez la passe comme vous le souhaitez :

- **Vérifier l’orthographe…** dans le menu ⋮ du document
- **Édition → Vérifier l’orthographe…** dans la barre de menus, ou `⌘;`
- **Vérifier l’orthographe…** dans la palette de commandes (`⌘P`)

La vérification de tout le document utilise toujours les dictionnaires fournis
avec φ (anglais, espagnol, espagnol du Mexique et français), même lorsque votre
moteur habituel est le correcteur de votre système d'exploitation. Si aucune des
langues du document ne dispose d'un dictionnaire fourni, φ vous indique qu'il ne
peut pas lancer la vérification et propose **Ouvrir les réglages**, pour que
vous choisissiez une langue qu'il possède.

## Réglages {#settings}

### Orthographe {#spelling}

Dans **Réglages → Langue → Orthographe** :

- **Vérifier l’orthographe** : active ou désactive le soulignement.
- **Moteur** : la façon dont φ vérifie pendant que vous tapez.
  - **Natif** (par défaut) utilise le correcteur orthographique de votre système
    d'exploitation. Il est léger et laisse intacts les outils d'écriture de
    votre système.
  - **Amélioré** utilise les dictionnaires fournis avec φ, pour obtenir les
    mêmes résultats sur tous les systèmes d'exploitation.
- **Langues** : les langues à vérifier. Vous pouvez en choisir plusieurs : un
  mot correct dans *n'importe laquelle* d'entre elles n'est pas signalé, ce qui
  permet aux documents multilingues de fonctionner. Avec le moteur Natif sur
  macOS, le système détecte la langue tout seul.

### Ce coffre {#this-vault}

Dans **Réglages → Langue → Ce coffre**, **Par défaut pour ce coffre** permet à
un coffre de vérifier différemment des autres : **Utiliser global** (suivre les
réglages ci-dessus), **Natif** ou **Amélioré**. Quand vous choisissez
**Amélioré** ici, une liste de langues apparaît pour que vous choisissiez aussi
les langues de ce coffre.

## Dictionnaire personnel {#personal-dictionary}

Les mots que vous conservez sont mémorisés d'un document à l'autre, mais
l'endroit où ils sont gardés dépend du moteur :

- Avec **Amélioré**, et depuis la vérification de tout le document, **Ajouter
  au dictionnaire** enregistre le mot dans la liste propre à φ. Vous pouvez la
  consulter, et retirer des mots, dans **Réglages → Langue → Dictionnaire
  personnel**. Retirer un mot fait que φ le signale de nouveau.
- Avec **Natif**, **Ajouter au dictionnaire** dans le menu contextuel confie
  plutôt le mot au correcteur orthographique du système, si bien qu'il
  n'apparaît pas dans la liste de φ.

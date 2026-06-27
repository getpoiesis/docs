---
title: Orthographe
sidebar_position: 6
---

# Orthographe

φ vérifie l'orthographe pendant que vous écrivez. Les fautes apparaissent avec un
soulignement ondulé discret, et vous pouvez les corriger depuis le **menu
contextuel** (clic droit) : choisissez une suggestion, ou **Ajouter au
dictionnaire** pour conserver le mot.

Tout se trouve dans **Paramètres → Langue**.

## Choisir un moteur

Dans **Paramètres → Langue → Orthographe**, vous choisissez comment φ vérifie
l'orthographe :

- **Natif** (par défaut) : utilise le correcteur de votre système d'exploitation.
  Léger, il laisse intactes les fonctions d'écriture du système. Sur macOS la
  langue est détectée automatiquement ; sous Windows et Linux, choisissez les
  langues ci-dessous.
- **Amélioré** : utilise les dictionnaires intégrés de φ, pour une vérification
  de même qualité sur tous les systèmes d'exploitation. L'anglais, l'espagnol,
  l'espagnol (Mexique) et le français sont inclus.

Désactivez entièrement la fonction avec l'interrupteur **Vérifier l'orthographe**.

## Langues

Choisissez les langues à vérifier dans **Paramètres → Langue → Orthographe →
Langues**. Vous pouvez en choisir plusieurs : un document est vérifié dans toutes
ces langues, donc un mot correct dans *l'une* des langues choisies n'est pas
signalé. C'est ce qui rend possibles les documents multilingues.

### Installer plus de langues

Le moteur Amélioré peut utiliser n'importe quel dictionnaire Hunspell. Pour en
ajouter un :

1. Téléchargez un dictionnaire Hunspell (un dossier avec un fichier `.aff` et un
   fichier `.dic`).
2. **Paramètres → Langue → Orthographe → Installer une langue…** et sélectionnez
   le dossier.

## Réglages par document et par coffre

Les réglages d'orthographe se cumulent en cascade : **document → coffre →
global**. Le niveau le plus précis l'emporte, et ce que vous ne définissez pas
hérite du niveau supérieur.

- **Pour un document :** cliquez sur la pastille d'orthographe dans la **barre
  d'état** (en bas de la fenêtre) pour définir le moteur et les langues de ce
  document. Choisissez **Utiliser la valeur par défaut** pour l'annuler.
- **Pour un coffre :** **Paramètres → Langue → Ce coffre** définit une valeur par
  défaut pour tous les documents du coffre actuel. Choisissez **Utiliser global**
  pour l'annuler.

## Dictionnaire personnel

Les mots ajoutés avec **Ajouter au dictionnaire** sont mémorisés d'un document à
l'autre. Consultez-les ou supprimez-les dans **Paramètres → Langue →
Dictionnaire personnel** : supprimer un mot le fait de nouveau signaler par φ.

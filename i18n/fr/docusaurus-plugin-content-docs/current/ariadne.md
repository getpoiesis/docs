---
title: Ariadne
description: Une assistante à côté de votre texte, avec votre clé ou un modèle local.
---

# Ariadne

Ariadne est une assistante placée à côté de ce que vous avez ouvert. Elle lit votre travail avec vous, répond à vos questions, vérifie la continuité et commente en notes de marge. Elle tient aussi la bible de votre histoire et garde votre coffre en ordre. Elle n’écrit jamais vos textes, et elle demande avant de changer quoi que ce soit. Lisez [L’IA et votre vie privée](./ai-and-your-privacy.md) avant de l’activer.

## L’activer

1. Ouvrez **Réglages → IA** et choisissez **Configurer Ariadne**.
2. Choisissez un fournisseur. Vous pouvez lire sa politique de confidentialité depuis la liste.
3. Lisez la feuille qui s’affiche et choisissez **Activer Ariadne**.
4. Ajoutez votre clé d’API si le fournisseur en a besoin, puis choisissez un modèle.

Avec Ollama, il doit tourner sur cet ordinateur avec un modèle capable d’utiliser des outils.

Chaque coffre peut utiliser ces réglages ou les siens. Sous **Ce coffre**, dans **Réglages → IA**, choisissez le coffre puis **Le sien**.

<img src="/img/app/ai-consent-light.png" alt="La feuille à lire avant d’activer Ariadne, avec la politique de confidentialité du fournisseur." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ai-consent-dark.png" alt="La feuille à lire avant d’activer Ariadne, avec la politique de confidentialité du fournisseur." width="1600" height="1000" loading="lazy" decoding="async" />

## L’ouvrir

Utilisez le bouton du robot dans la barre de la page, ou appuyez sur **⌘G** puis **A**. Elle reste ouverte pendant que vous naviguez.

<img src="/img/app/ariadne-panel-light.png" alt="Ariadne ouvert à côté d’un chapitre, avec des pistes pour commencer." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-panel-dark.png" alt="Ariadne ouvert à côté d’un chapitre, avec des pistes pour commencer." width="1600" height="1000" loading="lazy" decoding="async" />

## L’interroger sur votre travail

Partez d’une suggestion du panneau, ou demandez avec vos mots :

- **Sur quoi devrais-je travailler aujourd’hui ?** Elle regarde ce que vous avez écrit, vos tâches et vos notes ouvertes.
- **Vérifie la continuité d’un projet.** Elle compare le texte à vos personnages et à votre monde, et cite les deux passages pour que vous puissiez vérifier.
- **Écris-moi une lettre d’éditeur sur un projet.** Ce qui fonctionne, où cela traîne, et ce qu’elle vous demanderait d’abord.
- **Crée une bible de l’histoire à partir de mon manuscrit.** Elle remplit personnages, lieux, événements et synopsis de chapitres d’après le texte.

Avec **Laisser des notes en marge** activé, elle peut commenter un passage, y compris dans un texte. Ces notes sont marquées **D’un agent** dans vos annotations, et ne changent jamais un mot.

Vous pouvez aussi lui demander comment fonctionne φ Poiesis. Elle répond à partir de ce guide, qu’elle télécharge la première fois que vous posez la question et garde sur votre ordinateur, et elle vous renvoie à la page.

## Elle se souvient, si vous êtes d’accord

Dites à Ariadne quelque chose de durable, comme votre façon de travailler ou une décision sur le livre, et elle peut proposer de le garder pour les prochaines discussions. Elle demande avant d’ajouter quoi que ce soit. Vous pouvez lire et modifier ce qu’elle garde dans **Ce dont Ariadne se souvient**, dans **Réglages → IA**. C’est stocké dans le coffre.

## Triez vos notes

Demandez-lui de trier votre boîte d’entrée : elle vous donne un seul plan : classer ceci ici, étiqueter cela, marquer ceci. Décochez ce que vous ne voulez pas et choisissez **Appliquer**. Rien ne bouge avant, et **Annuler** sur la carte remet tout en place.

## Chercher sur le web

Avec Anthropic, Ariadne peut chercher sur le web quand une question le demande, avec ses sources en lien. Anthropic fait les recherches avec votre clé. Cela peut coûter davantage : consultez d’abord les tarifs et conditions d’Anthropic. C’est désactivé tant que vous n’activez pas **Chercher sur le web** dans **Réglages → IA**. Votre journal et vos Pages du matin restent à l’écart.

Les autres fournisseurs et les modèles locaux ne cherchent pas sur le web. Ariadne peut consulter Wikipédia, et dit que c’est tout ce qu’elle a regardé. C’est désactivé tant que vous n’activez pas **Consulter Wikipédia** sous **Avancé**, dans **Réglages → IA**. Seuls les mots qu’elle cherche quittent alors votre ordinateur, et seulement vers Wikipédia.

Pour garder ce qu’elle a trouvé, choisissez **Enregistrer comme page de recherche** sous sa réponse. Les sources vont avec.

## L’utiliser sur votre sélection

Sélectionnez du texte et cliquez sur le robot de la barre d’outils. Un petit menu s’ouvre sur la page, et la discussion reste fermée.

- Avec un seul mot sélectionné, les **Synonymes** et **Antonymes** de vos dictionnaires s’affichent aussitôt. Ils n’utilisent pas l’IA.
- **Trouver des synonymes** et **Trouver des antonymes** interrogent Ariadne, en tenant compte de la phrase. Avec une sélection plus longue, vous verrez **Trouver un remplacement**.
- **Le dire autrement**, **Raccourcir** et **Vérifier l'orthographe et la grammaire** fonctionnent dans un paragraphe.
- **Demander dans la discussion** envoie la sélection dans le panneau.

Cliquez sur un mot pour l’utiliser. Pour une phrase, elle demande d’abord, et rien ne change tant que vous n’avez pas choisi **Remplacer**. Annuler revient en arrière. Seuls la sélection et son paragraphe sont envoyés. Le journal n’a pas ce menu.

## Montre-le-moi à l’écran

Avec **Contrôler ce qui est à l’écran** activé, demandez quelque chose et Ariadne l’ouvre : « montre-moi les recherches du chapitre trois ». Elle peut aussi fermer ce qui est ouvert. S’il y a plusieurs éléments, elle les liste sous forme de liens à cliquer.

## Continuer à écrire pendant qu’elle travaille

Vous pouvez envoyer un autre message pendant qu’Ariadne travaille : elle le lira à son étape suivante. **Arrêter** garde ce qu’elle a déjà dit. Tapez `/` pour les commandes, comme `/continuity`, `/timeline`, `/voices`, `/new` ou `/help`.

## Ce que chaque message envoie

Les modèles ne retiennent rien d’un message à l’autre : chacun renvoie donc toute la discussion, et chaque étape d’une réponse est une requête à part. C’est pourquoi l’entrée est bien plus grande que la sortie.

Le compteur en haut du panneau indique les nouveaux jetons. Ce que votre fournisseur a réutilisé depuis son cache s’affiche à part au survol. Les tarifs de votre fournisseur indiquent ce que chacun coûte. Les anciens résultats sont raccourcis à mesure que la discussion s’allonge, et une longue discussion suggère d’en commencer une nouvelle.

## Lui donner la permission

Ariadne ne peut faire que ce que les interrupteurs du coffre autorisent. Ils sont désactivés tant que vous ne les activez pas, dans la liste des coffres, dans **Réglages → IA**. Choisissez **Lire**, **Aider** ou **Tout** pour un coffre en un clic, ou **Ajuster** ses interrupteurs. Voir [Agents IA](./ai-agents.md). Chaque changement attend aussi que vous choisissiez **Autoriser** ou **Pas maintenant**.

<img src="/img/app/ariadne-ask-light.png" alt="Ariadne demande de marquer une carte comme faite, avec son plan au-dessus." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-ask-dark.png" alt="Ariadne demande de marquer une carte comme faite, avec son plan au-dessus." width="1600" height="1000" loading="lazy" decoding="async" />

## Lier un document

Tapez `[[` dans votre message et choisissez un document. Le lien reste dans votre phrase, comme dans l’éditeur.

<img src="/img/app/ariadne-link-light.png" alt="Un document lié dans un message." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-link-dark.png" alt="Un document lié dans un message." width="1600" height="1000" loading="lazy" decoding="async" />

## Quand vous êtes bloqué

Choisissez **Bloqué ?** dans la zone de message pour obtenir des questions sur votre texte, des pistes, des angles à essayer, une esquisse de la suite ou ce que disent déjà vos notes. Vous pouvez aussi lancer un minuteur d’écriture libre de 5, 10 ou 15 minutes, qui n’utilise pas d’IA.

Les suggestions restent dans le panneau. Pour garder une réponse, survolez-la et choisissez **Enregistrer dans une note** : elle va dans votre boîte d’entrée. Une note enregistrée ainsi, ou écrite par un agent, ne compte pas dans vos mots.

<img src="/img/app/ariadne-stuck-light.png" alt="Le menu Bloqué ?, avec ses questions, pistes et minuteur." width="1600" height="1000" loading="lazy" decoding="async" />
<img src="/img/app/ariadne-stuck-dark.png" alt="Le menu Bloqué ?, avec ses questions, pistes et minuteur." width="1600" height="1000" loading="lazy" decoding="async" />

## Discussions passées

Le bouton des bulles liste les discussions passées. Vous pouvez les rechercher, les renommer et les supprimer.

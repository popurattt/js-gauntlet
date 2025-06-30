# Project Features Overview

## Guest

Complétez `main.js` pour implémenter la fonctionnalité de recherche :

* Permettre la recherche d'invités (depuis la variable `GUESTS`) **par nom complet uniquement**.
* La recherche doit être **insensible à la casse** (par exemple, "Billy", "billy", et "BILLY" sont tous valides).
* \
  \
  Si l'invité est trouvé, afficher :`L'invité <nom de l'invité> a été trouvé. Son tag est <tag>.`dans le paragraphe avec l'identifiant `présentation`.
* \
  Si l'invité n'est pas trouvé, afficher :`L'invité <nom de l'invité> n'a pas été trouvé.`

Comportement supplémentaire :

* Lorsqu’un invité est trouvé, ajouter **des boutons pour l’admettre ou le refuser** à côté de lui.
* Lorsqu’un invité est admis, afficher ses informations dans le paragraphe `Admettre`.
* Lorsqu’un invité est refusé, afficher ses informations dans le paragraphe `Refuser`.
* Une fois admis ou refusé, **l’invité ne doit plus apparaître** dans les résultats de recherche.

### Bonus : Liste de suggestions

* Ajouter une liste de suggestions **triée par ordre alphabétique**, basée sur le tag de l’invité.
* Chaque suggestion doit être **cliquable** pour remplir automatiquement le champ de recherche avec le nom de l’invité.
* Les suggestions doivent s’afficher si **au moins un caractère** du tag est saisi.


---

## Guess

Complétez `main.js` pour implémenter la logique du jeu :

* Générer un nombre aléatoire entre **1 et 100**.
* L’utilisateur peut entrer une estimation dans le champ de saisie et cliquer sur le bouton **"Deviner"**.
* Le jeu affiche :
  * `Félicitations ! Vous avez deviné le nombre <nombre> en <x> tentatives.` (en vert) si la supposition est correcte.
  * \
    `Votre supposition est trop élevée.` ou`Votre supposition est trop basse.` (en rouge) si la supposition est incorrecte.
* Le nombre de tentatives doit être affiché.
* En cliquant sur **"Réinitialiser"**, le jeu :
  * Génére un nouveau nombre.
  * Réinitialise le compteur de tentatives.


---

## Img-Gallery

Complétez `main.js` pour implémenter une galerie dynamique :

* Déclarer :
  * Un tableau `const` contenant les noms de fichiers image (ex : `"pic1.jpg"`).
  * Un objet `const` contenant les textes alternatifs pour chaque image.
* Parcourir le tableau de noms de fichiers :
  * Insérer des éléments `<img>` dans la `div` des vignettes.
  * Affecter les attributs `src` et `alt` appropriés.
* Ajouter un écouteur d’événement à chaque vignette :
  * Lors d’un clic, afficher l’image correspondante et son texte dans l’élément `displayed-img`.
* Ajouter un écouteur d’événement au bouton :
  * Permettre l’**obscurcissement ou la désobscurcissement** de l’image en taille réelle.


---

## Space

* Créer dynamiquement un tableau en JavaScript à partir des données contenues dans la variable `SPAAACE`.
* Insérer le tableau dans la `div` dédiée.
* Les colonnes du tableau doivent correspondre aux **noms de clés des objets**.


---

## Story-Gen

Complétez `main.js` pour implémenter la génération d’histoires :

* Remplacer le nom par défaut "Bob" par un **nom personnalisé**, si celui-ci est saisi avant de cliquer sur **"Générer"**.
* Remplacer les espaces réservés `:insertx:`, `:inserty:` et `:insertz:` dans l’histoire avec des éléments aléatoires choisis dans les tableaux `insertX`, `insertY` et `insertZ`.
* Si l’option **FR** est cochée :
  * Convertir les **unités de poids et de température américaines** en équivalents français.
* Une **nouvelle histoire** doit être générée à chaque clic sur le bouton.


---



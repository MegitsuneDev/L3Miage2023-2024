# Réalisation du jeu *Candy Crush*

Mon jeu *Candy Crush* se trouve dans le dossier TP1 - TP2.

## Conception

Lors du TP1, il nous a été demandé d'analyser le code squelette et d'essayer de l'améliorer. De ce fait, j'ai compris comment le code avait été réalisé.

Suite à cela, je me suis directement rendu compte que le jeu ne prenait pas en compte une bonne génération de *cookie*. Ce que je veux dire, c'est que lorsqu'on génère les *cookies*, on ne vérifie pas si cela forme une ligne ou une colonne de 3.

### Function hasAlignment

Donc j'ai fait une fonction "**hasAlignment**" qui permet de vérifier si un alignement existe, je l'ai ensuite utilisée dans la fonction "**remplirTableauDeCookies**". Ce qui fait en sorte que dès qu'on lance le jeu, la fonction "**remplirTableauDeCookies**" utilise la fonction "**hasAlignment**" et donc effectue une vérification d'un possible alignement. Si un alignement existe, il va regénérer un *cookie* et tant que la fonction "**hasAlignment**" retourne "true", alors le *cookie* est régénéré.

### Modification de la grille

Lors des heures de TD, il nous a été dit que la grille avait été faite rapidement donc il y avait plein de divs dans le fichier index.html. Pour éviter cela, j'ai supprimé toutes les divs et j'ai laissé la div avec l'id **grille**. Dans la fonction "**showCookies**", j'ai récupéré l'élément et j'ai aussi récupéré le nombre de lignes et de colonnes qui ont été renseignés dans l'appel de la classe. De ce fait, je boucle sur les lignes et sur les colonnes et je crée les divs. Ainsi, les divs sont auto-générés.

### Insertion de la logique de swap

Que serait *Candy Crush* sans une logique de swap ! Alors lors de la conception de cette fonctionnalité, on a déjà les 3 fonctions utiles mais elles sont vides. Nous avons "**selectionnee**", "**deselectionnee**" et "**swapCookies**". Les "**selectionnee**" & "**deselectionnee**" sont assez simples car ça a pour but de mettre / supprimer un effet de surbrillance sur un *cookie*. Hors la fonction "**swapCookies**" a pour but de faire swap un *cookie*. Ainsi, j'ai utilisé la fonction distance qui était déjà faite pour calculer la distance entre les *cookies* et ensuite j'ai fait un swap de variable mais sans variable temporaire. J'avais vu dans un tutoriel la possibilité d'utiliser XOR afin de faire un swap de variable. Puis on désélectionne tout en utilisant la fonction "**deselectionnee**".

### Insertion de la logique de drag and drop

La logique de swap peut être effectuée avec des clics mais aussi en drag and drop. On a besoin de sélectionner avec notre souris notre *cookie* et de le déplacer sur un autre *cookie* pour le swap. De ce fait, pour réaliser ce drag and drop, on utilise l'event "**ondragstart**" qui permet de commencer le drag et donc de sélectionner notre *cookie*. Ensuite "**ondragover**" nous indique qu'on est au-dessus d'une zone de dépôt valide. Puis "**ondragenter**" nous indique qu'un élément est glissé dans une zone de dépôt valide. Après "**ondragleave**" nous indique qu'un élément glissé sort d'une zone de dépôt valide. Et pour terminer "**ondrop**" nous indique qu'un élément est déposé dans une zone de dépôt valide.


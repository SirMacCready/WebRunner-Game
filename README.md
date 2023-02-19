# RPG Web
Un simple RPG codé en language web.
Estimation du pourcentage de réussite vis-à-vis du livrable observé par l'équipe 64%.
Cause: délais trop courts.

## Ce que l'on a pu implémenter:
- Les écrans:
    - De démarrage
    - De pause
    - De fin
    - Des paramètres (non fonctionnel)
    - Des informations relatives au jeu
- Les redirections entre ces différents écrans
- Le niveau entier avec:
    - L'affichage du score en temps réel
    - L'affichage des obstacles
    - La detection de collision
    - L'animation du player et de l'obstacle up
- L'éditeur entier avec:
    - Ajout de block à droite de celui sélectionné
    - Délétion de block
    - Modification de block
    - Téléchargement au format JSON sans bugs
- La lecture des JSON, partie blocks
- La cascade fetch en fin de fichier index.html et editor.html


## Ce que l'on a pas pu implémenté (du plus important au moins important):
- L'audio
- La lecture des JSON partie assets
- La selection du niveau dans l'écran principal (pas de back, so...) (Cf console fichier slider.js)
- L'affichage du score final dans l'écran de fin (Cf fichier win.html à la fin du niveau)
- La modification des paramètres

## Bugs:
- Lors de l'affichage de l'écran de pause, redémarage du niveau/éditeur.
- La touche échap,  mais solutionné par l'ajout d'un boutton dans l'interface

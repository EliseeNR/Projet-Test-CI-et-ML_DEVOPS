# Projet-Test-CI-et-ML_DEVOPS
Dans ce projet on veut mettre en place une pipeline qui permet de tester automatiquement un modèle intégré à un petit tableau de bord. 

Modèle : https://github.com/lcetinsoy/mldash

Partie 1. Dans un premier temps vous devrez faire sur votre poste localement : 

- faire un test unitaire du modèle et vérifier que les prédictions sont cohérentes. Le test ou les tests unitaires devront être lancés avec pytest.

- faire un test ou plusieurs tests fonctionnels avec cypress afin de vérifier que le tableau de bord qui utilise le modèle affiche correctement la prédiction. 

- Corriger les éventuelles erreurs. 

 

Partie 2. 

Maintenant que vous pouvez lancer vos tests en local. Vous allez devoir les intégrer les tests dans votre CI github (ou toute autre CI de votre choix). 

Pour cela vous aller devoir éditer votre fichier de configuration de CI pour qu'il installe tous l es outils nécessaire à l'execution des tests et les lance : 

executer le script permettant d'entraîner le modèle et et le sauvegarder
executer le test unitaire dudit modèle
executer le ou les tests cypress de l'interface
Partie 3 : bonus pour avoir la note parfaite

Bonus 1 : Faire en sorte de créer un Dockerfile permettant de créer une image docker faisant tourner le streamlit dans un docker.
Bonus 2 : faire en sorte de push l'image construite dans la pipeline sur dockerhub
 

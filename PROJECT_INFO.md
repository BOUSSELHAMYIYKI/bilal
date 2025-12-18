# Projet Calculatrice

Un petit projet de calculatrice en JavaScript avec tests et intégration CI/CD via Jenkins.

## Fichiers du projet

- **calculator.js** - Fonctions principales de la calculatrice
- **calculator.test.js** - Suite de tests (Jest)
- **index.html** - Interface web de la calculatrice
- **Jenkinsfile** - Pipeline CI/CD Jenkins
- **package.json** - Configuration npm et dépendances

## Fonctionnalités

La calculatrice supporte les opérations suivantes:
- ➕ Addition
- ➖ Soustraction
- ✖️ Multiplication
- ➗ Division
- % Modulo

## Installation

```bash
npm install
```

## Utilisation

### Exécuter le calculateur
```bash
npm start
```

### Lancer les tests
```bash
npm test
```

### Utiliser l'interface web
Ouvrir `index.html` dans un navigateur web.

## Pipeline Jenkins

Le Jenkinsfile automatise:
1. Checkout du code
2. Installation des dépendances
3. Exécution des tests avec couverture
4. Exécution de la calculatrice
5. Nettoyage de l'espace de travail

## Auteur
Projet de démonstration - Calculator Project 2025

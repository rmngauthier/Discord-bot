# ℹ️ Prérequis :

- Avoir un compte discord et activer le mode développeur
- Posséder Vs code
- Posséder le package Node.js
- Posséder Git bash
- Posséder une solution d'hébergement

## 🚀 Description

- **Etape 1** : Initialiser Node.js : npm init -y
- **Etape 2** : Installer la bibliothèque d'API Discord : npm install discord.js
- **Etape 3** : Créer le fichier bot : Index.js dans le dossier du projet
- **Etape 4** : Créer le fichier .env puis ajouter le Token : DISCORD_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
- **Etape 5** : Installer dotenv pour charger les variables d'environnement depuis le fichier .env : npm install dotenv
- **Etape 6** : Ajouter le fichier .env à un fichier .gitignore pour qu'il ne soit pas commit dans un dépôt Git : Ecrire .env dans le fichier .gitignore
- **Etape 7** : Exécuter le bot : node index.js

## 💬 Langage Utilisé

- Javascript

## 💻 Utilisation et hébergement :

- **Attention** : Ne pas pousser le fichier .env dans GitHub. C'est un fichier secret contenant le Token du bot

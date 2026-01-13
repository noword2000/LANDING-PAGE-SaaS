# SaaS Launch - Landing Page

Ce dépôt contient le code source de la page d'accueil d'une solution SaaS fictive. Le projet utilise **Bootstrap 5** et **Sass** avec une architecture optimisée.

## 🚀 Guide d'installation et de développement

Suivez ces étapes dans l'ordre pour configurer votre environnement local.

### 1. Clonage du dépôt
Récupérez les fichiers du projet sur votre machine locale :

**Via HTTPS :**
```git clone https://github.com/noword2000/LANDING-PAGE-SaaS.git```

**Via SSH :**
```git clone git@github.com:noword2000/LANDING-PAGE-SaaS.git```

**Entrez ensuite dans le dossier :**
```cd LANDING-PAGE-SaaS```

### 2. Installation des dépendances
Le projet utilise npm pour gérer les bibliothèques. Installez les dépendances avec la commande suivante :
###
```npm install```

### 3. Compilation du SCSS (Génération du dossier CSS)
Le dossier css/ étant ignoré par Git, vous devez générer le fichier style.css manuellement pour que le design s'affiche. Lancez ce script dans votre terminal :
###
```npm run compile-scss```
###
**Note :**
Laissez ce terminal ouvert. Le script surveille vos modifications et recompile le CSS à chaque sauvegarde.

### 4. Lancement de l'aperçu en direct
Ouvrez un deuxième terminal et lancez le serveur local pour visualiser le projet :
###
```npm run live-server```
###
**Note :**
Le site sera automatiquement disponible sur : http://127.0.0.1:8080

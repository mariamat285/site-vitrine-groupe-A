# site-vitrine-groupe-A
#  Nom du site — Groupe A
## thème du site choisi
Restaurant
##  Équipe
| Membre | Rôle | Branche |
|--------|------|---------|
| Mariama Thiam | Chef de projet | main |
| Khadidiatou Diasse| Page d'accueil | feature/accueil |
| Mame Binta Niang | Page À propos  | feature/apropos |
|Kemo Badji | Page Services  | feature/services |
| Abdou Aziz Samb | Page Contact   | feature/contact |

##  Lancer le site
Ouvrir `index.html` dans un navigateur.

##  Aperçu
![Accueil](assets/screenshots/accueil.png)
![À propos](assets/screenshots/apropos.png)

##| Abdou Aziz Samb | Page Contact   | feature/contact |
je viens de creer de le fichier "contact.html" ma branche est de "feature/contact"
<!DOCTYPE html>
Indique que le document utilise HTML5. Cela permet au navigateur d’afficher correctement la page.
<html lang="fr">
Définit la langue principale du site comme étant le français.
Utile pour les navigateurs et le référencement.
<head>
Début de la section en-tête, qui contient les métadonnées de la page.
<meta charset="UTF-8">
Définit l’encodage des caractères en UTF-8.
Permet d’afficher correctement les accents (é, è, à…).
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Rend le site responsive (adapté aux téléphones et tablettes).
La page s’ajuste automatiquement à la taille de l’écran.
<title>Teranga Food - Contact</title>
Définit le titre de la page, affiché dans l’onglet du navigateur.
<meta name="description" content="Contactez Teranga Food à Dakar pour vos commandes de burgers, frites et spécialités locales.">
Donne une description du site utilisée par les moteurs de recherche (SEO).
Cela aide à mieux référencer la page sur Google.
<link rel="stylesheet" href="css/style.css">
Permet de lier un fichier CSS externe pour styliser la page (couleurs, mise en forme, etc.).
Cette en-tête permet de configurer la page web en définissant sa langue, son encodage, son adaptation aux différents écrans, son titre, sa description pour le référencement, ainsi que son apparence grâce au fichier CSS.
<header>
Balise qui définit l’en-tête de la page.
Elle regroupe généralement le menu, le logo ou le titre.
<nav>
Contient le menu de navigation du site.
<a href="index.html" title="Accueil">Accueil</a>
Lien vers la page d’accueil du site.
<a href="services.html" title="Voir le menu">Menu</a>
Lien vers la page du menu (plats proposés).
<a href="contact.html" title="Nous contacter">Contact</a>
Lien vers la page de contact.
</nav>
Fin de la zone de navigation.
<h1>Nous contacter</h1>
Titre principal de la page.
Il indique clairement que l’utilisateur est sur la page Contact.
<div class="banner">
Conteneur pour une bannière (zone visuelle).
<img src="img/image_acceuil.png" alt="Photos du restaurant Teranga Food">
Image affichée dans la bannière.
src : chemin de l’image
alt : description de l’image (utile pour accessibilité et SEO)
</div>
</header>
Fin de la bannière et de l’en-tête.
Cette section <header> permet d’afficher l’en-tête de la page avec un menu de navigation, un titre principal et une image de présentation. Elle facilite la navigation de l’utilisateur et améliore l’apparence du site.
Cette partie représente la section de contact du site. Elle permet d’afficher les informations nécessaires pour localiser le restaurant.
<section class="contact-section">
<section class="contact-section">
Définit une section de la page dédiée au contact.
La classe permet de la styliser avec le CSS.
<div class="contact-info">
Conteneur qui regroupe les informations de contact.
<h2>Où nous trouver</h2>
Sous-titre indiquant que cette partie montre la localisation du restaurant.
<p>
    <strong>Adresse :</strong><br>
    Avenue Cheikh Anta Diop,<br>
    Dakar, Sénégal
</p>
Affiche l’adresse du restaurant.
<strong> : met en valeur le mot “Adresse”
<br> : permet de faire des retours à la ligne
<div class="map-container">
Conteneur pour intégrer la carte.
<iframe ...></iframe>
Permet d’intégrer une carte Google Maps directement dans la page.
src : lien de la carte
width="100%" : prend toute la largeur
height="300" : hauteur de la carte
style="border:0;" : enlève la bordure
allowfullscreen : autorise le plein écran
loading="lazy" : charge la carte seulement quand nécessaire (optimisation)

Cette section permet aux utilisateurs de contacter le restaurant en remplissant un formulaire avec leurs informations (prénom, nom, email) et leur message. Les champs sont obligatoires et le bouton permet d’envoyer la demande
<footer>
Cette partie correspond à la fin de la page web. Elle contient des informations complémentaires et le lien vers le JavaScript.
<footer>
Définit le pied de page du site.
C’est la zone située en bas de la page.
<address>Avenue Cheikh Anta Diop, Dakar, Sénégal</address>
Permet d’afficher une adresse de contact.
La balise <address> est utilisée pour donner des informations de localisation ou de contact (adresse, email, etc.).
</footer>
Fin du pied de page.
<script src="javaScript/script.js"></script>
Permet de lier un fichier JavaScript externe.
Ce script peut servir à :
rendre le site interactif
valider le formulaire
ajouter des animations ou fonctionnalités
Le fait de placer le script à la fin de la page permet de charger le contenu HTML d’abord, ce qui améliore les performances.
Le <footer> contient les informations de contact du site, tandis que la balise <script> permet d’ajouter des fonctionnalités dynamiques grâce au JavaScript.
/**
 * TERANGA FOOD - Logique du site
 * Focus : Manipulation du DOM et gestion de données
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU PANIER (Logique de calcul) ---
    let totalCommande = 0;
    const boutonsCommande = document.querySelectorAll('.order-btn');

    boutonsCommande.forEach(bouton => {
        bouton.addEventListener('click', (event) => {
            // Extraction du prix depuis la carte parente
            const carte = event.target.closest('.product-card');
            const nomPlat = carte.querySelector('h3').innerText;
            const prixTexte = carte.querySelector('.price').innerText;
            
            // Nettoyage de la donnée (Data Cleaning)
            // On retire " FCFA" et les espaces pour ne garder que les chiffres
            const prixNet = parseInt(prixTexte.replace(/[^0-9]/g, ''));

            // Mise à jour de l'état (Accumulation)
            totalCommande += prixNet;

            // Feedback à l'utilisateur
            alert(`${nomPlat} ajouté au panier.\nTotal actuel : ${totalCommande.toLocaleString()} FCFA`);
            
            // Log pour démontrer la maîtrise technique lors de la présentation
            console.log(`Donnée traitée : ${nomPlat} | Valeur : ${prixNet} | Total cumulé : ${totalCommande}`);
        });
    });

    // --- 2. VALIDATION DU FORMULAIRE DE CONTACT ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Vérification basique
            if (email === "" || message === "") {
                e.preventDefault(); // Empêche l'envoi
                alert("Erreur : Tous les champs obligatoires (*) doivent être remplis.");
            } else {
                alert("Merci ! Votre message a été transmis à l'équipe de Teranga Food.");
            }
        });
    }

    // --- 3. EFFET VISUEL (Bonus) ---
    // Change la couleur de la barre de navigation au défilement
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#d35400'; // Orange plus foncé au scroll
        } else {
            nav.style.backgroundColor = '#2c3e50'; // Couleur originale
        }
    });
});
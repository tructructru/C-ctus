// app.js

// Gestion de la photo de profil
document.getElementById('profile-image-input')?.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const profileImage = document.getElementById('profile-image');
        profileImage.src = e.target.result; // Affiche la nouvelle image de profil
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Afficher le menu déroulant du profil au clic
const profileMenu = document.getElementById('profile-menu');
const profileImage = document.getElementById('profile-image');

profileImage.addEventListener('click', function() {
    profileMenu.classList.toggle('show'); // Alterne l'affichage du menu
});

// Ferme le menu déroulant si on clique en dehors
window.addEventListener('click', function(event) {
    if (!profileImage.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.classList.remove('show');
    }
});
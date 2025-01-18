// auth.js

// Écouteur d'événements pour la soumission du formulaire de connexion
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher l'envoi par défaut du formulaire

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    // Récupérer les informations de l'utilisateur depuis le stockage local
    const storedUser = JSON.parse(localStorage.getItem('user'));

    console.log('Utilisateur enregistré:', storedUser); // Debug

    // Vérifier les informations de connexion
    if (storedUser && email === storedUser.email && password === storedUser.password) {
        // Si les informations sont correctes, rediriger vers la page d'accueil
        window.location.href = 'index.html';
    } else {
        // Si les informations sont incorrectes, afficher un message d'erreur
        loginMessage.textContent = "Identifiants incorrects. Veuillez réessayer.";
        console.log('Tentative de connexion avec:', email, password); // Debug
    }
});

// Écouteur d'événements pour la soumission du formulaire d'inscription
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêcher l'envoi par défaut du formulaire

    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const signupMessage = document.getElementById('signup-message');

    // Valider les champs
    if (name && email && password) {
        // Simuler l'inscription en stockant les informations dans le stockage local
        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));

        signupMessage.textContent = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
    } else {
        signupMessage.textContent = "Veuillez remplir tous les champs.";
    }
});
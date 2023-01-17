// Récupération des éléments HTML
const burgerButton = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');

// Détection de la taille de l'écran
function checkScreenSize() {
  if (window.innerWidth <= 768) {
    // Afficher le bouton du menu burger pour les écrans de petite taille
    burgerButton.style.display = 'block';
  } else {
    // Cacher le bouton du menu burger pour les écrans de grande taille
    burgerButton.style.display = 'none';
    // Cacher également le menu burger pour les écrans de grande taille
    burgerMenu.style.display = 'none';
  }
}

// Ajout d'un écouteur d'événement "resize" pour détecter les changements de taille de l'écran
window.addEventListener('resize', checkScreenSize);

// Ajout d'un écouteur d'événement "click" sur le bouton
burgerButton.addEventListener('click', function() {
  // Inversion de la propriété "display" sur le menu burger
  if (burgerMenu.style.display === 'block') {
    burgerMenu.style.display = 'none';
  } else {
    burgerMenu.style.display = 'block';
  }
});
// Initialisation de la fonction pour détecter la taille de l'écran lors du chargement de la page
checkScreenSize();

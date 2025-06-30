/**
 * Configuration des images de la galerie
 */
const images = [
    "pic1.jpg",
    "pic2.jpg", 
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];

/**
 * Textes alternatifs pour chaque image
 */
const altTexts = {
    "pic1.jpg": "Closeup of a human eye",
    "pic2.jpg": "Rock that looks like a wave",
    "pic3.jpg": "Purple and white pansies",
    "pic4.jpg": "Section of wall from a pharoah's tomb",
    "pic5.jpg": "Large moth on a leaf"
};

/**
 * Éléments DOM mis en cache pour de meilleures performances
 */
const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

/**
 * Génère les vignettes de la galerie et ajoute les écouteurs d'événements
 * @description Parcourt le tableau d'images pour créer dynamiquement les vignettes
 * et permettre la navigation entre les images
 */
images.forEach(imageName => {
    const newImage = document.createElement('img');
    
    newImage.setAttribute('src', `./images/${imageName}`);
    newImage.setAttribute('alt', altTexts[imageName]);
    
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener('click', () => {
        displayedImg.src = newImage.src;
        displayedImg.alt = newImage.alt;
    });
});

/**
 * Gère l'obscurcissement/éclairage de l'image principale
 * @description Bascule entre l'état sombre et clair de l'overlay
 * et met à jour le texte du bouton en conséquence
 */
btn.addEventListener('click', () => {
    const isDark = overlay.style.backgroundColor === 'rgba(0, 0, 0, 0.5)';
    overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)';
    btn.textContent = isDark ? 'Darken' : 'Lighten';
});

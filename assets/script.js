
// Création du tableau
const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];
const banner = document.getElementById('banner');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Fonction pour mettre à jour l'image et la tagline
function updateSlide(index) {
    banner.style.backgroundImage = `url(${slides[index].image})`;
    const tagline = document.querySelector('.tagline');
    tagline.innerHTML = slides[index].tagLine;

    // Mettre à jour les dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}
// Fonction pour changer de slide
function changeSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlide(currentIndex);
}
// Navigation avec les flèches
document.querySelector('.arrow_left').addEventListener('click', () => changeSlide(-1));
document.querySelector('.arrow_right').addEventListener('click', () => changeSlide(1));

// Navigation avec les dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
    });
});

// Initialiser le carousel
updateSlide(currentIndex);
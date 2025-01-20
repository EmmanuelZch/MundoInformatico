// ========================
// Variables y constantes
// ========================
const products = [
    {
        title: "Botella Reutilizable de Acero Inoxidable",
        description: "Botella de acero inoxidable de 750 ml, perfecta para mantener tus bebidas frías o calientes durante todo el día. Libre de BPA, segura y duradera.",
        image: "img/product-1.png"
    },
    {
        title: "Set de Utensilios de Cocina de Bambú",
        description: "Este set incluye 7 utensilios de cocina (cuchara, espátula, tenedor, cuchara ranurada, espátula ranurada, etc), hechos de bambú 100% natural.",
        image: "img/product-2.png"
    },
    {
        title: "Bolsas de Compras Reutilizables de Algodón",
        description: "Bolsas de tela resistente, perfectas y cómodas para llevar tus compras diarias. Hechas de algodón orgánico, lavables, reutilizables y duraderas.",
        image: "img/product-3.png"
    }
];

const carouselImages = [
    "img/background-1.png",
    "img/background-2.png",
    "img/background-3.png"
];

let currentIndex = 0; // Índice actual para el carrusel

// ========================
// Funciones
// ========================

// Genera dinámicamente las tarjetas de productos
function generateCards() {
    const productsContainer = document.querySelector(".products"); // Contenedor de productos
    productsContainer.innerHTML = ""; // Limpia el contenedor antes de agregar tarjetas

    products.forEach(product => {
        const cardHTML = `
            <div class="product">
                <h3 class="product__title">${product.title}</h3>
                <p class="product__description">${product.description}</p>
                <img src="${product.image}" alt="${product.title}" class="product__image">
            </div>
        `;
        productsContainer.innerHTML += cardHTML; // Agrega la tarjeta al contenedor
    });
}

// Configura el carrusel de imágenes en la sección "Nosotros"
function setupCarousel() {
    const nosotrosSection = document.querySelector(".section--nosotros"); // Sección del carrusel

    setInterval(() => {
        // Cambia la imagen de fondo cada 4 segundos
        nosotrosSection.style.backgroundImage = `url(${carouselImages[currentIndex]})`;
        currentIndex = (currentIndex + 1) % carouselImages.length; // Actualiza el índice
    }, 4000);
}

// Configura el menú hamburguesa para dispositivos móviles
function setupHamburgerMenu() {
    const toggleButton = document.querySelector(".nav__toggle"); // Botón hamburguesa
    const navMenu = document.querySelector(".nav__menu"); // Menú de navegación

    // Función para alternar el menú
    toggleButton.addEventListener("click", () => {
        // Verifica el ancho de la pantalla antes de aplicar la clase
        if (window.innerWidth <= 767) {
            navMenu.classList.toggle("nav__menu--open");
            // Cambia la posición del botón hamburguesa según el estado del menú
            toggleButton.style.position = navMenu.classList.contains("nav__menu--open") ? "fixed" : "absolute";
        }
    });

    // Función para eliminar la clase si el ancho de la pantalla supera 767px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            navMenu.classList.remove("nav__menu--open");
            toggleButton.style.position = "absolute"; // Asegura que el botón vuelva a su posición predeterminada
        }
    });
}

// ========================
// Inicialización al cargar la página
// ========================
document.addEventListener("DOMContentLoaded", () => {
    generateCards();      // Generar las tarjetas de productos
    setupCarousel();      // Configurar el carrusel
    setupHamburgerMenu(); // Configurar el menú hamburguesa
});

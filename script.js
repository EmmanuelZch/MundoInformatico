
//Variables y constantes

const services = [
    {
        title: "Manejo Del Desarrollo web front-end y back-end",
        description: "Soy un diseñador novato que busca experimentar en la creación de páginas web para todos sus servicios que deseen :).",
        image: "img/service-1.jpg"
    },
    {
        title: "Cursos de HTML",
        description:"Les brindo practicas básicas y sencillas para las personas que quieran aprender a ser desarrolladores web con un curso gratuito para las primeras personas que quieran unirse.",
        image: "img/service-2.jpeg"
    },
    {
        title: "Mantenimiento Correctivo",
        description: "Si tienes algun equipo que haya sufrido alguna falla en cuando al hardware o software, yo les brindo un servicio comodo y seguro y con un precio accesible.",
        image:  "img/service-3.jpg"
    },

];




const carouselImages = [
    "/img/background-1.jpeg",
    "/img/background-2.jpg",
    "/img/background-3.jpeg",
];

let currentIndex = 0; //Indice de la imagen actual en el carrusel


//Funciones

//Genera dinámicamente las tarjetas de productos

function generateCards() {
    const servicesContainer = document.querySelector(".services");//contenedor de productos 
    servicesContainer.innerHTML = ""; //Limpia el contenedor antes de agregar tarjetas

    services.forEach(service => {
        const cardHTML = `
        <div class="service">
            <h3 class="service__title"> ${service.title} </h3>
            <p class="service__description">${service.description}</p>
            <img src="${service.image}" alt="${service.title}" class="service__image>
        </div>
        `;
        servicesContainer.innerHTML += cardHTML; //Agrega la tarjeta al contenedor
        
    });
}



//Configura el carrusel de imágenes en la sección "Nosotros"
function setupCarouse1() {
    const nosotrosSection = document.querySelector(".section--nosotros"); //section de nosotros
    setInterval(() => {
        nosotrosSection.style.backgroundImage = `url(${carouselImages[currentIndex]})`;
        currentIndex= (currentIndex + 1) % carouselImages.length;//actualiza el índice
}, 4000);
}

//Configura el menú hamburguesa para dispositivos móviles
function setupHamburgerMenu() {
    const toggleButton = document.querySelector(".nav__toggle");
    const navMenu = document.querySelector("nav__menu");

    //funcion para alterar el menu
    toggleButton.addEventListener("click", () =>{

        if(window.innerWidth <= 767) {
            navMenu.classList.toggle("nav__menu--open");
            //cambia a la posicion del boton segun el estado del menu
        toggleButton.style.position = navMenu.classList.contains("nav__menu--open") ? "fixed" : "absolute";
        }

    });

        window.addEventListener("resize", () => {
            if(window.innerWidth > 767) {
                navMenu.classList.remove("nav__menu--open");
                toggleButton.style.position = "absolute";//Asegura el boton
            }
    })


}

//Inicializacion al cargar la pagina
document.addEventListener("DOMContentLoaded"), () => {
    generateCards();
    setupCarouse1();
    setupHamburgerMenu();
}


const button = document.querySelector("button");

function action () {
    alert("Hello");
};

button.addEventListener("click", action);
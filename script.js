
//Guardarlo dentro de un div

// document.addEventListener('DOMContentLoaded', () => {

//     const toggleButton = document.querySelector('.main-header__toggle');
//     const menu = document.querySelector('.main-header__menu');


//     if (toggleButton && menu) {
        
//         toggleButton.addEventListener('click', () => {

//             menu.classList.toggle('is-active');
            
//             toggleButton.classList.toggle('is-active');
//         });
//     }
// });

// Adaptación (no guardarlo dentro de un div)

document.addEventListener('DOMContentLoaded', () => {

    const toggleButton = document.querySelector('.main-header__toggle');
    // 1. Usamos querySelectorAll para seleccionar TODOS los elementos
    const menus = document.querySelectorAll('.main-header__menu');

    // 2. Verificamos si se encontró el botón y al menos un menú
    if (toggleButton && menus.length > 0) {
        
        toggleButton.addEventListener('click', () => {

            // 3. Recorremos CADA elemento del menú (el nav y el div)
            menus.forEach(menu => {
                // Y le aplicamos la clase 'is-active' a cada uno
                menu.classList.toggle('is-active');
            });
            
            // Esto es para la animación del botón (las 3 rayitas)
            toggleButton.classList.toggle('is-active');
        });
    }
});


const firebaseConfig = {
  apiKey: "AIzaSy...TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:12345...tu-app-id"
};

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

    const mapContainer = document.getElementById('report-map');

    if (mapContainer && typeof L !== 'undefined') {
        const map = L.map('report-map', {
            scrollWheelZoom: false
        }).setView([-12.0464, -77.0428], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const statusColors = {
            critical: '#e50a17',
            cleanup: '#3fb872',
            progress: '#f6c343'
        };

        const hotspots = [
            {
                coords: [-12.0792, -77.0895],
                title: 'Zona crítica - San Miguel',
                description: 'Residuos acumulados cerca del malecón desde hace 3 días.',
                status: 'critical'
            },
            {
                coords: [-12.0459, -77.0303],
                title: 'Limpieza programada - Cercado',
                description: 'Voluntarios se reúnen el sábado a las 10:00 a. m. en Jr. de la Unión.',
                status: 'cleanup'
            },
            {
                coords: [-12.0185, -76.9728],
                title: 'En seguimiento - Ate',
                description: 'Municipalidad verificando reporte con fotos y coordenadas.',
                status: 'progress'
            },
            {
                coords: [-12.1569, -76.9851],
                title: 'Zona crítica - Villa El Salvador',
                description: 'Basural informal a dos cuadras de la estación María Auxiliadora.',
                status: 'critical'
            },
            {
                coords: [-11.9504, -76.9977],
                title: 'Limpieza comunitaria - Carabayllo',
                description: 'Vecinos coordinan retiro de residuos voluminosos.',
                status: 'cleanup'
            },
            {
                coords: [-12.1238, -77.0300],
                title: 'Zona en seguimiento - Miraflores',
                description: 'Se reportó acumulación de plásticos en el parque María Reiche.',
                status: 'progress'
            },
            {
                coords: [-12.0500, -77.1080],
                title: 'Zona crítica - Callao',
                description: 'Desmonte en avenidas cercanas al puerto requiere retiro urgente.',
                status: 'critical'
            },
            {
                coords: [-12.0483, -76.9449],
                title: 'Jornada de limpieza - La Molina',
                description: 'Municipalidad y vecinos programaron retiro en la laguna La Molina.',
                status: 'cleanup'
            },
            {
                coords: [-12.0208, -77.0806],
                title: 'Zona crítica - San Martín de Porres',
                description: 'Basura acumulada en la Av. Universitaria y calles aledañas.',
                status: 'critical'
            },
            {
                coords: [-12.0275, -77.0166],
                title: 'Reportes en seguimiento - Rímac',
                description: 'Vecinos reportan residuos cerca al Paseo de Aguas; municipalidad en coordinación.',
                status: 'progress'
            },
            {
                coords: [-11.9363, -77.0564],
                title: 'Limpieza comunitaria - Comas',
                description: 'Voluntarios se reunirán en el parque Los Ángeles este domingo.',
                status: 'cleanup'
            },
            {
                coords: [-12.1493, -76.9831],
                title: 'Zona crítica - San Juan de Miraflores',
                description: 'Punto de desmonte informal en Pamplona Baja necesita retiro urgente.',
                status: 'critical'
            },
            {
                coords: [-12.0373, -76.9974],
                title: 'En seguimiento - El Agustino',
                description: 'Colectores vecinales enviaron fotos del cruce entre la Av. Riva Agüero y el Jr. Ancash.',
                status: 'progress'
            },
            {
                coords: [-11.9997, -76.9881],
                title: 'Zona crítica - San Juan de Lurigancho',
                description: 'Residuo doméstico sin recojo a lo largo de la Av. Wiesse.',
                status: 'critical'
            }
        ];

        for (let i = 0; i < hotspots.length; i++) {
            const spot = hotspots[i];
            const markerColor = statusColors[spot.status] || '#3fb872';
            L.circleMarker(spot.coords, {
                radius: 12,
                color: markerColor,
                fillColor: markerColor,
                fillOpacity: 0.8,
                weight: 2
            })
                .addTo(map)
                .bindPopup('<strong>' + spot.title + '</strong><br>' + spot.description);
        }

        L.circle([-12.0516, -77.0338], {
            color: '#3fb872',
            fillColor: '#3fb872',
            fillOpacity: 0.15,
            radius: 1200,
            weight: 1
        }).addTo(map);

        mapContainer.addEventListener('mouseenter', () => {
            map.scrollWheelZoom.enable();
        });
        mapContainer.addEventListener('mouseleave', () => {
            map.scrollWheelZoom.disable();
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

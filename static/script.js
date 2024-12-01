document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (menuButton && sidebar) {
        menuButton.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }

    const userIcon = document.getElementById('user-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuLink1 = document.querySelector('.menu-link1'); 

    if (userIcon) {
        userIcon.addEventListener('click', function (event) {
            if (dropdownMenu) {
                dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
            }
            event.stopPropagation();
        });
    }

    if (menuLink1) {
        menuLink1.addEventListener('click', function (event) {
            dropdownMenu.style.display = 'none';
        });
    }

    if (dropdownMenu) {
        document.addEventListener('click', function (event) {
            if (!dropdownMenu.contains(event.target) && event.target !== userIcon) {
                dropdownMenu.style.display = 'none';
            }
        });
    }
    function actualizarFecha() {
        const fecha = new Date();
        const opciones = {
            weekday: 'long', 
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
            hour: 'numeric', 
            minute: 'numeric', 
            second: 'numeric', 
            hour12: true 
        };

        const fechaFormateada = fecha.toLocaleString('es-ES', opciones); 
        document.getElementById("fecha-real").innerHTML = fechaFormateada;
    }

    setInterval(actualizarFecha, 1000);

    window.onload = actualizarFecha;

    window.onload = function() {
        const productBElements = document.querySelectorAll('.product-b');
        console.log('Elementos encontrados con la clase .product-b:', productBElements);

        productBElements.forEach((element) => {
            element.addEventListener('click', function() {
                console.log('Elemento clickeado');
                window.location.href = '/saldo'; 
            });
        });
    };
})
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("payment-modal");
    const payButton = document.getElementById("pay-button");
    const closeModal = document.getElementById("close-modal");

    payButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

        window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});    

document.addEventListener("DOMContentLoaded", function () {
    const aumentoForm = document.getElementById("aumento-form");

    aumentoForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        alert("Tu solicitud ha sido enviada. Recibirás un correo con el estado de tu solicitud.");

        window.location.href = '/Form1';
    });
});

function confirmarCerrarSesion() {
    return confirm("¿Estás seguro de que deseas cerrar sesión?");
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/static/service-worker.js')
        .then(registration => {
            console.log('Service Worker registrado con éxito:', registration.scope);
        })
        .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
        });
}

document.getElementById('cart-icon').addEventListener('click', function() {
    alert('¿Desea iniciar sesión para continuar?');
});

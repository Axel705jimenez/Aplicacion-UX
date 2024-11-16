document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.getElementById('user-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    userIcon.addEventListener('click', function(event) {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); 
    });

    document.addEventListener('click', function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== userIcon) {
            dropdownMenu.style.display = 'none';
        }
    });
});

const cartButton = document.getElementById('cart-icon');

cartButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userResponse = confirm("¿Desea iniciar sesión para continuar?");
    
    if (userResponse) {
        window.location.href = "/IniciarSesion";
    }
});

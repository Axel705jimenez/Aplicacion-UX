document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

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

    window.onload = function() {
        const productBElements = document.querySelectorAll('.product-b');
        console.log('Elementos encontrados con la clase .product-b:', productBElements);

        productBElements.forEach((element) => {
            element.addEventListener('click', function() {
                console.log('Elemento clickeado');
                window.location.href = 'saldo.html';  // Redirige a saldo.html
            });
        });
    };
    
})    

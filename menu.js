let menu = document.getElementById('icono')
let links = document.querySelector('.links')

// Agregar un evento de clic para mostrar/ocultar el menú
icono.addEventListener('click', () => {
    links.classList.toggle('active');
});
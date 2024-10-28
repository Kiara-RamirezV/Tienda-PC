document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarProducto);
    });
});

function agregarProducto(event) {
    const boton = event.target;
    const producto = boton.closest('.card').querySelector('.card-text').textContent;
    alert(`Producto agregado al carrito: ${producto}`);
}

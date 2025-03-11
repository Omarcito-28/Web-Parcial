function cambiarTamano() {
    const texto = document.getElementById('texto');
    const currentSize = window.getComputedStyle(texto, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) + 2; // Aumentar el tamaño de letra en 2px
    texto.style.fontSize = newSize + 'px';
}

function cambiarColor() {
    const texto = document.getElementById('texto');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const currentColor = texto.style.color;
    
    // Cambiar a un nuevo color aleatorio
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor); // Asegurarse de que el color sea diferente

    texto.style.color = newColor;
}

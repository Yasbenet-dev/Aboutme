document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello, I'm Jose Ulloa"; // Texto a escribir
    let index = 0;
    const speed = 100; // Velocidad de escritura en milisegundos
    const typingText = document.getElementById("typing-text"); // Seleccionamos el elemento

    function typeWriter() {
        if (index < text.length) { // Si aún hay letras por escribir
            typingText.innerHTML += text.charAt(index); // Agrega la letra actual
            index++; // Pasa a la siguiente letra
            setTimeout(typeWriter, speed); // Vuelve a llamar la función después del tiempo definido
        }
    }
    typingText.classList.add("typing"); // Agrega la clase CSS para el cursor
    typeWriter(); // Inicia la animación
});

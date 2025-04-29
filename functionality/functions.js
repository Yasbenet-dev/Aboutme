document.addEventListener("DOMContentLoaded", function () {
    const text = "Hello, I'm Jose Ulloa";
    let index = 0;
    const speed = 100;
    const typingText = document.getElementById("typing-text"); 

    function typeWriter() {
        if (index < text.length) { 
            typingText.innerHTML += text.charAt(index); 
            index++; 
            setTimeout(typeWriter, speed); 
        }
    }
    typingText.classList.add("typing"); 
    typeWriter(); 
});

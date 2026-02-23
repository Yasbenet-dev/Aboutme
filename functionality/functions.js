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

const aboutText =
`{
  "name": "José Ulloa",
  "role": "Ingeniero en Informática (Junior)",
  "focus": ["Data-oriented backend developer en formación con base sólida en modelado y arquitectura."],
  
  "about": "Ingeniero en Informática en etapa inicial profesional, 
    con enfoque en desarrollo backend y estructuración de soluciones basadas en datos. 
    Formación sólida en Modelado de Datos, Arquitectura de Software e Inteligencia de Negocios.

    Me interesa diseñar sistemas bien estructurados, 
    transformar requerimientos en modelos técnicos eficientes y fortalecer experiencia 
    práctica en entornos reales de desarrollo."
  
  "openTo": ["Práctica", "Backend", "Data", "Colaboraciones Técnicas"]
}`;

function typewriter(el, text, speed = 18) {
  el.textContent = "";
  el.classList.add("type-cursor");

  let i = 0;
  const tick = () => {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(tick, speed);
    } else {
      el.classList.remove("type-cursor");
    }
  };
  tick();
}


const codeEl = document.getElementById("aboutCode");

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      typewriter(codeEl, aboutText, 14);
      io.disconnect();
    }
  });
}, { threshold: 0.35 });

io.observe(codeEl);

(() => {
  const els = document.querySelectorAll("section, .box, .about-box, #about-img, #box-home, .project-card");
  els.forEach(el => el.classList.add("reveal"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) en.target.classList.add("is-visible");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
})();

(() => {
  const progress = document.getElementById("scroll-progress");
  const links = Array.from(document.querySelectorAll("nav .links a"));
  const sections = Array.from(document.querySelectorAll("section"));
  const scrollRoot = document.scrollingElement || document.documentElement || document.body;

  const update = () => {
    const max = scrollRoot.scrollWidth - window.innerWidth;
    const current = scrollRoot.scrollLeft;
    const pct = max > 0 ? (current / max) * 100 : 0;
    if (progress) progress.style.width = `${pct}%`;

    // Seccion activa según el centro de la pantalla
    const centerX = current + window.innerWidth / 2;
    let activeId = sections[0]?.id;

    for (const s of sections) {
      const left = s.offsetLeft;
      const right = left + s.offsetWidth;
      if (centerX >= left && centerX < right) { activeId = s.id; break; }
    }

    links.forEach(a => {
      const href = a.getAttribute("href") || "";
      a.classList.toggle("active", href === `#${activeId}`);
    });
  };

  scrollRoot.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

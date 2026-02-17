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

(() => {
  const els = document.querySelectorAll("section, .box, .about-box, #about-img, #box-home");
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

  const update = () => {
    const max = document.body.scrollWidth - window.innerWidth;
    const current = document.body.scrollLeft;
    const pct = max > 0 ? (current / max) * 100 : 0;
    if (progress) progress.style.width = `${pct}%`;

    // Sección activa (centro de viewport)
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

  document.body.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();

export default function initAnimacaoScroll() {
  const section = document.querySelectorAll('[data-anime="scroll"]');

  if (section.length) {
    const windowScroll = window.innerHeight * 0.6;

    function animaScroll() {
      section.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowScroll < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
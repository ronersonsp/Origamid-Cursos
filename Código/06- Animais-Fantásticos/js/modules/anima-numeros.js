
export default function initAnimaNumeros(){
  const numeros = document.querySelectorAll('[data-numero]');

  function animaNumeros() {
    numeros.forEach((numero) =>{
      const total = +numero.innerText;
      const incremento = Math.floor(total / 80);
      const max = 40;
      const min = 25;
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      },(Math.random() * (max - min + 1) + min));
    });
  }

  function handleMutantion(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observeTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutantion);
  observer.observe(observeTarget, {attributes: true});
}

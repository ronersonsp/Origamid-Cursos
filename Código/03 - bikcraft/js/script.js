//Estilo do Menu
const links = document.querySelectorAll('.header-menu a');

links.forEach(function ativarLink(link) {
  if(location.href.includes(link.href)){
    link.classList.add('active')
  }
});


//Itens do Orçamento

const search = new URLSearchParams(location.search);

search.forEach(function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
})


// Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa);

}

perguntas.forEach(function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta)
})


// Bicicletas
const galeria = document.querySelectorAll('.bicicleta-img img');
const galeriaContainer =  document.querySelector('.bicicleta-img');

function trocarImg(event) {
  const img = event.currentTarget;

  const media = matchMedia('(min-width: 1000px)').matches;
  if (media) {
    galeriaContainer.prepend(img);
  }

}

galeria.forEach(function eventoGaleria(img) {
  img.addEventListener('click', trocarImg);
})

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

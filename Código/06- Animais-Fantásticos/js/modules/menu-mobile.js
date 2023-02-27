import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="lista"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function abrirMenu(event) {
      menuList.classList.add('active');
      menuButton.classList.add('active');
      outsideClick(menuList, eventos, () =>{
        menuList.classList.remove('active');
        menuButton.classList.remove('active');
      });
    }
  
    eventos.forEach(userEvent => menuButton.addEventListener(userEvent, abrirMenu));
  }
}
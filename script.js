function show() {
  let menuMobile = document.querySelector('.header-bar');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.responsive-img').src = "./assets/icon-menu.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.responsive-img').src = "./assets/icon-close-menu.svg";
  }
}
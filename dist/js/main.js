const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuPortrait = document.querySelector('.menu-portrait');
const navItems = document.querySelectorAll('.nav-item');

//set initial menu state

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuPortrait.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuPortrait.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}

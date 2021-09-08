const menuBtn = document.querySelector('.menu-btn')
      menu = document.querySelector('nav ul')
      exitBtn = document.querySelector('.exit-btn');

// Sidemenu
menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';  // original values is translateX(100%)
})
// Sidemenu button closes the sidebar
exitBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
})
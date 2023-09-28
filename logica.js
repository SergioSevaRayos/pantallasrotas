const navBar = document.querySelector('.header');
let prevScrollPos = 0;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  
  if (currentScrollPos > prevScrollPos) {
    navBar.style.top = "-100px"; // Oculta la barra de navegación al hacer scroll hacia abajo
  } else {
    navBar.style.top = "0"; // Muestra la barra de navegación al hacer scroll hacia arriba
  }

  prevScrollPos = currentScrollPos;
});



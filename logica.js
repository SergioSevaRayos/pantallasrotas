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

document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Obtener las respuestas del formulario y calcular la puntuación total
  var totalScore = 0;
  for (var i = 1; i <= 10; i++) {
      var answer = parseInt(document.querySelector('input[name="q' + i + '"]:checked').value);
      totalScore += answer;
  }
  
  // Interpretación de los resultados
  var interpretation = "";
  if (totalScore <= 2) {
      interpretation = "Uso saludable.";
  } else if (totalScore <= 5) {
      interpretation = "Uso moderado, pero podría haber áreas de mejora.";
  } else {
      interpretation = "Uso problemático, considera reducir el tiempo en dispositivos móviles y establecer límites.";
  }

  // Mostrar el resultado usando SweetAlert2
  Swal.fire({
      title: 'Resultado del Cuestionario',
      html: '<p>Tu puntuación es: ' + totalScore + '</p><p>' + interpretation + '</p>',
      icon: 'info'
  });
});

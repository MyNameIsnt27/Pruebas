// Guardamos el número en una variable
let contador = 0;

// Buscamos los elementos del HTML
let texto = document.getElementById("contador");
let boton = document.getElementById("boton");

// Cuando haces click en el botón
boton.onclick = function() {

  // Sumamos 1
  contador = contador + 1;

  // Actualizamos el número en pantalla
  texto.textContent = contador;
};

//  1. Buscar elementos del HTML
let texto = document.getElementById("contador");
let texto2 = document.getElementById("sumador");
let boton = document.getElementById("boton");
let boton2 = document.getElementById("boton2");
let reset = document.getElementById("reset");
let sumador  = document.getElementById("sumador");
sumador = 1;

//  2. Intentar cargar valor guardado
let guardado = localStorage.getItem("contador");

// 3. Crear variable contador
let contador;

// 4. Comprobar si había algo guardado
if (guardado !== null) {
  // Si hay valor → convertirlo a número
  contador = parseInt(guardado);
} else {
  // Si no hay nada empezar en 0
  contador = 0;
}

// 5. Mostrar valor inicial en pantalla
texto.textContent = contador;

//  6. Cuando haces click en sumar
boton.onclick = function() {

  // Sumar 1
  contador = contador + sumador;

  // Actualizar pantalla
  texto.textContent = contador;

  // Guardar en localStorage
  localStorage.setItem("contador", contador);
};

//  7. Botón reset
reset.onclick = function() {

  // Volver a 0
  contador = 0;
  sumador = 1;

  // Actualizar pantalla
  texto.textContent = contador;
  texto2.textContent = sumador;


  // Borrar guardado
  localStorage.removeItem("contador");
  localStorage.removeItem("sumador");
};

boton2.onclick = function() {

  // Sumar 1
  sumador = sumador + 1;
  
  // Actualizar pantalla
  texto2.textContent = sumador;


  // Guardar en localStorage
  localStorage.setItem("sumador", sumador);
};

// =======================
//  ELEMENTOS HTML
// =======================

let texto = document.getElementById("contador");
let texto2 = document.getElementById("sumador");
let textoauto = document.getElementById("auto");
let textocoste = document.getElementById("coste");

let boton = document.getElementById("boton");
let boton2 = document.getElementById("boton2");
let botonauto = document.getElementById("botonauto");
let reset = document.getElementById("reset");


// =======================
//  VARIABLES
// =======================

let contador = 0;
let sumador = 1;
let auto = 0;
let coste = 15;


// =======================
//  CARGAR DATOS
// =======================

let guardado = localStorage.getItem("contador");
if (guardado !== null) contador = parseInt(guardado);

let guardado2 = localStorage.getItem("sumador");
if (guardado2 !== null) sumador = parseInt(guardado2);

let guardadoauto = localStorage.getItem("auto");
if (guardadoauto !== null) auto = parseInt(guardadoauto);

let guardadocoste = localStorage.getItem("coste");
if (guardadocoste !== null) coste = parseInt(guardadocoste);


// =======================
//  MOSTRAR EN PANTALLA
// =======================

texto.textContent = contador;
texto2.textContent = sumador;
textoauto.textContent = auto;
textocoste.textContent = coste;


// =============================
//  FUNCIONES (ahorrar codigo)
// =============================

function actualizarUI() {
  texto.textContent = contador;
  texto2.textContent = sumador;
  textoauto.textContent = auto;
  textocoste.textContent = coste;
}

function guardar() {
  localStorage.setItem("contador", contador);
  localStorage.setItem("sumador", sumador);
  localStorage.setItem("auto", auto);
  localStorage.setItem("coste", coste);
}

// =======================
//  BOTÓN CLICK
// =======================

boton.onclick = function() {
  contador = contador + sumador;

  texto.textContent = contador;

  localStorage.setItem("contador", contador);                                                             //SEIS SIETE 676767676767
};


// =======================
//  BOTÓN MEJORA
// =======================

boton2.onclick = function() {

  if (contador >= coste) {
    contador = contador - coste;
    sumador = sumador + 1;
    coste = coste + 20;
  }

 actualizarUI();
 guardar();
 
};


// =======================
//  BOTÓN AUTOCLICK
// =======================

botonauto.onclick = function() {

  if (contador >= (coste + 20)) {
    contador = contador - (coste + 20);
    auto = auto + 1;
    coste = coste + 20;
  }

  actualizarUI();
  guardar();
};


// =======================
//  AUTO CLICK TIEMPO
// =======================

setInterval(function() {

  contador = contador + auto;

  texto.textContent = contador;

  localStorage.setItem("contador", contador);

}, 1000);


// =======================
//  RESET
// =======================

reset.onclick = function() {

  contador = 0;
  sumador = 1;
  auto = 0;
  coste = 15;

  actualizarUI();
  guardar();
};
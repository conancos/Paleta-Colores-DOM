const boton1 = document.querySelector("#me-gusta");
const boton2 = document.getElementById("boton-color");
const codigo = document.getElementById("colorNum");
const nav_bar = document.getElementById("nav-bar");

let colorAleatorio = "#3300AA"; // Valor inicial

function generarColorAleatorio() {
  let digitos = "0123456789ABCDEF";
  let codigoHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    codigoHex += digitos[ indiceAleatorio ];
  }
  return codigoHex;
}

// Evento de escucha en botón "Generar Color"
boton2.addEventListener("click", function () {
  colorAleatorio = generarColorAleatorio();
  
  codigo.innerText = colorAleatorio;
  document.body.style.background = colorAleatorio;
  boton1.style.backgroundColor = colorAleatorio;
  
});


// Gran evento
boton1.addEventListener("click", function () {
  const nuevoBoton = document.createElement('button');  
  nuevoBoton.classList.add("favoritos");
  
  // Color de fondo del nuevo botón según el color aleatorio actual.
  nuevoBoton.style.backgroundColor = colorAleatorio;
  nuevoBoton.style.color = "#fff";
  nuevoBoton.innerText = colorAleatorio;

  // Evento para recuperar el color del fondo general, almacenado en favorito.
  nuevoBoton.addEventListener("click", function () {
    document.body.style.background = nuevoBoton.style.backgroundColor;
    boton1.style.backgroundColor = nuevoBoton.style.backgroundColor;
    codigo.innerText = nuevoBoton.innerText;
  });

  // Evento de hover para cambiar el shadow
  nuevoBoton.addEventListener("mouseover", function () {
    nuevoBoton.style.boxShadow = "0 0 10px 4px " + nuevoBoton.style.backgroundColor;
  });
  // Evento para retirar el shadow cuando el mouse se valla
  nuevoBoton.addEventListener("mouseout", function () {
    nuevoBoton.style.boxShadow = "none";
  });

  // Evento para remover con click derecho el botón favorito deseado:
  nuevoBoton.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    nuevoBoton.remove()
  })

  nav_bar.appendChild(nuevoBoton);
});
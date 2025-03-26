function boton1() {
  document.querySelector("#panel").style.backgroundColor = "green";
}

function boton2() {
  document.querySelector("#panel").style.backgroundColor = "rgb(17, 0, 255)";
}

function asociamePorFavor() {
  document.querySelector("#panel").textContent =
    "Gracias por asociar la función al botón 3!";
}



function calcularLetrasTitulo() {
  // 1. Accede a la propiedad textContent del nodo h1. Guarda esa información en una variable
  let textH1 = document.querySelector("#title").textContent;
  // 2. Usa el método adecuado para obtener el número de carácteres del string en textContent. Pon ese valor en el textContent del #panel
  document.querySelector("#panel").textContent = textH1.length;
}
document.querySelector("#panel").addEventListener('click', calcularLetrasTitulo);

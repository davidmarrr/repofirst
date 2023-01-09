//PROBLEMA PER A ESBORRAR-LA AMB REMOVECHILD, PER QUE BREAK NO FUNCIONA  I AFEGIR NOVES CARACTERISTIQUES CSS A LA TAULA AMB .setAttribute

bototaula.addEventListener("click", ()=> {
// Obtener la referencia del elemento body
var body = document.getElementsByClassName("espaitaula")[0];

// Crea un elemento <table> y un elemento <tbody>
var taula  = document.createElement("table");
var marctaula = document.createElement("tbody");

// Crea las celdas
for (var i = 1; i < 2; i++) {
// Crea las hileras de la tabla
var filera = document.createElement("tr");
if (i === 2) { break; }

for (var j = 1; j < 2; j++) {
  // Crea un elemento <td> y un nodo de texto, haz que el nodo de
  // texto sea el contenido de <td>, ubica el elemento <td> al final
  // de la hilera de la tabla
  var celda = document.createElement("td");
  var textoCelda = document.createTextNode("Text Fila "+i+", Text columna "+j);
  celda.appendChild(textoCelda);

  filera.appendChild(celda);
  if (j === 2) { break; }
}

// agrega la hilera al final de la tabla (al final del elemento tblbody)
marctaula.appendChild(filera);
}

// posiciona el <tbody> debajo del elemento <table>
taula.appendChild(marctaula);
// appends <table> into <body>
body.appendChild(taula);
// modifica el atributo "border" de la tabla y lo fija a "2";

taula.setAttribute("border-collapse", "collapse");

});

var botoborra = document.getElementById("botoborra");


botoborra.addEventListener("click", ()=> {

marctaula.remove();
})
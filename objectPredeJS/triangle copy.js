let $bototri = document.getElementById("bototri")
var base;
var altura;
var error = ""

$bototri.addEventListener('click', triangle);

function triangle(){
    do{base = parseFloat(prompt(`${error}Introdueix l'alçada del triangle`))
    error = `Només xifres numériques, si us plau. `;}
while(isNaN(base) || base == null)
error="";
do{
    altura = parseFloat(prompt(`${error}Introdueix l'alçada del triangle`))
    error = `Només xifres numériques, si us plau. `;}
while(isNaN(altura) || altura == null)
error="";
var areat = ((base * altura)/2);
document.getElementById("triarea").innerHTML = `La superficie del triangle és de ${areat} unitats quadrades`
}



/* var paraula = prompt("Escriu una paraula de més de 10 caràcters"); */
function transforma(){

let paraula = document.getElementById("texte").value; /* EL VALUE ENS HO COL.LOCA AL CAMP VALUE DE l'ID TEXTE */
var llarg = paraula.length;
const mostra=document.getElementById("mostra")

if (paraula.length > 10){
    let extret = paraula.substr(llarg-5,llarg);
    let resultat = `Texte introduit: ${paraula} i si extraiem els seus cinc últims caràcters, aquests son: ${extret}`;
    mostra.innerHTML=resultat;
}else
{mostra.innerHTML=("te menys de 10 caràcters")}
}
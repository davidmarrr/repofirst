let $botop = document.getElementById("mesuresp");

var ample = screen.width;
var alt = screen.height;
var diago = Math.sqrt(ample*ample + alt*alt).toFixed(2);



$botop.addEventListener('click', mostra);
function mostra(){
var mesures = document.getElementById("mesurespant").innerHTML = `L'ample és de ${ample} píxels, l'altura és ${alt} píxels, i la diagonal ${diago} píxels`;
/* if(!mesures) {
    return true;
    }
    if (mesures.style.display == "none") {
    mesures.style.display = "block"
    } else {
    mesures.style.display = "none"
    };
    return true; */
  }; 


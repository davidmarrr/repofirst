const introText = document.getElementById("textstring");
const show= document.getElementById("show");


/* function guarda(){
    var stringer = introText.toString();
    console.log(stringer);

} */

function numCar(){
    let ncar=introText.value;
   
    let largo=ncar.length;
    console.log(ncar,largo);
    show.innerHTML= `El teu text te ${largo} caràcters`;
}
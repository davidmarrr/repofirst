const introText = document.getElementById("textstring");
const show= document.getElementById("show");


function numCar(){
    let ncar=introText.value;
    let largo=ncar.length;
    console.log(ncar,largo);
    show.innerHTML= `El teu text te ${largo} caràcters`;
}

function cursiva(){

 introText.style.fontStyle = "italic";
}

function negrita(){

 introText.style.fontWeight = "bold";
}

function rojo(){

    introText.style.color = "red";
   }

function gran(){

    introText.style.fontSize = "150%";
   }

function tacha(){

    introText.style.textDecoration = "line-through";
   }

   function borra(){
    introText.value = "";
   }
   

var cont;
var resul;

/* var num = parseInt(prompt("Introdueix una xifra i selecciona el bucle")) */
do {var num = parseInt(prompt("Introdueix una xifra i selecciona el bucle"));
} while (isNaN(num));


/*     FOR */
let $botofor = document.getElementById("botofor")    

$botofor.addEventListener('click', numfor);
/* let num = parseInt(prompt("Introdueix una xifra")); */
function numfor(){    
    for (cont =num; cont>0; cont--) {
     
        console.log(cont);
        
    }}

/*     WHILE */
let $botow = document.getElementById("botow")    

$botow.addEventListener('click', numwhile);
/* let num = parseInt(prompt("Introdueix una xifra")); */
function numwhile(){
    while (num>0){ 
        num--
        console.log(num)
    }}

/*     DO WHILE */
let $botodw = document.getElementById("botodw")    

    $botodw.addEventListener('click', numdwhile);
/*    let num = parseInt(prompt("Introdueix una xifra")); */
    function numdwhile(){
    do{
        num--
        console.log(num)
    }
    while (num>0)
    console.log(num)}

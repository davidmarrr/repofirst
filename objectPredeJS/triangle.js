

var $bototri = document.getElementById("bototri")


var $botobase = document.getElementById("botobase")
$botobase.addEventListener('click', ()=> {
var base = document.getElementById("base").value;
if (isNaN(base) || base == null){
    document.getElementById("triarea").innerHTML = `${base} no és una xifra vàlida`
}else{
var base = parseFloat(base);
console.log(base);
document.getElementById("triarea").innerHTML = `Xifra validada`};
});

var $botoalt = document.getElementById("botoalt")
$botoalt.addEventListener('click', ()=> {
var altura = document.getElementById("altura").value;
if (isNaN(altura) || altura == null){
    document.getElementById("triarea").innerHTML = `${altura} no és una xifra vàlida`
}else{
var base = parseFloat(altura);
console.log(altura);
document.getElementById("triarea").innerHTML = `Xifra validada`};
});


$bototri.addEventListener('click', ()=>{
console.log(base);
console.log(altura);
var areat = parseFloat((parseFloat(base) * parseFloat(altura))/2);
document.getElementById("triarea").innerHTML = `La superficie del triangle és de ${areat} unitats quadrades`
})



let $botoale = document.getElementById("aleatori")

$botoale.addEventListener('click', numaleat);

function numaleat(){
let aleat = Math.floor(Math.random()*(10)+1);

document.getElementById("numeret").innerHTML = aleat}
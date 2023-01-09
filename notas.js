do{var nota1 = parseFloat(prompt("Introdueix la nota"));

if(nota1 <5){
    alert(`Amb un ${nota1} estàs suspés`);
}
else if (nota1 >=5 && nota1<6){
    alert(`Amb un ${nota1} estàs aprovat`);
}
else if (nota1 >=6 && nota1<7){
    alert(`Amb un ${nota1} tens un bé`);
}
else if (nota1 >=7 && nota1<8){
    alert(`Amb un ${nota1} tens un notable`);
}
else if (nota1 >=8 && nota1<10){
    alert(`Amb un ${nota1} tens un excel·lent`);
}
else{alert(`Introdueix una xifra numèrica, si us plau`);
}
}while(isNaN(nota1) || nota1 == null )

do{
var nota2 = parseFloat(prompt("Introdueix la nota de la revàlida"));

var mitja = (nota1 + nota2)/2;

if(mitja<5){
    alert(`Tens un ${mitja} de mitja, estàs suspés`);
}
else if (mitja>=5 && mitja<6){
    alert(`Amb un ${mitja} de mitja estàs aprovat`);
}
else if (mitja>=6 && mitja<7){
    alert(`Amb un ${mitja} de mitja tens un bé`);
}
else if (mitja>=7 && mitja<8){
    alert(`Amb un ${mitja} de mitja tens un notable`);
}
else if (mitja>=8 && mitja<10){
    alert(`Amb un ${mitja} de mitja tens un excel·lent`);
}
else{alert(`Introdueix una xifra numèrica, si us plau`);
}}while(isNaN(nota2) || nota2 == null)


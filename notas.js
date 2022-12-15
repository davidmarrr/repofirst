var nota1 = parseFloat(prompt("Introdueix la nota"));

if(nota1 >=5 && nota1<6){
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
else{alert(`Tens un ${nota1}, estàs suspés`);
}

var nota2 = parseFloat(prompt("Introdueix la nota de la revàlida"));

var mitja = (nota1 + nota2)/2;

if(mitja>=5 && mitja<6){
    alert(`Amb un ${mitja} estàs aprovat`);
}
else if (mitja>=6 && mitja<7){
    alert(`Amb un ${mitja} tens un bé`);
}
else if (mitja>=7 && mitja<8){
    alert(`Amb un ${mitja} tens un notable`);
}
else if (mitja>=8 && mitja<10){
    alert(`Amb un ${mitja} tens un excel·lent`);
}
else{alert(`Tens un ${mitja}, estàs suspés`);
}


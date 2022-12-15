var numero = parseInt(prompt("Endevina una xifra, si us plau"));
var i = 0;


do {
    i++
    numero = parseInt(prompt(`El número que has introduït és menor que la xifra a endevinar, duus ${i} intent(s). Prova-ho de nou`));
    }
while (numero<50)

alert(`${numero} major o igual que la xifra a endevinar, ho has aconseguit en ${i} intent(s)`);

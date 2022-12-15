var num1 = parseInt(prompt("Introdueix una primera xifra, si us plau"));
var num2 = parseInt(prompt("Introdueix una segona xifra"));

if (!Number(num1) || !Number(num2)){
    alert("Introdueix un número, no lletres");

}
else{
    if(num1>num2){
        alert(`${num1} és major que ${num2}`);
    }
    else  if(num1<num2){
        alert(`${num2} és major que ${num1}`);
    }
    else{
        alert(`${num1} i ${num2} son iguals`);
    }
}

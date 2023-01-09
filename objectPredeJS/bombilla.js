var foto = "apagada";

function onOff(){
var marc =  document.getElementById('bombeta');
if(marc.src.match("apagada")){
  marc.src = "../imgs/encendida.gif";
}else{
  marc.src = "../imgs/apagada.gif";
}

}

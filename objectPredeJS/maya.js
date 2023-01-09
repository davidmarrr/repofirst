var $botomaya = document.getElementById("botomaya");
$botomaya.addEventListener('click', calcumaya);
function calcumaya(){
var nacimiento = new Date(2012, 21, 12)
var hoy = new Date()

var tiempoPasado= hoy - nacimiento

var segs = 1000;
var mins = segs * 60;
var hours = mins * 60;
var days = hours * 24;
var months = days * 30.416666666666668;
var years = months * 12;



var anos = Math.floor(tiempoPasado / years);

tiempoPasado = tiempoPasado - (anos * years);
var meses = Math.floor(tiempoPasado / months)

tiempoPasado = tiempoPasado - (meses * months);
var dias = Math.floor(tiempoPasado / days)

tiempoPasado = tiempoPasado - (dias * days);
var horas = Math.floor(tiempoPasado / hours)

tiempoPasado = tiempoPasado - (horas * hours);
var minutos = Math.floor(tiempoPasado / mins)

tiempoPasado = tiempoPasado - (minutos * mins);
var segundos = Math.floor(tiempoPasado / segs)

tiempoPasado = tiempoPasado - (segundos * segs);
var milis = Math.floor(tiempoPasado / segs)

document.getElementById("showmaya").innerHTML =`Han pasado ${anos} años, ${meses} meses,  ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos y ${milis} milisegundos desde que, según los mayas, se debía terminar el mundo`;
}

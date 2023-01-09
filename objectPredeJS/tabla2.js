
botogenera.addEventListener("click", ()=> {

var fileres = document.getElementById("numfiles").value;
var columnotes = document.getElementById("numcolus").value;


for (let i = 0; i < fileres; i++){
  var fileranova = document.getElementById('taulaedit').insertRow(i);

  for (let j=0; j< columnotes; j++){
    var celdanova = fileranova.insertCell(j);

    celdanova.innerHTML = 'Nova cel.la'
  }
}
});

botoesborra.addEventListener("click", ()=> {

 taulaedit.remove();});

function finestra(){

var contFin = `<!DOCTYPE html>
    <html>
        <head>
            <title>Avís</title>
        </head>
        <body>
            <h1>ALERTA PER PLUJES</h1>
            <button type="submit" onClick="tanca()">Tanca la finestra</button>
            <script>
            function tanca()
            {window.close();}
            </script>
        </body>
    </html>`;

var fines = open("",'Avís','height=500,width=500s,screenX=400,screenY=300');

fines.document.write(contFin);
    }
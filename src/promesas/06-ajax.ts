/**
 * no se puede ejecutar ya que no tengo el mamp para correrlo
 */
(() => {
    function leeArchivo(archivo) {
        return new Promise((responder, rechazar) => {
            var req = new XMLHttpRequest();
            req.open("GET", archivo);
            req.send();

            req.onload = function () {
                //verificamos lectura
                if (req.status == 200) {
                    responder(req.response);
                } else {
                    rechazar(req.statusText);
                }
            }

            req.onerror = function () {
                rechazar("Error en la conexión");
            }
        });
    }

    leeArchivo("alumnos123.json").then(respuesta => {
        console.log("Respuesta", respuesta);
    }).catch(error => {
        console.log("Error: ", error);
    });


})();





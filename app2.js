"use strict";
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "mensaje"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activaste el " + objeto + " justo " + momento;
    }
    else {
        mensaje = quien + " activaste el " + objeto;
    }
    alert(mensaje);
}
activar("Flaquis", "Señal", "Ahora");

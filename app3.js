"use strict";
// let hulk = {
//     nombre: "Hulk",
//     smash(){
//         setTimeout(() => console.log(this.nombre + " Aplasta!!"), 1500);
//     }
// }
//hulk.smash();
// let avenger = {
//     nombre1:"Steve",
//     clave: "Cap America",
//     poder: "Droga"
// }
// let { nombre1, clave, poder } = avenger;
// console.log(nombre1, clave, poder);
// let avenger:string[] = ["Thor", "Steve", "Hulk", "Tony"];
// let[ uno, dos, tres, cuatro ] = avenger;
// console.log( tres );
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //Si todo va bien
        //resolve();
        //si todo va de coña
        reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Todo OK");
}, function () {
    console.error("Todo Mal");
});
console.log("paso 2");

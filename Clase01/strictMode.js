/* Modo Estricto
No se pueden usar variables no declaradas. Fuera de una función tiene ámbito global.
Dentro de una función, tiene ámbito local. Es decir, puede usarse modo estricto sólo
dentro de una función y tendrá efecto allí únicamente. */
//si comentamos las líneas 7 y 8, la ejecución se detiene. Si luego comentamos el modo estricto, vuelve a correr
"use strict"
let persona;
let nacimiento;
info()

function info() {
    persona = "Federico"
    nacimiento = 2000
    console.log(persona, "nació en", nacimiento)
}
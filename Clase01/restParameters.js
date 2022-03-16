//La sintaxis de los parámetros rest permite representar un número
// indefinido de argumentos como un array
//En el estándar ES5 se accedía a esos argumentos así:

function varArgs(a, b) {
    console.log("Argumentos explícitos")
    console.log("a:", a)
    console.log("b:", b)
    console.log("Resto de los argumentos", arguments) //retorna un objeto
}


varArgs(12, "Tortila española", 200, null, true, "mi tia marta")

//A partir de ES6
//*rest es un nombre convencional

function varArgs2(a, b, ...rest) {
    console.log("Argumentos explícitos")
    console.log("a:", a)
    console.log("b:", b)
    console.log("Resto de los argumentos", rest) //retorna un array
}
varArgs2(12, "Tortila española", 200, null, true, "Viendo a Biondi")

//ECMAScript 2018. Agrega rest props a los objetos.
//Podemos desestructura un objeto y recoger el resto de los propiedades y sus valores

let numbers = {
    x: 1,
    y: 2,
    a: 3,
    b: 4,
    c: 5
};

let { x, y, ...z } = numbers
console.log("x:", x, typeof x)
console.log("y:", y, typeof y)
console.log("z:", z, typeof z)
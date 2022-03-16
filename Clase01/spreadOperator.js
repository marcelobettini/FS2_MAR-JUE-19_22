/* Spread Operator (Operador de Propagación)
   Nos permite copiar rápidamente todo o una parte de un array u objeto existente dentro de otro array u objeto */

const numbers = [1, 2, 3, 4, 5, 6];
const [uno, due, ...rest] = numbers;
console.log("numbers:", numbers) //1, 2, 3... 6
console.log("uno:", uno) //?
console.log("due:", due) //?
console.log("rest:", rest) //?

const myVehicle = {
    make: "Ford",
    model: "Mustang",
    color: "red",
};

const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
};
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle)

/* En el siguiente caso, no podemos pasar un array como parámetro,
pero sí los números que lo componen. Lo resolvemos con un spread operator*/
const arrNums = [10, 30, 19, 90]
console.log(Math.max(10, 30, 19, 90)) //90
console.log(Math.max(...arrNums)) //90

/* Podemos concatenar dos arreglos */
const arrNames = ["Aníbal", "Gertrudis"]
const arrCombined = [...arrNums, ...arrNames]

const saludo = "Hola Manola"
console.log([...saludo])
console.log(...saludo)
console.time("timer")
let perro = {
    nombre: "Lupin",
    color: "Negro",
    hembra: true,
    edad: 5,
};

console.table(perro)
console.error("error ha ocurrido")
console.warn("Advertencia", { mensaje: "Se rompió todo, que vengan los bomberos" })
setTimeout(() => {
    console.timeEnd("timer")
}, 3000);

for (let i = 0; i < 5; i++) {
    console.count("Iteration #")
}

console.log("\033[034mAhora soy de color...") //octa escape sequence (colores)
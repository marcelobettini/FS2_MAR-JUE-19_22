//HOISTING
saludar("Lorca") //esto se ejecuta aunque la función sea declarada más tarde...
    // despedir("García") //no puede ejecutar la función flecha antes de su inicialización
previa = "esto se asigna antes de la declaración de la variable"
previa2 = "aquí habrá un error"

function saludar(param) {
    console.log(`Hola ${param}`)
}


const despedir = (param) => {
    console.log(`Hasta luego ${param}`)
}

var previa
let previa2
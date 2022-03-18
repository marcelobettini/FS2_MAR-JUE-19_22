/* CLASES son plantillas (templates) para la creación de objetos. Una clase es un tipo de función. Siempre agregamos un método llamado constructor().
Los nombres de clases comienzan en mayúsculas
*/

/* Qué es this?
 * Se refiere a un objeto... pero, a qué objeto???
 * Si estamos en un método de objeto this se refiere al objeto.
 * Cuando this está solo o dentro de una función, se refiere al Objeto Global
 * Si estamos en una función, pero habilitamos strict mode, es undefined
 * En un evento, this hace referencia al elemento que recibe el evento
 */

console.log(this)
class Dog {
    constructor(name, breed, age, bark) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.bark = bark
    }
    speak() {
        return `${this.name} says ${this.bark}`
    }
}
//Ahora que tenemos una clase, podemos usarla para crear objetos. Sepan que el método constructor se llama automáticamente cuando se crea un nuevo objeto.
const dogA = new Dog("Pepi", "Mestizo", 6, "grrr")
const dogB = new Dog("Amancay", "White Shepperd", 2, "miau")

/*El método constructor es especial: 
se ejecuta automáticamente cuando se crea un nuevo objeto y se usa para inicializar las propiedades del objeto que creamos con el molde (o sea, la clase)
*/

//Herencia.
//La palabra clave extends se usa para crear una clae hija de otra clase (padre);
//La clase hija hereda todos los métodos de la clase padre. La herencia es útil para reutilizar código.
//

console.log(Date()) //no quiero el formato completo

class DateFormatter extends Date {
    getFormattedDate() {
        const meses = [
            "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
        ];
        return `${this.getDate()}-${meses[this.getMonth()]}-${this.getFullYear()}`;
    }
}
const ahora = new DateFormatter(Date()).getFormattedDate()
console.log(ahora)

//--------------------------------------------------------

//Otro ejemplo

class Zapatilla {
    constructor(marca) {
        this.marca = marca;
    }
    eslogan() {
        return "Para correr como el viento, comprate estas altas llantas " + this.marca;
    }
}

class Modelo extends Zapatilla {
    constructor(marca, modelo) {
        super(marca); //herencia
        this.modelo = modelo //esto llega como argumento
    }
    esloganCompleto() {
        return this.eslogan() + " modelo " + this.modelo //this.eslogan llega por herencia. Podemos usar super.eslogan(), funcionará de la misma forma
    }
}

let misZapas = new Modelo("Adidas", "Correcaminos");
console.log(misZapas.eslogan())


//GETTERS y SETTERS
/*Estos métodos se usan para asignar y obtener atributos de un objeto.
Los nombres de los setters y getters no pueden ser === al de las propiedades porque se produciría un bucle infinito, al acceder a la prop invocaríamos al método, que a su vez accede a la prop, la prop llama al método... 😓*/

class Notebook {
    constructor(brand, model) {
        this._brand = brand;
        this._model = model;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
}
const miLaptop = new Notebook("Drean", "Wonderful Chiche")

const myself = {
    firstName: "Marcelo",
    middleName: "Eduardo",
    lastName: "Bettini",

    //getter me muestra los valores 
    get fullName() {
        return `${this.firstName} ${this.middleName} ${this.lastName} `
    },

    //setter me permite mutar los valores
    set fullName(values) {
        const names = values.split(" ");
        this.firstName = names[0];
        this.middleName = names[1];
        this.lastName = names[2];
    },
}

//si queremos el nombre completo
const { firstName, middleName, lastName } = myself
console.log(firstName, middleName, lastName)

/*Métodos estáticos
Un método estático de clase se llama directamente sin crear una instancia de esa clase. No es necesario crer un objeto para llamar a un método estático */

class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    static area(base, height) {
        return base * height
    }
    static perimeter(length, width) {
        return 2 * (length + width);
    }
}

const rectangleA = new Rectangle(4, 3);
// console.log(rectangleA.area(4, 3))//error
// console.log(rectangleA.perimeter(4, 3)) //error

console.log(`Area es ${Rectangle.area(2, 3)}`) //me refiero a la clase, no a una instancia particular de la clase.
console.log(`Perímetro es ${Rectangle.perimeter(2, 3)}`)
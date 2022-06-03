"use strict";
// //TIPADO ESTÁTICO
// //TS infiere el tipo de las variables de acuerdo al tipo del valor durante la inicialización, al igual que JS, pero a diferencia de este, TS no permite cambiar el tipo más adelante
// let animal = "Giraffe";
// let age = 20;
// let isMammal = true;
// //type error
// // animal = 45
// // age = false
// // isMammal = "Giraffe"
// //Si definimos una función con sintaxis JS pura, sin tipos, podemos ver rápidamente resultados inesperados. El param diameter es inicializado con el tipo any, por ende, aceptar cualquier tipo de valor.
// const circumference = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circumference(30)); //94.algo... todo ok
// //console.log(circumference("treinta")); // NaN... todo mal
// //Para resolver este problema, tenemos la definición explícita de tipo para el param de la función.
// const circum = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circum(30)); //94.algo... todo ok
// //console.log(circum("treinta")); // TS me advertirá sobre el error de tipo
// //INFERENCIA DE TIPOS EN ARRAYS Y OBJETOS (implícito según valor de incialización)
// //Vemos primero una aproximación con tipado implícito
// const names = ["Marce", "Pato", "Giani"];
// //la versión de tipado explícito sería:
// // const names: string[] = ["Marce", "Pato", "Giani"]
// names.push("Pepillo"); //ok
// //names.push(false) //error de tipo
// const mixed = [false, 340, true];
// mixed.push(true); //ok
// mixed.push(230, 67, false); //ok
// //mixed.push("something else") //type error
// //Ahora con objetos
// let hero = {
//   name: "Super Duper",
//   age: 80,
//   isActive: true,
//   powers: ["super speed", "tango dancing", "kinda cute"],
// };
// hero.name = "Wonder Woman"; //Ok
// //hero.name = 340 //type error
// //hero.haircolor="green and blue" //Warning... No podemos agregar props luego de haber definido el objeto
// //Pero sí podemos cambiar todos los valores
// hero = {
//   name: "Loco Arts Carlitox",
//   age: 34,
//   isActive: false,
//   powers: ["super cool", "knows mechanics"],
// };
// //TIPOS EXPLÍCITOS
// let nom: string = "Felipe";
// let num: number = 200;
// let yesNo: boolean = false;
// const dogs: string[] = ["Bobby", "Puppy", "Laika"];
// let cats: string[] = [];
// cats.push("Ratatouille");
// //Union Type (Lo vimos antes de forma implícita, cuando creamos arreglo que podía contener dos o más tipos)
// let mixed2: (string | boolean)[] = [];
// //mixed2.push(4) //error de tipo
// mixed2.push(true, false, "Lorenzo", false, "Cherubini");
// //Object Type. Este puede ser un tanto engañoso... porque en JS todo (o casi todo) es un objeto
// let person: object;
// person = { uid: 1, name: "Lorenza" };
// //person = "Guantanamera" //error de tipo
// //Esto es posible, aunque quizá no deseado. Y ocurre porque los arreglos son en el fondo un objeto de tipo array
// person = ["Lunes", "Martes"];
// const arr: string[] = [];
// //Any Type (Este tipo admite cualquier -any- tipo de dato)
// let poli: any;
// poli = false;
// poli = 9;
// poli = null;
// poli = "Mamma Mia";
// let arrPoli: any[] = [];
// arrPoli.push("Baby Yoda");
// arrPoli.push(6);
// arrPoli.push(false);
// let objPoli: {
//   uid: any;
//   description: any;
//   inStock: any;
// };
// objPoli = {
//   uid: "Queso suizo",
//   description: false,
//   inStock: 5,
// };
// //FUNCTION TYPE
// //EL TIPO FUNCIÓN PUDE INFERIRSE
// const sayHello = () => {
//   console.log("Holisss");
// };
// sayHello();
// //Algo mejor sería, sin dudas, utilizar un tipado explícito
// let sayGoodbye: Function = (name: string) => {
//   console.log(`Hasta luego ${name}`);
// };
// sayGoodbye("Genio");
// //Una función que recibe un param opcional
// let mixer = (a: number, b: boolean, c?: string | number) => {
//   console.log(a, b, c);
// };
// mixer(23, false);
// //Si almacenamos el resultado de una función (su return value) en una variable... cuál será el tipo de esa var?
// const restar = (a: number, b: number) => {
//   return a - b;
// };
// const resultado = restar(10, 9); //la función retorna number, por lo tanto ese será el tipo de la var resultado
// //El tipo del valor de retorno de una función también puede ser explíto
// const sumar = (a: number, b: number): number => {
//   return a + b;
// };
// //Las funciones que no retornan explícitamente algo (por ej las que imprimen por consola) retornan de forma implícita "void". Incluso ese tipo, debería ser explícito si usamos TS.
// let saySomething: Function = (name: string): void => {
//   console.log(`Decite algo ${name}`);
// };
// //TYPE ALIASES
// const product = (item: {
//   id: string | number;
//   detail: string;
//   inStock: boolean;
//   price: number;
// }): void => {
//   console.log(
//     `El id de ${item.detail} es ${item.id}, su precio es ${item.price} y ${
//       item.inStock ? "está" : "no está"
//     } en stock`
//   );
// };
// const item = {
//   id: 235,
//   detail: "Zapassss",
//   inStock: false,
//   price: 40,
// };
// product(item);
// //En un caso como este, si se utiliza esta función una vez, no hay problema, pero si esa estructura se repite en nuestro código, podría convenir un alias de tipo. Crearemos un tipo id
// type id = string | number;
// const product2 = (item: {
//   id: id;
//   detail: string;
//   inStock: boolean;
//   price: number;
// }): void => {
//   console.log(
//     `El id de ${item.detail} es ${item.id}, su precio es ${item.price} y ${
//       item.inStock ? "está" : "no está"
//     } en stock`
//   );
// };
// product2(item);
// //Podemos crear un alias de tipo más complejo
// type objWithDetail = { detail: string; id: id };
// const logProduct = (item: objWithDetail): void => {
//   console.log(item);
// };
// const prod = {
//   detail: "Botas de alta montaña",
//   id: "aloi-998.sjsh78",
// };
// logProduct(prod);
// //FUNCTION SIGNATURE
// //Esta línea es la firma de la función
// let saludar: (a: string, b: string) => void;
// saludar = (name: string, text: string): void => {
//   console.log(text, name);
// };
// saludar("Giuseppe", "Hola");
// //Dijimos que TS nos ayuda a evitar posibles errores porque "ve" situaciones que no son tan obvias, pero que debido a la laxitud de JS, podrían ocurrir
// //primero, la function signature
// let sumaResta: (a: number, b: number, c: string) => number;
// sumaResta = (num1: number, num2: number, operation: string = "suma") => {
//   if (operation === "suma") return num1 + num2;
//   else if (operation === "resta") return num1 - num2;
//   return 0;
// };
// const Resta(4, 4, "resta");
//CLASES
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.client} debe $${this.amount} por ${this.detail}`;
    }
}
//instanciar un objeto de la clase Invoice
const inv01 = new Invoice("Abelardo", "Afinación de piano de cola", 78000);
const inv02 = new Invoice("Eloísa", "Reparación de automóvil", 98000);
//podemos acceder a las props y editarlas, respetando su tipo
inv02.amount = 105000;
//podemos crear un arreglo que solamente acepte objetos instanciados con una clase determinada
const invoiceContainer = [];
invoiceContainer.push(inv02);
//Creamos un objeto, en apariencia igual a las instancias de la clase Invoice
const inv03 = {
    client: "Pepe Pótamo",
    detail: "Servicio de pintura de obra",
    amount: 34000,
    Format() {
        return `${this.client} debe $${this.amount} por ${this.detail}`;
    },
};
// invoiceContainer.push(inv03);//esto no se puede
//MÉTODOS PÚBLICOS, PRIVADOS Y DE SÓLO LECTURA
//Antes hemos creado una clase y luego, al instanciar un objeto de la misma, pudimos acceder a las props e incluso editarlas. Este es el funcionamiento por defecto pues los métodos son públicos. Estos modificadores de acceso (access modifiers) se pueden establecer taxativamente.
//public: access modifier por default, puedo acceder y modificar
//private: sólo puedo acceder dentro de la clase, no en los objetos instanciados con ella
//readonly: self explanatory... puedo acceder más no modificar
class Bill {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.client} debe cobrar $${this.amount} por ${this.detail}`;
    }
}
const bill01 = new Bill("Murray", "Animación de casamiento", 100000);
bill01.client = "Buffalo";
//Una forma más abreviada de escribir una clase
class InvoiceShort {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.client} debe cobrar $${this.amount} por ${this.detail}`;
    }
}
//No creamos una instancia de clase sino un objeto literal, pero que implementa la interfaz y por eso debe respetar su forma
const batman = {
    name: "Bruce Wayne",
    age: 50,
    isActive: true,
    powers: ["High intellect", "Martial Arts Expert", "Multi-Millonaire"],
    catchPhrase(phrase) {
        console.log(`${this.name} says: "${phrase}"`);
    },
};
batman.catchPhrase("Me gustan las tortillas babee");
//creo una variable y digo que su tipo es el tipo abstracto isHero (una interfaz)
let robin;
//De aquí en más, robin solamente podrá tener la forma que manda la interfaz isHero
robin = {
    name: "Richard Tapia",
    age: 20,
    isActive: true,
    powers: ["Agility", "Speed"],
    catchPhrase(message) {
        console.log(`${this.name} says: "${message}"`);
    },
};
robin.name = "Piñon Fijo";
robin.catchPhrase("Si la bici me responde, santos payasos Batman");
class Factura {
    constructor(cliente, detalle, monto) {
        this.cliente = cliente;
        this.detalle = detalle;
        this.monto = monto;
    }
    format() {
        return `${this.cliente} debe $${this.monto} por ${this.detalle}`;
    }
}
//GENERICS. Este tipo nos ayuda a crear bloques de código que pueden ser reutilizados por otros tipos.
//EJ: una función que recibe un objeto y retorna otro, agregando una prop, en nuestro un id único
const addUID = (obj) => {
    const uid = Math.round(Math.random() * 100000);
    return Object.assign(Object.assign({}, obj), { uid });
};
const doc01 = { name: "Margaret", email: "marga123@correo.ar" };
doc01.name; //puedo hacer esto
const docWithUID = addUID(doc01);
//console.log(docWithUID.name);//Pero no esto
//No es posible acceder a props del objeto que retorna la función addUID. Esto ocurre porque cuando le pasamos el objeto doc01, la función no conoce las props del objeto entrante, por ende, tampoco conoce las del objeto saliente. Vamos a resolverlo con un tipo genérico.
const addUIDPlus = (obj) => {
    const uid = Math.round(Math.random() * 100000);
    return Object.assign(Object.assign({}, obj), { uid });
};
const doc03 = addUIDPlus(doc01);
console.log(doc03.name); //Ahora sí podemos acceder a las props del objeto retornado por la función. Qué ocurió? Pues que el tipo genérico permitió a la función conocer las props del objeto entrante (y ahora puede retornar las del objeto saliente). Si bien esto es mejor que la primer versión, aún podemos pasar cualquier cosa a la función.
console.log(addUIDPlus("Hola Tarolas"));
//Podemos indicarle al tipo genérico que solamente reciba un objeto.
const addUIDPlusPlus = (obj) => {
    const uid = Math.round(Math.random() * 100000);
    return Object.assign(Object.assign({}, obj), { uid });
};
addUIDPlusPlus({ name: "Margaret", email: "marga123@correo.ar" }); //solamente recibe objetos
//Podemos ser más específicos, diremos que la función solamente puede recibir un objeto que tenga una determinada prop
const addUIDPlusPlusBis = (obj) => {
    const uid = Math.round(Math.random() * 100000);
    return Object.assign(Object.assign({}, obj), { uid });
};
addUIDPlusPlusBis({ name: "Margaret", email: "marga123@correo.ar" });
const rsc01 = {
    uid: 1,
    resourceName: "posts",
    data: { title: "El general tiene quien le escriba" },
};
//implementación con un string
const rsc02 = {
    uid: 23,
    resourceName: "users",
    data: "Marcelo Eduardo",
};
//implementación con array
const rsc03 = {
    uid: 4,
    resourceName: "authors",
    data: ["Truman Capote", "Arturo Pérez Reverte"],
};
//ENUMS
//Es un tipo especial que permite almacenar un juego de constantes o palabras claves y asociarlas con un valor numérico (es el index)
//En nuestro ejemplo, deseamos que el tipo de recurso esté limitado a ciertas opciones predefinidas
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOKS"] = 0] = "BOOKS";
    ResourceType[ResourceType["AUTHORS"] = 1] = "AUTHORS";
    ResourceType[ResourceType["FILMS"] = 2] = "FILMS";
})(ResourceType || (ResourceType = {})); //CADA KEYWORD ESTÁ ASOCIADA AL ÍNDEX
const rsc04 = {
    uid: 67,
    resourceType: ResourceType.BOOKS,
    data: ["Operación Masacre", "La fiesta del Chivo"],
};
console.table(rsc04);
//TUPLES
//defino un array
const arreglo = [15, false, "una palabra"];
arreglo.push("colocao como Drake", 45, false, 455);
//Este arreglo acepta los tipos indicados arriba, pero no importa si contiene todos los tipos ni el orden en ue se encuentran
arreglo[0] = false;
arreglo[2] = "El nombre de la rosa";
//La forma de definir una tupla es similar al arreglo, pero el orden en que indico los tipos, vinculará de forma inseparable con esas posiciones de idx.
const miTupla = [90, "un texto", true];
console.log(miTupla);
miTupla.pop();
console.log(miTupla);
miTupla.forEach((el, idx) => console.log(idx, el));
miTupla.push("Hola");
miTupla.forEach((el, idx) => console.log(idx, el));

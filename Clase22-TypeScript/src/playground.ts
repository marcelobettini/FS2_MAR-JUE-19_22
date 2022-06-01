//TIPADO ESTÁTICO
//TS infiere el tipo de las variables de acuerdo al tipo del valor durante la inicialización, al igual que JS, pero a diferencia de este, TS no permite cambiar el tipo más adelante
let animal = "Giraffe";
let age = 20;
let isMammal = true;

//type error
// animal = 45
// age = false
// isMammal = "Giraffe"

//Si definimos una función con sintaxis JS pura, sin tipos, podemos ver rápidamente resultados inesperados. El param diameter es inicializado con el tipo any, por ende, aceptar cualquier tipo de valor.

const circumference = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circumference(30)); //94.algo... todo ok
//console.log(circumference("treinta")); // NaN... todo mal

//Para resolver este problema, tenemos la definición explícita de tipo para el param de la función.
const circum = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circum(30)); //94.algo... todo ok
//console.log(circum("treinta")); // TS me advertirá sobre el error de tipo

//INFERENCIA DE TIPOS EN ARRAYS Y OBJETOS (implícito según valor de incialización)

//Vemos primero una aproximación con tipado implícito
const names = ["Marce", "Pato", "Giani"];
//la versión de tipado explícito sería:
// const names: string[] = ["Marce", "Pato", "Giani"]

names.push("Pepillo"); //ok
//names.push(false) //error de tipo

const mixed = [false, 340, true];
mixed.push(true); //ok
mixed.push(230, 67, false); //ok
//mixed.push("something else") //type error

//Ahora con objetos
let hero = {
  name: "Super Duper",
  age: 80,
  isActive: true,
  powers: ["super speed", "tango dancing", "kinda cute"],
};

hero.name = "Wonder Woman"; //Ok
//hero.name = 340 //type error
//hero.haircolor="green and blue" //Warning... No podemos agregar props luego de haber definido el objeto

//Pero sí podemos cambiar todos los valores
hero = {
  name: "Loco Arts Carlitox",
  age: 34,
  isActive: false,
  powers: ["super cool", "knows mechanics"],
};

//TIPOS EXPLÍCITOS
let nom: string = "Felipe";
let num: number = 200;
let yesNo: boolean = false;
const dogs: string[] = ["Bobby", "Puppy", "Laika"];

let cats: string[] = [];
cats.push("Ratatouille");

//Union Type (Lo vimos antes de forma implícita, cuando creamos arreglo que podía contener dos o más tipos)

let mixed2: (string | boolean)[] = [];
//mixed2.push(4) //error de tipo
mixed2.push(true, false, "Lorenzo", false, "Cherubini");

//Object Type. Este puede ser un tanto engañoso... porque en JS todo (o casi todo) es un objeto
let person: object;
person = { uid: 1, name: "Lorenza" };

//person = "Guantanamera" //error de tipo

//Esto es posible, aunque quizá no deseado. Y ocurre porque los arreglos son en el fondo un objeto de tipo array
person = ["Lunes", "Martes"];
const arr: string[] = [];

//Any Type (Este tipo admite cualquier -any- tipo de dato)
let poli: any;
poli = false;
poli = 9;
poli = null;
poli = "Mamma Mia";

let arrPoli: any[] = [];
arrPoli.push("Baby Yoda");
arrPoli.push(6);
arrPoli.push(false);

let objPoli: {
  uid: any;
  description: any;
  inStock: any;
};

objPoli = {
  uid: "Queso suizo",
  description: false,
  inStock: 5,
};

//FUNCTION TYPE

//EL TIPO FUNCIÓN PUDE INFERIRSE
const sayHello = () => {
  console.log("Holisss");
};

sayHello();

//Algo mejor sería, sin dudas, utilizar un tipado explícito
let sayGoodbye: Function = (name: string) => {
  console.log(`Hasta luego ${name}`);
};
sayGoodbye("Genio");

//Una función que recibe un param opcional

let mixer = (a: number, b: boolean, c?: string | number) => {
  console.log(a, b, c);
};
mixer(23, false);

//Si almacenamos el resultado de una función (su return value) en una variable... cuál será el tipo de esa var?
const restar = (a: number, b: number) => {
  return a - b;
};
const resultado = restar(10, 9); //la función retorna number, por lo tanto ese será el tipo de la var resultado

//El tipo del valor de retorno de una función también puede ser explíto
const sumar = (a: number, b: number): number => {
  return a + b;
};

//Las funciones que no retornan explícitamente algo (por ej las que imprimen por consola) retornan de forma implícita "void". Incluso ese tipo, debería ser explícito si usamos TS.
let saySomething: Function = (name: string): void => {
  console.log(`Decite algo ${name}`);
};

//TYPE ALIASES

const product = (item: {
  id: string | number;
  detail: string;
  inStock: boolean;
  price: number;
}): void => {
  console.log(
    `El id de ${item.detail} es ${item.id}, su precio es ${item.price} y ${
      item.inStock ? "está" : "no está"
    } en stock`
  );
};

const item = {
  id: 235,
  detail: "Zapassss",
  inStock: false,
  price: 40,
};

product(item);

//En un caso como este, si se utiliza esta función una vez, no hay problema, pero si esa estructura se repite en nuestro código, podría convenir un alias de tipo. Crearemos un tipo id

type id = string | number;
const product2 = (item: {
  id: id;
  detail: string;
  inStock: boolean;
  price: number;
}): void => {
  console.log(
    `El id de ${item.detail} es ${item.id}, su precio es ${item.price} y ${
      item.inStock ? "está" : "no está"
    } en stock`
  );
};

product2(item);

//Podemos crear un alias de tipo más complejo

type objWithDetail = { detail: string; id: id };
const logProduct = (item: objWithDetail): void => {
  console.log(item);
};
const prod = {
  detail: "Botas de alta montaña",
  id: "aloi-998.sjsh78",
};
logProduct(prod);

//FUNCTION SIGNATURE
//Esta línea es la firma de la función

let saludar: (a: string, b: string) => void;

saludar = (name: string, text: string): void => {
  console.log(text, name);
};

saludar("Giuseppe", "Hola");

//Dijimos que TS nos ayuda a evitar posibles errores porque "ve" situaciones que no son tan obvias, pero que debido a la laxitud de JS, podrían ocurrir

//primero, la function signature
let sumaResta: (a: number, b: number, c: string) => number;

sumaResta = (num1: number, num2: number, operation: string = "suma") => {
  if (operation === "suma") return num1 + num2;
  else if (operation === "resta") return num1 - num2;
  return 0;
};

sumaResta(4, 4, "resta");

//DOM - TYPE CASTING

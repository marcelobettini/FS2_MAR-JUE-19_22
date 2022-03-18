//Loose vs Strict Equality
let num1 = 9 //number
const num2 = '9' //string

console.log(num1 == num2) //true loose equality
console.log(num1 === num2) //false strict equality
console.log(num1 === Number(num2)) //true porque "parseamos" num2 a tipo number también podemos hacer parseInt(num2) o el atajo +num2




//---------------------------------//
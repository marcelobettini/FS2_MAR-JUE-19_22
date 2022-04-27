const arr = [
    { name: "Yogur", age: 123 }, { name: "Tut Ank Amon", age: 200 }, { name: "El Jualidi", age: 230 }]

arr[1].nueva = "esta no estaba"
console.log(arr[1])

arr.forEach(el => {
    console.log("edad: ", el.age)
    console.log("feliz cumple!", el.age += 10)
})

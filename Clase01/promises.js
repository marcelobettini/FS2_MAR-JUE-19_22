//Promises
const data = require("./helpers/data.js")
    //proceso sincrónico
    // const getData = () => {
    //     return data
    // }
    // console.log(getData())

//con delay simulamos el proces async
// const getData = () => {
//     setTimeout(() => data, 2000)
// }
// console.log(getData())

/*promise retornará el resultado, que puede ser resolve o reject, sólo cuando haya terminado el ciclo
estados de la promesa: pending, fulfilled, rejected...
pero nunca undefined
*/

const getData = () => {
    return new Promise((resolve, reject) => {
        const err = true
        setTimeout(() => {
            if (err) {
                reject("Went South")
            } else {
                resolve(data)
            }
        }, 2000)
    })
}

getData()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
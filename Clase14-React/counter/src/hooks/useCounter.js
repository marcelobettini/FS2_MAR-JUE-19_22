import { useState } from "react";
export const useCounter = (initialValue = 0) => {
    const [number, setNumber] = useState(initialValue);

    const increment = () => {
        setNumber(prevState => prevState + 1)
    }
    const decrement = () => {
        setNumber(prevState => prevState - 1)
    }
    //esta función (el custom hook useCounter) retorna un objeto con tres elementos
    return { number, increment, decrement }
}

//Por qué esto podría ser deseable? Pues porque no expongo setCounter sino la implementación de setCounter, de forma controlada. Ahora tenemos la lógica encapsulada en esta función (useCounter) y eso nos permite "limpiar" el componente, que en este caso es CounterWithHook. El beneficio más evidente es que dicho componente no tendrán funciones ni información de estado.

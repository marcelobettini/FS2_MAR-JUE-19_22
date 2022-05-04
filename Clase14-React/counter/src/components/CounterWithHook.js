// En esta versión final, vamos a usar un custom hook, es decir, crearemos un hook de React a medida.
//Y aquí ya no hay info de estado ni funciones, es un componente más legible y limpio.

import { useCounter } from "../hooks/useCounter";
export const CounterWithHook = () => {
    const { number, increment, decrement } = useCounter()
    return (
        <>
            <h3>Counter value: <span>{number}</span></h3>
            <button data-id="+" onClick={increment}>Sumar</button>
            <button data-id="-" onClick={decrement}>Restar</button>
        </>
    )
}
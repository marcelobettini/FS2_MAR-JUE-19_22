//esta es una primera aproximación, el componente Counter actualiza el estado, que se mantiene en el propio componente
import { useState } from "react";
export const Counter = () => {
    const [number, setNumber] = useState(0);
    const handleClick = (event) => {
        switch (event.target.dataset.id) {
            case "+":
                setNumber(number + 1) //bad practice
                break;
            case "-":
                setNumber(prevState => prevState - 1) //best practice
                break
            default:
                break;
        }
    }
    return (
        <>
            <h3>Counter value: <span>{number}</span></h3>
            <button data-id="+" onClick={handleClick}>Sumar</button>
            <button data-id="-" onClick={handleClick}>Restar</button>
        </>
    )
}
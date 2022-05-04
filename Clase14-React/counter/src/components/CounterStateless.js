//esta segunda iteración propone un componente que actualiza el estado contenido en el componente padre (App)
//debe recibir el estado a través de props, así como el setter para mutar el estado. Esta versión es una mejora
//con respecto a Counter, porque se recomienda que el estado se ubique en la más alta jerarquía de componentes y, en este caso, App es el componente más elevado... de hecho, es el que llama a los contadores


export const CounterStateless = ({ number, setNumber }) => {

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
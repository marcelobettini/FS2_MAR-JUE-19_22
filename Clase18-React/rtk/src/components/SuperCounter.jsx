import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, incrementByStep, reset, incrementAsync } from "../features/counter/counterSlice";
import { useState } from "react";
const SuperCounter = () => {
    const [incrementStep, setIncrementStep] = useState(3)
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (

        <>
            <h2>Super Counter</h2>
            <p>Count is: {count}</p>
            <button aria-label="reset to initial state" onClick={() => dispatch(reset())}>Reset</button>
            <button
                onClick={() => dispatch(incremented())}
                aria-label="increment value">Increment</button>
            <button
                onClick={() => dispatch(decremented())}
                aria-label="increment value">Decrement</button>
            <input aria-label="increment step value" value={incrementStep} onChange={(e) => setIncrementStep(+e.target.value)} />
            <button aria-label="increment by step" onClick={() => dispatch(incrementByStep(incrementStep || 0))}>Add by Step</button>
            <button className="asyncButton" aria-label="increment by step async" onClick={() => dispatch(incrementAsync(incrementStep || 0))}>Async Add by Step</button>



        </>
    )

}

export default SuperCounter
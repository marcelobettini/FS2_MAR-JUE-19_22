//ducks pattern

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        //ES6 sintaxis de objetos literales, podés definir funciones sin 'function' ni =>
        incremented(state) {
            state.value++; //librería immer permite "hacer como si" mutáramos el estado de forma directa.
        },
        //otra forma de escribir un action creator (que no es otra cosa que una función)
        decremented: (state) => {
            state.value--;
        },
        incrementByStep(state, action) {
            state.value += action.payload;
        },
        reset(state) {
            state.value = initialState.value
        }
    }
})

export const { incremented, decremented, incrementByStep, reset } = counterSlice.actions;

//Esta función se denomiona Thunk. Permite manejar lógica asincrónica dentro de Redux. Se puede despachar como unha acción regular: dispatch(incrementAsync(10)). Esto llamaría al thunk con el método dispatch como primer argumento. El código asincrónico puede ser ejhecutado mientras otras acciones son despachadas.

export const incrementAsync = (step) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByStep(step))
    }, 4000)
}

export default counterSlice.reducer
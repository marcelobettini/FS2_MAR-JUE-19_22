import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
    filter: "",
    selectedPokemon: null
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload
        },
        setFilter(state, action) {
            state.filter = action.payload
        },
        setSelectedPokemon(state, action) {
            state.selectedPokemon = action.payload
        }
    }
})

export const { setData, setFilter, setSelectedPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer;
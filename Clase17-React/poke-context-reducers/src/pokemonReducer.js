const pokemonReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            }
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_SELECTED_POKEMON':
            return {
                ...state,
                selectedPokemon: action.payload
            }
        default:
            return state
    }
}
export default pokemonReducer
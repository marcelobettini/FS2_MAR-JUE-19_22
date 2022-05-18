import { Card, CardContent, CardActions, Typography, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedPokemon } from "../redux/pokemonSlice"
const PokemonInfo = () => {
    const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)
    const dispatch = useDispatch()

    return selectedPokemon && (
        <Card sx={{ height: 340, minWidth: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>{selectedPokemon.name.english}</Typography>
                {Object.keys(selectedPokemon.base).map((key) =>
                    <Typography key={key}>{key} : {selectedPokemon.base[key]}</Typography>
                )}
            </CardContent>
            <CardActions>
                <Button variant='contained' color='secondary' onClick={() => dispatch(setSelectedPokemon(null))}>dismiss</Button>
            </CardActions>
        </Card>
    )
}
export default PokemonInfo
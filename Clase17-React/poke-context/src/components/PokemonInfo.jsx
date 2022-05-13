import React, { useContext } from 'react'
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material"
import PokemonContext from '../PokemonContext'
const PokemonInfo = () => {
    const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
    return selectedPokemon && (
        <Card sx={{ height: 340, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <CardContent>
                <Typography variant='h5' gutterBottom>{selectedPokemon.name.english}</Typography>
                {Object.keys(selectedPokemon.base).map((key) =>
                    <Typography key={key}>{key} : {selectedPokemon.base[key]}</Typography>
                )}
            </CardContent>
            <CardActions>
                <Button variant='contained' color='secondary' onClick={() => setSelectedPokemon(null)}>dismiss</Button>
            </CardActions>
        </Card>
    )
}
export default PokemonInfo
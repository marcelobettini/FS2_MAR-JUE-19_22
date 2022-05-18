import { useContext } from "react";
import { TextField } from "@mui/material";
import PokemonContext from "../pokemonContext";
import React from 'react'

const PokemonFilter = () => {
    console.log("PokemonFilter rendered")
    const { dispatch } = useContext(PokemonContext)
    return <TextField label="Find..." variant="filled" onChange={(e) => dispatch({ type: 'SET_FILTER', payload: e.target.value })} />

}

export default PokemonFilter
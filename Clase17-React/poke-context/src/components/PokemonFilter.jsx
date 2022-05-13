import { useContext } from "react";
import { TextField } from "@mui/material";
import PokemonContext from "../PokemonContext";
import React from 'react'

const PokemonFilter = () => {
    const { setFilter } = useContext(PokemonContext)
    return <TextField label="Find..." variant="filled" onChange={(e) => setFilter(e.target.value)} />

}

export default PokemonFilter
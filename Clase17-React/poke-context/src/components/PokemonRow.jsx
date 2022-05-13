import { Button } from "@mui/material";
import React, { useContext } from 'react'
import PokemonContext from "../PokemonContext";

const PokemonRow = ({ pokemon }) => {
  const { setSelectedPokemon } = useContext(PokemonContext)
  return (
    <>
      <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant="outlined" onClick={() => setSelectedPokemon(pokemon)}>Detail</Button></td>
      </tr>
    </>
  )

}

export default PokemonRow
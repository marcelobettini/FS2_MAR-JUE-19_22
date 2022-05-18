import { Button } from "@mui/material";
import React, { useContext } from 'react'
import pokemonContext from "../pokemonContext";

const PokemonRow = ({ pokemon }) => {
  console.log("PokemonRow rendered")
  const { dispatch } = useContext(pokemonContext)
  return (
    <>
      <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant="outlined" onClick={() => dispatch({
          type: 'SET_SELECTED_POKEMON',
          payload: pokemon
        })}>info</Button></td>
      </tr>
    </>
  )

}

export default PokemonRow
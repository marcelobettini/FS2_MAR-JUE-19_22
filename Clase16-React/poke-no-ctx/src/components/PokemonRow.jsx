import { Button } from "@mui/material";

import React from 'react'
//onDetail es  un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App)

const PokemonRow = ({ pokemon, onDetail }) => {
  return (
    <>

      <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant="outlined" onClick={() => onDetail(pokemon)}>Detail</Button></td>
      </tr>
    </>
  )

}

export default PokemonRow
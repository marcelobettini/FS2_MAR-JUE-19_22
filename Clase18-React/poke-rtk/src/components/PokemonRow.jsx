import { Button, TableRow, TableCell } from "@mui/material";
import { setSelectedPokemon } from "../redux/pokemonSlice";
import { useDispatch } from "react-redux";

const PokemonRow = ({ pokemon }) => {
  const dispatch = useDispatch()

  return (
    <>
      <TableRow>
        <TableCell>{pokemon.name.english}</TableCell>
        <TableCell>{pokemon.type.join(", ")}</TableCell>
        <TableCell><Button variant="outlined" onClick={() => dispatch(setSelectedPokemon(pokemon))}>info</Button></TableCell>
      </TableRow>
    </>
  )

}

export default PokemonRow
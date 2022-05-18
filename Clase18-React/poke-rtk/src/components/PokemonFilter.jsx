import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/pokemonSlice";

const PokemonFilter = () => {
    const dispatch = useDispatch()
    return <TextField label="Find..." variant="filled" onChange={(e) => dispatch(setFilter(e.target.value))} />

}
export default PokemonFilter
import { useEffect } from "react"
import PokemonRow from "./PokemonRow"
import { useDispatch, useSelector } from "react-redux"
import { setData } from "../redux/pokemonSlice"

import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"

const PokemonTable = () => {
    const { data, filter } = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("http://localhost:3001/pokemon.json")
            .then(res => res.json())
            .then(info => dispatch(setData(info)))
    }, [])
    if (!data) return <div>Loading...</div>
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >Name</TableCell>
                        <TableCell >Type</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter(({ name: { english } }) => english.toLowerCase().startsWith(filter.toLowerCase()))
                        .slice(0, 16)
                        .map(pokemon => <PokemonRow
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                        )}
                </TableBody>
            </Table>
        </TableContainer>
    )

}
export default PokemonTable

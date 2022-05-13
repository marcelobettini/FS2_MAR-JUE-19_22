import React, { useContext } from "react";
import PokemonRow from "./PokemonRow"
import pokemonContext from "../pokemonContext"
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material"
const PokemonTable = () => {
    const { state: { data, filter } } = useContext(pokemonContext)
    return (
        <TableContainer component={Paper} sx={{ display: 'flex', mt: '2em' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Type</TableCell>
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

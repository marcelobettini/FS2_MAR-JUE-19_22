import React from 'react'

const PokemonInfo = ({ name: { english }, base }) => {
    return (
        <div>
            <h2>{english}</h2>
            <table>
                <tbody>
                    {Object.keys(base).map((key) =>
                        <tr key={key}>
                            <td>{key}:</td>
                            <td>{base[key]}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    )
}

export default PokemonInfo
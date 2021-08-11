import PokemonRow from './pokemonRow'
import PokemonContext from './pokemonContext'
import React from 'react';
const PokemonTable = () => {
const {pokemon, filter, selectedItemSet} = React.useContext(PokemonContext)
return (
<table width="100%">
      <thead>
      <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
        </thead>
        <tbody>
        
          {pokemon
          .filter((pokemon) => pokemon.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0,20).map(pokemon => (
          <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => selectedItemSet(pokemon)}/>
          ))}
     
        </tbody>
      </table>
)
}

export default PokemonTable
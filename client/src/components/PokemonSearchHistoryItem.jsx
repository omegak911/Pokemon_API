import React from 'react';

const PokemonSearchHistoryItem = ({changeShowPokemonVal, pokemon}) => (
  <div className="searchHistItems">
    <img onClick={() => changeShowPokemonVal(pokemon)} src={pokemon.picture}/>
    <br />
    {pokemon.name}
  </div>
)

export default PokemonSearchHistoryItem;
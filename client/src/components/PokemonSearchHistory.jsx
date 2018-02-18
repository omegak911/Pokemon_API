import React from 'react';
import PokemonSearchHistoryItem from './PokemonSearchHistoryItem';

const PokemonSearchHistory = ({changeShowPokemonVal, pokeList}) => (
  <div>
      {pokeList.map( (pokemon, index) => (
        <PokemonSearchHistoryItem changeShowPokemonVal={changeShowPokemonVal} key={index} pokemon={pokemon}/> 
      ))}
  </div>
)

export default PokemonSearchHistory;
import React from 'react';

const PokemonProfile = ({currentPokemon}) => (
  <div className="pokemonProfile">
    <img src={currentPokemon.picture} alt="pokePic"/>
    <h4>{currentPokemon.name}</h4>
    <ul>
      <li>ID: {currentPokemon.id}</li>
      <li>TYPE: {currentPokemon.type}</li>
    </ul>
  </div>
)

export default PokemonProfile;
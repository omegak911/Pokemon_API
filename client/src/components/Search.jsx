import React from 'react';

const Search = ({changeShowPokemonVal, displayPokemon, showPokemon}) => {

  let enterHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      displayPokemon();
    }
  }

  return (
    <div>
      <form>
        <input type="text" 
        onChange={changeShowPokemonVal} 
        onKeyPress={enterHandler}
        value={showPokemon}
        style={{width: 200}}/>
        <input type="button" onClick={displayPokemon} value="Gotta Catch Them All!"/>
      </form>
    </div>
  )
}

export default Search;
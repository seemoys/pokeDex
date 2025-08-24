import PokeList from "../PokeList/PokeList"
import Search from "../Search/Search"
import Font, { Text } from 'react-font'
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useState } from "react";

function Pokedex() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
        <div className=" flex flex-col items-center gap-2">
          
        <Search updatedSearchTerm={ setSearchTerm} />
        {searchTerm.length == 0 ? <PokeList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
         </div>
    </>
  )
}

export default Pokedex

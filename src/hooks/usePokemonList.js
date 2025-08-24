import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList() {

     const [pokemonListState, setPokemonListState] = useState({

        pokemonList: [],
        pokeDexURL: 'https://pokeapi.co/api/v2/pokemon',
        prevPokeDexURL: '',
        nextPokeDexURL:''
    });

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(pokemonListState.pokeDexURL);
                const pokeResults = response.data.results;
                console.log(response.data);
                setPokemonListState(prev=>({
                    ...prev,
                    prevPokeDexURL: response.data.previous,
                    nextPokeDexURL:response.data.next
                }))

                const pokeResultsPromise = pokeResults.map((pokemon) => axios.get(pokemon.url));
                const pokemonData = await axios.all(pokeResultsPromise);
                const res=pokemonData.map((pokeData)=> {
                    const pokemon = pokeData.data;
                    return {
                        id:pokemon.id,
                        name: pokemon.name,
                        image: (pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                        types:pokemon.types
                    }
                });
                setPokemonListState(prev => ({
                    ...prev,
                    pokemonList: res
                }))
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokemon();
    }, [pokemonListState.pokeDexURL])
    
    return (
        [pokemonListState,setPokemonListState]
    )
    
}
export default usePokemonList;
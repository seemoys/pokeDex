import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id,pokemonName) {

    
    const [pokemon, setPokemon] = useState({});
    async function downloadPokemon() {
        let response;
        if (pokemonName) {
            console.log("object")
         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
        } else {
         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        }
        console.log(response.data);
        setPokemon({
            name: response.data.name,
            weight: response.data.weight,
            height: response.data.height,
            image: response.data.sprites.other.dream_world.front_default,
            types: response.data.types.map((t) =>  t.type.name)
            
        })
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    return([pokemon,setPokemon])
    
}
export default usePokemonDetails;
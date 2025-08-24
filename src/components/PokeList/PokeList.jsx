
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokeList() {

    const [ pokemonListState, setPokemonListState ] = usePokemonList();

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
                {pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)}
            </div>
            <div className="p-2 flex gap-4">
            <button
                disabled={!pokemonListState.prevPokeDexURL}
                onClick={() => setPokemonListState({...pokemonListState,pokeDexURL:pokemonListState.prevPokeDexURL})}
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Prev
            </button>

            <button
                disabled={!pokemonListState.nextPokeDexURL}
                onClick={() => setPokemonListState({...pokemonListState,pokeDexURL:pokemonListState.nextPokeDexURL})}
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white px-4 py-2 border border-blue-500 hover:border-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
            </div>
        </>
    )
    
}

export default PokeList;
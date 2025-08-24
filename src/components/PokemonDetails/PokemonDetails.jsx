import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}) {

     const { id } = useParams();
    const [pokemon] = usePokemonDetails(id,pokemonName);

    return (
    <div className="flex justify-center mt-10">
      <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold capitalize mb-4">
           {pokemon.name}
        </h1>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-40 h-40 mx-auto mb-6 object-contain"
        />
        <div className="grid grid-cols-2 gap-4 text-lg text-gray-700 mb-6">
          <div>
            <span className="font-semibold">Height:</span> {pokemon.height}
          </div>
          <div>
            <span className="font-semibold">Weight:</span> {pokemon.weight}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Types</h2>
          <div className="flex justify-center gap-2">
            {pokemon.types && pokemon.types.map((type) => (
              <span
                key={type}
                className={`px-3 py-1 rounded-full text-white font-semibold capitalize
                  ${type === "fire" ? "bg-red-500" : ""}
                  ${type === "water" ? "bg-blue-500" : ""}
                  ${type === "grass" ? "bg-green-500" : ""}
                  ${type === "electric" ? "bg-yellow-400" : ""}
                  ${type === "psychic" ? "bg-pink-500" : ""}
                  ${type === "ice" ? "bg-cyan-400" : ""}
                  ${type === "dragon" ? "bg-purple-700" : ""}
                  ${type === "dark" ? "bg-gray-800" : ""}
                  ${type === "fairy" ? "bg-pink-300" : ""}
                  ${type === "normal" ? "bg-gray-400" : ""}
                  ${type === "fighting" ? "bg-orange-600" : ""}
                  ${type === "ground" ? "bg-yellow-600" : ""}
                  ${type === "flying" ? "bg-indigo-400" : ""}
                  ${type === "poison" ? "bg-purple-500" : ""}
                  ${type === "bug" ? "bg-lime-500" : ""}
                  ${type === "rock" ? "bg-gray-600" : ""}
                  ${type === "ghost" ? "bg-indigo-800" : ""}
                  ${type === "steel" ? "bg-gray-500" : ""}
                `}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
    
}
export default PokemonDetails;
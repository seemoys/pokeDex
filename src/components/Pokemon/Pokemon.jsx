import { useMemo } from "react";
import { Link } from "react-router-dom";

function Pokemon({ name, image,id }) {
    
  const fonts = [
    "Roboto",
    "Poppins",
    "Orbitron",
    "Monoton",
    "Lobster",
    "Press Start 2P",
  ];

  const randomFont = useMemo(() => fonts[Math.floor(Math.random() * fonts.length)],[]);

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="bg-white shadow-2xl rounded-lg p-4 flex flex-col items-center hover:scale-125 transition-transform duration-200 w-40 h-44">
      <img src={image} alt={name} className="w-30 h-30 object-contain mb-3 overflow-hidden" />
      <p
        className="text-lg font-bold capitalize"
        style={{ fontFamily: randomFont }}
      >
        {name}
      </p>
    </div>
    </Link>
  );
}

export default Pokemon;

A sleek React Pokédex that lets you browse, search, and view details for Pokémon using the public [PokéAPI]. Built with React + Vite, Tailwind CSS, Axios, and React Router. Includes a reusable debounce hook to avoid spamming the API while typing.

✨ Features

Paginated list of Pokémon (Prev / Next via PokéAPI next/previous URLs)

Search by name with a 2s debounced input (custom hook or use-debounce lib)

Details page with image, height, weight, and type badges (Fire/Water/etc.)

Responsive grid using Tailwind (grid-cols-2 → lg:grid-cols-5)

Consistent card sizing so the grid doesn’t jump between pages

Error + loading states for a smooth UX

🧱 Tech Stack

React 18, Vite

React Router for routing (/ list, /pokemon/:id details)

Axios for API requests

Tailwind CSS for styling

Custom Hooks (usePokemonDetails, useDebounce)

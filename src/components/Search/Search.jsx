import { useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce";

function Search({ updatedSearchTerm }) {
  
  const [inputValue, setInputValue] = useState('');

  const debounceValue = useDebounce(inputValue, 1000);

  useEffect(() => {
    updatedSearchTerm(debounceValue);
  }, [debounceValue, updatedSearchTerm]);


  return (
    <>
      <input
        className=" w-72 h-10 border-2 border-indigo-200 rounded-md"
        type="text"
        placeholder="Pokemon Name..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      
    </>
  )
}

export default Search

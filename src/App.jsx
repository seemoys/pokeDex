import { Text } from "react-font"
import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoutes from "./routes/CustomRoutes"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <div className=" flex flex-col items-center gap-2">
        <Link to="/">
          <Text family='Monoton' style={{ fontSize: 50, margin: 0 }}>
          <span family='Monoton' style={{ fontSize: 80 }}>P</span>oKeDe<span family='Monoton'  style={{ fontSize: 80 }}>X</span>
        </Text>
        </Link>
      </div>
      <CustomRoutes/>
    </>
  )
}

export default App

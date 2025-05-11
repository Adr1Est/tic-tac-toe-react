import './App.css'
import BotonResetLayout from './buttons/buttons'
import Tablero from './main-square/tablero'
import { useState } from 'react'

function App() {
  const [player, setPlayer] = useState("X")
  const [tablero, setTablero] = useState(["", "", "", "", "", "", "", "", ""])

  const handlerResetButton = () => {
    setPlayer("X")
    console.log("Juego Reiniciado");
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center w-100'>
        <Tablero obtenerJugador={player} manejarJugador={setPlayer} logicaTablero={tablero} manejarTablero={setTablero}/>
        <BotonResetLayout funcionReset={handlerResetButton}/>
      </div>
    </>
  )
}

export default App

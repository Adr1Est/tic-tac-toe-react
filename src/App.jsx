import './App.css'
import BotonResetLayout from './buttons/buttons'
import Tablero from './main-square/tablero'
import { useState } from 'react'
import MessageBox from './message/message'

function App() {
  const [message, getMessage] = useState("Turno de X")
  const [player, setPlayer] = useState("X")
  const [tablero, setTablero] = useState(["", "", "", "", "", "", "", "", ""])

  const handlerResetButton = () => {
    setPlayer("X")
    setTablero(["", "", "", "", "", "", "", "", ""])
    getMessage("Turno de X")
    console.log("Juego Reiniciado");
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center w-100'>
        <Tablero obtenerJugador={player} manejarJugador={setPlayer} tablero={tablero} manejarTablero={setTablero} capturarMensaje={getMessage}/>
        <MessageBox resultado={message}/>
        <BotonResetLayout funcionReset={handlerResetButton}/>
      </div>
    </>
  )
}

export default App

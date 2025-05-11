import { useState } from "react"
import GameZone from "./game-zones"

function Tablero (){
  const [turno, setTurno] = useState("X")
  const [zona1, setZona1] = useState(turno)
  const [zona2, setZona2] = useState(turno)
  const [zona3, setZona3] = useState(turno)
  const [zona4, setZona4] = useState(turno)
  const [zona5, setZona5] = useState(turno)
  const [zona6, setZona6] = useState(turno)
  const [zona7, setZona7] = useState(turno)
  const [zona8, setZona8] = useState(turno)
  const [zona9, setZona9] = useState(turno)

  return (
    <>
      <div className="flex flex-col w-full aspect-square bg-emerald-900">
        <div className="flex flex-row">
          <GameZone obtenerJugada={zona1}/>
          <GameZone obtenerJugada={zona2}/>
          <GameZone obtenerJugada={zona3}/>
        </div>
        <div className="flex flex-row">
          <GameZone obtenerJugada={zona4}/>
          <GameZone obtenerJugada={zona5}/>
          <GameZone obtenerJugada={zona6}/>
        </div>
        <div className="flex flex-row">
          <GameZone obtenerJugada={zona7}/>
          <GameZone obtenerJugada={zona8}/>
          <GameZone obtenerJugada={zona9}/>
        </div>
      </div>
    </>
  )
}

export default Tablero
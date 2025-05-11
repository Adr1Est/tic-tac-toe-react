import { useState } from "react"
import GameZone from "./game-zones"

function Tablero ({obtenerJugador, manejarJugador, tablero, manejarTablero}){
  console.log(obtenerJugador);
  const posiblesGanadores = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
  [0, 4, 8], [2, 4, 6]             // diagonales
];

  const handlerGameClick = (event) => {
    const index = event.target.dataset.square
    if(tablero[index] === ""){
      const nuevoTablero = [...tablero]
      nuevoTablero[index] = obtenerJugador
      manejarTablero(nuevoTablero)
      event.target.innerText = obtenerJugador
      manejarJugador(obtenerJugador === "X" ? "O" : "X")
    }
  }

  return (
    <>
      <div className="flex flex-col w-full aspect-square bg-emerald-900">
        <div className="flex flex-row">
          <GameZone numeroZona={"0"} obtenerJugada={tablero[0]} funcionManejoClick={handlerGameClick}/>
          <GameZone numeroZona={"1"} obtenerJugada={tablero[1]} funcionManejoClick={handlerGameClick}/>
          <GameZone numeroZona={"2"} obtenerJugada={tablero[2]} funcionManejoClick={handlerGameClick}/>
        </div>
        <div className="flex flex-row">
          <GameZone numeroZona={"3"} obtenerJugada={tablero[3]} funcionManejoClick={handlerGameClick}/>
          <GameZone numeroZona={"4"} obtenerJugada={tablero[4]} funcionManejoClick={handlerGameClick}/>
          <GameZone numeroZona={"5"} obtenerJugada={tablero[5]} funcionManejoClick={handlerGameClick}/>
        </div>
        <div className="flex flex-row">
          <GameZone numeroZona={"6"} obtenerJugada={tablero[6]} funcionManejoClick={handlerGameClick}/>
          <GameZone numeroZona={"7"} obtenerJugada={tablero[7]} funcionManejoClick={handlerGameClick}/>
          <GameZone numeroZona={"8"} obtenerJugada={tablero[8]} funcionManejoClick={handlerGameClick}/>
        </div>
      </div>
    </>
  )
}

export default Tablero
function GameZone({numeroZona, obtenerJugada, funcionManejoClick}){

  return(
    <>
      <div data-square={numeroZona} className="flex justify-center items-center border-1 border-emerald-700 text-emerald-500 text-6xl w-1/3 aspect-square" onClick={funcionManejoClick}>
        <p>{obtenerJugada}</p>
      </div>
    </>
  )
}

export default GameZone
function BotonResetLayout ({funcionReset}){

  return(
    <>
      <div className="flex justify-center items-center w-full mt-2">
        <button className="text-emerald-500 hover:text-emerald-950 font-bold text-xl w-full rounded-full bg-emerald-950 hover:bg-emerald-500 p-3" onClick={funcionReset}>Reset</button>
      </div>
    </>
  )
}

export default BotonResetLayout
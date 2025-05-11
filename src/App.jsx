import './App.css'
import BotonResetLayout from './buttons/buttons'
import Tablero from './main-square/tablero'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center w-100'>
        <Tablero/>
        <BotonResetLayout/>
      </div>
    </>
  )
}

export default App

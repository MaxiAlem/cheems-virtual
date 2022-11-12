import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Conmtext, {CheemsContext} from './components/Conmtext.jsx'
import Cheems from './components/Cheems'
import Demvice from './components/Demvice'


function App() {


  return (
    <div className='app'>
      <h1>Virtualcheems</h1>
    <Conmtext>
        <Demvice/>  
      </Conmtext>

    </div>
 

  )
}

export default App

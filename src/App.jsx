import { useState, useContext } from 'react'

import './App.css'
import Conmtext, {CheemsContext} from './components/Conmtext.jsx'
import Cheems from './components/Cheems'
import Demvice from './components/Demvice'


function App() {


  return (
    <div className='app'>
    <Conmtext>
        <Demvice/>  
      </Conmtext>

    </div>
 

  )
}

export default App

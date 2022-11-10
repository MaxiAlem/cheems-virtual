import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Conmtext, {CheemsContext} from './components/Conmtext.jsx'
import Cheems from './components/Cheems'


function App() {


  return (
    
    <Conmtext>
      <Cheems/>  
    </Conmtext>

  )
}

export default App

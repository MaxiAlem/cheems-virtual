import React,{useContext} from 'react'
import Cheems from './Cheems.jsx'
import { CheemsContext } from './Conmtext'


const Demvice = () => {
    const { hungry,setHungry,
      setSleep,setPoop,
        wPoop, setWPoop} = useContext(CheemsContext)
    
      // const reset =()=>{
      //   //reset 
      //   setPoop(0)
      //   setHungry(0)
      //   setSleep(0)
      // }

      const eat=()=>{
        let comida = 10
        setHungry(hungry - comida)
        setWPoop(wPoop + comida)
      }
  return (
    <div className='demvice'>

      <h1 className='title'>VirtualCheems</h1>
        <Cheems/>

        <div className='buttons'> 
        <div><p>comer</p><button onClick={()=>{eat()}}></button> </div>
        <div><p>dormir</p><button onClick={()=>{setSleep(0)}}></button> </div>
        <div><p>limpiar</p><button onClick={()=>{setPoop(0)}}></button> </div>
        
        </div>
        {/* <button onClick={()=>{reset()}}>reset</button> */}
    </div>
  )
}

export default Demvice
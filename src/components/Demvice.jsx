import React,{useContext} from 'react'
import Cheems from './cheems'
import { CheemsContext } from './Conmtext'


const Demvice = () => {
    const { hungry,setHungry,
        amsiedad,setAmsiedad,
        sleep,setSleep,
        poop,setPoop,
        wPoop, setWPoop,
        age,setAge,
        money,setMoney} = useContext(CheemsContext)
    
      const reset =()=>{
        //reset 
        setPoop(0)
        setHungry(0)
        setSleep(0)
      }

      const eat=()=>{
        let comida = 10
        setHungry(hungry - comida)
        setWPoop(wPoop + comida)
      }
  return (
    <div className='demvice'>
        <Cheems/>

        <div className='buttons'> 
        <button onClick={()=>{eat()}}>comer</button>
        <button onClick={()=>{setSleep(0)}}>dormir</button>
        <button onClick={()=>{setPoop(0)}}>limpiar</button>
        <button onClick={()=>{reset()}}>reset</button>
        </div>
    </div>
  )
}

export default Demvice
import React, { useContext } from 'react'
import { CheemsContext } from './Conmtext'

const Cheems = () => {
    const { hungry,setHungry,
        amsiedad,setAmsiedad,
        sleep,setSleep,
        poop,setPoop,
        age,setAge,
        money,setMoney} = useContext(CheemsContext)
    
      const reset =()=>{
        //reset 
        setPoop(0)
        setHungry(0)
        setSleep(0)
      }
  return (
    <div><p>soy un cheems :3 </p>
    <p> y tengo {hungry} hambre </p>
    <button onClick={()=>{setHungry(hungry -10)}}>comer</button>
    <p> y tengo {amsiedad} amsiedad </p>
    <p> y tengo {sleep} sueño </p>
    <button onClick={()=>{setSleep(0)}}>dormir</button>
    <p> y tengo {poop} ganas de hacer caca </p>
    <button onClick={()=>{setPoop(0)}}>limpiar</button>
    <p> y tengo {age.toFixed()} amños </p>
    {/* con toFixed lo convertimos mostramos  el numero entero 
    sin modificar con math.round peor loo vuelve string */}
    <p> y tengo {money} dimnero </p>
    <button onClick={()=>{reset()}}>reset</button>
    </div>
  )
}

export default Cheems
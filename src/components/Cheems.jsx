import React, { useContext } from 'react'
import { CheemsContext } from './Conmtext'
import cheems from '../assets/c0.jpg'


//const  cheemsImg = require.context('../assets',true)

const Cheems = () => {
    const { hungry,setHungry,
        amsiedad,setAmsiedad,
        sleep,setSleep,
        poop,setPoop,
        wPoop, setWPoop,
        age,setAge,
        money,setMoney} = useContext(CheemsContext)
  
  return (
    <div className='screen'>
    <p> 🍖: {hungry},💤:{sleep},🚽:{wPoop}, 💩: {poop}  </p>
    <img className='cheemsImg' src={cheems}/>  
  
    <p>  {age.toFixed()} Amños</p>
     <p> {amsiedad} Amsiedad </p>
    {/* con toFixed lo convertimos mostramos  el numero entero 
    sin modificar con math.round peor loo vuelve string */}   
    </div>
  )
}

export default Cheems
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
    <div>
    <img className='cheemsImg' src={cheems}/>  
    <p> 🍖: {hungry},💤:{sleep},🚽:{wPoop}, 💩: {poop}  </p>
    <p>  {age.toFixed()} amños. 💲  {money}  </p>
     <p> {amsiedad} amsiedad, </p>
    {/* con toFixed lo convertimos mostramos  el numero entero 
    sin modificar con math.round peor loo vuelve string */}   
    </div>
  )
}

export default Cheems
import React, { useContext } from 'react'
import { CheemsContext } from './Conmtext'

const Cheems = () => {
    const { hungry,
        amsiedad,
        sleep,
        poop,
        wPoop,
        age
        ,} = useContext(CheemsContext)
      
      const imgCheems=()=>{
        return (<img className='cheemsImg' src={img+num()+'.jpg'}/>)  
      }
      const  img ='../assets/'      
      const  num =()=>{
        if(amsiedad >100){
          return 'c9'
        }else {
          if(age <=3){
            return 'c0'
          }else if(age <= 10){
            return 'c1'
          }else {
            return 'c2'
          }
          
        }
      }
  
      const amsiedadStatus =()=>{
        if(amsiedad <= 100){
          return (<div><p>  {age.toFixed()} Amños</p>  <p> {amsiedad} Amsiedad </p> </div>)
        }else{
          return (<div> Oh no, cheems se a muerto de Amsiedad</div>)
        }
      }


  return (
    <div className='screen'>
    <p> 🍖: {hungry},💤:{sleep},🚽:{wPoop}, 💩: {poop}  </p>
    <div>{imgCheems()}</div>
    <div>{amsiedadStatus()}</div>
    
    {/* con toFixed lo convertimos mostramos  el numero entero 
    sin modificar con math.round peor loo vuelve string */}   
    </div>
  )
}

export default Cheems
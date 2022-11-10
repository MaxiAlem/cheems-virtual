import React, { createContext, useState,useEffect } from 'react'
import useInterval from '../hooks/useInterval';
import { statReg,crec } from '../helpers/api';

const CheemsContext = createContext()
const Conmtext = ({children}) => {
    
    const [hungry, setHungry] = useState(0)
    const [amsiedad, setAmsiedad] = useState(0)
    const [sleep, setSleep] = useState(0)
    const [poop, setPoop] = useState(0)
    const [age, setAge] = useState(0)
    const [money,setMoney] = useState(0)


    const context= {
        hungry,setHungry,
        amsiedad,setAmsiedad,
        sleep,setSleep,
        poop,setPoop,
        age,setAge,
        money,setMoney
    }
//stats por tiempo
    const time = 800
    useInterval(()=>{
      statReg(hungry,setHungry,10)
      statReg(sleep,setSleep,5);
      crec(amsiedad,age,setAge)
      setAmsiedad(Math.ceil((hungry+sleep+poop)/3))//Amsiedad Algorithm
    },time)


    
  return (
    <CheemsContext.Provider value = {context}>
        {children}
      
        </CheemsContext.Provider>
  )
};

export default Conmtext
export {CheemsContext}
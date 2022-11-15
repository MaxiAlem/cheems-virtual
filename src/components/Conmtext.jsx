import React, { createContext, useState,useEffect } from 'react'
import useInterval from '../hooks/useInterval';
import { statReg,crec } from '../helpers/api';

const CheemsContext = createContext()
const Conmtext = ({children}) => {
    
    const [hungry, setHungry] = useState(0)
    const [amsiedad, setAmsiedad] = useState(0)
    const [sleep, setSleep] = useState(0)
    const [poop, setPoop] = useState(0)
    const [wPoop, setWPoop]= useState(0)//ganas de hacer caca
    const [age, setAge] = useState(0)
    const [money,setMoney] = useState(0)


    const context= {
        hungry,setHungry,
        amsiedad,setAmsiedad,
        sleep,setSleep,
        poop,setPoop,
        age,setAge,
        money,setMoney,
        wPoop, setWPoop
    }
//stats por tiempo
    const time = 2400
    useInterval(()=>{
      statReg(hungry,setHungry,10)
      statReg(sleep,setSleep,5);
      crec(amsiedad,age,setAge)
      setAmsiedad(Math.ceil((hungry+sleep+(poop*20))/2))//Amsiedad Algorithm
    },time)
    if(wPoop >= 100){
      setWPoop(wPoop-100)
      setPoop(poop+1)
    }

    
  return (
    <CheemsContext.Provider value = {context}>
        {children}
      
        </CheemsContext.Provider>
  )
};

export default Conmtext
export {CheemsContext}
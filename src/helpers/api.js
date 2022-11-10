//regulador de stats
const statReg =(stat,setStat,mod)=>{
    if(stat < 100){
      setStat(stat+mod)
    }
  }

  //factor crecimiento
  const crec =(ams,age,setAge)=>{//terminar de fixear
    let factorCrec = 100
    if(ams !== 0){
         factorCrec = ((factorCrec-ams)/100)
        return setAge(age +factorCrec/10)
    }
    
  }

  export {
    statReg,crec
  }
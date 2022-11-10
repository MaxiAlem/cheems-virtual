//regulador de stats
const statReg =(stat,setStat,mod)=>{
    if(stat < 100){
      setStat(stat+mod)
    }
  }

  //factor crecimiento
  const crec =()=>{//

  }

  export {
    statReg,crec
  }
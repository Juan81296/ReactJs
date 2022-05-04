import { useEffect, useState } from "react"

const Contador = () => {
    console.log("Aqui hay un render del componente Contador")
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("El componente se montó");
    }, [])

    useEffect(()=>{
        console.log("El componente se modificó")
    },[count])

    const addHandler = () => {
        console.log("Se està sumando")
        setCount(count+1)
    }

    const restHandler = () => {
        console.log("Se està restando")
        setCount(count-1)
        if (count === 0){
            setCount(count-0)
        }
        
    }
  return (
      <>
          <div style={{color:"white",fontSize:"30px"}}> Contador </div>
          <button onClick={restHandler} style={{color:"white"}}> - </button>
          <strong> {count} </strong>
          <button onClick ={addHandler} style={{color:"white"}} > + </button>  
      </>
  )
}
export default Contador
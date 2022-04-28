import { useEffect, useState } from "react"
import {coffeData} from "../../data/coffeData"
import CoffeCard from "./CoffeCard"
const CoffeList = () => {

    const [coffe, setCoffe] = useState([])

    useEffect(() => {
      getCoffe()
    
    }, [])

    const getCoffe = () =>{

        const getCoffePromise = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve( coffeData )
            },2000)
        })

        getCoffePromise.then(data => {
            setCoffe(data);
        })
    }
    

  return  (
    <div>
        {coffe.map(m => <CoffeCard key={m.id} coffe={m}/>)}
    </div>
  )
}
export default CoffeList
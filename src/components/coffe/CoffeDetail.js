import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { coffeData } from "../../data/coffeData"

const CoffeDetail = () => {

    const { coffeId } = useParams()
    const [coffe, setCoffe] = useState({})
    



    useEffect(() => {
        setTimeout(() => {
            setCoffe(coffeData.find(m => m.id == coffeId))
        }, 2000);
      
    }, [coffeId])
    


  return (
    <>
    <div style={{color:"white",fontSize:"20px"}}>CoffeDetail :{coffeId}</div>
    <img alt="" style={{paddingLeft:"870px"}} src={coffe.pictureURL}></img>
    <li style={{color:"white",fontSize:"30px",fontWeight:"bolder"}}>{coffe.name}</li>
    <li style={{color:"brown",fontSize:"20px",fontWeight:"bolder"}}>{coffe.description}</li>
    <li style={{color:"gold",fontSize:"30px",fontWeight:"bolder"}}>{coffe.price}</li>
    </>
  ) 
}
export default CoffeDetail
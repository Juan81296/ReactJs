import { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = () => {

    const [add, setAdd] = useState(0)

    const onAdd = () =>{
        add(setAdd+1)
    }

  return (
    <div>
        <ItemCount onAdd={onAdd}/>
    </div>
  )
}
export default ItemDetail
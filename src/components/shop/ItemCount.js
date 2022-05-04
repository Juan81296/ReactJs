import { useState } from "react"

const ItemCount = ({onAdd}) => {

    const [count,setCount] = useState(0)
    
  return (
      <div>
    <button onClick={onAdd} >+</button>
        {count}
    <button>-</button>

    <button onClick={onAdd}>Agregar al carrito</button>

    </div>
  )
}
export default ItemCount


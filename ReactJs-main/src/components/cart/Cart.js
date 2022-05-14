import { useCartContext } from "../context/CartContext"
import CartListCard from "./CartListCard"

const CartList = () => {
  
  const { cart, deleteCart,deleteFromCart } = useCartContext()
  
  return (
    <>
      <div style={{fontSize:"30px"}}>Carrito</div>
      <button
        className="btn btn-success"
        onClick={ () => { deleteCart() } }>
          Vaciar lista
      </button>
      { cart.map( f => <CartListCard key={f.id} product={f}/> ) }
       <button
       className="btn btn-success"
       onClick={ () => { deleteFromCart() } }>
         Eliminar Item
     </button>
     </>
  )
}
export default CartList
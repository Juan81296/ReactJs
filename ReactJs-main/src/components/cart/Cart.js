import { useCartContext } from "../context/CartContext"
import CartListCard from "./CartListCard"

const CartList = () => {
  
  const { products, clearCart } = useCartContext()
  
  return (
    <>
      <div style={{fontSize:"30px"}}>Carrito</div>
      <button
        className="btn btn-success"
        onClick={ () => { clearCart() } }>
          Vaciar lista
      </button>
      { products.map( f => <CartListCard key={f.id} product={f}/> ) }
    </>
  )
}
export default CartList
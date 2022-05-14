import CartContextProvider, { useCartContext } from "../context/CartContext"
import CartListCard from "./CartListCard"


  const CartList = ({ producto }) => {
    const { deleteFromCart,deleteCart,cart } = useCartContext(CartContextProvider);
  
    const handleRemove = producto => {
      deleteFromCart(producto);
    }

  
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
       onClick={ () => { handleRemove(producto) } }>
         Eliminar Item
     </button>
     </>
  )
}

export default CartList
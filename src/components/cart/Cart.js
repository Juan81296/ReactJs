import CartContextProvider, { useCartContext } from "../context/CartContext"
import CartListCard from "./CartListCard"


  const CartList = ({ producto }) => {
    const {deleteCart,cart } = useCartContext(CartContextProvider);
  

  
  return (
    <>
      <div style={{fontSize:"50px",fontWeight:"bolder"}}>Tu compra</div>
      <button
        className="btn btn-success"
        onClick={ () => { deleteCart() } }>
          Vaciar lista
      </button>
      { cart.map( f => <CartListCard key={f.id} product={f}/> ) }
     </>
  )
}

export default CartList
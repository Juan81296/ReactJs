import { Link } from "react-router-dom";
import CartContextProvider, { useCartContext } from "../context/CartContext"
import CartListCard from "./CartListCard"


  const CartList = ({ producto }) => {
    const {deleteCart,cart,finalPrice } = useCartContext(CartContextProvider);
    

  return (
    <>
      <div style={{fontSize:"40px",fontWeight:"bolder"}}>Tu compra</div>
      <button
        className="btn btn-success"
        onClick={ () => { deleteCart() } }>
          Vaciar lista
      </button>
      <div style={{display:"flex"}}>
      { cart.map( f => <div> <CartListCard key={f.id} product={f}/></div> ) }
      </div>
      <h1 style={{fontSize:"40px",fontWeight:"bolder",color:"darkGold"}}>Monto total en carrito: $ {finalPrice()} </h1>
      <Link to={`/cartEnd`} className="btn btn-btn">
							Finalizar Compra
						</Link>
     </>
  )
}

export default CartList
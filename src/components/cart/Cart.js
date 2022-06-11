import { Link } from "react-router-dom";
import CartContextProvider, { useCartContext } from "../context/CartContext"
import CartListCard from "./CartListCard"

  const CartList = ({ producto }) => {
    const {deleteCart,cart,finalPrice } = useCartContext(CartContextProvider);
    

  return (
    <>
          			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url('https://i.pinimg.com/originals/45/71/da/4571da034ee71774cd41c4ee4462b8e0.jpg')`,
				}}
			>
      <div style={{height:"800px"}}>
      <div style={{textAlign:"center"}}></div>
      <h2 style={{fontSize:"60px", fontFamily:"fantasy",textAlign:"center",color:"#F9FFCE"}}>Tu compra:</h2>
      <button
        className="btn btn"
        style={{marginBottom:"20px",color:"#BC4141",fontSize:"30px",fontFamily:"fantasy"}}
        onClick={ () => { deleteCart() } }>
          Vaciar lista
      </button>
      <Link to={`/`} className="btn btn"style={{marginBottom:"20px",marginLeft:"80px" , color:"green",fontSize:"30px",fontFamily:"fantasy"}} >
							Seguir comprando
						</Link>
      <div style={{display:"flex"}}>
      { cart.map( f => <div key={f.id}><CartListCard  product={f}/></div> ) }
      </div>
      <h1 style={{fontSize:"40px",color:"#F9FFCE",fontFamily:"fantasy"}}>Monto total en tu carrito: $ {finalPrice()} </h1>
      <Link to={`/cartEnd`} className="btn btn-btn">
							Finalizar Compra
						</Link>
            </div>
            </div>
     </>
  )
}

export default CartList
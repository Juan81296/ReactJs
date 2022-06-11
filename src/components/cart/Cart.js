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
					backgroundImage: `url('https://wallpapercave.com/wp/wp8593951.jpg')`,width:"auto",height:"1500px"
				}}
			>
      <div style={{height:"800px"}}>
      <div style={{textAlign:"center"}}></div>
      <h2 style={{fontSize:"50px",textTransform:"uppercase", textAlign:"center",color:"#C9D555",fontFamily:"monospace"}}>Tu compra</h2>
      <button
        className="btn btn"
        style={{marginBottom:"20px",color:"#BC4141",fontSize:"20px"}}
        onClick={ () => { deleteCart() } }>
          Vaciar lista
      </button>
      <Link to={`/`} className="btn btn"style={{marginBottom:"20px",marginLeft:"40px", color:"green",fontSize:"20px"}} >
							Seguir comprando
						</Link>
      <div style={{display:"flex"}}>
      { cart.map( f => <div key={f.id}><CartListCard  product={f}/></div> ) }
      </div>
      <h1 style={{fontSize:"30px",color:"#C9D555",fontFamily:"monospace", textAlign:"center",textTransform:"uppercase"}}>Monto total en tu carrito: $ {finalPrice()} </h1>
      <Link to={`/cartEnd`} className="btn btn btn-lg btn-block">
							Ir a finalizar compra
						</Link>
            </div>
            </div>
     </>
  )
}

export default CartList
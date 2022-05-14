import CartContextProvider, { useCartContext } from "../context/CartContext";

const CartListCard = ( { product } ) => {

  const { deleteFromCart } = useCartContext(CartContextProvider);
  
    const handleRemove = product => {
      deleteFromCart(product);
    }

  
    return (
      <div style={{fontWeight:"bolder",paddingTop:"50px"}}>
        	<figure>
					<img src={product.picUrl} alt="Product" />
				</figure>
         <strong style={{fontSize:"40px"}}>{product.title}</strong>
          <h1 style={{fontWeight:"boder",fontSize:"30px",color:"darkBlue"}}> Cantidad de este producto: {product.quantity} </h1>
          <button
       className="btn btn-success"
       onClick={ () => { handleRemove(product) } }>
         Eliminar Item
     </button>
      </div>
    )
  }
  export default CartListCard
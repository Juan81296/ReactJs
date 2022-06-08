import CartContextProvider, { useCartContext } from "../context/CartContext";

const CartListCard = ( { product } ) => {

  const { deleteFromCart } = useCartContext(CartContextProvider);
  
    const handleRemove = product => {
      deleteFromCart(product);
    }
    const  unitPlusPrice = product.quantity * product.price    
  


    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl" style={{opacity:"0.9",backgroundColor:"gray",width:"auto"}}>
        	<figure>
					<img style={{height:"auto"}} src={product.picURL} alt="Product" />
				</figure>
         <strong style={{fontSize:"30px",textAlign:"center"}}>{product.title}</strong>
          <h1 style={{fontSize:"25px",color:"black",textAlign:"center"}}> Cantidad de este producto: {product.quantity} </h1>
          <h1 style={{fontSize:"30px",color:"darkGreen",fontWeight:"bolder",textAlign:"center"}}> Subtotal: ${unitPlusPrice} </h1>


          <button
       className="btn btn-success"
       onClick={ () => { handleRemove(product) } }>
         Eliminar Item
     </button>
      </div>
    )
  }
  export default CartListCard
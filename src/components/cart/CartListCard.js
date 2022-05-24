import CartContextProvider, { useCartContext } from "../context/CartContext";

const CartListCard = ( { product } ) => {

  const { deleteFromCart } = useCartContext(CartContextProvider);
  
    const handleRemove = product => {
      deleteFromCart(product);
    }
    const  unitPlusPrice = product.quantity * product.price    
  


    return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        	<figure>
					<img style={{height:"150px",width:"150px"}} src={product.picURL} alt="Product" />
				</figure>
         <strong style={{fontSize:"20px"}}>{product.title}</strong>
          <h1 style={{fontWeight:"bolder",fontSize:"15px",color:"darkBlue"}}> Cantidad de este producto: {product.quantity} </h1>
          <h1 style={{fontWeight:"bolder",fontSize:"13px",color:"darkGreen"}}> Total: ${unitPlusPrice} </h1>


          <button
       className="btn btn-success"
       onClick={ () => { handleRemove(product) } }>
         Eliminar Item
     </button>
      </div>
    )
  }
  export default CartListCard
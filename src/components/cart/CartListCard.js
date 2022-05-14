const CartListCard = ( { product } ) => {
  
    return (
      <div style={{fontWeight:"bolder",paddingTop:"50px"}}>
        	<figure>
					<img style={{height:"400px",width:"300px"}} src={product.picUrl} alt="Product" />
				</figure>
         <strong style={{fontSize:"40px"}}>{product.title}</strong>
          <h1 style={{fontWeight:"boder",fontSize:"30px",color:"darkBlue"}}> Cantidad de este producto: {product.quantity} </h1>
      </div>
    )
  }
  export default CartListCard
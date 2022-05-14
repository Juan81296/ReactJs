const CartListCard = ( { product } ) => {
  
    return (
      <div style={{fontWeight:"bolder",paddingTop:"50px"}}>
        	<figure>
					<img style={{height:"300px",width:"200px"}} src={product.picUrl} alt="Product" />
				</figure>
          {product.title}
      </div>
    )
  }
  export default CartListCard
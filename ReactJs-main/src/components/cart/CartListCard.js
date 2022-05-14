const CartListCard = ( { product } ) => {
  
    return (
      <div>
        	<figure>
					<img src={product.picUrl} alt="Product" />
				</figure>
          {product.title}
      </div>
    )
  }
  export default CartListCard
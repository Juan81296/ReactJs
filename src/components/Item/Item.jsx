import { collection, getDocs, getFirestore } from "firebase/firestore"
import React, { useState } from "react"
import { Link } from "react-router-dom"

	const Products = () =>{

	const [product, setProduct] = useState({})

	const db = getFirestore()
	
	const productList = collection(db,'items')
	getDocs(productList).then((snapshot) => {
		setProduct(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data})))
	 })

	return (
		<>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={product.picUrl} alt="Product" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{product.title}</h2>
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							${product.price}
						</span>
					</div>
					<div className="card-actions justify-end">
						<Link to={`/item/${product.id}`} className="btn btn-success">
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</>
	)

}
export default Products

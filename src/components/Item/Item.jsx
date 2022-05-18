import React from "react"
import { Link } from "react-router-dom"




const Item = ({ producto }) => {
	return (
		<>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={producto.picUrl} alt="Product" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{producto.title}</h2>
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							${producto.price}
						</span>
					</div>
					<div className="card-actions justify-end">
						<Link to={`/item/${producto.id}`} className="btn btn-success">
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Item

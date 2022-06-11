import React from "react"
import { Link } from "react-router-dom"




const Item = ({ producto }) => {
	return (
		<>
		<div style={{backgroundColor:"474646",color:"white",textAlign:"left"}}>
			<div className="card card-compact w-96 bg-base-100 shadow-xl" >
					<img style={{height:"auto",width:"auto"}} src={producto.picURL} alt="Product" />
				<div className="card-body" style={{backgroundColor:"#474646"}}>
					<h2 className="card-title" style={{alignItems:"center"}}>{producto.title}</h2>
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							${producto.price}
						</span>
					</div>
					<div className="card-actions justify-end">
						<Link to={`/item/${producto.id}`} className="btn btn">
							Ver más
						</Link>
					</div>
				</div>
			</div>
			</div>
		</>
	)
}

export default Item

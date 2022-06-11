import React, { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({ producto, myId }) => {
	const { title, brand, price, stock, picURL, description, category } =
		producto

	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
	}

	return (
		<>
			<div className="hero  bg-base-200">
				<div className="hero-content flex-col lg:flex-row" style={{backgroundColor:"#3A3A3A",color:"white"}}>
					<img
						src={picURL}
						className="max-w-sm rounded-lg shadow-2xl"
						alt={`${category}, ${title} de ${brand}`}
					/>
					<div  style={{color:"#DFDB5C"}}>
						<h1 className="text-3xl font-bold">{brand}</h1>
						<h2 className="text-5xl font-bold">{title}</h2>
						<p className="py-6">{description}</p>
						<div className="inline-block align-bottom mr-5">
							<span className="font-bold text-5xl leading-none align-baseline">
								${price}
							</span>
							{terminar ? (
								<Link
									to="/Cart"
									className="btn btn-success "
								>
									Terminar Compra
								</Link>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={myId} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail

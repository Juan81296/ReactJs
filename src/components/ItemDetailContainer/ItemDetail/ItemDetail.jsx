import React, { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
	const { title, brand, price, stock, picUrl, description, category, id } =
		producto

	const [terminar, setTerminar] = useState(false)

	const onAdd = (count) => {
		setTerminar(true)
		console.log(count)
	}

	return (
		<>
			<div className="hero  bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<img
						src={picUrl}
						className="max-w-sm rounded-lg shadow-2xl"
						alt={`${category}, ${title} de ${brand}`}
					/>
					<div>
						<h1 className="text-3xl font-bold">{brand}</h1>
						<h2 className="text-5xl font-bold">{title}</h2>
						<p className="py-6">{description}</p>
						<div className="inline-block align-bottom mr-5">
							<span className="font-bold text-5xl leading-none align-baseline">
								${price}
							</span>
							{terminar ? (
								<Link
									to="/cart"
									className="btn btn-success "
								>
									Terminar Compra
								</Link>
							) : (
								<ItemCount stock={stock} onAdd={onAdd} id={id} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemDetail

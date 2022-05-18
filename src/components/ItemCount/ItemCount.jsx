import React, { useState } from "react"
import { useAppContext } from "../context/AppContext"
import { useCartContext } from "../context/CartContext"

const ItemCount = ({ stock, onAdd, id }) => {
	const [count, setCount] = useState(0)

	const { addToCart } = useCartContext()
	const { product } = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

	const handleClick = (id, cantidad,title,picURL) => {
		const findProduct = product.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}
		addToCart(findProduct, cantidad,title,picURL)
		onAdd(count)
	}

	return (
		<>
			<div className="flex gap-4 mt-4">
				<div className="flex flex-row">
					<button className="btn btn-success" onClick={handleRemove}>
						<i className="fas fa-minus"></i>
					</button>
					<label className="alert alert-white">{count}</label>
					<button className="btn btn-success" onClick={handleAdd}>
						<i className="fas fa-plus"></i>
					</button>
				</div>
				<div>
					<button
						className="btn btn-success"
						onClick={() => handleClick(id, count,)}
					>
						Agregar al Carrito

					</button>
				</div>
			</div>
		</>
	)
}

export default ItemCount

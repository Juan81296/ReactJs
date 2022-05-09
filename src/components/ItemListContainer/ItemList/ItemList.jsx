import React from "react"
import Item from "../../Item/Item"

const ItemList = ({ category }) => {
	return (
		<>
			<div className="container mx-auto flex flex-wrap gap-4 justify-center">
				{category &&
					category.map((producto) => (
						<Item key={producto.id} producto={producto} />
					))}
			</div>
		</>
	)
}

export default ItemList

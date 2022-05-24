import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	// Logica
	const [cart, setCart] = useState([])

	const quantity = () => cart.reduce((sum, i) => { return sum + i.quantity }, 0)

	// Validar si está el item en el carrito
	const isInCart = (id) => cart.find((producto) => producto.id === id)

	// Agregar item al carrito
	const addToCart = (producto, cantidad) => {
		const newCart = [...cart]

		const productoIsInCart = isInCart(producto.id)

		if (productoIsInCart) {
			newCart[
				newCart.findIndex((prod) => prod.id === productoIsInCart.id)
			].quantity += cantidad

			setCart(newCart)
			return
		}

		producto.quantity = cantidad
		setCart([...newCart, producto])
	}
//Borrar item del carrito
	const deleteFromCart = (producto) => {
		const newCart = [...cart]

		const productIsInCart = isInCart(producto.id)

		if (!productIsInCart) {
			return
		}

		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

		setCart(deleteProduct)
	}
//Vaciar carrito completo
	const deleteCart = () => setCart([])

//Precio total del carrito 

    const finalPrice = () => {            
		let totalP = 0;
		cart.forEach ( c => totalP += ( c.price * c.quantity ) );
		return totalP;        
}                        
  

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				deleteFromCart,
				deleteCart,
				setCart,
				quantity,
				finalPrice
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContextProvider
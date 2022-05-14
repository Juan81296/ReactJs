import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  products: [],
})

export const useCartContext = () => {
  return useContext( CartContext )
}

export const CartProvider = ( {children} ) => {

  const [products, setProducts] = useState([])

  const addToCart = ( product ) => {
    setProducts( current => {
      return current.concat( product )
    })
  }

  const clearCart = () => {
    setProducts( [] )
  }

  const context = {
    products,
    addToCart,
    clearCart,
  }

  return (
    <CartContext.Provider value={ context }>
      {children}
    </CartContext.Provider>
  )
}
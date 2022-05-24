import { useEffect } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../context/CartContext"


const CartEnd = () => {


  const {cart,finalPrice} = useCartContext()
                     

  useEffect(() => {
  }, [])

  const userData  = async () =>{
    const user = {
      name:"juan",
      phone:"1324156",
      email:"juan@gmail",
    }

    const cartItems = cart.map(c => ({title:c.title, price:c.price,quantity:c.quantity}))

    const order = {
      buyer : user,
      items: cartItems,
      total: finalPrice()
    }

    console.log(order)

    const db = getFirestore()
    const cartCollection = collection(db, "cartList")

    const response = await addDoc(cartCollection,order) 
    console.log(response)
    console.log(response.id)

  }

  


  return (
    <div>
      <button onClick={userData} className="btn btn-succes">Comprar</button>
      <div></div>
    </div>
  )
}
export default CartEnd
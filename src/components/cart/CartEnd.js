import { useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../context/CartContext"
import swal from "sweetalert"



const CartEnd = () => {

  const db = getFirestore()
 

  const {cart,finalPrice} = useCartContext()
  var cartItems = cart.map(c => ({title:c.title, price:c.price,quantity:c.quantity}))
  const cartShowClient = cart.map(c => (c.title))
                     
  const initialValue = {
    name:"",
    mail:"",
    phone:""
  }
  const [user, setUser] = useState(initialValue)

  const inputCapture = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }
  const order = {
    buyer : user,
    items: cartItems,
    total: finalPrice()
  }
  const saveData = async(e)=>{
    e.preventDefault();
    try {
      await addDoc(collection(db,"datosCompra"),{
        ...user,
        ...order,
      })
      
    } catch (error) {
      
    }
    
    setUser({...initialValue})
    swal(`Muchas Gracias por tu compra, ${user.name}! Has adquirido :  ${JSON.stringify(cartShowClient)}. Precio total: $${finalPrice()}  A continuación enviaremos a tu mail el los pasos a seguir.`)
     cartItems = null
  }


  
    return (
      <>
      			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url('https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/26153648/Argentina-vs-Nigeria-Mundial-Rusia-2018-101.jpg')`,
				}}
			>
      <form style={{display:"flex"}} onSubmit={saveData}>
        <div className="card card-body">
          <div className="form-group">
            <input type="text" name="name" className="input input-bordered input-accent w-full max-w-xs" placeholder="Ingrese su nombre"
            onChange={inputCapture} value={user.name} style={{width:"auto"}} />

            <input type="email" name="mail" className="input input-bordered input-accent w-full max-w-xs" placeholder="Ingrese su mail"
            onChange={inputCapture} value={user.mail}  style={{width:"auto"}} />

            <input type="number" name="phone" className="input input-bordered input-accent w-full max-w-xs" placeholder="Ingrese su celular"
            onChange={inputCapture} value={user.phone}  style={{width:"auto"}} />
          </div>
          <button type="submit"className="btn btn-success" >Finalizar compra</button>
        </div>
        </form>
        </div>
      </>
    )
  }
  export default CartEnd

  

  



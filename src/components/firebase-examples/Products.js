import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const Products = () => {

  const [products, setProducts] = useState({})

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db,"items");
    getDocs(itemsCollection).then((snapshot)=>{
      setProducts(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data})))
    })


  }, [])
  



  return (
    <div> {products.title} </div>
  )
}
export default Products
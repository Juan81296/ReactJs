import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore,} from "firebase/firestore"

const Products = () => {
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db,"items")
        getDocs(itemsCollection).then(snapshot =>{
            const productList = []
        snapshot.docs.forEach(s =>{
            productList.push({id:s.id, ...s.data()})
        })
        console.log(productList)
        setProduct(productList)
        })
    }, [])
    

  return (
      <>
    <div>Products</div>
    <div> {product.map(p => <li>{p.title}</li>)} </div>
    <div> {product.map(p => <li>{p.description}</li>)} </div>

    </>
  )
}
export default Products
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db,"items");
    getDocs(itemsCollection).then((snapshot)=>{
      const productList = []
      snapshot.docs.forEach(s => {
        console.log(s.data());
        productList.push({id: s.id, ...s.data()})
      })
      console.log(productList)
      setProducts(productList)

    })


  }, [])
  



  return (
    <>
    <div>
      {products.map ( p => <li key={p.id}>{p.title}</li> )}
    </div>
    <div>
      {products.map ( p => <li key={p.id}>{p.description}</li> )}
    </div>
    <div>
      {products.map ( p => <li key={p.id}>{p.price}</li> )}
    </div>
    </>
  )
}
export default Products
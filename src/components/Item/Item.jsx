import React from "react"
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore} from "firebase/firestore"
import { useEffect,useState } from "react"



const Item = ({ producto }) => {

	const [products, setProducts] = useState([])
	
useEffect(() => {


    const db = getFirestore()

    const itemsCollection = collection(db,"items");
    getDocs(itemsCollection).then((snapshot)=>{
      const productList = []
      snapshot.docs.forEach(s => {
        console.log("PROBANDO",s.data());
        productList.push({id: s.id, ...s.data()})
      })
      console.log(productList)
      setProducts(productList)

    })


  }, [])

	return (
		<>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={products.picUrl} alt="Product" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{products.title}</h2>
					<div className="inline-block align-bottom mr-5">
						<span className="font-bold text-5xl leading-none align-baseline">
							${products.price}
						</span>
					</div>
					<div className="card-actions justify-end">
						<Link to={`/item/${products.id}`} className="btn btn-success">
							Ver más
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Item

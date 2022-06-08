import React, { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import { collection, getDocs, getFirestore} from "firebase/firestore"

import { useParams } from "react-router-dom"
const ItemListContainer = ({ greetings }) => {
	const {categoryId} = useParams()
	const [products, setProducts] = useState([])
	
	useEffect(() => {
		const db = getFirestore()
		const itemsCollection = collection(db,"items");
		const qry=itemsCollection
		getDocs(qry).then((snapshot)=>{
		  const productList = []
		  snapshot.docs.forEach(s => {
			  if(categoryId){				  
				  if(categoryId===s.data().category.id){
					productList.push({id: s.id, ...s.data()})
				  }
				
			  }else{
				productList.push({id: s.id, ...s.data()})
			  }
		  })
		  console.log(productList);
		  setProducts(productList)
	
		})

	
	  }, [categoryId])

	return (
		<>
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url('https://resizer.glanacion.com/resizer/NFrCrPkAZCuP0wVW7AmyaAvWPrI=/1200x746/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PFWPURLZBREOHADB3CLBU2GVDQ.jpg')`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">{greetings}</h1>
						<p className="mb-5">Indumentaria deportiva</p>
					</div>
				</div>
			</div>
			<div className="divider"></div>
			<ItemList category={products} />
		</>
	)
}

export default ItemListContainer

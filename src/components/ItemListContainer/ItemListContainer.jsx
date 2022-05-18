import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../service/asyncmock"
import ItemList from "./ItemList/ItemList"
import { collection, getDocs, getFirestore} from "firebase/firestore"
const ItemListContainer = ({ greetings }) => {
	// const [category, setCategory] = useState()
	// const { categoryId } = useParams()

	// useEffect(() => {
	// 	if (categoryId === undefined) {
	// 		getItem().then((resp) => setCategory(resp))
	// 	} else {
	// 		getItem().then((resp) =>
	// 			setCategory(resp.filter((product) => product.category === categoryId))
	// 		)
	// 	}
	// }, [categoryId])

	const [products, setProducts] = useState([])
	
	useEffect(() => {
	
		const db = getFirestore()
	
		const itemsCollection = collection(db,"items");
		getDocs(itemsCollection).then((snapshot)=>{
		  const productList = []
		  snapshot.docs.forEach(s => {
			//console.log("PROBANDO",s.data());
			productList.push({id: s.id, ...s.data()})
		  })
		  console.log(productList)
		  setProducts(productList)
	
		})

	
	  }, [])

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

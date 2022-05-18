import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../../service/asyncmock"
import ItemDetail from "./ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})
	const { id } = useParams()


	const [item, setItem] = useState({})

	useEffect(() => {
			const db = getFirestore()
	
			const PSG = doc(db,"items",id)
			getDoc(PSG).then(res => { 
				if (res.exists()){
					console.log(res)
					setItem(res.data())
				}
			 })
		}, [])
	return (
		<>
			<div className="container mx-auto my-8 max-w-4xl h-screen">
				<ItemDetail producto={item} myId={id}/>
			</div>
		</>
	)
}

export default ItemDetailContainer

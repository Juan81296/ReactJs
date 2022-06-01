import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
const ItemDetailContainer = () => {
	const { id } = useParams()


	const [item, setItem] = useState({})

	useEffect(() => {
			const db = getFirestore()
	
			const PSG = doc(db,"items",id)
			getDoc(PSG).then(res => { 
				if (res.exists()){
					setItem(res.data())
				}
			 })
		}, [id])
	return (
		<>
			<div className="container mx-auto my-8 max-w-4xl h-screen">
				<ItemDetail producto={item} myId={id}/>
			</div>
		</>
	)
}

export default ItemDetailContainer

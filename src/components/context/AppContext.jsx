import { collection, getDocs, getFirestore } from "firebase/firestore"
import React, { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {


		const [product, setProduct] = useState({})
	
		const db = getFirestore()
		
		const productList = collection(db,'items')
		getDocs(productList).then((snapshot) => {
			setProduct(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data})))
		 })
	
	return (
		<AppContext.Provider value={{ product }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider

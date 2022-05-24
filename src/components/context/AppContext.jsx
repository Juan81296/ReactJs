import React, { createContext, useContext, useEffect, useState } from "react"
import { collection, getDocs, getFirestore} from "firebase/firestore"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
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
		  setProducts(productList)
	
		})

	
	  }, [])

	return (
		<AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
	)
}

export default AppContextProvider

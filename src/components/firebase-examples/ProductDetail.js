import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ProductDetail = () => {

    const [item, setItem] = useState({})

useEffect(() => {
        const db = getFirestore()

        const PSG = doc(db,"items","C8reZ3pOC1C30wKePCVO")
        getDoc(PSG).then(res => { 
            if (res.exists()){
                console.log(res)
                setItem(res.data())
            }
         })
    }, [])
    

  return (
      <>
    <div>Aprendiendo Firebase</div>
    <div> {item.title} </div>
    <div> {item.description} </div>
    <div> {item.price} </div>
    </>
  )
}
export default ProductDetail
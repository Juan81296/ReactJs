import { useEffect, useState } from "react"
import StarshipsDetail from "./StarshipsDetail"

const StarshipsContainer = () => {


     const [starships, setStarships] = useState([])

    useEffect(()=>{
        getStarships()
    },[])

    const getStarships = () =>{
        const URL = "https://swapi.dev/api/starships"

        fetch(URL)
        .then(response => response.json())
        .then( data =>{
            //console.log(data.results);
            setStarships(data.results)
            //data.results.forEach(e => {
           //     console.log(e.name);
           // });
        })
    }

  return (
    <div style={{color:"red"}}>
        {starships.map( s => <StarshipsDetail key={s.url} starship={s}/>)}
    </div>
  )
}
export default StarshipsContainer
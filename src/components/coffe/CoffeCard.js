import { Link } from "react-router-dom"

const CoffeCard = (props) => {

    const {id,name,description,price,pictureURL} = props.coffe

  return (
    <div style={{paddingBottom:"150px"}}>
        <strong style={{color:"white",fontSize:"30px",fontWeight:"bolder"}}>{name}</strong>
        <div style={{color:"gold",fontSize:"30px"}}>{price}</div>
        <img style={{paddingLeft:"870px"}} src={pictureURL} alt=""></img>
        <Link style={{fontSize:"20px",color:"white"}} to={`/coffe/${id}`}>ver</Link>
    </div>
  )
}
export default CoffeCard
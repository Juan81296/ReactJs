import { Link } from "react-router-dom"
import CardWidget from "./CardWidget"

const NavBar = () => {

  return (
  
    <div className="flex justify-center">
        <li style ={{color:"white",fontSize:"20px"}}><Link to={"/"}>Inicio</Link></li>
        <li style ={{color:"white",fontSize:"20px"}}><Link to={"/contador"}>Contador</Link></li>
        <li style ={{color:"white",fontSize:"20px"}}>Contacto</li>
        <CardWidget/>
    </div>


  )

}
export default NavBar
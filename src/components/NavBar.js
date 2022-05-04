import { Link } from "react-router-dom"
import CardWidget from "./CardWidget"

const NavBar = () => {

  return (
    <div className="flex justify-center">
        <li style ={{color:"white",fontSize:"40px",fontWeight:"bolder",listStyle:"none",paddingRight:"25px"}}><Link to={"/"}>Inicio</Link></li>
        <li style ={{color:"white",fontSize:"40px",fontWeight:"bolder",listStyle:"none",paddingRight:"25px"}}><Link to={"/contacto"}>Contacto</Link></li>
        <CardWidget> <Link to={"/carrito"}></Link></CardWidget>
    </div>
  )

}
export default NavBar
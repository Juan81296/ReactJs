const Saludo = (props) => {
  return (
   <h1 className="text-5xl font-bold" style={{color:"red"}}>
       Hola {props.name} Tienes {props.edad } años </h1>
       
  )
}
export default Saludo
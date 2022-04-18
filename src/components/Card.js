const Card = ({children}) => {
  return (
      <div style ={{border: "2px solid blue"}} >
    <div>Empieza una card</div>
    {children}
    <div>Termina una card</div>
    </div>
  )
}
export default Card
const CoffeCard = (props) => {

    const {id,name,description,price,pictureURL} = props.coffe

  return (
    <div style={{paddingBottom:"150px"}}>
        <strong style={{color:"white",fontSize:"30px",fontWeight:"bolder"}}>{name}</strong>
        <div style={{color:"brown",fontSize:"15px",fontWeight:"bolder"}}>{description}</div>
        <div style={{color:"gold",fontSize:"30px"}}>{price}</div>
        <img style={{paddingLeft:"870px"}} src={pictureURL} alt=""></img>
    </div>
  )
}
export default CoffeCard
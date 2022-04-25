import React from 'react';
import ItemCount from './ItemCount.js';


const Item = ({ id, title, description, price, pictureURL,stock }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} café `);
  };

  return (
    <div>
      <img style={{marginLeft:"585px"}} src={pictureURL} alt="" />
      <h2 style={{fontSize:"30px",fontWeight:"bolder",color:"gray"}}>{title}</h2>
      <h3 style={{color:"brown",fontWeight:"bolder"}}>{description}</h3>
      <span style={{fontSize:"30px",color:"gold"}}>{price}</span>
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </div>
  );
};

export default Item;
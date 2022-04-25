import React from 'react';
import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div style={{paddingTop:"30px"}}>
      <div>
        <button class="btn"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span>{qty}</span>
        <button class="btn"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button style={{marginBottom:"50px"}} class="btn btn-wide"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;

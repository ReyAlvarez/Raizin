import { useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [items, setItems] = useState({});

  const onAdd = (quantity) => {
    addItem(item, quantity);
  };

  useEffect(() => {
    setItems(item);
  }, [item]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <img src={items.image} alt={items.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{items.title}</h1>
          <h4>{items.description}</h4>
          <hr />
          <h5>{items.quantity}</h5>
          <hr />
          <p>
            <b>${items.price}</b>
          </p>
          <div className="mb-5">
            <ItemCount stock={items.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(producto, quantity);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <img src={producto.image} alt={producto.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{producto.title}</h1>
          <h4>{producto.description}</h4>
          <hr />
          <h5>{producto.quantity}</h5>
          <hr />
          <p>
            <b>${producto.price}</b>
          </p>
          <div className="mb-5">
            <ItemCount stock={producto.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

import { React } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <img src={item.image} alt={item.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{item.title}</h1>
          <h4>{item.description}</h4>
          <hr />
          <h5>{item.quantity}</h5>
          <hr />
          <p>
            <b>${item.price}</b>
          </p>
          <div className="mb-5">
            <ItemCount stock={item.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

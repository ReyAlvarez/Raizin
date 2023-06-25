import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [itemStock, setItemStock] = useState(stock); //Indica 10 en el stock que puse
  const [itemAdded, setItemAdded] = useState(false);

  const increment = () => {
    if (count < itemStock) setCount(count + 1);
    // setItemsStock(itemStock - 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const addToCart = () => {
    if (count <= itemStock) {
      setItemStock(itemStock - count);
      // setCount(1);
      setItemAdded(true);
      onAdd(count);
      console.log(`Enviaste ${count} articulos al carrito el stock actual es de ${itemStock}`);
    }
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock]);

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-light px-3 fs-4" onClick={decrement}>
              <span>-</span>
            </button>
            <button type="button" className="btn">
              {count}
            </button>
            <button type="button" className="btn btn-light px-3 fs-4 " onClick={increment}>
              <span>+</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-light" onClick={itemAdded ? () => {} : addToCart}>
              Agregar al Carrito
            </button>
            {itemAdded ? (
              <Link to={"/cart"} className="btn btn-light">
                Finalizar Compra
              </Link>
            ) : (
              <button type="button" className="btn btn-light" onClick={addToCart}>
                Agregar al Carrito
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

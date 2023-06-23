import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [itemStock, setItemStock] = useState(stock); //Indica 10 en el
  const [itemAdded, setItemAdded] = useState(false);

  const increment = () => {
    if (count < itemStock) setCount(count + 1);
    // setItemsStock(itemStock - 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  // Durante el onAdd controla que hayan suficientes items en el Stock y luego   modifico el numero del Stock restando los que elige el usuario
  const onAdd = () => {
    if (count <= itemStock) {
      setItemStock(itemStock - count);
      setCount(1);
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
            {itemAdded ? (
              <Link to={"/cart"} className="btn btn-primary px-3 ms-3">
                Finalizar Compra
              </Link>
            ) : (
              <button type="button" className="btn btn-primary px-3 ms-3" onClick={onAdd}>
                Agregar al carrito
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

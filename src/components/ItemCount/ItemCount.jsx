import React, { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const [itemStock, setItemsStock] = useState(stock); //Indica 10 en el

  const increment = () => {
    if (count < itemStock) setCount(count + 1);
    // setItemsStock(itemStock - 1);
  };
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  // Durante el onAdd controla que hayan suficientes items en el Stock y luego modifico el numero del Stock restando los que elige el usuario
  const onAdd = () => {
    if (count <= itemStock) {
      setItemsStock(itemStock - count);
      setCount(1);
      console.log(`Enviaste ${count} articulos al carrito el stock actual es de ${itemStock}`);
    }
  };

  useEffect(() => {
    setItemsStock(stock);
  }, [stock]);

  return (
    <div className="container">
      <div className="row">
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
            <button type="button" className="btn btn-primary px-3 ms-3" onClick={onAdd}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

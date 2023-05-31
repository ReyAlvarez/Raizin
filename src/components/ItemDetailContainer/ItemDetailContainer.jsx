import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../json/products.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        let producto = products.find((item) => item.id === 1);
        resolve(producto);
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [item]);
  return <div>{item ? <ItemDetail item={item} /> : <p> Micelium Loading </p>}</div>;
};

export default ItemDetailContainer;

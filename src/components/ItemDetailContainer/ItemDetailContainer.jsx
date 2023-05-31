import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../json/products.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        let producto = products.find((item) => item.id === parseInt(id));
        resolve(producto);
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);
  return <div>{item ? <ItemDetail item={item} /> : <p> Micelium Loading </p>}</div>;
};

export default ItemDetailContainer;

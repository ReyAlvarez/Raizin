import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import products from "../json/products.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? products.filter((item) => item.category === id) : products);
      }, 2000);
    });
    promesa.then((data) => {
      setItems(data);
    });
  }, [id]);

  return (
    <div className="container-sm mt-5 text-center ">
      <div className="row w-100">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemsListContainer;

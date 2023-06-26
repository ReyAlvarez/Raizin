import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const getData = async () => {
      const q = !id ? itemsCollection : query(collection(db, "items"), where("category", "==", id));

      const querySnapshot = await getDocs(q);
      const productos = querySnapshot.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };
        return newProduct;
      });
      setTimeout(() => {
        setItems(productos);
        setLoading(false);
      }, 1000);
    };
    getData();
  }, [id]);
  return (
    <div className="container-sm mt-5 text-center ">
      <div className="row w-100">{loading ? <Loading /> : <ItemList items={items} />}</div>
    </div>
  );
};

export default ItemsListContainer;

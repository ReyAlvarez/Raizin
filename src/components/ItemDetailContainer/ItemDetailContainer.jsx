import { getFirestore, doc, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading";

// import products from "../json/products.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then((resultado) => {
      setItem({ id: resultado.id, ...resultado.data() });
      setLoading(false);
    });
  }, [id]);

  return <>{loading ? <Loading /> : <ItemDetail producto={item} />}</>;
};

export default ItemDetailContainer;

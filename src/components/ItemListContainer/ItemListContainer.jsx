import { useEffect, useState } from "react";
import "./ItemListContainer.css";
// import products from "../json/products.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc, addDoc, collection } from "firebase/firestore";
// import { getFirestore, getDocs, collection, where, query, addDoc } from "firebase/firestore";
import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import Loading from "../Loading";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Accerder a los productos desde Firestore

  // useEffect(() => {
  //   const db = getFirestore();
  //   const itemsCollection = collection(db, "items");
  //   getDocs(itemsCollection).then((resultado) => {
  //     if (resultado.size > 0){
  //     setItems(resultado.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
  //   } else {
  //     console.error("error al cargar los datos")
  //   }
  //   });
  // }, []);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = id ? query(itemsCollection, where("price", "==", 450)) : itemsCollection;
    getDocs(q).then((resultado) => {
      if (resultado.size > 0) {
        setItems(resultado.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
        setLoading(false);
      } else {
        console.error("error al cargar los datos");
      }
    });
  }, [id]);

  // Proceso de importacion
  // useEffect(() => {
  //     const db = getFirestore();
  //     const itemsCollection = collection(db, "items");

  //     products.forEach((producto) => {
  //         addDoc(itemsCollection, producto);
  //       });
  //       console.log("productos cargados en firestore");
  //     }, []);

  return (
    <div className="container-sm mt-5 text-center ">
      <div className="row w-100">{loading ? <Loading /> : <ItemList items={items} />}</div>
      {/* <div className="col-md-4 offset-md-2">
        <img src={items.image} alt={items.title} />
        </div>
        <div className="col-md-4">
        <h2>{items.title}</h2>
        <p>{items.price}</p>
      </div> */}
    </div>
  );
};

export default ItemsListContainer;

// Acceder a los productos desde el JSON
// useEffect(() => {
//   const promesa = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(id ? products.filter((item) => item.category === id) : products);
//     }, 2000);
//   });
//   promesa.then((data) => {
//     setItems(data);
//   });
// }, [id]);

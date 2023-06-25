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
      const q = !id ? itemsCollection : query(collection(db, "items"), where("type", "==", id));

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

// Acceder a los productos desde Firestore, consulta una coleccion sin filtros

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

// Proceso de exportacion
// useEffect(() => {
//     const db = getFirestore();
//     const itemsCollection = collection(db, "items");

//     products.forEach((producto) => {
//         addDoc(itemsCollection, producto);
//       });
//       console.log("productos cargados en firestore");
//     }, []);

import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";

const Concentracion = () => {
  const { productos, totalProductos, sumaTotal } = useContext(CartContext);

  return (
    <div className="container">
      <div className="row">
        <h1>Concentracion</h1>
        <p>
          Total de Conceptos <b>{totalProductos()}</b>
        </p>
      </div>
      {productos.map((producto) => (
        <div key={producto.id} className="col-md-4">
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid" style={{ maxHeight: "160px" }} />
          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>
        </div>
      ))}
      <p>
        Suma Total: <b>{sumaTotal()}</b>
      </p>
    </div>
  );
};

export default Concentracion;

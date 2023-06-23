import React from "react";
import { AppContext, useContext } from "./Context";

const OtroComp = () => {
  const { productos } = useContext(AppContext);
  return (
    <div>
      <h3>Otro Componenete para mostrar la lista de productos que traje usando useContext desde el componente Context</h3>
      <ul>
        {productos.map((item) => (
          <li>{`${item.nombre} $${item.precio}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default OtroComp;

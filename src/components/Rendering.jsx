import React from "react";
import useState from "react";

const Rendering = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Tecnicas de Rendering</h1>
      {loading ? <h2> Cargando... </h2> : <h3>Cargado!</h3>}
    </div>
  );
};

export default Rendering;

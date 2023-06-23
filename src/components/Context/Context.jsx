import React from "react";
import { useState, useContext } from "react";
import OtroComp from "./OtroComp";

// SIN CONTEXTO
// const Componente1 = ({isDarkMode}) => {
//     return (
//         <Componente2 isDarkMode={isDarkMode}/>
//     )
// }

// const Componente2 = ({isDarkMode}) => {
//     return (
//         <p>Esta en Modo Oscuro {isDarkMode}</p>
//     )
// }

// const Contexto = () => {
//     const [isDarkMode, setIsDarkMode] = useState("Si")
//     return(
//     <div>
//         <Componente1 isDarkMode={isDarkMode} />
//     </div>
//     )
// }

//Con Contexto

export const AppContext = React.createContext();

const Componente1 = () => {
  return <Componente2 />;
};

const Componente2 = () => {
  const { isDarkMode, tePortasteMal, productos, SALUDAR } = useContext(AppContext);

  return (
    <div>
      <p>Esta en Modo Oscuro {isDarkMode}</p>;<p>{tePortasteMal ? "Seras Castigada" : "Todo Bien!"}</p>
      <button onClick={SALUDAR}>Saludar</button>
    </div>
  );
};

const Context = () => {
  const [isDarkMode, setIsDarkMode] = useState("No tengo idea");
  const [tePortasteMal, setTePortasteMal] = useState(true);
  const productos = [
    { id: 1, nombre: "Barefoot", precio: 2000 },
    { id: 2, nombre: "Meditation", precio: 1557 },
  ];

  const SALUDAR = () => {
    alert("Hola, como estas!?");
  };

  return (
    <div>
      <AppContext.Provider value={{ isDarkMode, tePortasteMal, productos, SALUDAR }}>
        <Componente1 />
        <OtroComp />
      </AppContext.Provider>
    </div>
  );
};

export default Context;

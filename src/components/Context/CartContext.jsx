import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const productos = [
    { id: 1, nombre: "Barefoot", precio: 2000, imagen: "https://c1.staticflickr.com/9/8321/8031290764_a967daae23_b.jpg" },
    { id: 2, nombre: "Meditation", precio: 1557, imagen: "https://www.sociedelic.com/wp-content/uploads/2020/05/Meditation.jpg" },
    { id: 3, nombre: "Wim Hof", precio: 33, imagen: "https://th.bing.com/th/id/R.f5207f909aaea2a0eab79f4afb1c06b4?rik=HOUlHsBM7oWnwg&pid=ImgRaw&r=0" },
    { id: 4, nombre: "B&W Cellphone", precio: 857, imagen: "https://th.bing.com/th/id/OIP.wP5kXlcZJ_3xXBbc7J3S_QHaFj?pid=ImgDet&rs=1" },
    { id: 5, nombre: "Study Sanctuary", precio: 257, imagen: "" },
  ];

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let pos = cart.findIndex((product) => product.id === item.id);
      cart[pos].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (id) => {
    const items = cart.filter((product) => product.id !== id);
    setCart([...items]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const totalProductos = () => {
    return productos.lenght;
  };
  const cartTotal = () => {
    return productos.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const sumTotal = () => {
    return productos.reduce((acc, item) => (acc += item.quantity * item.price), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, productos, totalProductos, cartTotal, sumTotal }}>{children}</CartContext.Provider>
  );
};

export default CartContext;

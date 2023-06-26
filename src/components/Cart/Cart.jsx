import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import trash from "../../assets/images/trash.svg";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

  if (cartTotal() === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="alert alert-danger" role="alert">
              No hay <b>nada</b> en el carrito!
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Productos Seleccionados</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td colSpan={4}>&nbsp;</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => {
                      clear();
                    }}
                    title="Vaciar Carrito"
                  >
                    <img src={trash} alt="Eliminar Producto" width={32} />
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="img-fluid">
                    <img src={item.image} alt={item.title} width={50} />
                  </td>
                  <td className="align-middle">{item.title}</td>
                  <td className="align-middle">{item.quantity}</td>
                  <td className="align-middle">
                    {item.quantity} x {item.price}
                  </td>
                  <td className="text-center align-middle">${item.quantity * item.price}</td>
                  <td className="text-end">
                    <button className="btn btn-secondary text-light" onClick={() => removeItem(item.id)} title="Eliminar Producto">
                      <img src={trash} alt="Eliminar Producto" width={24} />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-end">
                  🛒 Total Carrito 🛒:
                </td>
                <td className="text-center">$ {sumTotal()}</td>
                <td className="align-middle text-end">
                  <Link to={"/checkout"} className="btn btn-secondary text-ligth">
                    Finalizar compra
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

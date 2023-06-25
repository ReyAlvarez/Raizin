import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import trash from "../../assets/images/trash.svg";

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
                  <td>
                    <img src={item.image} alt={item.title} width={50} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>
                    {item.quantity} x {item.price}
                  </td>
                  <td className="text-center">${item.quantity * item.price}</td>
                  <td className="text-end">
                    <button className="btn btn-light" onClick={() => removeItem(item.id)} title="Eliminar Producto">
                      <img src={trash} alt="Eliminar Producto" width={32} />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="text-end">
                  Total Carrito:
                </td>
                <td className="text-center">$ {sumTotal()}</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

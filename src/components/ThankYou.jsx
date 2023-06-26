import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
  const { orderId } = useParams();

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <div className="alert alert-light p-5" role="alert">
            <h1 className="fs-1 text">Agradecemos tu Compra 🙏!</h1>
            <p className="mb-3">
              Toma nota, de tu orden de Compra: #<b>{orderId}</b>🛍️
              <br />
              Te hablamos en breve para terminar tu compra
            </p>
            <p>
              <Link to={"/"} className="btn btn-secondary">
                Seguir viendo cositas
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

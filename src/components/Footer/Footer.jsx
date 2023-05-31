import React from "react";
import { Link } from "react-router-dom";
import email from "../../assets/images/envelope-paper-heart.svg";
import instagram from "../../assets/images/instagram.svg";
import logoRaizin from "../../assets/images/raizinLogo.png";

const Footer = () => {
  return (
    <div className="container-fluid row text-light pt-3 bg-secondary m-0">
      <div className="col-md-4">
        <img src={logoRaizin} alt="logo Raizin" width={128} className="pb-3" />
      </div>
      <div className="row col-md-4 ps-3 d-flex justify-content-center">
        <h4>Redes</h4>
        <Link to={"mailto:nacho.rei@gmail.com"} className="text-decoration-none text-light pb-3">
          <img src={email} alt="mail icon" target={"_blank"} className="pe-2" />
          E-mail
        </Link>
        <Link to={"#"} className="text-decoration-none text-light pb-3">
          <img src={instagram} alt="mail icon" target={"_blank"} className="pe-2" />
          Instagram
        </Link>
      </div>
      <div className="col-md-4 pt-3">
        <p>Copyright© 2023 Raizin.</p>
        <p>All Rights Reserved.</p>
        <p>
          Los productos de la tienda online son suplementos que no previenen, tratan o curan alguna enfermedad humana y no suplantan ni reemplazan la
          atención o terapias médicas u otros medicamentos de prescripción.
        </p>
        <p>Site Developed By Nacho Rey</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import logoRaizin from "../../assets/images/raizinLogo.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NabBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary position-fixed w-100 top-0 px-3 prueba">
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand">
          <img src={logoRaizin} alt="logo raizin" width={36} className="pt-0" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": 100 }}>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link active" aria-current="page">
                RAIZIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"#"} className="nav-link">
                Visión
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink to={"#"} activeClassName="fw-bold" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to={"/category/capsulas"} activeClassName="fw-bold" className="dropdown-item">
                    Capsulas
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/category/tinturas"} activeClassName="fw-bold" className="dropdown-item">
                    Tinturas
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to={"#"} activeClassName="fw-bold" className="nav-link">
                CBD
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NabBar;

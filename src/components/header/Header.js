import React, { useState } from "react";
import logo from "../../logorg1.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../routes";
import "./header.css";
const Header = () => {
  const [logedIn, setLogedIn] = useState(null);

  return (
    <header className="head-main">
      <Link className="head-nav-link" to={ROUTES.HOME}>
        <img className="head-logo" src={logo} alt="RG Principal" />
      </Link>
      <nav className="head-nav-main">
        <ol className="head-nav-ol">
          <li className="head-nav-li">
            <Link className="head-nav-link" to={ROUTES.HOME}>
              Placeholder
            </Link>
          </li>
          {logedIn ? (
            <>
              <li className="head-nav-li">
                <Link className="head-nav-link" to={ROUTES.HOME}>
                  Perfil
                </Link>
              </li>
              <li className="head-nav-li">
                <button className="head-nav-btn">Cerrar Sesión</button>
              </li>
            </>
          ) : (
            <>
              <li className="head-nav-li">
                <Link className="head-nav-link" to={ROUTES.SIGN_IN}>
                  Crear Cuenta
                </Link>
              </li>
              <li className="head-nav-li">
                <Link className="head-nav-link" to={ROUTES.LOG_IN}>
                  Iniciar Sesión
                </Link>
              </li>
            </>
          )}
        </ol>
      </nav>
    </header>
  );
};

export default Header;

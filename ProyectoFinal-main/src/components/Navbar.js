import React from "react";
import "../styles/Navbar.sass";
import menuicon from "../img/lista.png";
import { Outlet, Link } from "react-router-dom";
import Login from "../views/Login";
const Navbar = ({ isLogged, setisLogged }) => {
  const userNameLocal = localStorage.getItem("username");
  const Login = () => {
    if(localStorage.getItem("username")){
      setisLogged(!isLogged);
    }
    document.getElementById("difuminar").className = "difuminado";
    document.getElementById("login").style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const CerrarSesion = () => {
    setisLogged(!isLogged);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };
  console.log(userNameLocal);
  return (
    <div>
      <div id="headerHeight" className="NavNoMain">
        <header className="posSticky">
          <nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <img alt="" id="menuicon" src={menuicon} />
            </label>
            <label className="logo">MALABARJU</label>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/catalogue">Catalogo</Link>
              </li>
              {isLogged ? (
                <li>
                  <Link to={`/profile/${userNameLocal}`}>Perfil</Link>
                </li>
              ) : (
                <></>
              )}

              {isLogged ? (
                <li id="login-Button" onClick={CerrarSesion}>
                  Cerrar Sesion
                </li>
              ) : (
                <li id="login-Button" onClick={Login}>
                  Iniciar Sesion
                </li>
              )}
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;

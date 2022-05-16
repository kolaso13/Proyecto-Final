import React from "react";
import "../styles/MainNavbar.sass";
import menuicon from "../img/lista.png";
import { Outlet, Link } from "react-router-dom";
import users from "../data/usuarios.json";
const MainNavbar = ({ isLogged, setisLogged }) => {
  /*Logica*/
  const userNameLocal = localStorage.getItem("username");
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.pageYOffset !== 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  const Login = () => {
    setisLogged(!isLogged);
    document.getElementById("difuminar").className = "difuminado";
    document.getElementById("login").style.display = "flex";
    document.body.style.overflow = "hidden";
  };

  const CerrarSesion = () => {
    setisLogged(!isLogged);
    localStorage.removeItem("username");
  };
  console.log(userNameLocal);
  return (
    <div>
      <div id="headerContainer">
        <div id="headerDifuminado" className="NavMain">
          <header>
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
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainNavbar;

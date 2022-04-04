import React from "react";
import "../styles/MainNavbar.sass";
import menuicon from "../img/lista.png";
import { Outlet, Link } from "react-router-dom";
import users from "../data/usuarios.json";
const MainNavbar = () => {
  /*Logica*/
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.pageYOffset !== 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  return (
    <div>
      <div id="headerContainer">
        <div id="headerDifuminado">
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
                <li>
                  {users[0].user === "Adrian" ? (
                    <Link to={`/profile/${users[0].user}`}>Perfil</Link>
                  ) : (
                    <Link to="/login">Iniciar Sesión</Link>
                  )}
                </li>
                <li>
                  <Link to="/Login">Log in</Link>
                </li>
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

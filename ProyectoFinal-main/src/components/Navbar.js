import React from "react";
import "../styles/Navbar.sass";
import menuicon from "../img/lista.png";
import { Outlet, Link } from "react-router-dom";
import users from "../data/usuarios.json";
import Login from "../views/Login";
const Navbar = () => {
  const Login = () => {
    document.getElementById("difuminar").className = "difuminado";
    document.getElementById("login").style.display = "flex";
  };
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
              <li>
                {users[0].user === "Adrian" ? (
                  <Link to={`/profile/${users[0].user}`}>Perfil</Link>
                ) : (
                  <Link to="/login">Iniciar Sesión</Link>
                )}
              </li>
              <li onClick={Login}>Log in</li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;

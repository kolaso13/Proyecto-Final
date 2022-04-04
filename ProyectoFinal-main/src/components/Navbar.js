import React from "react";
import "../styles/Navbar.sass";
import menuicon from "../img/lista.png";
import { Outlet, Link } from "react-router-dom";
import users from "../data/usuarios.json";
const Navbar = () => {

    return (
        <div><div id="headerHeight">
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
                        <li>
                            <Link to="/Login">Log in</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
        </div>
    );
};

export default Navbar;

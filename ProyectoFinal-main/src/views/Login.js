import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/Login.sass";

const Login = ({ isLogged, setisLogged }) => {
  /*Logica*/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  function Cerrar() {
    document.getElementById("difuminar").className = "difuminar";
    document.getElementById("login").style.display = "none";
    document.body.style.overflow = "auto";
  }
  const [DatosError, setDatosError] = useState(false);
  function inicioSesion() {
    fetch("https://localhost:5001/api/UserDatas/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("Username").value,
        password: document.getElementById("Password").value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.username);
        setDatosError(false);
        window.location.reload();
        Cerrar();
      })
      .catch((err) => {
        setDatosError(true);
      });
  }
  return (
    <div id="login">
      <div className="input-container circle-x">
        <button
          onClick={() => Cerrar()}
          
        ><i className="pi pi-times-circle icono"></i></button>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Username" id="Username" />
        <i className="pi pi-user icono"></i>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Password" id="Password" />
        <i className="pi pi-lock icono"></i>
      </div>
      {DatosError ? (
        <p className="incorrecto">
          Tu contraseña no es correcta. Vuelve a comprobarla.
        </p>
      ) : (
        <p></p>
      )}
      <button onClick={() => inicioSesion()} id="btnlogin" type="submit">
        Log In
      </button>
    </div>
  );
};

export default Login;

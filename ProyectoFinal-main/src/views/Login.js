import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.sass";

const Login = ({ Logueado, setLogueado }) => {
  /*Logica*/
  // const [Logueado, setLogueado] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function Cerrar() {
    setDatosError(false);
    document.getElementById("difuminar").className = "difuminar";
    document.getElementById("login").style.display = "none";
    document.getElementById("Username").value = "";
    document.getElementById("Password").value = "";
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
        setDatosError(false);
        localStorage.setItem("logueado", true);
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
          className="pi pi-times-circle icono"
        ></button>
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

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../styles/Login.sass";

const Login = () => {
  /*Logica*/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="App">
      <div className="input-container">
        <input type="text" placeholder="Username" />
        <i class="pi pi-user"></i>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Password" />
        <i class="pi pi-lock"></i>
      </div>

      <button id="btnlogin" type="submit">
        Log In
      </button>
    </div>
  );
};

export default Login;

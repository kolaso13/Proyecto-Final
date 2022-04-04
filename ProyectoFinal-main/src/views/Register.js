import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  /*Logica*/
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card shadow-2-strong"
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Registro</h3>

                <div className="form-outline mb-4">
                  {errors.user && <span>Se requiere este campo</span>}
                  <input
                    {...register("user", {
                      required: true,
                      minLength: { value: 3 },
                    })}
                    placeholder="Usuario"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  {errors.password && <span>Se requiere este campo</span>}
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="d-flex justify-content-start mb-4">
                  <Link to="/login">Iniciar Sesión</Link>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block"
                  id="btnAcceso"
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

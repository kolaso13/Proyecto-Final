//React
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";

import Card from "../components/Card";
import Login from "./Login";
//Components
import Navbar from "../components/Navbar";

//Views

//Styles
import "../styles/Catalogue.sass";
import Footer from "../components/Footer";
const Catalogue = ({ data, setData, isLogged, setisLogged }) => {
  const [busqueda, setBusqueda] = useState("");
  const [Generos, setGeneros] = useState(null);
  const [dataFiltrada, setDataFiltrada] = useState(data);

  useEffect(() => {
    const obtenerDatos = async () => {
      const url = "https://localhost:5001/api/AnimeDatas";
      const respuesta = await fetch(url).then((res) => res.json());
      setDataFiltrada(respuesta);
    };
    obtenerDatos();
  }, []);

  const handleChangeF = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    console.log(terminoBusqueda);
    var resultadosBusqueda = data.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) &&
        Generos === null
      ) {
        return elemento;
      }
    });
    setDataFiltrada(resultadosBusqueda);
  };

  return (
    <>
      <div>
        <Login />
        <div id="difuminar">
          <Navbar isLogged={isLogged} setisLogged={setisLogged} />
          <br />
          <div className="container">
            <div id="filtros">
              <span className="p-input-icon-left">
                <i className="pi pi-search" style={{ fontSize: "20px" }} />
                <InputText
                  value={busqueda}
                  placeholder="Búsqueda por Nombre"
                  onChange={handleChangeF}
                />
              </span>
            </div>
            <br />
            <br />
            <div className="row">
              {dataFiltrada?.map((dato) => {
                return (
                  <div className="col-md-4" key={dato.name}>
                    <Card data={dato} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Catalogue;

//React
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Styles
import "../styles/Profile.sass";
import Login from "./Login";

const Profile = ({ data }) => {
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingUserInfo, setisEditingUserInfo] = useState(false);
  const { username } = useParams();
  const [DataPerfil, setDataPerfil] = useState(data);

  const [Nombre, setNombre] = useState("Peter");
  const [Apellido, setApellido] = useState("Plato");
  const [Edad, setEdad] = useState("34");
  const [Sexo, setSexo] = useState("Masculino");
  const [Biografia, setBiografia] =
    useState(`La biografía es un tipo o subgénero
  literario-histórico situado dentro de los géneros
  "memorialísticos", y a su vez integrados en los
  ensayísticos.`);

  const changeNombre = () => {};

  /*Logica*/
  const array = new Array();
  useEffect(() => {
    const obtenerDatos = async () => {
      const url = "https://localhost:5001/api/AnimeDatas";
      const respuesta = await fetch(url).then((res) => res.json());
      setDataPerfil(respuesta);
      console.log(respuesta);
    };
    obtenerDatos();
  }, []);
  // useEffect(() => {
  //   const obtenerDatos = () => {
  //     fetch(`https://localhost:5001/api/AnimeDatas/${animename}`)
  //       .then((response) => response.json())
  //       .then((message) => {
  //         array.push(message);
  //         setAnimeData(array);
  //         setIsLoading(false);
  //       });
  //   };
  //   obtenerDatos();
  // }, [animename]);

  // if (isLoading) {
  //   return (
  //     <div className="App">
  //       <h1>Cargando...</h1>
  //     </div>
  //   );
  // }
  return (
    <>
      <Login />
      <div id="difuminar">
        <Navbar />

        <div id="profileContent">
          <div id="profileTop">
            <img
              id="userAvatar"
              src={require("../img/profile.png")}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
            <h1 id="username">Username</h1>
          </div>
          <div id="profileBottom">
            <div id="userData">
              <h3>
                <b>Información</b>
                <div id="editbtn">
                  {" "}
                  {isEditingUserInfo ? (
                    <button
                      onClick={() => {
                        setisEditingUserInfo(!isEditingUserInfo);
                      }}
                    >
                      <i className="pi pi-pencil"></i>{" "}
                    </button>
                  ) : (
                    <button>
                      <i className="pi pi-pencil"></i>{" "}
                    </button>
                  )}
                </div>
              </h3>
              <hr />
              {isEditingUserInfo ? (
                <>
                  <h5>Nombre: Peter </h5>
                  <h5>Apellido: Plato</h5>
                  <h5>Edad: 34</h5>
                  <h5>Sexo: Masculino</h5>
                  <h5>
                    {" "}
                    Biografia: La biografía es un tipo o subgénero
                    literario-histórico situado dentro de los géneros
                    "memorialísticos", y a su vez integrados en los
                    ensayísticos.
                  </h5>
                </>
              ) : (
                <>
                  <div id="EditUserInfo">
                    <h5>Nombre:</h5>
                    <input
                      value={Nombre}
                      onChange={(e) => {
                        setNombre(e.target.value);
                      }}
                      style={{
                        height: "30px",
                        marginTop: "28px",
                        border: "none",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                  <div id="EditUserInfo">
                    <h5>Apellido:</h5>
                    <input
                      value={Apellido}
                      onChange={(e) => {
                        setApellido(e.target.value);
                      }}
                      style={{
                        height: "30px",
                        marginTop: "28px",
                        border: "none",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                  <div id="EditUserInfo">
                    <h5>Edad:</h5>
                    <input
                      value={Edad}
                      onChange={(e) => {
                        setEdad(e.target.value);
                      }}
                      style={{
                        height: "30px",
                        marginTop: "28px",
                        border: "none",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                  <div id="EditUserInfo">
                    <h5>Sexo:</h5>
                    <input
                      value={Sexo}
                      onChange={(e) => {
                        setSexo(e.target.value);
                      }}
                      style={{
                        height: "30px",
                        marginTop: "28px",
                        border: "none",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                  <div id="EditUserInfo">
                    <h5>Biografia:</h5>
                    <input
                      value={Biografia}
                      onChange={(e) => {
                        setBiografia(e.target.value);
                      }}
                      style={{
                        height: "auto",
                        marginTop: "28px",
                        width: "100%",
                        border: "none",
                        fontSize: "20px",
                        marginLeft: "10px",
                      }}
                    />
                  </div>
                  <div
                    style={{ margin: "20px", textAlign: "center", gap: "20px" }}
                  >
                    <button>Save</button>
                    <button
                      onClick={() => {
                        setisEditingUserInfo(!isEditingUserInfo);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
            <div id="userAnime">
              <h3>
                <b>Animes Favoritos</b>
              </h3>
              <hr />
              <div id="FavAnimesDiv">
                <table id="FavAnimesTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Anime Title</th>
                      <th>Score</th>
                      <th>Type</th>
                      <th>Episodes</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataPerfil?.map((dat) => {
                      return (
                        <tr key={dat.name}>
                          <td>1</td>
                          <td>
                            <img
                              src={dat.image}
                              style={{ width: "75px", height: "100px" }}
                            ></img>
                          </td>
                          <td>{dat.name}</td>
                          <td>{Math.floor(Math.random() * 100) + 1}</td>
                          <td>TV</td>
                          <td>{dat.episodes}</td>
                          <td>
                            <i className="pi pi-trash"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;

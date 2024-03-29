//React
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Profilebtn.css";
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Styles
import "../styles/Profile.sass";
import Login from "./Login";

const Profile = ({
  data,
  setData,
  dataAnimeFav,
  setdataAnimeFav,
  isLogged,
  setisLogged,
}) => {
  useEffect(() => {
    const obtenerDatos = async () => {
      const url = "https://localhost:5001/api/AnimeDatas";
      const respuesta = await fetch(url).then((res) => res.json());
      setDataPerfil(respuesta);
    };
    obtenerDatos();

    const obtenerDatos2 = async () => {
      const url = "https://localhost:5001/api/Anime_User";
      const respuesta = await fetch(url).then((res) => res.json());
      setdataAnimeFav(respuesta);
    };
    obtenerDatos2();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [isEditingUserInfo, setisEditingUserInfo] = useState(false);
  const { username } = useParams();
  const [DataPerfil, setDataPerfil] = useState(data);

  let dataAnimesFav = new Array();
  const [Nombre, setNombre] = useState("Undefined");
  const [Apellido, setApellido] = useState("Undefined");
  const [Edad, setEdad] = useState("Undefined");
  const [Sexo, setSexo] = useState("Undefined");
  const [Biografia, setBiografia] = useState(`Undefined`);
  const [Contraseña, setContraseña] = useState();
  const [Role, setRole] = useState();

  const dataAnimeFavUser = dataAnimeFav?.filter(
    (word) => word.username == username
  );

  if (DataPerfil != undefined && dataAnimeFavUser != undefined) {
    for (let i = 0; i < DataPerfil.length; i++) {
      for (let j = 0; j < dataAnimeFavUser.length; j++) {
        if (DataPerfil[i].name == dataAnimeFavUser[j].animeName) {
          dataAnimesFav.push(DataPerfil[i]);
        }
      }
    }
  }

  var [favorito, setFavorito] = useState(0);
  function borrarFavorito(animename) {
    fetch(
      `https://localhost:5001/api/Anime_User/${localStorage.getItem(
        "username"
      )}/${animename}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response[0].favoritoId != null) {
          favorito = response[0].favoritoId;
          setFavorito(favorito);
          borrando();
        } else {
        }
      })
      .catch();
  }
  function borrando() {
    fetch(`https://localhost:5001/api/Anime_User/${favorito}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(() => {
        console.log("removed");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    const obteniendoDatos = () => {
      fetch(`https://localhost:5001/api/UserDatas/${username}`)
        .then((response) => response.json())
        .then((response) => {
          if (response[0].firstName != null) {
            setNombre(response[0].firstName);
          }
          if (response[0].lastName != null) {
            setApellido(response[0].lastName);
          }
          if (response[0].edad != null) {
            setEdad(response[0].edad);
          }
          if (response[0].sexo != null) {
            setSexo(response[0].sexo);
          }
          if (response[0].biografia != null) {
            setBiografia(response[0].biografia);
          }
          setRole(response[0].role);
          setContraseña(response[0].password);
        })
        .catch();
    };
    obteniendoDatos();
  }, [username]);

  function actualizarDatos() {
    console.log(
      username +
        " " +
        Nombre +
        " " +
        Apellido +
        " " +
        Edad +
        " " +
        Sexo +
        " " +
        Biografia
    );
    let Info = {
      username: username,
      firstName: Nombre,
      lastName: Apellido,
      edad: Edad,
      sexo: Sexo,
      biografia: Biografia,
      role: Role,
      password: Contraseña,
    };
    fetch(`https://localhost:5001/api/UserDatas/${username}`, {
      method: "PUT",
      body: JSON.stringify(Info),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("Updated");
      setisEditingUserInfo(!isEditingUserInfo);
      // window.location.reload();
    });
  }

  /*Logica*/
  const usernameLocal = localStorage.getItem("username");
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
        <Navbar isLogged={isLogged} setisLogged={setisLogged} />

        <div id="profileContent">
          <div id="profileTop">
            <img
              id="userAvatar"
              src={require("../img/profile.png")}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
            <h1 id="username">{username}</h1>
          </div>
          <div id="profileBottom">
            <div id="userData">
              <h3>
                <b>Información</b>
                <div id="editbtn">
                  {" "}
                  {!isEditingUserInfo && usernameLocal === username ? (
                    <button
                      onClick={() => {
                        setisEditingUserInfo(!isEditingUserInfo);
                      }}
                    >
                      <i className="pi pi-pencil"></i>{" "}
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </h3>
              <hr />
              {!isEditingUserInfo ? (
                <>
                  <h5>Nombre: {Nombre} </h5>
                  <h5>Apellido: {Apellido} </h5>
                  <h5>Edad: {Edad}</h5>
                  <h5>Sexo: {Sexo}</h5>
                  <h5> Biografia: {Biografia}</h5>
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
                    <button onClick={() => actualizarDatos()} id="savebtn">
                      Save
                    </button>
                    <button
                      id="cancelbtn"
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
                      <th>Image</th>
                      <th>Anime Title</th>
                      <th>Score</th>
                      <th>Type</th>
                      <th>Episodes</th>
                      {usernameLocal === username ? <th>Delete</th> : <></>}
                    </tr>
                  </thead>
                  <tbody>
                    {dataAnimesFav?.map((dat) => {
                      return (
                        <tr key={dat.name}>
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
                          {usernameLocal === username ? (
                            <td>
                              <button
                                id="btn-borrar"
                                onClick={() => borrarFavorito(dat.name)}
                                className="pi pi-trash"
                              ></button>
                            </td>
                          ) : (
                            <></>
                          )}
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

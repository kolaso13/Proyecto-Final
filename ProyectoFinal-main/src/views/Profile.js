//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Styles
import "../styles/Profile.sass";

const Profile = ({ data }) => {
  console.log(data);
  const [isLoading, setIsLoading] = useState(true);
  const { animename } = useParams();
  const [DataPerfil, setDataPerfil] = useState(data);
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
    <div>
      <Navbar />
      <br />

      <div>
        <div id="contenido">
          <h3 id="username">Username</h3>
          <div id="Information">
            <div id="userInfo">
              <img
                src="../img/ShingekinoKyojin.jpg"
                alt=""
                style={{ width: "200px", height: "300px" }}
              />
              <p>Nombre: Peter</p>
              <p>Apellido: Plato</p>
              <p>Edad: 34</p>
            </div>
            <div id="userStats">
              <p>
                Biografia: La biografía 1​es un tipo o subgénero
                literario-histórico situado dentro de los géneros
                "memorialísticos", y a su vez integrados en los ensayísticos.2​
                Se configura modernamente, sobre todo, con las moralizantes
                Vidas paralelas de Plutarco y los distintos De viris illustribus
                y atraviesa la Edad Media característicamente en forma de
                hagiografía hasta alcanzar la biografía carolingia; se
                seculariza a partir del Renacimiento y reverdece en el siglo XIX
                con el Romanticismo, volviéndose luego con el Realismo mucho más
                riguroso y documental hasta la actualidad.
              </p>
              <div id="FavAnimes">
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
                          <td>x</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;

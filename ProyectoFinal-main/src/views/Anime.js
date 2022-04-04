//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";

//Styles
import "../styles/Anime.sass";

const Anime = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { animename } = useParams();
  const [AnimeData, setAnimeData] = useState();
  /*Logica*/
  const array = new Array();
  useEffect(() => {
    const obtenerDatos = () => {
      fetch(`https://localhost:5001/api/AnimeDatas/${animename}`)
        .then((response) => response.json())
        .then((message) => {
          array.push(message);
          setAnimeData(array);
          setIsLoading(false);
        });
    };
    obtenerDatos();
  }, [animename]);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <br />

      {console.log(AnimeData)}
      {AnimeData?.map((ani) => (
        <div className="card" key={ani.name} id="content">
          <img alt="" src={ani.image} />
          <h2>Anime name: {ani.name}</h2>
          <p>Anime Description: {ani.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Anime;

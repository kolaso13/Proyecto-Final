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

      {AnimeData?.map((ani) => (
        <div className="card" key={ani.name}>
          <div id="content">
            <div>
              <h3>{ani.name}</h3>
              <hr />
              <img alt="" src={ani.image} style={{ width: "250px" }} />
              <h5>Information</h5>
              <p>Episodes: {ani.chapters} </p>
              <p>Status: Not yet aired </p>
              <p>Aired: {ani.date} </p>
              <p>Premiered: Spring 2022 </p>
              <p>Broadcast: Saturdays at 23:00 (JST)</p>
              <p>Producers: TOHO animation</p>
              <p>Studios: {ani.studio}</p>
              <p>Genres: {ani.genre} </p>
              <p>Demographic: Shounen </p>
              <p>Duration: Unknown </p>
            </div>
            <div>
              <h5>Sinopsis</h5>
              <p>{ani.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Anime;

//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";

//Styles
import "../styles/Anime.sass";

const Anime = ({ data }) => {
  /*Logica*/
  //Cogemos los parametros
  const { animename } = useParams();
  const dataFiltrada = data.filter((dato) => dato.name === animename);

  const [AnimeData, setAnimeData] = useState(dataFiltrada);

  return (
    <div>
      <Navbar />
      <br />
      {AnimeData?.map(() => (
        <h1>Hola</h1>
      ))}
      {AnimeData?.map((ani) => {
        return (
          <div className="card" key={ani.name} id="content">
            <img alt="" src={ani.image} />
            <h2>Anime name: {ani.name}</h2>
            <p>Anime Description: {ani.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Anime;

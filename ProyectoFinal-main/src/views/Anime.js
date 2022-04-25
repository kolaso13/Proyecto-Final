//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <div key={ani.name}>
          <div id="content">
            <h3>{ani.name}</h3>
            <hr />
            <div className="d-flex flex-row">
              <div id="info-Menu">
                <img alt="" src={ani.image} style={{ width: "250px" }} />
                <div>
                  <h5>Information</h5>
                  <hr />
                  <p>Episodes: {ani.episodes} </p>
                  <p>Status: {ani.status} </p>
                  <p>Aired: {ani.date} </p>
                  <p>Premiered: {ani.premiered} </p>
                  <p>Broadcast: {ani.broadcast}</p>
                  <p>Studios: {ani.studios}</p>
                  <p>Genres: {ani.genres} </p>
                  <p>Demographic: {ani.demographic} </p>
                  <p>Duration: {ani.duration} </p>
                </div>
              </div>
              <div className="m-2">
                <div id="position" className="d-flex flex-row">
                  <p>
                    Score: <b>{Math.floor(Math.random() * 100) / 10}</b>{" "}
                    <i className="pi pi-star"></i>
                  </p>
                  <p>
                    Ranked: <b>#{Math.floor(Math.random() * 100) + 1}</b>
                  </p>
                  <p>
                    Popularity <b>#{Math.floor(Math.random() * 100) + 1}</b>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Sinopsis</b>
                  </p>
                  <hr />
                  <p>{ani.description}</p>
                </div>
                <div>
                  <p>
                    <b>Background</b>
                  </p>
                  <hr />
                  <p>
                    No background information has been added to this title. Help
                    improve our database by adding background information
                  </p>
                </div>
                <div>
                  <p>
                    <b>MALxJapan -More than just anime-</b>
                  </p>
                  <hr />
                  <div className="d-flex flex-row">
                    <div className="MoreJA">
                      <p>🎨 Tokyo Revengers List Designs 🎨</p>
                      <img
                        alt=""
                        src="https://cdn.myanimelist.net/resources/mxj_panel/2022/20220421_TR.png"
                        style={{ width: "250px" }}
                      />
                    </div>
                    <div className="MoreJA">
                      <p>
                        Watch official Netflix Vtuber N-ko create her very own
                        anime list! 🐏
                      </p>
                      <img
                        alt=""
                        src="https://cdn.myanimelist.net/resources/mxj_panel/2022/20220412_n-ko.png"
                        style={{ width: "250px" }}
                      />
                    </div>
                    <div className="MoreJA">
                      <p>
                        The results are in! Take a look through MAL's first
                        official anime Yearbook{" "}
                      </p>
                      <img
                        alt=""
                        src="https://cdn.myanimelist.net/images/mxj/20220316/yearbook.png"
                        style={{ width: "250px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Anime;

//React
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Styles
import "../styles/Anime.sass";
import Login from "./Login";

const Anime = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const { animename } = useParams();
  const [isFav, setisFav] = useState(false);
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
      <Login />
      <div id="difuminar">
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
                    {isFav ? (
                      <button onClick={() => setisFav(!isFav)}>
                        <i className="pi pi-heart-fill"></i>
                      </button>
                    ) : (
                      <button onClick={() => setisFav(!isFav)}>
                        <i className="pi pi-heart"></i>
                      </button>
                    )}

                    <h5>Information</h5>
                    <hr />
                    <p>
                      <span className="negro">Episodes:</span> {ani.episodes}{" "}
                    </p>
                    <p>
                      <span className="negro">Status:</span> {ani.status}{" "}
                    </p>
                    <p>
                      <span className="negro">Aired:</span> {ani.date}{" "}
                    </p>
                    <p>
                      <span className="negro">Premiered:</span> {ani.premiered}{" "}
                    </p>
                    <p>
                      <span className="negro">Broadcast:</span> {ani.broadcast}
                    </p>
                    <p>
                      <span className="negro">Studios:</span> {ani.studios}
                    </p>
                    <p>
                      <span className="negro">Genres:</span> {ani.genres}{" "}
                    </p>
                    <p>
                      <span className="negro">Demographic:</span>{" "}
                      {ani.demographic}{" "}
                    </p>
                    <p>
                      <span className="negro">Duration:</span> {ani.duration}{" "}
                    </p>
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
                      No background information has been added to this title.
                      Help improve our database by adding background information
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
                        <a
                          href="https://mxj.myanimelist.net/liststyle_TR2022/?utm_source=MAL&utm_medium=top-mxj&utm_content=liststyle_TR2022&_gl=1%2a1k077ay%2a_ga%2aMTA5MDE3OTAwMS4xNjQxOTgyNjk4%2a_ga_26FEP9527K%2aMTY1MDg4MjYxOS41LjEuMTY1MDg4MzIwOS41OA.."
                          alt=""
                          target="_blank"
                        >
                          <img
                            alt=""
                            src="https://cdn.myanimelist.net/resources/mxj_panel/2022/20220421_TR.png"
                            style={{ width: "250px" }}
                          />
                        </a>
                      </div>
                      <div className="MoreJA">
                        <p>
                          Watch official Netflix Vtuber N-ko create her very own
                          anime list! 🐏
                        </p>
                        <a
                          href="https://mxj.myanimelist.net/netflix_n-ko/?utm_source=MAL&utm_medium=title-mxj&utm_content=nko&_gl=1%2a18907fn%2a_ga%2aMTA5MDE3OTAwMS4xNjQxOTgyNjk4%2a_ga_26FEP9527K%2aMTY1MDg4MjYxOS41LjEuMTY1MDg4MzIwOS41OA.."
                          alt=""
                          target="_blank"
                        >
                          <img
                            alt=""
                            src="https://cdn.myanimelist.net/resources/mxj_panel/2022/20220412_n-ko.png"
                            style={{ width: "250px" }}
                          />
                        </a>
                      </div>
                      <div className="MoreJA">
                        <p>
                          The results are in! Take a look through MAL's first
                          official anime Yearbook{" "}
                        </p>
                        <a
                          href="https://mxj.myanimelist.net/yearbook2021/?utm_source=MAL&utm_medium=title-mxj&utm_content=yearbook&_gl=1%2a18907fn%2a_ga%2aMTA5MDE3OTAwMS4xNjQxOTgyNjk4%2a_ga_26FEP9527K%2aMTY1MDg4MjYxOS41LjEuMTY1MDg4MzIwOS41OA.."
                          alt=""
                          target="_blank"
                        >
                          <img
                            alt=""
                            src="https://cdn.myanimelist.net/images/mxj/20220316/yearbook.png"
                            style={{ width: "250px" }}
                          />
                        </a>
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
    </div>
  );
};

export default Anime;

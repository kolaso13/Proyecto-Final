//React
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Catalogue from "./views/Catalogue";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Anime from "./views/Anime";
//Styles
import "./App.sass";
import NotFoundPage from "./views/NotFoundPage";
import Login from "./views/Login";
import Register from "./views/Register";
import { useEffect, useState } from "react";

function App() {
  /*Logica*/

  const [data, setData] = useState();
  const [dataAnimeFav, setdataAnimeFav] = useState();
  useEffect(() => {
    const obtenerDatosDataAnime = async () => {
      let url = "https://localhost:5001/api/AnimeDatas";
      let respuesta = await fetch(url).then((res) => res.json());
      setData(respuesta);
    };
    obtenerDatosDataAnime();
  }, []);

  useEffect(() => {
    const obtenerDatosAnimeFav = async () => {
      let url2 = "https://localhost:5001/api/Anime_User";
      let respuesta2 = await fetch(url2).then((res) => res.json());
      setdataAnimeFav(respuesta2);
    };
    obtenerDatosAnimeFav();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route
          path="catalogue"
          element={<Catalogue data={data} setData={setData} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          exact
          path="profile/:username"
          element={
            <Profile
              data={data}
              setData={setData}
              dataAnimeFav={dataAnimeFav}
              setdataAnimeFav={setdataAnimeFav}
            />
          }
        />
        <Route
          exact
          path="anime/:animename"
          element={<Anime data={data} dataAnimeFav={dataAnimeFav} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

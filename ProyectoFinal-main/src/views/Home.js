import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import { Carousel } from "primereact/carousel";
import "../styles/Home.sass";
import "primeicons/primeicons.css";
const Home = ({ data, setData }) => {
  /*Logica*/

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const animeTemplate = (anime) => {
    return (
      <div className="anime-item">
        <div className="anime-item-content">
          <div className="mb-3">
            <img
              src={`${anime.image}`}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={anime.name}
              className="anime-image"
            />
          </div>
          <div>
            <h4 className="mb-1">{anime.name}</h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <MainNavbar />
      <hr></hr>
      <div className="carousel">
        <div className="card">
          <Carousel
            value={data}
            numVisible={5}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            itemTemplate={animeTemplate}
            header={<h2>Popular en MALABARJU</h2>}
          />
        </div>
      </div>

      <hr></hr>
      <div className="carousel">
        <div className="card">
          <Carousel
            value={data}
            numVisible={5}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            itemTemplate={animeTemplate}
            header={<h2>Tendencias ahora</h2>}
          />
        </div>
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Home;

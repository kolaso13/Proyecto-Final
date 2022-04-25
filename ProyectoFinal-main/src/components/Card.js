//React
import { Link } from "react-router-dom";
import "../styles/Card.sass";
const Card = ({ data }) => {
  const imgStyles = {
    height: "450px",
    objectFit: "cover",
    width: "auto",
  };

  return (
    <div className="card carta">
      <img
        src={data.image}
        alt={data.name}
        className="card-img-top imagen"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{data.name}</h4>
        <Link to={`/anime/${data.name}`}>
          <button id="cataloguebtn">Ver</button>
        </Link>
      </div>
    </div>
    // <div className="views-row views-row-1 views-row-odd views-row-first col-sm-6 col-md-4 col-lg-3">
    //   <div className="views-field-nothing">
    //     <span className="field-content">
    //       <a
    //         href="/cartelera/ambulance-plan-de-huida.html"
    //         title="AMBULANCE. PLAN DE HUIDA"
    //       >
    //         <img
    //           src="https://www.cinespalafox.com/sites/default/files/imagecache/listadoCartelera/PosterAmbulance1Final.jpg"
    //           alt=""
    //           title=""
    //           class="imagecache imagecache-listadoCartelera imagecache-default imagecache-listadoCartelera_default img-responsive"
    //           width="270"
    //           height="400"
    //         />
    //         <div class="caption">
    //           <h2>AMBULANCE. PLAN DE HUIDA</h2>
    //           <span>Comprar entradas</span>
    //         </div>
    //       </a>
    //     </span>
    //   </div>
    // </div>
  );
};

export default Card;

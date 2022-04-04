//React
import { Link } from "react-router-dom";
import "../styles/Card.sass";
const Card = ({ data }) => {
  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };

  return (
    <div className="card carta">
      <img
        src={data.image}
        alt={data.name}
        className="card-img-top"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{data.name}</h4>
        <Link to={`/anime/${data.name}`}>
          <button className="btn btn-secondary">Ver</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

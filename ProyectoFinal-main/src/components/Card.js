//React
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Card.sass";
const Card = ({ data }) => {
  const [visible, setVisible] = useState(false);
  const imgStyles = {
    height: "450px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Link to={`/anime/${data.name}`}>
        <img
          src={data.image}
          alt={data.name}
          className="card-img-top imagen"
          style={imgStyles}
        />
      </Link>
      <div className="card-body">
        {visible ? (
          <h4 className="text">{data.name}</h4>
        ) : (
          <h4 className="text" style={{ display: "none" }}>
            {data.name}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Card;

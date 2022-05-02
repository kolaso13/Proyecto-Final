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
    boxShadow: "black 2px 5px 15px",
    borderRadius: "15px",
  };

  return (
    <div
      className="card"
      style={{
        border: "none",
        borderRadius: "15px",
      }}
    >
      <Link to={`/anime/${data.name}`}>
        <img
          src={data.image}
          alt={data.name}
          className="card-img-top imagen"
          style={imgStyles}
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
        />
      </Link>
      <div className="card-body">
        {visible ? (
          <h4 className="text" onMouseEnter={() => setVisible(true)}>
            {data.name}
          </h4>
        ) : (
          <h4
            className="text"
            style={{ display: "none" }}
            onMouseEnter={() => setVisible(true)}
          >
            {data.name}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Card;

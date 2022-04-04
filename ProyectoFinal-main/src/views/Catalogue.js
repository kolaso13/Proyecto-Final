//React
import React, { useEffect, useState } from "react";

import Card from "../components/Card";

//Components
import Navbar from "../components/Navbar";

//Views

//Styles
const Catalogue = ({ data, setData }) => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          {data?.map((dato) => {
            console.log(dato);
            return (
              <div className="col-md-4" key={dato.name}>
                <Card data={dato} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;

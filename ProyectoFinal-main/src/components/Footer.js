import React from "react";
import "../styles/Footer.sass";
const Footer = () => {
  /*Logica*/
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © 2020 Copyright - {}
        <a className="text-dark" href="">
          Malabarju.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

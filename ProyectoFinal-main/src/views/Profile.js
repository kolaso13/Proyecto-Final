//React
import React from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";

//styles
import "../styles/Profile.sass";
const Profile = () => {
  /*Logica*/
  const { username } = useParams();
  return (
    <div>
      <Navbar />
      <br />
      <div className="content">
        <h1>ProfilePage: {username}</h1>
      </div>
    </div>
  );
};

export default Profile;

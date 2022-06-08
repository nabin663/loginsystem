import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const history = useNavigate();
  const handleLogout = () => {
    history("/");
  };

  return (
    <div className="container">
      <button id="boton" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

import React from "react";
import "./AuthFolder.css";
import smalllogo from "../../assets/logosmall.png";
import RegisterInput from "./RegisterInput";

function Register() {
  return (
    <div className="Login">
      <div className="Login-nav">
        <img src={smalllogo} width="50px" alt="beautify auth" />
      </div>
      <div className="become-a-vendor pt-4">
        <p>Become a Vendor </p>
      </div>
      <RegisterInput />
    </div>
  );
}

export default Register;

import React from "react";
import "./AuthFolder.css";
import LoginInput from "./LoginInput";
import smalllogo from "../../assets/logosmall.png"

function Login() {
  return (
    <div className="Login ">
      <div className='Login-nav'>
          <img src={smalllogo} width="50px" alt="beautify auth"/>
        </div>
        <div className='become-a-vendor pt-4'>
            <p>Welcome back</p>
        </div>
      <LoginInput />
    </div>
  );
}

export default Login;

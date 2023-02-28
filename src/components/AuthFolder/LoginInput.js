import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginInput() {
  const [emailAddress, setEmailAddress] = useState("");
  const [passWord, setPassword] = useState("");

  const navigate = useNavigate();

  const formData = new FormData();

  formData.append("email", emailAddress);
  formData.append("password", passWord);

  const Login = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "https://server.dianiapp.me/vendors/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      }).then((res) => {
        if (res.status === 200) {
          localStorage.setItem(
            "vendorID",
            JSON.stringify(res.data.data.vendor)
          );
          console.log("xxxxx");
          localStorage.setItem("authToken", res.data.auth_token);
          axios.defaults.headers.common["Authorization"] =
            "Bearer" + res.data.auth_token;
          navigate("/dashboard");
        } else {
          alert(res.eror);
        }
      });
    } catch (error) {
      console.log("rrr", error.response);
    }
  };
  return (
    <div className="LoginInput grid place-content-center">
      <form grid onSubmit={Login}>
        <div className="grid input-div  w-screen place-content-center">
          <label className="input-div">Email</label>
          <div className="input-div-space flex justify-between items-center">
            <div className="ml-6">
              <img src="/images/emailIcon.png" className="input-icon" />
            </div>
            <input
              type="text"
              placeholder="david@gmail.com"
              className="input-space"
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid input-div w-screen place-content-center">
          <label className="input-div">Password</label>
          <div className="input-div-space flex justify-between items-center">
            <div className="ml-6">
              <img src="/images/lockicon.png" className="input-icon" />
            </div>
            <input
              type="password"
              placeholder="*******"
              //   className="input-space"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="submit-div pt-6">
          <input
            type="submit"
            value="Start Selling"
            className="submit-div-button flex place-content-center"
          />
        </div>
      </form>

      <div className="grid w-screen place-content-center py-4 text-zinc-600">
        <p className="mx-auto">Create Account</p>
        <p className="mx-auto">Cancel</p>
      </div>
    </div>
  );
}

export default LoginInput;

import axios from "axios";
import React, { useState } from "react";

function RegisterInput() {
  const [vendorName, setVendorName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [passWord, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formData = new FormData();
  formData.append("name", vendorName);
  formData.append("email", emailAddress);
  formData.append("phone", phoneNumber);
  formData.append("vendor_category", productCategory);
  formData.append("password", passWord);
  formData.append("confirmPassword", confirmPassword);

  const Registerfn = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "https://server.dianiapp.me/vendors/new",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      }).then((res) => {
        console.log("response", res);
      });
    } catch (error) {
      console.log("errr", error.response);
    }
  };
  return (
    <div className="LoginInput grid place-content-center">
      <form grid onSubmit={Registerfn}>
        <div className="grid input-div  w-screen place-content-center">
          <label className="input-div">Name</label>
          <div className="input-div-space flex justify-between items-center">
            {/* <div className='ml-6'><img src='/images/emailIcon.png' className='input-icon'/></div> */}
            <input
              type="text"
              placeholder="David Monroe"
              className="input-space"
              onChange={(e) => {
                setVendorName(e.target.value);
              }}
            />
          </div>
        </div>
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
        <div className="grid input-div  w-screen place-content-center">
          <label className="input-div">Phone Number</label>
          <div className="input-div-space flex justify-between items-center">
            <div className="ml-6">
              <img src="/images/emailIcon.png" className="input-icon" />
            </div>
            <input
              type="text"
              placeholder="254000000000"
              className="input-space"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid input-div  w-screen place-content-center">
          <label className="input-div">Product Category</label>
          <div className="input-div-space flex justify-between items-center">
            <div className="ml-6">
              <img src="/images/emailIcon.png" className="input-icon" />
            </div>
            <select
              className="input-space"
              onChange={(e) => {
                setProductCategory(e.target.value);
              }}
            >
              <option value="Food">Food</option>
              <option value="Drinks">Drinks</option>
              <option value="Diving">Diving</option>
            </select>
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
              className="input-space"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid input-div w-screen place-content-center">
          <label className="input-div"> Confirm Password</label>
          <div className="input-div-space flex justify-between items-center">
            <div className="ml-6">
              <img src="/images/lockicon.png" className="input-icon" />
            </div>
            <input
              type="password"
              placeholder="*******"
              className="input-space"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
        <p className="mx-auto">Sign In</p>
        <p className="mx-auto">Cancel</p>
      </div>
    </div>
  );
}

export default RegisterInput;

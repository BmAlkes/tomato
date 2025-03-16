import React, { useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken, token } = useContext(StoreContext);

  const [currState, setCurState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const respose = await axios.post(newUrl, data);
    if (respose.data.success) {
      setToken(respose.data.token);
      localStorage.setItem("token", respose.data.token);
      setShowLogin(false);
     
    } else {
      alert(respose.data.message);
    }
  };
  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt="close image"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <>
              <input
                type="email"
                placeholder=" Your Email"
                required
                name="email"
                onChange={onChangeHandler}
                value={data.email}
              />
              <input
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                type="password"
                placeholder=" Your Password"
                required
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder=" Your Name"
                required
                name="name"
                onChange={onChangeHandler}
                value={data.name}
              />
              <input
                type="email"
                placeholder=" Your Email"
                required
                name="email"
                onChange={onChangeHandler}
                value={data.email}
              />
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={onChangeHandler}
                value={data.password}
              />
            </>
          )}
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;

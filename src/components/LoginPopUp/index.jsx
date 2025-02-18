import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
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
              {" "}
              <input type="text" placeholder=" Your Name" required />
              <input type="email" placeholder=" Your Email" required />
            </>
          ) : (
            <>
              <input type="text" placeholder=" Your Name" required />
              <input type="email" placeholder=" Your Email" required />
              <input type="password" placeholder="Password" required />
            </>
          )}
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login"?   <p>Create a new account? <span onClick={()=>setCurState('Sign Up')}>Click Here</span></p>:<p>Already have an account? <span onClick={()=>setCurState('Login')}>Login Here</span></p>}
     
        
      </form>
    </div>
  );
};

export default LoginPopUp;

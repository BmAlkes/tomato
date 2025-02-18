import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, ipsa
            quasi reiciendis consequatur cumque tenetur odio molestiae amet
            placeat, error commodi aspernatur eveniet doloribus nulla nobis
            quas. Illo, tempora. Voluptates.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>054-000000</li>
            <li>info@dotvizion.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-content-bottom">
        <div className="right">
          <a href="https://www.dotvizion.com" target="_blank">

          <img src="https://res.cloudinary.com/landingpage2/image/upload/v1739727604/5000x5000-3-removebg-preview_qvlhb9.webp" alt="" />
          </a>
        </div>
        <div className="left">
          <p>All rights reserved Dotvizion</p>
          <p><a href="https://dotvizion.com" target="_blank">Dotvizion</a> Solutions for web applications – ©2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

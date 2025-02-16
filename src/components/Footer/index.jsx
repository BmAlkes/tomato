import React from 'react'
import'./Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
    
        <div className='footer-section'>
            <div className='footer-image'>
                <a href="https://www.dotvizion.com">

                <img src="https://res.cloudinary.com/landingpage2/image/upload/v1739727604/5000x5000-3-removebg-preview_qvlhb9.webp" alt="logo dotvizion" />
                </a>
            </div>
            <div className='footer-credit'>
                <p>All rights reserved Dotvizion</p>
                <p><a href="https://www.dotvizion.com" target="_blank">Dotvizion</a> Solutions for web applications – ©2023</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
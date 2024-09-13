import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        {/* copyright */}
        <div className='footer-cpyright'>
            <p className='cpy'>© 2024 Aditya26.netlify.app</p>
        </div>
        {/* Social */}
         <ul className='footer-social-media'>
            <li>
                <a href='https://github.com/Adit0026/Adit0026' target='_blank' rel="noreferrer">
                <i class="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
            <a href='https://www.instagram.com/adit_saini__26/' target='_blank' rel="noreferrer">
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
            <li>
            <a href='https://www.linkedin.com/in/aditya-0760bb234/' target="_blank" rel="noreferrer">
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>
         </ul>
    </footer>
  )
}

export default Footer
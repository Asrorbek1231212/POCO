import React from 'react'
import "./Footer.css"
import "./Footermedia.css"
import {BiLogoFacebook} from "react-icons/bi"
import {TiSocialInstagram} from "react-icons/ti"
import {BsTwitter} from "react-icons/bs"
function Footer() {
    let app = [
        {

        },
        {

        },
        {

        },
       
    ]
    let footerLi = ["POCO F5 Series", "POCO X5 Series", "POCO M5", "POCO F4", "POCO Watch"] 
  return (
    <div className='Footer'>
        <div className="Footer__nav">
            <div className="footer__box__titel">
            <h2>LET'S STAY IN TOUCH</h2>
            <p>Get updates on sales specials and more</p>
            </div>
            <div className='footer__inp'>
            Enter Email Address
            </div>
            <div className="footer__box__titel1 til">
            <h2>FOLLOW POCO</h2>
            <p>We want to hear from you!</p>
            </div>
            <div className='footer__icons'>
                <BiLogoFacebook/>
                <TiSocialInstagram/>
                <BsTwitter/>
            </div>
        </div>
        <div className="footer__navi__pasti">
          <ul>
            <h3 className='h22'>LEARN MORE</h3>
            <li className='li__footer'>POCO F5 Series</li>
            <li className='li__footer'>POCO X5 Series</li>
            <li className='li__footer'>POCO M5</li>
            <li className='li__footer'>POCO F4</li>
            <li className='li__footer'>POCO Watch</li>
          </ul>
          <ul>
            <h3 className='h22'>SUPPORT</h3>
            <li className='li__footer'>Contact Us</li>
            <li className='li__footer'>WARRANTY</li>
          </ul>
          <ul>
            <h3 className='h22'>Abouts us</h3>
            <li className='li__footer'>POCO</li>
            <li className='li__footer'>User Agreement</li>
            <li className='li__footer'>Privacy Policy</li>
            <li className='li__footer'>POCO Blog</li>
          </ul>
          <ul>
            <h3 className='h22'>FOLLOW POCO</h3>
            <li className='li__footer'><BiLogoFacebook/> Facebook</li>
            <li className='li__footer'><TiSocialInstagram/> Instagram</li>
            <li className='li__footer'><BsTwitter/> Twitter</li>
            <li className='li__footer'>More Regions</li>
          </ul>
        </div>
    </div>
  )
}




export default Footer
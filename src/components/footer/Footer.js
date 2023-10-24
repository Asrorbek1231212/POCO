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
          <ul className='abuu'>
            <h3 className='h22'>LEARN MORE</h3>
            <div className='bocloclak'></div>
            <li className='li__footer'><span>POCO F5 Series</span> <h2 className='vaku'>SUPPORT</h2></li>
            <div className='bocloclak'></div>
            <li className='li__footer'><span>POCO X5 Series</span> <h2 className='vaku'>Abouts us</h2></li>
            <div className='bocloclak'></div>
            <li className='li__footer'><span>POCO M5 </span><h2 className='vaku'>FOLLOW POCO</h2></li>
            <div className='bocloclak'></div>
            <li className='li__footer'><span>POCO F4 </span><h2 className='vaku'>Abouts us</h2></li>
            <div className='bocloclak'></div>
            <li className='li__footer'><span>POCO Watch</span></li>
           
            
          </ul>
          <ul className='abuu1'>
            <h3 className='h22'>SUPPORT</h3>
            <li className='li__footer'>Contact Us</li>
            <li className='li__footer'>WARRANTY</li>
          </ul>
          <ul className='abuu1'>
            <h3 className='h22'>Abouts us</h3>
            <li className='li__footer'>POCO</li>
            <li className='li__footer'>User Agreement</li>
            <li className='li__footer'>Privacy Policy</li>
            <li className='li__footer'>POCO Blog</li>
          </ul>
          <ul className='abuu1'>
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
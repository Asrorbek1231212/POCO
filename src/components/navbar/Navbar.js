import React from 'react'
import "./Navbar.css"
import "./Navbarmedia.css"
import {HiBars3} from "react-icons/hi2"
import rasm from "../../assets/POCO.png"
function Navbar() {
    let arr = ["GLOBAL", "|", "POCO CMMUNITY",]
    let arr2 = ["SING IN", "I", "SING UP"] 
  return (
    <div className='Navbar'>
        <img src={rasm} alt="" />
        <ul className='ul__collection'>
            {
                arr.map((i, inx)=><li key={inx}>{i}</li>)
            }
        </ul>
        <ul className='ul__collection__2'>
           {
            arr2.map((i, inx)=><li key={inx}>{i}</li>)
           }
        </ul>
        <HiBars3 className='navbar__icons'/>
    </div>
  )
}

export default Navbar
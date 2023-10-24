import React from 'react'
import "./Baner.css"
import "./Banermedia.css"
import {HiOutlineBars4} from "react-icons/hi2"
function Baner() {
    let ulCollection = ["POCO F5  Series", "POCO X5", "Series 5", "POCO M5", "S5 POCO", "M5 POCO", "F4 POCO", "X4 GTALL", "PRODUCTS"] 
  return (
    <div className='Baner'>
        <ul className='ul__colect'>
            {
                ulCollection.map((i, inx)=><li className='li__colection' key={inx}>{i}</li>)
              
            }
            <HiOutlineBars4 className='icons__nav'/>
        </ul>
    </div>
  )
}
//       
export default Baner
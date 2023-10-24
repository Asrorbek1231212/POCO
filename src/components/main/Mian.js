import React from 'react'
import Navbar from '../navbar/Navbar'
import Baner from '../baner/Baner'
import Shop from '../shop/Shop'
import { DATA } from '../../static/inedx'
import Footer from '../footer/Footer'
function Mian() {
  return (
    <div>
        <Navbar/>
        <Baner/>
        {
          DATA.map((obkejt, inx)=><Shop key={inx}
          {...obkejt}
          />)
        }
        <Footer/>
        
    </div>
  )
}

export default Mian
import React from 'react'
import "./Shop.css"
import "./Shopmedia.css"
import ra1 from "../../assets/1.jpg"
import ra2 from "../../assets/2.jpg"
import ra3 from "../../assets/3.jpg"
function Shop({bg,title, url, ur1, hait}) {
    let arrshop = [
        {
            im: url
        },
        {
           im: ur1
        },
        {
            im: url
        }
    ]
  return (
    <>
        <div style={{background:bg}}  className='Shop'>
            <h1>{title}</h1>
            <div className='shop__parant'>
               {
                arrshop?.map((Shop, inx) => <div key={inx} className='box'>
                    <img className='img__shop' style={{height: hait}} src={Shop.im} alt="" />
                </div>)
               }
            </div>
    </div>
    </>
  )
}

export default Shop
import React from 'react'
import "./Product.css"
function Product({data}) {
  return (
    <div className='Product'>
       {
        data.map((e) => <div key={e.id} className='box'>
            <h1>{e.sinifraqami}</h1>
            <h4>{e.sinifRahbar}</h4>
        </div>)
        
       }
    </div>
  )
}

export default Product
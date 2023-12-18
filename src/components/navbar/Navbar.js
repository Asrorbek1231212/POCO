import React, {useState, useEffect} from 'react'
import "./Navbar.css"


function Navbar({data}) {
  const [value, setValue] = useState("")
  const [searchData, setsearchData] = useState([])
  useEffect(()=>{
    if(value.trim()){
      let filterdata = data.filter(el => el.sinifraqami.toLowerCase().includes(value.toLowerCase().trim()))
      setsearchData(filterdata)
    }else{
      setsearchData([])
    }
   
  },[value])
  
  return (
    <div className='Navbar'>
      <br />
        <h2>33 - Maktab</h2>
        <div className='nav-sorch'>
          <input type="text" 
          placeholder='sinfin qidirish'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
           {
    value.trim() && <div className="nav__search-drop">
      {
        !searchData.length && <p>Natija</p> 
      }
      {
      searchData?.slice(0, 4)?.map((el) => <div to={`/product/${el.id}`} key={el.id} className='nav__search-item'>
        <h3>{el.sinifraqami}</h3>
        <div>
        </div>
      </div>)
      
    }
    {
      !searchData.length && <h2>Natija yoq</h2> 
    }
    </div> 
  }
        </div>
    </div>
  )
}

export default Navbar
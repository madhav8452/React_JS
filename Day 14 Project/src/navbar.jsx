import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbarcode(){
  let [toggle, setToggle] = useState(true)

  let handletoggle = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className='border border-black w-full h-[100px] bg-black flex justify-between'>
        <div className='w-[200px] h-full flex justify-center items-center'>
          <img src="https://www.district.in/assets/images/logo/district-logo-light.svg" alt="" />
        </div>
        <div className='w-[15%] h-full flex justify-center items-center'>
          <Link to={toggle ? '/event' : '/'}><button className='border border-white text-white w-[100px] h-[40px] rounded-md cursor-pointer hover:bg-white hover:text-black' onClick={handletoggle}>{toggle ? 'Event' : 'Form'}</button></Link>
        </div>
    </div>
  )
}

export default Navbarcode

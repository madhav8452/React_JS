import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function NavbarCode(){
  let [scrolled, setScrolled] = useState(false)
  let searchRef = useRef(null)

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      setScrolled(window.scrollY > 0)
    })

    window.removeEventListener("scroll", ()=>{
      setScrolled(window.scrollY == 0)
    })
  }, [])

  let handleSearch = ()=>{
    searchRef.current.style.top = '35%'
    searchRef.current.style.opacity = '1'
    searchRef.current.style.visibility = 'visible'
  }

  let handleClose = ()=>{
    searchRef.current.style.top = '30%'
    searchRef.current.style.opacity = '0'
    searchRef.current.style.visibility = 'hidden'
  }

  return (
    <div className={`w-[100%] h-[100px] flex justify-between items-center fixed cursor-pointer z-1 hover:bg-white hover:text-black group duration-300 ${scrolled ? 'bg-white text-black duration-300' : 'bg-transparent text-white'}`}>
        <div className='w-[20%] h-[100%] flex justify-center items-center'>
            <img src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR_Cosmetics_Logo.png?v=1734589067&width=280" alt=""  className={`w-[150px] group-hover:flex duration-300 ${ scrolled ? 'flex duration-300' : 'hidden'}`}/>
            <img src="//www.sugarcosmetics.com/cdn/shop/files/Sugal_white_logo_horizontal_orientation.png?v=1614336338&width=2749" alt="" className={`w-[150px] group-hover:hidden duration-300 ${ scrolled ? 'hidden duration-300' : 'flex'}`}/>
        </div>
        <ul className='w-[60%] h-[100%] flex justify-evenly items-center text-sm' id='headerUL'>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>NEW</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>LIPS</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>EYES</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>FACE</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>NAILS</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>SKIN</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>OFFERS</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>GIFTING</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>SUGAR POP</li>
            <li className='cursor-pointer relative tracking-widest group before:content before:w-[0] before:h-[2px] before:bg-black before:absolute before:bottom-[-5px] before:left-0 hover:group-hover:before:w-[100%] before:duration-500'>SUGAR PLAY</li>
        </ul>
        <div className='w-[20%] h-[100%] flex justify-center items-center'>
          <div className='flex justify-evenly items-center w-[80%] h-[100%] text-lg'>
            <i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={handleSearch}></i>
            <Link to={'/signup'}><i className="fa-solid fa-user cursor-pointer"></i></Link>
            <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
          </div>
        </div>

        <div className='border border-white w-[30%] h-[40px] bg-white flex justify-between items-center rounded overflow-hidden absolute top-[30px] left-[30%] opacity-[0] invisible duration-300 group-hover:bg-black' ref={searchRef}>
          <i className="fa-solid fa-magnifying-glass w-[40px] h-[100%] text-black cursor-pointer group-hover:text-white" style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}></i>
          <input type="text" placeholder='Search For Lipsticks, Eyeliner, Foundations' className='w-[350px] h-[40px] rounded text-black text-xs font-bold outline-none placeholder:text-black group-hover:placeholder:text-white group-hover:text-white'/>
          <i className="fa-solid fa-xmark w-[40px] h-[50px] cursor-pointer text-black group-hover:text-white" style={{display : 'flex', justifyContent : 'center', alignItems : 'center'}} id='close' onClick={handleClose}></i>
        </div>
    </div>
  )
}

export default NavbarCode

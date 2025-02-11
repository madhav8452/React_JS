import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Event_Product(){
    // GET DATA

    let [data, setData] = useState(JSON.parse(localStorage.getItem("Product")) || [])

    // DELETE DATA

    let handleDelete = (id)=>{
        let deleted = data.filter((el)=>{
            return el.id != id
        })
        setData(deleted)
        localStorage.setItem("Product", JSON.stringify(deleted))
    }
    
  return (
    <div className='w-full h-screen overflow-auto grid grid-cols-4 p-10 gap-10 bg-no-repeat bg-center bg-cover' style={{backgroundImage : 'URL(https://www.district.in/assets/images/background-placeholder.png)'}}>
        {data.map((el)=>(
            <div className='border border-white w-full h-[600px] bg-white rounded-xl overflow-hidden' key={el.id}>
                <div className='w-full h-auto'>
                    <img src={el.image} alt="" />
                </div>
                <div className='w-full h-auto p-5'>
                    <p className='font-bold mb-3'>{el.title}</p>
                    <p className='font-bold mb-5'>₹ {el.price}</p>
                    <div className='w-full h-[40px] flex justify-between items-center'>
                        <button className='border-2 border-black w-[45%] h-full rounded cursor-pointer bg-black text-white hover:bg-white hover:text-black'><Link to={`/edit/${el.id}`}>Edit</Link></button>
                        <button className='border-2 border-[brown] w-[45%] h-full rounded cursor-pointer bg-[brown] text-white hover:bg-white hover:text-[brown]' onClick={()=>{handleDelete(el.id)}}>Delete</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Event_Product

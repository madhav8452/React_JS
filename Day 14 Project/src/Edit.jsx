import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editevent(){
  let {id} = useParams()
  let navigate = useNavigate()
  let [data, setData] = useState(JSON.parse(localStorage.getItem("Product")) || [])
  let [state, setState] = useState({
    id : '',
    title : '',
    price : '',
    image : ''
  })

  useEffect(()=>{
    let idData = data.find((el)=>{
      if(el.id == id){
        return el
      }
    })
    setState(idData)
  }, [])

  let handleChange = (e)=>{
    let {name, value} = e.target

    setState({...state, [name] : value})
  }

  let handleSubmit = (e)=>{
    e.preventDefault()

    let chagedState = data.map((el)=>{
      if(el.id == id){
        return state
      }
      else{
        return el
      }
    })

    setData(chagedState)
    navigate('/event')
  }

  useEffect(()=>{
    localStorage.setItem("Product", JSON.stringify(data))
  }, [data])

  return (
    <div className='w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover' style={{backgroundImage : 'URL(https://www.district.in/assets/images/background-placeholder.png)'}}>
        <form action="" className='border border-black w-[450px] h-[600px] rounded-2xl bg-black text-white flex flex-col p-10' onSubmit={handleSubmit}>
            <p className='text-4xl mt-5 mb-10'>Edit Event</p>
            <label htmlFor="" className='mb-2'>Title</label>
            <input type="text" placeholder='Enter Title' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='title' value={state.title} onChange={handleChange}/>
            <label htmlFor="" className='mb-2'>Price</label>
            <input type="text" placeholder='Enter Price' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='price' value={state.price} onChange={handleChange}/>
            <label htmlFor="" className='mb-2'>Image Source</label>
            <input type="text" placeholder='Enter Image source' className='border border-white w-full h-[40px] ps-5 rounded-md mb-5' name='image' value={state.image} onChange={handleChange}/>
            <input type="Submit" className='border border-white rounded-md w-[150px] h-[40px] cursor-pointer hover:bg-white hover:text-black mt-10'/>
        </form>
    </div>
  )
}

export default Editevent

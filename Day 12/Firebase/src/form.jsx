import React, { useEffect, useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { db } from './firebase';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function FormData(){
    let [state, setState] = useState({
        title : '',
        description : ''
    })

    let notify = ()=>{
        toast.success('Task Added', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    // ADD DATA

    let Usercollection = collection(db, 'Users')

    let handleChange = (e)=>{
        let {name, value} = e.target
        setState({...state, [name] : value})
    }

    let handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            await addDoc(Usercollection, state)
            setState({
                title : '',
                description : ''
            })   
            notify()
            window.location.reload()
        }
        catch(error){
            console.log("Data not post", error)
        }
    }

    // GET DATA

    let [data, setData] = useState([])

    useEffect(()=>{
        let userData = async()=>{
            try{
                let a = await getDocs(Usercollection)
                let b = a.docs.map((el)=>{
                    return {id : el.id, ...el.data()}
                })
                setData(b)
            }
            catch(error){
                console.log("Error in Fetch data:", error)
            }
        }

        userData()
    },[])

    // DELETE DATA

    let handleDelete = async(id)=>{
        try{
            let docRef = doc(Usercollection, id)
            await deleteDoc(docRef)
            window.location.reload()
        }
        catch(error){
            console.log("Delete Error", error)
        }
    }

  return (
    <>
    <div className='border border-black w-full h-screen flex'>
        <form action="" className='p-20 flex flex-col w-[50%] border border-black h-full' onSubmit={handleSubmit}>
            <h1 className='text-xl font-bold'>ADD TASK</h1>
            <label htmlFor="" className='mt-5 font-bold'>Title</label>
            <input type="text" placeholder='Enter Title' className='border border-black w-[80%] h-[40px] rounded ps-5' value={state.title} name='title' onChange={handleChange}/>
            <label htmlFor="" className='mt-5 font-bold'>Description</label>
            <input type="text" placeholder='Enter Description' className='border border-black w-[80%] h-[40px] rounded ps-5' value={state.description} name='description' onChange={handleChange}/>
            <input type="submit" className='border border-black mt-10 w-[100px] h-[40px] rounded cursor-pointer'/>
        </form>
        <div className='border border-black w-[50%] h-full flex flex-col gap-5 p-10 overflow-auto'>
            <p className='font-bold'>TODO LIST</p>
            {data.map((el)=>(
                <div className='border-2 border-[gray] p-10 rounded' key={el.id}>
                    <p className='text-sm'><span className='font-bold uppercase'>Title :-</span> {el.title}</p>
                    <p className='text-sm'><span className='font-bold uppercase'>Description :-</span> {el.description}</p>
                    <div className='mt-5'>
                        <Link to={`/editData/${el.id}`}><button className='border border-black w-[100px] h-[40px] rounded me-5 cursor-pointer'>Edit</button></Link>
                        <button className='border border-black w-[100px] h-[40px] rounded me-5 cursor-pointer' onClick={()=>{handleDelete(el.id)}}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default FormData

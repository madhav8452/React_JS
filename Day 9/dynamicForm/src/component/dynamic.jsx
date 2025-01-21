import { useState } from "react"
import "./dynamic.css"

function DynamicForm(){
    let [state, setState] = useState({
        name : '',
        email : '',
        education : ['']
    })

    let AddField = ()=>{
        setState({
            ...state,
            education : [...state.education, '']
        })
    }

    
    let handleChange = (e)=>{
        let {name, value} = e.target
        if(isNaN(name)){
            setState({...state, [name] : value})
        }
        else{
            let arr = [...state.education]
            arr[name] = value
            setState({...state, education : arr})
        }
    }

    let handleDelete = (e)=>{
        let {name} = e.target

        let deleteEducation = state.education.filter((el, index)=>{
            return index != name
        })
        console.log(deleteEducation)
        setState({...state, education : deleteEducation})
    }

    console.log(state.education)

    return (
        <form action="" className="w-[30%] h-[90%] rounded-xl shadow-lg shadow-[black] bg-white flex flex-col overflow-auto ps-10 pe-10">
            <h1 className="text-4xl font-bold mt-10 mb-5 flex justify-center">Form</h1>
            <label htmlFor="" className="font-bold mt-3">Name</label>
            <input type="text" placeholder="Enter Name" className="border border-black w-[100%] h-[40px] rounded ps-5" name="name" onChange={handleChange}/>
            <label htmlFor="" className="font-bold mt-3">Email</label>
            <input type="text" placeholder="Enter Email" className="border border-black w-[100%] h-[40px] rounded ps-5" name="email" onChange={handleChange}/>
            <label htmlFor="" className="font-bold mt-3 flex justify-between items-center">Education <span className="w-[100px] h-[30px] flex justify-center items-center bg-[skyblue] rounded mb-2 cursor-pointer hover:border hover:border-black" onClick={AddField}>Add Field</span></label>
            <div className="w-[100%] h-[230px] overflow-auto">
                {state.education.map((el,Index)=>{
                   return <div className="w-[100%] flex justify-between items-center mt-3">
                            <input type="text" placeholder="Enter Education" name={Index} className="border border-black w-[75%] h-[40px] rounded ps-5" onChange={handleChange}/>
                            <input type="button" name={Index} onClick={handleDelete} className="border border-[brown] text-[brown] w-[22%] h-[40px] cursor-pointer rounded hover:bg-[brown] hover:text-white" value="Delete"/>
                        </div>
                })}
            </div>
            <input type="submit" className="border border-black mt-10 w-[150px] h-[40px] rounded bg-black text-white cursor-pointer"/>
        </form>
    )
}

export default DynamicForm
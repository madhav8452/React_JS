import { useState } from 'react'
import './App.css'
import Signup from "./component/signup"
import Login from "./component/login"

function App() {
  let [swi,setSwi] = useState(true)
  
  let [state, setState] = useState({
    username : '',
    email : '',
    password : ''
  })

  let [arr,setArr] = useState([])

  let toggle = ()=>{
    setSwi(!swi)
  }

  let handleChange = (e)=>{
    setState({...state,[e.target.name] : e.target.value})
  }
  
  let handleSubmit = (e)=>{
    e.preventDefault()
    setArr([...arr,state])
  }

  return (
    <div className='body'>
      {swi == true 
      ?  <Signup toggle={toggle} handleChange={handleChange} handleSubmit={handleSubmit}></Signup>
      : <Login toggle={toggle} arr={arr}></Login>
      }
    </div>
  )
}

export default App

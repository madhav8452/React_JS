import { useState } from "react"
import "./login.css"
import "./notification.css"

function Login(prop){
    let [login, setLogin] = useState({
        email : '',
        password : ''
    })
    
    let handleData = (e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    }
    
    let handleLogin = (e)=>{
        e.preventDefault()
        let foundUser = prop.arr.find((el)=>{
            return el.email == login.email
        })
      
        if (!foundUser) {
            error()
        } else if (foundUser.password != login.password) {
            info()
        } else {
          success()
        }
      }

    return (
        <div>
            <form action="" id="loginForm" onSubmit={handleLogin}>
                <h1>Login</h1>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Email" name="email" onChange={handleData}/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Password" name="password" onChange={handleData}/>
                <div>
                    <input type="submit" id="loginSubmit"/>
                    <p onClick={prop.toggle}>New User? Create Account</p>
                </div>
            </form>

            <div id="notification">
                <div id="success">
                    <i class="fa-solid fa-xmark" id="Sclose"></i>
                    <p class="head">Success</p>
                    <p class="msg">Login Successful</p>
                </div>
                <div id="error">
                    <i class="fa-solid fa-xmark" id="Eclose"></i>
                    <p class="head">Error</p>
                    <p class="msg">Incorrect Email ID</p>
                </div>
                <div id="info">
                    <i class="fa-solid fa-xmark" id="Iclose"></i>
                    <p class="head">Error</p>
                    <p class="msg">Incorrect Password</p>
                </div>
            </div>
        </div>
    )
}

export default Login
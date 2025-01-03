import { useState } from "react"
import "./component.css"

function Form(){
    let [state, setState] = useState(true)

    let toggle = ()=>{
        setState(!state)
    }

    return (
        <div>
            {state == true ?
            <div className="login">
                <h1>Log In</h1>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Username"/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Email"/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Password"/>
                <input type="Submit" id="submit"/>
                <p onClick={toggle}>Already have an Account? Log In</p>
            </div>
            : <div className="signup">
                <h1>Sign Up</h1>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Username"/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Email"/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Password"/>
                <input type="Submit" id="submit"/>
                <p onClick={toggle}>New user? Create Account</p>
            </div>
            }
        </div>
    )
}

export default Form
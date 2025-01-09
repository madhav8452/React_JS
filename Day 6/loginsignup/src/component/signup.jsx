import "./signup.css"

function Signup(prop){
    return <form action="" id="signupForm" onSubmit={prop.handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="">Username</label>
        <input type="text" placeholder="Enter Username" name="username" onChange={prop.handleChange}/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter Email" name="email" onChange={prop.handleChange}/>
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Enter Password" name="password" onChange={prop.handleChange}/>
        <div>
            <input type="submit" id="signupSubmit"/>
            <p onClick={prop.toggle}>Already have a account? Login</p>
        </div>
    </form>
}

export default Signup
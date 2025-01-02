import "./navbar.css"
import logo from "../assets/logo.svg"

function Navbar(){
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="inputbar">
                <div>
                    <input type="text" placeholder="Search Products & Brands"/>
                    <button><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                </div>
            </div>
            <div className="icon">
                <p>Cart <i class="fa-solid fa-cart-shopping"></i></p>
                <p>Sign In <i class="fa-solid fa-user"></i></p>
            </div>
        </header>
    )
}

export default Navbar
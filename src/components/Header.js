import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const loggedInUser = () => {
    return false
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/" style = {{textDecoration:"none", color:"white"}}>
                    <li >Home</li>
                    </Link>
                    <Link to="/about" style = {{textDecoration:"none", color:"white"}}>
                    <li>About</li>
                    </Link>
                    <Link to="/contact" style = {{textDecoration:"none", color:"white"}}>
                    <li>Contact</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>

            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            ):(
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
            )}

        </div>
    )
}

export default Header;
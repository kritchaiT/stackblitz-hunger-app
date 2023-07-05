import React, { useState } from "react"
import "./header.css"
import { FiMenu, FiX, MdDarkMode, MdOutlineDarkMode } from "react-icons/fi";
import { NavLink,useNavigate } from "react-router-dom";

function Header({user}) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) /*switch click and unclick*/
    const closeMobileMenu = () => setClick(false)
    const [darkMode, setDarkmode] = useState(false)
    const navigate = useNavigate()
    const logout = () => {
        alert("you will be loged out?")
    }
    console.log(user == "")
    // (user = "") ?(<img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/check-2.png" alt="user-profile" width="100px" height="auto" onClick={logout} />):(<h1>{user}</h1>)
    
    return(<div className="header">
        <div className="logo">
            <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/Logo_hunger!.png" alt="Logo main" />
            <div className="texts">
                <h2>HUNGER!</h2>
                <p>Map and search</p>
            </div>
        </div>
        <div className="profile-container" margin-right="40px" padding-right="50px" >
            {}
        </div>
    </div>)
}

export default Header;
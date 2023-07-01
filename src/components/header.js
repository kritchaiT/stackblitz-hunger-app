import React, { useState } from "react"
import "./header.css"
import { FiMenu, FiX, MdDarkMode, MdOutlineDarkMode } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Header(props) {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click) /*switch click and unclick*/
    const closeMobileMenu = () => setClick(false)
    const [darkMode, setDarkmode] = useState(false)

    return(<div className="header">
        <div className="logo">
            <img src="/Logo_hunger!.png" alt="Logo main" />
            <div className="texts">
                <h2>HUNGER!</h2>
                <p>Map and search</p>
            </div>
        </div>
        <div className="profile-container" margin-right="40px" padding-right="50px" >
            <img src="./check-2.png" alt="user-profile" width="100px" height="auto" />
        </div>
    </div>)
}

export default Header;
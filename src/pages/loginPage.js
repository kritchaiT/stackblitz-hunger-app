import React, { useState, useEffect } from "react"
import "./loginPage.css"
import {Navlink,useNavigate} from "react-router-dom"

export default function LoginPage({setUser}) {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  const routeChange = (username) => {
    setUser(username)
    navigate("/map")
  }
  console.log(username)
  return (<div className="main">
    <div className="login-wrapper">
        <img src="https://raw.githubusercontent.com/kritchaiT/stackblitz-hunger-app/main/public/Logo_hunger!.png" alt="logo" id="logo"/>
        <div className="input">
        <label htmlFor="username">username</label>
        <input type="text" placeHolder="username" className="username" onChange={(e) => {setUsername(e.target.value)}} />
        </div>
        <button onClick={routeChange}>GO GO HUNGER!</button>
    </div>
  </div>)
}
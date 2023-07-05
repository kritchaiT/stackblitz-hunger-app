import React, {useState} from "react";
import { Route, Routes } from "react-router-dom"
import "./style.css";
import MapComponent from "./components/map.js"
import Headers from "./components/header.js"
import ReviewBar from "./components/reviewBar.js"
import Restaurant from "./pages/restaurantPage.js"
import SearchComponents from "./components/searchComponents.js"
import ReviewPage from "./pages/reviewPage.js"
import ChatPage from "./pages/chatPage.js"
import LoginPage from "./pages/loginPage.js"
import ErrorPage from "./pages/error.js"

export default function App() {
  const [result, setResult] = useState([])
  const [selectRes, setSelectRes] = useState('Review') // this is the default name of selecting the restaurant to review
  const [user, setUser] = useState("")

  return (
    <div>
      <Headers user={user}/>
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} user={user}/>} />
        <Route path="/review" element={<><h1 className="rest">{selectRes}</h1>
        <ReviewPage setResult={setResult} setSelectRes={setSelectRes} result={result}/></>} />
        <Route path="/map" element={<MapComponent />}/>
        <Route path="/restaurant/icanteen" element={<Restaurant restaurantName="iCanteen" />}/>
        <Route path="/chat" element={<>
          <h1 className="rest">{selectRes}</h1>
          <ChatPage setResult={setResult} setSelectRes={setSelectRes} result={result}/>
        </>}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}
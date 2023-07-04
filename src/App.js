import React, {useState} from "react";
import "./style.css";
import MapComponent from "./components/map.js"
import Headers from "./components/header.js"
import ReviewBar from "./components/reviewBar.js"
import Restaurant from "./pages/restaurantPage.js"
import SearchComponents from "./components/searchComponents.js"
import ReviewPage from "./pages/reviewPage.js"
import ChatPage from "./pages/chatPage.js"

export default function App() {
  const [result, setResult] = useState([])
  const [selectRes, setSelectRes] = useState('Review') // this is the default name of selecting the restaurant to review
  console.log(selectRes)
  
  return (
    <div>
      <Headers />
      <h1 className="rest">{selectRes}</h1>
      {/* <MapComponent /> */}
      {/* <ReviewBar /> */}
       {/* <SearchComponents setResult={setResult} setSelectRes={setSelectRes} result={result}/> */}
      {/* <Restaurant restaurantName="iCanteen" /> */}
      <ReviewPage setResult={setResult} setSelectRes={setSelectRes} result={result}/>
      {/* <ChatPage setResult={setResult} setSelectRes={setSelectRes} result={result}/> */}
    </div>
  );
}